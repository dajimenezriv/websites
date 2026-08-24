import type { ServicePage } from '@websites/template/types';
import hero from '../assets/cuadro-electrico-general.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-electricas',
  title: 'Instalaciones eléctricas de baja tensión',
  h1: 'Instalaciones eléctricas\nen ~Castellón~',
  metaTitle: 'Instalaciones eléctricas en Castellón · Gestel',
  metaDescription:
    'Instaladores autorizados de baja tensión en Castellón. Cuadros, líneas, iluminación, legalizaciones y boletines para industria, comercio y vivienda.',
  image: { src: hero, alt: 'Cuadro eléctrico general con protecciones modulares instalado por Gestel' },
  summary:
    'Baja tensión para naves, comercios, oficinas y vivienda: cuadros, líneas, iluminación, legalizaciones y boletines. Instaladores autorizados.',
  intro:
    '_Diseñamos, ejecutamos y legalizamos instalaciones eléctricas de baja tensión para naves, comercios, oficinas y viviendas. Somos instaladores autorizados con más de 20 años de experiencia en la provincia de Castellón._',
  body: `## Qué incluye una instalación eléctrica con Gestel

Nos hacemos cargo del ciclo completo: el estudio técnico previo, el montaje y la puesta en marcha, hasta la documentación que deja tu instalación en regla. Un solo interlocutor de principio a fin.

- Cuadros eléctricos y cuadros secundarios, con sus protecciones dimensionadas para tu actividad.
- Líneas de distribución y canalizaciones en naves industriales, locales y oficinas.
- Iluminación interior y exterior, con criterios de eficiencia y bajo consumo.
- Tomas de fuerza, alimentación de maquinaria y previsiones de ampliación.
- Legalizaciones ante industria, boletines eléctricos y certificados de instalación.

## Instalaciones para industria y empresa

Una nave o un taller no se cablea igual que una oficina. Analizamos la potencia real que necesita tu maquinaria, la simultaneidad de tus procesos y el margen de crecimiento que quieres dejarte, y a partir de ahí dimensionamos la instalación.

Trabajamos con plazos cerrados y coordinados con el resto de la obra, para que la puesta en marcha no se convierta en el cuello de botella del proyecto.

## Instalaciones para comercio y vivienda

En reformas de locales y viviendas la prioridad suele ser otra: dejar la instalación segura, actualizada a normativa y lista para pasar inspección. Sustituimos instalaciones antiguas, adaptamos cuadros obsoletos y resolvemos la parte administrativa para que puedas abrir sin sorpresas.

Si además necesitas la obra completa, la coordinamos nosotros: consulta nuestro servicio de _~obra y reformas llave en mano~_.

## Eficiencia energética desde el diseño

La factura eléctrica se decide en el proyecto, no después. Por eso incorporamos desde el inicio las soluciones que reducen consumo: _~autoconsumo solar~_, _~puntos de recarga para vehículo eléctrico~_ e integración de sistemas de control e iluminación.

## Mantenimiento posterior

Cuando la instalación está en marcha, seguimos ahí. Ofrecemos mantenimiento preventivo programado y respuesta a averías en 24/48 horas, para que un fallo eléctrico no te pare la actividad.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, tanto para clientes privados como para administración pública. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
