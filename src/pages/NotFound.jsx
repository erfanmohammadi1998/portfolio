import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function NotFound() {
  const { lang, t } = useLanguage()

  return (
    <div className="container not-found">
      <pre className="nf-json">
{`{
  "status": 404,
  "error": "route not defined"
}`}
      </pre>
      <h1>{t('notFound.code')}</h1>
      <p>{t('notFound.title')}</p>
      <p className="nf-body">{t('notFound.body')}</p>
      <Link className="btn btn-primary" to={`/${lang}`}>
        {t('notFound.back')} →
      </Link>
    </div>
  )
}
