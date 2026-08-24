import type { ServicePage } from '@websites/template/types';
import hero from '../assets/pantalla-control-climatizacion.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-climatizacion',
  title: 'Instalaciones de climatización',
  h1: 'Instalaciones de climatización\nen ~Castellón~',
  metaTitle: 'Instalaciones de climatización en Castellón · Gestel',
  metaDescription: 'Instalaciones de climatización en Castellón: aire acondicionado y sistemas para comercios, oficinas e industria.',
  image: { src: hero, alt: 'Pantalla de control y monitorización de una instalación de climatización' },
  summary:
    'Expansión directa, VRV y climatizadoras para oficinas, comercio e industria, con cálculo de cargas previo y sistemas de control.',
  intro:
    '_Diseñamos, montamos y mantenemos instalaciones de climatización para oficinas, comercios, naves y edificios: equipos de expansión directa, sistemas VRV, climatizadoras y su sistema de control. Con cálculo de cargas previo, no a ojo._',
  body: `## Del cálculo de cargas a la puesta en marcha

La mayoría de los problemas de una climatización vienen de un mal dimensionado. Antes de proponer equipos calculamos las cargas térmicas reales del espacio: orientación, superficie acristalada, aislamiento, ocupación y actividad. A partir de ahí elegimos la solución, no al revés.

- Sistemas de expansión directa: split, multisplit y conductos para locales y viviendas.
- Sistemas VRV y VRF para oficinas y edificios con muchas zonas independientes.
- Climatizadoras y unidades de tratamiento de aire para grandes espacios y locales de pública concurrencia.
- Redes de conductos, difusión, rejillas y compuertas.
- Sistemas de control y zonificación, con regulación por estancia y programación horaria.

## Oficinas y locales comerciales

En oficinas y comercios lo que se busca es confort sin ruido y una factura previsible. Trabajamos la zonificación para que cada área regule su temperatura y planteamos el control para que el sistema no esté funcionando cuando el local está vacío, que es donde se va buena parte del consumo.

## Industria y grandes espacios

En naves y espacios de gran volumen el planteamiento cambia: importa más la renovación de aire, la estratificación y el coste de operación que el confort milimétrico. Ahí combinamos climatización con _~ventilación~_ para llegar a una solución sostenible en gasto.

## Control y monitorización

Instalamos sistemas de control que permiten programar horarios, fijar consignas por zona y ver el estado de la instalación desde una pantalla o desde el móvil. En instalaciones grandes esto no es un lujo: es la diferencia entre detectar un equipo trabajando mal en un día o en la factura del trimestre.

## Eficiencia y alternativas

Si el proyecto lo permite, planteamos también _~aerotermia~_, que cubre climatización y agua caliente sanitaria con un consumo notablemente menor. Te damos las dos opciones con su inversión y su ahorro estimado para que decidas con datos.

## Mantenimiento

Ofrecemos mantenimiento preventivo y correctivo: limpieza de filtros y baterías, control de presiones, revisión de estanqueidad de refrigerante y puesta a punto antes de cada temporada, con respuesta a averías en 24/48 horas.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, para empresas, industria y particulares. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
