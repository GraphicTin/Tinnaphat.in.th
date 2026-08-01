// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    // 1. Replace with your actual GitHub username and repository name
    site: 'https://graphictin.github.io',
    base: process.env.NODE_ENV === 'production' ? '/graphictin' : '/',

    // 2. Auto-open the site when running `astro dev`
    server: { open: true },

    integrations: [react()],
  });