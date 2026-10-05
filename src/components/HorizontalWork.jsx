import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { projectCopy } from '../data/projects'
import Icon from './Icon'

// Featured work. On wide screens the section pins and vertical scrolling
// drives the row sideways; on phones it becomes a swipeable, snapping row.
export default function HorizontalWork({ projects, header }) {
  const { lang, t, to, num, dir } = useLanguage()
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [pinned, setPinned] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px) and (prefers-reduced-motion: no-preference)')
    const apply = () => setPinned(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    if (!pinned) {
      section.style.height = ''
      track.style.transform = ''
      return
    }

    let distance = 0
    let raf = 0
    function measure() {
      distance = Math.max(0, track.scrollWidth - window.innerWidth)
      section.style.height = `${window.innerHeight + distance}px`
      update()
    }
    function update() {
      raf = 0
      const top = section.getBoundingClientRect().top
      const p = distance ? Math.min(1, Math.max(0, -top / distance)) : 0
      // RTL rows overflow to the left, so they travel the other way.
      const x = (dir === 'rtl' ? 1 : -1) * p * distance
      track.style.transform = `translate3d(${x}px, 0, 0)`
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [pinned, dir])

  return (
    <section ref={sectionRef} className={`hwork${pinned ? ' is-pinned' : ''}`}>
      <div className="hwork-sticky">
        <div className="container hwork-head">{header}</div>
        <div ref={trackRef} className="hwork-track">
          {projects.map((p, i) => {
            const c = projectCopy(p, lang)
            return (
              <Link key={p.slug} to={to(`projects/${p.slug}`)} className="hcard" data-cursor={t('projects.cursor')} style={{ '--i': i }}>
                <div className="hcard-media">
                  <img src={p.cover} alt={c.title} loading="lazy" decoding="async" width="1440" height="900" />
                </div>
                <div className="hcard-meta">
                  <span className="hcard-num">{num(String(i + 1).padStart(2, '0'))}</span>
                  <span className="hcard-cat">{t(`projects.categories.${p.category}`)}</span>
                </div>
                <h3 className="hcard-title">{c.title}</h3>
                <div className="hcard-tech" dir="ltr">
                  {p.tech.slice(0, 4).map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </Link>
            )
          })}
          <Link to={to('projects')} className="hcard hcard-all" data-cursor="→">
            <span className="hcard-all-circle">
              <Icon name="arrow" size={34} className="flip-rtl" />
            </span>
            <span className="hcard-all-label">{t('work.all')}</span>
          </Link>
        </div>
        {pinned && (
          <div className="container hwork-progress" aria-hidden="true">
            <span ref={barRef} />
          </div>
        )}
      </div>
    </section>
  )
}
