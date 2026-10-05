import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { services, process } from '../data/services'
import { stats, experience } from '../data/resume'
import Reveal from '../components/Reveal'
import SplitWords from '../components/SplitWords'
import RotatingWords from '../components/RotatingWords'
import Counter from '../components/Counter'
import Marquee from '../components/Marquee'
import WordReveal from '../components/WordReveal'
import HorizontalWork from '../components/HorizontalWork'
import CtaBlock from '../components/CtaBlock'
import Magnetic from '../components/Magnetic'
import LocalTime from '../components/LocalTime'
import Icon from '../components/Icon'
import RollText from '../components/RollText'

const bandTop = ['Python', 'Django', 'SQL Server', 'REST API', 'PostgreSQL', 'React', 'Docker', 'T-SQL']
const bandBottom = ['Celery', 'Redis', 'Power BI', 'SSIS', 'Git', 'FastAPI', 'Crystal Reports', 'OpenCV']

export default function Home() {
  const { lang, t, tx, to, num } = useLanguage()
  const featured = projects.filter((p) => p.featured)
  const current = experience.filter((e) => e.current)
  const cv = lang === 'de' ? profile.cv.de : profile.cv.en

  return (
    <>
      <Hero cv={cv} />

      <section className="stats container" aria-label="numbers">
        {stats.map((s, i) => (
          <Reveal key={i} className="stat" delay={i * 90}>
            <span className="stat-value">
              <Counter value={s.value} suffix={s.suffix} />
            </span>
            <span className="stat-label">{tx(s.label)}</span>
          </Reveal>
        ))}
      </section>

      <Marquee top={bandTop} bottom={bandBottom} />

      <section className="statement container section">
        <span className="eyebrow">{t('statement.tag')}</span>
        <WordReveal text={t('statement.text')} className="statement-text" />
        <Reveal>
          <Link to={to('about')} className="btn btn-ghost">
            <RollText>{t('statement.more')}</RollText>
            <Icon name="arrow" size={16} className="flip-rtl" />
          </Link>
        </Reveal>
      </section>

      <section className="container section">
        <div className="section-head">
          <span className="eyebrow">{t('services.tag')}</span>
          <SplitWords as="h2" className="section-title" text={t('services.title')} />
        </div>
        <div className="bento">
          {services.map((s, i) => (
            <Reveal key={s.key} className={`bento-card${s.size ? ` is-${s.size}` : ''}`} delay={(i % 3) * 80} data-spot>
              <span className="bento-icon">
                <Icon name={s.icon} size={24} />
              </span>
              <h3>{tx(s.title)}</h3>
              <p>{tx(s.body)}</p>
              <div className="chips" dir="ltr">
                {s.tags.map((tag) => (
                  <span className="chip" key={tag}>{tag}</span>
                ))}
              </div>
              <span className="bento-index" aria-hidden="true">{num(`0${i + 1}`)}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <HorizontalWork
        projects={featured}
        header={
          <div className="section-head is-row">
            <div>
              <span className="eyebrow">{t('work.tag')}</span>
              <SplitWords as="h2" className="section-title" text={t('work.title')} />
            </div>
            <Link to={to('projects')} className="btn btn-ghost">
              <RollText>{t('work.all')}</RollText>
              <Icon name="arrow" size={16} className="flip-rtl" />
            </Link>
          </div>
        }
      />

      <section className="container section">
        <div className="section-head">
          <span className="eyebrow">{t('process.tag')}</span>
          <SplitWords as="h2" className="section-title" text={t('process.title')} />
        </div>
        <ol className="process">
          {process.map((step, i) => (
            <Reveal as="li" key={i} delay={i * 110} className="process-step">
              <span className="process-num">{num(`0${i + 1}`)}</span>
              <h3>{tx(step.title)}</h3>
              <p>{tx(step.body)}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container section">
        <div className="section-head is-row">
          <div>
            <span className="eyebrow">{t('experienceShort.tag')}</span>
            <SplitWords as="h2" className="section-title" text={t('experienceShort.title')} />
          </div>
          <Link to={to('about')} className="btn btn-ghost">
            <RollText>{t('experienceShort.more')}</RollText>
            <Icon name="arrow" size={16} className="flip-rtl" />
          </Link>
        </div>
        <div className="jobs">
          {current.map((job, i) => (
            <Reveal key={job.key} className="job" delay={i * 120} data-spot>
              <div className="job-top">
                <span className="job-period">{tx(job.period)}</span>
                <span className="job-badge">
                  <span className="pulse-dot" /> {t('about.current')}
                </span>
              </div>
              <h3>{tx(job.role)}</h3>
              <p className="job-org">
                {job.link ? (
                  <a href={job.link} target="_blank" rel="noreferrer" className="link-underline">{tx(job.org)}</a>
                ) : (
                  tx(job.org)
                )}
                <span> · {tx(job.note)}</span>
              </p>
              <p className="job-summary">{job.bullets[lang][0]}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBlock />
    </>
  )
}

function Hero({ cv }) {
  const { t, tx, to } = useLanguage()
  const visualRef = useRef(null)

  // Gentle parallax / tilt on the portrait, following the pointer.
  useEffect(() => {
    const el = visualRef.current
    if (!el) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    let raf = 0
    let gx = 0
    let gy = 0
    let cx = 0
    let cy = 0
    function onMove(e) {
      gx = (e.clientX / window.innerWidth - 0.5) * 2
      gy = (e.clientY / window.innerHeight - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(loop)
    }
    function loop() {
      cx += (gx - cx) * 0.08
      cy += (gy - cy) * 0.08
      el.style.setProperty('--px', cx.toFixed(3))
      el.style.setProperty('--py', cy.toFixed(3))
      raf = Math.abs(gx - cx) + Math.abs(gy - cy) > 0.001 ? requestAnimationFrame(loop) : 0
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge fade-in" style={{ animationDelay: '200ms' }}>
            <span className="pulse-dot" aria-hidden="true" />
            {t('hero.badge')}
          </span>

          <p className="hero-hello fade-in" style={{ animationDelay: '260ms' }}>{t('hero.hello')}</p>
          <SplitWords as="h1" className="hero-name" text={tx(profile.name)} immediate delay={300} stagger={120} />

          <p className="hero-role fade-in" style={{ animationDelay: '620ms' }}>
            <span className="hero-role-line" aria-hidden="true" />
            <RotatingWords words={t('hero.roles')} />
          </p>

          <p className="hero-intro fade-in" style={{ animationDelay: '760ms' }}>{t('hero.intro')}</p>

          <div className="hero-actions fade-in" style={{ animationDelay: '900ms' }}>
            <Magnetic>
              <Link to={to('projects')} className="btn btn-accent btn-lg">
                <RollText>{t('hero.ctaWork')}</RollText>
                <Icon name="arrow" size={18} className="flip-rtl" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to={to('contact')} className="btn btn-ghost btn-lg">
                <RollText>{t('hero.ctaTalk')}</RollText>
              </Link>
            </Magnetic>
            <a href={cv} className="link-underline hero-cv" download>
              <Icon name="download" size={16} /> {t('hero.ctaCv')}
            </a>
          </div>
        </div>

        <div className="hero-visual" ref={visualRef}>
          <div className="hero-frame fade-in-scale" style={{ animationDelay: '350ms' }}>
            <img src={profile.photo} alt={t('about.photoAlt')} fetchpriority="high" />
            <div className="hero-frame-shade" />
          </div>

          <Link to={to('projects')} className="hero-ring" aria-label={t('hero.ctaWork')} data-cursor="↓">
            <svg viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="ring-path" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text>
                <textPath href="#ring-path" textLength="486" lengthAdjust="spacing">{t('hero.ring')}</textPath>
              </text>
            </svg>
            <span className="hero-ring-core">
              <Icon name="arrowDown" size={22} />
            </span>
          </Link>

          <span className="float-chip c1" dir="ltr"><Icon name="database" size={14} /> SQL Server</span>
          <span className="float-chip c2" dir="ltr"><Icon name="server" size={14} /> Django</span>
          <span className="float-chip c3" dir="ltr"><Icon name="layers" size={14} /> 15+ ERP modules</span>
        </div>
      </div>

      <div className="container hero-foot fade-in" style={{ animationDelay: '1100ms' }}>
        <span className="hero-scroll">
          <span className="hero-scroll-line" aria-hidden="true" />
          {t('hero.scroll')}
        </span>
        <span className="hero-time">
          {t('hero.localTime')} <LocalTime />
        </span>
      </div>
    </section>
  )
}
