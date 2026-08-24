import type { ServicePage } from '@websites/template/types';
import hero from '../assets/instalaciones-techo-pasillo.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-gas',
  title: 'Instalaciones de gas',
  h1: 'Instalaciones de gas\nen ~Castellón~',
  metaTitle: 'Instalaciones de gas en Castellón · Gestel',
  metaDescription:
    'Instalaciones de gas natural y propano en Castellón: acometidas, redes interiores, calderas y legalización por instaladores autorizados.',
  image: { src: hero, alt: 'Canalizaciones y tuberías vistas en falso techo' },
  summary:
    'Gas natural y propano para hostelería, industria y vivienda: acometidas, redes interiores, conexión de aparatos y certificados.',
  intro:
    '_Instaladores autorizados de gas en Castellón. Ejecutamos y legalizamos instalaciones de gas natural y propano para hostelería, industria y vivienda: acometidas, redes interiores, conexión de aparatos y certificados._',
  body: `## Instalaciones autorizadas y legalizadas

El gas es una instalación reglamentada de principio a fin: sin instalador autorizado y sin certificado, la compañía no da suministro. Nos ocupamos de la ejecución y de toda la parte administrativa, incluida la puesta en servicio con la distribuidora.

- Acometidas, armarios de regulación y contadores.
- Redes interiores en cobre y acero, vistas o enterradas, con sus pasamuros y ventilaciones.
- Conexión de calderas, cocinas industriales, hornos y equipos de proceso.
- Pruebas de estanqueidad y puesta en servicio de la instalación.
- Certificados de instalación y tramitación ante la compañía distribuidora.

## Hostelería y cocinas industriales

Es donde más trabajamos con gas: una cocina profesional exige, además de la red, la ventilación y la evacuación de productos de la combustión correctamente resueltas. Lo planteamos junto con la _~ventilación~_ y la extracción de humos, porque en la inspección se miran las tres cosas a la vez.

## Industria

Ejecutamos redes de gas para procesos industriales y equipos de secado y calentamiento, con el dimensionado, las protecciones y las seguridades que exige cada tipo de instalación.

## Vivienda y calefacción

Instalamos y sustituimos calderas de gas y adaptamos instalaciones antiguas a la normativa vigente. Si estás renovando la instalación desde cero, conviene comparar antes con _~aerotermia~_: en muchos casos el coste de explotación resulta bastante menor, y te damos los dos números para que decidas.

## Revisiones y mantenimiento

Realizamos las revisiones periódicas obligatorias, la detección de fugas y el mantenimiento de calderas y equipos, con respuesta a averías en 24/48 horas.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, para hostelería, industria y particulares. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
