import { useEffect, useMemo, useRef, useState } from 'react'
import { layoutText, LINE_H } from './handLayout'

// Lines must match HandDrawText's INTRO_LINES so the saved gaps transfer.
const LINES = ['When anyone can build anything,', 'building stops being the job.', 'Taste becomes the work.']

// Current baked spacing (HandDrawText's GAPS) so tuning continues from where it is now.
const SEED: number[][] = [
  [12, 1, 4, 0, 0, 6, 8, 6, 6, 8, 0, 0, 5, 6, 0, 0, 5, 6, 2, 3, 0, 0, 6, 8, 6, 3, 5, 2, 8, 4],
  [5, 6, 2, 3, 6, 2, 8, 0, 0, 4, 3, 6, 7, 0, 0, 6, 4, 2, 8, 0, 0, 3, 5, 0, 0, 2, 6, 1],
  [5, 6, 4, 3, 0, 0, 6, 4, 5, 6, 8, 4, 0, 0, 3, 5, 0, -3, 6, 6, 4, 2],
]

const seedGaps = () => SEED.map((row) => row.slice())
const emptyGaps = () => LINES.map((l) => Array<number>(Math.max(0, [...l].length - 1)).fill(0))

// Ordered list of every gap (line-major), for Shift+arrow navigation.
const ALL_GAPS = LINES.flatMap((l, li) =>
  Array.from({ length: Math.max(0, [...l].length - 1) }, (_, ci) => ({ li, ci })),
)

/**
 * Temporary spacing tool (route #/spacing). Click between two letters to drop a
 * blinking cursor on that gap (or Shift+←/→ to step the cursor between gaps),
 * then use ←/→ to lower/raise the spacing there. Save prints the per-gap values
 * to bake into HandDrawText.
 */
export function LetterSpacingEditor() {
  const [gaps, setGaps] = useState<number[][]>(seedGaps)
  const [sel, setSel] = useState<{ li: number; ci: number } | null>(null)
  const [output, setOutput] = useState('')
  const svgRef = useRef<SVGSVGElement>(null)

  const { glyphs, gapMarks, viewBox } = useMemo(() => layoutText(LINES, gaps), [gaps])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      e.preventDefault()
      const dir = e.key === 'ArrowRight' ? 1 : -1
      if (e.shiftKey) {
        // Shift+arrow steps the cursor to the next/previous gap.
        if (ALL_GAPS.length === 0) return
        const idx = sel
          ? ALL_GAPS.findIndex((g) => g.li === sel.li && g.ci === sel.ci)
          : dir > 0
            ? -1
            : ALL_GAPS.length
        const ni = Math.max(0, Math.min(ALL_GAPS.length - 1, idx + dir))
        setSel(ALL_GAPS[ni])
        return
      }
      // Plain arrow lowers/raises the spacing at the selected gap (hold to repeat).
      if (!sel) return
      setGaps((prev) => {
        const next = prev.map((a) => a.slice())
        next[sel.li][sel.ci] = Math.max(-12, Math.min(60, (next[sel.li][sel.ci] ?? 0) + dir))
        return next
      })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sel])

  const onPick = (e: React.MouseEvent) => {
    const svg = svgRef.current
    if (!svg) return
    const r = svg.getBoundingClientRect()
    const [vx, vy, vw, vh] = viewBox.split(' ').map(Number)
    const x = vx + ((e.clientX - r.left) / r.width) * vw
    const y = vy + ((e.clientY - r.top) / r.height) * vh
    // nearest line, then nearest gap on it
    let li = 0
    let bestDy = Infinity
    LINES.forEach((_, i) => {
      const dy = Math.abs(y - (i * LINE_H + 11))
      if (dy < bestDy) {
        bestDy = dy
        li = i
      }
    })
    let pick: { li: number; ci: number } | null = null
    let bestDx = Infinity
    gapMarks
      .filter((g) => g.li === li)
      .forEach((g) => {
        const dx = Math.abs(g.x - x)
        if (dx < bestDx) {
          bestDx = dx
          pick = { li: g.li, ci: g.ci }
        }
      })
    if (pick) setSel(pick)
  }

  const save = () => {
    const json = '[\n' + gaps.map((row) => '  [' + row.join(', ') + ']').join(',\n') + '\n]'
    setOutput(json)
    navigator.clipboard?.writeText(json).catch(() => {})
    // eslint-disable-next-line no-console
    console.log('GAPS =', json)
  }

  const selMark = sel ? gapMarks.find((g) => g.li === sel.li && g.ci === sel.ci) : null
  const selVal = sel ? gaps[sel.li][sel.ci] ?? 0 : 0

  return (
    <div className="min-h-screen bg-[#0b0b0b] p-8 text-white">
      <style>{`.sp-cursor{animation:spblink 1.05s steps(2,jump-none) infinite}@keyframes spblink{50%{opacity:0}}`}</style>
      <div className="mx-auto max-w-5xl">
        <h1 className="font-hand text-3xl">Letter-spacing tool</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">
          Click between two letters to place the cursor (or <strong className="text-white/80">Shift + ← / →</strong> to
          step it between gaps). Then press <strong className="text-white/80">← / →</strong> to lower / raise the spacing
          at that gap — hold to repeat. When it looks right, hit Save and paste the result back to me.
        </p>
        <p className="mt-2 text-sm font-semibold text-accent">
          {sel ? `Gap after line ${sel.li + 1}, char ${sel.ci + 1}: ${selVal}` : 'No gap selected'}
        </p>

        <div className="mt-6 rounded-2xl bg-[#141414] p-4 ring-1 ring-white/10">
          <svg ref={svgRef} viewBox={viewBox} className="block w-full cursor-text select-none" onClick={onPick} role="img">
            <rect x={viewBox.split(' ')[0]} y={viewBox.split(' ')[1]} width={viewBox.split(' ')[2]} height={viewBox.split(' ')[3]} fill="#000" opacity={0.001} />
            <g fill="none" stroke="#ffffff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              {glyphs.map((g, i) => (
                <path key={i} d={g.d} transform={`translate(${g.x} ${g.y})`} />
              ))}
            </g>
            {/* faint tick at every gap so they're easy to find */}
            {gapMarks.map((g, i) => (
              <line key={i} x1={g.x} y1={g.y - 4} x2={g.x} y2={g.y + 24} stroke="#06C167" strokeWidth={0.4} opacity={0.22} />
            ))}
            {selMark && (
              <line className="sp-cursor" x1={selMark.x} y1={selMark.y - 7} x2={selMark.x} y2={selMark.y + 27} stroke="#06C167" strokeWidth={1.4} />
            )}
          </svg>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={save} className="pill bg-accent text-accent-ink">Save spacing</button>
          <button onClick={() => { setGaps(seedGaps()); setSel(null); setOutput('') }} className="pill border border-white/25 text-white">
            Reset to current
          </button>
          <button onClick={() => { setGaps(emptyGaps()); setSel(null); setOutput('') }} className="pill border border-white/25 text-white">
            Zero all
          </button>
          <a href="#/prediction" className="pill border border-white/25 text-white">Back</a>
        </div>

        {output && (
          <pre className="mt-4 overflow-auto rounded-xl bg-black p-4 text-xs text-accent ring-1 ring-white/10">{output}</pre>
        )}
      </div>
    </div>
  )
}
