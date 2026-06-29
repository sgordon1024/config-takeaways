import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

// "Stardust" — a 3D Aizawa strange attractor rendered as a glowing particle
// galaxy (WEBGL, additive blending). Adapted from Steve's p5 "attractor" sketch
// and recolored to the site's monochrome + green system: slow particles read as
// cool greys, fast ones glow green, additive cores blow out to white.
//
// Tuned as a hero backdrop: it sits to the right of the headline, auto-rotates,
// and parallaxes / breathes from the mouse (no drag-orbit or wheel-zoom, so it
// never fights text selection or page scroll). p5 is lazy-loaded, the loop
// pauses offscreen, and reduced-motion gets a fully-formed static galaxy.

const NUM = 30000
const SUB_STEPS = 2
const DT = 0.012
const WORLD_SCALE = 198
const RESPAWN = 6.0
const AZ = { a: 0.95, b: 0.7, c: 0.6, d: 3.5, e: 0.25, f: 0.1 }

export function Stardust() {
  const hostRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let removed = false
    let instance: { remove: () => void } | null = null
    let io: IntersectionObserver | null = null
    const mouse = { x: 0.5, y: 0.5, active: false }

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX / Math.max(window.innerWidth, 1)
      mouse.y = e.clientY / Math.max(window.innerHeight, 1)
      mouse.active = true
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import('p5').then((mod: any) => {
      if (removed) return
      const P5 = mod.default

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sketch = (p: any) => {
        const px = new Float32Array(NUM)
        const py = new Float32Array(NUM)
        const pz = new Float32Array(NUM)
        const spd = new Float32Array(NUM)
        let liveA = AZ.a
        let liveB = AZ.b
        let autoAngle = 0
        let driftT = 0
        const k1 = [0, 0, 0], k2 = [0, 0, 0], k3 = [0, 0, 0], k4 = [0, 0, 0]

        const aizawa = (x: number, y: number, z: number, out: number[]) => {
          const zb = z - liveB
          out[0] = zb * x - AZ.d * y
          out[1] = AZ.d * x + zb * y
          out[2] = AZ.c + liveA * z - (z * z * z) / 3 - (x * x + y * y) * (1 + AZ.e * z) + AZ.f * z * x * x * x
        }
        const seed = (i: number) => {
          px[i] = (Math.random() - 0.5) * 1.6
          py[i] = (Math.random() - 0.5) * 1.6
          pz[i] = (Math.random() - 0.5) * 0.8 + 0.2
          spd[i] = 0
        }
        const integrate = (h: number) => {
          for (let i = 0; i < NUM; i++) {
            const x = px[i], y = py[i], z = pz[i]
            aizawa(x, y, z, k1)
            aizawa(x + 0.5 * h * k1[0], y + 0.5 * h * k1[1], z + 0.5 * h * k1[2], k2)
            aizawa(x + 0.5 * h * k2[0], y + 0.5 * h * k2[1], z + 0.5 * h * k2[2], k3)
            aizawa(x + h * k3[0], y + h * k3[1], z + h * k3[2], k4)
            const sixth = h / 6
            const vx = k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]
            const vy = k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]
            const vz = k1[2] + 2 * k2[2] + 2 * k3[2] + k4[2]
            const nx = x + sixth * vx, ny = y + sixth * vy, nz = z + sixth * vz
            const r2 = nx * nx + ny * ny + nz * nz
            if (!isFinite(r2) || r2 > RESPAWN * RESPAWN) { seed(i); continue }
            px[i] = nx; py[i] = ny; pz[i] = nz
            const sp = Math.sqrt(vx * vx + vy * vy + vz * vz) * 0.16
            spd[i] = isFinite(sp) ? sp : 0
          }
        }
        const render = () => {
          p.background(0)
          // slow floating drift so the galaxy wanders and the composition keeps changing
          const offX = p.width * 0.18 + Math.sin(driftT * 0.13) * p.width * 0.054
          const offY = -p.height * 0.02 + Math.cos(driftT * 0.17) * p.height * 0.072
          // subtle mouse parallax layered on top
          const par = (mouse.x - 0.5) * 0.5
          const tilt = -0.35 + (mouse.y - 0.5) * 0.35
          p.push()
          p.translate(offX, offY, 0)
          p.rotateY(autoAngle + par + Math.sin(driftT * 0.08) * 0.3)
          p.rotateX(tilt + Math.sin(driftT * 0.11) * 0.12)
          p.rotateZ(Math.sin(driftT * 0.05) * 0.12)
          p.scale(WORLD_SCALE)
          p.blendMode(p.ADD)
          p.strokeWeight(1.9)
          p.noFill()
          p.beginShape(p.POINTS)
          for (let i = 0; i < NUM; i++) {
            let t = spd[i]
            if (!isFinite(t)) t = 0
            t = p.constrain(t, 0, 1)
            let r, g, b
            if (t < 0.5) {
              const u = t / 0.5 // dark grey -> light grey
              r = p.lerp(36, 150, u); g = p.lerp(42, 158, u); b = p.lerp(48, 150, u)
            } else {
              const u = (t - 0.5) / 0.5 // grey -> green accent
              r = p.lerp(150, 70, u); g = p.lerp(158, 235, u); b = p.lerp(150, 120, u)
            }
            p.stroke(r, g, b, 135)
            p.vertex(px[i], py[i], pz[i])
          }
          p.endShape()
          p.blendMode(p.BLEND)
          p.pop()
        }

        p.setup = () => {
          p.createCanvas(host.clientWidth, host.clientHeight, p.WEBGL)
          p.pixelDensity(1)
          for (let i = 0; i < NUM; i++) seed(i)

          if (reduce) {
            // Develop the attractor shape, then hold a single static frame.
            const h = DT / SUB_STEPS
            for (let n = 0; n < 260; n++) integrate(h)
            autoAngle = 0.6
            p.noLoop()
            p.redraw()
            return
          }
          io = new IntersectionObserver(([e]) => { if (e.isIntersecting) p.loop(); else p.noLoop() }, { threshold: 0 })
          io.observe(host)
        }

        p.draw = () => {
          if (!reduce) {
            // mouse morphs the two most expressive params; eases home otherwise
            if (mouse.active) {
              liveA = p.lerp(liveA, 0.88 + mouse.x * 0.18, 0.05)
              liveB = p.lerp(liveB, 0.55 + mouse.y * 0.4, 0.05)
            } else {
              liveA = p.lerp(liveA, AZ.a, 0.02)
              liveB = p.lerp(liveB, AZ.b, 0.02)
            }
            const h = DT / SUB_STEPS
            for (let s = 0; s < SUB_STEPS; s++) integrate(h)
            autoAngle += 0.0016
            driftT += 0.016
          }
          render()
        }

        p.windowResized = () => {
          p.resizeCanvas(host.clientWidth, host.clientHeight)
          if (reduce) p.redraw()
        }
      }

      instance = new P5(sketch, host)
    })

    return () => {
      removed = true
      window.removeEventListener('pointermove', onMove)
      io?.disconnect()
      instance?.remove()
    }
  }, [reduce])

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full"
    />
  )
}
