// Everything search engines and link previews see: per-page titles and
// descriptions, canonical + hreflang URLs, Open Graph / Twitter tags and
// JSON-LD. Used twice: by scripts/prerender.mjs to bake real <head> tags
// into every static page, and by the app to keep them right while
// navigating client-side.

import { supportedLangs, translations } from './i18n/translations'
import { projects, getProject, projectCopy } from './data/projects'
import { profile } from './data/profile'
import { education } from './data/resume'

export const SITE = 'https://erfanmohammadi.ir'
const locales = { fa: 'fa_IR', en: 'en_US', de: 'de_DE' }
const pages = ['', 'about', 'projects', 'skills', 'resume', 'contact']

const copy = {
  home: {
    fa: ['عرفان محمدی | برنامه‌نویس بک‌اند پایتون و جنگو، متخصص SQL Server', 'عرفان محمدی، برنامه‌نویس و توسعه‌دهنده‌ی بک‌اند پایتون و جنگو و متخصص SQL Server با بیش از پنج سال سابقه در نرم‌افزار سازمانی، ERP، API و هوش مصنوعی.'],
    en: ['Erfan Mohammadi | Python & Django Backend Developer, SQL Server Specialist', 'Erfan Mohammadi is a Python/Django backend developer and SQL Server specialist with 5+ years building enterprise software, ERP modules, REST APIs and AI features.'],
    de: ['Erfan Mohammadi | Python- & Django-Backend-Entwickler, SQL-Server-Spezialist', 'Erfan Mohammadi ist Python/Django-Backend-Entwickler und SQL-Server-Spezialist mit über 5 Jahren Erfahrung in Unternehmenssoftware, ERP, REST-APIs und KI-Lösungen.'],
  },
  about: {
    fa: ['درباره عرفان محمدی | سوابق کاری و تحصیلات توسعه‌دهنده بک‌اند', 'درباره‌ی عرفان محمدی، برنامه‌نویس بک‌اند پایتون و جنگو و کارشناس پایگاه داده‌ی SQL Server در تهران: سوابق کاری، تحصیلات، دوره‌های تخصصی و زبان‌ها.'],
    en: ['About Erfan Mohammadi | Backend Developer Experience & Education', 'Work experience, education, professional training and languages of Erfan Mohammadi, a Python/Django backend developer and SQL Server specialist based in Tehran.'],
    de: ['Über Erfan Mohammadi | Berufserfahrung & Ausbildung', 'Berufserfahrung, Ausbildung, Weiterbildung und Sprachen von Erfan Mohammadi, Python/Django-Backend-Entwickler und SQL-Server-Spezialist aus Teheran.'],
  },
  projects: {
    fa: ['نمونه‌کارهای عرفان محمدی | نرم‌افزار سازمانی، داشبورد و وب‌سایت', 'نمونه‌کارهای عرفان محمدی: سامانه‌های مدیریتی، نرم‌افزار اختصاصی، داشبورد هوش تجاری و وب‌سایت، ساخته‌شده با Django، React، PostgreSQL و SQL Server.'],
    en: ['Portfolio | Enterprise Software, Dashboards & Web Apps · Erfan Mohammadi', 'Selected projects by Erfan Mohammadi: management systems, custom software, BI dashboards and websites built with Django, React, PostgreSQL and SQL Server.'],
    de: ['Portfolio | Unternehmenssoftware, Dashboards & Web-Apps · Erfan Mohammadi', 'Ausgewählte Projekte von Erfan Mohammadi: Verwaltungssysteme, Individualsoftware, BI-Dashboards und Websites mit Django, React, PostgreSQL und SQL Server.'],
  },
  skills: {
    fa: ['مهارت‌های فنی عرفان محمدی | Python، Django، SQL Server، React', 'مهارت‌های فنی عرفان محمدی همراه با سطح هر کدام: پایتون، جنگو، REST API، SQL Server، T-SQL، PostgreSQL، React، Docker، Power BI و ابزارهای گزارش‌گیری.'],
    en: ['Skills | Python, Django, SQL Server & React · Erfan Mohammadi', 'Technical skills of Erfan Mohammadi with levels: Python, Django, REST APIs, SQL Server, T-SQL, PostgreSQL, React, Docker, Power BI and reporting tools.'],
    de: ['IT-Kenntnisse | Python, Django, SQL Server & React · Erfan Mohammadi', 'IT-Kenntnisse von Erfan Mohammadi mit Niveau: Python, Django, REST-APIs, SQL Server, T-SQL, PostgreSQL, React, Docker, Power BI und Reporting-Tools.'],
  },
  resume: {
    fa: ['رزومه عرفان محمدی | توسعه‌دهنده بک‌اند پایتون و SQL Server', 'رزومه‌ی کامل عرفان محمدی، توسعه‌دهنده‌ی بک‌اند پایتون و جنگو و متخصص SQL Server: سوابق، تحصیلات، پروژه‌ها و مهارت‌ها، با نسخه‌ی PDF انگلیسی و آلمانی.'],
    en: ['Résumé / CV | Erfan Mohammadi, Python Backend Developer', 'CV of Erfan Mohammadi, Python/Django backend developer and SQL Server specialist: experience, education, projects and skills, with English and German PDF downloads.'],
    de: ['Lebenslauf | Erfan Mohammadi, Python Backend-Entwickler', 'Lebenslauf von Erfan Mohammadi, Python/Django-Backend-Entwickler und SQL-Server-Spezialist: Erfahrung, Ausbildung, Projekte und Skills, als PDF auf Deutsch und Englisch.'],
  },
  contact: {
    fa: ['تماس با عرفان محمدی | همکاری و پروژه‌ی نرم‌افزاری', 'برای پروژه‌ی نرم‌افزاری، مشاوره‌ی پایگاه داده یا فرصت شغلی با عرفان محمدی در تماس باشید: ایمیل، تلفن، لینکدین و گیت‌هاب.'],
    en: ['Contact Erfan Mohammadi | Software Projects & Backend Roles', 'Get in touch with Erfan Mohammadi about a software project, database consulting or a backend developer role: email, phone, LinkedIn and GitHub.'],
    de: ['Kontakt | Erfan Mohammadi · Projekte & Backend-Stellen', 'Kontakt zu Erfan Mohammadi für Softwareprojekte, Datenbank-Beratung oder eine Stelle als Backend-Entwickler: E-Mail, Telefon, LinkedIn und GitHub.'],
  },
}

