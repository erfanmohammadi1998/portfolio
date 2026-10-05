import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

// Live Tehran clock, so visitors in other time zones know when I'm awake.
export default function LocalTime({ className = '' }) {
  const { lang } = useLanguage()
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 15)
    return () => clearInterval(id)
  }, [])

  const locale = lang === 'fa' ? 'fa-IR' : lang === 'de' ? 'de-DE' : 'en-GB'
  const time = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tehran' }).format(now)

  return (
    <span className={`local-time ${className}`}>
      <span className="pulse-dot" aria-hidden="true" />
      <span dir="ltr">{time}</span>
      <span className="local-time-zone">GMT+3:30</span>
    </span>
  )
}
