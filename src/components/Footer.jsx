import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-copy" dir="auto">
          © {year} {t('brand')} — {t('footer.rights')}
        </span>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
