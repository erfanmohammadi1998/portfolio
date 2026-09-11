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
            <span>{profile.email}</span>
            <span>{profile.phoneDisplay}</span>
            <span dir="auto">{tx(profile.location)}</span>
            <a href={profile.links.website}>erfanmohammadi.ir</a>
            <a href={profile.links.github}>github.com/erfanmohammadi1998</a>
            <a href={profile.links.linkedin}>linkedin.com/in/erfan-mohammadi77</a>
          </p>
        </header>

        <div className="resume-body">
          <div className="resume-main">
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
              <h2>{S.courses}</h2>
              <ul className="resume-courses">
                {resume.courses.map((c, i) => (
                  <li key={i} dir="ltr">
                    <span className="resume-course-title">{c.title}</span>
                    <span className="resume-course-meta">{c.provider} · {c.hours}h · {c.year}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="resume-aside">
            <section className="resume-sec">
              <h2>{S.skills}</h2>
              {resume.skillGroups.map((g, i) => (
                <div key={i} className="resume-skillgroup">
                  <span className="resume-skillgroup-level" dir="auto">{g.level[rl]}</span>
                  <div className="resume-skillchips">
                    {g.items.map((s) => (
                      <span className="stack-chip sm" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="resume-sec">
              <h2>{S.languages}</h2>
              {resume.languages.map((l, i) => (
                <p key={i} dir="auto" className="resume-lang">{l.name[rl]} — {l.level[rl]}</p>
              ))}
            </section>

            <section className="resume-sec">
              <h2>{S.interests}</h2>
              <ul className="resume-interests">
                {resume.interests[rl].map((it, i) => (
                  <li key={i} dir="auto">{it}</li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </section>
  )
}
