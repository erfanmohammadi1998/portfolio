// Rendered 4x and animated by exactly one quarter-width so the strip stays
// visually full (no empty stretch) even on very wide viewports, and loops
// seamlessly regardless of how many items are passed in.
export default function Marquee({ items = [] }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1, 2, 3].map((g) => (
          <div className="marquee-group" key={g} aria-hidden={g > 0}>
            {items.map((item, i) => (
              <span key={i}>
                {item}
                <span className="marquee-dot">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
