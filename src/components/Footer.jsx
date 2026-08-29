import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <span className="footer-brand">{t('brand')}</span>
          <span>{t('footer.rights')}</span>
        </div>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <div className="footer-col footer-meta">
          <span dir="ltr">© {year} Erfan Mohammadi</span>
          <span dir="ltr">{t('footer.built')}</span>
        </div>
      </div>
    </footer>
  )
}
