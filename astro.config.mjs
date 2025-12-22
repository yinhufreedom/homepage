// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  ...(process.env.NODE_ENV === 'production' ? {
    site: 'https://yinhufreedom.github.io',
    base: '',
    trailingSlash: 'never',
  } : {
    site: 'https://example.com',
  }),
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
  },
  integrations: [
    react({ experimentalReactChildren: true }),
    tailwind(),
  ],
});
