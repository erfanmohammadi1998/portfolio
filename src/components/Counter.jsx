import { useEffect, useState } from 'react'
import { useInView } from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

// Counts up from zero the first time it is seen.
export default function Counter({ value, suffix = '', duration = 1600 }) {
  const { num } = useLanguage()
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    let raf = 0
    const start = performance.now()
    function tick(now) {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 4)
      setN(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="counter">
      {num(n)}
      {suffix && <span className="counter-suffix">{suffix}</span>}
    </span>
  )
}
