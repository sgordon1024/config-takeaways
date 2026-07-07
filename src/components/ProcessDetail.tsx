import { useState } from 'react'
import { Section } from './Section'
import { Reveal } from './Reveal'
import detailData from '../data/processDetails.json'

// ---------- content model ----------

type Example = { label: string; rows: { k: string; v: string }[]; note: string }
type PromptCard = { title: string; body: string; note?: string }
type GuideStep = { time: string; title: string; detail: string }

type StageDetail = {
  n: string
  name: string
  dur: string
  purpose: string
  output: string[]
  examplesTitle: string
  examples: Example[]
  promptsTitle: string
  promptsIntro?: string
  prompts: PromptCard[]
  guide: { eyebrow: string; title: string; intro: string; steps: GuideStep[]; roles: string; artifacts: string[] }
  pitfallsTitle: string
  pitfalls: string[]
}

const DETAILS = detailData as Record<string, StageDetail>

// ---------- copy-to-clipboard ----------

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* fall through to the legacy path */
  }
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.top = '0'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={async () => {
        if (await copyText(text)) {
          setCopied(true)
          setTimeout(() => setCopied(false), 1600)
        }
      }}
      aria-label={copied ? 'Copied to clipboard' : 'Copy prompt to clipboard'}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
        copied ? 'bg-accent text-accent-ink' : 'bg-ink text-paper hover:bg-ink/80'
      }`}
    >
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M5 15V5a2 2 0 012-2h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

function BackLink() {
  return (
    <a href="#/process" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back to the process
    </a>
  )
}

// ---------- ordered slugs, for prev / next ----------

const ORDER = ['framing', 'context', 'exploration', 'build', 'qa', 'validation', 'polish', 'ship']

// ---------- page ----------

export function ProcessDetail({ slug }: { slug: string }) {
  const d = DETAILS[slug]

  if (!d) {
    return (
      <Section tone="dark">
        <BackLink />
        <h1 className="mt-8 font-extrabold tracking-tightest text-headline">Not ready yet.</h1>
        <p className="mt-5 max-w-xl text-lg text-white/60">This step does not have a detail page yet.</p>
        <a href="#/process" className="pill mt-8 bg-accent text-accent-ink">
          Back to the process
        </a>
      </Section>
    )
  }

  const idx = ORDER.indexOf(slug)
  const next = idx >= 0 && idx < ORDER.length - 1 ? DETAILS[ORDER[idx + 1]] : null
  const nextSlug = next ? ORDER[idx + 1] : null

  return (
    <>
      {/* Hero */}
      <Section tone="dark">
        <Reveal>
          <BackLink />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Step {d.n} · {d.dur}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-[16ch] font-extrabold tracking-tightest text-headline">{d.name}</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-lg text-white/60">{d.purpose}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-8 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">What you leave with</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {d.output.map((o) => (
                <li key={o} className="flex items-start gap-2 text-[15px] text-white/80">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* More examples */}
      <Section tone="light">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">More examples</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">{d.examplesTitle}</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {d.examples.map((ex, i) => (
            <Reveal key={ex.label} delay={i * 0.04}>
              <div className="h-full rounded-2xl bg-surface p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-muted">{ex.label}</p>
                <dl className="mt-4 space-y-3">
                  {ex.rows.map((r) => (
                    <div key={r.k}>
                      <dt className="text-xs font-bold uppercase tracking-wider text-accent-ink">{r.k}</dt>
                      <dd className="mt-1 text-[15px] font-semibold leading-snug text-ink">{r.v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 border-t border-hairline pt-3 text-sm leading-relaxed text-muted">{ex.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Prompts to copy */}
      <Section tone="light" className="bg-surface">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Prompts to copy</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">{d.promptsTitle}</h2>
        </Reveal>
        {d.promptsIntro && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg text-muted">{d.promptsIntro}</p>
          </Reveal>
        )}

        <div className="mt-12 space-y-5">
          {d.prompts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.03}>
              <div className="rounded-2xl bg-paper p-5 ring-1 ring-black/5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight">{p.title}</h3>
                    {p.note && <p className="mt-1 text-sm text-muted">{p.note}</p>}
                  </div>
                  <CopyButton text={p.body} />
                </div>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl bg-ink p-4 font-mono text-[13px] leading-relaxed text-white/90">
                  {p.body}
                </pre>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Guide: how this takes shape */}
      <Section tone="dark">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{d.guide.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">{d.guide.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-white/60">{d.guide.intro}</p>
        </Reveal>

        <ol className="mt-12 space-y-4">
          {d.guide.steps.map((s) => (
            <Reveal key={s.title} as="li">
              <div className="flex flex-col gap-2 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 sm:flex-row sm:items-baseline sm:gap-5">
                <span className="shrink-0 font-mono text-sm font-bold text-accent sm:w-24">{s.time}</span>
                <div>
                  <h3 className="text-base font-extrabold tracking-tight">{s.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-white/65">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Who is involved</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/80">{d.guide.roles}</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">You leave with</p>
              <ul className="mt-3 space-y-1.5">
                {d.guide.artifacts.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-[15px] text-white/80">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Pitfalls + footer nav */}
      <Section tone="light">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Watch out for</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">{d.pitfallsTitle}</h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {d.pitfalls.map((p, i) => (
            <Reveal key={p} as="li" delay={i * 0.04}>
              <div className="flex h-full items-start gap-3 rounded-2xl bg-surface p-5">
                <span className="mt-0.5 shrink-0 font-extrabold text-accent-ink">{i + 1}</span>
                <p className="text-[15px] leading-relaxed text-ink/80">{p}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a href="#/process" className="pill bg-ink text-paper">
              Back to the process
            </a>
            {nextSlug && next && (
              <a href={`#/process/${nextSlug}`} className="pill border border-ink/15 text-ink hover:border-ink/40">
                Next: {next.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="pill border border-ink/15 text-ink hover:border-ink/40"
            >
              Top of this page
            </button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
