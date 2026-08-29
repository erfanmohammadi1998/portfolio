import { Link, useParams, Navigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import ProjectCover, { LockGlyph } from '../components/ProjectCover'
import { getProject } from '../data/projects'

export default function ProjectDetail() {
  const { lang, t, tx } = useLanguage()
  const { slug } = useParams()
  const p = getProject(slug)
  const L = t('projects.labels')

  if (!p) return <Navigate to={`/${lang}/projects`} replace />

  return (
    <article className="container section pd">
      <Link className="pd-back" to={`/${lang}/projects`}>← {L.back}</Link>

      <header className="pd-head">
        <span className="section-tag">// {t('projects.title')}</span>
        <h1 dir="auto">{tx(p.title)}</h1>
        <p className="pd-tagline" dir="auto">{tx(p.tagline)}</p>
        <div className="pd-meta">
          {p.private ? (
            <span className="proj-private"><LockGlyph /> {L.private}</span>
          ) : null}
          {p.links?.code && (
            <a href={p.links.code} target="_blank" rel="noreferrer">{L.code} ↗</a>
          )}
          {p.links?.demo && (
            <a className="is-primary" href={p.links.demo} target="_blank" rel="noreferrer">{L.demo} ↗</a>
          )}
        </div>
      </header>

      <div className="pd-cover">
        <ProjectCover arch={p.arch} seed={p.slug} />
      </div>

      <div className="pd-grid">
        <div className="pd-main">
          {p.overview && (
            <section className="pd-block">
              <h2>{L.overview}</h2>
              <p dir="auto">{tx(p.overview)}</p>
            </section>
          )}

          <section className="pd-block">
            <h2>{L.problem}</h2>
            <p dir="auto">{tx(p.problem)}</p>
          </section>

          {Array.isArray(p.build) && p.build.length > 0 && (
            <section className="pd-block">
              <h2>{L.whatIBuilt}</h2>
              {p.build.map((para, i) => (
                <p key={i} dir="auto">{tx(para)}</p>
              ))}
            </section>
          )}

          <section className="pd-block">
            <h2>{L.result}</h2>
            <p dir="auto">{tx(p.result)}</p>
          </section>
        </div>

        <aside className="pd-side">
          {Array.isArray(p.features) && p.features.length > 0 && (
            <div className="pd-card">
              <span className="section-tag">// {L.features}</span>
              <ul className="pd-features">
                {p.features.map((f, i) => (
                  <li key={i} dir="auto">{tx(f)}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="pd-card">
            <span className="section-tag">// {L.stack}</span>
            <div className="stack-list">
              {p.stack.map((s) => (
                <span className="stack-chip sm" key={s}>{s}</span>
              ))}
            </div>
          </div>

          {p.role && (
            <div className="pd-card">
              <span className="section-tag">// {L.role}</span>
              <p dir="auto">{tx(p.role)}</p>
            </div>
          )}

          {p.private && !p.links?.code && (
            <p className="proj-private-note" dir="auto">{L.privateNote}</p>
          )}
        </aside>
      </div>
    </article>
  )
}
