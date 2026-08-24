import type { ServicePage } from '@websites/template/types';
import hero from '../assets/suelo-radiante-tuberias.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-fontaneria',
  title: 'Instalaciones de fontanería',
  h1: 'Instalaciones de fontanería\nen ~Castellón~',
  metaTitle: 'Instalaciones de fontanería en Castellón · Gestel',
  metaDescription:
    'Instalaciones de fontanería en Castellón: redes de agua fría y caliente, acometidas, contadores y agua caliente sanitaria para locales, naves y viviendas.',
  image: { src: hero, alt: 'Tubería de suelo radiante montada sobre panel aislante' },
  summary: 'Acometidas, contadores, redes de agua fría y caliente, producción de ACS y aparatos sanitarios, con su legalización.',
  intro:
    '_Ejecutamos instalaciones de fontanería completas en locales, naves y viviendas: acometidas, contadores, redes de agua fría y caliente, producción de agua caliente sanitaria y aparatos sanitarios. Con la legalización incluida._',
  body: `## Instalación completa de agua

Una red de fontanería se juzga por dos cosas: que llegue presión suficiente a todos los puntos y que no dé un disgusto dentro de cinco años. Dimensionamos los diámetros según el consumo simultáneo real y montamos con materiales y uniones pensados para durar, no para salir del paso.

- Acometidas, armarios de contador y baterías de contadores.
- Redes de distribución de agua fría y caliente en multicapa, polipropileno y cobre.
- Producción de agua caliente sanitaria: termos, calderas y sistemas con _~aerotermia~_.
- Grupos de presión y depósitos de reserva cuando la red no da la presión necesaria.
- Montaje de aparatos sanitarios y griferías.
- Tramitación y boletines de la instalación.

## Locales comerciales y hostelería

En un local que abre al público la fontanería suele ir contrarreloj y condicionada por la licencia de actividad. Coordinamos la instalación con la obra y con los requisitos del proyecto de actividad, para que los sanitarios, la cocina y los desagües estén donde tienen que estar a la primera.

## Industria

En nave la prioridad cambia: caudales grandes, recorridos largos y a menudo agua de proceso además de la sanitaria. Trabajamos con las redes aéreas, los grupos de presión y los depósitos que exige ese tipo de instalación.

## Reformas y sustitución de instalaciones antiguas

Sustituimos instalaciones de hierro o plomo, redistribuimos baños y cocinas y resolvemos problemas de presión y de ruido en instalaciones existentes. En reformas integrales lo coordinamos con el _~saneamiento~_ y con la _~instalación eléctrica~_, para abrir y cerrar la obra una sola vez.

## Averías y mantenimiento

Localizamos y reparamos fugas, atendemos averías y ofrecemos mantenimiento preventivo de las instalaciones de agua de tu empresa, con respuesta en 24/48 horas.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, para empresas, industria y particulares. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
