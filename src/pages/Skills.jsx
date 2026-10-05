import { useLanguage } from '../i18n/LanguageContext'
import { skillGroups } from '../data/resume'
import { projects } from '../data/projects'
import PageHeader from '../components/PageHeader'
import Reveal, { useInView } from '../components/Reveal'
import SplitWords from '../components/SplitWords'
import CtaBlock from '../components/CtaBlock'
import Icon from '../components/Icon'

const groupIcon = { backend: 'server', database: 'database', frontend: 'browser', devops: 'layers', bi: 'chart', other: 'spark' }

// How often each technology appears across the portfolio projects.
function techUsage() {
  const counts = {}
  for (const p of projects) for (const x of p.tech) counts[x] = (counts[x] || 0) + 1
  return Object.entries(counts)
    .filter(([, n]) => n > 1)
    .sort((a, b) => b[1] - a[1])
}

export default function Skills() {
  const { t, num } = useLanguage()
  const usage = techUsage()
  const max = usage[0]?.[1] || 1
  const [chartRef, chartIn] = useInView({ threshold: 0.2 })

  return (
    <>
      <PageHeader eyebrow={t('skills.eyebrow')} title={t('skills.title')} lead={t('skills.subtitle')}>
        <div className="legend fade-in" style={{ animationDelay: '500ms' }}>
          {[3, 2, 1].map((lv) => (
            <span key={lv}>
              <Dots level={lv} /> {t(`skills.levels.${lv}`)}
            </span>
          ))}
        </div>
      </PageHeader>

      <section className="container skills">
        {skillGroups.map((g, i) => (
          <Reveal key={g.key} className="skill-card" delay={(i % 3) * 90} data-spot>
            <div className="skill-head">
              <span className="bento-icon"><Icon name={groupIcon[g.key]} size={22} /></span>
              <h2>{t(`skills.groups.${g.key}`)}</h2>
            </div>
            <ul>
              {g.items.map((s) => (
                <li key={s.name}>
                  <span dir="ltr">{s.name}</span>
                  <span className="skill-level">
                    <span className="skill-level-text">{t(`skills.levels.${s.level}`)}</span>
                    <Dots level={s.level} />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>

      <section className="container section">
        <div className="section-head">
          <SplitWords as="h2" className="section-title" text={t('skills.usageTitle')} />
          <p className="section-lead">{t('skills.usageBody')}</p>
        </div>
        <ul ref={chartRef} className={`usage${chartIn ? ' is-in' : ''}`}>
          {usage.map(([name, n], i) => (
            <li key={name} style={{ '--w': `${(n / max) * 100}%`, '--i': i }}>
              <span className="usage-name" dir="ltr">{name}</span>
              <span className="usage-bar"><span /></span>
              <span className="usage-n">
                {num(n)} <small>{t('skills.projectsUnit')}</small>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <CtaBlock />
    </>
  )
}

function Dots({ level }) {
  return (
    <span className="dots" aria-hidden="true">
      {[1, 2, 3].map((d) => (
        <span key={d} className={d <= level ? 'is-on' : ''} />
      ))}
    </span>
  )
}
