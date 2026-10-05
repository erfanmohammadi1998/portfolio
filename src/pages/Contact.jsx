import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import { getProject, projectCopy } from '../data/projects'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import LocalTime from '../components/LocalTime'
import Icon from '../components/Icon'

const quote = { fa: ['«', '»'], en: ['“', '”'], de: ['„', '“'] }

// A static site has no backend, so the form composes an email in the
// visitor's own mail app. "?project=<slug>" pre-fills a reference.
export default function Contact() {
  const { lang, t, tx } = useLanguage()
  const C = t('contact')
  const [params] = useSearchParams()
  const ref = getProject(params.get('project') || '')
  const refTitle = ref ? projectCopy(ref, lang).title : ''

  const [form, setForm] = useState(() => ({
    name: '',
    email: '',
    type: ref ? C.types[0] : '',
    message: ref ? `${C.similarTo} ${quote[lang][0]}${refTitle}${quote[lang][1]}\n\n` : '',
  }))
  const [copied, setCopied] = useState(null)

  const mailto = useMemo(() => {
    const subject = `${form.type || C.types[0]}${form.name ? ` · ${form.name}` : ''}`
    const body = `${form.message}\n\n${form.name}${form.email ? `\n${form.email}` : ''}`
    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`
  }, [form, C.types])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function copy(key, text) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }

  function submit(e) {
    e.preventDefault()
    window.location.href = mailto
  }

  return (
    <>
      <PageHeader eyebrow={C.eyebrow} title={C.title} lead={C.subtitle} />

      <section className="container contact">
        <Reveal className="contact-form-wrap" data-spot>
          <form className="contact-form" onSubmit={submit}>
            <h2>{C.formTitle}</h2>
            <div className="field-row">
              <label className="field">
                <input value={form.name} onChange={set('name')} placeholder=" " autoComplete="name" />
                <span>{C.name}</span>
              </label>
              <label className="field">
                <input type="email" value={form.email} onChange={set('email')} placeholder=" " autoComplete="email" dir="ltr" />
                <span>{C.email}</span>
              </label>
            </div>

            <fieldset className="topics">
              <legend>{C.type}</legend>
              {C.types.map((type) => (
                <label key={type} className={form.type === type ? 'is-active' : ''}>
                  <input type="radio" name="type" value={type} checked={form.type === type} onChange={set('type')} />
                  {type}
                </label>
              ))}
            </fieldset>

            <label className="field">
              <textarea rows={6} value={form.message} onChange={set('message')} placeholder=" " required />
              <span>{C.message}</span>
            </label>

            <div className="contact-send">
              <Magnetic>
                <button type="submit" className="btn btn-accent btn-lg">
                  {C.send} <Icon name="send" size={18} className="flip-rtl" />
                </button>
              </Magnetic>
              <p>{C.sendNote}</p>
            </div>
          </form>
        </Reveal>

        <aside className="contact-side">
          <Reveal className="contact-card" delay={100} data-spot>
            <p className="contact-label">{C.direct}</p>
            <ContactLine icon="mail" label={C.emailLabel} value={profile.email} href={`mailto:${profile.email}`}
              onCopy={() => copy('email', profile.email)} copied={copied === 'email'} C={C} />
            <ContactLine icon="phone" label={C.phoneLabel} value={profile.phoneDisplay} href={`tel:${profile.phone}`}
              onCopy={() => copy('phone', profile.phone)} copied={copied === 'phone'} C={C} />
            <div className="contact-line">
              <span className="contact-ico"><Icon name="pin" size={18} /></span>
              <div>
                <span className="contact-k">{C.location}</span>
                <span className="contact-v">{tx(profile.location)} · <LocalTime /></span>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-card" delay={200} data-spot>
            <p className="contact-label">{C.social}</p>
            <div className="socials">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={18} /> LinkedIn</a>
              <a href={profile.links.github} target="_blank" rel="noreferrer"><Icon name="github" size={18} /> GitHub</a>
              <a href={profile.links.houshiva} target="_blank" rel="noreferrer"><Icon name="globe" size={18} /> {C.houshiva}: houshiva.ir</a>
            </div>
          </Reveal>
        </aside>
      </section>
    </>
  )
}

function ContactLine({ icon, label, value, href, onCopy, copied, C }) {
  return (
    <div className="contact-line">
      <span className="contact-ico"><Icon name={icon} size={18} /></span>
      <div>
        <span className="contact-k">{label}</span>
        <a className="contact-v" href={href} dir="ltr">{value}</a>
      </div>
      <button type="button" className={`copy-btn${copied ? ' is-done' : ''}`} onClick={onCopy} title={copied ? C.copied : C.copy} aria-label={copied ? C.copied : C.copy}>
        <Icon name={copied ? 'check' : 'copy'} size={16} />
        <span className="copy-tip" aria-hidden="true">{C.copied}</span>
      </button>
    </div>
  )
}
