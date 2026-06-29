import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { useCountUp } from '../lib/useCountUp'
import type { Stats as StatsType } from '../types'

function Stat({ value, label, suffix, play }: { value: number; label: string; suffix?: string; play: boolean }) {
  const n = useCountUp(value, play)
  return (
    <div>
      <div className="font-extrabold tracking-tightest tabular-nums text-[clamp(3rem,9vw,6rem)] leading-none">
        {n}
        {suffix && <span className="text-accent">{suffix}</span>}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-white/55">{label}</div>
    </div>
  )
}

export function Stats({ stats }: { stats: StatsType }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })

  const items = [
    { value: stats.totalTalks, label: 'Talks indexed' },
    { value: stats.transcribedTalks, label: 'Fully transcribed' },
    { value: stats.themes, label: 'Cross-cutting themes' },
    { value: stats.speakers, label: 'Speakers' },
    { value: stats.stages, label: 'Stages' },
  ]

  return (
    <Section id="stats" tone="dark">
      <Reveal>
        <h2 className="max-w-[16ch] font-extrabold tracking-tightest text-headline">
          By the numbers.
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-4 max-w-xl text-lg text-white/55">
          Counted directly from the source files, nothing estimated.
        </p>
      </Reveal>
      <div
        ref={ref}
        className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5"
      >
        {items.map((it) => (
          <Stat key={it.label} value={it.value} label={it.label} play={inView} />
        ))}
      </div>
    </Section>
  )
}
