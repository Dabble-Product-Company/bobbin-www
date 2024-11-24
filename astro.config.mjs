import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://bobbin.app",
  integrations: [tailwind(), mdx(), sitemap()],
  output: "server",
  adapter: netlify(),
});
