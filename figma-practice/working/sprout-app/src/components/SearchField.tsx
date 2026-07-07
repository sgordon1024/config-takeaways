import type { ChangeEvent } from 'react'

type Props = {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export function SearchField({ placeholder = 'Search', value, onChange }: Props) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
    />
  )
}
