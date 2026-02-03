// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';

export default defineConfig({
  ...(process.env.NODE_ENV === 'production' ? {
    site: 'https://yinhufreedom.com',
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
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src/shared'),
        '~': path.resolve('./src/domain'),
        '#': path.resolve('./src/entry'),
      },
    },
  },
});
