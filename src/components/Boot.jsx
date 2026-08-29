import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const SEEN_KEY = 'erfan:booted'
const LINE_MS = 260

// A short terminal-style boot overlay, shown once per browser session.
export default function Boot() {
  const { t } = useLanguage()
  const lines = t('boot')

  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const startedRef = useRef(false)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true

    let seen = false
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === '1'
    } catch {
      /* storage blocked — just play it */
    }
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (seen || reduce || !Array.isArray(lines)) {
      setDone(true)
      return
    }

    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      /* ignore */
    }

    const timers = []
    lines.forEach((_, i) => {
      timers.push(setTimeout(() => setCount(i + 1), LINE_MS * (i + 1)))
    })
    timers.push(
      setTimeout(() => setDone(true), LINE_MS * (lines.length + 1) + 320),
    )
    return () => timers.forEach(clearTimeout)
  }, [lines])

  if (done) return null

  return (
    <div className="boot" role="status" aria-live="polite" onClick={() => setDone(true)}>
      <div className="boot-inner" dir="ltr">
        {lines.slice(0, count).map((line, i) => (
          <div className="boot-line" key={i}>
            <span className="boot-arrow">›</span> {line}
          </div>
        ))}
        <span className="boot-cursor" aria-hidden="true" />
      </div>
    </div>
  )
}
