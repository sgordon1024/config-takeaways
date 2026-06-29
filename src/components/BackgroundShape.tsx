import { motion, useReducedMotion } from 'framer-motion'

/**
 * A subtle, slow-drifting accent glow behind the hero. Decorative only
 * (aria-hidden); freezes for reduced-motion users.
 */
export function BackgroundShape() {
  const reduce = useReducedMotion()
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -right-24 -top-24 h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at center, rgba(6,193,103,0.30), transparent 62%)' }}
        animate={reduce ? undefined : { x: [0, 40, -10, 0], y: [0, 30, 60, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 left-[-10%] h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.10), transparent 60%)' }}
        animate={reduce ? undefined : { x: [0, -30, 20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
