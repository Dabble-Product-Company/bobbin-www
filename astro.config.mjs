import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bobbin.app/',

  integrations: [ mdx(), sitemap(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), react()],

  output: 'server',
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },
});