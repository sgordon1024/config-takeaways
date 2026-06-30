import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import scriptFont from '../illustrations/hershey-stroke.json'

// Hershey "Script 1-stroke": each glyph is open polyline strokes (a true single
// stroke), so a letter is ONE path drawn as one motion (no fill/border split).
// The chars array starts at '!' (ascii 33), so the index is charCode - 33.
type GlyphData = { d: string; o: number }
const CHARS = (scriptFont as { chars: GlyphData[] }).chars
const LINE_H = 42
const SPACE_ADV = 12

function glyphFor(ch: string): GlyphData | null {
  if (ch === ' ') return null
  const idx = ch.charCodeAt(0) - 33
  return idx >= 0 && idx < CHARS.length ? CHARS[idx] : null
}

// Stable per-glyph pseudo-random for subtle hand-lettered variation.
const rnd = (n: number) => {
  const x = Math.sin(n * 127.1) * 43758.5453
  return x - Math.floor(x)
}

type Placed = { d: string; x: number; y: number; cx: number; cy: number; rot: number; scale: number; delay: number; dur: number }

/**
 * Writes text on, one letter at a time, by drawing each glyph's single stroke
 * along its own path (Framer `pathLength`). Each letter is one path: only the
 * stroke draws (no separate fill), and it stays hidden until its turn, so there
 * are no pre-draw fragments and only one letter animates at any moment.
 */
export function HandDrawText({ lines, className = '' }: { lines: string[]; className?: string }) {
  const reduce = useReducedMotion()

  const { glyphs, viewBox } = useMemo(() => {
    const lineWidth = (s: string) =>
      [...s].reduce((w, ch) => w + (ch === ' ' ? SPACE_ADV : glyphFor(ch)?.o ?? SPACE_ADV), 0)
    const maxW = Math.max(...lines.map(lineWidth))

    const placed: Placed[] = []
    let t = 0 // cumulative time so each letter starts only when the previous finishes
    let gi = 0
    lines.forEach((line, li) => {
      let penX = (maxW - lineWidth(line)) / 2
      for (const ch of line) {
        const g = glyphFor(ch)
        if (!g) {
          t += 0.06 // a written pause for spaces
          penX += SPACE_ADV
          continue
        }
        const dur = 0.1 + rnd(gi * 3 + 2) * 0.1
        placed.push({
          d: g.d,
          x: penX,
          y: li * LINE_H + (rnd(gi * 3 + 3) - 0.5) * 4,
          cx: g.o / 2,
          cy: 11,
          rot: (rnd(gi * 3 + 1) - 0.5) * 8,
          scale: 0.95 + rnd(gi * 3 + 2) * 0.12,
          delay: t,
          dur,
        })
        t += dur
        penX += g.o
        gi++
      }
    })

    const pad = 12
    const h = (lines.length - 1) * LINE_H + 37
    return { glyphs: placed, viewBox: `${-pad} ${-3 - pad} ${maxW + 2 * pad} ${h + 2 * pad}` }
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
        {glyphs.map((g, i) => (
          <g
            key={i}
            transform={`translate(${g.x} ${g.y}) translate(${g.cx} ${g.cy}) rotate(${g.rot}) scale(${g.scale}) translate(${-g.cx} ${-g.cy})`}
          >
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
