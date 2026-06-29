import { marks as marks1 } from '../illustrations/marks1'
import { marks as marks2 } from '../illustrations/marks2'

// The twelve animated theme marks, keyed theme-01 … theme-12. They are inlined
// as raw SVG strings (NOT <img>/background) on purpose: each relies on
// `currentColor` (so it inherits its parent's text color) and SMIL animation,
// both of which only work for SVG that lives directly in the DOM. The single
// fixed color is the accent #06C167. Set the parent's text color (white on dark
// surfaces, black on light) and the mono linework follows.
const MARKS: Record<string, string> = { ...marks1, ...marks2 }

export function markId(themeId: number): string {
  return `theme-${String(themeId).padStart(2, '0')}`
}

export function ThemeMark({ id, className = '' }: { id: string; className?: string }) {
  const svg = MARKS[id]
  if (!svg) return null
  return (
    <span
      aria-hidden="true"
      className={`inline-block [&>svg]:block [&>svg]:h-full [&>svg]:w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
