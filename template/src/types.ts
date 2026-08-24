import type { ImageMetadata } from 'astro';

export interface Cta {
  text: string;
  link: string;
  // Open the link in a new tab.
  newTab?: boolean;
}

export interface Image {
  src: ImageMetadata;
  alt: string;
}

export interface HeroBlock {
  title: string;
  text: string;
  cta?: Cta;
  image: Image;
}

export interface StatsBlock {
  type: 'stats';
  stats: Array<{ value: string; label: string }>;
}

export interface InfoBlock {
  type: 'info';
  nav: string;
  title: string;
  text1: string;
  text2: string;
  image: Image;
  // How the image fills its box: 'cover' crops to fill (default), 'contain' shows it whole.
  imageFit?: 'cover' | 'contain';
}

export interface CtaBlock {
  type: 'cta';
  title: string;
  text: string;
  cta?: Cta;
  image: Image;
}

export interface GalleryImage extends Image {
  // Optional heading and description rendered below the image.
  title?: string;
  text?: string;
}

export interface GalleryBlock {
  type: 'gallery';
  nav: string;
  title: string;
  text: string;
  images: Array<GalleryImage>;
  cta?: Cta;
}

export interface ReviewsBlock {
  type: 'reviews';
  nav: string;
  title: string;
  stats: Array<{ value: string; label: string }>;
  reviews: Array<{ text: string; author: string; source: string; url: string }>;
}

// Rows are derived from blocks.groups so the homepage cannot drift from the service pages.
export interface ServicesBlock {
  type: 'services';
  nav: string;
  title: string;
  text: string;
  cta?: Cta;
}

export interface ClientsBlock {
  type: 'clients';
  nav: string;
  title: string;
  logos: Array<Image>;
}

export interface StepsBlock {
  type: 'steps';
  nav: string;
  title: string;
  text?: string;
  steps: Array<{
    title: string;
    items: Array<{ label: string; text: string }>;
  }>;
}

export interface VideosBlock {
  type: 'videos';
  nav: string;
  title: string;
  // Vimeo watch URLs or bare video IDs; the block derives the player embed.
  videos: string[];
}

export interface TeamMember {
  image: Image;
  name: string;
  bio: string;
  linkedin: string;
}

export interface TeamBlock {
  type: 'team';
  nav: string;
  title: string;
  // Circular portraits (collaborators) instead of the default rectangular ones.
  circle?: boolean;
  members: TeamMember[];
}

export interface LocationBlock {
  type: 'location';
  nav: string;
  title: string;
  details: Array<{ label: string; value: string }>;
  schedule: Array<{ label: string; value: string }>;
  mapUrl: string;
  cta?: Cta;
}

export interface FooterBlock {
  description: string;
  links: Array<{ label: string; url: string }>;
}

// Identification the LSSI-CE (art. 10) requires every Spanish business site to publish.
export interface LegalEntity {
  companyName: string;
  taxId: string;
  email: string;
}

export interface LegalPage {
  type: 'legal';
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  body: string;
}

export interface ServicePage {
  type: 'service';
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  image: Image;
  // One-line description for the homepage services block.
  summary?: string;
  intro?: string;
  body?: string;
  // Optional page sections, rendered with the same blocks as the homepage.
  blocks?: Block[];
  cta?: Cta;
}

export interface ServiceGroup {
  title: string;
  pages: ServicePage[];
}

export type Block =
  | StatsBlock
  | InfoBlock
  | CtaBlock
  | GalleryBlock
  | ReviewsBlock
  | ServicesBlock
  | LocationBlock
  | ClientsBlock
  | StepsBlock
  | TeamBlock
  | VideosBlock;

export interface Blocks {
  name: string;
  address: string;
  phone: string;
  email: string;
  metaTitle: string;
  metaDescription: string;
  faviconUrl: string;
  nav: { image?: Image; cta?: Cta };
  footer: FooterBlock;
  legal: LegalEntity;
  homepage: {
    hero: HeroBlock;
    blocks: Block[];
  };
  groups: ServiceGroup[];
  // Standalone top-level pages (e.g. "Equipo"): routed at /<slug>, linked in the nav,
  // and excluded from the service groups and the homepage services block.
  pages?: ServicePage[];
}

export interface SiteData {
  blocks: Blocks;
  styles: Styles;
  domain: string;
}

export interface Styles {
  background: string;
  foreground: string;
  primary: string;
  'primary-foreground': string;
  secondary: string;
  'secondary-foreground': string;
  muted: string;
  'muted-foreground': string;
  accent: string;
  'accent-foreground': string;
  border: string;
  ring: string;
}
