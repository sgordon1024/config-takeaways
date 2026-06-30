import { useState } from 'react'
import { Section } from './Section'
import { Reveal } from './Reveal'

// ---------- content model ----------

type Example = { context: string; bet: string; good: string; note: string }
type PromptCard = { title: string; body: string; note?: string }
type WorkshopStep = { time: string; title: string; detail: string }

type StageDetail = {
  n: string
  name: string
  dur: string
  purpose: string
  output: string[]
  examples: Example[]
  prompts: PromptCard[]
  workshop: { intro: string; steps: WorkshopStep[]; roles: string; artifacts: string[] }
  pitfalls: string[]
}

const DETAILS: Record<string, StageDetail> = {
  framing: {
    n: '01',
    name: 'Framing & direction',
    dur: '~3-7 days',
    purpose:
      'Framing decides whether this is the right thing to build and sets a point of view you can defend, before cheap generation tempts you into building the wrong thing fast. The output is not screens. It is a written bet and a definition of good.',
    output: [
      'A one-page conviction brief (the bet, in writing)',
      'A definition of "good": 1-2 measurable signals',
      'A hand-vs-agent triage for the major tasks',
      'A thinking file that seeds every later agent session',
    ],
    examples: [
      {
        context: 'Consumer app: new onboarding (the running example)',
        bet: 'Users reach first real value in under 2 minutes.',
        good: 'Day-1 activation rate, not tutorial completion.',
        note: 'Skip the product tour. Get them to one genuine outcome fast.',
      },
      {
        context: 'B2B analytics dashboard',
        bet: 'Answer the one question users open it for in 5 seconds.',
        good: 'Time-to-first-answer, plus weekly return rate.',
        note: 'Refuse the kitchen-sink request. Pick the single job it must nail.',
      },
      {
        context: 'Checkout flow rework',
        bet: 'Remove the top 2 reasons people abandon on mobile.',
        good: 'Mobile completion rate, plus checkout support tickets.',
        note: 'High cost of being wrong, so weight validation heavier downstream.',
      },
      {
        context: 'AI writing assistant feature',
        bet: "Augment the user's voice, never overwrite it.",
        good: 'Suggestions kept vs discarded, plus a trust survey.',
        note: 'Decide up front where the human must stay in control.',
      },
    ],
    prompts: [
      {
        title: 'Pressure-test the bet',
        note: 'Use a capable model as a skeptic, not a cheerleader.',
        body: `You are a skeptical product lead. Here is my bet for what we should build:

[paste your one-sentence bet]

Do three things:
1. Make the strongest argument that this is the wrong bet.
2. List the hidden assumptions it depends on.
3. Tell me what would have to be true for it to succeed, and how I could check each one cheaply this week.

Be blunt. Do not validate me.`,
      },
      {
        title: 'Surface the users I am ignoring',
        body: `Context: [one line about the product and who it is for].
My current bet: [bet].

List the users and use cases I am probably ignoring, especially people who are not the easy-to-reach default: brand-new users, power users, disabled users, and regulated or high-stakes cases. For each one, say in a single line how it would change the design if I took it seriously.`,
      },
      {
        title: 'Triage: hand vs agent (the 3 questions)',
        note: 'Decides what to one-shot with an agent and what to protect for human work.',
        body: `For each task below, score it 1-5 on three axes: how much context it needs, how novel or divergent it is, and the cost of getting it wrong. Then recommend HUMAN (do it by hand) or AGENT (safe to generate), with one sentence of reasoning.

Tasks:
- [task]
- [task]
- [task]

Rule of thumb: high context + high novelty + high cost = human. Low on all three = agent.`,
      },
      {
        title: 'Draft the conviction brief',
        body: `Draft a one-page conviction brief from these inputs:
Problem: [...]
Who it is for: [...]
The bet (one sentence): [...]
Why now: [...]
What we will deliberately NOT do: [...]

Return: a one-paragraph point of view, three principles that every decision should be checked against, and the single metric that tells us we were right. Keep it under 250 words.`,
      },
      {
        title: 'Turn "good" into metrics',
        body: `My bet: [bet].

Turn this into success measures: 1-2 primary metrics that prove the bet worked, plus 1-2 guardrail metrics that would warn me I broke something else. For each, give a rough target and how to measure it. Avoid vanity metrics.`,
      },
    ],
    workshop: {
      intro:
        'A 90-minute framing session. The goal is to leave with a signed bet and a definition of good, not a backlog of features. Timebox hard. Conviction is the deliverable.',
      steps: [
        { time: '0-10 min', title: 'Frame the problem', detail: 'State the problem, not a solution. No UI talk yet. The facilitator writes it on the board in one sentence.' },
        { time: '10-30 min', title: 'Diverge on the bet', detail: 'Everyone writes their one-sentence bet silently into FigJam. The agent clusters them into themes while you read.' },
        { time: '30-50 min', title: 'Pressure-test', detail: 'Run the pressure-test prompt on the leading 2-3 bets. Argue against each one. Kill the weak bets out loud.' },
        { time: '50-70 min', title: 'Triage the work', detail: 'Run the 3-question triage on the major tasks. Mark each hand vs agent so the build stage knows what to one-shot and what to protect.' },
        { time: '70-85 min', title: 'Commit', detail: 'Write the conviction statement and the definition of good. Named approvers co-sign in the room.' },
        { time: '85-90 min', title: 'Seed the system', detail: 'Paste the brief, the bet, and the definition of good into the thinking file or skills so every downstream agent session starts from it.' },
      ],
      roles:
        'Facilitator: the player-coach lead. Approvers: sponsor, brand owner, and legal or compliance if regulated. Scribe: captures decisions straight into the thinking file.',
      artifacts: [
        'One-page conviction brief',
        'Definition of good (metrics + guardrails)',
        'Kill list (what you said no to)',
        'Hand-vs-agent triage table',
        'The thinking file for later stages',
      ],
    },
    pitfalls: [
      'Building before the bet is signed. If approvers have not co-signed, you are guessing.',
      'Design-by-committee. Conviction is owned by one lead; partners pressure-test, they do not vote on direction.',
      'Vague "make it better." If you cannot name the metric of good, you cannot tell success from slop.',
      'Skipping cost-of-wrong. High-stakes bets need heavier validation later, so decide that now.',
    ],
  },
}

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

