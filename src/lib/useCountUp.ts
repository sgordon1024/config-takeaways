import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Animated number counter. Counts from 0 to `target` once `play` becomes true.
 * Respects prefers-reduced-motion by snapping straight to the final value.
 */
export function useCountUp(target: number, play: boolean, duration = 1400) {
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!play) return
    if (reduce) {
      setValue(target)
      return
    }
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // easeOutExpo for a snappy, physics-y settle
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      setValue(Math.round(eased * target))
      if (t < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [play, target, duration, reduce])

  return value
}
