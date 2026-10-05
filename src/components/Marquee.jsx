// Two tilted bands crossing each other, scrolling in opposite directions.
// Each band repeats its items 4x and slides by exactly one quarter, so the
// loop is seamless at any width.
function Band({ items, reverse = false, className = '' }) {
  return (
    <div className={`band ${className}`} dir="ltr">
      <div className={`band-track${reverse ? ' is-reverse' : ''}`}>
        {[0, 1, 2, 3].map((g) => (
          <div className="band-group" key={g} aria-hidden={g > 0}>
            {items.map((item, i) => (
              <span className="band-item" key={i}>
                {item}
                <svg className="band-star" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Marquee({ top, bottom }) {
  return (
    <section className="bands" aria-label="stack">
      <Band items={bottom} reverse className="band-back" />
      <Band items={top} className="band-front" />
    </section>
  )
}
