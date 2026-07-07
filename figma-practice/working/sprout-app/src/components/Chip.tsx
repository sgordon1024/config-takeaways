type Props = {
  label: string
  variant?: 'default' | 'selected'
  onClick?: () => void
}

export function Chip({ label, variant = 'default', onClick }: Props) {
  return (
    <button
      type="button"
      className="chip"
      data-variant={variant}
      aria-pressed={variant === 'selected'}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
