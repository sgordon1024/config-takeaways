import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

// Reusable Mandelbulb background: a power-8 fractal raymarched in a GLSL shader,
// recolored to graphite body + green fresnel rim on near-black. Adapted from
// Steve's p5 "fractal" sketch. Used as a decorative backdrop (auto-orbit + subtle
// mouse parallax; no drag/wheel so it never fights scroll). p5 lazy-loaded,
// rendered into a reduced framebuffer, paused offscreen, static for reduced-motion.

const VERT = `
precision highp float;
attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vUv;
uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;
void main(){ vUv = aTexCoord; gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition,1.0); }
`

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uCamPos;
uniform vec3 uCamTarget;
uniform float uPower;
const int MAX_STEPS = 80;
const int ITERS = 8;
const float MAX_DIST = 12.0;
const float SURF_EPS = 0.0006;
const vec3 GREEN = vec3(0.024, 0.757, 0.404);
vec2 mandelbulbDE(vec3 pos, float power){
  vec3 z = pos; float dr = 1.0; float r = 0.0; float trap = 1e10;
  for (int i=0;i<ITERS;i++){
    r = length(z); if (r>2.0) break; trap = min(trap,r);
    float rSafe = max(r,1e-6);
    float theta = acos(clamp(z.z/rSafe,-1.0,1.0));
    float phi = atan(z.y,z.x);
    dr = pow(rSafe,power-1.0)*power*dr + 1.0;
    float zr = pow(rSafe,power); theta*=power; phi*=power;
    z = zr*vec3(sin(theta)*cos(phi), sin(theta)*sin(phi), cos(theta)); z += pos;
  }
  float dist = 0.5*log(max(r,1e-6))*r/max(dr,1e-6);
  return vec2(dist, clamp(trap,0.0,1.0));
}
vec3 raymarch(vec3 ro, vec3 rd){
  float t=0.0; float trap=1.0; float iterRatio=1.0;
  for (int i=0;i<MAX_STEPS;i++){
    vec3 p = ro+rd*t; vec2 de = mandelbulbDE(p,uPower); trap = de.y;
    if (de.x<SURF_EPS){ iterRatio=float(i)/float(MAX_STEPS); return vec3(t,trap,iterRatio); }
    t += de.x; if (t>MAX_DIST) break;
  }
  return vec3(-1.0,trap,1.0);
}
vec3 calcNormal(vec3 p){
  vec2 e = vec2(0.0009,0.0);
  float dx = mandelbulbDE(p+e.xyy,uPower).x - mandelbulbDE(p-e.xyy,uPower).x;
  float dy = mandelbulbDE(p+e.yxy,uPower).x - mandelbulbDE(p-e.yxy,uPower).x;
  float dz = mandelbulbDE(p+e.yyx,uPower).x - mandelbulbDE(p-e.yyx,uPower).x;
  vec3 n = vec3(dx,dy,dz); float l = length(n);
  return l>1e-6 ? n/l : vec3(0.0,1.0,0.0);
}
// Bright multicolor cosine palette (Inigo Quilez style).
vec3 palette(float t){
  return 0.5 + 0.5*cos(6.28318*(vec3(1.0)*t + vec3(0.0,0.33,0.67)));
}
void main(){
  vec2 uv = (vUv*2.0-1.0);
  float aspect = uResolution.x/max(uResolution.y,1.0); uv.x *= aspect;
  vec3 ro = uCamPos;
  vec3 fwd = normalize(uCamTarget-ro);
  vec3 right = normalize(cross(vec3(0.0,1.0,0.0),fwd));
  vec3 up = cross(fwd,right);
  vec3 rd = normalize(fwd + uv.x*right + uv.y*up);
  vec3 hit = raymarch(ro,rd);
  vec3 bg = vec3(0.015);
  bg += palette(uTime*0.05 + length(uv)*0.3) * 0.06 * smoothstep(1.4,0.0,length(uv));
  vec3 col = bg;
  if (hit.x>0.0){
    float t=hit.x; float trap=hit.y; float iterRatio=hit.z;
    vec3 p = ro+rd*t; vec3 n = calcNormal(p);
    vec3 keyDir = normalize(vec3(cos(uTime*0.3),0.7,sin(uTime*0.3)));
    vec3 fillDir = normalize(vec3(-0.5,0.4,-0.6));
    float key = max(dot(n,keyDir),0.0); float fill = max(dot(n,fillDir),0.0);
    float ao = 1.0-iterRatio; ao = clamp(ao*ao,0.0,1.0);
    float distAO = clamp(1.0-t/MAX_DIST,0.0,1.0); ao *= mix(0.55,1.0,distAO);
    // Bright multicolor body: hue swept by the orbit trap and time.
    vec3 base = palette(trap*1.5 + uTime*0.08);
    float fres = pow(1.0-max(dot(n,-rd),0.0),3.0);
    vec3 lit = base*(0.5*ao)
             + base*key*1.7*ao
             + base*fill*vec3(0.7,0.8,1.0)*0.85*ao;
    lit += fres * palette(trap*1.5 + uTime*0.08 + 0.35) * 1.7; // colored rim glow
    vec3 hh = normalize(keyDir-rd);
    float spec = pow(max(dot(n,hh),0.0),40.0);
    lit += spec*vec3(1.0)*ao*1.1;
    col = lit; col = mix(col,bg,smoothstep(MAX_DIST*0.75,MAX_DIST,t));
  }
  col *= 1.8;
  col = col/(col+vec3(1.0)); col = pow(col,vec3(0.42));
  float vig = smoothstep(1.85,0.25,length(uv)); col *= mix(0.92,1.0,vig);
  gl_FragColor = vec4(clamp(col,0.0,1.0),1.0);
}
`

const BLIT = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTex;
void main(){ gl_FragColor = texture2D(uTex,vUv); }
`

const RENDER_SCALE = 0.65

export function Mandelbulb({ className = '' }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    let removed = false
    let instance: { remove: () => void } | null = null
    let io: IntersectionObserver | null = null
    const mouse = { x: 0.5, y: 0.5 }
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX / Math.max(window.innerWidth, 1)
      mouse.y = e.clientY / Math.max(window.innerHeight, 1)
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import('p5').then((mod: any) => {
      if (removed) return
      const P5 = mod.default
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sketch = (p: any) => {
        let bulb: any, blit: any, fb: any
        let az = 0.6
        const el = 0.25
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
          io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !reduce) p.loop(); else p.noLoop() }, { threshold: 0 })
          io.observe(host)
          if (reduce) { p.noLoop(); p.redraw() }
        }
        p.draw = () => {
          const t = reduce ? 2.0 : p.millis() * 0.001
          if (!reduce) az += 0.0016
          const parX = (mouse.x - 0.5) * 0.4
          const parY = (mouse.y - 0.5) * 0.22
          const dist = 3.0
          const ce = Math.cos(el + parY)
          const camPos = [dist * ce * Math.cos(az + parX), dist * Math.sin(el + parY), dist * ce * Math.sin(az + parX)]
          const power = reduce ? 8.0 : 8.0 + Math.sin(t * 0.35) * 0.45
          fb.begin()
          p.clear()
          p.shader(bulb)
          bulb.setUniform('uResolution', [fb.width, fb.height])
          bulb.setUniform('uTime', t)
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
      window.removeEventListener('pointermove', onMove)
      io?.disconnect()
      instance?.remove()
    }
  }, [reduce])

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full ${className}`}
    />
  )
}
