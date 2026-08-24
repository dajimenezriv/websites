import type { ServicePage } from '@websites/template/types';
import hero from '../assets/paneles-parcheo-rack.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-telecomunicaciones-voz-datos',
  title: 'Instalaciones de telecomunicaciones, voz y datos',
  h1: 'Telecomunicaciones, voz y datos\nen ~Castellón~',
  metaTitle: 'Telecomunicaciones, voz y datos en Castellón · Gestel',
  metaDescription:
    'Instalaciones de telecomunicaciones, voz y datos en Castellón: cableado estructurado, redes y fibra para empresas e industria.',
  image: { src: hero, alt: 'Paneles de parcheo y cableado estructurado en rack de comunicaciones' },
  summary:
    'Cableado estructurado certificado, racks de comunicaciones, fibra y redes wifi. La infraestructura sobre la que funciona todo lo demás.',
  intro:
    '_Diseñamos y montamos la red de voz y datos de tu oficina, nave o local: cableado estructurado certificado, racks de comunicaciones, fibra y wifi. Una infraestructura ordenada que aguanta el crecimiento de tu empresa._',
  body: `## Cableado estructurado

La red es la instalación que menos se ve y más se nota cuando falla. Por eso la planteamos como una infraestructura de largo recorrido: categoría adecuada al uso, recorridos limpios, canalizaciones con reserva y un etiquetado que permite localizar cualquier toma años después.

- Cableado estructurado de cobre en categoría 6 y 6A, con certificación de cada enlace.
- Racks y armarios de comunicaciones: paneles de parcheo, organizadores, ventilación y alimentación.
- Fibra óptica para troncales entre plantas o entre edificios de un mismo recinto.
- Tomas RJ45 para puestos de trabajo, puntos de venta, cámaras y puntos de acceso wifi.
- Canalizaciones y bandejas independientes de la instalación eléctrica, para evitar interferencias.

## Redes wifi y cobertura

Una oficina diáfana, una nave con estanterías metálicas y un local de varias plantas no se cubren igual. Estudiamos la distribución real del espacio y colocamos los puntos de acceso donde hacen falta, alimentados por PoE desde el rack, para que la cobertura sea homogénea y no dependa de repetidores improvisados.

## Voz y sistemas asociados

Sobre la misma infraestructura resolvemos la telefonía IP, la megafonía y el control de accesos, además de la videovigilancia. Integrarlo todo en un único cableado simplifica el mantenimiento y evita duplicar canalizaciones.

## Coordinado con el resto de la instalación

Al ejecutar también la _~instalación eléctrica~_ de baja tensión, la red se planifica al mismo tiempo que las líneas y los cuadros: mismas rozas, mismos falsos techos, un solo equipo en obra y un solo plazo. Es la forma más rápida y limpia de dejar un local listo para abrir.

## Documentación y garantía

Entregamos el plano de la instalación, el etiquetado de tomas y los resultados de certificación de cada enlace. Si más adelante quieres ampliar puestos o cambiar de operador, tienes la información necesaria para hacerlo sin rehacer nada.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, para empresas, industria y administración pública. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
