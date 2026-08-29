// A generated cover for each project — a small architecture sketch drawn from
// the project's `arch` labels. Not a screenshot; a schematic, on brand with
// the system map.

const W = 460
const H = 128

export function LockGlyph() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <rect x="1.5" y="4.5" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1" />
      <path d="M3 4.5V3a2 2 0 0 1 4 0v1.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export default function ProjectCover({ arch = [], seed = '', className = '' }) {
  const nodes = arch.slice(0, 4)
  const n = nodes.length || 3
  const boxW = Math.min(96, (W - 32) / n - 10)
  const boxH = 30
  const pad = boxW / 2 + 14
  const span = W - pad * 2
  const gap = n > 1 ? span / (n - 1) : 0
  const y = H / 2

  return (
    <div className={`proj-cover ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id={`grid-${seed}`} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.12" />
          </pattern>
        </defs>

        <rect width={W} height={H} fill={`url(#grid-${seed})`} className="proj-cover-grid" />

        {nodes.map((_, i) => {
          if (i === 0) return null
          const x1 = pad + gap * (i - 1) + boxW / 2 - 3
          const x2 = pad + gap * i - boxW / 2 + 3
          return <line key={`e${i}`} x1={x1} y1={y} x2={x2} y2={y} className="proj-cover-edge" />
        })}

        {nodes.map((label, i) => {
          const cx = pad + gap * i
          const last = i === nodes.length - 1
          return (
            <g key={`n${i}`}>
              <rect
                x={cx - boxW / 2}
                y={y - boxH / 2}
                width={boxW}
                height={boxH}
                rx="5"
                className={`proj-cover-box${last ? ' is-out' : ''}`}
              />
              <text x={cx} y={y + 3.5} textAnchor="middle" className="proj-cover-label">
                {label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
