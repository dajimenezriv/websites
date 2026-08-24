import type { ServicePage } from '@websites/template/types';
import service1 from '../assets/service5/1.png';
import service2 from '../assets/service5/2.png';
import service3 from '../assets/service5/3.png';
import service4 from '../assets/service5/4.jpg';
import service5 from '../assets/service5/5.png';
import hero from '../assets/service5/hero.jpg';
import info from '../assets/service5/info.jpg';

// Draft: copy from the design. Card bullet lists use inline *bold* labels + line breaks.
export default {
  type: 'service',
  slug: 'comunicacion-y-desarrollo-de-marca',
  title: 'Comunicación y desarrollo de marca',
  h1: 'Comunicación y\n~desarrollo de marca~',
  metaTitle: 'Comunicación y desarrollo de marca · SylvaHábitat',
  metaDescription:
    'Consultoría de comunicación, identidad de marca, productos digitales y redes sociales para empresas del sector turístico, forestal y medioambiental.',
  image: { src: hero, alt: '' },
  summary: 'Estrategia de comunicación, identidad y difusión para proyectos y entidades del ámbito ambiental.',
  intro: '_Servicios de consultoría para la innovación y la comunicación de empresas del sector turístico, forestal y medioambiental._',
  blocks: [
    {
      type: 'info',
      nav: 'Comunicación',
      title: 'Fortalecemos y proyectamos la _~identidad~_ de su empresa.',
      text1:
        '_En SylvaHábitat ofrecemos una amplia gama de servicios especializados para fortalecer y proyectar la identidad de su empresa en sectores clave como el turismo, el ámbito forestal y el medioambiente._',
      text2:
        'Entendemos que cada empresa es única. Por eso diseñamos estrategias personalizadas que se alinean con sus valores y metas. Nos comprometemos a ofrecer soluciones integrales que impulsen la comunicación y el desarrollo de su marca, ayudándole a destacarse en un mercado competitivo y en constante evolución.\n\nOfrecemos consultoría de marca, donde analizamos y diagnosticamos la identidad de su marca, definiendo o refinando su propuesta de valor. También desarrollamos estrategias de posicionamiento en el mercado. En la estrategia de comunicación, elaboramos planes de comunicación integrales, creamos contenidos relevantes y atractivos, y gestionamos relaciones públicas y comunicación corporativa.',
      image: { src: info, alt: '' },
    },
    {
      type: 'gallery',
      nav: 'Servicios',
      title: '_Nuestros servicios de comunicación y desarrollo de marca._',
      text: 'De la estrategia de marketing y la identidad de marca a los productos digitales, las redes sociales y los webinars.',
      images: [
        {
          src: service1,
          alt: '',
          title: 'Desarrollo y gestión de la comunicación y el marketing empresarial',
          text: 'Implementamos estrategias de comunicación y marketing personalizadas, diseñadas para maximizar su presencia en el mercado y atraer a su público objetivo. Nuestros servicios incluyen:\n\n— *Análisis de mercado y audiencia:* identificación de oportunidades y comprensión profunda del público objetivo.\n— *Desarrollo de estrategias de contenido:* creación de planes de contenido alineados con los objetivos de su empresa.\n— *Campañas publicitarias:* diseño y ejecución de campañas publicitarias en medios digitales y tradicionales.',
        },
        {
          src: service2,
          alt: '',
          title: 'Diseño de identidad de marca',
          text: 'Creamos y refinamos la identidad de su marca a través del diseño de logotipos y elementos gráficos que reflejan su visión y misión corporativa, asegurando una imagen coherente y memorable. Nuestros servicios incluyen:\n\n— *Diseño de logotipo:* creación de logotipos únicos y significativos.\n— *Desarrollo de manuales de marca:* documentación detallada de la identidad visual de su marca.\n— *Creación de material corporativo:* papelería, tarjetas de visita y otros elementos de branding.',
        },
        {
          src: service3,
          alt: '',
          title: 'Diseño y desarrollo de productos digitales corporativos',
          text: 'Desarrollamos productos digitales como presentaciones y folletos digitales que comunican eficazmente los valores y servicios de su empresa, contribuyendo a una presencia profesional y atractiva. Nuestros servicios incluyen:\n\n— *Diseño de presentaciones corporativas:* presentaciones impactantes y profesionales.\n— *Creación de folletos y catálogos digitales:* materiales informativos y promocionales de alta calidad.\n— *Desarrollo de newsletters:* boletines electrónicos que mantienen a su audiencia informada y comprometida.',
        },
        {
          src: service4,
          alt: '',
          title: 'Gestión y desarrollo de redes sociales',
          text: 'Planificamos, gestionamos y optimizamos sus redes sociales para aumentar la visibilidad y el compromiso de su marca con su audiencia, utilizando contenido relevante y estrategias efectivas. Nuestros servicios incluyen:\n\n— *Gestión de perfiles sociales:* administración diaria de sus cuentas de redes sociales.\n— *Desarrollo de contenido social:* creación de publicaciones atractivas y visuales.\n— *Análisis y reporte:* monitoreo de rendimiento y ajuste de estrategias basados en datos.',
        },
        {
          src: service5,
          alt: '',
          title: 'Creación de webinars',
          text: 'Organizamos y producimos webinars profesionales para difundir conocimientos, interactuar con su audiencia y fortalecer su posición como líder del sector. Nuestros servicios incluyen:\n\n— *Planificación de contenido:* desarrollo de temas y agendas relevantes.\n— *Gestión técnica:* configuración y gestión de plataformas de webinar.\n— *Promoción y seguimiento:* marketing previo y post-evento para maximizar la participación y el impacto.',
        },
      ],
    },
  ],
} satisfies ServicePage;
