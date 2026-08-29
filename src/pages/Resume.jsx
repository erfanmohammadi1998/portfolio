import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import { resume } from '../data/resume'

export default function Resume() {
  const { lang, t, tx } = useLanguage()
  const rl = lang === 'de' ? 'en' : lang
  const S = t('resume.sections')

  return (
    <section className="container section resume-page">
      <div className="resume-toolbar">
        <div>
          <span className="section-tag">// {t('resume.title')}</span>
          <p dir="auto">{t('resume.subtitle')}</p>
        </div>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => window.print()}>
          {t('resume.print')}
        </button>
      </div>

      <article className="resume-doc" dir={rl === 'fa' ? 'rtl' : 'ltr'}>
        <header className="resume-doc-head">
          <h1>{tx(profile.name)}</h1>
          <p className="resume-doc-role">{tx(profile.role)}</p>
          <p className="resume-doc-contact" dir="ltr">
            {profile.email} · {profile.phoneDisplay} · {tx(profile.location)} ·{' '}
            <a href={profile.links.website}>erfanmohammadi.ir</a> ·{' '}
            <a href={profile.links.github}>github.com/erfanmohammadi1998</a>
          </p>
        </header>

        <section className="resume-sec">
          <h2>{S.summary}</h2>
          <p dir="auto">{resume.summary[rl]}</p>
        </section>

        <section className="resume-sec">
          <h2>{S.experience}</h2>
          {resume.experience.map((e, i) => (
            <div className="resume-entry" key={i}>
              <div className="resume-entry-head">
                <strong dir="auto">{e.role[rl]} · {e.company[rl]}</strong>
                <span dir="auto">{e.period[rl]}</span>
              </div>
              <ul>
                {e.bullets.map((b, j) => (
                  <li key={j} dir="auto">{b[rl]}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-sec">
          <h2>{S.education}</h2>
          {resume.education.map((e, i) => (
            <div className="resume-entry" key={i}>
              <div className="resume-entry-head">
                <strong dir="auto">{e.degree[rl]}</strong>
                <span dir="auto">{e.period[rl]}</span>
              </div>
              <span dir="auto">{e.school[rl]}</span>
            </div>
          ))}
        </section>

        <section className="resume-sec">
          <h2>{S.skills}</h2>
          {resume.skillGroups.map((g, i) => (
            <p key={i} className="resume-skillrow" dir="ltr">
              <strong>{g.level[rl]}:</strong> {g.items.join(' · ')}
            </p>
          ))}
        </section>

        <div className="resume-cols">
          <section className="resume-sec">
            <h2>{S.languages}</h2>
            {resume.languages.map((l, i) => (
              <p key={i} dir="auto">{l.name[rl]} — {l.level[rl]}</p>
            ))}
          </section>
          <section className="resume-sec">
            <h2>{S.interests}</h2>
            <p dir="auto">{resume.interests[rl].join(' · ')}</p>
          </section>
        </div>

        <section className="resume-sec">
          <h2>{S.courses}</h2>
          <ul className="resume-courses">
            {resume.courses.map((c, i) => (
              <li key={i} dir="ltr">
                {c.title} · {c.provider} · {c.hours}h · {c.year}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  )
}
