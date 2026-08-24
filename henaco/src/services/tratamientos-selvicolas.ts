import type { ServicePage } from '@websites/template/types';
import hero from '../assets/hero.webp';

export default {
  type: 'service',
  slug: 'tratamientos-selvicolas',
  title: 'Tratamientos selvícolas',
  h1: 'Tratamientos selvícolas\ny gestión de ~montes~',
  metaTitle: 'Tratamientos selvícolas y gestión de montes · Henaco',
  metaDescription:
    'Clareos, claras, podas y desbroces selectivos para montes públicos y privados. Cooperativa forestal con equipo y maquinaria propios, en Henarejos (Cuenca) y toda España.',
  image: { src: hero, alt: 'Trabajos de tratamiento selvícola en monte' },
  intro:
    '_Planificamos y ejecutamos tratamientos selvícolas en montes públicos y privados: clareos, claras, podas y desbroces selectivos para que la masa forestal crezca sana, sea más resistente al fuego y produzca mejor madera._',
  body: `## Qué es un tratamiento selvícola

Un monte demasiado denso compite consigo mismo: los pies crecen delgados, la masa se debilita y el combustible se acumula bajo la copa. Un tratamiento selvícola consiste en decidir qué se queda y qué sale, y ejecutarlo bien.

Antes de entrar a trabajar visitamos la parcela y valoramos la densidad, la especie, la edad de la masa y el objetivo del propietario. A partir de ahí proponemos la intervención:

- Clareos en masas jóvenes, para reducir densidad y dar espacio a los mejores pies.
- Claras en masas ya formadas, seleccionando el arbolado de porvenir.
- Podas de formación y podas de calidad, hasta la altura que corresponda a cada especie.
- Desbroces selectivos de matorral, respetando el regenerado que interesa conservar.
- Eliminación de restos: astillado, triturado o saca, según lo que permita el terreno.

## Un monte tratado es un monte que arde peor

La selvicultura preventiva es la primera línea frente a los incendios. Al reducir la densidad del arbolado y romper la continuidad entre el matorral y las copas, el fuego pierde la escalera que necesita para subir.

Ese trabajo se completa con la _~apertura y mantenimiento de cortafuegos~_ y las _~franjas auxiliares~_ a lo largo de pistas y caminos, que dan a los medios de extinción un sitio desde el que trabajar.

## Trabajos para ayuntamientos y administraciones

Buena parte de nuestros proyectos son para _~ayuntamientos y administraciones públicas~_: montes de utilidad pública, montes de socios y parcelas municipales. Conocemos cómo se planifican y se certifican estos trabajos, y entregamos la obra documentada y en plazo.

## Trabajos para propietarios particulares

Si tienes una finca de monte, un pinar heredado o una parcela que lleva años sin tocarse, la valoramos y te decimos con claridad qué necesita y qué no. Sin intervenciones de más.

## Equipo y zona de trabajo

Somos una cooperativa con equipo y maquinaria propios, con base en Henarejos (Cuenca). Trabajamos en toda España y respondemos a incidencias en 24/48 horas.`,
  cta: { text: 'Llámanos', link: 'tel:722269709' },
} satisfies ServicePage;
