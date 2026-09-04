import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'

export default function Contact() {
  const { t, tx } = useLanguage()
  const L = t('contact.labels')
  const [copied, setCopied] = useState(null)

  const rows = [
    { key: 'email', label: L.email, value: profile.email, href: `mailto:${profile.email}`, copy: profile.email, mono: true },
    { key: 'phone', label: L.phone, value: profile.phoneDisplay, href: `tel:${profile.phone}`, copy: profile.phone, ltr: true, mono: true },
    { key: 'location', label: L.location, value: tx(profile.location) },
    { key: 'github', label: L.github, value: 'github.com/erfanmohammadi1998', href: profile.links.github, mono: true },
    { key: 'linkedin', label: L.linkedin, value: 'linkedin.com/in/erfan-mohammadi77', href: profile.links.linkedin, mono: true },
    { key: 'website', label: L.website, value: 'erfanmohammadi.ir', href: profile.links.website, mono: true },
    { key: 'company', label: L.company, value: 'houshiva.ir', href: profile.links.houshiva, mono: true },
  ]

  async function copy(key, text) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1600)
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  return (
    <section className="container section">
      <div className="section-head">
        <span className="section-tag">// {t('contact.title')}</span>
        <h2 dir="auto">{t('contact.title')}</h2>
        <p dir="auto">{t('contact.subtitle')}</p>
      </div>

      <div className="response">
        <div className="response-bar" dir="ltr">
          <span className="response-status">{t('contact.responseTag')}</span>
          <span className="response-path">GET /contact</span>
        </div>

        <dl className="response-body">
          {rows.map((r) => (
            <div className="response-row" key={r.key}>
              <dt dir="auto">{r.label}</dt>
              <dd className={r.mono ? 'is-mono' : ''} dir={r.ltr ? 'ltr' : 'auto'}>
                {r.href ? (
                  <a href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {r.value}
                  </a>
                ) : (
                  <span>{r.value}</span>
                )}
                {r.copy && (
                  <button type="button" className="response-copy" onClick={() => copy(r.key, r.copy)}>
                    {copied === r.key ? t('contact.copied') : t('contact.copy')}
                  </button>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="response-foot">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {t('contact.cta')} →
          </a>
        </div>
      </div>
    </section>
  )
}
