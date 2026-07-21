import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.guiracorp.com',
  trailingSlash: 'never',
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
    sitemap(),
  ],
  build: {
    format: 'directory',
  }
});

