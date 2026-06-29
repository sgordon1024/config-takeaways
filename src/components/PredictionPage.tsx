import { motion } from 'framer-motion'
import { Mandelbulb } from './Mandelbulb'
import { Section } from './Section'
import { Reveal } from './Reveal'

// Forward-looking forecast, extrapolated from the 12 synthesized themes. It is
// explicitly a prediction, not something any speaker said outright.
const FORECASTS = [
  {
    title: 'The designer becomes an editor-in-chief',
    body: 'Making gets automated, so the job becomes choosing what is worth building and refusing to ship the rest. Titles blur as design, product, and engineering collapse toward one role: the person who holds the quality bar.',
  },
  {
    title: 'Context is the new craft',
    body: 'Teams stop shipping only screens and start shipping structured context: their taste, conventions, and definition of done, written so both people and agents can read it. The design system grows from a component library into a set of enforceable shared decisions.',
  },
  {
    title: 'The canvas and the codebase become one surface',
    body: 'Design happens in code and code shows up on the canvas, so the static handoff disappears. Every prototype is production-grade by default, and "design to dev" stops being a phase.',
  },
  {
    title: 'Interfaces behave like colleagues',
    body: 'Products gain presence, memory, and earned autonomy. The unit of design shifts from the screen to the relationship, and trust gets built the way you onboard a teammate: small tasks first, more rope over time.',
  },
  {
    title: 'Taste, trust, and care become the moat',
    body: 'When everyone holds the same models, the durable edge is judgment, real customer insight, and the felt quality of the work. The teams that can define "good" in human terms, and prove it, win.',
  },
  {
    title: 'Software gets expressive again',
    body: 'With shaders, motion, and generative tools native to the canvas, interfaces regain texture and life. The flat decade ends, and the next one moves.',
  },
]

export function PredictionPage() {
  return (
    <div className="bg-ink text-paper">
      {/* Hero with the Mandelbulb */}
      <header className="relative isolate flex min-h-[80vh] items-end overflow-hidden">
        <Mandelbulb />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/65" />
        <div className="shell relative z-10 pb-16 pt-28">
          <motion.a
            href="#top"
            whileHover={{ x: -3 }}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to the takeaways
          </motion.a>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">A prediction</p>
          <h1 className="mt-4 max-w-[15ch] font-extrabold tracking-tightest text-display">
            Where product design goes <span className="text-accent">next</span>.
          </h1>
        </div>
      </header>

      {/* The forecast */}
      <Section tone="dark">
        <Reveal>
          <p className="max-w-3xl text-balance text-xl font-semibold leading-snug tracking-tight text-white/90 sm:text-2xl">
            Config 2026 made the through-line clear: when AI makes building cheap, the work moves to
            judgment, context, trust, and care. Extrapolate those forces and here is the bet on the next
            few years. Call it a forecast, not a fact. No speaker said this outright, but every theme
            points here.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
          {FORECASTS.map((f, i) => (
            <Reveal key={f.title}>
              <div className="h-full bg-ink p-8 dark:bg-[#0b0b0b] sm:p-10">
                <span className="font-extrabold tracking-tightest tabular-nums text-accent text-2xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight">{f.title}</h3>
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
