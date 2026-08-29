import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useConsole } from '../components/ApiConsole'
import SystemMap from '../components/SystemMap'
import ProjectCover, { LockGlyph } from '../components/ProjectCover'
import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import { stats } from '../data/stats'
import { stack } from '../data/stack'
import { services } from '../data/services'
import { projects } from '../data/projects'

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
              <span className="eyebrow-dot" aria-hidden="true" /> {t('hero.status')}
            </span>
            <h1 dir="auto">{t('hero.name')}</h1>
            <p className="role" dir="auto">{t('hero.role')}</p>
            <p className="tagline" dir="auto">{t('hero.tagline')}</p>
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
            <p className="hero-meta" dir="ltr">
              <span>Tehran · UTC+3:30</span>
              <span className="hero-meta-sep">·</span>
              <button type="button" className="hero-meta-btn" onClick={openConsole}>
                {'>_'} Ctrl&nbsp;+&nbsp;K
              </button>
            </p>
          </div>

          <div className="map-block fade-up" style={{ animationDelay: '120ms' }}>
            <div className="map-head">
              <span className="section-tag">{t('map.tag')}</span>
              <h2 dir="auto">{t('map.title')}</h2>
              <p className="map-hint" dir="auto">{t('map.hint')}</p>
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
          <h2 dir="auto">{t('intro.title')}</h2>
          <p dir="auto">{t('intro.body')}</p>
          <Link className="btn btn-ghost btn-sm" to={`/${lang}/about`}>
            {t('intro.cta')}
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="container section">
        <span className="section-tag">{t('stats.tag')}</span>
        <div className="section-head">
          <h2 dir="auto">{t('stats.title')}</h2>
        </div>
        <dl className="kv-grid">
          {stats.map((s) => (
            <div className="kv-card" key={s.key}>
              <dt dir="auto">{tx(s.label)}</dt>
              <dd dir="auto">{tx(s.value)}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal as="section" className="container section">
        <span className="section-tag">{t('services.tag')}</span>
        <div className="section-head">
          <h2 dir="auto">{t('services.title')}</h2>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <div className="svc-card" key={s.key}>
              <h3 dir="auto">{tx(s.title)}</h3>
              <p dir="auto">{tx(s.body)}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="container section">
        <span className="section-tag">{t('featured.tag')}</span>
        <div className="section-head">
          <h2 dir="auto">{t('featured.title')}</h2>
        </div>
        <div className="feat-grid">
          {featured.map((p) => (
            <Link className="feat-card" key={p.slug} to={`/${lang}/projects`}>
              <ProjectCover arch={p.arch} seed={p.slug} />
              <div className="feat-card-body">
                <h3 dir="auto">
                  {tx(p.title)}
                  {p.private && <span className="feat-lock" aria-label={t('projects.labels.private')}><LockGlyph /></span>}
                </h3>
                <p dir="auto">{tx(p.tagline)}</p>
                <div className="stack-list">
                  {p.stack.slice(0, 4).map((s) => (
                    <span className="stack-chip sm" key={s}>{s}</span>
                  ))}
                </div>
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
          <h2 dir="auto">{t('stack.title')}</h2>
        </div>
        <div className="stack-list">
          {stack.map((item) => (
            <span className="stack-chip" key={item.name}>{item.name}</span>
          ))}
        </div>
      </Reveal>
    </>
  )
}
