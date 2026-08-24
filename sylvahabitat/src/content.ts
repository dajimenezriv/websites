import type { SiteData } from '@websites/template/types';
import project1 from './assets/1.jpeg';
import project2 from './assets/2.jpeg';
import project3 from './assets/3.jpg';
import project4 from './assets/4.png';
import project5 from './assets/5.jpg';
import project6 from './assets/6.jpg';
import project7 from './assets/7.jpg';
import project8 from './assets/8.jpg';
import project9 from './assets/9.jpg';
import project10 from './assets/10.jpg';
import logoBenifairo from './assets/clients/ayuntament-benifairó-de-les-valls.png';
import logoEstivella from "./assets/clients/ayuntament-d'estivella.png";
import logoNaquera from './assets/clients/ayuntament-de-nàquera.png';
import logoSoriguera from './assets/clients/ayuntament-de-soriguera.png';
import logoTuris from './assets/clients/ayuntament-de-turís.png';
import logoLandete from './assets/clients/ayuntamiento de landete.png';
import logoAlmodovar from './assets/clients/ayuntamiento-de-almodóvar-del-campo.png';
import logoAlustante from './assets/clients/ayuntamiento-de-alustante.png';
import logoArges from './assets/clients/ayuntamiento-de-argés.png';
import logoBoniches from './assets/clients/ayuntamiento-de-boniches.png';
import logoBurgos from './assets/clients/ayuntamiento-de-burgos.png';
import logoDosAguas from './assets/clients/ayuntamiento-de-dos-aguas.png';
import logoGodelleta from './assets/clients/ayuntamiento-de-godelleta.png';
import logoHenarejos from './assets/clients/ayuntamiento-de-henarejos.png';
import logoLaLlosa from './assets/clients/ayuntamiento-de-la-llosa.png';
import logoLaYesa from './assets/clients/ayuntamiento-de-la-yesa.png';
import logoLosaDelObispo from './assets/clients/ayuntamiento-de-losa-del-obispo.png';
import logoSanMartin from './assets/clients/ayuntamiento-de-san-martín-de-boniches.png';
import logoTeresaCofrentes from './assets/clients/ayuntamiento-de-teresa-de-cofrentes.png';
import logoElCasar from './assets/clients/ayuntamiento-el-casar.png';
import logoBizkaia from './assets/clients/bizkaia.png';
import logoEdigma from './assets/clients/edigma-ingenieria.png';
import logoCastilloPajaroncillo from './assets/clients/el-castillo-de-pajaroncillo.png';
import logoGirsa from './assets/clients/girsa.png';
import logoMancomunidadTierrasAltas from './assets/clients/mancomunidad-de-tierras-altas.png';
import logoTierrasAltas from './assets/clients/tierras-altas.png';
import cta1 from './assets/cta1.avif';
import cta2 from './assets/cta2.avif';
import hero from './assets/hero.jpg';
import info from './assets/info.png';
import logo from './assets/logo.png';
import dossier from './assets/sylvahabitat.pdf';
import equipo from './equipo';
import comunicacionMarca from './services/comunicacion-y-desarrollo-de-marca';
import educacionAmbiental from './services/educacion-y-divulgacion-ambiental';
import patrimonioArqueologico from './services/gestion-de-patrimonio-arqueologico';
import ingenieriaForestal from './services/ingenieria-forestal-y-del-medio-natural';
import proteccionCivil from './services/planes-de-proteccion-civil';
import participacionCiudadana from './services/procesos-de-participacion-ciudadana';
import serviciosIntegrados from './services/servicios-ambientales-integrados';
import turismePlus from './services/turisme-plus';

