import type { ServicePage } from '@websites/template/types';
import hero from '../assets/service3/hero.jpg';
import info from '../assets/service3/info.jpg';
import service1 from '../assets/service3/1.jpg';
import service2 from '../assets/service3/2.png';
import service3 from '../assets/service3/3.jpg';

// Draft: copy from the design.
export default {
  type: 'service',
  slug: 'educacion-y-divulgacion-ambiental',
  title: 'Educación y divulgación ambiental',
  h1: 'Educación y\n~divulgación ambiental~',
  metaTitle: 'Educación y divulgación ambiental · SylvaHábitat',
  metaDescription:
    'Talleres, charlas y campañas de educación ambiental, diseño de cartelería, guías y materiales didácticos para promover hábitos sostenibles.',
  image: { src: hero, alt: '' },
  summary: 'Programas y campañas de educación y sensibilización ambiental para administraciones y entidades.',
  intro: '_Conciencia ambiental, acciones sostenibles: educamos hoy para un mañana verde._',
  blocks: [
    {
      type: 'info',
      nav: 'Educación ambiental',
      title: 'Educamos hoy para un _~mañana verde~_.',
      text1:
        '_El servicio de educación y divulgación ambiental se centra en concienciar sobre la importancia de la preservación del medio ambiente mediante actividades educativas y de comunicación._',
      text2:
        'Utilizamos talleres, charlas y campañas para transmitir información sobre temas ambientales y promover hábitos sostenibles. Además, diseñamos cartelería, guías y materiales didácticos que refuerzan el mensaje y facilitan su comprensión.\n\nNuestras fortalezas radican en la diversidad de enfoques pedagógicos que empleamos, adaptándonos a diferentes audiencias y contextos. Contamos con experiencia en el diseño y ejecución de programas educativos innovadores, así como en la creación de materiales didácticos atractivos y efectivos.\n\nNuestro equipo está conformado por expertos en educación ambiental y comunicación, comprometidos con la promoción de prácticas sostenibles. Colaboramos con organizaciones locales e internacionales para maximizar nuestro impacto y alcanzar nuestras metas de sensibilización.',
      image: { src: info, alt: '' },
    },
    {
      type: 'gallery',
      nav: 'Servicios',
      title: '_Nuestros servicios de educación y divulgación ambiental._',
      text: 'Actividades educativas y materiales de comunicación para sensibilizar sobre la preservación del medio ambiente.',
      images: [
        {
          src: service1,
          alt: '',
          title: 'Talleres ambientales, charlas y jornadas divulgativas',
          text: 'Impartimos charlas y jornadas informativas sobre conservación ambiental, promoviendo la conciencia y prácticas sostenibles a través de actividades interactivas y educativas. Abordamos temas esenciales como biodiversidad, cambio climático y gestión de recursos naturales, adaptando nuestro enfoque a diferentes audiencias y entornos.',
        },
        {
          src: service2,
          alt: '',
          title: 'Diseño de cartelería y elaboración de contenidos',
          text: 'Contamos con personal especializado en diseño de cartelería y elaboración de contenidos versátiles, abarcando una amplia gama de temas (patrimonio natural, arqueológico, cultural...). Nuestra experiencia nos permite crear materiales visuales impactantes y contenido informativo de calidad para cualquier tipo de proyecto.',
        },
        {
          src: service3,
          alt: '',
          title: 'Diseño y elaboración de publicaciones, trípticos y guías',
          text: 'Nuestro equipo especializado ofrece servicios de diseño y elaboración de publicaciones, trípticos y guías, abarcando una amplia gama de temáticas y necesidades específicas.',
        },
      ],
    },
  ],
} satisfies ServicePage;
