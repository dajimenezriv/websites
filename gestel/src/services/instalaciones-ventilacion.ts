import type { ServicePage } from '@websites/template/types';
import hero from '../assets/conductos-ventilacion-techo.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-ventilacion',
  title: 'Instalaciones de ventilación',
  h1: 'Instalaciones de ventilación\nen ~Castellón~',
  metaTitle: 'Instalaciones de ventilación en Castellón · Gestel',
  metaDescription:
    'Instalaciones de ventilación y extracción en Castellón: conductos, recuperadores de calor y extracción forzada para locales, naves y garajes.',
  image: { src: hero, alt: 'Conductos de ventilación instalados bajo un techo de madera' },
  summary: 'Redes de conductos, extracción forzada y recuperadores de calor para locales, naves, cocinas y garajes.',
  intro:
    '_Ejecutamos instalaciones de ventilación y extracción para locales, naves, oficinas y garajes: redes de conductos, extracción forzada, recuperadores de calor y sistemas de renovación de aire conforme a normativa._',
  body: `## Ventilación y renovación de aire

Ventilar bien es una exigencia normativa en la mayoría de locales, y en la práctica es lo que determina si un espacio resulta agradable o cargado. Dimensionamos los caudales según el uso y la ocupación previstos y diseñamos la red para conseguirlos sin ruido ni corrientes molestas.

- Redes de conductos de chapa, fibra y conducto flexible, con su aislamiento.
- Ventiladores y cajas de extracción, en cubierta o en falso techo.
- Rejillas, difusores y compuertas de regulación y cortafuegos.
- Recuperadores de calor para renovar el aire sin tirar por la ventana la energía ya climatizada.
- Equilibrado de la instalación y medición de caudales en la puesta en marcha.

## Extracción en hostelería e industria

Cocinas, talleres y procesos industriales necesitan extracción específica: campanas, captación localizada de humos y vahos, filtros y conductos con la resistencia y la estanqueidad adecuadas. Diseñamos el recorrido teniendo en cuenta dónde se puede descargar y qué exige la licencia de actividad, que suele ser la parte que atasca las aperturas.

## Garajes y sótanos

Los aparcamientos tienen requisitos propios de ventilación y de detección de monóxido. Montamos la red de extracción e impulsión, los detectores y el cuadro de control, dejando la instalación lista para pasar inspección.

## Recuperación de calor

Un recuperador aprovecha la temperatura del aire que se expulsa para tratar el que entra. En locales con mucha renovación de aire es la medida con mejor retorno, y encaja de forma natural con la _~climatización~_ cuando ambas se proyectan juntas.

## Mantenimiento

Ofrecemos limpieza y revisión de conductos, sustitución de filtros, comprobación de caudales y puesta a punto de ventiladores, con respuesta a averías en 24/48 horas.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, para hostelería, comercio, industria y comunidades. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
