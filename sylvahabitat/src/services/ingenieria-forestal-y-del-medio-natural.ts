import type { ServicePage } from '@websites/template/types';
import service1 from '../assets/service1/1.jpg';
import service2 from '../assets/service1/2.jpeg';
import service3 from '../assets/service1/3.jpg';
import service4 from '../assets/service1/4.jpg';
import service5 from '../assets/service1/5.jpg';
import service6 from '../assets/service1/6.jpg';
import service7 from '../assets/service1/7.jpg';
import service8 from '../assets/service1/8.jpg';
import service9 from '../assets/service1/9.jpg';
import service10 from '../assets/service1/10.jpg';
import service11 from '../assets/service1/11.jpg';
import service12 from '../assets/service1/12.jpg';
import service13 from '../assets/service1/13.jpg';
import service14 from '../assets/service1/14.jpg';
import service15 from '../assets/service1/15.jpg';
import service16 from '../assets/service1/16.jpg';
import hero from '../assets/service1/hero.jpg';
import info from '../assets/service1/info.jpg';

// Draft: title/summary from the landing; full copy pending the real service page.
export default {
  type: 'service',
  slug: 'ingenieria-forestal-y-del-medio-natural',
  title: 'Ingeniería forestal y del medio natural',
  h1: 'Ingeniería forestal\ny del ~medio natural~',
  metaTitle: 'Ingeniería forestal y del medio natural · SylvaHábitat',
  metaDescription:
    'Proyectos y dirección de obra en el medio forestal: tratamientos selvícolas, restauración e infraestructuras del medio natural.',
  image: { src: hero, alt: '' },
  summary:
    'Proyectos y dirección de obra en el medio forestal: tratamientos selvícolas, restauración e infraestructuras del medio natural.',
  intro: '_Clave para la conservación y gestión sostenible de recursos naturales._',
  // Page sections. Images reuse the placeholder until the real assets land.
  blocks: [
    {
      type: 'info',
      nav: 'Ingeniería forestal',
      title: 'Clave para la conservación y gestión _~sostenible~_.',
      text1:
        '_La ingeniería forestal y del medio natural es esencial para la conservación y gestión sostenible de nuestros recursos naturales._',
      text2:
        'Nos especializamos en la ejecución de proyectos, obras y servicios enfocados en la gestión sostenible, la conservación, la restauración y la planificación de recursos naturales y forestales.\n\nNuestro ámbito de actuación va desde el nivel nacional hasta el internacional. Ya sea que necesite asistencia en proyectos locales o en iniciativas globales, SylvaHábitat está preparado para ofrecer soluciones adaptadas a sus necesidades específicas.',
      image: { src: info, alt: '' },
    },
    {
      type: 'gallery',
      nav: 'Servicios',
      title: '_Nuestros servicios de ingeniería forestal y del medio natural._',
      text: 'Un equipo técnico para todo el ciclo del proyecto forestal: planificación, ejecución, certificación y peritaje.',
      images: [
        {
          src: service1,
          alt: '',
          title: 'Ordenación de montes y procesado de datos LIDAR',
          text: 'Planificación y gestión sostenible de los recursos forestales, integrando el uso de tecnologías avanzadas en el procesamiento de datos LIDAR. Nuestro equipo experto asegura la conservación y productividad a largo plazo de los montes.',
        },
        {
          src: service2,
          alt: '',
          title: 'Planes de prevención de incendios forestales',
          text: 'Elaboración de estrategias detalladas para mitigar riesgos y proteger los ecosistemas, disminuyendo la probabilidad de que se produzca un incendio y minimizando el peligro una vez producido.',
        },
        {
          src: service3,
          alt: '',
          title: 'Simulación de incendios forestales',
          text: 'Predecir y analizar el comportamiento del fuego en diversos escenarios, permitiendo a los gestores y responsables planificar y tomar las mejores decisiones para la prevención, control y mitigación de incendios.',
        },
        {
          src: service4,
          alt: '',
          title: 'Proyectos de restauración ambiental',
          text: 'Redacción de proyectos para rehabilitar ecosistemas degradados, promoviendo la recuperación de la biodiversidad y la funcionalidad natural. Utilizamos técnicas avanzadas y un enfoque sostenible para asegurar resultados efectivos y duraderos.',
        },
        {
          src: service5,
          alt: '',
          title: 'Planes técnicos de caza, silvopastorales, micológicos',
          text: 'Este servicio desarrolla estrategias sostenibles para la gestión de fauna, pastizales y recursos micológicos. Nuestro enfoque experto asegura la conservación y el uso responsable de estos recursos naturales.',
        },
        {
          src: service6,
          alt: '',
          title: 'Proyectos de repoblaciones forestales',
          text: 'Planificación promoviendo la biodiversidad y la sostenibilidad. Aplicamos métodos innovadores para asegurar el éxito y la resiliencia de las nuevas plantaciones.',
        },
        {
          src: service7,
          alt: '',
          title: 'Inventario de recursos naturales',
          text: 'La realización del inventario de recursos naturales es crucial para la gestión del medio ambiente, ya que permite evaluar la disponibilidad y el estado de los recursos, facilitando la toma de decisiones informadas para su conservación y uso responsable. Además, ayuda a identificar áreas de riesgo y oportunidades para el desarrollo económico sostenible.',
        },
        {
          src: service8,
          alt: '',
          title: 'Memorias y proyectos para la señalización de itinerarios, homologación de senderos',
          text: 'Garantizamos rutas que cumplen las normativas oficiales. Este servicio mejora la experiencia de los usuarios, fomenta el turismo sostenible y valoriza el entorno natural de la región.',
        },
        {
          src: service9,
          alt: '',
          title: 'Tramitación de subvenciones',
          text: 'Gestión de todo el proceso administrativo y técnico para asegurar que su proyecto obtenga el financiamiento necesario. Esto permite optimizar recursos y maximizar las oportunidades de éxito en sus iniciativas.',
        },
        {
          src: service10,
          alt: '',
          title: 'Dirección de obra y coordinación de seguridad y salud',
          text: 'Proveemos servicios de dirección de obra y coordinación de seguridad y salud en obras forestales, asegurando el cumplimiento de normativas y la protección de los trabajadores. Esto garantiza operaciones seguras y eficientes, minimizando riesgos y mejorando la productividad.',
        },
        {
          src: service11,
          alt: '',
          title: 'Certificación FSC y PEFC',
          text: 'Ofrecemos consultoría especializada para la certificación FSC y PEFC, ayudando a su empresa a cumplir con los estándares de sostenibilidad forestal reconocidos internacionalmente. Esto mejora su reputación y acceso a mercados exigentes en responsabilidad ambiental.',
        },
        {
          src: service12,
          alt: '',
          title: 'Deslindes y amojonamientos de montes y fincas agrícolas',
          text: 'Definimos y marcamos límites precisos de propiedades rurales y agrícolas, asegurando una correcta gestión del terreno y previniendo conflictos de propiedad.',
        },
        {
          src: service13,
          alt: '',
          title: 'Realización de cartografía temática',
          text: 'Elaboramos mapas especializados que destacan características específicas del terreno, proporcionando herramientas visuales precisas para el análisis y la toma de decisiones. Esto facilita la planificación y gestión eficiente de proyectos.',
        },
        {
          src: service14,
          alt: '',
          title: 'Cubicación y tasación de choperas',
          text: 'Determinamos el volumen y la calidad del total de madera disponible en una plantación de chopo.',
        },
        {
          src: service15,
          alt: '',
          title: 'Peritaje judicial',
          text: 'El peritaje judicial, crucial en emergencias, establece responsabilidades y evalúa daños mediante análisis técnico y científico, ofreciendo evidencia vital para procesos legales y mejorando la gestión de riesgos para proteger a la población y sus bienes.',
        },
        {
          src: service16,
          alt: '',
          title: 'Estudios de capacidad de acogida y uso público',
          text: 'Realizar proyectos sobre la capacidad de carga y uso público de espacios naturales es crucial para garantizar la sostenibilidad y preservación de estos entornos. Estos estudios ayudan a equilibrar la conservación ambiental con el disfrute público, evitando el deterioro ecológico y mejorando la gestión de visitantes.',
        },
      ],
    },
  ],
} satisfies ServicePage;
