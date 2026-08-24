import type { LegalPage, SiteData } from './types';
import { pageHref } from './utils';

// The aviso legal and the política de privacidad are legally required of every Spanish
// business site (LSSI-CE art. 10 and RGPD art. 13), and their content is boilerplate
// parameterised by the operator's identity — so the template writes them, not each site.
// Sites only supply `blocks.legal`.

export function legalHref(slug: string) {
  return pageHref(`legal/${slug}`);
}

export function legalPages(data: SiteData): LegalPage[] {
  const { name, address, phone, legal } = data.blocks;
  const { companyName, taxId, email } = legal;

  const identity = [
    `- *Denominación social:* ${companyName}`,
    `- *NIF/CIF:* ${taxId}`,
    `- *Domicilio:* ${address}`,
    `- *Teléfono:* ${phone}`,
    `- *Correo electrónico:* ${email}`,
  ].join('\n');

  return [
    {
      type: 'legal',
      slug: 'aviso-legal',
      title: 'Aviso legal',
      metaTitle: `Aviso legal · ${name}`,
      metaDescription: `Información legal y datos identificativos de ${companyName}, titular del sitio web de ${name}.`,
      body: `## Datos identificativos del titular

En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ponen a disposición del usuario los siguientes datos:

${identity}

## Objeto

Este sitio web tiene carácter meramente informativo: describe los servicios que presta ${companyName} y facilita sus datos de contacto. No comercializa productos ni servicios en línea, no dispone de área de usuarios registrados y no incluye formularios de contratación.

## Condiciones de uso

El acceso al sitio web es gratuito y atribuye la condición de usuario. El usuario se compromete a utilizar el sitio y sus contenidos conforme a la ley, a este aviso legal y a las buenas costumbres, absteniéndose de emplearlos con fines lesivos para los derechos o intereses de terceros, o de forma que puedan dañar, inutilizar o sobrecargar el sitio o impedir su normal utilización.

## Propiedad intelectual e industrial

Los contenidos del sitio (textos, fotografías, logotipos, diseño y código) son titularidad de ${companyName} o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa del titular.

## Responsabilidad

${companyName} elabora la información de este sitio con la mayor diligencia, pero no garantiza la ausencia de errores ni la vigencia permanente de sus contenidos, que puede modificar sin previo aviso. La información publicada sobre los servicios tiene valor orientativo y no constituye oferta vinculante: las condiciones concretas de cada trabajo se fijan en el presupuesto correspondiente.

## Enlaces a sitios de terceros

Este sitio puede contener enlaces a páginas ajenas. ${companyName} no controla sus contenidos ni se responsabiliza de ellos; la inclusión de un enlace no implica relación, recomendación ni supervisión.

## Legislación aplicable

Este aviso legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales que resulten competentes conforme a derecho.`,
    },
    {
      type: 'legal',
      slug: 'politica-de-privacidad',
      title: 'Política de privacidad',
      metaTitle: `Política de privacidad · ${name}`,
      metaDescription: `Cómo trata ${companyName} los datos personales de quienes visitan o contactan a través del sitio web de ${name}.`,
      body: `## Responsable del tratamiento

- *Responsable:* ${companyName}
- *NIF/CIF:* ${taxId}
- *Domicilio:* ${address}
- *Correo electrónico:* ${email}
- *Teléfono:* ${phone}

## Qué datos tratamos

Este sitio web es una página estática de carácter informativo. No incorpora formularios de contacto, registro de usuarios, comentarios ni suscripciones, por lo que *no recogemos datos personales a través de la navegación por el sitio.*

Sí tratamos los datos que usted nos facilite voluntariamente si decide ponerse en contacto con nosotros por teléfono o por correo electrónico: normalmente nombre, datos de contacto y la información que incluya en su consulta.

## Finalidad y base jurídica

Tratamos esos datos para atender su consulta, elaborar el presupuesto solicitado y, en su caso, gestionar la relación contractual derivada. La base jurídica es la aplicación de medidas precontractuales a petición del interesado y la ejecución del contrato (art. 6.1.b del RGPD), así como el interés legítimo en responder a las comunicaciones que se nos dirigen (art. 6.1.f del RGPD).

## Conservación

Conservamos los datos mientras se mantenga el interés mutuo o la relación contractual, y posteriormente durante los plazos de prescripción legalmente exigibles, en particular los previstos por la normativa fiscal y mercantil.

## Destinatarios

No cedemos sus datos a terceros, salvo obligación legal o cuando resulte necesario para la prestación del servicio contratado. No se realizan transferencias internacionales de datos ni decisiones automatizadas ni elaboración de perfiles.

## Sus derechos

Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a ${email}, indicando el derecho que ejerce y acompañando copia de un documento que acredite su identidad. Si considera que el tratamiento no se ajusta a la normativa, puede presentar una reclamación ante la Agencia Española de Protección de Datos ([www.aepd.es](https://www.aepd.es)).

## Cookies y contenidos de terceros

*Este sitio web no utiliza cookies propias, ni de analítica, ni de publicidad.*

La sección de localización incluye un mapa de Google Maps que se carga junto con la página. Al mostrarse, Google LLC recibe datos de su navegador —entre ellos su dirección IP— y puede instalar cookies u otros dispositivos de almacenamiento en su equipo, conforme a su propia [política de privacidad](https://policies.google.com/privacy). Este tratamiento lo realiza Google como responsable independiente.

Puede impedirlo bloqueando las cookies de terceros en la configuración de su navegador. La dirección completa figura escrita junto al mapa, por lo que la información de contacto sigue estando disponible sin necesidad de cargarlo.`,
    },
  ];
}
