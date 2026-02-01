import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://example.com', // Update with actual domain
  integrations: [tailwind()],
  output: 'static',
});
