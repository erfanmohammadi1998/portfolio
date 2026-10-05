import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import Magnetic from './Magnetic'
import SplitWords from './SplitWords'
import Icon from './Icon'

// The big closing call to action used on most pages.
export default function CtaBlock({ title, body, button, href }) {
  const { t, to } = useLanguage()
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card" data-spot>
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-art" aria-hidden="true">
            <svg viewBox="0 0 400 400">
              <circle className="ring" cx="200" cy="200" r="190" />
              <circle className="ring r2" cx="200" cy="200" r="150" />
              <circle className="ring" cx="200" cy="200" r="105" />
              <path className="star" d="M200 90c6 60 50 104 110 110-60 6-104 50-110 110-6-60-50-104-110-110 60-6 104-50 110-110z" />
              <circle className="dot" cx="200" cy="10" r="7" />
            </svg>
          </div>
          <span className="eyebrow">{t('cta.eyebrow')}</span>
          <SplitWords as="h2" className="cta-title" text={title || t('cta.title')} />
          <p className="cta-body">{body || t('cta.body')}</p>
          <div className="cta-actions">
            <Magnetic>
              <Link to={href || to('contact')} className="btn btn-accent btn-lg">
                {button || t('cta.button')}
                <Icon name="arrow" size={18} className="flip-rtl" />
              </Link>
            </Magnetic>
            <a className="link-underline" href={`mailto:${profile.email}`}>
              {t('cta.emailMe')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
