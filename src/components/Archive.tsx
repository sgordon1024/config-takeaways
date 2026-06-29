import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { softSpring } from '../lib/motion'
import type { Talk } from '../types'

const PAGE = 18

type SourceFilter = 'all' | 'transcript' | 'abstract'

function SourceBadge({ source }: { source: Talk['source'] }) {
  const transcript = source === 'transcript'
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
        transcript
          ? 'bg-accent/12 text-accent-ink dark:bg-accent/20 dark:text-accent'
          : 'bg-surface text-muted dark:bg-white/10 dark:text-white/60'
      }`}
    >
      {transcript ? 'Transcript' : 'From abstract'}
    </span>
  )
}

function TalkRow({ talk, open, onToggle }: { talk: Talk; open: boolean; onToggle: () => void }) {
  const panelId = `talk-panel-${talk.id}`
  const link = talk.video ? `https://youtu.be/${talk.video}` : null
  return (
    <motion.li
      layout
      id={`talk-${talk.id}`}
      className="scroll-mt-24 overflow-hidden rounded-2xl bg-paper ring-1 ring-black/5 dark:bg-[#161616] dark:ring-white/10"
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-surface/70 dark:hover:bg-white/5 sm:p-6"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <SourceBadge source={talk.source} />
            <span className="text-xs font-medium text-muted">{talk.stage}</span>
          </div>
          <h3 className="text-lg font-bold leading-snug tracking-tight sm:text-xl">{talk.title}</h3>
          <p className="mt-1 text-sm text-muted">{talk.speakers}</p>
        </div>
        <motion.span
          animate={{ rotate: open ? 135 : 0 }}
          transition={softSpring}
          className="mt-1 grid h-9 w-9 flex-none place-items-center rounded-full bg-surface text-ink dark:bg-white/10 dark:text-paper"
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={softSpring}
            className="overflow-hidden"
          >
            <div className="border-t border-hairline px-5 pb-6 pt-5 dark:border-white/10 sm:px-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted">Key points</p>
              <ul className="space-y-2.5">
                {talk.keyPoints.map((kp, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>

              {talk.quotes.length > 0 && (
                <div className="mt-5 space-y-3">
                  {talk.quotes.map((q, i) => (
                    <blockquote
                      key={i}
                      className="border-l-2 border-accent pl-4 text-[15px] font-semibold italic leading-relaxed"
                    >
                      “{q.text}”
                    </blockquote>
                  ))}
                </div>
              )}

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink hover:text-accent dark:text-accent"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch on YouTube
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export function Archive({ talks }: { talks: Talk[] }) {
  const [query, setQuery] = useState('')
  const [stage, setStage] = useState('All')
  const [source, setSource] = useState<SourceFilter>('all')
  const [visible, setVisible] = useState(PAGE)
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const stages = useMemo(() => ['All', ...Array.from(new Set(talks.map((t) => t.stage))).sort()], [talks])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return talks.filter((t) => {
      if (stage !== 'All' && t.stage !== stage) return false
      if (source !== 'all' && t.source !== source) return false
      if (q) {
        const hay = `${t.title} ${t.speakers} ${t.keyPoints.join(' ')}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [talks, query, stage, source])

  // Reset pagination whenever the filter set changes.
  useEffect(() => setVisible(PAGE), [query, stage, source])

  // Deep links from theme cards (#talk-XXX): clear filters, render it, expand, scroll.
  useEffect(() => {
    const jump = () => {
      const m = window.location.hash.match(/^#talk-(\w+)$/)
      if (!m) return
      const id = m[1]
      if (!talks.some((t) => t.id === id)) return
      setQuery('')
      setStage('All')
      setSource('all')
      setVisible(talks.length)
      setOpenIds((prev) => new Set(prev).add(id))
      requestAnimationFrame(() => {
        document.getElementById(`talk-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
    }
    jump()
    window.addEventListener('hashchange', jump)
    return () => window.removeEventListener('hashchange', jump)
  }, [talks])

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const shown = filtered.slice(0, visible)

  return (
    <Section id="archive" tone="light">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">The archive</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-extrabold tracking-tightest text-headline">
          All {talks.length} talks.
        </h2>
      </Reveal>

      {/* Controls */}
      <Reveal delay={0.1}>
        <div className="sticky top-16 z-30 mt-10 -mx-5 bg-paper/85 px-5 py-4 backdrop-blur-md dark:bg-ink/85 sm:mx-0 sm:rounded-2xl sm:px-5">
          <label className="relative block">
            <span className="sr-only">Search talks</span>
            <svg
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search titles, speakers, key points…"
              className="h-12 w-full rounded-full border border-hairline bg-surface pl-11 pr-4 text-base outline-none transition-colors focus:border-accent dark:border-white/15 dark:bg-white/5"
            />
          </label>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {(['all', 'transcript', 'abstract'] as SourceFilter[]).map((s) => (
              <button
                key={s}
                onClick={() => setSource(s)}
                aria-pressed={source === s}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  source === s
                    ? 'bg-ink text-paper dark:bg-paper dark:text-ink'
                    : 'bg-surface text-muted hover:text-ink dark:bg-white/5 dark:hover:text-paper'
                }`}
              >
                {s === 'all' ? 'All sources' : s === 'transcript' ? 'Transcribed' : 'From abstract'}
              </button>
            ))}
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              aria-label="Filter by stage"
              className="h-10 rounded-full border border-hairline bg-surface px-4 text-sm font-semibold outline-none focus:border-accent dark:border-white/15 dark:bg-white/5"
            >
              {stages.map((s) => (
                <option key={s} value={s}>
                  {s === 'All' ? 'All stages' : s}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-3 text-sm text-muted" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'talk' : 'talks'}
            {(query || stage !== 'All' || source !== 'all') && ' match your filters'}
          </p>
        </div>
      </Reveal>

      {/* List */}
      <LayoutGroup>
        <motion.ul layout className="mt-6 space-y-3">
          {shown.map((talk) => (
            <TalkRow key={talk.id} talk={talk} open={openIds.has(talk.id)} onToggle={() => toggle(talk.id)} />
          ))}
        </motion.ul>
      </LayoutGroup>

      {shown.length === 0 && (
        <p className="mt-10 text-center text-lg text-muted">No talks match, try a different search.</p>
      )}

      {visible < filtered.length && (
        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setVisible((v) => v + PAGE)}
            className="pill border border-hairline bg-surface text-ink hover:border-accent dark:border-white/15 dark:bg-white/5 dark:text-paper"
          >
            Load more ({filtered.length - visible} left)
          </motion.button>
        </div>
      )}
    </Section>
  )
}
