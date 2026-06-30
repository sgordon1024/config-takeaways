import scriptFont from '../illustrations/hershey-stroke.json'

// Shared layout for the hand-drawn cursive intro, used by both the renderer
// (HandDrawText) and the spacing editor so per-gap values transfer exactly.

type GlyphData = { d: string; o: number }
const CHARS = (scriptFont as { chars: GlyphData[] }).chars
export const LINE_H = 42
export const SPACE_ADV = 14

export function glyphFor(ch: string): GlyphData | null {
  if (ch === ' ') return null
  const idx = ch.charCodeAt(0) - 33 // Hershey chars start at '!'
  return idx >= 0 && idx < CHARS.length ? CHARS[idx] : null
}

const advanceOf = (ch: string) => (ch === ' ' ? SPACE_ADV : glyphFor(ch)?.o ?? SPACE_ADV)

export type PlacedGlyph = { d: string; x: number; y: number; order: number; li: number }
export type GapMark = { li: number; ci: number; x: number; y: number } // gap after char ci on line li
export type LayoutResult = { glyphs: PlacedGlyph[]; gapMarks: GapMark[]; viewBox: string }

// `gaps[li][ci]` = extra units added after character ci on line li.
export function layoutText(lines: string[], gaps?: number[][]): LayoutResult {
  const lineWidth = (s: string, li: number) =>
    [...s].reduce((w, ch, ci) => w + advanceOf(ch) + (ci < s.length - 1 ? gaps?.[li]?.[ci] ?? 0 : 0), 0)
  const maxW = Math.max(...lines.map((s, li) => lineWidth(s, li)))

  const glyphs: PlacedGlyph[] = []
  const gapMarks: GapMark[] = []
  let order = 0
  lines.forEach((line, li) => {
    const chars = [...line]
    let penX = (maxW - lineWidth(line, li)) / 2
    const y = li * LINE_H
    chars.forEach((ch, ci) => {
      const g = glyphFor(ch)
      if (g) {
        glyphs.push({ d: g.d, x: penX, y, order, li })
        order++
      }
      penX += advanceOf(ch)
      if (ci < chars.length - 1) {
        const extra = gaps?.[li]?.[ci] ?? 0
        gapMarks.push({ li, ci, x: penX + extra / 2, y })
        penX += extra
      }
    })
  })

  const pad = 12
  const h = (lines.length - 1) * LINE_H + 37
  return { glyphs, gapMarks, viewBox: `${-pad} ${-3 - pad} ${maxW + 2 * pad} ${h + 2 * pad}` }
}
