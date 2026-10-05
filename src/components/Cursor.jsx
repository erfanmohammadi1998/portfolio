import { useEffect, useRef } from 'react'

// A crisp dot that sits exactly on the pointer plus a soft ring that trails
// it. The ring grows over links, and turns into a labelled disc over
// anything with data-cursor="label" (project cards, the work slider).
// Only on devices with a real mouse; touch screens never see it.
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    document.documentElement.classList.add('has-cursor')

    let x = -100
    let y = -100
    let rx = x
    let ry = y
    let visible = false
    let raf = 0

    function setState(target) {
      const labelled = target?.closest?.('[data-cursor]')
      const interactive = target?.closest?.('a, button, [role="button"], label, select, summary, input[type="submit"]')
      const text = target?.closest?.('input:not([type="submit"]), textarea, [contenteditable="true"]')
      ring.classList.toggle('is-label', Boolean(labelled))
      ring.classList.toggle('is-hover', Boolean(interactive) && !labelled)
      dot.classList.toggle('is-hidden', Boolean(labelled) || Boolean(text))
      ring.classList.toggle('is-text', Boolean(text))
      label.textContent = labelled ? labelled.getAttribute('data-cursor') : ''
    }

    function onMove(e) {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      if (!visible) {
        visible = true
        rx = x
        ry = y
        dot.classList.add('is-visible')
        ring.classList.add('is-visible')
      }
      setState(e.target)
    }
    function onDown() {
      ring.classList.add('is-down')
    }
    function onUp() {
      ring.classList.remove('is-down')
    }
    function onLeave() {
      visible = false
      dot.classList.remove('is-visible')
      ring.classList.remove('is-visible')
    }

    function loop() {
      const ease = reduce ? 1 : 0.2
      rx += (x - rx) * ease
      ry += (y - ry) * ease
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointerleave', onLeave)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-label" />
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
