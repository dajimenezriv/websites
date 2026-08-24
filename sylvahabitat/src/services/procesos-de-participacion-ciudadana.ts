import type { ServicePage } from '@websites/template/types';
import hero from '../assets/service7/hero.jpg';
import info from '../assets/service7/info.jpg';

// Draft: copy from the design.
export default {
  type: 'service',
  slug: 'procesos-de-participacion-ciudadana',
  title: 'Procesos de participación ciudadana',
  h1: 'Procesos de\n~participación ciudadana~',
  metaTitle: 'Procesos de participación ciudadana · SylvaHábitat',
  metaDescription:
    'Diseño y gestión de procesos de participación ciudadana: talleres, dinámicas de grupo, reuniones, charlas formativas y foros para administraciones y entidades.',
  image: { src: hero, alt: '' },
  summary: 'Diseño y dinamización de procesos de participación ciudadana en la planificación y gestión del territorio.',
  intro: '_Tu voz cuenta: juntos construimos un mejor futuro._',
  blocks: [
    {
      type: 'info',
      nav: 'Participación ciudadana',
      title: 'Implicamos a la comunidad en las _~decisiones~_.',
      text1:
        '_Programamos y gestionamos procesos de participación ciudadana para ayudar a las comunidades en la toma de decisiones sobre el manejo de sus propios recursos._',
      text2:
        'Este tipo de procesos implica a la sociedad de manera activa en el desarrollo de su entorno más inmediato, siempre basándose en sus tres principios fundamentales: responsabilidad, solidaridad y tolerancia.\n\nPara ello, realizamos diferentes tipos de actividades como talleres, dinámicas de grupo, reuniones, charlas formativas o foros, cuyos resultados sirven como herramienta tanto a administraciones públicas como a asociaciones de carácter privado.',
      image: { src: info, alt: '' },
    },
  ],
} satisfies ServicePage;
