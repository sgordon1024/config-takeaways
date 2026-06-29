import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { reveal } from '../lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay when used standalone. */
  delay?: number
  as?: 'div' | 'li' | 'section'
}

/**
 * Scroll-triggered reveal: fades + slides in when it enters the viewport (once).
 * Reduced-motion users get an instant, calm appearance (handled by Framer +
 * the global CSS fallback).
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}
