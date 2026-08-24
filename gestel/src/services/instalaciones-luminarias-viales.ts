import type { ServicePage } from '@websites/template/types';
import hero from '../assets/instalacion-farola-vial.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-luminarias-viales',
  title: 'Instalaciones de luminarias viales',
  h1: 'Alumbrado público\ny ~luminarias viales~',
  metaTitle: 'Instalación de luminarias viales y alumbrado público en Castellón · Gestel',
  metaDescription:
    'Instalación y renovación de alumbrado público en Castellón: farolas, torres de iluminación, cuadros de mando y proyectos de eficiencia energética.',
  image: { src: hero, alt: 'Instalación de una farola vial con camión grúa en un vial de polígono' },
  summary: 'Alumbrado público y exterior: obra civil, báculos, luminarias LED, cuadros de mando y renovaciones con estudio luminotécnico.',
  intro:
    '_Ejecutamos y renovamos instalaciones de alumbrado exterior: viales, polígonos, aparcamientos, zonas deportivas y urbanizaciones. Incluye obra civil, cuadros de mando, luminarias LED y la legalización de la instalación._',
  body: `## Alumbrado exterior completo

Una instalación de alumbrado vial es tanto obra civil como electricidad. Nos hacemos cargo de las dos partes, de modo que no tengas que coordinar gremios ni repartir responsabilidades cuando algo no encaja.

- Canalizaciones, arquetas y cimentaciones para báculos y columnas.
- Montaje de báculos, columnas, brazos murales y torres de iluminación con grúa propia.
- Luminarias LED viales, proyectores y sistemas de alumbrado ornamental.
- Cuadros de mando y protección, con reloj astronómico, telegestión y regulación de flujo.
- Legalización de la instalación y documentación para su recepción.

## Renovación a LED y eficiencia energética

Cambiar a LED un alumbrado antiguo suele recortar el consumo a la mitad, y con regulación horaria bastante más. Hacemos el estudio luminotécnico previo para garantizar que los niveles de iluminación siguen cumpliendo la normativa después del cambio, que es donde fallan muchas renovaciones hechas a ojo.

## Torres de iluminación y grandes superficies

Para aparcamientos, campos deportivos y patios de maniobra trabajamos con torres y proyectores de gran altura, incluida la plataforma elevadora necesaria para el montaje y para el mantenimiento posterior.

## Obra pública

Trabajamos habitualmente para administración pública, con la documentación, los plazos y el control de calidad que exige una licitación. Al ser instaladores autorizados, entregamos la instalación lista para su recepción.

## Mantenimiento del alumbrado

Ofrecemos contratos de mantenimiento de alumbrado exterior: reposición de luminarias, revisión de cuadros y protecciones, medida de tierras y localización de averías en las líneas subterráneas.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, para ayuntamientos, polígonos, urbanizaciones y empresas. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
