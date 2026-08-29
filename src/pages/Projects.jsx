import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import EmptyState from '../components/EmptyState'
import ProjectCover, { LockGlyph } from '../components/ProjectCover'
import { projects } from '../data/projects'

export default function Projects() {
  const { lang, t, tx } = useLanguage()
  const L = t('projects.labels')

  return (
    <section className="container section">
      <div className="section-head">
        <span className="section-tag">// {t('projects.title')}</span>
        <h2 dir="auto">{t('projects.title')}</h2>
        <p dir="auto">{t('projects.subtitle')}</p>
      </div>

      {projects.length === 0 ? (
        <EmptyState title={t('projects.emptyTitle')} body={t('projects.emptyBody')} />
      ) : (
        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal as="div" key={p.slug} delay={(i % 3) * 70}>
              <Link className="proj-card" to={`/${lang}/projects/${p.slug}`}>
                <ProjectCover arch={p.arch} seed={p.slug} />
                <div className="proj-card-body">
                  <div className="proj-card-head">
                    <h3 dir="auto">{tx(p.title)}</h3>
                    {p.private && (
                      <span className="proj-private"><LockGlyph /> {L.private}</span>
                    )}
                  </div>
                  <p className="proj-card-tagline" dir="auto">{tx(p.tagline)}</p>
                  <div className="stack-list proj-card-stack">
                    {p.stack.slice(0, 5).map((s) => (
                      <span className="stack-chip sm" key={s}>{s}</span>
                    ))}
                  </div>
                  <span className="proj-card-cta">{L.view} →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
