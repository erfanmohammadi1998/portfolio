import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import EmptyState from '../components/EmptyState'
import SkillIcon from '../components/SkillIcon'
import { skills } from '../data/skills'

export default function Skills() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? skills : skills.filter((g) => g.key === filter)

  return (
    <section className="container section">
      <div className="section-head">
        <span className="section-tag">// {t('skills.title')}</span>
        <h2>{t('skills.title')}</h2>
        <p>{t('skills.subtitle')}</p>
      </div>

      {skills.length === 0 ? (
        <EmptyState title={t('skills.emptyTitle')} body={t('skills.emptyBody')} />
      ) : (
        <>
          <div className="skill-filters">
            <button
              type="button"
              className={filter === 'all' ? 'is-active' : ''}
              onClick={() => setFilter('all')}
            >
              {t('skills.filterAll')}
            </button>
            {skills.map((g) => (
              <button
                key={g.key}
                type="button"
                className={filter === g.key ? 'is-active' : ''}
                onClick={() => setFilter(g.key)}
              >
                {t(`skills.categories.${g.key}.title`)}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {shown.map((group, i) => (
              <Reveal key={group.key} delay={i * 70} className="skill-card">
                <div className="skill-card-head">
                  <span className="skill-icon">
                    <SkillIcon name={group.key} />
                  </span>
                  <h3>{t(`skills.categories.${group.key}.title`)}</h3>
                </div>
                <p className="skill-desc">{t(`skills.categories.${group.key}.description`)}</p>
                <div className="stack-list">
                  {group.items.map((item) => (
                    <span className="stack-chip sm" key={item}>{item}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
