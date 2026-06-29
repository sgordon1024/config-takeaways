import { Section } from './Section'
import { Reveal } from './Reveal'
import type { Content } from '../types'

export function Overview({ meta }: { meta: Content['meta'] }) {
  const { stats } = meta
  return (
    <Section id="overview" tone="light">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          What this is
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-6 max-w-4xl text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
          {meta.overview}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          I sat through as much as I could and pulled the recordings afterward. Of{' '}
          <strong className="font-semibold text-ink dark:text-paper">{stats.totalTalks} talks</strong>,{' '}
          {stats.transcribedTalks} had public recordings I could transcribe word-for-word; the rest are
          summarized from Figma&rsquo;s official session descriptions. Every quote on this site is
          verbatim, and every number is counted from the source files.
        </p>
      </Reveal>
    </Section>
  )
}
