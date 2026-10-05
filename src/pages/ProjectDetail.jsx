import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { projects, getProject, projectCopy, relatedProjects } from '../data/projects'
import Reveal from '../components/Reveal'
import SplitWords from '../components/SplitWords'
import ProjectCard from '../components/ProjectCard'
import Lightbox from '../components/Lightbox'
import CtaBlock from '../components/CtaBlock'
import Icon from '../components/Icon'
import RollText from '../components/RollText'

// Same sections, in the same order, as a houshiva.ir/portfolio/<slug> page.
export default function ProjectDetail() {
  const { slug } = useParams()
  const { lang, t, to, num } = useLanguage()
  const project = getProject(slug)
  const c = project ? projectCopy(project, lang) : null
  const [open, setOpen] = useState(null)

  if (!project) return <Navigate to={to('projects')} replace />

  const images = [project.cover, ...project.gallery]
  const at = projects.indexOf(project)
  const next = projects[(at + 1) % projects.length]
  const nextCopy = projectCopy(next, lang)
  const tags = lang === 'fa' ? [...project.tech, ...(c.keywords || [])] : project.tech

  return (
    <article className="pd">
      <header className="container pd-head">
        <Link to={to('projects')} className="pd-back fade-in">
          <Icon name="arrow" size={16} className="flip-ltr" />
          {t('project.back')}
        </Link>
        <span className="pd-cat fade-in" style={{ animationDelay: '120ms' }}>{t(`projects.categories.${project.category}`)}</span>
        <SplitWords as="h1" className="pd-title" text={c.title} immediate delay={160} stagger={45} />
        {lang === 'fa' && project.name && (
          <p className="pd-en fade-in" lang="en" dir="ltr" style={{ animationDelay: '300ms' }}>{project.name}</p>
        )}
        <p className="pd-lead fade-in" style={{ animationDelay: '380ms' }}>{c.lead}</p>
        <div className="pd-meta fade-in" style={{ animationDelay: '480ms' }}>
          <Link to={`${to('contact')}?project=${project.slug}`} className="btn btn-accent">
            <RollText>{t('project.similar')}</RollText>
            <Icon name="arrow" size={16} className="flip-rtl" />
          </Link>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <RollText>{t('project.live')}</RollText>
              <Icon name="arrowUpRight" size={16} className="flip-rtl" />
            </a>
          )}
          <dl className="pd-facts">
            <div>
              <dt>{t('project.stack')}</dt>
              <dd dir="ltr">{project.tech.slice(0, 3).join(' · ')}</dd>
            </div>
            <div>
              <dt>{t('project.gallery')}</dt>
              <dd>{num(images.length)} {t('project.images')}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="container">
        <button type="button" className="pd-cover fade-in-scale" style={{ animationDelay: '420ms' }} onClick={() => setOpen(0)} data-cursor="+">
          <img src={project.cover} alt={c.title} fetchpriority="high" />
        </button>

        {project.gallery.length > 0 && (
          <div className="pd-gallery">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 70} variant="scale">
                <button type="button" onClick={() => setOpen(i + 1)} data-cursor="+">
                  <img src={src} alt={`${c.title} ${i + 2}`} loading="lazy" decoding="async" />
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <div className="container pd-narrow">
        <Reveal as="section" className="pd-section">
          <h2 className="pd-h">{t('project.overview')}</h2>
          <p className="pd-overview">{c.overview}</p>
        </Reveal>

        <div className="pd-split">
          <Reveal className="pd-box" data-spot>
            <span className="pd-box-icon is-problem"><Icon name="close" size={18} /></span>
            <h3>{t('project.problem')}</h3>
            <p>{c.problem}</p>
          </Reveal>
          <Reveal className="pd-box" delay={120} data-spot>
            <span className="pd-box-icon is-solution"><Icon name="check" size={18} /></span>
            <h3>{t('project.solution')}</h3>
            <p>{c.solution}</p>
          </Reveal>
        </div>

        <section className="pd-section">
          <Reveal><h2 className="pd-h">{t('project.build')}</h2></Reveal>
          <ol className="pd-build">
            {c.build.map((step, i) => (
              <Reveal as="li" key={i} delay={i * 50}>
                <span className="pd-build-num">{num(String(i + 1).padStart(2, '0'))}</span>
                <p>{step}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="pd-section">
          <Reveal><h2 className="pd-h">{t('project.features')}</h2></Reveal>
          <ul className="pd-features">
            {c.features.map((f, i) => (
              <Reveal as="li" key={i} delay={(i % 2) * 60} variant="fade">
                <Icon name="check" size={16} />
                <span>{f}</span>
              </Reveal>
            ))}
          </ul>
        </section>

        <Reveal className="pd-result" variant="scale" data-spot>
          <h3>{t('project.result')}</h3>
          <p>{c.result}</p>
        </Reveal>

        <Reveal as="section" className="pd-section">
          <h2 className="pd-h">{t('project.tags')}</h2>
          <ul className="pd-tags">
            {tags.map((tag) => (
              <li key={tag} dir="auto">{tag}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Link to={to(`projects/${next.slug}`)} className="pd-next" data-cursor={t('projects.cursor')}>
        <div className="container pd-next-inner">
          <span className="eyebrow">{t('project.next')}</span>
          <span className="pd-next-title">{nextCopy.title}</span>
          <img src={next.cover} alt="" loading="lazy" className="pd-next-img" />
        </div>
      </Link>

      <section className="container section pd-related">
        <SplitWords as="h2" className="section-title" text={t('project.related')} />
        <div className="pgrid">
          {relatedProjects(project).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <CtaBlock title={t('project.ctaTitle')} body={t('project.ctaBody')} button={t('project.ctaButton')} />

      {open !== null && (
        <Lightbox images={images} index={open} onChange={setOpen} onClose={() => setOpen(null)} alt={c.title} />
      )}
    </article>
  )
}
