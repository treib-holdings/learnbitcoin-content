---
title: "Privacidad"
heading: "Esto es todo lo que sabemos de ti."
description: "Qué datos recopila LearnBitcoin, quién los ve y cuánto tiempo se guardan. Versión corta: casi nada, a menos que te suscribas al boletín."
published: "2026-10-13"
translationOf: "privacy"
sourceHash: "21a42cda6819"
sourceCommit: "265648e"
sourceUpdated: "2026-10-11"
translation:
  method: "llm-draft"
---

Esta traducción es informativa. [La versión en inglés](/privacy) es la
que rige; si difieren, vale la inglesa.

**Cambio del 11 de octubre de 2026:** agregamos un boletín por correo
electrónico. Leer el sitio funciona exactamente igual que antes. Si te
suscribes, [la sección del boletín](#el-boletin) detalla qué se guarda,
incluido un registro de qué correos abres y en qué enlaces haces clic.
También corregimos la línea sobre los registros de nuestro servidor,
que decía unos 30 días. La cifra real está más abajo, en "Tu dirección
IP, por poco tiempo".

La versión corta de este aviso de privacidad: casi nada. Si te
suscribes al boletín, también tenemos tu dirección de correo, y
Buttondown, la empresa que envía el boletín por nosotros, guarda un
registro de qué correos abres y en qué enlaces haces clic.

Somos un sitio de contenido. No vendemos publicidad. El sitio no tiene
ningún rastreador. No tenemos un embudo de marketing. No hay nada que
monetizar en tu visita, así que no tenemos ninguna razón para armar un
perfil tuyo. El boletín es la única excepción: sus correos registran
aperturas y clics de cada suscriptor, y [la sección del
boletín](#el-boletin), más abajo, dice exactamente qué.

## Lo que realmente recopilamos

**Tu dirección IP, por poco tiempo.** Todo servidor web ve la IP de
cada visitante. El nuestro también. La mayoría de las solicitudes nunca
llegan a nuestro propio código: las páginas son archivos estáticos,
servidos por Cloudflare. Las que sí llegan (el script de analítica y
su ping, las imágenes de vista previa para compartir, el formulario del
boletín) se registran durante 3 días. La entrada contiene tu dirección
IP, la cadena user-agent de tu navegador (el texto con el que se
identifica), la página desde la que vino la solicitud y la ubicación
que Cloudflare deduce a partir de la IP, hasta el nivel de ciudad y
código postal. Nunca contiene lo que escribiste en el formulario.
Guardamos ese registro para mantener el sitio funcionando y detectar
abusos, lo que en términos de la Unión Europea es nuestro interés
legítimo.
[Cloudflare](https://www.cloudflare.com/cloudflare-customer-dpa/)
también está delante de todo el sitio y usa tu IP para bloquear
abusos, limitar la frecuencia de los bots y servir páginas desde su
caché. Guarda sus propios registros según su propia política de
retención.

**Visitas agregadas por página, con Plausible.** Usamos [Plausible Analytics](https://plausible.io/data-policy),
que no usa cookies, no toma la huella digital (fingerprint) de tu
navegador y no arma ningún perfil. Nos dice "esta página tuvo N visitas
esta semana" sin saber cuáles fueron las tuyas.

**Unas pocas solicitudes pequeñas a ChainQuery para las cifras en
vivo.** La página de inicio, la página del nodo y cualquier capítulo o
entrada del glosario con un widget en vivo (hoy, los capítulos sobre
minería, el mempool, el calendario de emisión, los halvings y las
unidades de bitcoin, y la entrada del glosario sobre el bloque) piden
las cifras que muestran, como la altura de bloque, la oferta, las
comisiones, la dificultad y el precio, a
[ChainQuery.com](https://chainquery.com), un servicio que también
operamos; la mayoría repite la solicitud cada 30 a 60 segundos mientras
la página sigue abierta. Cada solicitud llega al servidor de ChainQuery
como cualquier solicitud web llega al nuestro: ve tu dirección IP, la
cadena user-agent de tu navegador y que la solicitud vino de este
sitio, y no viaja ninguna cookie con ella. ChainQuery guarda registros
ordinarios de servidor web, está detrás de Cloudflare como nosotros y
tiene su propia [política de privacidad](https://chainquery.com/privacy-policy).

**Lo que tú decidas mandarnos.** Si escribes a
[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com), tenemos tu
dirección de correo y lo que hayas escrito. Lo leemos. Borramos lo que ya no
necesitamos.

**Tu dirección de correo, si te suscribes al boletín.** Más lo que
Buttondown guarda alrededor de ella, incluidos los registros de
aperturas y clics, todo descrito más abajo, en
[El boletín](#el-boletin).

Esa es la lista completa.

## Lo que el sitio no recopila

- Nada de cookies publicitarias, nunca.
- Nada de rastreadores de terceros.
- Nada de píxeles de redes sociales (Facebook, X, LinkedIn, etc.).
- Nada de scripts de huella digital (fingerprinting).
- Nada de grabación de sesiones.
- Nada de identificadores "anónimos" que al final no lo son.

El boletín es la única excepción a "nada de rastreadores de terceros":
sus correos llevan el seguimiento de aperturas y clics de Buttondown.
Nada en el propio sitio lo hace. [El boletín](#el-boletin), más abajo,
dice qué registra eso.

No vendemos ni alquilamos nada sobre ti. Si te suscribes al boletín,
Buttondown y las empresas cuyos servicios usa manejan tu dirección y
tus registros de aperturas y clics para que el correo te llegue. No se
los damos a nadie más.

## Cookies y almacenamiento local

Este sitio usa dos tipos de almacenamiento en el navegador, ambos
estrictamente necesarios, y ninguno de los dos requiere tu
consentimiento:

- **Cookies de Cloudflare** (`cf_clearance`, `__cf_bm` y similares) -
  las pone Cloudflare para mantener el sitio en línea y bloquear el
  tráfico malicioso. No las leemos. No podríamos desactivarlas sin romper
  el sitio.
- **localStorage** (clave: `lb_progress_v1`) - tu navegador recuerda
  qué temas a fondo y qué capítulos del Recorrido has leído, qué puntos
  de las listas de verificación has marcado, y cuándo, para que el
  sitio pueda mostrar marcas de verificación y la página de inicio
  pueda señalarte el siguiente capítulo del Recorrido. Los datos viven
  solo en tu dispositivo. Nunca se envían a nuestro servidor. Borra el
  almacenamiento de tu navegador y desaparecen. Si la página de inicio
  en inglés muestra la línea "Pick up where you left off" (retoma donde
  lo dejaste), su botón "Clear my reading progress" (borrar mi progreso
  de lectura) también elimina estos datos.

Por eso no hay banner de cookies. Leer el sitio no te pide nada. El
boletín te pide tu consentimiento una sola vez, cuando te inscribes y
haces clic en el enlace de confirmación. El manifiesto prometió que no
habría patrones oscuros; así se ve eso en la práctica.

<h2 id="el-boletin">El boletín</h2>

El boletín es opcional. Si nunca te inscribes, nada de esto te afecta.

**Quién lo opera.** Treib Holdings, LLC, la empresa detrás de
LearnBitcoin y ChainQuery, administra la lista y responde por ella en
[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com).
[Buttondown](https://buttondown.com/legal/privacy) guarda la lista y
envía los correos por nosotros, bajo un
[acuerdo de procesamiento de datos](https://buttondown.com/legal/data-processing-agreement),
en servicios que operan otras empresas
([su lista](https://buttondown.com/legal/subprocessors)).

**Qué te pedimos.** Tu dirección de correo. Nada más.

**Qué pasa con ella.** El formulario envía tu dirección a nuestro
propio servidor, que se la pasa a Buttondown y no guarda copia. Nada
sobre ti viaja con ella: ni tu dirección IP, ni tu navegador, ni la
página de la que venías. Nuestro servidor registra la solicitud durante
3 días, como registra cada solicitud que le llega (ver "Tu dirección
IP, por poco tiempo", más arriba).

**Qué guarda Buttondown.** Tu dirección; cuándo te inscribiste y
confirmaste; que llegaste a través de nuestro servidor; la dirección IP
desde la que llamó nuestro servidor, que es de Cloudflare, no tuya, y
un país deducido a partir de ella, que no tiene por qué ser el tuyo;
una puntuación de spam que calcula para cada suscriptor nuevo; la
dirección anterior, si alguna vez la cambias; y, por cada correo que te
envía, si llegó, si lo abriste y en qué enlaces hiciste clic.
Buttondown también guarda un registro de cada solicitud que nuestro
servidor le hace. Ese registro contiene tu dirección, y no podemos
borrarlo.

**Las aperturas y los clics se cuentan.** Cada correo lleva una imagen
diminuta y enlaces con seguimiento alojados en buttondown.com, así que
cada apertura y cada clic quedan asociados a tu dirección.
Usamos los conteos para ver qué se lee, y no se los pasamos a nadie.
Para que casi no te cuenten, configura tu app de correo para que no
cargue imágenes remotas, y busca las páginas en el sitio por tu cuenta
en lugar de hacer clic en los enlaces. El correo que te pide confirmar
no lleva seguimiento.

**Las páginas de Buttondown.** Los enlaces para confirmar, darte de
baja y administrar la suscripción abren páginas en buttondown.com, que
ponen las cookies propias de Buttondown
([su política de cookies](https://buttondown.com/legal/cookies)).
Después de confirmar, vuelves a una página de este sitio que no carga
ninguna analítica.

**Dónde, y con qué base.** La lista se guarda en Estados Unidos. Si
estás en la Unión Europea, el Reino Unido o Suiza, la base legal es tu
consentimiento, que das al enviar el formulario y confirmar el correo,
y el acuerdo de Buttondown con nosotros incluye las cláusulas
contractuales tipo de la UE. El enlace para darte de baja que hay en
cada correo lo retira.

**Por cuánto tiempo.** Una dirección sin confirmar se elimina a los 30
días; una dada de baja, 7 días después de irte. Por defecto,
Buttondown oculta un registro eliminado en lugar de borrarlo, y activa
el borrado completo boletín por boletín cuando se le pide, así que
da por hecho que existe una copia oculta hasta que esta página diga lo
contrario. El registro de solicitudes mencionado arriba sobrevive a
todo esto. Si algún día cerramos el boletín, borramos la lista.

**Edad.** 16 años o más. Si eres menor, el
[feed RSS (en inglés)](/rss.xml) te da cada capítulo nuevo sin ningún
correo.

**Tus datos.** Cada correo tiene un enlace para cambiar tu dirección o
darte de baja. Para recibir una copia de todo lo que Buttondown tiene
sobre ti, o para que se borre (todo menos el registro de solicitudes),
escribe a [hello@learnbitcoin.com](mailto:hello@learnbitcoin.com)
desde la dirección con la que te suscribiste. También puedes presentar
una queja ante la autoridad de protección de datos del lugar donde
vives.

**Sin ningún correo.** El [feed RSS (en inglés)](/rss.xml) lista todos
los capítulos y temas a fondo nuevos y no necesita nada de ti. No
incluye entradas del glosario, correcciones ni noticias.

## Tus derechos

Si vives en la Unión Europea, el Reino Unido, California o cualquier
lugar con leyes comparables, tienes derecho a saber qué tenemos sobre
ti, corregirlo, borrarlo o irte con tus datos a otra parte. Escribe a
[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com) y te
responderemos.

Siendo realistas: a menos que te suscribas al boletín, no tenemos nada
significativo que devolverte, porque no recopilamos casi nada. Si te
suscribes, podemos enviarte todo lo que Buttondown tiene sobre ti,
incluidos los registros de aperturas y clics, y borrarlo cuando lo
pidas, todo menos el registro de solicitudes descrito en la sección del
boletín. El derecho es tuyo en cualquier caso, y te diremos con
honestidad qué encontramos.

## Niños

El sitio es apto para cualquier edad, pero no está dirigido a niños
menores de 13 años. El boletín es para personas de 16 años o más.
Aparte de las direcciones del boletín, lo que la gente decide
mandarnos por correo y el breve registro del servidor descrito arriba,
que el navegador de cualquier visitante puede dejar, no recopilamos a
sabiendas nada de nadie, de ninguna edad.

## Cambios

Esta página vive en nuestro [repositorio público de contenido](https://github.com/treib-holdings/learnbitcoin-content/blob/main/pages/privacy.md).
Cada cambio queda en el historial de git. No vamos a reescribir en
silencio nuestra postura sobre privacidad.

## Contacto

[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com).
