import type { SiteData } from '@websites/template/types';
import cta from './assets/cta.jpg';
import gallery1 from './assets/gallery1.jpeg';
import gallery2 from './assets/gallery2.jpeg';
import gallery3 from './assets/gallery3.jpeg';
import gallery4 from './assets/gallery4.jpeg';
import hero from './assets/hero.webp';
import info from './assets/info.jpeg';
import cortafuegos from './services/cortafuegos-franjas-auxiliares';
import limpiezaParcelas from './services/limpieza-de-parcelas';
import podaTala from './services/poda-y-tala';
import restauracionHidrologica from './services/restauracion-hidrologica';
import senalizacionSendas from './services/senalizacion-adecuacion-sendas';
import jardineria from './services/servicios-de-jardineria';
import tratamientosSelvicolas from './services/tratamientos-selvicolas';

export const content: SiteData = {
  domain: 'https://www.henaco.es',
  styles: {
    background: '#262624',
    foreground: '#c3c0b6',
    primary: '#d97757',
    'primary-foreground': '#ffffff',
    secondary: '#30302e',
    'secondary-foreground': '#faf9f5',
    muted: '#1b1b19',
    'muted-foreground': '#b7b5a9',
    accent: '#1a1915',
    'accent-foreground': '#f5f4ee',
    border: '#3e3e38',
    ring: '#d97757',
  },
  blocks: {
    nav: {
      cta: { text: 'Llámanos', link: 'tel:722269709' },
    },
    name: 'Henaco',
    groups: [
      {
        title: 'Servicios',
        pages: [tratamientosSelvicolas, senalizacionSendas, cortafuegos, podaTala, restauracionHidrologica, limpiezaParcelas, jardineria],
      },
    ],
    phone: '722269709',
    email: 'sclhenaco1@gmail.com',
    footer: {
      links: [{ url: 'https://www.instagram.com/henacocoop/', label: 'Instagram' }],
      description:
        '🌲 Expertos en tratamientos selvícolas y gestión sostenible de montes.\n🔥 Prevención de incendios | 🌳 Repoblación forestal | ✂️ Poda y clareos 🚜',
    },
    address: 'Calle Sta Ana, 35, 16312 Henarejos, Cuenca',
    faviconUrl: '/favicon.jpeg',
    legal: {
      companyName: 'Henaco, S. Coop. Ltda. de C-LM',
      taxId: 'F16130775',
      email: 'sclhenaco1@gmail.com',
    },
    homepage: {
      hero: {
        text: '🌲 Expertos en tratamientos selvícolas y gestión sostenible de montes.\n🔥 Prevención de incendios | 🌳 Repoblación forestal | ✂️ Poda y clareos 🚜',
        title: 'Tratamientos selvícolas y\ngestión de montes,\n~Henaco~',
        image: { src: hero, alt: 'Hero' },
      },
      blocks: [
        {
          type: 'stats',
          stats: [
            { label: 'Años de experiencia', value: '+5' },
            { label: 'Proyectos ejecutados', value: '+20' },
            { label: 'Respuesta a inicidencias', value: '24/48h' },
          ],
        },
        {
          nav: 'Quiénes somos',
          type: 'info',
          text1:
            '_Somos una cooperativa forestal con base en Henarejos, Cuenca. Trabajamos el monte de cerca: tratamientos selvícolas, prevención de incendios, restauración hidrológica y adecuación de sendas para ayuntamientos, administraciones y propietarios particulares de toda España._',
          text2:
            'Cada monte pide una intervención distinta. Antes de entrar a trabajar visitamos la parcela, valoramos el estado de la masa forestal y proponemos el tratamiento que de verdad necesita: clareos, claras, podas de formación o desbroces selectivos.\n\nBuena parte de nuestro trabajo es _~prevención de incendios~_: apertura y mantenimiento de cortafuegos, franjas auxiliares en pistas y limpieza de parcelas para reducir la carga de combustible antes de que llegue el verano.\n\nTambién nos ocupamos de lo que hace el monte accesible y duradero: _~señalización y adecuación de sendas~_, _~restauración hidrológica~_ para frenar la erosión y trabajos de poda, tala y jardinería. Somos equipo propio, con maquinaria propia y plazos que cumplimos.',
          title: 'Expertos en _tratamientos selvícolas_ y _gestión sostenible_ de *montes*.',
          image: { src: info, alt: 'Info' },
        },
        {
          text: '_Cuéntanos qué necesita tu monte o tu parcela y lo valoramos sin compromiso.\nTrabajamos para ayuntamientos, administraciones y particulares._',
          type: 'cta',
          title: '_~El monte se cuida antes, no después.~_',
          cta: { text: 'Llámanos', link: 'tel:722269709' },
          image: { src: cta, alt: 'Mantenimiento monte.' },
        },
        {
          nav: 'Galería',
          text: '',
          type: 'gallery',
          title: 'Nuestros _~trabajos~_.',
          images: [
            { src: gallery1, alt: 'Cartel con información.' },
            { src: gallery2, alt: 'Poste con direcciones.' },
            { src: gallery3, alt: 'Árbol salvado.' },
            { src: gallery4, alt: 'Replantando árboles.' },
          ],
        },
        {
          nav: 'Visítanos',
          type: 'location',
          title: 'Estamos en _~Henarejos~_.',
          mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.4205432681456!2d-1.4874239875802153!3d39.86481697141501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd675db463e36bd3%3A0x913464376eea9dcd!2sCalle%20Sta%20Ana%2C%2035%2C%2016312%20Henarejos%2C%20Cuenca!5e0!3m2!1ses!2ses!4v1783161428214!5m2!1ses!2ses',
          cta: { text: 'Llámanos', link: 'tel:722269709' },
          details: [{ label: 'Instagram', value: '*@henacocoop*' }],
          schedule: [
            { label: 'Lunes — Viernes', value: '9:00 — 18:00' },
            { label: 'Sábado', value: 'Cerrado' },
            { label: 'Domingo', value: 'Cerrado' },
          ],
        },
      ],
    },
    metaTitle: 'Henaco · Servicios forestales · Desbroces y limpieza de parcelas',
    metaDescription:
      'Especialistas en trabajos forestales y tratamientos. Soluciones sostenibles para la conservación y gestión de montes, bosques y terrenos naturales.',
  },
};
