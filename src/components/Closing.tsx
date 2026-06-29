import { motion } from 'framer-motion'
import { Section } from './Section'
import { Reveal } from './Reveal'
import type { Content } from '../types'

export function Closing({ meta }: { meta: Content['meta'] }) {
  return (
    <Section id="closing" tone="light">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">The sign-off</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-[16ch] font-extrabold tracking-tightest text-display">
          The tools got faster. <span className="text-accent">The taste is on us.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted">
          That was the through-line of {meta.conference}: when anyone can make anything,
          judgment, trust, and care become the work. Thanks for reading, go make
          something only you would make.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap gap-3">
          <motion.a
            href="#top"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="pill bg-accent text-accent-ink hover:shadow-xl hover:shadow-accent/30"
          >
            Back to top
          </motion.a>
          <motion.a
            href="#archive"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="pill border border-hairline text-ink hover:border-accent dark:border-white/20 dark:text-paper"
          >
            Revisit the archive
          </motion.a>
        </div>
      </Reveal>
    </Section>
  )
}
