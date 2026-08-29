import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import EmptyState from '../components/EmptyState'
import { projects } from '../data/projects'

export default function Projects() {
  const { t, tx } = useLanguage()
  const [open, setOpen] = useState(() => projects[0]?.slug ?? null)
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
        <ol className="proj-list">
          {projects.map((p, i) => {
            const isOpen = open === p.slug
            return (
              <Reveal as="li" key={p.slug} delay={i * 60} className={`proj${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="proj-summary"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : p.slug)}
                >
                  <span className="proj-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="proj-head">
                    <span className="proj-title" dir="auto">{tx(p.title)}</span>
                    <span className="proj-tagline" dir="auto">{tx(p.tagline)}</span>
                  </span>
                  <span className="proj-meta">
                    {p.private && <span className="proj-private">{L.private}</span>}
                    <span className="proj-kind">{tx(p.kind)}</span>
                    <span className="proj-year">{p.year}</span>
                    <span className="proj-caret" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </span>
                </button>

                {isOpen && (
                  <div className="proj-detail">
                    <div className="proj-row">
                      <span className="proj-label">{L.problem}</span>
                      <p dir="auto">{tx(p.problem)}</p>
                    </div>
                    <div className="proj-row">
                      <span className="proj-label">{L.approach}</span>
                      <p dir="auto">{tx(p.approach)}</p>
                    </div>
                    <div className="proj-row">
                      <span className="proj-label">{L.result}</span>
                      <p dir="auto">{tx(p.result)}</p>
                    </div>
                    <div className="proj-row">
                      <span className="proj-label">{L.stack}</span>
                      <div className="stack-list">
                        {p.stack.map((s) => (
                          <span className="stack-chip sm" key={s}>{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="proj-links">
                      {p.links?.code && (
                        <a className="btn btn-ghost btn-sm" href={p.links.code} target="_blank" rel="noreferrer">
                          {L.code} ↗
                        </a>
                      )}
                      {p.links?.demo && (
                        <a className="btn btn-primary btn-sm" href={p.links.demo} target="_blank" rel="noreferrer">
                          {L.demo} ↗
                        </a>
                      )}
                      {p.private && <span className="proj-private-note">{L.privateNote}</span>}
                    </div>
                  </div>
                )}
              </Reveal>
            )
          })}
        </ol>
      )}
    </section>
  )
}
