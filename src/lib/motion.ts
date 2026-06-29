import type { Variants, Transition } from 'framer-motion'

// Uber-ish physics: a confident spring with a soft settle.
export const spring: Transition = { type: 'spring', stiffness: 120, damping: 18, mass: 0.9 }
export const softSpring: Transition = { type: 'spring', stiffness: 90, damping: 20 }

// Fade + slide up on enter.
export const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: spring },
}

// Container that staggers its children (hero, card grids).
export const stagger = (delay = 0, step = 0.08): Variants => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: step } },
})

// Hero line reveal, larger travel, springy.
export const heroLine: Variants = {
  hidden: { opacity: 0, y: 42 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 110, damping: 16 } },
}
