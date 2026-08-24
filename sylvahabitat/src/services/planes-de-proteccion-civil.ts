import type { ServicePage } from '@websites/template/types';
import service1 from '../assets/service2/1.jpg';
import service2 from '../assets/service2/2.jpg';
import service3 from '../assets/service2/3.jpg';
import service4 from '../assets/service2/4.jpg';
import service5 from '../assets/service2/5.jpg';
import service6 from '../assets/service2/6.jpg';
import service7 from '../assets/service2/7.png';
import service8 from '../assets/service2/8.webp';
import hero from '../assets/service2/hero.png';
import info from '../assets/service2/info.jpg';

// Draft: copy from the design. Images reuse the placeholder until the real assets land.
export default {
  type: 'service',
  slug: 'planes-de-proteccion-civil',
  title: 'Planes de protección civil o emergencias',
  h1: 'Planes de protección civil\no ~emergencias~',
  metaTitle: 'Planes de protección civil o emergencias · SylvaHábitat',
  metaDescription:
    'Elaboración de planes de contingencia, análisis de riesgos y simulacros de evacuación para proteger vidas y minimizar el impacto de los desastres naturales.',
  image: { src: hero, alt: '' },
  summary: 'Redacción de planes de actuación municipal frente a incendios, inundaciones y riesgo sísmico, y planes de autoprotección.',
  intro: '_Nuestro compromiso es proteger vidas y minimizar el impacto de los desastres naturales._',
  blocks: [
    {
      type: 'info',
      nav: 'Protección civil',
      title: 'Prevención y gestión de _~emergencias~_.',
      text1: '_Nuestra empresa ofrece una gama integral de servicios para la prevención y gestión de emergencias._',
      text2:
        'Nos especializamos en la elaboración de planes de contingencia, análisis de riesgos y simulacros de evacuación. Nuestro objetivo es minimizar el impacto de las emergencias y proteger a las comunidades y sus bienes.\n\nLa experiencia en diversos sectores nos permite adaptarnos a diferentes necesidades y escenarios. Además, mantenemos una constante actualización en normativas y tecnologías emergentes, asegurando que nuestros métodos sean los más avanzados y efectivos.\n\nEl equipo de nuestra empresa está compuesto por profesionales altamente cualificados con una vasta experiencia en la gestión de emergencias y la protección civil: ingenieros, especialistas en seguridad y consultores certificados.',
      image: { src: info, alt: '' },
    },
    {
      type: 'gallery',
      nav: 'Servicios',
      title: '_Nuestros servicios de planes de protección civil._',
      text: 'Planes de contingencia y actuación frente a los principales riesgos naturales, adaptados a cada comunidad o entidad.',
      images: [
        {
          src: service1,
          alt: '',
          title: 'Planes territoriales municipales de emergencias',
          text: 'Elaboramos planes estratégicos para gestionar emergencias y desastres municipales, abarcando evaluación de riesgos, organización de recursos, prevención, respuesta inmediata, comunicación, capacitación, simulacros y recuperación, asegurando una respuesta eficiente y protegiendo a la población.',
        },
        {
          src: service2,
          alt: '',
          title: 'Planes de actuación municipal frente a inundaciones',
          text: 'Desarrollamos planes de emergencia ante inundaciones, identificando áreas de riesgo, estableciendo protocolos de evacuación y promoviendo la preparación comunitaria para asegurar una recuperación rápida y efectiva.',
        },
        {
          src: service3,
          alt: '',
          title: 'Planes de actuación municipal frente a incendios forestales',
          text: 'Los planes de emergencia frente a incendios son cruciales porque identifican y evalúan áreas vulnerables o propensas a sufrir igniciones, coordinan sus recursos y ofrecen información sobre el estado actual de la vegetación y la identificación de los elementos de defensa. Permiten una respuesta coordinada y eficiente, protegiendo a la población y minimizando los daños.',
        },
        {
          src: service4,
          alt: '',
          title: 'Planes de actuación municipal frente a riesgo sísmico',
          text: 'Creamos planes de emergencia frente a terremotos, evaluando infraestructuras, zonas vulnerables y accesos para servicios de emergencia, estableciendo protocolos de seguridad y evacuación para una respuesta coordinada y eficiente.',
        },
        {
          src: service5,
          alt: '',
          title: 'Planes de autoprotección para espacios en IUF (Interfaz Urbano-Forestal)',
          text: 'Generamos estrategias de autoprotección para edificaciones situadas en zonas vulnerables a incendios forestales. Esto implica la identificación de riesgos, la implementación de medidas preventivas y la coordinación de recursos para asegurar una respuesta rápida y efectiva, así como una evacuación segura.',
        },
        {
          src: service6,
          alt: '',
          title: 'Planes de actuación municipal frente a fenómenos meteorológicos adversos',
          text: 'Ofrecemos servicios especializados en la elaboración de planes de contingencia frente a fenómenos meteorológicos adversos, priorizando la protección de vidas y la infraestructura comunitaria mediante la anticipación, identificación de riesgos y coordinación de recursos para una respuesta efectiva ante eventos extremos.',
        },
        {
          src: service7,
          alt: '',
          title: 'Estudios de inundabilidad',
          text: 'Los estudios de inundabilidad sirven para evaluar y predecir las áreas susceptibles a inundaciones, ayudando a planificar y gestionar el uso del suelo, diseñar infraestructuras adecuadas y tomar medidas preventivas. Proveen datos cruciales para la seguridad pública y la gestión de emergencias.',
        },
        {
          src: service8,
          alt: '',
          title: 'Estudios de riesgo de deslizamiento y desprendimiento',
          text: 'Realizar estudios ante riesgo de deslizamiento y desprendimiento es crucial para identificar áreas vulnerables y prevenir desastres. Estos estudios permiten diseñar medidas de mitigación efectivas, proteger vidas y propiedades, y planificar un desarrollo urbano sostenible.',
        },
      ],
    },
    {
      type: 'steps',
      nav: 'Proceso',
      title: 'Planes de _~emergencias~_.',
      text: 'Un método completo, de la evaluación del riesgo a la mejora continua.',
      steps: [
        {
          title: 'Evaluación de riesgos',
          items: [
            {
              label: 'Identificación de amenazas',
              text: 'Realizamos un análisis detallado de las posibles amenazas naturales (terremotos, huracanes, inundaciones, incendios forestales, etc.) en las áreas de interés.',
            },
            {
              label: 'Análisis de vulnerabilidades',
              text: 'Evaluamos la vulnerabilidad de las infraestructuras y la población, identificando puntos débiles y áreas que necesitan mejoras.',
            },
          ],
        },
        {
          title: 'Planificación',
          items: [
            {
              label: 'Desarrollo de planes de emergencia',
              text: 'Elaboramos planes detallados que incluyen procedimientos de evacuación, rutas seguras y puntos de reunión. Estos planes son personalizados según las necesidades específicas de cada comunidad o entidad.',
            },
            {
              label: 'Programas de capacitación',
              text: 'Ofrecemos programas de capacitación y simulacros regulares para que todos sepan cómo actuar en caso de emergencia.',
            },
          ],
        },
        {
          title: 'Implementación',
          items: [
            {
              label: 'Instalación de sistemas de alerta temprana',
              text: 'Implementamos sistemas tecnológicos avanzados para la detección temprana de amenazas, permitiendo una respuesta rápida y eficaz.',
            },
            {
              label: 'Fortalecimiento de infraestructuras',
              text: 'Trabajamos en la mejora y construcción de infraestructuras resilientes capaces de resistir desastres naturales.',
            },
          ],
        },
        {
          title: 'Respuesta',
          items: [
            {
              label: 'Coordinación de emergencias',
              text: 'Durante una emergencia, coordinamos con agencias gubernamentales y organizaciones locales para una respuesta rápida y efectiva.',
            },
            {
              label: 'Operaciones de rescate y asistencia',
              text: 'Proveemos apoyo logístico y operativo en las operaciones de rescate, asegurando la distribución eficiente de recursos y asistencia a los afectados.',
            },
          ],
        },
        {
          title: 'Recuperación',
          items: [
            {
              label: 'Evaluación de daños',
              text: 'Post-emergencia, llevamos a cabo una evaluación exhaustiva de los daños para planificar la recuperación y reconstrucción.',
            },
            {
              label: 'Rehabilitación y reconstrucción',
              text: 'Asistimos en la rehabilitación de infraestructuras y en la reconstrucción de las comunidades, enfocándonos en la resiliencia y la prevención de futuros desastres.',
            },
          ],
        },
        {
          title: 'Mejora continua',
          items: [
            {
              label: 'Revisión y actualización de planes',
              text: 'Revisamos y actualizamos regularmente los planes de emergencia basándonos en lecciones aprendidas y los últimos avances en la gestión de desastres.',
            },
            {
              label: 'Innovación y tecnología',
              text: 'Incorporamos nuevas tecnologías y métodos innovadores para mejorar continuamente nuestra capacidad de respuesta y planificación.',
            },
          ],
        },
      ],
    },
  ],
} satisfies ServicePage;
