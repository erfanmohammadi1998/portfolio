# Erfan Mohammadi — Portfolio

Personal portfolio built with plain React + Vite — no framework beyond React
itself. Three languages (fa / en / de), right-to-left aware, deployed to GitHub
Pages on a custom domain.

**Live:** https://erfanmohammadi.ir

## The idea

The site is framed as a small system you can inspect two ways:

- **System map** — the home page is an interactive architecture diagram
  (`client → api-gateway → services → datastore`). Every node is a real
  destination; click one to navigate.
- **API console** — press `Ctrl/⌘ + K` (or the `>_` button) and call the
  portfolio like an API: `GET /projects`, `GET /projects/ticket-management-system`,
  `GET /skills`, `POST /contact`, `whoami`, `open /about`, …

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/  Navbar, Footer, SystemMap, ApiConsole, LanguageSwitcher, …
  pages/       Home, About, Projects, Skills, Tutorials, Contact, NotFound
  i18n/        translations.js (fa/en/de) + LanguageContext (t / tx helpers)
  data/        profile, projects, skills, stack, stats, systemMap
  styles/      global.css — one file, CSS-variable theme
```

## Editing content

| What | Where |
|---|---|
| Personal / contact info | `src/data/profile.js` |
| Projects (also power the console + map) | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| System-map nodes & edges | `src/data/systemMap.js` |
| All copy / translations | `src/i18n/translations.js` |

## Language routing

Every page lives under a language prefix: `/fa` (default), `/en`, `/de`
(e.g. `/en/projects`). Visiting `/` redirects to `/fa`. Persian renders RTL.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every
push to `main`. The custom domain is wired via `public/CNAME`
(`erfanmohammadi.ir`), which Vite copies into `dist/` automatically.

One-time setup: **Settings → Pages → Source → GitHub Actions**.
