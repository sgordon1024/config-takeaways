import { motion } from 'framer-motion'
import { Mandelbulb } from './Mandelbulb'
import { Reveal } from './Reveal'

// Call-out under the Deep Dives that leads to the prediction page. Futuristic
// Mandelbulb backdrop with a scrim that keeps the copy readable.
export function PredictionCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <Mandelbulb />
      {/* Light scrim: left stays readable, the bulb shows prominently on the right. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      <div className="shell relative z-10 flex min-h-[78vh] flex-col items-start justify-center py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">The forecast</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-[16ch] font-extrabold tracking-tightest text-display">
            So where does this go next?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            If Config 2026 was the year AI stopped being a feature, here is the bet on what product
            design becomes in the next few years.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <motion.a
            href="#/prediction"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="pill mt-9 bg-accent text-accent-ink hover:shadow-xl hover:shadow-accent/30"
          >
            Read the prediction
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
