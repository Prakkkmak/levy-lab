// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';

export default defineConfig({
    output: 'server',
    adapter: netlify({
      edgeMiddleware: true
    }),
    integrations: [
      starlight({
        title: 'My delightful docs site',
      }),
    ],
  });