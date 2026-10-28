// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: 'https://jfrankrobles.com',
  integrations: [
    astroI18next(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Match the canonical URLs, which drop the trailing slash.
      serialize: (item) => {
        const url = new URL(item.url);
        url.pathname = url.pathname.replace(/(.)\/$/, '$1');
        return { ...item, url: url.toString() };
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});