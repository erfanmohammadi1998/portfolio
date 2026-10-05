import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const SEEN_KEY = 'erfan:intro'

// "Hello" in a few languages, then the curtain lifts. Once per session.
export default function Preloader() {
  const { t } = useLanguage()
  const words = t('preloader')
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState(() => {
    if (typeof window === 'undefined') return 'done'
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return 'done'
    } catch {
      /* storage blocked: just play it */
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'done'
    return 'words'
  })

  useEffect(() => {
    if (phase !== 'words') return
    document.documentElement.classList.add('is-loading')
    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      /* ignore */
    }
    const timers = words.map((_, i) => setTimeout(() => setIndex(i), i === 0 ? 0 : 260 + i * 230))
    timers.push(setTimeout(() => setPhase('leave'), 260 + words.length * 230 + 120))
    timers.push(setTimeout(() => setPhase('done'), 260 + words.length * 230 + 1000))
    return () => timers.forEach(clearTimeout)
  }, [phase, words])

  useEffect(() => {
    if (phase === 'leave' || phase === 'done') document.documentElement.classList.remove('is-loading')
  }, [phase])

  if (phase === 'done') return null

  return (
    <div className={`preloader${phase === 'leave' ? ' is-leaving' : ''}`} aria-hidden="true">
      <p className="preloader-word" key={index} dir="auto">
        <span className="preloader-dot" />
        {words[index]}
      </p>
      <svg className="preloader-curve" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path d="M0 0 Q500 100 1000 0 L1000 0 L0 0Z" />
      </svg>
    </div>
  )
}
