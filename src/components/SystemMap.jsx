import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { mapNodes, mapEdges } from '../data/systemMap'

const VW = 960
const VH = 520

const nodeById = Object.fromEntries(mapNodes.map((n) => [n.id, n]))

// Smooth cubic path between two node centers — also fed to <animateMotion>.
function edgePath(a, b) {
  const my = (a.y + b.y) / 2
  return `M ${a.x} ${a.y} C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`
}

export default function SystemMap() {
  const { t, lang } = useLanguage()
  const navigate = useNavigate()
  const [active, setActive] = useState(null)

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  return (
    <div className="sysmap">
      <div className="sysmap-scroll">
        <div className="sysmap-stage">
          <svg
            className="sysmap-svg"
            viewBox={`0 0 ${VW} ${VH}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="var(--accent-2)" />
                <stop offset="1" stopColor="var(--accent)" />
              </linearGradient>
            </defs>

            {mapEdges.map(([from, to], i) => {
              const a = nodeById[from]
              const b = nodeById[to]
              const d = edgePath(a, b)
              const lit = active === from || active === to
              return (
                <g key={i}>
                  <path className={`sysmap-edge${lit ? ' is-lit' : ''}`} d={d} />
                  {!reduceMotion && (
                    <circle className="sysmap-packet" r="3.5">
                      <animateMotion
                        dur={`${2.6 + i * 0.4}s`}
                        repeatCount="indefinite"
                        path={d}
                        rotate="auto"
                      />
                    </circle>
                  )}
                </g>
              )
            })}
          </svg>

          {mapNodes.map((n) => (
            <button
              key={n.id}
              type="button"
              className={`sysmap-node${n.primary ? ' is-primary' : ''}${
                active === n.id ? ' is-active' : ''
              }`}
              style={{ left: `${(n.x / VW) * 100}%`, top: `${(n.y / VH) * 100}%` }}
              onMouseEnter={() => setActive(n.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(n.id)}
              onBlur={() => setActive(null)}
              onClick={() => navigate(`/${lang}/${n.to}`)}
            >
              <span className="sysmap-node-endpoint">{n.endpoint}</span>
              <span className="sysmap-node-name">
                <span className="sysmap-dot" aria-hidden="true" />
                {n.name}
              </span>
              <span className="sysmap-node-hint">{t(`map.nodes.${n.id}`)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
