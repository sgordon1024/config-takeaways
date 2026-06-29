import { panels } from '../illustrations/panels'

// The five Deep Dive side-panel illustrations, keyed dd-01 … dd-05. Inlined as
// raw SVG strings (NOT <img>/background) so currentColor + SMIL animation work.
// The art is transparent line-work in currentColor; the parent sets the green
// surface (#06C167) and deep-green ink (color: #004824), which the art inherits.
const PANELS: Record<string, string> = { ...panels }

export function DeepPanel({ id, className = '' }: { id: string; className?: string }) {
  const svg = PANELS[id]
  if (!svg) return null
  return (
    <span
      aria-hidden="true"
      className={`block [&>svg]:block [&>svg]:h-full [&>svg]:w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
