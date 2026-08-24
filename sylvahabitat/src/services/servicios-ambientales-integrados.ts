import type { ServicePage } from '@websites/template/types';
import hero from '../assets/service4/hero.png';
import info from '../assets/service4/info.jpg';
import service1 from '../assets/service4/1.jpg';
import service2 from '../assets/service4/2.jpg';
import service3 from '../assets/service4/3.jpg';
import service4 from '../assets/service4/4.jpg';
import service5 from '../assets/service4/5.jpg';

// Draft: copy from the design.
export default {
  type: 'service',
  slug: 'servicios-ambientales-integrados',
  title: 'Servicios ambientales integrados',
  h1: 'Servicios ambientales\n~integrados~',
  metaTitle: 'Servicios ambientales integrados · SylvaHábitat',
  metaDescription:
    'Evaluación de impacto ambiental, certificación ISO 9001 y 14001, cálculo de huella de carbono y estudios de integración paisajística.',
  image: { src: hero, alt: '' },
  summary: 'Estudios de impacto ambiental, integración paisajística y asistencia técnica ambiental para proyectos públicos y privados.',
  intro: '_Transformando desafíos ambientales en oportunidades sostenibles._',
  blocks: [
    {
      type: 'info',
      nav: 'Gestión ambiental',
      title: 'Soluciones integrales de _~gestión ambiental~_.',
      text1: '_Nuestro servicio se centra en proporcionar soluciones integrales de gestión ambiental._',
      text2:
        'Abordamos desde la evaluación de impacto ambiental hasta la certificación conforme a normativas ISO 9001 y 14001, el cálculo de huella de carbono y estudios de integración paisajística. Con un enfoque proactivo y orientado hacia la sostenibilidad, trabajamos en estrecha colaboración con nuestros clientes para identificar riesgos, implementar medidas de mitigación y promover prácticas responsables.\n\nNuestra fortaleza radica en la capacidad para desarrollar estrategias personalizadas que se adaptan a las necesidades específicas de cada cliente, garantizando resultados efectivos y sostenibles a largo plazo.',
      image: { src: info, alt: '' },
    },
    {
      type: 'gallery',
      nav: 'Servicios',
      title: '_Nuestros servicios ambientales integrados._',
      text: 'De la evaluación de impacto y la certificación al cálculo de huella de carbono y la integración paisajística.',
      images: [
        {
          src: service1,
          alt: '',
          title: 'Evaluación de impacto ambiental',
          text: 'Desarrollamos estudios de impacto ambiental para proyectos de cualquier escala, priorizando prácticas sostenibles e innovadoras. Ofrecemos desde evaluaciones para proyectos pequeños hasta grandes actuaciones, incluyendo asesoramiento en evaluaciones ambientales estratégicas para entidades públicas y privadas. Nuestro enfoque integral garantiza una ejecución responsable y respetuosa con el medio ambiente.',
        },
        {
          src: service2,
          alt: '',
          title: 'Sistemas de gestión de la calidad y gestión ambiental',
          text: 'Te ayudamos a conseguir tus certificados en ISO 9001 e ISO 14001 para dar un valor añadido a tu empresa o proyecto. Para ello, nos aseguramos de que cumplas con la normativa vigente y que alcances los estándares exigidos a través de la identificación de los posibles riesgos ambientales de tu actividad y de las medidas adecuadas para solucionarlos. Además, te apoyaremos durante el proceso de documentación y tramitación necesario.',
        },
        {
          src: service3,
          alt: '',
          title: 'Cálculo de la huella de carbono y absorciones de CO₂',
          text: 'En un mundo tan concienciado con el nivel de CO₂ atmosférico, intentamos colaborar con aquellas empresas o particulares interesados mediante la elaboración de análisis de su huella de carbono. Del mismo modo te podemos ayudar si estás interesado en conocer las cantidades de CO₂ que es capaz de absorber tu plantación forestal presente o futura. Además, ofrecemos el asesoramiento durante el proceso de inscripción como proyecto de absorción de CO₂ en el Registro Nacional.',
        },
        {
          src: service4,
          alt: '',
          title: 'Estudios de integración paisajística',
          text: 'Elaboramos estudios de integración paisajística para asegurar que sus proyectos se armonicen con el entorno, mejorando la estética y minimizando el impacto ambiental. Nuestra experiencia como consultoría en este campo garantiza la creación de propuestas más sostenibles y el adecuado ajuste a todas las normativas vigentes en cada caso particular.',
        },
        {
          src: service5,
          alt: '',
          title: 'Estudios e informes en la materia',
          text: 'Disponemos de un equipo multidisciplinar y una serie de colaboradores capaces de plantear diferentes soluciones, aportando sus conocimientos desde diferentes disciplinas y puntos de vista. Contamos con expertos en ingeniería forestal, medio ambiente, geografía, arqueología y otros, capaces de redactar una gran variedad de informes preliminares como inventarios forestales, informes sobre la calidad del medio, informes arqueológicos, etc. que pueden servir como diagnóstico de su actividad y de apoyo en diferentes procesos administrativos.',
        },
      ],
    },
  ],
} satisfies ServicePage;
