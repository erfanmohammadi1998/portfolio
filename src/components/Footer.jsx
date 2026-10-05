import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import { scrollToTop } from '../smooth'
import Icon from './Icon'
import LocalTime from './LocalTime'
import Magnetic from './Magnetic'
import RollText from './RollText'

const pages = ['about', 'projects', 'skills', 'resume', 'contact']

export default function Footer() {
  const { t, tx, to, num } = useLanguage()
  const year = num(new Date().getFullYear())

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-title">{t('footer.title')}</p>
            <p className="footer-sub">{t('footer.sub')}</p>
          </div>
          <Magnetic>
            <Link to={to('contact')} className="footer-orb" data-cursor="↗">
              <span>{t('nav.talk')}</span>
            </Link>
          </Magnetic>
        </div>

        <a className="footer-mail" href={`mailto:${profile.email}`}>
          <span dir="ltr">{profile.email}</span>
          <Icon name="arrowUpRight" size={28} className="flip-rtl" />
        </a>

        <div className="footer-cols">
          <div>
            <p className="footer-label">{t('footer.nav')}</p>
            <ul>
              {pages.map((p) => (
                <li key={p}>
                  <Link to={to(p)}><RollText>{t(`nav.${p}`)}</RollText></Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-label">{t('footer.social')}</p>
            <ul>
              <li><a href={profile.links.github} target="_blank" rel="noreferrer"><RollText>GitHub</RollText></a></li>
              <li><a href={profile.links.linkedin} target="_blank" rel="noreferrer"><RollText>LinkedIn</RollText></a></li>
              <li><a href={profile.links.houshiva} target="_blank" rel="noreferrer"><RollText>{tx(profile.company.name)}</RollText></a></li>
              <li><a href={`tel:${profile.phone}`}><RollText><span dir="ltr">{profile.phoneDisplay}</span></RollText></a></li>
            </ul>
          </div>
          <div>
            <p className="footer-label">{t('footer.local')}</p>
            <LocalTime />
            <p className="footer-place">{tx(profile.location)}</p>
          </div>
        </div>

        <div className="footer-giant" aria-hidden="true">{t('brand')}</div>

        <div className="footer-bottom">
          <span>© {year} {t('brand')}. {t('footer.rights')}</span>
          <button type="button" className="to-top" onClick={() => scrollToTop(false)}>
            {t('footer.top')} <Icon name="arrowUp" size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
