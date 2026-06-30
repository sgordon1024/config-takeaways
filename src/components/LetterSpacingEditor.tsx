import { useEffect, useMemo, useRef, useState } from 'react'
import { layoutText, LINE_H } from './handLayout'

// Lines must match HandDrawText's INTRO_LINES so the saved gaps transfer.
const LINES = ['When anyone can build', 'anything, building stops', 'being the job.']

const emptyGaps = () => LINES.map((l) => Array<number>(Math.max(0, [...l].length - 1)).fill(0))

/**
 * Temporary spacing tool (route #/spacing). Click between two letters to drop a
 * blinking cursor on that gap, then use ←/→ to lower/raise the spacing there
 * (Shift = ±5). Save prints the per-gap values to bake into HandDrawText.
 */
export function LetterSpacingEditor() {
  const [gaps, setGaps] = useState<number[][]>(emptyGaps)
  const [sel, setSel] = useState<{ li: number; ci: number } | null>(null)
  const [output, setOutput] = useState('')
  const svgRef = useRef<SVGSVGElement>(null)

  const { glyphs, gapMarks, viewBox } = useMemo(() => layoutText(LINES, gaps), [gaps])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!sel) return
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      e.preventDefault()
      const step = (e.shiftKey ? 5 : 1) * (e.key === 'ArrowRight' ? 1 : -1)
      setGaps((prev) => {
        const next = prev.map((a) => a.slice())
        next[sel.li][sel.ci] = Math.max(-12, Math.min(60, (next[sel.li][sel.ci] ?? 0) + step))
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
          Click between two letters to place the cursor, then press ← / → to lower / raise the spacing
          at that gap (hold Shift for ±5). When it looks right, hit Save and paste the result back to me.
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
          <button onClick={() => { setGaps(emptyGaps()); setSel(null); setOutput('') }} className="pill border border-white/25 text-white">
            Reset
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
