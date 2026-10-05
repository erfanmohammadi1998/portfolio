// Portfolio projects. The list, order, categories and images mirror
// houshiva.ir/portfolio, minus a few projects left out on purpose
// (café, digital menu, clothing store, barber landing page, label printing,
// modem line tools). Copy lives in projects.{fa,en,de}.js,
// keyed by slug, so editing text never means touching this file. `name` is
// the English product name houshiva shows under the Persian title (if any).

import fa from './projects.fa'
import en from './projects.en'
import de from './projects.de'

const copy = { fa, en, de }

export const categories = ['all', 'website', 'software', 'management-system', 'dashboard']

const img = (name) => `/portfolio/${name}.webp`

export const projects = [
  {
    slug: 'avana-language-academy',
    category: 'management-system',
    name: 'Avana',
    featured: true,
    cover: img('avana-1'),
    gallery: ['avana-2', 'avana-3', 'avana-4', 'avana-5', 'avana-6', 'avana-7'].map(img),
    tech: ['Django', 'DRF', 'JWT', 'React', 'Chart.js', 'ReportLab'],
  },
  {
    slug: 'rangnama-paint-visualizer',
    category: 'software',
    name: 'Rangnama',
    featured: true,
    cover: img('rangnama-1'),
    gallery: [img('rangnama-2')],
    tech: ['Python', 'FastAPI', 'PyTorch', 'Mask2Former', 'SAM', 'OpenCV', 'JavaScript', 'Docker'],
  },
  {
    slug: 'market-intelligence-platform',
    category: 'dashboard',
    name: 'Market Intelligence Platform',
    featured: true,
    cover: img('market-radar-1'),
    gallery: ['market-radar-2', 'market-radar-3', 'market-radar-4', 'market-radar-5', 'market-radar-6'].map(img),
    tech: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'React', 'TypeScript', 'Docker'],
  },
  {
    slug: 'karnama-job-search',
    category: 'software',
    name: 'Karnama',
    featured: true,
    cover: img('karnama-1'),
    gallery: ['karnama-2', 'karnama-3', 'karnama-4', 'karnama-5'].map(img),
    tech: ['React', 'Vite', 'Django', 'DRF', 'PWA'],
  },
  {
    slug: 'houshiva-asset',
    category: 'management-system',
    name: 'Houshiva Asset',
    featured: true,
    cover: img('houshiva-asset-1'),
    gallery: ['houshiva-asset-2', 'houshiva-asset-3', 'houshiva-asset-4', 'houshiva-asset-5', 'houshiva-asset-6'].map(img),
    tech: ['Django', 'DRF', 'React', 'TypeScript', 'PostgreSQL'],
  },
  {
    slug: 'rezumeban-ats',
    category: 'management-system',
    name: 'Rezumeban',
    featured: true,
    cover: img('rezumeban-1'),
    gallery: ['rezumeban-2', 'rezumeban-3', 'rezumeban-4', 'rezumeban-5', 'rezumeban-6'].map(img),
    tech: ['Django', 'DRF', 'JWT', 'React', 'Vite', 'Tailwind CSS'],
  },
  {
    slug: 'nikiteb-website',
    category: 'website',
    name: 'Nikiteb',
    cover: img('nikiteb'),
    gallery: [img('nikiteb-2')],
    live: 'https://nikiteb.com',
    tech: ['React', 'Django', 'REST API'],
  },
  {
    slug: 'ticket-management-system',
    category: 'software',
    name: 'Ticket Management System',
    cover: img('ticket-1'),
    gallery: ['ticket-2', 'ticket-3', 'ticket-4', 'ticket-5'].map(img),
    tech: ['Django', 'DRF', 'JWT', 'SQL Server', 'React', 'Tailwind CSS'],
  },
  {
    slug: 'management-dashboard-analytics',
    category: 'dashboard',
    name: null,
    cover: img('management-dashboard'),
    gallery: [],
    tech: ['SQL Server', 'SSIS', 'T-SQL', 'Power BI'],
  },
  {
    slug: 'document-management',
    category: 'software',
    name: null,
    cover: img('document-management'),
    gallery: [],
    tech: ['Django', 'PostgreSQL', 'OCR', 'React'],
  },
  {
    slug: 'school-management',
    category: 'management-system',
    name: null,
    cover: img('school-management'),
    gallery: [],
    tech: ['Python'],
  },
  {
    slug: 'tidaland-pet-shop',
    category: 'website',
    name: 'Tidaland',
    cover: img('tidaland'),
    gallery: [],
    live: 'https://github.com/erfanmohammadi1998/tidaland-pet-shop',
    tech: ['HTML5', 'CSS3'],
  },
]

// Localized copy for one project; falls back to English, then Persian.
export function projectCopy(project, lang) {
  return copy[lang]?.[project.slug] ?? copy.en[project.slug] ?? copy.fa[project.slug]
}

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}

// Same-category projects first, then the rest, excluding the current one.
export function relatedProjects(project, count = 3) {
  const others = projects.filter((p) => p.slug !== project.slug)
  const same = others.filter((p) => p.category === project.category)
  const rest = others.filter((p) => p.category !== project.category)
  return [...same, ...rest].slice(0, count)
}
