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

- [ ] **Confirm LinkedIn handle.** Data uses `linkedin.com/in/erfan-mohammadi77`
      (`src/data/profile.js`) — verify it's current, update if the handle changed.
- [ ] **Testimonials.** Section is hidden while `src/data/testimonials.js` is
      empty. Add real quotes (author, role, fa/en/de) to switch it on.
- [ ] **Tutorials / Notes.** `src/data/tutorials.js` is empty and the page shows
      an empty state. Add articles when there are any.
- [ ] **Project screenshots.** Cards have no imagery — repos have none yet.
      Add images to `public/` and a `cover` field per project when available.
- [ ] **`cv-management-system` repo** has no README on GitHub — write one
      (needs `gh` or push access to that repo).
- [ ] **GitHub repo metadata** — set description + topics on the `portfolio`
      repo; point the "About" website field at erfanmohammadi.ir (needs `gh`).
- [ ] Optional: native German copy review.
