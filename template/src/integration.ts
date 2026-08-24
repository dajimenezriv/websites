import tailwindcss from '@tailwindcss/vite';
import type { AstroIntegration } from 'astro';

// The injected routes live in this package, so a relative `../content` import would resolve
// inside `template/`. They import `virtual:site-content` instead and this alias points it at
// the consuming site's content module.
const VIRTUAL_ID = 'virtual:site-content';

export interface TemplateOptions {
  /** Site content module, relative to the site root. */
  content?: string;
}

export function template({ content = './src/content.ts' }: TemplateOptions = {}): AstroIntegration {
  return {
    name: 'template',
    hooks: {
      'astro:config:setup': ({ config, injectRoute, updateConfig }) => {
        const contentId = new URL(content, config.root).pathname;

        updateConfig({
          vite: {
            plugins: [
              tailwindcss(),
              {
                name: 'template:site-content',
                resolveId: (id: string) => (id === VIRTUAL_ID ? contentId : null),
              },
            ],
          },
        });

        injectRoute({ pattern: '/', entrypoint: '@websites/template/routes/index.astro' });
        injectRoute({ pattern: '/[slug]', entrypoint: '@websites/template/routes/[slug].astro' });
        injectRoute({ pattern: '/legal/[slug]', entrypoint: '@websites/template/routes/legal/[slug].astro' });
        injectRoute({ pattern: '/404', entrypoint: '@websites/template/routes/404.astro' });
        injectRoute({ pattern: '/robots.txt', entrypoint: '@websites/template/routes/robots.txt.ts' });
        injectRoute({ pattern: '/sitemap.xml', entrypoint: '@websites/template/routes/sitemap.xml.ts' });
      },
    },
  };
}
