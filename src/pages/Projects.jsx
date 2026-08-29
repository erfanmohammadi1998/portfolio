import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import EmptyState from '../components/EmptyState'
import ProjectCover, { LockGlyph } from '../components/ProjectCover'
import { projects } from '../data/projects'

export default function Projects() {
  const { t, tx } = useLanguage()
  const [open, setOpen] = useState(null)
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
          {projects.map((p, i) => {
            const isOpen = open === p.slug
            return (
              <Reveal as="article" key={p.slug} delay={(i % 2) * 80} className={`proj-card${isOpen ? ' is-open' : ''}`}>
                <ProjectCover arch={p.arch} seed={p.slug} />

                <div className="proj-card-body">
                  <div className="proj-card-head">
                    <h3 dir="auto">{tx(p.title)}</h3>
                    {p.private && (
                      <span className="proj-private">
                        <LockGlyph /> {L.private}
                      </span>
                    )}
                  </div>
                  <p className="proj-card-tagline" dir="auto">{tx(p.tagline)}</p>

                  <div className="stack-list proj-card-stack">
                    {p.stack.map((s) => (
                      <span className="stack-chip sm" key={s}>{s}</span>
                    ))}
                  </div>

                  {isOpen && (
                    <div className="proj-detail" dir="auto">
                      <div className="proj-row">
                        <span className="proj-label">{L.problem}</span>
                        <p>{tx(p.problem)}</p>
                      </div>
                      <div className="proj-row">
                        <span className="proj-label">{L.approach}</span>
                        <p>{tx(p.approach)}</p>
                      </div>
                      <div className="proj-row">
                        <span className="proj-label">{L.result}</span>
                        <p>{tx(p.result)}</p>
                      </div>
                    </div>
                  )}

                  <div className="proj-card-foot">
                    <button
                      type="button"
                      className="proj-toggle"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : p.slug)}
                    >
                      {isOpen ? L.less : L.more}
                      <span aria-hidden="true">{isOpen ? ' −' : ' +'}</span>
                    </button>

                    <div className="proj-card-links">
                      {p.links?.code && (
                        <a href={p.links.code} target="_blank" rel="noreferrer">{L.code} ↗</a>
                      )}
                      {p.links?.demo && (
                        <a className="is-primary" href={p.links.demo} target="_blank" rel="noreferrer">{L.demo} ↗</a>
                      )}
                      {p.private && !p.links?.demo && (
                        <span className="proj-private-note">{L.privateNote}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      )}
    </section>
  )
}
