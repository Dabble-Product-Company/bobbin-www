import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import favicons from 'astro-favicons';

export default defineConfig({
    site: 'https://bobbin.app/',

    integrations: [mdx(), sitemap(), partytown({
        config: {
            forward: ['dataLayer.push'],
        },
		}), react(), favicons()],

    output: 'server',
    adapter: cloudflare(),

    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: import.meta.env.PROD && {
                'react-dom/server': 'react-dom/server.edge',
            },
        },
    },
});