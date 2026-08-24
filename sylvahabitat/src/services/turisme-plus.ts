import type { ServicePage } from '@websites/template/types';
import hero from '../assets/turisme/hero.jpg';
import info from '../assets/turisme/info.jpg';
import ecotour1 from '../assets/turisme/1.jpeg';
import ecotour2 from '../assets/turisme/2.jpeg';
import ecotour3 from '../assets/turisme/3.png';
import ecotour4 from '../assets/turisme/4.jpeg';
import partner1 from '../assets/turisme/partner1.png';
import partner2 from '../assets/turisme/partner2.png';
import partner3 from '../assets/turisme/partner3.png';

// Draft: copy from the design. The "Videos del Ecotour Challenge" section is pending embed URLs.
export default {
  type: 'service',
  slug: 'turisme-plus',
  title: 'Turisme+',
  h1: '~Turisme+~',
  metaTitle: 'Turisme+ · SylvaHábitat',
  metaDescription:
    'Turisme+ enriquece el turismo rural y natural mediante la tecnología y la educación ambiental, promoviendo la economía local y el respeto por el entorno.',
  image: { src: hero, alt: '' },
  summary: 'Servicio innovador que combina tecnología, gamificación y educación ambiental para un turismo rural más sostenible.',
  intro:
    '_Enriquece el turismo rural y natural mediante la tecnología y la educación ambiental, promoviendo la economía local y el respeto por el entorno._',
  blocks: [
    {
      type: 'info',
      nav: 'Innovación',
      title: 'Tecnología y _~educación ambiental~_ para el turismo rural.',
      text1:
        '_Turisme+ es un servicio innovador diseñado para mejorar las experiencias de turismo rural y natural, combinando tecnología y educación ambiental para fomentar la valoración y el respeto por el entorno mientras se apoya a las economías locales._',
      text2:
        'Este proyecto integra puntos de colección con códigos QR en diversas actividades turísticas, como rutas de senderismo, catas de vinos y visitas guiadas. Al escanear estos códigos con sus dispositivos móviles, los turistas obtienen cromos digitales que representan diferentes especies locales, proporcionando información educativa sobre ellas.\n\nLos cromos digitales pueden ser canjeados por premios en negocios locales, como restaurantes y tiendas, incentivando a los visitantes a gastar en la zona y promoviendo la economía circular. Además, Turisme+ utiliza elementos de gamificación para hacer las actividades más divertidas y motivadoras, manteniendo el interés de los turistas al permitirles completar colecciones de cromos y ganar premios.\n\nEste proyecto innovador se presentó al programa de aceleración de start up de Ecotour Challenge 2022, del cual resultamos ganadores junto con otros dos equipos. El Ecotour Challenge es una iniciativa que nace con el objetivo de concienciar a la población sobre la importancia de proteger nuestro patrimonio natural y de ofrecer soluciones viables y efectivas, aplicables en territorio catalán y extrapolables a nivel global.',
      image: { src: info, alt: 'Tito el Tritón, la mascota de Turisme+' },
    },
    {
      type: 'gallery',
      nav: 'Ecotour Challenge',
      title: '_Ecotour._',
      text: 'Equipo ganador del programa de aceleración Ecotour Challenge 2022.',
      images: [
        { src: ecotour1, alt: '' },
        { src: ecotour2, alt: '' },
        { src: ecotour3, alt: '' },
        { src: ecotour4, alt: '' },
      ],
    },
    {
      type: 'videos',
      nav: 'Ecotour Challenge',
      title: '_Vídeos del Ecotour Challenge._',
      videos: [
        'https://vimeo.com/798342368',
        'https://vimeo.com/813328467',
        'https://vimeo.com/813328428',
        'https://vimeo.com/813328428',
      ],
    },
    {
      type: 'clients',
      nav: 'Colaboradores',
      title: '_Con el apoyo de._',
      logos: [
        { src: partner1, alt: 'National Geographic' },
        { src: partner2, alt: 'Generalitat de Catalunya · Agència Catalana de Turisme' },
        { src: partner3, alt: 'Generalitat de Catalunya' },
      ],
    },
  ],
} satisfies ServicePage;
