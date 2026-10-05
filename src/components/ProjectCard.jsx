import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { projectCopy } from '../data/projects'
import Icon from './Icon'

// The portfolio card, laid out like houshiva.ir/portfolio:
// cover, category, title, one-line summary, "view details" link.
export default function ProjectCard({ project, index = 0 }) {
  const { lang, t, to, num } = useLanguage()
  const c = projectCopy(project, lang)
  const href = to(`projects/${project.slug}`)
  const imageCount = 1 + project.gallery.length

  return (
    <article className="pcard" data-spot style={{ '--i': index }}>
      <Link to={href} className="pcard-cover" tabIndex={-1} aria-hidden="true" data-cursor={t('projects.cursor')}>
        <img src={project.cover} alt={c.title} loading="lazy" decoding="async" width="1440" height="900" />
        <span className="pcard-shine" />
        {imageCount > 1 && (
          <span className="pcard-count">
            <Icon name="images" size={14} /> {num(imageCount)}
          </span>
        )}
      </Link>
      <div className="pcard-body">
        <span className="pcard-cat">{t(`projects.categories.${project.category}`)}</span>
        <h3 className="pcard-title">
          <Link to={href}>{c.title}</Link>
        </h3>
        <p className="pcard-lead">{c.lead}</p>
        <Link to={href} className="pcard-link">
          {t('projects.view')}
          <Icon name="arrow" size={16} className="flip-rtl" />
        </Link>
      </div>
    </article>
  )
}
