import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'

// A live power-8 Mandelbulb, raymarched in a GLSL fragment shader. Adapted from
// Steve's p5 "fractal" sketch and recolored to the site's monochrome + green
// system (graphite body, white key light, green fresnel rim on near-black).
// Heavy by nature, so it's handled carefully: rendered into a 0.6x framebuffer
// and upscaled, the loop is paused whenever the section is offscreen, and
// reduced-motion users get a single static frame instead of the live orbit.

const VERT = `
precision highp float;
attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vUv;
uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;
void main() {
  vUv = aTexCoord;
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
}
`

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform vec2  uResolution;
uniform float uTime;
uniform vec3  uCamPos;
uniform vec3  uCamTarget;
uniform float uPower;

const int   MAX_STEPS = 80;
const int   ITERS     = 8;
const float MAX_DIST  = 12.0;
const float SURF_EPS  = 0.0006;
const vec3  GREEN     = vec3(0.024, 0.757, 0.404);

vec2 mandelbulbDE(vec3 pos, float power) {
  vec3 z = pos;
  float dr = 1.0;
  float r  = 0.0;
  float trap = 1e10;
  for (int i = 0; i < ITERS; i++) {
    r = length(z);
    if (r > 2.0) break;
    trap = min(trap, r);
    float rSafe = max(r, 1e-6);
    float theta = acos(clamp(z.z / rSafe, -1.0, 1.0));
    float phi   = atan(z.y, z.x);
    dr = pow(rSafe, power - 1.0) * power * dr + 1.0;
    float zr = pow(rSafe, power);
    theta *= power;
    phi   *= power;
    z = zr * vec3(sin(theta) * cos(phi), sin(theta) * sin(phi), cos(theta));
    z += pos;
  }
  float dist = 0.5 * log(max(r, 1e-6)) * r / max(dr, 1e-6);
  return vec2(dist, clamp(trap, 0.0, 1.0));
}

vec3 raymarch(vec3 ro, vec3 rd) {
  float t = 0.0;
  float trap = 1.0;
  float iterRatio = 1.0;
  for (int i = 0; i < MAX_STEPS; i++) {
    vec3 p = ro + rd * t;
    vec2 de = mandelbulbDE(p, uPower);
    trap = de.y;
    if (de.x < SURF_EPS) {
      iterRatio = float(i) / float(MAX_STEPS);
      return vec3(t, trap, iterRatio);
    }
    t += de.x;
    if (t > MAX_DIST) break;
  }
  return vec3(-1.0, trap, 1.0);
}

vec3 calcNormal(vec3 p) {
  vec2 e = vec2(0.0009, 0.0);
  float dx = mandelbulbDE(p + e.xyy, uPower).x - mandelbulbDE(p - e.xyy, uPower).x;
  float dy = mandelbulbDE(p + e.yxy, uPower).x - mandelbulbDE(p - e.yxy, uPower).x;
  float dz = mandelbulbDE(p + e.yyx, uPower).x - mandelbulbDE(p - e.yyx, uPower).x;
  vec3 n = vec3(dx, dy, dz);
  float l = length(n);
  return l > 1e-6 ? n / l : vec3(0.0, 1.0, 0.0);
}

void main() {
  vec2 uv = (vUv * 2.0 - 1.0);
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  uv.x *= aspect;

  vec3 ro = uCamPos;
  vec3 fwd = normalize(uCamTarget - ro);
  vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), fwd));
  vec3 up = cross(fwd, right);
  vec3 rd = normalize(fwd + uv.x * right + uv.y * up);

  vec3 hit = raymarch(ro, rd);

  // Near-black field with a faint central green glow so misses read intentional.
  vec3 bg = vec3(0.02);
  bg += GREEN * 0.05 * smoothstep(1.3, 0.0, length(uv));
  vec3 col = bg;

  if (hit.x > 0.0) {
    float t = hit.x;
    float trap = hit.y;
    float iterRatio = hit.z;

    vec3 p = ro + rd * t;
    vec3 n = calcNormal(p);

    vec3 keyDir  = normalize(vec3(cos(uTime * 0.3), 0.7, sin(uTime * 0.3)));
    vec3 fillDir = normalize(vec3(-0.5, 0.4, -0.6));
    float key  = max(dot(n, keyDir), 0.0);
    float fill = max(dot(n, fillDir), 0.0);

    float ao = 1.0 - iterRatio;
    ao = clamp(ao * ao, 0.0, 1.0);
    float distAO = clamp(1.0 - t / MAX_DIST, 0.0, 1.0);
    ao *= mix(0.55, 1.0, distAO);

    // Graphite body: greyscale driven by the orbit trap.
    vec3 base = vec3(mix(0.05, 0.78, trap));
    float fres = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);

    vec3 lit =
        base * (0.16 * ao)
      + base * key * ao
      + base * fill * 0.45 * ao;
    lit += fres * GREEN * 1.15; // green fresnel rim glow

    vec3 h = normalize(keyDir - rd);
    float spec = pow(max(dot(n, h), 0.0), 32.0);
    lit += spec * vec3(1.0) * ao * 0.55;

    col = lit;
    col = mix(col, bg, smoothstep(MAX_DIST * 0.7, MAX_DIST, t));
  }

  col = col / (col + vec3(1.0));
  col = pow(col, vec3(0.4545));
  float vig = smoothstep(1.5, 0.3, length(uv));
  col *= mix(0.7, 1.0, vig);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`

const BLIT = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTex;
void main() { gl_FragColor = texture2D(uTex, vUv); }
`

