import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Mandelbulb } from './Mandelbulb'
import { Section } from './Section'
import { Reveal } from './Reveal'

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

export function PredictionPage() {
  const headerRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ['start start', 'end start'] })
  // Parallax: the blob drifts down slowly, the headline lifts away faster.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '30%'])
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-22%'])
  const fgOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.1])

  return (
    <div className="bg-ink text-paper">
      {/* Hero with the bright Mandelbulb + scroll parallax */}
      <header ref={headerRef} className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[14%] h-[128%]">
          <Mandelbulb />
        </motion.div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/55" />
        <motion.div style={{ y: fgY, opacity: fgOpacity }} className="shell relative z-10 pb-16 pt-28">
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

      {/* The forecast */}
      <Section tone="dark">
        <Reveal>
          <p className="max-w-3xl text-balance text-xl font-semibold leading-snug tracking-tight text-white/90 sm:text-2xl">
            Config 2026 said the quiet part loud: when anyone can build anything, building stops being
            the job. Here is where that goes. A forecast, not a fact, but every theme on this site is
            pointing the same direction.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
          {FORECASTS.map((f, i) => (
            <Reveal key={f.title}>
              <div className="h-full bg-ink p-8 dark:bg-[#0b0b0b] sm:p-10">
                <span className="font-extrabold tracking-tightest tabular-nums text-accent text-2xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">{f.body}</p>
              </div>
            </Reveal>
          ))}
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
      </Section>
    </div>
  )
}
