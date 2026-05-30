import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'de', 'en'],
    routing: { prefixDefaultLocale: true },
  },
  integrations: [tailwind()],
});
