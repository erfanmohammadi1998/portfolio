# Roadmap

Living list of what's next for the portfolio. Done items move out; new ideas
go in.

## Goal

A professional, distinctive portfolio that doubles as a work sample. Core
concept: **read the site like a system** — an interactive architecture map on
the home page, and an **API console** (`Ctrl/⌘ + K`) that returns each section
like a JSON endpoint. Deployed to GitHub Pages at https://erfanmohammadi.ir
via `.github/workflows/deploy.yml` on push to `main`. Languages: fa (default) /
en / de, RTL-aware.

## Done (2026-08)

- Renamed-repo remote fixed; auto-deploy verified live.
- System-map hero + API console.
- Real projects wired in (`src/data/projects.js`): ticket-management-system,
  cv-management-system, ip-killswitch, tidaland-pet-shop, this portfolio —
  each with a problem / approach / result writeup.
- About: photo + details card + desktop→web→AI timeline + a "// now" block.
- Contact rebuilt as a `200 OK` response card (old page was crashing).
- Full visual redesign (control-room theme); dead starter components removed.
- Copy rewritten to a senior professional tone across fa/en/de.
- Persian RTL fixed: `dir="auto"` + `unicode-bidi: plaintext` on prose so
  inline English no longer jumbles.
- Removed the "erfan.dev" wordmark → name + "EM" mark.
- Boot-sequence overlay (once per session).
- SEO: `public/sitemap.xml`, hreflang alternates, Person JSON-LD.

## Next

- [ ] **Project screenshots.** Cards have no imagery yet. When images arrive:
      drop them in `public/`, add a `cover` field per project in
      `src/data/projects.js`, and render it on the project cards.
- [ ] **GitHub repo metadata** — set description + topics on the `portfolio`
      repo; point the "About" website field at erfanmohammadi.ir. Needs the
      `gh` CLI (not installed) or an API token. Suggested values:
      - description: *Interactive developer portfolio — an architecture map you
        navigate and an API console you can query. React + Vite, trilingual
        (fa/en/de), RTL-aware.*
      - homepage: `https://erfanmohammadi.ir`
      - topics: `portfolio` `personal-website` `react` `vite` `react-router`
        `i18n` `rtl` `single-page-app` `github-pages` `svg-animation`
- [ ] Optional: native German copy review.

## Decided / closed

- LinkedIn handle `linkedin.com/in/erfan-mohammadi77` confirmed current — keep.
- Testimonials section removed (no real quotes; will not fake them).
- `cv-management-system` README written and pushed to that repo.
- CV project entry in `src/data/projects.js` corrected to the real stack
  (full-stack Django + DRF + React, SQLite — not a SQL Server service).
