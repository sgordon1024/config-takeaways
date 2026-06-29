import type { ReactNode } from 'react'

type Tone = 'light' | 'dark'

interface SectionProps {
  id?: string
  tone?: Tone
  children: ReactNode
  className?: string
}

/**
 * A full-width band. `tone` sets the black/white rhythm; both tones also flip
 * sensibly when the global dark theme is on, so the monochrome system holds.
 */
const toneClass: Record<Tone, string> = {
  light: 'bg-paper text-ink dark:bg-ink dark:text-paper',
  dark: 'bg-ink text-paper dark:bg-[#0b0b0b] dark:text-paper',
}

export function Section({ id, tone = 'light', children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${toneClass[tone]} ${className}`}>
      <div className="shell py-20 sm:py-28 lg:py-36">{children}</div>
    </section>
  )
}
