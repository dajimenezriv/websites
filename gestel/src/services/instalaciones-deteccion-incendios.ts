import type { ServicePage } from '@websites/template/types';
import hero from '../assets/instalaciones-techo-pasillo.jpeg';

export default {
  type: 'service',
  slug: 'instalaciones-deteccion-incendios',
  title: 'Instalaciones de detección de incendios',
  h1: 'Detección de incendios\nen ~Castellón~',
  metaTitle: 'Instalaciones de detección de incendios en Castellón · Gestel',
  metaDescription:
    'Sistemas de detección y alarma de incendios en Castellón: centrales, detectores, pulsadores y señalización para naves, locales y edificios.',
  image: { src: hero, alt: 'Instalación de conductos, tuberías y bandejas de cable en falso techo' },
  summary: 'Centrales, detectores, pulsadores, sirenas y alumbrado de emergencia, conforme al reglamento de protección contra incendios.',
  intro:
    '_Instalamos y mantenemos sistemas de detección y alarma de incendios en naves, locales y edificios: centrales, detectores, pulsadores, sirenas y señalización, conforme al Reglamento de Instalaciones de Protección contra Incendios._',
  body: `## Sistemas de detección y alarma

Un sistema de detección sirve para ganar los minutos que separan un susto de una pérdida grave. Lo dimensionamos según el uso del edificio, su carga de fuego y los sectores en que está dividido, y lo dejamos documentado para pasar inspección.

- Centrales de detección convencionales y analógicas direccionables.
- Detectores ópticos de humo, térmicos y de tipo dual, según el riesgo de cada zona.
- Pulsadores manuales de alarma y sirenas acústicas y ópticas.
- Alumbrado de emergencia y señalización de recorridos de evacuación.
- Integración con otros sistemas: paro de máquinas, compuertas y control de accesos.

## Naves industriales y almacenes

En industria el reto suele ser la altura y el polvo: un detector mal elegido da falsas alarmas cada semana o no salta cuando toca. Seleccionamos la tecnología adecuada a cada ambiente y la ubicamos según la geometría real de la nave, no según un plano teórico.

## Locales comerciales y edificios

En comercios, oficinas y edificios de uso público la prioridad es la evacuación: detección fiable, señalización visible y alumbrado de emergencia que cumpla con la normativa desde el primer día para que la licencia de apertura no se atasque.

## Mantenimiento y revisiones

La normativa exige revisiones periódicas del sistema, y una instalación sin mantener deja de proteger. Nos hacemos cargo de las revisiones programadas, la sustitución de equipos y el registro documental de cada actuación.

## Un solo interlocutor

La detección se cablea, se alimenta y se canaliza como cualquier otra instalación. Al ejecutar también la _~instalación eléctrica~_ y las _~telecomunicaciones~_ del edificio, coordinamos todo en la misma obra y con el mismo equipo.

## Zona de trabajo

Trabajamos en Castellón de la Plana y toda la provincia, para empresas, industria y administración pública. Estamos en el Polígono la Basala, 5.`,
  cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
} satisfies ServicePage;
