import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';
import mdx from '@astrojs/mdx';


export default defineConfig({
  site: "https://bobbin.app/",
  integrations: [tailwind(), mdx(), sitemap()],
  output: "server",
  adapter: netlify(),
});
