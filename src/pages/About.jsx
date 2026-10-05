import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import { experience, education, training, languages } from '../data/resume'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SplitWords from '../components/SplitWords'
import CtaBlock from '../components/CtaBlock'
import Icon from '../components/Icon'

export default function About() {
  const { lang, t, tx, num } = useLanguage()
  const story = t('about.story')
  const F = t('about.facts')
  const totalHours = training.reduce((s, c) => s + c.hours, 0)

  const facts = [
    { k: F.based, v: tx(profile.location) },
    { k: F.focus, v: F.focusValue },
    { k: F.now, v: F.nowValue },
    { k: F.languages, v: F.languagesValue },
  ]

  return (
    <>
      <PageHeader eyebrow={t('about.eyebrow')} title={t('about.lead')} />

      <section className="container about-intro">
        <Reveal className="about-photo" variant="clip">
          <img src={profile.photo} alt={t('about.photoAlt')} />
          <span className="about-photo-tag">
            <Icon name="pin" size={14} /> {tx(profile.location)}
          </span>
        </Reveal>

        <div className="about-story">
          {story.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 100}>
              {p}
            </Reveal>
          ))}
          <dl className="about-facts">
            {facts.map((f, i) => (
              <Reveal key={f.k} delay={200 + i * 70}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="container section">
        <SplitWords as="h2" className="section-title" text={t('about.experience')} />
        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.key} className="timeline-item" delay={i * 60}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-when">
                <span>{tx(job.period)}</span>
                {job.current && (
                  <span className="job-badge">
                    <span className="pulse-dot" /> {t('about.current')}
                  </span>
                )}
              </div>
              <div className="timeline-body" data-spot>
                <h3>{tx(job.role)}</h3>
                <p className="timeline-org">
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noreferrer" className="link-underline">{tx(job.org)}</a>
                  ) : (
                    tx(job.org)
                  )}
                  {job.note && <span> · {tx(job.note)}</span>}
                </p>
                <ul>
                  {job.bullets[lang].map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {job.tech && (
                  <div className="chips" dir="ltr">
                    {job.tech.map((x) => (
                      <span className="chip" key={x}>{x}</span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container section about-cols">
        <div>
          <SplitWords as="h2" className="section-title is-sm" text={t('about.education')} />
          <ul className="edu">
            {education.map((e, i) => (
              <Reveal as="li" key={i} delay={i * 90} data-spot>
                <span className="edu-period">{tx(e.period)}</span>
                <h3>{tx(e.degree)}</h3>
                <p>{tx(e.school)}</p>
                {e.note && <p className="edu-note">{tx(e.note)}</p>}
              </Reveal>
            ))}
          </ul>

          <SplitWords as="h2" className="section-title is-sm about-lang-title" text={t('about.languages')} />
          <ul className="langs">
            {languages.map((l, i) => (
              <Reveal as="li" key={i} delay={i * 90}>
                <div className="langs-row">
                  <strong>{tx(l.name)}</strong>
                  <span>{tx(l.level)}</span>
                </div>
                <span className="meter"><span style={{ '--v': `${l.value}%` }} /></span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <SplitWords as="h2" className="section-title is-sm" text={t('about.training')} />
          <ul className="courses">
            {training.map((c, i) => (
              <Reveal as="li" key={i} delay={i * 50} variant="fade">
                <span className="courses-year">{tx(c.year)}</span>
                <span className="courses-title" dir="ltr">{c.title}</span>
                <span className="courses-meta">
                  {tx(c.provider)} · {num(c.hours)} {t('resume.hours')}
                </span>
              </Reveal>
            ))}
          </ul>
          <p className="courses-total">
            <strong>{num(totalHours)}</strong> {t('about.trainingTotal')}
          </p>
        </div>
      </section>

      <CtaBlock />
    </>
  )
}
