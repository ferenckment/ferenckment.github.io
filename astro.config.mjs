// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.szlmagyariskola.ca',
  // old Hungarian routes (from the original website.com site) and earlier flat
  // English routes → current nested routes
  redirects: {
    '/rólunk': '/about',
    '/segitoink': '/about/volunteers',
    '/volunteers': '/about/volunteers',
    '/oktatas': '/education',
    '/tanaraink': '/education/teachers',
    '/teachers': '/education/teachers',
    '/classrooms': '/education/classrooms',
    '/csoportjaink': '/education/groups',
    '/groups': '/education/groups',
    '/órarend': '/education/schedule',
    '/schedule': '/education/schedule',
    '/tandíj--jelentkezés': '/education/tuition',
    '/tuition': '/education/tuition',
    '/taborok': '/camps',
    '/tabor2019': '/camps/2019',
    '/camp2019': '/camps/2019',
    '/tabor2022': '/camps/2022',
    '/camp2022': '/camps/2022',
    '/hírek': '/news',
    '/n': '/news/calendar',
    '/calendar': '/news/calendar',
    '/faq': '/contact',
  },
});
