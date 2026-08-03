import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.guiracorp.com',
  // The production server publishes directory URLs with a trailing slash.
  // Match that format in the sitemap and generated URLs to avoid redirect-only
  // entries in Search Console.
  trailingSlash: 'always',
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
    sitemap({
      filter: (page) => !page.includes('/pagar-proveedores-exterior/'),
    }),
  ],
  build: {
    format: 'directory',
  }
});

