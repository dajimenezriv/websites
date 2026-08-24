import type { ServicePage } from '@websites/template/types';
import hero from '../assets/obra-local-puerto.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-saneamiento',
  title: 'Instalaciones de saneamiento',
  h1: 'Instalaciones de saneamiento\nen ~Castellón~',
  metaTitle: 'Instalaciones de saneamiento en Castellón · Gestel',
  metaDescription:
    'Instalaciones de saneamiento y evacuación en Castellón: redes de desagüe, bajantes, arquetas, bombeos y conexión a la red municipal.',
  image: { src: hero, alt: 'Local en obra con las esperas de instalación preparadas' },
  summary: 'Desagües, bajantes, colectores, arquetas y bombeos, con conexión a la red municipal y redes separativas de pluviales.',
  intro:
    '_Ejecutamos redes de saneamiento y evacuación para locales, naves y viviendas: desagües, bajantes, colectores, arquetas y conexión a la red municipal. Incluida la obra civil y los bombeos cuando no hay pendiente suficiente._',
  body: `## Redes de evacuación

El saneamiento es la instalación que menos se enseña y la que más problemas da cuando está mal resuelta. Se juega todo en las pendientes, la ventilación de la red y la accesibilidad para mantenimiento: tres cosas que no se pueden arreglar luego sin volver a picar.

- Redes de desagüe de aparatos sanitarios, cocinas y sumideros.
- Bajantes, colectores colgados y colectores enterrados.
- Arquetas, sifónicas y registros para el mantenimiento de la red.
- Redes separativas de aguas residuales y pluviales.
- Conexión y acometida a la red municipal de alcantarillado.

## Cuando no hay pendiente

En sótanos, semisótanos y locales por debajo de la cota de la red municipal hace falta bombear. Montamos pozos de bombeo y bombas trituradoras dimensionadas para el caudal real, con las protecciones y las alarmas necesarias para que un fallo no acabe en inundación.

## Locales comerciales y hostelería

Un local de restauración necesita, además de la red general, separadores de grasas y arquetas registrables donde la normativa municipal los exija. Lo planteamos desde el proyecto de actividad para que la apertura no se frene en la inspección.

## Naves industriales y pluviales

En cubiertas grandes el problema suele ser el agua de lluvia: canalones, bajantes y colectores dimensionados para la intensidad de lluvia de la zona, que en Castellón conviene no infravalorar. Ejecutamos también las redes separativas que exigen muchos polígonos.

## Obra coordinada

El saneamiento va enterrado y se ejecuta antes que casi todo lo demás, así que un error obliga a rehacer solados. Al llevar también la _~fontanería~_ y la _~instalación eléctrica~_, planificamos los recorridos de todas las instalaciones a la vez y evitamos ese tipo de sorpresas.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, en obra nueva, reforma y rehabilitación. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
