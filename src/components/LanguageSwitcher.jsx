import { useLocation, useNavigate } from 'react-router-dom'
import { supportedLangs } from '../i18n/translations'
import { useLanguage } from '../i18n/LanguageContext'

const labels = { fa: 'فا', en: 'EN', de: 'DE' }

export default function LanguageSwitcher() {
  const { lang } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const index = supportedLangs.indexOf(lang)

  function switchTo(next) {
    const segments = location.pathname.split('/')
    segments[1] = next
    navigate(segments.join('/') + location.search)
  }

  return (
    <div className="lang" role="group" aria-label="language" style={{ '--i': index }}>
      <span className="lang-pill" aria-hidden="true" />
      {supportedLangs.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          className={l === lang ? 'is-active' : ''}
          onClick={() => switchTo(l)}
          aria-pressed={l === lang}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  )
}
