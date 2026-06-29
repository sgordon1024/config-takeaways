import type { Content } from '../types'

export function Footer({ meta }: { meta: Content['meta'] }) {
  return (
    <footer className="bg-ink text-paper dark:bg-[#0b0b0b]">
      <div className="shell flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-extrabold tracking-tightest">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
          Config&nbsp;2026 · Takeaways
        </div>
        <p className="max-w-md text-sm leading-relaxed text-white/50">
          An independent, unofficial summary curated by {meta.curator}. Not affiliated with or
          endorsed by {meta.host}. Quotes are verbatim from public session recordings; abstract-only
          talks reflect Figma&rsquo;s published session descriptions.
        </p>
        <p className="text-sm text-white/40">{meta.dates}</p>
      </div>
    </footer>
  )
}
