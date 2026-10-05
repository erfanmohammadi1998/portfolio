import { useEffect, useState } from 'react'

// Cycles through a list of phrases, each sliding up into place.
export default function RotatingWords({ words, interval = 2600 }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="rotator" aria-live="polite">
      {/* The invisible longest phrase reserves width so nothing jumps. */}
      <span className="rotator-sizer" aria-hidden="true">
        {words.reduce((a, b) => (b.length > a.length ? b : a), '')}
      </span>
      <span key={i} className="rotator-word">
        {words[i]}
      </span>
    </span>
  )
}