// ---------- page ----------

export function ProcessDetail({ slug }: { slug: string }) {
  const d = DETAILS[slug]

  if (!d) {
    return (
      <Section tone="dark">
        <BackLink />
        <h1 className="mt-8 font-extrabold tracking-tightest text-headline">Not ready yet.</h1>
        <p className="mt-5 max-w-xl text-lg text-white/60">
          This step does not have a detail page yet. Framing &amp; direction is the first one built.
        </p>
        <a href="#/process/framing" className="pill mt-8 bg-accent text-accent-ink">
          See framing &amp; direction
        </a>
      </Section>
    )
  }

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
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">
            What a good bet looks like.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Same shape every time: one sharp bet, a measurable definition of good, and one thing you
            refuse to do.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {d.examples.map((ex, i) => (
            <Reveal key={ex.context} delay={i * 0.04}>
              <div className="h-full rounded-2xl bg-surface p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-muted">{ex.context}</p>
                <dl className="mt-4 space-y-3">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-accent-ink">Bet</dt>
                    <dd className="mt-1 text-[15px] font-semibold leading-snug text-ink">{ex.bet}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-accent-ink">Good means</dt>
                    <dd className="mt-1 text-[15px] leading-snug text-ink/80">{ex.good}</dd>
                  </div>
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
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">
            Steal these. Fill the brackets.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Paste into your model of choice as a sparring partner. The point is to be argued with, not
            agreed with.
          </p>
        </Reveal>

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

      {/* Workshop guide */}
      <Section tone="dark">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Run the workshop</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">
            A 90-minute framing session.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-white/60">{d.workshop.intro}</p>
        </Reveal>

        <ol className="mt-12 space-y-4">
          {d.workshop.steps.map((s) => (
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
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Who is in the room</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/80">{d.workshop.roles}</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">You leave with</p>
              <ul className="mt-3 space-y-1.5">
                {d.workshop.artifacts.map((a) => (
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

      {/* Pitfalls */}
      <Section tone="light">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Watch out for</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">
            Four ways framing goes wrong.
          </h2>
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
          <div className="mt-12 flex flex-wrap gap-3">
            <a href="#/process" className="pill bg-ink text-paper">
              Back to the process
            </a>
            <a href="#/process/framing" className="pill border border-ink/15 text-ink">
              Top of this page
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
