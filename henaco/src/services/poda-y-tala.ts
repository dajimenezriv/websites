import type { ServicePage } from '@websites/template/types';
import cta from '../assets/cta.jpg';

export default {
  type: 'service',
  slug: 'poda-y-tala',
  title: 'Poda y tala',
  h1: 'Poda y tala de\n~arbolado~',
  metaTitle: 'Poda y tala de árboles · Henaco',
  metaDescription:
    'Poda de formación, poda en altura y tala controlada de árboles. Trabajos de arbolado para ayuntamientos y particulares, con retirada de restos incluida.',
  image: { src: cta, alt: 'Operario podando arbolado en ladera' },
  intro:
    '_Podamos y talamos con criterio: lo que mejora el árbol y lo que hay que retirar porque supone un riesgo. Trabajamos tanto en monte como en arbolado urbano y parcelas particulares, siempre con retirada de restos._',
  body: `## Poda

Podar no es quitar rama. Una poda mal hecha debilita el árbol, le abre la puerta a hongos y termina costando más que no haber tocado nada. Trabajamos con cortes limpios, en la época adecuada para cada especie y respetando la estructura del árbol.

- Poda de formación en arbolado joven, para dirigir el crecimiento desde el principio.
- Poda de calidad en masas forestales, elevando el fuste hasta la altura que corresponda.
- Poda baja de seguridad, para eliminar la continuidad vertical del combustible.
- Poda de mantenimiento y aclarado de copa en arbolado urbano y de jardín.
- Retirada de ramas secas, rotas o con riesgo de desprendimiento.

## Tala

Talamos cuando el árbol está seco, enfermo, vencido o compromete a personas, edificaciones o líneas. Valoramos antes cada caso: a veces se resuelve con una poda y no hace falta llegar a la tala.

Cuando el espacio no permite tirar el árbol entero, lo desmontamos por partes de forma controlada, para no dañar lo que hay alrededor. Después retiramos el fuste y los restos, y si hace falta destoconamos.

## Trabajos tras temporal

Los vendavales y las nevadas dejan árboles vencidos y ramas colgando que siguen siendo un riesgo días después. Atendemos estas situaciones en montes, caminos y parcelas.

## Para quién trabajamos

Para _~ayuntamientos~_ que necesitan mantener su arbolado viario y sus parques, y para _~particulares~_ con fincas, parcelas o árboles de gran porte junto a la vivienda.

Si lo que necesitas es tratar la masa forestal completa y no árboles concretos, mira nuestros _~tratamientos selvícolas~_.

## Zona de trabajo

Cooperativa forestal con base en Henarejos (Cuenca). Trabajamos en toda España.`,
  cta: { text: 'Llámanos', link: 'tel:722269709' },
} satisfies ServicePage;
