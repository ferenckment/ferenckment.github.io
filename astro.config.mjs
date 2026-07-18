// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.szlmagyariskola.ca',
  // old Hungarian routes (from the original website.com site) → new English routes
  redirects: {
    '/rólunk': '/about',
    '/segitoink': '/volunteers',
    '/oktatas': '/education',
    '/tanaraink': '/teachers',
    '/csoportjaink': '/groups',
    '/órarend': '/schedule',
    '/tandíj--jelentkezés': '/tuition',
    '/taborok': '/camps',
    '/tabor2019': '/camp2019',
    '/tabor2022': '/camp2022',
    '/hírek': '/news',
    '/n': '/calendar',
    '/faq': '/contact',
  },
});
