import type { ServicePage } from '@websites/template/types';
import gallery4 from '../assets/gallery4.jpeg';

export default {
  type: 'service',
  slug: 'restauracion-hidrologica',
  title: 'Restauración hidrológica',
  h1: 'Restauración\n~hidrológico-forestal~',
  metaTitle: 'Restauración hidrológico-forestal y control de erosión · Henaco',
  metaDescription:
    'Corrección de cárcavas, diques, albarradas, hidrosiembra y repoblación forestal para frenar la erosión y regular la escorrentía. Trabajos en toda España.',
  image: { src: gallery4, alt: 'Plantación con protectores en una ladera restaurada' },
  intro:
    '_Frenamos la erosión y ordenamos el agua antes de que se lleve el suelo. Corrección de cárcavas y barrancos, obras de retención, repoblación y cubierta vegetal para estabilizar laderas y márgenes._',
  body: `## El problema empieza con el agua

Cuando una ladera pierde su cubierta vegetal —por un incendio, por sobrepastoreo o por abandono— el agua de lluvia deja de infiltrarse y empieza a correr. Arrastra el suelo fértil, abre regueros que se convierten en cárcavas y acaba colmatando lo que hay aguas abajo.

La restauración hidrológico-forestal trabaja sobre las dos causas: reducir la velocidad del agua y devolver a la ladera una cubierta que la sujete.

## Qué ejecutamos

- Corrección de cárcavas y regueros, con diques de mampostería, gaviones o madera.
- Albarradas y pequeños diques de retención en barrancos y vaguadas.
- Fajinas, empalizadas y barreras de restos vegetales para retener sedimento en ladera.
- Laboreo de preparación del terreno: subsolado, ahoyado y banquetas según pendiente.
- Repoblación forestal con especies autóctonas, con protector y tutor.
- Hidrosiembra y siembra de herbáceas para dar cubierta rápida al suelo desnudo.
- Estabilización de márgenes de cauces y taludes de pistas y caminos.

## Restauración tras incendio

Un monte recién quemado es el momento más crítico: sin cubierta y con el suelo alterado, las primeras lluvias fuertes pueden llevarse en unas horas el suelo de décadas. Actuamos con obras de emergencia —fajinas, albarradas y barreras con los propios restos quemados— y después con la repoblación, cuando el terreno está listo para recibirla.

## Trabajos para administraciones

Estos proyectos suelen venir de _~administraciones y confederaciones~_, con dirección facultativa y unidades de obra medidas. Trabajamos con esa forma de ejecutar: replanteo, partes de avance y certificación de lo ejecutado.

Se complementa bien con nuestros _~tratamientos selvícolas~_, porque una masa bien tratada retiene mucho mejor el agua.

## Zona de trabajo

Cooperativa forestal con base en Henarejos (Cuenca). Trabajamos en toda España.`,
  cta: { text: 'Llámanos', link: 'tel:722269709' },
} satisfies ServicePage;
