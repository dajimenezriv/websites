import type { APIRoute } from 'astro';
import { content } from 'virtual:site-content';
import { renderSitemap } from '../seo';

export const GET: APIRoute = () =>
  new Response(renderSitemap(content), {
    headers: { 'Content-Type': 'application/xml' },
  });
