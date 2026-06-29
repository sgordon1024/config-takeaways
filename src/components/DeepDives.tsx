import { motion } from 'framer-motion'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { spring } from '../lib/motion'
import type { Talk } from '../types'

function ytUrl(id: string | null) {
  return id ? `https://youtu.be/${id}` : null
}

function DeepCard({ talk, index }: { talk: Talk; index: number }) {
  const quote = talk.quotes[0]
  const link = ytUrl(talk.video)
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={spring}
      id={`talk-${talk.id}`}
      className="scroll-mt-24 overflow-hidden rounded-3xl bg-ink text-paper ring-1 ring-black/10 dark:bg-[#161616] dark:ring-white/10"
    >
      <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <span>Deep dive {String(index + 1).padStart(2, '0')}</span>
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
                <span>{kp}</span>
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

        {quote ? (
          <div className="flex items-center bg-accent p-8 text-accent-ink sm:p-10">
            <blockquote className="text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
              <span aria-hidden className="mr-1 opacity-40">“</span>
              {quote.text}
              <span aria-hidden className="opacity-40">”</span>
            </blockquote>
          </div>
        ) : (
          <div className="hidden bg-white/5 md:block" />
        )}
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
