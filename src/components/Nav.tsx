import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { softSpring } from '../lib/motion'

const LINKS = [
  { href: '#themes', label: 'Themes' },
  { href: '#deep-dives', label: 'Deep dives' },
]

function SunMoon({ dark }: { dark: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {dark ? (
        <path
          d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
          fill="currentColor"
        />
      ) : (
        <>
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="11.2"
              y="0.5"
              width="1.6"
              height="3.4"
              rx="0.8"
              fill="currentColor"
              transform={`rotate(${i * 45} 12 12)`}
            />
          ))}
        </>
      )}
    </svg>
  )
}

export function Nav({ theme, onToggleTheme }: { theme: 'light' | 'dark'; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 56))

  const shell = scrolled
    ? 'bg-paper/85 text-ink dark:bg-ink/85 dark:text-paper border-hairline/80 dark:border-white/10 backdrop-blur-xl'
    : 'bg-transparent text-paper border-transparent'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className={`border-b transition-colors duration-500 ${shell}`}>
        <div className="shell flex h-16 items-center justify-between gap-4">
          <a href="#top" className="group flex items-center gap-2 font-extrabold tracking-tightest">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
            <span className="text-base sm:text-lg">Config&nbsp;2026</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium opacity-80 transition-all duration-200 hover:bg-black/5 hover:opacity-100 dark:hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="grid h-11 w-11 place-items-center rounded-full transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10"
            >
              <SunMoon dark={theme === 'dark'} />
            </button>
            <motion.a
              href="#themes"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="pill hidden bg-accent text-accent-ink hover:shadow-lg hover:shadow-accent/30 sm:inline-flex"
            >
              The takeaways
            </motion.a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10 md:hidden"
            >
              <div className="space-y-1.5">
                <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="block h-0.5 w-5 bg-current" />
                <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-0.5 w-5 bg-current" />
                <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="block h-0.5 w-5 bg-current" />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={softSpring}
              className="overflow-hidden border-t border-hairline/60 bg-paper text-ink dark:border-white/10 dark:bg-ink dark:text-paper md:hidden"
            >
              <div className="shell flex flex-col gap-1 py-3">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-semibold hover:bg-surface dark:hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#themes"
                  onClick={() => setOpen(false)}
                  className="pill mt-2 w-full bg-accent text-accent-ink"
                >
                  The takeaways
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
