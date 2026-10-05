// Runs after `vite build` + the SSR build. For every route it writes a real
// HTML file (dist/<lang>/<path>/index.html) with the rendered page and its
// own <head>: title, description, canonical, hreflang, Open Graph, JSON-LD.
// GitHub Pages then serves each URL with a 200 instead of the SPA 404 trick.
// Also writes 404.html, the root redirect and sitemap.xml.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssr = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)
const { render, allRoutes, routeMeta, headTags, urlFor, SITE, projects } = ssr

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('index.html is missing the <!--app-head--> / <!--app-html--> markers')
}

function page(url, meta, extraHead = '') {
  const html = render(url)
  return template
    .replace(/<html lang="[^"]*" dir="[^"]*"/, `<html lang="${meta.lang}" dir="${meta.dir}"`)
    .replace('<!--app-head-->', headTags(meta) + extraHead)
    .replace('<!--app-html-->', html)
}

function write(rel, content) {
  const file = path.join(dist, rel)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, content)
}

const routes = allRoutes()
for (const { lang, path: p } of routes) {
  const url = `/${lang}/${p ? `${p}/` : ''}`
  const meta = routeMeta(lang, p)
  // The portrait is the largest paint on the home page: fetch it early.
  const extra = p === '' ? '\n    <link rel="preload" as="image" href="/erfan-mohammadi.jpg" fetchpriority="high" />' : ''
  write(path.join(lang, p, 'index.html'), page(url, meta, extra))
}

// Unknown URLs: GitHub Pages serves this with a real 404 status. The app
// boots on it too and shows the not-found page in the URL's language.
write('404.html', page('/fa/404/', routeMeta('fa', '__not-found__')))

// The bare domain points at the Persian home page.
const alternates = ['fa', 'en', 'de']
  .map((l) => `<link rel="alternate" hreflang="${l}" href="${urlFor(l)}" />`)
  .join('\n    ')
write(
  'index.html',
  `<!doctype html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>عرفان محمدی | Erfan Mohammadi</title>
    <meta name="description" content="Erfan Mohammadi, Python / Django backend developer and SQL Server specialist." />
    <link rel="canonical" href="${urlFor('fa')}" />
    ${alternates}
    <link rel="alternate" hreflang="x-default" href="${urlFor('fa')}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta http-equiv="refresh" content="0; url=/fa/" />
    <script>location.replace('/fa/' + location.search + location.hash)</script>
    <style>body{background:#0b0b0d;color:#f3f1ec;font-family:system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0}a{color:#d4ff3a}</style>
  </head>
  <body><a href="/fa/">erfanmohammadi.ir/fa/</a></body>
</html>
`,
)

// Sitemap with hreflang alternates and project images.
const today = new Date().toISOString().slice(0, 10)
const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]))
const urls = routes.map(({ lang, path: p }) => {
  const alts = ['fa', 'en', 'de']
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlFor(l, p)}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('fa', p)}"/>`)
    .join('\n')
  const proj = p.startsWith('projects/') ? bySlug[p.slice(9)] : null
  const images = proj
    ? [proj.cover, ...proj.gallery].map((src) => `    <image:image><image:loc>${SITE}${src}</image:loc></image:image>`).join('\n')
    : p === '' || p === 'about'
      ? `    <image:image><image:loc>${SITE}/erfan-mohammadi.jpg</image:loc></image:image>`
      : ''
  const priority = p === '' ? '1.0' : proj ? '0.7' : '0.8'
  return `  <url>
    <loc>${urlFor(lang, p)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p === '' || p === 'projects' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority}</priority>
${alts}${images ? `\n${images}` : ''}
  </url>`
})
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`,
)

console.log(`prerendered ${routes.length} pages + 404.html, root redirect and sitemap.xml`)
