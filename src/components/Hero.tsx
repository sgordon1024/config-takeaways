import { motion, useReducedMotion } from 'framer-motion'
import { heroLine, stagger } from '../lib/motion'
import { Stardust } from './Stardust'
import type { Content } from '../types'

export function Hero({ meta }: { meta: Content['meta'] }) {
  const reduce = useReducedMotion()
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink text-paper"
    >
      <Stardust />
      {/* Light legibility scrim: just enough behind the headline (left) to stay
          readable, while the galaxy stays bright and prominent on the right. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="shell relative z-10 pb-24 pt-28">
        <motion.div variants={stagger(0.15, 0.1)} initial="hidden" animate="show">
          <motion.div
            variants={heroLine}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/60"
          >
            <span className="text-accent">{meta.host}</span>
            <span aria-hidden>·</span>
            <span>{meta.location}</span>
            <span aria-hidden>·</span>
            <span>{meta.dates}</span>
          </motion.div>

          <h1 className="max-w-[15ch] font-extrabold tracking-tightest text-display">
            <motion.span variants={heroLine} className="block">
              When making
            </motion.span>
            <motion.span variants={heroLine} className="block">
              gets cheap,
            </motion.span>
            <motion.span variants={heroLine} className="block text-accent">
              taste gets
            </motion.span>
            <motion.span variants={heroLine} className="block">
              expensive.
            </motion.span>
          </h1>

          <motion.p
            variants={heroLine}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            Everything I took away from {meta.conference}, the year AI stopped being a
            feature and became the way we work. {meta.stats.totalTalks} talks, distilled.
          </motion.p>

          <motion.div variants={heroLine} className="mt-10 flex flex-wrap items-center gap-3">
            <motion.a
              href="#themes"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="pill bg-accent text-accent-ink hover:shadow-xl hover:shadow-accent/30"
            >
              Read the takeaways
            </motion.a>
            <motion.a
              href="#archive"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="pill border border-white/25 text-paper hover:bg-white/10"
            >
              Browse {meta.stats.totalTalks} talks
            </motion.a>
          </motion.div>

          <motion.p variants={heroLine} className="mt-12 text-sm text-white/50">
            Curated by <span className="font-semibold text-white/80">{meta.curator}</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Animated scroll cue */}
      <motion.a
        href="#overview"
        aria-label="Scroll to overview"
        className="absolute inset-x-0 bottom-7 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-white/55 hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/25"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </motion.a>
    </section>
  )
}
