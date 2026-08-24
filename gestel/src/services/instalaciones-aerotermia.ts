import type { ServicePage } from '@websites/template/types';
import hero from '../assets/colector-suelo-radiante.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-aerotermia',
  title: 'Instalaciones de aerotermia',
  h1: 'Instalaciones de aerotermia\nen ~Castellón~',
  metaTitle: 'Instalaciones de aerotermia en Castellón · Gestel',
  metaDescription:
    'Instalación de aerotermia en Castellón: climatización, agua caliente sanitaria y suelo radiante con bomba de calor de alta eficiencia.',
  image: { src: hero, alt: 'Colector de suelo radiante con los circuitos conectados' },
  summary:
    'Calefacción, refrigeración y agua caliente con una sola bomba de calor. Combina especialmente bien con suelo radiante y autoconsumo solar.',
  intro:
    '_Instalamos sistemas de aerotermia para calefacción, refrigeración y agua caliente sanitaria. Una sola máquina cubre las tres necesidades con un consumo muy inferior al de una caldera, y combina especialmente bien con suelo radiante._',
  body: `## Qué es y cuándo compensa

Una bomba de calor aerotérmica extrae energía del aire exterior y la aprovecha para climatizar y producir agua caliente. Por cada kWh eléctrico que consume entrega del orden de tres o cuatro de energía útil, y por eso sustituye con ventaja a las calderas de gas o gasóleo.

Compensa sobre todo en obra nueva y en reformas integrales, donde se puede plantear la instalación completa desde cero. En sustituciones sobre instalaciones existentes hay que estudiar si los emisores actuales funcionan bien a baja temperatura: te lo decimos antes de presupuestar, no después.

## Qué incluye la instalación

- Bomba de calor aerotérmica dimensionada según la demanda real del edificio.
- Depósito de acumulación de agua caliente sanitaria.
- Circuitos de distribución, bombas, vasos de expansión y valvulería.
- Suelo radiante y refrescante, o unidades terminales de baja temperatura.
- Termostatos por estancia, control de zonas y programación horaria.
- Tramitación y documentación de la instalación.

## Suelo radiante

Es la pareja natural de la aerotermia: trabaja a temperaturas bajas, que es justo donde la bomba de calor rinde mejor. Además reparte el calor de forma uniforme, sin corrientes ni radiadores a la vista, y en verano puede usarse en modo refrescante.

Montamos el panel aislante, los circuitos, los colectores y el equilibrado hidráulico, y dejamos el sistema probado y documentado antes de que entre el pavimento.

## Integración con autoconsumo solar

La aerotermia consume electricidad, así que combinarla con _~placas fotovoltaicas~_ es lo que realmente hace caer la factura: el sistema funciona en buena parte con la energía que produce tu propia cubierta. Cuando el proyecto lo permite, planteamos las dos instalaciones juntas y calculamos el retorno conjunto.

## Mantenimiento

Una aerotermia bien mantenida rinde igual el año diez que el primero. Realizamos las revisiones periódicas, el control de presiones y consumos y la resolución de averías, con respuesta en 24/48 horas.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, en obra nueva, reforma y sustitución de instalaciones. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
