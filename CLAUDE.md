# szlmagyariskola.ca

Static Astro site for the Szent László Magyar Iskola (Hungarian school in Vancouver).
No database, no API, no client-side framework. Site language is Hungarian.

## Commands

- `npm run dev` – dev server at http://localhost:4321
- `npm run build` – static build to `dist/` (run this to verify changes)

## Structure

- One page = one `.astro` file in `src/pages/`. Routes are English and nested to
  express hierarchy (`/about/volunteers`, `/education/teachers`, `/camps/2019`,
  `/news/calendar`, …) while all visible content is Hungarian. Section landing
  pages are `<section>/index.astro`. The original site's Hungarian URLs and the
  earlier flat English routes redirect to the current ones via the `redirects`
  map in `astro.config.mjs` — keep that map in sync if routes change again.
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