const RENDER_SCALE = 0.6

export function ShaderInterlude() {
  const hostRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let removed = false
    let instance: { remove: () => void } | null = null
    let io: IntersectionObserver | null = null
    let cleanupPtr = () => {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import('p5').then((mod: any) => {
      if (removed) return
      const P5 = mod.default

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sketch = (p: any) => {
        let bulb: any, blit: any, fb: any
        let az = 0.6
        let el = 0.3
        let dist = 3.0
        let target = 3.0
        let dragging = false
        let lmx = 0
        let lmy = 0
        let lastInteraction = -99999

        p.setup = () => {
          p.createCanvas(host.clientWidth, host.clientHeight, p.WEBGL)
          p.pixelDensity(1)
          p.noStroke()
          bulb = p.createShader(VERT, FRAG)
          blit = p.createShader(VERT, BLIT)
          fb = p.createFramebuffer({
            width: Math.max(1, Math.floor(p.width * RENDER_SCALE)),
            height: Math.max(1, Math.floor(p.height * RENDER_SCALE)),
            density: 1,
            textureFiltering: p.LINEAR,
          })

          io = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting && !reduce) p.loop()
              else p.noLoop()
            },
            { threshold: 0 },
          )
          io.observe(host)
          if (reduce) {
            p.noLoop()
            p.redraw()
          }
        }

        p.draw = () => {
          const tSec = reduce ? 2.0 : p.millis() * 0.001
          const idle = p.millis() - lastInteraction > 1600
          if (!reduce && idle && !dragging) az += 0.0022

          target = p.constrain(target, 1.45, 6.0)
          dist += (target - dist) * 0.12
          if (!isFinite(dist)) dist = 3.0
          el = p.constrain(el, -1.4, 1.4)

          const ce = Math.cos(el)
          const camPos = [dist * ce * Math.cos(az), dist * Math.sin(el), dist * ce * Math.sin(az)]
          const power = reduce ? 8.0 : 8.0 + Math.sin(tSec * 0.35) * 0.45

          fb.begin()
          p.clear()
          p.shader(bulb)
          bulb.setUniform('uResolution', [fb.width, fb.height])
          bulb.setUniform('uTime', tSec)
          bulb.setUniform('uCamPos', camPos)
          bulb.setUniform('uCamTarget', [0, 0, 0])
          bulb.setUniform('uPower', power)
          p.noStroke()
          p.rectMode(p.CENTER)
          p.rect(0, 0, fb.width, fb.height)
          fb.end()

          p.shader(blit)
          blit.setUniform('uTex', fb)
          p.noStroke()
          p.rectMode(p.CENTER)
          p.rect(0, 0, p.width, p.height)
        }

        // Drag to orbit. Pointer-down starts on the section; move/up on window
        // so a drag that leaves the canvas still tracks smoothly.
        const rel = (e: PointerEvent) => {
          const r = host.getBoundingClientRect()
          return { x: e.clientX - r.left, y: e.clientY - r.top }
        }
        const onDown = (e: PointerEvent) => {
          dragging = true
          const m = rel(e)
          lmx = m.x
          lmy = m.y
          lastInteraction = p.millis()
        }
        const onMove = (e: PointerEvent) => {
          if (!dragging) return
          const m = rel(e)
          az += (m.x - lmx) * 0.006
          el += (m.y - lmy) * 0.006
          lmx = m.x
          lmy = m.y
          lastInteraction = p.millis()
          if (reduce) p.redraw()
        }
        const onUp = () => {
          dragging = false
          lastInteraction = p.millis()
        }
        host.addEventListener('pointerdown', onDown)
        window.addEventListener('pointermove', onMove)
        window.addEventListener('pointerup', onUp)
        cleanupPtr = () => {
          host.removeEventListener('pointerdown', onDown)
          window.removeEventListener('pointermove', onMove)
          window.removeEventListener('pointerup', onUp)
        }

        p.windowResized = () => {
          p.resizeCanvas(host.clientWidth, host.clientHeight)
          if (fb) fb.resize(Math.max(1, Math.floor(p.width * RENDER_SCALE)), Math.max(1, Math.floor(p.height * RENDER_SCALE)))
          if (reduce) p.redraw()
        }
      }

      instance = new P5(sketch, host)
    })

    return () => {
      removed = true
      io?.disconnect()
      cleanupPtr()
      instance?.remove()
    }
  }, [reduce])

  return (
    <section id="shader" className="relative isolate min-h-[80vh] overflow-hidden bg-ink text-paper">
      <div
        ref={hostRef}
        className="absolute inset-0 cursor-grab touch-none active:cursor-grabbing [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      <div className="shell pointer-events-none relative z-10 flex min-h-[80vh] flex-col justify-end pb-16 pt-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Shaders, live</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-[16ch] font-extrabold tracking-tightest text-headline">Expression went native.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-lg text-white/65">
            A power-8 Mandelbulb, raymarched in a GPU shader and rendered live in your browser, a nod to the
            kind of expression Config 2026 brought into Figma. Drag to orbit.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
