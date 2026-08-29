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

## Positioning

**Python Backend Developer · Databases.** Copy leads with backend, API design,
and databases — not "full-stack architecture". Keep it plain: no library lists
in prose, no internal table names, no "built from scratch / no template"
bragging, no self-congratulation.

## Done (2026-08, pass 5)

- Every project now has a full detail page at `/:lang/projects/:slug`
  (`ProjectDetail.jsx`): overview, problem, "what I built" (multi-para),
  result, + sidebar with features / stack / role. Projects index is a card
  grid linking in. Project data expanded with `overview`, `build[]`,
  `features[]`, `role`.
- Shorter hero tagline ("I build the backend of enterprise software: APIs,
  databases, and business logic.").

## Done (2026-08, pass 4)

- Repositioned to Python backend + databases across fa/en/de (role, hero,
  about, timeline, meta, JSON-LD).
- Projects: card grid with generated schematic covers (`ProjectCover.jsx` from
  each project's `arch` labels). Dropped year and kind labels. Descriptions
  rewritten to plain outcome language.
- Notes/tutorials section removed entirely.
- Footer trimmed to the name + contact links.
- Stack / skills / services lists curated to what's actually evidenced.
- 7 projects, 5 public + 2 private (`private: true`, lock badge, on-request
  note). No fabricated projects.

## Done (2026-08, pass 3)

- All GitHub repos surfaced as projects; "What I do" services section +
  `GET /services` console endpoint.
- Every project writeup checked against the actual cloned repo.

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
- [ ] Optional: native German copy review.

## Decided / closed

- LinkedIn handle `linkedin.com/in/erfan-mohammadi77` confirmed current — keep.
- Testimonials section removed (no real quotes; will not fake them).
- `cv-management-system` README written and pushed to that repo.
- CV project entry in `src/data/projects.js` corrected to the real stack
  (full-stack Django + DRF + React, SQLite — not a SQL Server service).
- `portfolio` repo description, homepage, and 10 topics set (done manually
  via the GitHub web UI).
