import type { ServicePage } from '@websites/template/types';
import info from '../assets/info.jpeg';

export default {
  type: 'service',
  slug: 'servicios-de-jardineria',
  title: 'Servicios de jardinería',
  h1: 'Servicios de\n~jardinería~',
  metaTitle: 'Servicios de jardinería y mantenimiento de zonas verdes · Henaco',
  metaDescription:
    'Creación y mantenimiento de zonas verdes, plantaciones, riego y poda de arbolado ornamental para ayuntamientos y particulares.',
  image: { src: info, alt: 'Operario abriendo hoyos para una nueva plantación' },
  intro:
    '_Creamos y mantenemos zonas verdes: plantaciones, siembras, riego, poda ornamental y siegas periódicas. La misma gente que trabaja el monte, aplicada al jardín y a los espacios públicos._',
  body: `## Creación de zonas verdes

Cuando hay que hacer el espacio de cero, nos ocupamos del conjunto: preparación y aporte de tierra, replanteo de la plantación, apertura de hoyos, plantación con su tutor y protector, y la instalación del riego.

Elegimos especies que aguanten el clima del sitio y no dependan de un riego constante. En zonas de interior con veranos duros e inviernos fríos, eso ahorra disgustos y facturas de agua.

## Mantenimiento

- Siega y desbroce periódico de céspedes y praderas.
- Poda de setos, arbustos y arbolado ornamental.
- Recorte de bordes, escarda y mantenimiento de parterres.
- Abonado, tratamientos fitosanitarios y reposición de marras.
- Revisión y reparación de instalaciones de riego, programadores y goteo.
- Limpieza de la zona verde y retirada de restos.

Trabajamos con contratos de mantenimiento periódico o con actuaciones puntuales, según lo que necesites.

## Zonas verdes municipales

Para _~ayuntamientos~_ mantenemos parques, plazas, jardines y arbolado viario, con la periodicidad que se acuerde y respuesta ante avisos puntuales. Al ser cooperativa forestal, resolvemos también lo que un jardinero convencional no cubre: arbolado de gran porte, taludes con vegetación y bordes de monte pegados al pueblo.

## Jardines de particulares

Para _~particulares~_ hacemos desde la puesta a punto de un jardín descuidado hasta el mantenimiento regular de la parcela. Si el terreno está muy cerrado, lo habitual es empezar por una _~limpieza de parcela~_ y a partir de ahí plantear el jardín.

## Zona de trabajo

Cooperativa forestal con base en Henarejos (Cuenca). Trabajamos en toda España.`,
  cta: { text: 'Llámanos', link: 'tel:722269709' },
} satisfies ServicePage;
