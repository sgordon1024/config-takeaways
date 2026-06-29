import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import opentype from 'opentype.js'
import kalamUrl from '../assets/Kalam-Bold.ttf'

// Stable per-glyph pseudo-random for the hand-lettered layout/timing.
const rnd = (n: number) => {
  const x = Math.sin(n * 127.1) * 43758.5453
  return x - Math.floor(x)
}

type Glyph = { d: string; cx: number; cy: number; rot: number; scale: number; dy: number; delay: number; dur: number }
type Built = { glyphs: Glyph[]; viewBox: string }

// Parse the font once, shared across renders.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let fontPromise: Promise<any> | null = null

/**
 * Renders text as real glyph outlines and "writes" each character in by animating
 * its stroke along its own path (Framer `pathLength`), so the reveal follows the
 * character shape rather than a left-to-right wipe. Fill inks in as each letter
 * finishes. Per-glyph size/tilt/baseline give it a hand-lettered look.
 */
export function HandDrawText({ lines, className = '' }: { lines: string[]; className?: string }) {
  const reduce = useReducedMotion()
  const [built, setBuilt] = useState<Built | null>(null)

  useEffect(() => {
    let cancelled = false
    if (!fontPromise) {
      fontPromise = fetch(kalamUrl)
        .then((r) => r.arrayBuffer())
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((b) => (opentype as any).parse(b))
    }
    fontPromise
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((font: any) => {
        if (cancelled) return
        const FS = 120
        const lineH = FS * 1.36
        const ascent = (font.ascender / font.unitsPerEm) * FS
        const descent = (Math.abs(font.descender) / font.unitsPerEm) * FS
        const widthOf = (s: string) => font.getAdvanceWidth(s, FS)
        const maxW = Math.max(...lines.map(widthOf))

        const glyphs: Glyph[] = []
        let gi = 0
        lines.forEach((line, li) => {
          let penX = (maxW - widthOf(line)) / 2
          const baseY = ascent + li * lineH
          for (const ch of line) {
            const adv = font.getAdvanceWidth(ch, FS)
            if (ch !== ' ') {
              const path = font.getPath(ch, penX, baseY, FS)
              const bb = path.getBoundingBox()
              const i = gi
              glyphs.push({
                d: path.toPathData(2),
                cx: (bb.x1 + bb.x2) / 2,
                cy: (bb.y1 + bb.y2) / 2,
                rot: (rnd(i * 4 + 1) - 0.5) * 12,
                scale: 0.9 + rnd(i * 4 + 2) * 0.24,
                dy: (rnd(i * 4 + 3) - 0.5) * FS * 0.06,
                delay: i * 0.11 + (rnd(i * 4 + 4) - 0.5) * 0.05,
                dur: 0.55 + rnd(i * 4 + 2) * 0.45,
              })
              gi++
            }
            penX += adv
          }
        })

        const pad = FS * 0.7
        const blockH = ascent + (lines.length - 1) * lineH + descent
        setBuilt({ glyphs, viewBox: `${-pad} ${-pad} ${maxW + 2 * pad} ${blockH + 2 * pad}` })
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [lines])

  // Reserve space (and provide the text to AT) while the font loads.
  if (!built) return <div className={className} style={{ minHeight: '26vh' }} aria-label={lines.join(' ')} role="img" />

  return (
    <svg
      className={className}
      viewBox={built.viewBox}
      role="img"
      aria-label={lines.join(' ')}
      fill="none"
      style={{ filter: 'url(#handGrit)' }}
    >
      {built.glyphs.map((g, i) => (
        <g
          key={i}
          transform={`translate(0 ${g.dy}) rotate(${g.rot} ${g.cx} ${g.cy}) translate(${g.cx} ${g.cy}) scale(${g.scale}) translate(${-g.cx} ${-g.cy})`}
        >
          <motion.path
            d={g.d}
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={reduce ? { pathLength: 1, fillOpacity: 1 } : { pathLength: 0, fillOpacity: 0 }}
            whileInView={{ pathLength: 1, fillOpacity: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    pathLength: { duration: g.dur, ease: [0.4, 0, 0.5, 1], delay: g.delay },
                    fillOpacity: { duration: g.dur * 0.45, delay: g.delay + g.dur * 0.55 },
                  }
            }
          />
        </g>
      ))}
    </svg>
  )
}
