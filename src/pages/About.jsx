import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function About() {
  const { t, tx } = useLanguage()
  const paragraphs = t('about.intro').split('\n\n')
  const timeline = t('about.timeline')
  const L = t('about.labels')

  const details = [
    { k: L.name, v: tx(profile.name) },
    { k: L.role, v: tx(profile.role) },
    { k: L.location, v: tx(profile.location) },
    { k: L.email, v: profile.email, href: `mailto:${profile.email}` },
    { k: L.phone, v: profile.phoneDisplay, href: `tel:${profile.phone}`, ltr: true },
    { k: L.availability, v: tx(profile.availability) },
  ]

  return (
    <section className="container section about">
      <div className="section-head">
        <span className="section-tag">// {t('about.title')}</span>
        <h2>{t('about.title')}</h2>
        <p>{t('about.subtitle')}</p>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <figure className="about-photo">
            <img src={profile.photo} alt={tx(profile.name)} loading="lazy" />
          </figure>
          <div className="about-body">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="about-side">
          <span className="section-tag">// {t('about.detailsTag')}</span>
          <dl className="detail-list">
            {details.map((d) => (
              <div key={d.k}>
                <dt>{d.k}</dt>
                <dd dir={d.ltr ? 'ltr' : undefined}>
                  {d.href ? (
                    <a href={d.href}>{d.v}</a>
                  ) : (
                    d.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="about-side-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </aside>
      </div>

      <div className="timeline">
        <span className="section-tag">// {t('about.timelineTag')}</span>
        <ol>
          {timeline.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 90} className="timeline-item">
              <span className="timeline-time">{item.time}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
