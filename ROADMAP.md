# Roadmap

Living list of what's next for the portfolio. Done items move out; new ideas
go in.

## Goal

A distinctive personal portfolio that also works as a work sample: monochrome
editorial base, one lime accent, lots of considered motion, equally good on
desktop and phone. Deployed to GitHub Pages at https://erfanmohammadi.ir via
`.github/workflows/deploy.yml` on push to `main`. Languages: fa (default) /
en / de, RTL-aware.

## Done (2026-10, pass 8: SEO)

- Build-time prerendering (`src/entry-server.jsx` + `scripts/prerender.mjs`): every route is a
  real HTML file, so GitHub Pages answers with 200 and crawlers / link previews see content.
- Per-page, per-language titles and descriptions (`src/seo.js`), canonical with trailing slash,
  hreflang (fa / en / de / x-default), Open Graph + Twitter cards, JSON-LD graph (Person,
  WebSite, ProfilePage, CollectionPage, CreativeWork, ContactPage, BreadcrumbList).
- Name variants for search (عرفان محمدی, Erfan Mohammadi, «… برنامه‌نویس», «… ششکل») in
  JSON-LD `alternateName` and keywords; portrait renamed to `erfan-mohammadi.jpg`.
- 1200×630 preview images per language and per project, manifest + PNG icons, generated
  sitemap with image entries, real `404.html` with noindex.
- Portfolio trimmed to 12 projects; experience now 5+ years; employer named only in the
  experience entries.

## Done (2026-10, pass 7: redesign)

- The "read the site like an API" concept is gone: API console, system map,
  code panel, terminal boot screen and their data files removed.
- New visual system: dark + light themes (circular view-transition toggle),
  self-hosted fonts (Google Fonts is unreachable from Iran), Lenis smooth
  scroll, preloader that says hello in several languages, page curtain,
  new cursor (dot + trailing ring with labels; touch devices never see it).
- Home: kinetic hero with portrait, rotating roles, orbiting ring and
  floating chips; count-up stats; crossing marquee bands; scroll-lit
  statement; bento services with pointer spotlight; pinned horizontal
  "selected work" (swipe row on phones); process;
  current jobs; big CTA.
- Portfolio mirrors houshiva.ir/portfolio (12 projects; café, digital menu,
  clothing store, barber landing page, label printing and modem tools left out): same images,
  order, categories and filter, and the same detail-page sections
  (overview, problem / solution, how it was built, features, result, tags,
  gallery with lightbox, related work). Persian copy is verbatim; English
  and German are translations (`src/data/projects.{fa,en,de}.js`).
- Copy rewritten in a plain, first-person voice; everything re-synced with
  the final CV (Oct 2026): experience incl. training years and service,
  education, 420 h of training, skill levels, languages.
- Skills page shows CV levels plus a tech-usage chart counted from projects.
- Résumé page: web CV that prints to A4, with EN / DE PDF downloads.
- Contact: mailto composer (pre-filled from "request a similar project").
- The employer is named only in the experience entries (home "where I
  work", About timeline, Résumé), nowhere else.
- Sitemap covers all pages and project pages in all three languages.

## Done (2026-08, pass 6)

- CV integrated: `/:lang/resume` print-friendly page (+ nav / hero / About
  links), About gains Experience / Education / Training sections
  (`src/data/resume.js`).
- Formal register across all copy (fa/en/de); casual phrasing and em-dash /
  "from X to Y" constructions removed.
- Repositioned: Backend & Database Developer · Software Engineer; the
  Houshiva studio (houshiva.ir) is now part of the picture.
- Skills / stats / services rebuilt from the CV (SQL Server, T-SQL, BI,
  Power BI, SSIS, Crystal/Stimulsoft, Docker, GitLab, …).
- Two more real projects → nine total (management dashboard & analytics,
  intelligent document management).
- Self-typing code panel in the hero.
- Palette given colour (indigo base + cyan/violet/pink accents, hero mesh,
  gradient tags/buttons) and a canvas cursor trail.

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

- [ ] Verify the domain in Google Search Console and Bing Webmaster Tools, submit
      `https://erfanmohammadi.ir/sitemap.xml`.
- [ ] Link to erfanmohammadi.ir from GitHub, LinkedIn, houshiva.ir and other profiles.

- [ ] Add the AI assistant and the price inquiry & asset valuation system
      (both in the CV) once there are screenshots to show.
- [ ] Optional: native German copy review.
- [ ] Optional: per-page Open Graph images.

## Decided / closed

- LinkedIn handle `linkedin.com/in/erfan-mohammadi77` confirmed current — keep.
- Testimonials section removed (no real quotes; will not fake them).
- `cv-management-system` README written and pushed to that repo.
- CV project entry in `src/data/projects.js` corrected to the real stack
  (full-stack Django + DRF + React, SQLite — not a SQL Server service).
- `portfolio` repo description, homepage, and 10 topics set (done manually
  via the GitHub web UI).
