import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import { experience, education, training, skillGroups, languages, cvProjects } from '../data/resume'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'

// A web version of the CV that also prints cleanly to A4.
export default function Resume() {
  const { lang, t, tx, to, num } = useLanguage()
  const R = t('resume')

  return (
    <>
      <PageHeader eyebrow={R.eyebrow} title={R.title} lead={R.subtitle} className="no-print">
        <div className="resume-actions fade-in" style={{ animationDelay: '480ms' }}>
          <a href={profile.cv.en} className="btn btn-accent" download>
            <Icon name="download" size={16} /> {R.downloadEn}
          </a>
          <a href={profile.cv.de} className="btn btn-ghost" download>
            <Icon name="download" size={16} /> {R.downloadDe}
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
            <Icon name="printer" size={16} /> {R.print}
          </button>
        </div>
      </PageHeader>

      <section className="container">
        <article className="cv fade-in-scale" style={{ animationDelay: '300ms' }}>
          <header className="cv-head">
            <img src={profile.photo} alt="" className="cv-photo" />
            <div>
              <h2 className="cv-name">{tx(profile.name)}</h2>
              <p className="cv-role">{tx(profile.role)}</p>
              <ul className="cv-contact">
                <li><Icon name="pin" size={14} />{tx(profile.location)}</li>
                <li><Icon name="phone" size={14} /><a href={`tel:${profile.phone}`} dir="ltr">{profile.phoneDisplay}</a></li>
                <li><Icon name="mail" size={14} /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
                <li><Icon name="linkedin" size={14} /><a href={profile.links.linkedin}>linkedin.com/in/erfan-mohammadi77</a></li>
                <li><Icon name="github" size={14} /><a href={profile.links.github}>github.com/erfanmohammadi1998</a></li>
                <li><Icon name="globe" size={14} /><a href={profile.links.website}>erfanmohammadi.ir</a> · <a href={profile.links.houshiva}>houshiva.ir</a></li>
              </ul>
            </div>
          </header>

          <section className="cv-sec">
            <h3>{R.profile}</h3>
            <p>{R.profileText}</p>
          </section>

          <section className="cv-sec">
            <h3>{R.experience}</h3>
            {experience.map((job) => (
              <div className="cv-row" key={job.key}>
                <span className="cv-when">{tx(job.period)}</span>
                <div>
                  <strong>{tx(job.role)}</strong>
                  <span className="cv-org">{tx(job.org)}{job.note ? ` · ${tx(job.note)}` : ''}</span>
                  <ul>
                    {job.bullets[lang].map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  {job.tech && <p className="cv-tech" dir="ltr">{job.tech.join(', ')}</p>}
                </div>
              </div>
            ))}
          </section>

          <section className="cv-sec">
            <h3>{R.education}</h3>
            {education.map((e, i) => (
              <div className="cv-row" key={i}>
                <span className="cv-when">{tx(e.period)}</span>
                <div>
                  <strong>{tx(e.degree)}</strong>
                  <span className="cv-org">{tx(e.school)}</span>
                  {e.note && <span className="cv-note">{tx(e.note)}</span>}
                </div>
              </div>
            ))}
          </section>

          <section className="cv-sec">
            <h3>{R.projects}</h3>
            {cvProjects.map((p, i) => (
              <div className="cv-row" key={i}>
                <span className="cv-when">{tx(p.year)}</span>
                <div>
                  {p.slug ? (
                    <Link to={to(`projects/${p.slug}`)} className="link-underline"><strong>{tx(p.title)}</strong></Link>
                  ) : (
                    <strong>{tx(p.title)}</strong>
                  )}
                </div>
              </div>
            ))}
          </section>

          <section className="cv-sec">
            <h3>{R.training}</h3>
            {training.map((c, i) => (
              <div className="cv-row" key={i}>
                <span className="cv-when">{tx(c.year)}</span>
                <div>
                  <span dir="ltr">{c.title}</span>
                  <span className="cv-org"> · {tx(c.provider)} ({num(c.hours)} {R.hours})</span>
                </div>
              </div>
            ))}
          </section>

          <section className="cv-sec">
            <h3>{R.skills}</h3>
            {skillGroups.map((g) => (
              <div className="cv-row" key={g.key}>
                <span className="cv-when">{t(`skills.groups.${g.key}`)}</span>
                <div className="cv-skills">
                  {[3, 2, 1].map((lv) => {
                    const items = g.items.filter((s) => s.level === lv)
                    if (!items.length) return null
                    return (
                      <span key={lv}>
                        <span dir="ltr">{items.map((s) => s.name).join(', ')}</span>
                        <em> ({t(`skills.levels.${lv}`)})</em>
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </section>

          <section className="cv-sec">
            <h3>{R.languages}</h3>
            {languages.map((l, i) => (
              <div className="cv-row" key={i}>
                <span className="cv-when">{tx(l.name)}</span>
                <div>{tx(l.level)}</div>
              </div>
            ))}
          </section>
        </article>
      </section>
    </>
  )
}
