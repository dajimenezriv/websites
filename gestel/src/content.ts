import type { SiteData } from '@websites/template/types';
import conductosVentilacionTecho from './assets/conductos-ventilacion-techo.jpeg';
import cuadroElectricoGeneral from './assets/cuadro-electrico-general.jpeg';
import iluminacionEscalerasExterior from './assets/iluminacion-escaleras-exterior.jpeg';
import iluminacionOficinaRecepcion from './assets/iluminacion-oficina-recepcion.jpeg';
import iluminacionPatio from './assets/iluminacion-patio.jpeg';
import iluminacionPiscina from './assets/iluminacion-piscina.jpeg';
import iluminacionSalaReuniones3 from './assets/iluminacion-sala-reuniones-3.jpeg';
import iluminacionTerrazaPorche from './assets/iluminacion-terraza-porche.jpeg';
import instalacionFarolaVial from './assets/instalacion-farola-vial.jpeg';
import instalacionPlacasFotovoltaicas from './assets/instalacion-placas-fotovoltaicas.jpeg';
import logo from './assets/logo.png';
import naveGestelExterior from './assets/nave-gestel-exterior.jpeg';
import panelesParcheoRack from './assets/paneles-parcheo-rack.jpeg';
import centrosTransformacion from './services/centros-transformacion-media-tension';
import aerotermia from './services/instalaciones-aerotermia';
import climatizacion from './services/instalaciones-climatizacion';
import deteccionIncendios from './services/instalaciones-deteccion-incendios';
import bajaTension from './services/instalaciones-electricas';
import fontaneria from './services/instalaciones-fontaneria';
import gas from './services/instalaciones-gas';
import luminariasViales from './services/instalaciones-luminarias-viales';
import maquinariaIndustrial from './services/instalaciones-maquinaria-industrial';
import saneamiento from './services/instalaciones-saneamiento';
import telecomunicaciones from './services/instalaciones-telecomunicaciones-voz-datos';
import ventilacion from './services/instalaciones-ventilacion';

