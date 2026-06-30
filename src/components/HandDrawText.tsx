import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { layoutText } from './handLayout'

// Stable per-glyph pseudo-random for the draw cadence.
const rnd = (n: number) => {
  const x = Math.sin(n * 127.1) * 43758.5453
  return x - Math.floor(x)
}

// Per-line, per-gap spacing overrides (extra units after each character),
// dialed in by hand with the spacing tool. Index [li][ci] = extra units after
// character ci on line li. Must stay in sync with INTRO_LINES' lengths.
// Lines 1-2 carry over the hand-tuned values from the original split; line 3
// ("Taste becomes the work.") is a fresh, even hand spacing.
const GAPS: number[][] = [
  // "When anyone can build anything,"
  [12, 1, 4, 0, 0, 6, 8, 6, 6, 8, 0, 0, 5, 6, 0, 0, 5, 6, 2, 3, 0, 0, 6, 8, 6, 3, 5, 2, 8, 4],
  // "building stops being the job."
  [5, 6, 2, 3, 6, 2, 8, 0, 0, 4, 3, 6, 7, 0, 0, 6, 4, 2, 8, 0, 0, 3, 5, 0, 0, 2, 6, 1],
  // "Taste becomes the work." (hand-tuned with the spacing tool)
  [5, 6, 4, 3, 0, 0, 6, 4, 5, 6, 13, 4, 0, 0, 3, 5, 0, -3, 9, 6, 5, 2],
]

/**
 * Writes text on one letter at a time by drawing each glyph's single stroke
 * along its own path (Framer `pathLength`). One path per letter (no fill/border
 * split), hidden until its turn so there are no pre-draw fragments.
 */
export function HandDrawText({ lines, className = '' }: { lines: string[]; className?: string }) {
  const reduce = useReducedMotion()

  const { timed, viewBox } = useMemo(() => {
    const { glyphs, viewBox } = layoutText(lines, GAPS)
    let t = 0
    const timed = glyphs.map((g) => {
      const dur = 0.1 + rnd(g.order * 3 + 2) * 0.1
      const item = { ...g, delay: t, dur }
      t += dur
      return item
    })
    return { timed, viewBox }
  }, [lines])

  return (
    <svg className={className} viewBox={viewBox} role="img" aria-label={lines.join(' ')} fill="none">
      <defs>
        {/* grit tuned for this (small) coordinate space: roughen + texture the strokes */}
        <filter id="hsGrit" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="2" seed="4" result="w" />
          <feDisplacementMap in="SourceGraphic" in2="w" scale="0.28" xChannelSelector="R" yChannelSelector="G" result="rough" />
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="9" result="g" />
          <feComponentTransfer in="g" result="ga">
            <feFuncA type="linear" slope="0.45" intercept="0.6" />
          </feComponentTransfer>
          <feComposite in="rough" in2="ga" operator="in" />
        </filter>
      </defs>
      <g filter="url(#hsGrit)">
        {timed.map((g, i) => (
          <g key={i} transform={`translate(${g.x} ${g.y})`}>
            <motion.path
              d={g.d}
              fill="none"
              stroke="#ffffff"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      pathLength: { duration: g.dur, ease: 'linear', delay: g.delay },
                      opacity: { duration: 0.001, delay: g.delay },
                    }
              }
            />
          </g>
        ))}
      </g>
    </svg>
  )
}