export const content: SiteData = {
  domain: 'https://www.sylvahabitat.com',
  styles: {
    background: '#f3f7ef',
    foreground: '#1a2b18',
    primary: '#4a9e2f',
    'primary-foreground': '#ffffff',
    secondary: '#e3efdb',
    'secondary-foreground': '#2c5220',
    muted: '#eaf2e3',
    'muted-foreground': '#6c8a60',
    accent: '#e3efdb',
    'accent-foreground': '#1c3315',
    border: 'black',
    ring: '#4a9e2f',
  },
  blocks: {
    name: 'SylvaHábitat',
    address: 'C/ El Clavel, 12, 16512 Henarejos, Cuenca',
    phone: '615255967',
    email: 'info@sylvahabitat.com',
    metaTitle: 'SylvaHábitat · Consultoría ambiental y forestal',
    metaDescription:
      'Consultora ambiental con sede en Henarejos (Cuenca). Redacción de proyectos, asistencia técnica y soluciones ambientales para organizaciones públicas y privadas.',
    faviconUrl: '/favicon.jpg',
    nav: {
      image: { alt: 'Logo', src: logo },
      cta: { text: 'Contacto', link: 'tel:615255967' },
    },
    footer: {
      description: 'Exploramos el medio ambiente para lograr un mundo de recursos y oportunidades.',
      links: [
        { label: 'Instagram', url: '#' },
        { label: 'LinkedIn', url: '#' },
      ],
    },
    legal: {
      companyName: 'SylvaHábitat 2000, S.L.P.',
      taxId: '',
      email: 'info@sylvahabitat.com',
    },
    homepage: {
      hero: {
        title: 'Exploramos el medio ambiente para lograr un mundo de _~recursos y oportunidades~_',
        text: '_Una solución integral para la administración y una gestión sostenible de los bosques, con nuestros servicios de gestión y consultoría forestal._',
        cta: { text: 'Contáctanos', link: 'tel:615255967' },
        image: { src: hero, alt: '' },
      },
      blocks: [
        {
          type: 'info',
          nav: 'Consultora ambiental',
          title: 'Innovación y compromiso con la _~sostenibilidad~_.',
          text1:
            '_SylvaHábitat 2000 SLP es una consultora ambiental con sede en Henarejos, Cuenca. Nos especializamos en la redacción de proyectos, asistencia técnica, consultoría e implementación de soluciones ambientales para organizaciones tanto públicas como privadas._',
          text2:
            'Contamos con un equipo multidisciplinar y altamente experimentado, comprometido con la sostenibilidad y la protección del medioambiente.\n\nNuestro enfoque innovador y profesional nos permite abordar cada proyecto con total garantía, asegurando resultados que promuevan un desarrollo _~sostenible y respetuoso~_ con el entorno natural.',
          image: { src: info, alt: '' },
          imageFit: 'contain',
        },
        {
          type: 'cta',
          title: '_~SylvaHábitat~_, innovación y sostenibilidad en acción.',
          text: '_Conoce en detalle nuestra experiencia, servicios y proyectos._',
          cta: { text: 'Descarga nuestro Dossier Empresarial', link: dossier, newTab: true },
          image: { src: cta1, alt: '' },
        },
        {
          type: 'services',
          nav: 'Servicios',
          title: '_Qué hacemos._',
          text: 'Soluciones ambientales integrales para administraciones y organizaciones públicas y privadas.',
        },
        {
          type: 'gallery',
          nav: 'Proyectos',
          title: '_Proyectos._',
          text: 'Una muestra de los trabajos que hemos desarrollado para administraciones y entidades de todo el territorio.',
          images: [
            {
              src: project1,
              alt: '',
              text: 'Plan de actuación municipal frente al riesgo de incendios forestales (PAM IF), inundaciones (PAM IN) y riesgo sísmico (PAM SIS)',
            },
            {
              src: project2,
              alt: '',
              text: 'Plan local de prevención de incendios forestales del término municipal de Dos Aguas (Valencia)',
            },
            {
              src: project3,
              alt: '',
              text: 'Homologación del PR-CV 470 "Senda de la Cruz y Abrigo de Tarragón" a su paso por el término municipal de Losa del Obispo',
            },
            {
              src: project4,
              alt: '',
              text: 'Estudio de impacto ambiental de la construcción de un tramo de la LAMT 20 kV Almaraz subestación Pipacex, en el T.M. de Níjar (Almería)',
            },
            {
              src: project5,
              alt: '',
              text: 'Estudio de integración paisajística del paraje natural municipal Piedra del Mechero en el término municipal de Godelleta (Valencia)',
            },
            { src: project6, alt: '', text: 'Seguimiento de plan de empleo del término municipal de Benifairó de les Valls (Valencia)' },
            {
              src: project7,
              alt: '',
              text: 'Proyecto de ejecución de actuaciones en riberas de los espacios fluviales del término municipal de Estivella (Valencia)',
            },
            {
              src: project8,
              alt: '',
              text: 'Declaración del paraje natural municipal "Carència - Serra del Castellet" en el T.M. de Turís (Valencia)',
            },
            { src: project9, alt: '', text: 'Programa de educación ambiental: búsqueda de tesoros en el cinturón verde de Burjassot' },
            {
              src: project10,
              alt: '',
              text: 'Plan de autoprotección frente a incendios forestales del campamento "El Encinar Wamba" en el término municipal de Alustante (Guadalajara)',
            },
          ],
        },
        {
          type: 'clients',
          nav: 'Clientes',
          title: 'Algunos de nuestros _~clientes~_.',
          logos: [
            { src: logoAlustante, alt: 'Ayuntamiento de Alustante' },
            { src: logoTierrasAltas, alt: 'Comarca de Tierras Altas' },
            { src: logoMancomunidadTierrasAltas, alt: 'Mancomunidad de Tierras Altas' },
            { src: logoEstivella, alt: "Ajuntament d'Estivella" },
            { src: logoTuris, alt: 'Ajuntament de Turís' },
            { src: logoNaquera, alt: 'Ajuntament de Nàquera' },
            { src: logoSoriguera, alt: 'Ajuntament de Soriguera' },
            { src: logoBenifairo, alt: 'Ajuntament de Benifairó de les Valls' },
            { src: logoLaYesa, alt: 'Ayuntamiento de La Yesa' },
            { src: logoArges, alt: 'Ayuntamiento de Argés' },
            { src: logoAlmodovar, alt: 'Ayuntamiento de Almodóvar del Campo' },
            { src: logoBoniches, alt: 'Ayuntamiento de Boniches' },
            { src: logoSanMartin, alt: 'Ayuntamiento de San Martín de Boniches' },
            { src: logoBurgos, alt: 'Ayuntamiento de Burgos' },
            { src: logoDosAguas, alt: 'Ayuntamiento de Dos Aguas' },
            { src: logoGodelleta, alt: 'Ayuntamiento de Godelleta' },
            { src: logoHenarejos, alt: 'Ayuntamiento de Henarejos' },
            { src: logoLaLlosa, alt: 'Ayuntamiento de La Llosa' },
            { src: logoLandete, alt: 'Ayuntamiento de Landete' },
            { src: logoLosaDelObispo, alt: 'Ayuntamiento de Losa del Obispo' },
            { src: logoTeresaCofrentes, alt: 'Ayuntamiento de Teresa de Cofrentes' },
            { src: logoElCasar, alt: 'Ayuntamiento de El Casar' },
            { src: logoBizkaia, alt: 'Diputación Foral de Bizkaia' },
            { src: logoCastilloPajaroncillo, alt: 'El Castillo de Pajaroncillo' },
            { src: logoEdigma, alt: 'Edigma Ingeniería' },
            { src: logoGirsa, alt: 'Girsa' },
          ],
        },
        {
          type: 'location',
          nav: 'Visítanos',
          title: 'Estamos en _~Henarejos~_.',
          details: [{ label: 'Email', value: 'info@sylvahabitat.com' }],
          schedule: [
            { label: 'Lunes — Viernes', value: '9:00 — 18:00' },
            { label: 'Sábado', value: 'Cerrado' },
            { label: 'Domingo', value: 'Cerrado' },
          ],
          mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.4444259570605!2d-1.4858777!3d39.8642819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x61624b6d01d2e573%3A0x7dfe0e9a341df34d!2sSylvaH%C3%A1bitat!5e0!3m2!1ses!2ses!4v1784886285282!5m2!1ses!2ses',
          cta: { text: 'Contáctanos', link: 'tel:615255967' },
        },
        {
          type: 'cta',
          title: '¿Quieres _~trabajar con nosotros~_?',
          text: '_Envíanos tu candidatura y súmate a un equipo multidisciplinar comprometido con el medioambiente._',
          cta: { text: 'Envía tu CV', link: 'mailto:info@sylvahabitat.com' },
          image: { src: cta2, alt: '' },
        },
      ],
    },
    groups: [
      {
        title: 'Servicios',
        pages: [
          ingenieriaForestal,
          proteccionCivil,
          educacionAmbiental,
          serviciosIntegrados,
          comunicacionMarca,
          patrimonioArqueologico,
          participacionCiudadana,
        ],
      },
      {
        title: 'Innovación',
        pages: [turismePlus],
      },
    ],
    pages: [equipo],
  },
};
