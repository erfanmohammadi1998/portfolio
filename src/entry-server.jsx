// Server entry used only at build time (scripts/prerender.mjs) to turn
// each route into static HTML that search engines and link previews read.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { ThemeProvider } from './theme'

export { allRoutes, routeMeta, headTags, urlFor, SITE } from './seo'
export { projects } from './data/projects'

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StaticRouter>,
  )
}
