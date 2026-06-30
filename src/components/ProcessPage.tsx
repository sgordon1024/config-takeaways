import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Section } from './Section'
import { Reveal } from './Reveal'

// ---------- small building blocks ----------

function Chip({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'muted' }) {
  const cls =
    tone === 'muted'
      ? 'bg-black/5 text-ink/60 ring-1 ring-black/5'
      : 'bg-accent/12 text-accent-ink'
  return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${cls}`}>{children}</span>
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-muted">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Catmull-Rom -> cubic bezier, for the effort curve.
function smoothPath(pts: number[][]) {
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`
  }
  return d
}

const CURVE = [
  { x: 60, y: 78, l: 'Frame' },
  { x: 157, y: 132, l: 'Context' },
  { x: 254, y: 116, l: 'Explore' },
  { x: 351, y: 190, l: 'Build' },
  { x: 449, y: 198, l: 'QA' },
  { x: 546, y: 102, l: 'Validate' },
  { x: 643, y: 78, l: 'Polish' },
  { x: 740, y: 144, l: 'Ship' },
]

function EffortCurve() {
  const reduce = useReducedMotion()
  const pts = CURVE.map((d) => [d.x, d.y])
  const line = smoothPath(pts)
  const area = `${line} L740,230 L60,230 Z`
  return (
    <svg viewBox="0 0 800 272" className="w-full" role="img" aria-label="Human effort is high at framing, dips through build and QA, and rises again at validation and polish.">
      <title>Where human effort concentrates across the eight stages</title>
      <line x1="60" y1="230" x2="740" y2="230" stroke="#E6E6E6" strokeWidth="1" />
      <motion.path
        d={area}
        fill="#06C167"
        fillOpacity="0.1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="#06C167"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
      />
      {CURVE.map((d, i) => (
        <g key={i}>
          <circle cx={d.x} cy={d.y} r="4" fill="#06C167" />
          <text x={d.x} y="252" textAnchor="middle" fill="#6B6B6B" fontSize="12" fontWeight="600">
            {d.l}
          </text>
        </g>
      ))}
      <text x="60" y="64" textAnchor="middle" fill="#6B6B6B" fontSize="11">set the bet</text>
      <text x="643" y="64" textAnchor="middle" fill="#6B6B6B" fontSize="11">finish the 5%</text>
      <text x="400" y="221" textAnchor="middle" fill="#6B6B6B" fontSize="11">production + handoff compress</text>
    </svg>
  )
}

// ---------- the eight stages ----------

type Stage = {
  n: string
  name: string
  dur: string
  lead: string
  human: number
  disciplines: string[]
  tools: string[]
  how: string
  example: string
  detailHref?: string
}

