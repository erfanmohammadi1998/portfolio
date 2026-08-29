import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFine) return

    document.body.classList.add('has-custom-cursor')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY

    // --- coloured trail ---
    const canvas = canvasRef.current
    const ctx = canvas && !reduce ? canvas.getContext('2d') : null
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const particles = []
    let hue = 190

    function resize() {
      if (!canvas) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    if (ctx) resize()

    function onMove(e) {
      const nx = e.clientX
      const ny = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${nx}px, ${ny}px) translate(-50%, -50%)`
      }
      if (ctx) {
        const dx = nx - mouseX
        const dy = ny - mouseY
        const dist = Math.hypot(dx, dy)
        const steps = Math.max(1, Math.min(6, Math.round(dist / 6)))
        for (let i = 1; i <= steps; i++) {
          hue = (hue + 4) % 360
          particles.push({
            x: mouseX + (dx * i) / steps,
            y: mouseY + (dy * i) / steps,
            life: 1,
            r: 7 + Math.random() * 5,
            hue,
          })
        }
        if (particles.length > 120) particles.splice(0, particles.length - 120)
      }
      mouseX = nx
      mouseY = ny
    }

    function loop() {
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      }

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.globalCompositeOperation = 'lighter'
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i]
          p.life -= 0.045
          if (p.life <= 0) {
            particles.splice(i, 1)
            continue
          }
          const a = p.life * 0.5
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * (2 - p.life))
          grad.addColorStop(0, `hsla(${p.hue}, 95%, 65%, ${a})`)
          grad.addColorStop(1, `hsla(${p.hue}, 95%, 60%, 0)`)
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * (2 - p.life), 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.globalCompositeOperation = 'source-over'
      }
      raf = requestAnimationFrame(loop)
    }

    function onOver(e) {
      if (e.target.closest('a, button')) ringRef.current?.classList.add('cursor-hover')
    }
    function onOut(e) {
      if (e.target.closest('a, button')) ringRef.current?.classList.remove('cursor-hover')
    }

    let raf = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', resize)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <canvas className="cursor-trail" ref={canvasRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