const crumbName = {
  home: { fa: 'خانه', en: 'Home', de: 'Start' },
}

// Public URL of a route. Trailing slash: that is what GitHub Pages serves
// without a redirect for the prerendered folder/index.html pages.
export function urlFor(lang, path = '') {
  return `${SITE}/${lang}/${path ? `${path}/` : ''}`
}

// Every prerendered route as { lang, path }.
export function allRoutes() {
  const paths = [...pages, ...projects.map((p) => `projects/${p.slug}`)]
  return supportedLangs.flatMap((lang) => paths.map((path) => ({ lang, path })))
}

function clip(text, max = 158) {
  const s = String(text).replace(/\s+/g, ' ').trim()
  if (s.length <= max) return s
  const cut = s.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`
}

// Every way people search for the name. Shown nowhere; read by search engines.
export const nameVariants = [
  'عرفان محمدی',
  'Erfan Mohammadi',
  'عرفان محمدی برنامه‌نویس',
  'عرفان محمدی برنامه نویس',
  'عرفان محمدی ششکل',
  'Erfan Mohammadi developer',
  'Erfan Mohammadi Python',
]

function person(lang) {
  return {
    '@type': 'Person',
    '@id': `${SITE}/#person`,
    name: profile.name[lang],
    alternateName: nameVariants,
    givenName: lang === 'fa' ? 'عرفان' : 'Erfan',
    familyName: lang === 'fa' ? 'محمدی' : 'Mohammadi',
    jobTitle: profile.role[lang],
    description: copy.home[lang][1],
    url: SITE,
    image: { '@type': 'ImageObject', url: `${SITE}${profile.photo}`, caption: profile.name[lang] },
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'Tehran', addressCountry: 'IR' },
    nationality: { '@type': 'Country', name: 'Iran' },
    alumniOf: education.map((e) => ({ '@type': 'EducationalOrganization', name: e.school.en })),
    knowsAbout: ['Python', 'Django', 'Django REST Framework', 'REST API design', 'Microsoft SQL Server', 'T-SQL', 'Database performance tuning', 'PostgreSQL', 'MySQL', 'React', 'Docker', 'Power BI', 'SSIS', 'ERP systems', 'Large language models', 'Computer vision'],
    knowsLanguage: ['fa', 'en', 'de'],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Backend Developer',
      occupationLocation: { '@type': 'City', name: 'Tehran' },
      skills: 'Python, Django, REST APIs, Microsoft SQL Server, T-SQL, PostgreSQL, Docker',
    },
    founder: { '@type': 'Organization', name: 'Houshiva', url: profile.links.houshiva },
    sameAs: [profile.links.github, profile.links.linkedin, profile.links.houshiva],
  }
}