const STAGES: Stage[] = [
  {
    n: '01',
    name: 'Framing & direction',
    dur: '~3-7 days',
    lead: 'Human-led',
    human: 85,
    disciplines: ['Product strategy', 'Design lead', 'Eng feasibility'],
    tools: ['FigJam + AI agent', 'LLM sparring partner', 'Fast user calls'],
    how: 'The agent clusters assumptions and counter-arguments; you hand-write the conviction and the bet. Gate each idea by how much context it needs, how novel it is, and the cost of being wrong.',
    example:
      "Decide onboarding's job is activation, not a tour. Write the bet: “first value in under 2 minutes.” Named approvers co-sign before anyone builds.",
    detailHref: '#/process/framing',
  },
  {
    n: '02',
    name: 'Context authoring',
    dur: '~2-5 days, reused after',
    lead: 'Shared infrastructure',
    human: 55,
    disciplines: ['Design systems', 'Design eng', 'Content design'],
    tools: ['Skills', 'Figma MCP', 'Code Connect', 'Golden sets'],
    how: 'Write a few tight skills (precision over volume), bake accessibility into tokens, and wire MCP so agents read your real system. Build a small golden set to measure one-shot accuracy. Expensive once, near-free to reuse.',
    example:
      "Encode brand voice, the component set, and “done means WCAG AA and matches tokens” so every agent session starts from your taste, not the average of everyone.",
  },
  {
    n: '03',
    name: 'Divergent exploration',
    dur: '~4-6 days',
    lead: 'Generate, then curate',
    human: 60,
    disciplines: ['Interaction design', 'Motion / visual', 'Lead taste'],
    tools: ['Parallel prompting', 'Figma Make', 'Motion / Shaders'],
    how: 'Fire parallel prompts for constrained variations, all pulling from your system. Generate, then hand-edit. Then curate hard: most options should get a no.',
    example:
      'Generate three directions at once (checklist, wizard, progressive). Kill two. Hand-tune the motion on the survivor.',
  },
  {
    n: '04',
    name: 'Build: idea to code',
    dur: '~1-2 weeks',
    lead: 'AI-compressed',
    human: 25,
    disciplines: ['Design eng', 'Front-end', 'Agent orchestration'],
    tools: ['Make / code layers', 'MCP + Code Connect', 'Coding agents', 'Git'],
    how: 'Build against the codebase so output uses real components and tokens. Avoid naive one-shotting: draft, annotate, swap in system utilities. A human owns every merge.',
    example:
      'Generate the wizard in Make against real components. The agent handles form and error states; you hand-author the empty and success moments. Push to a branch.',
  },
  {
    n: '05',
    name: 'Parity & QA checks',
    dur: '~0.5-2 days',
    lead: 'AI-compressed',
    human: 20,
    disciplines: ['Design eng', 'QA', 'Accessibility'],
    tools: ['Drift checks', 'Storybook diff', 'Playwright parity'],
    how: "Automated checks prove the build matches design-system truth: drift, contrast, visual diff, golden-set score. QA's job shifts to defining what “done” and “parity” mean.",
    example:
      'A drift check flags one detached color and a contrast fail. Route just those two back to the agent. The visual diff then passes.',
  },
  {
    n: '06',
    name: 'Validation & evals',
    dur: '~2-4 days',
    lead: 'Human-led',
    human: 75,
    disciplines: ['UX research', 'Analytics', 'Lead judgment'],
    tools: ['In-app user testing', 'Evals', 'A/B from Make'],
    how: 'Turn the definition of good into repeatable evals and put the build in front of real users. Weight rigor by how hard it is to undo. Ask whose voice is not in the room.',
    example:
      'Five target users in an AI-moderated test. Two stall on step 3 and the eval score is under bar, so step 3 gets reworked before it ships.',
  },
  {
    n: '07',
    name: 'The final 5% + trust',
    dur: '~2-4 days',
    lead: 'Human-led',
    human: 90,
    disciplines: ['Visual + motion craft', 'Content / voice', 'Relationship design'],
    tools: ['Motion mode', 'Direct controls', 'Trust layer'],
    how: "Deliberately override the tool's “good enough.” Polish the feel and the voice, design the relationship over time, and decide where a human must stay in the loop.",
    example:
      "Hand-tune the step transitions, rewrite the empty state in your real voice, and add a clear “skip for now” escape hatch.",
  },
  {
    n: '08',
    name: 'Ship & iterate',
    dur: 'continuous',
    lead: 'Looped',
    human: 50,
    disciplines: ['Front-end / ops', 'Analytics', 'DS maintenance'],
    tools: ['CI/CD + parity gates', 'Feature flags', 'Live analytics'],
    how: 'A human gate picks the one version that ships. Ship behind flags, run evals in production, and feed new conventions back into the system so the next cycle starts smarter.',
    example:
      'Release behind a flag to 10 percent, watch activation, then fold the new wizard pattern back into the design system.',
  },
]

