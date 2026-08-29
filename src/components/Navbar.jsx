import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useConsole } from './ApiConsole'
import LanguageSwitcher from './LanguageSwitcher'

const links = [
  { key: 'about', to: 'about' },
  { key: 'projects', to: 'projects' },
  { key: 'skills', to: 'skills' },
  { key: 'tutorials', to: 'tutorials' },
  { key: 'contact', to: 'contact' },
]

export default function Navbar() {
  const { lang, t } = useLanguage()
  const { toggleConsole } = useConsole()
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to={`/${lang}`} className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-brand-mark" aria-hidden="true">EM</span>
          <span className="nav-brand-name">{t('brand')}</span>
        </NavLink>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.key}>
              <NavLink
                to={`/${lang}/${l.to}`}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {t(`nav.${l.key}`)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button
            type="button"
            className="nav-console"
            onClick={() => {
              setOpen(false)
              toggleConsole()
            }}
            aria-label={t('console.title')}
          >
            <span aria-hidden="true">{'>_'}</span>
            <span className="nav-console-kbd">⌘K</span>
          </button>
          <LanguageSwitcher />
          <button
            className="nav-toggle"
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
