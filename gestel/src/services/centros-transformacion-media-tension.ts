import type { ServicePage } from '@websites/template/types';
import hero from '../assets/cableado-sala-electrica.jpeg';

export default {
  type: 'service',
  slug: 'centros-transformacion-media-tension',
  title: 'Centros de transformación y media tensión',
  h1: 'Centros de transformación\ny ~media tensión~',
  metaTitle: 'Centros de transformación y media tensión en Castellón · Gestel',
  metaDescription:
    'Centros de transformación y instalaciones de media tensión en Castellón: proyecto, montaje, legalización y mantenimiento para industria.',
  image: { src: hero, alt: 'Tendido de cableado de potencia en sala de cuadros eléctricos' },
  summary: 'Media tensión para industria y grandes consumidores: celdas, transformadores, tramitación con la distribuidora y legalización.',
  intro:
    '_Proyectamos, montamos y legalizamos centros de transformación e instalaciones de media tensión para industria y grandes consumidores. Desde la solicitud de suministro a la compañía distribuidora hasta la puesta en tensión._',
  body: `## Qué resolvemos

Cuando la potencia que necesita tu actividad supera lo que da una acometida de baja tensión, hace falta un centro de transformación propio. Es una instalación con requisitos estrictos y plazos administrativos largos, así que cuanto antes entre en el proyecto, mejor.

- Centros de transformación de abonado y de compañía, en edificio prefabricado o en local.
- Celdas de media tensión, transformadores y cuadros de baja tensión de salida.
- Líneas subterráneas de media tensión y entronques con la red de distribución.
- Redes de tierras, protecciones y sistemas de medida.
- Tramitación completa: proyecto, dirección de obra, inspección OCA y legalización ante industria.

## Coordinación con la compañía distribuidora

Buena parte del plazo de un centro de transformación no depende de la obra, sino de la tramitación. Nos encargamos de la solicitud de punto de conexión, de la documentación técnica y de la relación con la distribuidora, y te damos una previsión realista de fechas desde el principio.

## Ampliaciones y renovación de instalaciones existentes

Muchas empresas se quedan cortas de potencia al crecer o al electrificar procesos que antes iban con gas. Estudiamos si tu centro actual admite la ampliación, si conviene sustituir el transformador o si sale más a cuenta renovar las celdas, y te planteamos la opción con mejor retorno.

## Mantenimiento

Un centro de transformación necesita revisiones periódicas obligatorias. Realizamos el mantenimiento preventivo, los ensayos reglamentarios y la resolución de averías, con la disponibilidad que exige una instalación de la que depende toda tu actividad.

## Del centro a la máquina

Al hacernos cargo también de la _~instalación eléctrica de baja tensión~_ y de la _~alimentación de maquinaria industrial~_, la instalación queda coherente de principio a fin: un solo dimensionado, un solo responsable y ningún punto de discusión entre gremios.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, para industria y administración pública. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