function StageCard({ s, last }: { s: Stage; last: boolean }) {
  return (
    <Reveal as="li" className="relative pl-16 sm:pl-20">
      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-extrabold text-paper">
        {s.n}
      </div>
      {!last && <span aria-hidden="true" className="absolute bottom-[-2.5rem] left-6 top-12 w-px bg-hairline" />}

      <div className="rounded-2xl bg-paper p-6 ring-1 ring-black/5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">{s.name}</h3>
          <span className="rounded-full bg-accent/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-ink">
            {s.dur}
          </span>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs font-semibold text-muted">
            <span>{s.lead}</span>
            <span>{s.human}% human</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-black/10">
            <div className="h-full rounded-full bg-accent" style={{ width: `${s.human}%` }} />
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Who</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {s.disciplines.map((d) => (
                <Chip key={d}>{d}</Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Tools</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {s.tools.map((t) => (
                <Chip key={t} tone="muted">
                  {t}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-ink/80">{s.how}</p>

        <div className="mt-4 rounded-xl bg-surface px-4 py-3 text-sm leading-relaxed">
          <span className="font-bold text-accent-ink">Example. </span>
          <span className="text-ink/70">{s.example}</span>
        </div>

        <div className="mt-5">
          {s.detailHref ? (
            <a
              href={s.detailHref}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-black/[0.03]"
            >
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : (
            <span
              aria-disabled="true"
              title="Detail coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-muted/60"
            >
              Learn more
              <span className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted/70">
                soon
              </span>
            </span>
          )}
        </div>
      </div>
    </Reveal>
  )
}

// ---------- page ----------

export function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="dark">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Ways of working</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-[16ch] font-extrabold tracking-tightest text-headline">
            The new product process.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-white/60">
            The old relay, design to dev to test, is collapsing into one loop. Here is the end-to-end
            process: who is involved, the tools they use, how they use them, and roughly for how long.
          </p>
        </Reveal>
      </Section>

      {/* The shift */}
      <Section tone="light">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">The shift</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">
            Production got cheap. So effort moves to the ends.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            AI compresses the middle, the making and the handoff. The scarce work is now at the front,
            framing the right bet, and at the back, finishing the differentiating last 5% and proving
            it is actually good.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 rounded-2xl bg-paper p-5 ring-1 ring-black/5 sm:p-8">
            <EffortCurve />
            <p className="mt-2 text-center text-sm text-muted">
              Human effort across the eight stages. The dip is where agents do the heavy lifting.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-surface p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Before</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {['Design', 'Develop', 'Test', 'Ship'].map((it, i, a) => (
                  <Fragment key={it}>
                    <span className="rounded-lg bg-black/5 px-3 py-1.5 text-sm font-semibold text-ink/70">{it}</span>
                    {i < a.length - 1 && <Arrow />}
                  </Fragment>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                A linear relay. Weeks long. Each handoff loses context.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl bg-ink p-6 text-paper sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Now</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {['Frame', 'Generate', 'Validate', 'Ship'].map((it, i, a) => (
                  <Fragment key={it}>
                    <span className="rounded-lg bg-white/10 px-3 py-1.5 text-sm font-semibold">{it}</span>
                    {i < a.length - 1 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-white/40">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Fragment>
                ))}
                <span className="rounded-full bg-accent/20 px-2.5 py-1 text-xs font-semibold text-accent">↺ loops back</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                One continuous loop. Days, not weeks. Context travels inside the system.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* The eight stages */}
      <Section tone="light" className="bg-surface">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">The process</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">
            Eight stages, one loop.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Each stage below is followed through one running example: shipping a new onboarding flow.
            Durations are typical for a mid-size feature.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-10">
          {STAGES.map((s, i) => (
            <StageCard key={s.n} s={s} last={i === STAGES.length - 1} />
          ))}
        </ol>
      </Section>

      {/* Client feedback */}
      <Section tone="dark">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Client feedback</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[22ch] font-extrabold tracking-tightest text-headline">
            Feedback becomes a loop, not a reveal.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-white/60">
            When building is fast, slow batched feedback is the bottleneck. Capture every comment, then
            the lead sorts each one into one of two buckets.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12">
            <div className="mx-auto w-fit rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
              Every client comment
            </div>
            <div className="mx-auto my-3 h-6 w-px bg-white/20" aria-hidden="true" />
            <div className="mx-auto w-fit rounded-xl bg-accent px-4 py-2 text-sm font-bold text-accent-ink">
              Triage (the lead)
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">Direction-level</p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                  It challenges the bet. This re-opens the framing decision with a logged re-decision the
                  lead owns. A comment never silently overrides the agreed direction.
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">Execution-level</p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                  A scoped change inside the agreed direction. The lead specifies it (which component,
                  which state, expected behavior), routes that to the agent, then re-reviews.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Upfront', 'Approvers co-sign the bet before anyone builds.'],
              ['During build', 'Review a working build, not static comps.'],
              ['Go / no-go', 'Decide on evidence: user clips and eval scores.'],
              ['After launch', 'A standing weekly cadence on real behavior.'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border-l-2 border-accent bg-white/[0.04] py-3 pl-4 pr-3">
                <p className="text-xs font-bold uppercase tracking-wider text-white/80">{k}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* How it scales */}
      <Section tone="light">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">How it scales</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[20ch] font-extrabold tracking-tightest text-headline">
            Same loop, different ceremony.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            {
              t: 'Solo + agents',
              d: 'All eight stages, lighter gates. Your client is your conviction plus a few design partners. Real but fragile: you are the single point of failure for taste and trust.',
            },
            {
              t: 'T-shaped pod',
              d: 'Three to six people, roles blurred, one lead holds the quality bar. The pod catches the wrong output a solo misses. The recommended default.',
              rec: true,
            },
            {
              t: 'Enterprise',
              d: 'The same loop with formal gates, versioned governance, accessibility as a token-level invariant, and a pipeline that enforces sign-offs so nothing bypasses review.',
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div
                className={`h-full rounded-2xl p-6 sm:p-7 ${
                  c.rec ? 'bg-ink text-paper' : 'bg-surface text-ink'
                }`}
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-extrabold tracking-tight">{c.t}</h3>
                  {c.rec && (
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent-ink">
                      Recommended
                    </span>
                  )}
                </div>
                <p className={`mt-3 text-[15px] leading-relaxed ${c.rec ? 'text-white/65' : 'text-muted'}`}>
                  {c.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-3xl rounded-xl border-l-2 border-hairline bg-surface py-4 pl-5 pr-4 text-sm leading-relaxed text-muted">
            A note on the numbers: durations are planning estimates, not measured. The shape is the
            point, the middle compresses and the ends grow. Synthesized from Figma Config 2026 talks.
          </p>
        </Reveal>
      </Section>
    </>
  )
}
