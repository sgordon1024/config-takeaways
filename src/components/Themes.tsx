import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { softSpring, spring } from '../lib/motion'
import type { Talk, Theme } from '../types'

function ThemeCard({ theme, index, talksById }: { theme: Theme; index: number; talksById: Map<string, Talk> }) {
  const [open, setOpen] = useState(false)
  const panelId = `theme-panel-${theme.id}`
  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      transition={spring}
      className="group flex flex-col rounded-2xl bg-paper p-7 text-ink shadow-sm ring-1 ring-black/5 dark:bg-[#161616] dark:text-paper dark:ring-white/10 sm:p-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-extrabold tracking-tightest text-muted/50 tabular-nums text-2xl">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="rounded-full bg-accent/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-ink dark:bg-accent/20 dark:text-accent">
          from {theme.talkCount} talks
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
        {theme.headline}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{theme.explanation}</p>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent-ink transition-colors hover:text-accent dark:text-accent"
      >
        {open ? 'Hide' : 'Show'} supporting talks
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={softSpring}
            className="mt-4 space-y-1.5 overflow-hidden border-t border-hairline pt-4 dark:border-white/10"
          >
            {theme.talkIds.map((id) => {
              const t = talksById.get(id)
              if (!t) return null
              return (
                <li key={id}>
                  <a
                    href={`#talk-${id}`}
                    className="block rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-surface dark:hover:bg-white/5"
                  >
                    <span className="font-semibold">{t.title}</span>
                    {t.speakers !== 'Unattributed' && (
                      <span className="text-muted">, {t.speakers.replace(/\s*\(.*?\)/g, '')}</span>
                    )}
                  </a>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Themes({ themes, talksById }: { themes: Theme[]; talksById: Map<string, Talk> }) {
  return (
    <Section id="themes" tone="dark">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">The takeaways</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-[18ch] font-extrabold tracking-tightest text-headline">
          {themes.length} themes that ran through the whole conference.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 max-w-2xl text-lg text-white/60">
          Clustered from every talk summary. Open any theme to see exactly which talks back it
          up, so you can trace every claim to its source.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {themes.map((theme, i) => (
          <ThemeCard key={theme.id} theme={theme} index={i} talksById={talksById} />
        ))}
      </div>
    </Section>
  )
}
