// @ts-check
import { template } from '@websites/template/integration';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [template()],
});
