import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useConsole } from '../components/ApiConsole'
import SystemMap from '../components/SystemMap'
import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import { stats } from '../data/stats'
import { stack } from '../data/stack'
import { projects } from '../data/projects'
import { testimonials } from '../data/testimonials'

const marqueeItems = ['Python', 'Django', 'DRF', 'React', 'SQL Server', 'PostgreSQL', 'Docker', 'REST', 'Git', 'Linux']

export default function Home() {
  const { lang, t, tx } = useLanguage()
  const { openConsole } = useConsole()
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container">
          <div className="hero-copy fade-up">
            <span className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" /> {t('hero.eyebrow')}
            </span>
            <h1>{t('hero.name')}</h1>
            <p className="role">{t('hero.role')}</p>
            <p className="tagline">{t('hero.tagline')}</p>
            <div className="hero-actions">
              <Magnetic>
                <Link className="btn btn-primary" to={`/${lang}/projects`}>
                  {t('hero.cta1')}
                </Link>
              </Magnetic>
              <Magnetic>
                <Link className="btn btn-ghost" to={`/${lang}/contact`}>
                  {t('hero.cta2')}
                </Link>
              </Magnetic>
            </div>
          </div>

          <div className="map-block fade-up" style={{ animationDelay: '120ms' }}>
            <div className="map-head">
              <span className="section-tag">{t('map.tag')}</span>
              <h2>{t('map.title')}</h2>
              <p className="map-hint">{t('map.hint')}</p>
            </div>
            <SystemMap />
            <button type="button" className="btn btn-ghost btn-sm map-console-btn" onClick={openConsole}>
              <span aria-hidden="true">{'>_'}</span> {t('map.openConsole')}
            </button>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <Reveal as="section" className="container section">
        <span className="section-tag">{t('intro.tag')}</span>
        <div className="intro">
          <h2>{t('intro.title')}</h2>
          <p>{t('intro.body')}</p>
          <Link className="btn btn-ghost btn-sm" to={`/${lang}/about`}>
            {t('intro.cta')}
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="container section">
        <span className="section-tag">{t('stats.tag')}</span>
        <div className="section-head">
          <h2>{t('stats.title')}</h2>
        </div>
        <dl className="kv-grid">
          {stats.map((s) => (
            <div className="kv-card" key={s.key}>
              <dt>{tx(s.label)}</dt>
              <dd>{tx(s.value)}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal as="section" className="container section">
        <span className="section-tag">{t('featured.tag')}</span>
        <div className="section-head">
          <h2>{t('featured.title')}</h2>
        </div>
        <div className="feat-grid">
          {featured.map((p) => (
            <Link className="feat-card" key={p.slug} to={`/${lang}/projects`}>
              <div className="feat-card-top">
                <span className="feat-kind">{tx(p.kind)}</span>
                <span className="feat-year">{p.year}</span>
              </div>
              <h3>{tx(p.title)}</h3>
              <p>{tx(p.tagline)}</p>
              <div className="stack-list">
                {p.stack.slice(0, 4).map((s) => (
                  <span className="stack-chip sm" key={s}>{s}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <Link className="btn btn-ghost btn-sm feat-all" to={`/${lang}/projects`}>
          {t('featured.all')} →
        </Link>
      </Reveal>

      <Reveal as="section" className="container section">
        <span className="section-tag">{t('stack.tag')}</span>
        <div className="section-head">
          <h2>{t('stack.title')}</h2>
        </div>
        <div className="stack-list">
          {stack.map((item) => (
            <span className="stack-chip" key={item.name}>{item.name}</span>
          ))}
        </div>
      </Reveal>

      {testimonials.length > 0 && (
        <Reveal as="section" className="container section">
          <span className="section-tag">{t('testimonials.tag')}</span>
          <div className="section-head">
            <h2>{t('testimonials.title')}</h2>
          </div>
          <div className="grid">
            {testimonials.map((tst) => (
              <blockquote className="card testimonial" key={tst.author}>
                <p>&ldquo;{tx(tst.quote)}&rdquo;</p>
                <footer>
                  <strong>{tst.author}</strong>
                  {tst.role ? <span> — {tst.role}</span> : null}
                </footer>
              </blockquote>
            ))}
          </div>
        </Reveal>
      )}
    </>
  )
}
