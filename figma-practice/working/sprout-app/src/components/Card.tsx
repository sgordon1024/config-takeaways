type Props = {
  title: string
  subtitle?: string
  imageSrc?: string
}

export function Card({ title, subtitle, imageSrc }: Props) {
  return (
    <article className="card">
      <img
        className="card-image"
        src={imageSrc}
        alt=""
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
        }}
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
    </article>
  )
}
