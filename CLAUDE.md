# szlmagyariskola.ca

Static Astro site for the Szent László Magyar Iskola (Hungarian school in Vancouver).
No database, no API, no client-side framework. Site language is Hungarian.

## Commands

- `npm run dev` – dev server at http://localhost:4321
- `npm run build` – static build to `dist/` (run this to verify changes)

## Structure

- One page = one `.astro` file in `src/pages/`. Routes are English, nested to
  express hierarchy, and live under a language prefix: the Hungarian site is
  `src/pages/hu/` (`/hu/about/volunteers`, `/hu/education/teachers`,
  `/hu/camps/2019`, …). Section landing pages are `<section>/index.astro`.
  An English version under `/en/` is planned but does not exist yet — the header
  shows a greyed-out Canadian flag as a placeholder (`lang-switch` in
  `src/layouts/Base.astro`). `/` redirects to `/hu`. All earlier URL generations
  (Hungarian originals, flat English, un-prefixed nested) redirect via the
  `redirects` map in `astro.config.mjs` — keep that map in sync if routes change.
- News posts live in `src/content/news/*.md` (collection defined in
  `src/content.config.ts`). Adding a news item = adding a markdown file with
  `title` and `date` frontmatter. The `/news` page lists them newest-first.
- Shared layout/nav/footer: `src/layouts/Base.astro`. The nav menu is the `nav`
  array at the top of that file.
- All styling: `src/styles/global.css`. Fonts: EB Garamond (headings),
  Open Sans (body), Alegreya Sans SC (nav) via Google Fonts.
- Images: `public/images/` with descriptive Hungarian names
  (`tabor2022-01.jpg`, `tanterem-03.jpg`, `tanar-*.jpg`).
- Downloadable documents: `public/docs/`.

## Content conventions

- Write user-facing text in Hungarian, matching the tone of existing pages.
- School facts: founded 1960, address 1810 East 7th Avenue, Vancouver B.C. V5N 1S2,
  email szlmagyariskola@gmail.com.
