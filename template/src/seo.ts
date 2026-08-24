import { legalHref, legalPages } from './legal';
import type { SiteData } from './types';
import { servicePages, standalonePages } from './utils';

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

// One <loc> per page so search engines can discover every URL. The homepage is the site root;
// service pages hang off it with their flat slug. No <lastmod>: we don't track real per-page
// change times, and a uniform "today" on every publish is an inaccurate freshness signal.
export function renderSitemap(data: SiteData): string {
  const locs = [
    data.domain,
    ...servicePages(data.blocks).map((page) => `${data.domain}/${page.slug}`),
    ...standalonePages(data.blocks).map((page) => `${data.domain}/${page.slug}`),
    ...legalPages(data).map((page) => `${data.domain}${legalHref(page.slug)}`),
  ];
  const urls = locs.map((loc) => `  <url><loc>${escapeXml(loc)}</loc></url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function renderRobots(data: SiteData): string {
  return `User-agent: *
Allow: /

Sitemap: ${data.domain}/sitemap.xml
`;
}
