import type { ServicePage } from '@websites/template/types';
import hero from '../assets/service6/hero.png';

// Draft: title/summary from the landing; full copy pending the real service page.
export default {
  type: 'service',
  slug: 'gestion-de-patrimonio-arqueologico',
  title: 'Gestión de patrimonio arqueológico',
  h1: 'Gestión de\n~patrimonio arqueológico~',
  metaTitle: 'Gestión de patrimonio arqueológico · SylvaHábitat',
  metaDescription: 'Prospección, seguimiento y gestión del patrimonio arqueológico en proyectos y actuaciones sobre el territorio.',
  image: { src: hero, alt: '' },
  summary: 'Prospección, seguimiento y gestión del patrimonio arqueológico en proyectos y actuaciones sobre el territorio.',
} satisfies ServicePage;
