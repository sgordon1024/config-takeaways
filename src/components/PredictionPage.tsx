import { Fragment, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Mandelbulb } from './Mandelbulb'
import { ForecastArt } from './ForecastArt'
import { Reveal } from './Reveal'
import grainBg from '../illustrations/bg-grain.svg'

// Forward-looking forecast, extrapolated from the 12 synthesized themes. It is
// explicitly a prediction, not something any speaker said outright.
const FORECASTS = [
  {
    title: 'You stop making. You start deciding.',
    body: 'When anything can be generated in seconds, production is no longer the bottleneck. The job becomes pointing, judging, and killing the 90% that is merely fine so the 10% that is great can ship. Design, PM, and engineering blur into one role: the person who owns the bar.',
  },
  {
    title: 'Your taste becomes a file.',
    body: 'The stuff in your head, your conventions, your definition of done, your this-not-that, gets written down so machines can use it. Context turns into a deliverable. The design system stops being a component library and becomes a set of decisions both people and agents obey.',
  },
  {
    title: 'The handoff is dead.',
    body: 'Design happens in code and code shows up on the canvas, so there is nothing to hand off. Every prototype is shippable by default, and the old relay race from file to repo collapses into one continuous loop.',
  },
  {
    title: 'Your product becomes a coworker.',
    body: 'Software gains presence, memory, and earned autonomy, so you stop arranging screens and start designing a relationship. Trust gets built the way you onboard a new hire: small tasks first, more rope as it proves itself.',
  },
  {
    title: 'Models are free. Taste is the tiebreaker.',
    body: 'When every team holds the same models, the moat is judgment, real customer insight, and the felt quality of the work. Whoever can define good in human terms, and prove it, wins. Everyone else ships confident slop.',
  },
  {
    title: 'Flat is over. Software gets weird again.',
    body: 'With shaders, motion, and generative tools native to the canvas, interfaces get texture, depth, and movement back. The beige decade ends, and the next one has a pulse.',
  },
]

const INTRO = 'When anyone can build anything, building stops being the job.'

// Wider container just for the forecast page.
const WIDE = 'mx-auto w-full max-w-[1560px] px-6 sm:px-10 lg:px-16'

// Stable per-index pseudo-random (0..1) so the hand-lettered layout is the same
// every render instead of reshuffling.
const rnd = (n: number) => {
  const x = Math.sin(n * 127.1) * 43758.5453
  return x - Math.floor(x)
}

export function PredictionPage() {
  const headerRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ['start start', 'end start'] })
  // Parallax: the blob drifts down slowly, the headline lifts away faster.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '30%'])
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-22%'])
  const fgOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.1])

  // Split the intro into words (kept unbreakable) of letters with a global index,
  // so each letter can be "written" on in sequence.
  let gi = 0
  const introWords = INTRO.split(' ').map((word) => [...word].map((ch) => ({ ch, i: gi++ })))

  return (
    <div
      className="text-paper"
      style={{ backgroundColor: '#0b0b0b', backgroundImage: `url(${grainBg})`, backgroundRepeat: 'repeat', backgroundSize: '320px 320px' }}
    >
      {/* Roughening filter applied to the handwritten intro for a gritty, inked texture. */}
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <filter id="handGrit" x="-15%" y="-15%" width="130%" height="130%">
          {/* roughen the edges */}
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="2.5" xChannelSelector="R" yChannelSelector="G" result="rough" />
          {/* speckle the fill so it isn't flat/solid: modulate alpha by fine noise */}
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" seed="8" result="grain" />
          <feComponentTransfer in="grain" result="grainA">
            <feFuncA type="linear" slope="0.6" intercept="0.4" />
          </feComponentTransfer>
          <feComposite in="rough" in2="grainA" operator="in" />
        </filter>
      </svg>

      {/* Hero with the bright Mandelbulb + scroll parallax */}
      <header ref={headerRef} className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[14%] h-[128%]">
          <Mandelbulb />
        </motion.div>
        {/* Bottom-only fade for headline legibility; the rest stays clear so the blob is prominent. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <motion.div style={{ y: fgY, opacity: fgOpacity }} className={`${WIDE} relative z-10 pb-16 pt-28`}>
          <a href="#top" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to the takeaways
          </a>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">A prediction</p>
          <h1 className="mt-4 max-w-[15ch] font-extrabold tracking-tightest text-display">
            Where product design goes <span className="text-accent">next</span>.
          </h1>
        </motion.div>
      </header>

      {/* The forecast (transparent so the page-wide grain shows through) */}
      <section className="relative">
        <div className={`${WIDE} py-20 sm:py-28 lg:py-36`}>
        <p
          className="mx-auto max-w-5xl text-center font-hand text-5xl font-bold leading-[1.25] text-white sm:text-7xl lg:text-8xl"
          style={{ filter: 'url(#handGrit)' }}
        >
          {introWords.map((letters, wi) => (
            <Fragment key={wi}>
              <span className="inline-block whitespace-nowrap">
                {letters.map(({ ch, i }) => {
                  // Per-character hand-lettered variation: size, tilt, baseline drift.
                  // These are STATIC (applied via transform) so characters never resize while
                  // animating; only the clip reveals each one, as if being drawn in.
                  const rot = (rnd(i * 4 + 1) - 0.5) * 13 // ~ -6.5deg .. 6.5deg
                  const scale = 0.86 + rnd(i * 4 + 2) * 0.3 // 0.86 .. 1.16
                  const dy = (rnd(i * 4 + 3) - 0.5) * 16 // px baseline drift
                  const delay = i * 0.07 + (rnd(i * 4 + 4) - 0.5) * 0.04
                  const dur = 0.22 + rnd(i * 4 + 2) * 0.24 // some draw fast, some slow
                  const transform = `translateY(${dy}px) rotate(${rot}deg) scale(${scale})`
                  return (
                    <span key={i} className="inline-block" style={{ transform, transformOrigin: '50% 85%' }}>
                      {reduce ? (
                        ch
                      ) : (
                        <motion.span
                          className="inline-block"
                          initial={{ clipPath: 'inset(-25% 100% -25% -8%)' }}
                          whileInView={{ clipPath: 'inset(-25% 0% -25% -8%)' }}
                          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                          transition={{ duration: dur, ease: [0.55, 0.05, 0.5, 1], delay }}
                        >
                          {ch}
                        </motion.span>
                      )}
                    </span>
                  )
                })}
              </span>
              {wi < introWords.length - 1 ? ' ' : ''}
            </Fragment>
          ))}
        </p>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FORECASTS.map((f, i) => {
            const n = String(i + 1).padStart(2, '0')
            return (
              <Reveal key={f.title}>
                <article className="h-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                  {/* Square panel; art contained with padding so nothing is cut off. Cards are
                      transparent, so the page grain shows through and stays seamless. */}
                  <div className="relative aspect-square">
                    <ForecastArt id={`pred-${n}`} className="absolute inset-[12%]" />
                  </div>
                  {/* Text */}
                  <div className="border-t border-white/10 p-8 sm:p-9">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Forecast {n}</p>
                    <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight">{f.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/60">{f.body}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <p className="mt-16 max-w-2xl text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
            The tools will keep getting faster. What you point them at, and what you refuse to ship, is
            the <span className="text-accent">whole job</span>.
          </p>
        </Reveal>

        <Reveal>
          <motion.a
            href="#top"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="pill mt-10 bg-accent text-accent-ink hover:shadow-xl hover:shadow-accent/30"
          >
            Back to the takeaways
          </motion.a>
        </Reveal>
        </div>
      </section>
    </div>
  )
}
