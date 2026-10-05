import { Fragment } from 'react'
import { useInView } from './Reveal'

// Splits a line into words that rise out of a mask one after another.
// Words (not letters) so Persian keeps its joined letterforms. The spaces
// sit between the masks: inside an inline-block they would collapse.
export default function SplitWords({ text, as: Tag = 'span', className = '', delay = 0, stagger = 55, immediate = false }) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const words = String(text).split(' ')
  const on = immediate || inView

  return (
    <Tag ref={ref} className={`split${on ? ' is-in' : ''} ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="split-mask" aria-hidden="true">
            <span className="split-word" style={{ '--d': `${delay + i * stagger}ms` }}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  )
}
