import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import Icon from '../components/Icon'

export default function NotFound() {
  const { t, to, num } = useLanguage()

  return (
    <section className="container nf">
      <p className="nf-code" aria-hidden="true">
        <span>{num(4)}</span>
        <span className="nf-zero">{num(0)}</span>
        <span>{num(4)}</span>
      </p>
      <h1>{t('notFound.title')}</h1>
      <p className="nf-body">{t('notFound.body')}</p>
      <Link to={to()} className="btn btn-accent btn-lg">
        {t('notFound.back')} <Icon name="arrow" size={18} className="flip-rtl" />
      </Link>
    </section>
  )
}
