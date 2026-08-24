import type { APIRoute } from 'astro';
import { content } from 'virtual:site-content';
import { renderRobots } from '../seo';

export const GET: APIRoute = () =>
  new Response(renderRobots(content), {
    headers: { 'Content-Type': 'text/plain' },
  });
