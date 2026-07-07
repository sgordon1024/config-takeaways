type Props = {
  title: string
  subtitle?: string
  showSubtitle?: boolean
  imageSrc?: string
  onClick?: () => void
}

export function ListRow({ title, subtitle, showSubtitle = true, imageSrc, onClick }: Props) {
  return (
    <button type="button" className="list-row" onClick={onClick}>
      <img
        className="list-row-thumb"
        src={imageSrc}
        alt=""
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
        }}
      />
      <span className="list-row-text">
        <span className="list-row-title">{title}</span>
        {showSubtitle && subtitle && <span className="list-row-subtitle">{subtitle}</span>}
      </span>
      <span className="list-row-chevron" aria-hidden="true">›</span>
    </button>
  )
}
