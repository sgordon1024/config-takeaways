import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

// A living flow field: particles drift along a slowly evolving Perlin-noise
// field and scatter from the cursor. Adapted from Steve's p5 "flow" sketches
// (the Zach Lieberman-style daily sketches) and recolored to the site's
// monochrome + green system. p5 is lazy-loaded so it never weighs on the rest
// of the page, the loop pauses when the hero scrolls offscreen, and reduced-
// motion users get a calm static field instead.

const NUM = 1200

export function FlowField() {
  const hostRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const host = hostRef.current
    if (!host) return

    let removed = false
    let instance: { remove: () => void } | null = null
    let io: IntersectionObserver | null = null
    const mouse = { x: -999, y: -999 }

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import('p5').then((mod: any) => {
      if (removed) return
      const P5 = mod.default

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sketch = (p: any) => {
        const parts: { x: number; y: number; vx: number; vy: number; life: number; green: boolean }[] = []
        let zoff = 0
        let running = true

        const respawn = (pt: (typeof parts)[number]) => {
          pt.x = p.random(p.width)
          pt.y = p.random(p.height)
          pt.vx = 0
          pt.vy = 0
          pt.life = p.random(60, 260)
        }

        p.setup = () => {
          p.createCanvas(host.clientWidth, host.clientHeight)
          p.pixelDensity(1)
          p.background(0)
          for (let i = 0; i < NUM; i++) {
            const pt = { x: 0, y: 0, vx: 0, vy: 0, life: 0, green: p.random() < 0.12 }
            respawn(pt)
            parts.push(pt)
          }
          io = new IntersectionObserver(([entry]) => { running = entry.isIntersecting }, { threshold: 0 })
          io.observe(host)
        }

        p.draw = () => {
          if (!running) return
          p.background(0, 0, 0, 16) // soft trailing fade
          zoff += 0.0024
          const scl = 0.0016
          for (const pt of parts) {
            const a = p.noise(pt.x * scl, pt.y * scl, zoff) * p.TWO_PI * 3
            let fx = Math.cos(a) * 0.6
            let fy = Math.sin(a) * 0.6
            const dx = pt.x - mouse.x
            const dy = pt.y - mouse.y
            const d2 = dx * dx + dy * dy
            if (d2 < 150 * 150) {
              const d = Math.sqrt(d2) || 1
              fx += (dx / d) * 1.8
              fy += (dy / d) * 1.8
            }
            pt.vx = p.constrain(pt.vx + fx, -3, 3)
            pt.vy = p.constrain(pt.vy + fy, -3, 3)
            pt.x += pt.vx
            pt.y += pt.vy
            pt.life -= 1
            if (pt.life < 0 || pt.x < 0 || pt.x > p.width || pt.y < 0 || pt.y > p.height) respawn(pt)
            if (pt.green) {
              p.stroke(6, 193, 103, 165)
              p.strokeWeight(1.7)
            } else {
              p.stroke(255, 255, 255, 38)
              p.strokeWeight(1.2)
            }
            p.point(pt.x, pt.y)
          }
        }

        p.windowResized = () => {
          p.resizeCanvas(host.clientWidth, host.clientHeight)
          p.background(0)
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

  // Reduced-motion (and pre-hydration) fallback: a calm static glow.
  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full"
      style={
        reduce
          ? { background: 'radial-gradient(60% 60% at 75% 35%, rgba(6,193,103,0.16), transparent 70%)' }
          : undefined
      }
    />
  )
}
