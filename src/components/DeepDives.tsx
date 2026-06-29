import { motion } from 'framer-motion'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { spring } from '../lib/motion'
import { DeepPanel } from './DeepPanel'
import type { Talk } from '../types'

function ytUrl(id: string | null) {
  return id ? `https://youtu.be/${id}` : null
}

function DeepCard({ talk, index }: { talk: Talk; index: number }) {
  const link = ytUrl(talk.video)
  // Alternate the panel: card 1 right, card 2 left, and so on.
  const flip = index % 2 === 1
  const num = String(index + 1).padStart(2, '0')
  const mediaOrder = flip ? 'md:order-1' : 'md:order-2'

  // Green illustration surface. The art is currentColor line-work, so the panel
  // sets the deep-green ink (#004824) on the brand green (#06C167) and it inherits.
  const media = (
    <div
      className={`flex items-center justify-center bg-accent p-[8%] ${mediaOrder}`}
      style={{ color: '#004824' }}
    >
      <DeepPanel id={`dd-${num}`} className="aspect-square w-[82%] max-w-[380px]" />
    </div>
  )

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={spring}
      id={`talk-${talk.id}`}
      className="scroll-mt-24 overflow-hidden rounded-3xl bg-ink text-paper ring-1 ring-black/10 dark:bg-[#161616] dark:ring-white/10"
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className={`p-8 sm:p-10 ${flip ? 'md:order-2' : 'md:order-1'}`}>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <span>Deep dive {num}</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span className="text-white/50">{talk.stage}</span>
          </div>
          <h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {talk.title}
          </h3>
          {talk.speakers !== 'Unattributed' && (
            <p className="mt-3 text-white/60">{talk.speakers}</p>
          )}
          <ul className="mt-6 space-y-3">
            {talk.keyPoints.slice(0, 4).map((kp, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span className="line-clamp-2 min-w-0 flex-1">{kp}</span>
              </li>
            ))}
          </ul>
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="pill mt-7 border border-white/25 text-paper hover:bg-white/10"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch the talk
            </motion.a>
          )}
        </div>

        {media}
      </div>
    </motion.article>
  )
}

export function DeepDives({ talks }: { talks: Talk[] }) {
  if (talks.length === 0) return null
  return (
    <Section id="deep-dives" tone="light">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Deep dives</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">
          Five talks worth the full hour.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          The most interesting sessions I had a complete transcript for, pulled out for a closer look.
        </p>
      </Reveal>

      <div className="mt-14 space-y-6">
        {talks.map((talk, i) => (
          <Reveal key={talk.id}>
            <DeepCard talk={talk} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
