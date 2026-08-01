// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    // 1. Replace with your actual GitHub username and repository name
    site: 'https://<your-github-username>.github.io',
    base: '/<your-repo-name>', // e.g., '/my-astro-site'
    
    integrations: [react()],
  });