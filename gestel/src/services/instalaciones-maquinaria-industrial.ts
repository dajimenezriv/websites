import type { ServicePage } from '@websites/template/types';
import hero from '../assets/cuadro-electrico-cableado.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-maquinaria-industrial',
  title: 'Instalaciones para maquinaria industrial',
  h1: 'Instalaciones para\n~maquinaria industrial~',
  metaTitle: 'Instalaciones para maquinaria industrial en Castellón · Gestel',
  metaDescription:
    'Alimentación eléctrica, cuadros y automatismos para maquinaria industrial en Castellón. Montaje, traslados y puesta en marcha de líneas de producción.',
  image: { src: hero, alt: 'Cuadro eléctrico industrial con automatismos y cableado de control' },
  summary:
    'Alimentación, cuadros de mando y potencia, automatismos y puesta en marcha. También traslados de máquina y ampliaciones de línea.',
  intro:
    '_Alimentamos, conectamos y ponemos en marcha tu maquinaria: líneas de fuerza, cuadros de mando y potencia, automatismos y cableado de control. También traslados de máquina y ampliaciones de línea sin parar la producción más de lo imprescindible._',
  body: `## Alimentación y cuadros de máquina

Cada máquina llega con sus requisitos de potencia, protecciones y arranque. Los estudiamos antes de que aterrice en la nave, para que la línea, el cuadro y el espacio previsto estén listos el día de la descarga.

- Líneas de fuerza y canalizaciones desde el cuadro general hasta cada punto de consumo.
- Cuadros de mando y potencia, con sus protecciones, variadores y arrancadores.
- Cableado de control, señales y comunicaciones entre equipos de una misma línea.
- Automatismos y armarios de maniobra, con integración en el sistema de control existente.
- Setas de emergencia, enclavamientos y seguridades perimetrales de la instalación.

## Traslados y nuevas implantaciones

Mover una máquina es, sobre todo, un problema de plazos: cada hora de parada cuesta dinero. Planificamos el desmontaje eléctrico, la nueva acometida y la reconexión para concentrar la parada en la ventana que menos te afecta, normalmente un fin de semana o un periodo de mantenimiento programado.

## Ampliaciones de potencia

Añadir maquinaria suele destapar que el cuadro general va justo. Medimos el consumo real y la simultaneidad de tus procesos antes de decidir: a veces basta con reordenar líneas y a veces hace falta ampliar la acometida o plantear un _~centro de transformación~_ propio. Te decimos cuál es tu caso con números, no con suposiciones.

## Puesta en marcha y averías

Acompañamos la puesta en marcha junto al técnico del fabricante y dejamos la instalación documentada. Después, el _~mantenimiento~_ preventivo y la respuesta a averías en 24/48 horas, porque en una línea de producción una avería eléctrica para todo lo demás.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, con especial presencia en el sector cerámico y agroalimentario. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
