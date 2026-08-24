import type { ServicePage } from '@websites/template/types';
import gallery1 from '../assets/gallery1.jpeg';

export default {
  type: 'service',
  slug: 'senalizacion-adecuacion-sendas',
  title: 'Señalización y adecuación de sendas',
  h1: 'Señalización y adecuación\nde ~sendas~',
  metaTitle: 'Señalización y adecuación de sendas y senderos · Henaco',
  metaDescription:
    'Balizamiento, señalética y desbroce de senderos homologados PR y GR. Trabajos de adecuación de sendas para ayuntamientos y administraciones en toda España.',
  image: { src: gallery1, alt: 'Panel interpretativo instalado en una mesa panorámica' },
  intro:
    '_Abrimos, adecuamos y señalizamos senderos para que se puedan andar y encontrar. Desbroce del trazado, balizas, postes direccionales, paneles interpretativos y mesas panorámicas, siguiendo la normativa de senderos homologados._',
  body: `## Una senda no es solo el camino

Un sendero funciona cuando se puede recorrer sin perderse y sin pelearse con la vegetación. Por eso trabajamos las dos mitades: la obra sobre el terreno y la señalización que lo hace legible.

- Desbroce y apertura del trazado, retirada de restos y de arbolado caído.
- Reperfilado del firme, pasos de agua y pequeñas obras de drenaje en los tramos que se lavan.
- Escalones, pasamanos y protecciones en los puntos con más pendiente.
- Postes direccionales y balizas con las marcas de continuidad, cambio de dirección y dirección equivocada.
- Paneles interpretativos, mesas panorámicas y carteles de inicio de ruta.

## Senderos homologados PR y GR

La señalización de un sendero homologado tiene reglas: colores de marca, medidas de las balizas, contenidos mínimos del panel de inicio y ubicación de cada cruce. Las conocemos y las aplicamos, para que la ruta pueda homologarse sin sorpresas y mantenga la homologación con los años.

Un ejemplo de este trabajo es la señalización del _~PR-CU 86, la Senda de los Picos~_, con su mesa panorámica en el mirador de El Serval, para el Ayuntamiento de San Martín de Boniches con la Diputación de Cuenca.

## Trabajos para ayuntamientos

La mayoría de estos encargos vienen de _~ayuntamientos y administraciones~_ que quieren poner en valor su término municipal: recuperar una senda en desuso, conectar el pueblo con un mirador o dejar la red de rutas lista para promocionarla.

Te acompañamos desde el replanteo en campo —recorremos la ruta y decidimos dónde va cada baliza— hasta la instalación y la entrega documentada.

## Mantenimiento de la red de senderos

Una senda señalizada hace años suele necesitar repaso: vegetación que ha cerrado el paso, postes vencidos y carteles ilegibles por el sol. Hacemos revisiones y mantenimiento periódico para que la ruta siga siendo transitable.

## Zona de trabajo

Somos una cooperativa forestal con base en Henarejos (Cuenca) y trabajamos en toda España.`,
  cta: { text: 'Llámanos', link: 'tel:722269709' },
} satisfies ServicePage;
