# szlmagyariskola.ca

Static Astro site for the Szent László Magyar Iskola (Hungarian school in Vancouver).
No database, no API, no client-side framework. Site language is Hungarian.

## Commands

- `npm run dev` – dev server at http://localhost:4321
- `npm run build` – static build to `dist/` (run this to verify changes)

## Structure

- One page = one `.astro` file in `src/pages/`. Several filenames contain Hungarian
  accented characters (`rólunk.astro`, `hírek.astro`, `órarend.astro`,
  `tandíj--jelentkezés.astro`) — these are intentional, they preserve the original
  site's URLs. Do not rename them to ASCII.
- News posts live in `src/content/news/*.md` (collection defined in
  `src/content.config.ts`). Adding a news item = adding a markdown file with
  `title` and `date` frontmatter. The `/hírek` page lists them newest-first.
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
