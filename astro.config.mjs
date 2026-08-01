// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    // 1. Your custom domain (GitHub Pages serves it at the root)
    site: 'https://tinnaphat.in.th',
    base: '/',

    // 2. Auto-open the site when running `astro dev`
    server: { open: true },

    integrations: [react()],
  });