import type { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  action?: ReactNode
}

export function EmptyState({ title, subtitle, action }: Props) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon" aria-hidden="true" />
      <h3 className="empty-state-title">{title}</h3>
      {subtitle && <p className="empty-state-subtitle">{subtitle}</p>}
      {action}
    </div>
  )
}
