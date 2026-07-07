import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  onClick?: () => void
}

export function Button({ children, variant = 'primary', disabled = false, onClick }: Props) {
  return (
    <button type="button" className="sprout-btn" data-variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
