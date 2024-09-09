// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://maeclassroom.com',
  integrations: [tailwind(), partytown(), sitemap()],
  output: 'server',
  adapter: cloudflare()
});