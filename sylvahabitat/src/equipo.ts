import type { ServicePage } from '@websites/template/types';
import alma from './assets/team/alma.jpg';
import hero from './assets/team/hero.jpg';
import info from './assets/team/info.jpg';
import jonathan from './assets/team/jonathan.jpg';
import jorge from './assets/team/jorge.jpg';
import manuela from './assets/team/manuela.jpeg';
import mauro from './assets/team/mauro.jpg';
import rosario from './assets/team/rosario.jpg';
import victor from './assets/team/victor.jpg';

// Standalone top-level page (not part of any service group).
export default {
  type: 'service',
  slug: 'equipo',
  title: 'Equipo',
  h1: 'Nuestro ~equipo~',
  metaTitle: 'Nuestro equipo · SylvaHábitat',
  metaDescription:
    'El equipo de SylvaHábitat: profesionales de la ingeniería forestal, la geografía, las ciencias ambientales y la arqueología comprometidos con la gestión ambiental sostenible.',
  image: { src: hero, alt: '' },
  blocks: [
    {
      type: 'info',
      nav: 'Quiénes somos',
      title: 'Compromiso con la gestión ambiental _~sostenible~_.',
      imageFit: 'contain',
      text1:
        '_Fundada en 2018 por Rosario, ingeniera técnica forestal, y Jonathan, graduado en geografía, SylvaHábitat se destaca por su compromiso con la gestión ambiental sostenible._',
      text2:
        'Especializados en conservación de recursos naturales, especialmente en el ámbito forestal, ofrecen soluciones integrales e innovadoras para proteger y revitalizar los ecosistemas. Con un equipo altamente capacitado en diversas áreas, trabajan en estrecha colaboración para lograr soluciones sostenibles y efectivas.',
      image: { src: info, alt: 'Equipo de SylvaHábitat' },
    },
    {
      type: 'team',
      nav: 'Equipo',
      title: '_El equipo._',
      members: [
        {
          image: { src: rosario, alt: 'Rosario Guijarro Molinero' },
          name: 'Rosario Guijarro Molinero',
          bio: 'Ingeniera Técnica Forestal, lidera el departamento de ingeniería forestal y del medio natural. Con una amplia experiencia en el campo, aporta conocimientos y habilidades que garantizan la excelencia en la gestión de proyectos forestales y medioambientales, promoviendo prácticas sostenibles y soluciones innovadoras.',
          linkedin: 'https://www.linkedin.com/in/rosario-guijarro-molinero-60470a5a/',
        },
        {
          image: { src: jonathan, alt: 'Jonathan Casas Martínez' },
          name: 'Jonathan Casas Martínez',
          bio: 'Geógrafo y cofundador de SylvaHábitat, con un Máster en Gestión y Planificación de Riesgos Naturales. Debido a su destreza en herramientas SIG y modelización hidrológica, se encarga del departamento de Planes de Emergencia.',
          linkedin: 'https://www.linkedin.com/in/jonathan-casas-martinez-462422153/',
        },
        {
          image: { src: jorge, alt: 'Jorge Delgado Franco' },
          name: 'Jorge Delgado Franco',
          bio: 'Licenciado en Ciencias Ambientales y un Máster en Educación, con especialización en Biología y Geología, y formación adicional en Procesos Participativos para la Gestión Sostenible y Formación Ocupacional. Se ocupa de los servicios asociados a su formación.',
          linkedin: 'https://www.linkedin.com/in/jorge-delgado-franco-7b83b954/',
        },
        {
          image: { src: mauro, alt: 'Mauro Payá Gómez' },
          name: 'Mauro Payá Gómez',
          bio: 'Ingeniero técnico forestal con experiencia en el manejo sostenible de recursos forestales, resaltando la cubicación de madera y el uso de tecnologías avanzadas como fotogrametría y vuelos LiDAR. Se responsabiliza, entre otros, del servicio de Ingeniería forestal.',
          linkedin: 'https://www.linkedin.com/in/mauro-pay%C3%A1-022055134/',
        },
      ],
    },
    {
      type: 'team',
      nav: 'Colaboradores',
      title: '_Colaboradores._',
      circle: true,
      members: [
        {
          image: { src: manuela, alt: 'Manuela Granada Montoya' },
          name: 'Manuela Granada Montoya',
          bio: 'Magíster en Comunicación e Industrias Creativas con una sólida experiencia en el desarrollo de estrategias comunicacionales, coordinación de proyectos SaaS y creación de contenido.',
          linkedin: 'https://www.linkedin.com/in/mgranadam/',
        },
        {
          image: { src: alma, alt: 'Alma Lerma Guijarro' },
          name: 'Alma Lerma Guijarro',
          bio: 'Arqueóloga profesional con experiencia en arqueología de la arquitectura y arqueología de campo. Especialista en zooarqueología, divulgación de patrimonio y perspectivas de género, con más de diez años de experiencia.',
          linkedin: 'https://www.linkedin.com/in/alma-lerma-guijarro-1511b4130/',
        },
        {
          image: { src: victor, alt: 'Víctor Jiménez Hernando' },
          name: 'Víctor Jiménez Hernando',
          bio: 'Técnico informático administrador de sistemas. Con más de 20 años de experiencia en soporte local y remoto. Especializado en la gestión de servicios en la nube. Se encarga de la gestión tecnológica de SylvaHábitat, la implantación y funcionamiento eficiente del hardware y software de la empresa. Además, se responsabiliza del departamento de innovación.',
          linkedin: 'https://www.linkedin.com/in/v%C3%ADctor-m-jim%C3%A9nez-hernando-9363197b/',
        },
      ],
    },
  ],
} satisfies ServicePage;
