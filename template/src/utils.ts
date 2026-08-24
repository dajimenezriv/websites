import type { Blocks, Image, ServicePage } from './types';

// og:image and twitter:image must be absolute, and imported images resolve to a hashed build path.
export function socialImageUrl(image: Image, domain: string) {
  const src = typeof image.src === 'string' ? image.src : image.src.src;
  return src.startsWith('http') ? src : `${domain}${src}`;
}

export function servicePages(blocks: Blocks): ServicePage[] {
  return blocks.groups.flatMap((group) => group.pages);
}

export function standalonePages(blocks: Blocks): ServicePage[] {
  return blocks.pages ?? [];
}

// "Quiénes somos" -> "quienes-somos".
export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Mn}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-/, '')
    .replace(/-$/, '');
}

export function telHref(phone: string) {
  return `tel:${phone}`;
}

export function pageHref(slug: string) {
  return `/${slug}`;
}

export function linkProps(url: string) {
  return url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}