function website(lang) {
  return {
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: `${SITE}/`,
    name: profile.name.en,
    alternateName: profile.name.fa,
    inLanguage: supportedLangs,
    publisher: { '@id': `${SITE}/#person` },
    description: copy.home[lang][1],
  }
}

function breadcrumbs(lang, items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: crumbName.home[lang], url: urlFor(lang) }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

// Head data for one route. `path` is relative to the language root,
// e.g. '' | 'about' | 'projects/avana-language-academy'.
export function routeMeta(lang, rawPath = '') {
  const path = rawPath.replace(/^\/+|\/+$/g, '')
  const t = translations[lang]
  const nav = t.nav
  const graph = [person(lang), website(lang)]
  let title
  let description
  let image = `${SITE}/og/home-${lang}.jpg`
  let type = 'website'
  let noindex = false
  let known = true

  const slug = path.startsWith('projects/') ? path.slice('projects/'.length) : null
  const project = slug ? getProject(slug) : null

  if (project) {
    const c = projectCopy(project, lang)
    title = `${c.title} | ${t.brand}`
    description = clip(c.lead)
    image = `${SITE}/og/projects/${project.slug}.jpg`
    type = 'article'
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${urlFor(lang, path)}#project`,
      name: c.title,
      alternateName: project.name || undefined,
      headline: c.title,
      description: clip(c.overview, 300),
      url: urlFor(lang, path),
      image: [`${SITE}${project.cover}`, ...project.gallery.map((g) => `${SITE}${g}`)],
      inLanguage: lang,
      genre: t.projects.categories[project.category],
      keywords: [...project.tech, ...(lang === 'fa' ? c.keywords || [] : [])].join(', '),
      author: { '@id': `${SITE}/#person` },
      creator: { '@id': `${SITE}/#person` },
      isPartOf: { '@id': `${SITE}/#website` },
      ...(project.live ? { sameAs: project.live } : {}),
    })
    graph.push(breadcrumbs(lang, [
      { name: nav.projects, url: urlFor(lang, 'projects') },
      { name: c.title, url: urlFor(lang, path) },
    ]))
  } else if (pages.includes(path)) {
    const key = path || 'home'
    ;[title, description] = copy[key][lang]
    if (path === 'projects') {
      graph.push({
        '@type': 'CollectionPage',
        '@id': `${urlFor(lang, path)}#page`,
        url: urlFor(lang, path),
        name: title,
        inLanguage: lang,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: projects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: urlFor(lang, `projects/${p.slug}`),
            name: projectCopy(p, lang).title,
          })),
        },
      })
    }
    if (path === 'about' || path === 'resume') {
      graph.push({
        '@type': 'ProfilePage',
        '@id': `${urlFor(lang, path)}#page`,
        url: urlFor(lang, path),
        name: title,
        inLanguage: lang,
        mainEntity: { '@id': `${SITE}/#person` },
      })
    }
    if (path === 'contact') {
      graph.push({ '@type': 'ContactPage', url: urlFor(lang, path), name: title, inLanguage: lang, about: { '@id': `${SITE}/#person` } })
    }
    if (path) graph.push(breadcrumbs(lang, [{ name: nav[path], url: urlFor(lang, path) }]))
  } else {
    known = false
    noindex = true
    title = `${t.notFound.title} | ${t.brand}`
    description = t.notFound.body
  }

  const alternates = known
    ? [...supportedLangs.map((l) => ({ hreflang: l, href: urlFor(l, path) })), { hreflang: 'x-default', href: urlFor('fa', path) }]
    : []

  return {
    lang,
    dir: t.dir,
    title,
    description,
    canonical: known ? urlFor(lang, path) : null,
    alternates,
    image,
    imageAlt: title,
    type,
    noindex,
    locale: locales[lang],
    altLocales: supportedLangs.filter((l) => l !== lang).map((l) => locales[l]),
    keywords: keywordsFor(lang),
    jsonLd: { '@context': 'https://schema.org', '@graph': graph },
  }
}

