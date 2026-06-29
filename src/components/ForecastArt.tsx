import { predictions } from '../illustrations/predictions'

// The six forecast illustrations, keyed pred-01 … pred-06. Inlined as raw SVG
// strings (NOT <img>/background) so currentColor, the SMIL animation, and the
// baked-in grain/wobble filters all run. The near-black card sets color: white,
// which the line work inherits; the green/clay/teal accents are baked in.
const ART: Record<string, string> = { ...predictions }

export function ForecastArt({ id, className = '' }: { id: string; className?: string }) {
  const svg = ART[id]
  if (!svg) return null
  return (
    <span
      aria-hidden="true"
      className={`block text-white [&>svg]:block [&>svg]:h-full [&>svg]:w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
