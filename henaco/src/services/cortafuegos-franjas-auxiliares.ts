import type { ServicePage } from '@websites/template/types';
import gallery3 from '../assets/gallery3.jpeg';

export default {
  type: 'service',
  slug: 'cortafuegos-franjas-auxiliares',
  title: 'Cortafuegos y franjas auxiliares',
  h1: 'Cortafuegos y franjas\n~auxiliares~',
  metaTitle: 'Cortafuegos y franjas auxiliares · Prevención de incendios · Henaco',
  metaDescription:
    'Apertura y mantenimiento de cortafuegos, franjas auxiliares en pistas y fajas perimetrales de protección. Prevención de incendios forestales en toda España.',
  image: { src: gallery3, alt: 'Monte tratado con la carga de combustible reducida' },
  intro:
    '_Abrimos y mantenemos cortafuegos, franjas auxiliares y fajas perimetrales. El objetivo es sencillo: romper la continuidad del combustible para que el fuego pierda velocidad y los medios de extinción tengan dónde trabajar._',
  body: `## Romper la continuidad del combustible

Un incendio avanza mientras encuentra material que quemar. Un cortafuegos o una franja auxiliar interrumpen esa continuidad, tanto en horizontal —a lo largo del terreno— como en vertical, quitando la escalera de matorral que lleva el fuego del suelo hasta las copas.

No es solo abrir una banda pelada. Se decide el ancho según la pendiente, la orientación y el tipo de masa, y se trata el interior de la faja: desbroce del matorral, clareo del arbolado y poda baja de los pies que se quedan.

## Qué ejecutamos

- Apertura de cortafuegos nuevos y reapertura de los que se han cerrado con los años.
- Franjas auxiliares a lo largo de pistas forestales, caminos y cortafuegos existentes.
- Fajas perimetrales de protección en núcleos urbanos, urbanizaciones y edificaciones aisladas.
- Desbroce bajo tendidos eléctricos y en márgenes de infraestructuras.
- Eliminación de restos: astillado, triturado o retirada, según lo que permita el acceso.

## Mantenimiento: el trabajo que no se ve

Un cortafuegos abierto y luego olvidado deja de servir en pocas temporadas. El matorral rebrota y la faja vuelve a ser combustible. Por eso el mantenimiento periódico es tan importante como la apertura, y trabajamos con calendarios que dejan la faja lista _~antes de que empiece la época de riesgo~_.

## Trabajos para ayuntamientos y administraciones

Ejecutamos planes de prevención para _~ayuntamientos y administraciones~_, incluidas las fajas perimetrales que la normativa exige alrededor de los núcleos habitados. También trabajamos para propietarios privados con fincas de monte o edificaciones dentro de masa forestal.

Este trabajo se complementa con los _~tratamientos selvícolas~_ del interior de la masa y con la _~limpieza de parcelas~_ en la interfaz urbano-forestal.

## Zona de trabajo

Cooperativa forestal con base en Henarejos (Cuenca). Trabajamos en toda España.`,
  cta: { text: 'Llámanos', link: 'tel:722269709' },
} satisfies ServicePage;
