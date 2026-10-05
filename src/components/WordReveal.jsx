import { useEffect, useRef } from 'react'

// A paragraph whose words light up one by one as it scrolls through the
// viewport. Opacity is driven straight from scroll position.
export default function WordReveal({ text, className = '' }) {
  const ref = useRef(null)
  const words = String(text).split(' ')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const spans = Array.from(el.querySelectorAll('.wr-word'))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      spans.forEach((s) => s.classList.add('is-lit'))
      return
    }
    let raf = 0
    function update() {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.85
      const end = vh * 0.35
      const p = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height * 0.6)))
      const lit = Math.round(p * spans.length)
      spans.forEach((s, i) => s.classList.toggle('is-lit', i < lit))
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [text])

  return (
    <p ref={ref} className={`word-reveal ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="wr-word">
          {w}{' '}
        </span>
      ))}
    </p>
  )
}