function keywordsFor(lang) {
  const base = {
    fa: ['برنامه‌نویس بک‌اند', 'برنامه‌نویس پایتون', 'برنامه‌نویس جنگو', 'متخصص SQL Server', 'طراحی نرم‌افزار سازمانی', 'ERP'],
    en: ['backend developer', 'Python developer', 'Django developer', 'SQL Server specialist', 'enterprise software', 'ERP'],
    de: ['Backend-Entwickler', 'Python-Entwickler', 'Django-Entwickler', 'SQL-Server-Spezialist', 'Unternehmenssoftware', 'ERP'],
  }
  return [...nameVariants, ...base[lang]].join(', ')
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// The <head> tags for a route, as an HTML string (used at build time).
export function headTags(m) {
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<meta name="robots" content="${m.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}" />`,
    `<meta name="keywords" content="${esc(m.keywords)}" />`,
  ]
  if (m.canonical) tags.push(`<link rel="canonical" href="${m.canonical}" />`)
  for (const a of m.alternates) tags.push(`<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`)
  tags.push(
    `<meta property="og:type" content="${m.type}" />`,
    `<meta property="og:site_name" content="${esc(profile.name[m.lang])}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:locale" content="${m.locale}" />`,
    ...m.altLocales.map((l) => `<meta property="og:locale:alternate" content="${l}" />`),
    `<meta property="og:image" content="${m.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(m.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${m.image}" />`,
  )
  if (m.canonical) tags.push(`<meta property="og:url" content="${m.canonical}" />`)
  tags.push(`<script type="application/ld+json" id="ld-json">${JSON.stringify(m.jsonLd).replace(/</g, '\\u003c')}</script>`)
  return tags.join('\n    ')
}

// Keeps the live document's head in sync after client-side navigation.
export function applyHead(m) {
  if (typeof document === 'undefined') return
  document.title = m.title
  const head = document.head
  function meta(attr, key, value) {
    let el = head.querySelector(`meta[${attr}="${key}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, key)
      head.appendChild(el)
    }
    el.setAttribute('content', value)
  }
  meta('name', 'description', m.description)
  meta('name', 'robots', m.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1')
  meta('property', 'og:title', m.title)
  meta('property', 'og:description', m.description)
  meta('property', 'og:type', m.type)
  meta('property', 'og:image', m.image)
  meta('property', 'og:locale', m.locale)
  meta('name', 'twitter:title', m.title)
  meta('name', 'twitter:description', m.description)
  meta('name', 'twitter:image', m.image)
  if (m.canonical) meta('property', 'og:url', m.canonical)

  let canonical = head.querySelector('link[rel="canonical"]')
  if (m.canonical) {
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      head.appendChild(canonical)
    }
    canonical.href = m.canonical
  } else canonical?.remove()

  head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
  for (const a of m.alternates) {
    const el = document.createElement('link')
    el.rel = 'alternate'
    el.hreflang = a.hreflang
    el.href = a.href
    head.appendChild(el)
  }

  let ld = document.getElementById('ld-json')
  if (!ld) {
    ld = document.createElement('script')
    ld.type = 'application/ld+json'
    ld.id = 'ld-json'
    head.appendChild(ld)
  }
  ld.textContent = JSON.stringify(m.jsonLd)
}
