import { Section } from './Section'
import { Reveal } from './Reveal'
import type { Content } from '../types'

export function Overview({ meta }: { meta: Content['meta'] }) {
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
    </Section>
  )
}
