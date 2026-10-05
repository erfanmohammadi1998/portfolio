import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../theme'
import { lockScroll } from '../smooth'
import { profile } from '../data/profile'
import LanguageSwitcher from './LanguageSwitcher'
import Icon from './Icon'
import RollText from './RollText'

const links = ['about', 'projects', 'skills', 'resume', 'contact']

export default function Navbar() {
  const { t, tx, to, num } = useLanguage()
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Hide while scrolling down, come back on the slightest scroll up.
  useEffect(() => {
    let last = window.scrollY
    function onScroll() {
      const y = window.scrollY
      setScrolled(y > 24)
      if (Math.abs(y - last) < 6) return
      setHidden(y > last && y > 160)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    lockScroll(open)
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className={`nav${hidden && !open ? ' is-hidden' : ''}${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <div className="nav-inner">
          <Link to={to()} className="nav-brand" aria-label={t('brand')}>
            <span className="nav-mark">
              <span>E</span>
              <span>M</span>
            </span>
            <span className="nav-brand-name">{t('brand')}</span>
          </Link>

          <nav className="nav-links" aria-label="primary">
            {links.map((key) => (
              <NavLink key={key} to={to(key)} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
                <RollText>{t(`nav.${key}`)}</RollText>
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <LanguageSwitcher />
            <button type="button" className="icon-btn theme-btn" onClick={toggle} aria-label={t('nav.theme')}>
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
            </button>
            <Link to={to('contact')} className="btn btn-accent btn-sm nav-cta">
              <RollText>{t('nav.talk')}</RollText>
            </Link>
            <button
              type="button"
              className="burger"
              aria-label={open ? t('nav.close') : t('nav.menu')}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="menu-bg" />
        <nav className="menu-inner">
          <ol className="menu-links">
            {['', ...links].map((key, i) => (
              <li key={key || 'home'} style={{ '--i': i }}>
                <NavLink to={to(key)} end={!key} tabIndex={open ? 0 : -1} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                  <span className="menu-num">{num(String(i + 1).padStart(2, '0'))}</span>
                  {t(`nav.${key || 'home'}`)}
                </NavLink>
              </li>
            ))}
          </ol>
          <div className="menu-foot" style={{ '--i': 7 }}>
            <a href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1}>{profile.email}</a>
            <div className="menu-social">
              <a href={profile.links.github} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>GitHub</a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>LinkedIn</a>
              <a href={profile.links.houshiva} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>{tx(profile.company.name)}</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
