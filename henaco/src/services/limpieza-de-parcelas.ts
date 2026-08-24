import type { ServicePage } from '@websites/template/types';
import gallery2 from '../assets/gallery2.jpeg';

export default {
  type: 'service',
  slug: 'limpieza-de-parcelas',
  title: 'Limpieza de parcelas',
  h1: 'Limpieza y desbroce\nde ~parcelas~',
  metaTitle: 'Limpieza y desbroce de parcelas · Henaco',
  metaDescription:
    'Desbroce y limpieza de parcelas, solares y fincas. Retirada de maleza y restos para cumplir la normativa municipal de prevención de incendios.',
  image: { src: gallery2, alt: 'Parcela desbrozada tras la limpieza' },
  intro:
    '_Desbrozamos y limpiamos parcelas, solares y fincas: maleza, matorral, rebrote y restos acumulados. Dejamos el terreno despejado, transitable y en regla con la normativa municipal de prevención de incendios._',
  body: `## Por qué hay que limpiar la parcela

Una parcela con la maleza alta es combustible esperando una chispa, y si está pegada a una vivienda o a un núcleo urbano el riesgo es directo. Además de la seguridad, muchos ayuntamientos exigen a los propietarios mantener sus terrenos limpios y pueden sancionar si no se hace.

También hay motivos más prosaicos: recuperar una finca abandonada, poder acceder a ella, prepararla para venderla o para volver a cultivarla.

## Qué incluye el trabajo

- Desbroce de maleza, matorral, zarza y pasto seco.
- Clareo de rebrote y de arbolado espontáneo cuando ha invadido la parcela.
- Poda baja del arbolado que se conserva, para cortar la continuidad con el suelo.
- Retirada de restos vegetales, con astillado o triturado in situ cuando interesa.
- Retirada de restos acumulados y limpieza general del terreno.
- Creación de accesos y caminos interiores si la parcela ha quedado incomunicada.

Adaptamos la maquinaria al terreno: desbrozadora manual en zonas con pendiente, arbolado o piedra, y maquinaria cuando la parcela lo permite.

## Parcelas junto a viviendas y núcleos urbanos

Es donde más urge. En la interfaz urbano-forestal trabajamos con cuidado con lo que hay alrededor —vallados, instalaciones, arbolado ornamental— y dejamos la franja de separación que corresponde entre la vegetación y las edificaciones.

Si lo que necesitas es la faja perimetral completa de un núcleo o una urbanización, mira _~cortafuegos y franjas auxiliares~_.

## Para quién trabajamos

Para _~ayuntamientos~_ con solares y parcelas municipales que mantener, y para _~particulares~_ con fincas, parcelas rústicas o terrenos heredados. Vamos a ver el terreno, lo valoramos y te pasamos precio cerrado.

## Zona de trabajo

Cooperativa forestal con base en Henarejos (Cuenca). Trabajamos en toda España.`,
  cta: { text: 'Llámanos', link: 'tel:722269709' },
} satisfies ServicePage;