export const content: SiteData = {
  domain: 'https://www.gestelsl.es',
  styles: {
    background: '#f0f4f9',
    foreground: '#1e3a52',
    primary: '#31639f',
    'primary-foreground': '#ffffff',
    secondary: '#dce8f5',
    'secondary-foreground': '#2d5280',
    muted: '#e4edf7',
    'muted-foreground': '#6d8aa8',
    accent: '#dce8f5',
    'accent-foreground': '#1a3048',
    border: '#c4d5e8',
    ring: '#31639f',
  },
  blocks: {
    name: 'Gestel',
    address: 'Polígono la Basala, 5, 12004 Castellón de la Plana, Castellón',
    phone: '964215711',
    email: 'admon.gestel@gmail.com',
    metaTitle: 'Gestel · Instalaciones eléctricas en Castellón',
    metaDescription:
      'Diseñamos, ejecutamos y mantenemos instalaciones eléctricas, de telecomunicaciones y de climatización para empresas, industria y obra nueva.',
    faviconUrl: '/favicon.png',
    nav: {
      image: { src: logo, alt: 'Logo' },
      cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
    },
    footer: {
      description:
        'Instalaciones eléctricas, telecomunicaciones, climatización y mantenimiento para empresas, industria y particulares. Proyectos llave en mano con más de 20 años de experiencia.',
      links: [
        { label: 'Pide presupuesto', url: 'tel:964215711' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/company/gestel' },
      ],
    },
    legal: {
      companyName: 'Gestel 2011, S.L.',
      taxId: 'B12366712',
      email: 'admon.gestel@gmail.com',
    },
    homepage: {
      hero: {
        title: 'Instalaciones eléctricas\nen Castellón,\n~Gestel~',
        text: '_Diseñamos, ejecutamos y mantenemos instalaciones eléctricas, de telecomunicaciones y de climatización para empresas, industria y obra nueva._',
        cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
        image: { src: iluminacionOficinaRecepcion, alt: 'Recepción de oficinas a doble altura con iluminación LED integrada' },
      },
      blocks: [
        {
          type: 'stats',
          stats: [
            { value: '+20', label: 'AÑOS DE EXPERIENCIA' },
            { value: '+500', label: 'PROYECTOS EJECUTADOS' },
            { value: '100%', label: 'INSTALADORES AUTORIZADOS' },
            { value: '24/48h', label: 'RESPUESTA A INCIDENCIAS' },
          ],
        },
        {
          type: 'info',
          nav: 'Quiénes somos',
          title: 'Soluciones integrales en instalaciones para _industria_, _empresa_ y _vivienda_.',
          text1:
            '_Somos especialistas en instalaciones eléctricas de baja tensión, telecomunicaciones, climatización y mantenimiento. Trabajamos tanto en el sector privado como en el público, con un equipo técnico propio y proyectos llave en mano._',
          text2:
            'Cada proyecto empieza con un estudio técnico riguroso: analizamos la viabilidad, proponemos la solución más eficiente y la ejecutamos cumpliendo plazos y normativa.\n\nNuestra apuesta por la _~eficiencia energética~_ nos permite reducir el consumo de tus instalaciones desde el diseño: autoconsumo solar, puntos de recarga para vehículo eléctrico e integración de sistemas de control.\n\nY cuando la obra termina, seguimos ahí. Ofrecemos _~mantenimiento preventivo y correctivo~_ para que tus instalaciones rindan al máximo durante toda su vida útil.',
          image: { src: naveGestelExterior, alt: 'Nave de Gestel en el Polígono la Basala con un vehículo de la empresa' },
        },
        {
          type: 'cta',
          title: '_~La fiabilidad no se improvisa, se instala.~_',
          text: '_Llámanos o pide tu presupuesto sin compromiso.\nUn solo interlocutor de principio a fin._',
          image: { src: iluminacionPiscina, alt: 'Piscina y jardín con iluminación exterior nocturna' },
        },
        {
          type: 'gallery',
          nav: 'Galería',
          title: '_Trabajos recientes._',
          text: '_Una muestra de instalaciones y reformas que hemos puesto en marcha para nuestros clientes._',
          images: [
            { src: cuadroElectricoGeneral, alt: 'Cuadro eléctrico general con protecciones modulares' },
            { src: instalacionPlacasFotovoltaicas, alt: 'Operario instalando placas fotovoltaicas en una cubierta' },
            { src: panelesParcheoRack, alt: 'Paneles de parcheo y cableado estructurado en rack de comunicaciones' },
            { src: conductosVentilacionTecho, alt: 'Conductos de ventilación instalados bajo un techo de madera' },
            { src: instalacionFarolaVial, alt: 'Instalación de una farola vial con camión grúa' },
            { src: iluminacionSalaReuniones3, alt: 'Sala de reuniones con luminarias lineales LED' },
            { src: iluminacionPatio, alt: 'Patio interior con proyectores de realce sobre la vegetación' },
            { src: iluminacionEscalerasExterior, alt: 'Escalera exterior con apliques y balizas empotradas' },
          ],
        },
        {
          type: 'services',
          nav: 'Servicios',
          title: 'Qué ofrecemos',
          text: 'Un solo equipo para todo el ciclo de tus instalaciones: diseño, ejecución, puesta en marcha y mantenimiento.',
        },
        {
          type: 'reviews',
          nav: 'Opiniones',
          title: 'La voz del _~cliente~_.',
          stats: [{ value: '3.9', label: 'Google · 16' }],
          reviews: [
            {
              text: '_Excelente servicio!! Buena gestión y el precio acorde a todo el trabajo realizado y al acordado! Nuestra tienda quedó genial!_',
              author: 'Eva Galiana',
              source: 'Google',
              url: 'https://maps.app.goo.gl/x8ydt7SHZvRiTgqv5',
            },
            {
              text: '_Muy buen servicio y todo como lo acordamos_',
              author: 'Laura Rodríguez Olmedo',
              source: 'Google',
              url: 'https://maps.app.goo.gl/JqHBUVLJYMiQBCyE8',
            },
            {
              text: '_Excelente servicio_',
              author: 'Sergio Mendez Albuixech',
              source: 'Google',
              url: 'https://maps.app.goo.gl/KntXKsKiPqqJiep18',
            },
          ],
        },
        {
          type: 'location',
          nav: 'Visítanos',
          title: 'Estamos en _~Castellón~_.',
          details: [],
          schedule: [
            {
              label: 'Lunes — Viernes',
              value: '10:00 — 14:00 · 16:00 — 20:00',
            },
            { label: 'Sábado', value: '10:00 — 14:00' },
            { label: 'Domingo', value: 'Cerrado' },
          ],
          mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.0625453688967!2d-0.04234628757501304!3d40.00705047138951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5fff560db3abdf%3A0x2a70674fd84b96b0!2sGESTEL%202011%2CS.L.!5e0!3m2!1ses!2ses!4v1781342006410!5m2!1ses!2ses',
          cta: { text: 'Pide presupuesto', link: 'tel:964215711' },
        },
        {
          type: 'cta',
          title: '_~Tu proyecto empieza con una llamada.~_',
          text: '_Cuéntanos qué necesitas y nuestro equipo técnico estudiará tu proyecto sin compromiso. Presupuesto claro, plazos reales._',
          cta: { text: 'Solicitar presupuesto →', link: 'tel:964215711' },
          image: { src: iluminacionTerrazaPorche, alt: 'Terraza cubierta con iluminación LED perimetral' },
        },
      ],
    },
    groups: [
      {
        title: 'Eléctrica',
        pages: [bajaTension, telecomunicaciones, deteccionIncendios, centrosTransformacion, maquinariaIndustrial, luminariasViales],
      },
      {
        title: 'Climatización',
        pages: [climatizacion, aerotermia, ventilacion],
      },
      {
        title: 'Fontanería',
        pages: [fontaneria, saneamiento, gas],
      },
    ],
  },
};
