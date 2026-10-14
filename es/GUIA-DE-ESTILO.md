# Guía de estilo de la edición en español

La regla principal cabe en una frase: si algo tiene entrada en el
glosario, su nombre en español es el título de esa entrada bajo
`es/glossary/` (y los `aliases:` que la entrada declare), en todas las
páginas, sin excepción. El glosario es la terminología. Esta guía cubre
solo lo que el glosario no cubre: las convenciones de escritura, los
rótulos fijos del sitio y las palabras corrientes (de economía, de
seguridad, del propio sitio) que no tienen ni van a tener entrada. Si
dudas entre esta guía y un título del glosario, gana el glosario; si una
palabra no está en ninguno de los dos, es decisión de quien traduce, y
se anota aquí cuando se repite.

Las decisiones de fondo ya están tomadas y no se discuten en cada página:
español latinoamericano neutro, tuteo, números al estilo es-419, fechas
"15 de mayo de 2026", puntuación ASCII más las letras del español.

## 1. Convenciones

### Números y unidades

- Los dígitos van exactamente como en inglés: "21,000,000.5 BTC",
  "0.00000001", "100,000,000 sats", "3.125 BTC", "1,050,000", "2^128",
  "10^29", "1 entre 1,700", "0.06%". Coma de miles, punto decimal. Nunca
  "21.000.000,5" (España, Cono Sur).
- Porcentaje sin espacio: "0.82%", "52.4%". Negativo con guion: "-18%".
- El "billion" inglés es "mil millones"; el "trillion" inglés es
  "billón". "$700 billion" = "$700,000 millones" o "700 mil millones de
  dólares"; "$1.97 trillion" = "$1.97 billones"; "184 billion BTC" =
  "184,000 millones de BTC". Quien escribe "700 billones" multiplicó por
  mil.
- Las unidades se quedan: "sat/vB", "vB", "EH/s", "TWh", "GB", "MB",
  "t" (toneladas); "oz" solo como "onza". "~10 minutes" = "unos 10
  minutos" en prosa; "~2028" = "hacia 2028" en prosa, "~2028" se admite
  en una tabla.
- Ordinales en palabras: "primer halving", "cuarto halving", "la
  quinta". Nunca "1o", "4.o" ni el indicador ordinal (está fuera del
  juego de caracteres). "No." = "núm." o la palabra "número".
- Signo micro: la única forma de escribir µBTC es con U+00B5, que sí
  está permitido. No con la mu griega (U+03BC), que se ve igual y falla.
- Los nombres extranjeros conservan solo las letras del español: "Sao
  Paulo" (sin la tilde portuguesa), "Zurich" o "Zúrich", "Munich" o
  "Múnich", "Tokio". Cualquier otro diacrítico (la c con cedilla, la o
  con barra, la l con barra) se escribe sin él, como hace el inglés.

### Fechas y horas

- "15 de mayo de 2026", "el 3 de enero de 2009", "agosto de 2010",
  "octubre de 2026". Meses en minúscula; sin ceros a la izquierda; nunca
  "del 2026". El formato ISO "2026-10-13" solo va en el frontmatter.
- Con día de la semana: "el domingo 15 de agosto de 1971". Décadas: "la
  década de 1970", "los años setenta". Trimestres: "el segundo trimestre
  de 2026". "the year to October 2026" = "el año que terminó en octubre
  de 2026".
- Horas: "las 2:10 de la tarde (hora del este de Estados Unidos)";
  "00:09 UTC" se queda como está. Si se usan, "a. m." y "p. m." llevan
  espacio y puntos.
- Rangos: "de 1971 a 2025", "entre 2022 y 2025". Nunca una semirraya.

### Moneda

- Los dólares conservan el signo $ y la cifra inglesa: "$124,800",
  "$4.30", "$35 la onza". En la primera cantidad de una página donde el
  $ sea ambiguo (toda persona en América Latina tiene un peso) se
  aclara: "$124,800 (dólares estadounidenses)" o "124,800 dólares"; "USD"
  está bien en tablas. Centavos: "12 centavos".
- Euros y libras se escriben con la palabra ("euros", "libras"); sus
  signos están fuera del juego de caracteres.
- "BTC" es el código de la unidad y va sin artículo en cifras: "3.125
  BTC". "bitcoin" (minúscula) es la unidad: "0.5 bitcoin", "diez
  bitcoins", "comprar bitcoin"; "your bitcoin" = "tus bitcoins".
  "Bitcoin" (mayúscula) es la red y el protocolo: "la red Bitcoin", "el
  protocolo Bitcoin", nunca "el Bitcoin" para la red. "100,000 sats";
  "stacking sats" = "acumular sats".

### Mayúsculas

- Bitcoin (red, protocolo) / bitcoin (unidad); BTC; sat, sats; satoshi.
  Lightning, Taproot, SegWit, Liquid, Bitcoin Core y Bitcoin Knots son
  nombres: "la red Lightning", "el protocolo Bitcoin".
- Títulos y encabezados en mayúscula inicial solamente: "Por qué el
  dinero está roto", "Cómo funciona Bitcoin", "## 4. El tope de 21
  millones". Los nombres de sección van con mayúscula cuando se nombran:
  "el Recorrido", "A fondo"; "el glosario" va en minúscula en prosa, como
  en inglés.
- "banco central" en minúscula salvo dentro de un nombre propio; "la
  Reserva Federal" con mayúsculas y "la Fed" después de la primera
  mención (femenino).
- Siglas: UTXO, BIP, BOLT, KYC, PoW, HD, RBF, CPFP, PSBT, SSS, HSM, SPV,
  P2P, IPC, UTC. Plurales de uso en la comunidad: "UTXOs", "BIPs",
  "BOLTs", "ASICs". Si una revisión prefiere la forma invariable de la
  RAE ("los UTXO"), se acepta siempre que se aplique en todo el sitio.
  "BIP 39" con espacio en prosa, como los títulos en inglés; en slugs,
  "bip-39".

### Comillas, guiones y signos

- Comillas dobles rectas para citas, títulos de publicaciones y comillas
  de distancia: "cripto", "temporal". Comillas simples solo anidadas. El
  punto va después de la comilla de cierre, como pide el español. Los
  títulos de papers y libros van en cursiva y en su idioma original:
  *Bitcoin: A Peer-to-Peer Electronic Cash System*.
- Donde el inglés tiene una raya se escribe un guion con espacios
  (" - "), pero menos veces: una coma, dos puntos o un paréntesis suelen
  leerse mejor en español. Los puntos suspensivos son tres puntos
  seguidos ("...").
- Signos de apertura siempre: "¿Qué es Bitcoin?", "¡Nunca!".
- Las listas conservan la forma del inglés: elementos con mayúscula
  inicial, sin punto final en los fragmentos, con punto en las oraciones
  completas. Las etiquetas en negrita dentro de una lista siguen en
  negrita.
- Los bloques de código y el código en línea son idénticos byte a byte al
  inglés (`getblock`, `bc1`, `lnbc...`, `assumevalid=0`, `txindex=1`,
  `bitcoin.conf`, `lb_progress_v1`). Los rótulos de la interfaz de una
  billetera se traducen ("Enviar", "Recibir", "Firmar mensaje", "Subir
  comisión") porque casi todas las billeteras tienen interfaz en
  español; el inglés se deja entre paréntesis solo cuando la app
  nombrada no la tiene (Sparrow Wallet, por ejemplo).

### Tú y nosotros

- "you" es tú, siempre: "podrás", "tu billetera", "verifica, no
  confíes", "Diviértete". Nunca usted y nunca vos. Imperativos en forma
  de tú; "you'll" como futuro simple o "vas a + infinitivo", según lea
  mejor la oración.
- "we" es el sitio: primera persona del plural sin pronombre ("creemos",
  "no vendemos", "publicamos la corrección"). "nosotros" solo para
  contrastar. Nada de "nosotros prometemos" ni promesas de marketing.
- "your dad" = "tu papá"; Alice, Bob y Carol conservan sus nombres.
- Registro: directo y con opinión, como el inglés. Un modismo recibe un
  modismo, no un calco ("ages like milk" = "envejece como la leche"
  funciona; "the right amount of kill" necesita reescritura, no
  traducción). Los chistes se conservan cuando funcionan y se dejan caer
  cuando no.

### Lenguaje que no excluye, sin forzarlo

- Donde no cuesta nada, una forma que no marque género: "quienes operan
  nodos", "quienes desarrollan el software", "la gente", "las personas",
  "cualquiera", "quien tenga tu frase semilla", "la única persona
  responsable", "quienes hereden", "Te damos la bienvenida" (no
  "Bienvenido"), "Felicidades", "Sé la excepción".
- El masculino genérico se queda para roles y cosas donde el rodeo
  resultaría torpe: "mineros", "desarrolladores", "herederos", "un
  atacante". Nada de terminaciones en "x", "@" ni "e".
- Los botones van en primera persona, como es costumbre en las
  interfaces latinoamericanas ("Suscribirme"); los encabezados, en tú
  ("Suscríbete").

### Caracteres que nunca se escriben

Los archivos son UTF-8 en forma NFC, sin marca de orden de bytes. Fuera
del ASCII solo se admiten las dieciséis letras y signos que el español
necesita (á é í ó ú ü ñ, sus mayúsculas, ¿ y ¡) y el signo micro
(U+00B5). El paso `check-charset` de la compilación rechaza el archivo
ante cualquier otro carácter. Los que más se cuelan, para buscarlos
antes de enviar:

- comillas tipográficas simples y dobles (U+2018, U+2019, U+201C,
  U+201D): se escriben rectas (' y ");
- comillas angulares o latinas (U+00AB, U+00BB): se escriben rectas;
- la raya (U+2014) y la semirraya (U+2013): guion con espacios o
  reescritura; en rangos, "de ... a" o "entre ... y";
- el signo menos (U+2212): guion ("-18%");
- los puntos suspensivos como un solo carácter (U+2026): tres puntos;
- el espacio duro (U+00A0): espacio normal;
- los indicadores ordinales (U+00BA, U+00AA): ordinales en palabras;
- el signo de grado (U+00B0): "grados";
- el signo de multiplicación (U+00D7): "x";
- las flechas (U+2192 y similares): "->";
- las viñetas (U+2022 y similares): "-";
- los signos de euro y libra (U+20AC, U+00A3): "euros", "libras";
- las fracciones como un solo carácter (U+00BD y similares): decimales o
  "1/2" con dígitos;
- "<=" y ">=" como dos caracteres ASCII, nunca U+2264 ni U+2265;
- la mu griega (U+03BC): el signo micro U+00B5.

Los slugs y los nombres de archivo son ASCII en todos los idiomas:
"mineria", no "minería" con tilde.

### Enlaces y archivos

- Un enlace a una página que existe en español apunta a su URL en
  español: `/es/glosario/<slug>` para una entrada con archivo bajo
  `es/glossary/` (el `slug:` de ese archivo), `/es/recorrido/<slug>`
  para los seis capítulos del Recorrido (por-que-el-dinero-esta-roto,
  que-es-bitcoin-en-realidad, como-funciona-bitcoin, usar-bitcoin,
  se-tu-propio-banco, soberania), `/es`, `/es/manifiesto` y
  `/es/privacidad`.
- Todo lo demás (temas a fondo, entradas sin traducir, correcciones,
  boletín, nodo) va como texto plano si es una mención de paso, o con la
  URL en inglés y " (en inglés)" añadido al texto del enlace si el lector
  lo necesita. Nunca se inventa una URL. Los PDF descargables conservan
  su enlace; se dice "(PDF en inglés)" una vez por página.
- El frontmatter de cada archivo en español lleva el bloque de
  procedencia (translationOf, sourceHash, sourceCommit, sourceUpdated,
  translation.method), tal como lo explica `CONTRIBUTING.md`. Las
  cadenas YAML van siempre entre comillas dobles: un texto con ":" o que
  empieza por "¿" o "¡" rompe un escalar sin comillas.
- Los diagramas y videos conservan `src` y `poster`; se traducen `alt`,
  `aria-label` y la leyenda, y no se dice nada de que la ilustración
  esté en inglés.

## 2. Rótulos fijos

Son los textos que se repiten en todas las páginas de un tipo. Se usan
tal cual.

| Inglés | Español | Dónde |
|---|---|---|
| Where you're going: | Adónde vas: | cita de apertura de cada capítulo; en negrita, como en inglés: `> **Adónde vas:** ...` |
| Pro tip: | Consejo pro: | cita de cierre |
| What this buys us / you / Bitcoin | Qué ganamos con esto / Qué ganas con esto / Qué gana Bitcoin con esto | sección de cierre de los temas a fondo y de algunas entradas |
| Options, not gospel / Starting points, not gospel | Opciones, no dogmas / Puntos de partida, no dogmas | apartes de los capítulos 5 y 6 |
| Your Milestone | Tu meta | encabezado de sección en los capítulos |
| Sources | Fuentes | pie de página |
| Key takeaways | Ideas clave | encabezado de las entradas |
| Related terms | Términos relacionados | pie de las entradas |
| Related chapters | Capítulos relacionados | pie de los capítulos |
| External references | Referencias externas | pie de las entradas |
| Go deeper | Más a fondo | bloque que enlaza a la sección A fondo |
| Read next / Next chapter / Previous chapter | Sigue leyendo / Capítulo siguiente / Capítulo anterior | navegación |
| min / min read | min / min de lectura | "25 min", "25 MIN DE LECTURA" |
| Chapter N of M | Capítulo N de M | encabezado de los capítulos |
| Published / Revised / Fact-checked | Publicado el / Actualizado el / Datos verificados el | línea de fechas; "Revisado" significa otra cosa y no se usa aquí |
| No corrections logged for this page. | No hay correcciones registradas para esta página. | bloque de correcciones |
| Corrected / Was: / Now: | Corregido / Decía: / Ahora: | bloque de correcciones |
| Translation drafted with AI assistance; a human review is still pending. | Traducción hecha con ayuda de IA, pendiente de revisión humana. | aviso de traducción |
| Translation reviewed by X on DATE. | Traducción revisada por X el DATE. | aviso de traducción, una vez revisada |
| The English version was updated on DATE, after this translation. | La versión en inglés se actualizó el DATE, después de esta traducción. | aviso de traducción |
| Read the original (in English) | Lee el original (en inglés) | aviso de traducción |
| Edit this page on GitHub | Editar esta página en GitHub | pie de cada página |
| Newsletter / Subscribe | Boletín / Suscribirme | navegación y tarjeta del boletín |
| Unsubscribe link in every email. | Enlace para darte de baja en cada correo. | tarjeta del boletín |
| What is kept, and for how long | Qué se guarda y por cuánto tiempo | tarjeta del boletín |
| More about the newsletter | Más sobre el boletín | tarjeta del boletín |
| Check your inbox | Revisa tu bandeja de entrada | página de resultado |
| opens and clicks | aperturas y clics | página de privacidad |
| confirm link / confirmation email | enlace de confirmación / correo de confirmación | página de privacidad |
| RSS feed | feed RSS (m.) | pie de página |
| Marked as read on this device | Marcado como leído en este dispositivo | capítulos |
| You've finished the journey | Terminaste el Recorrido | capítulos; R mayúscula, como en "Empieza el Recorrido" |
| 404 - Orphan Block | 404 - Bloque huérfano | página de error |
| Bitcoin only. No bullshit. Have fun. | Solo Bitcoin. Sin tonterías. Diviértete. | lema del sitio; cadena de marca que vive en la interfaz, no se retraduce por página |

## 3. Palabras que no son términos del glosario

Lo que sigue no tiene entrada en el glosario y no la va a tener. Se usa
la forma de la segunda columna; la tercera recoge alternativas vistas y
el uso en frases.

### Dinero y economía

| Inglés | Español | Nota |
|---|---|---|
| money | dinero | - |
| purchasing power | poder adquisitivo | "poder de compra" está bien al hablar; aquí una sola forma |
| money supply | oferta monetaria | no "masa monetaria" (España); "M2" se queda: "la M2 de Estados Unidos" |
| supply (of bitcoin) | oferta; emisión (unidades nuevas) | "supply schedule" = "calendario de emisión"; "supply cap" = "tope de emisión" |
| 21 million cap | el tope de 21 millones | no "límite" |
| issuance / issuance rate | emisión / tasa de emisión | - |
| scarcity / scarce | escasez / escaso | - |
| sound money / hard money | dinero sólido / dinero duro | "duro" solo cuando el inglés dice hard |
| store of value | reserva de valor | no "depósito de valor" |
| medium of exchange | medio de intercambio | no "medio de cambio" |
| unit of account | unidad de cuenta | - |
| central bank | banco central | minúscula salvo en un nombre propio |
| the Fed / Federal Reserve | la Fed / la Reserva Federal | femenino; nombre completo en la primera mención |
| legal tender | moneda de curso legal | - |
| gold standard | patrón oro | no "patrón de oro" |
| Bretton Woods | Bretton Woods | nombre propio |
| debasement | degradación de la moneda | "envilecimiento" es el término del economista, admitido entre paréntesis; no es lo mismo que devaluación |
| devaluation | devaluación | - |
| bailout | rescate (bancario) | - |
| balance sheet | balance | "el balance de la Fed" |
| money printing | imprimir dinero / emisión | el verbo se lee mejor que "impresión de dinero" |
| Cantillon effect | efecto Cantillon | - |
| CPI | IPC (índice de precios al consumidor) | se desarrolla en la primera mención; "CPI-U" se queda en los rótulos de fuentes |
| wealth transfer | transferencia de riqueza | - |
| asset / asset owners | activo / quienes tienen activos, los dueños de activos | - |
| stock market / stocks | bolsa / acciones | no "mercado de valores" |
| debtor / creditor | deudor / acreedor | - |
| wage / paycheck | sueldo / tu sueldo | "paycheck to paycheck" = "de quincena en quincena" (MX, CO) o "al día" (neutro) |
| rent (housing) | alquiler | "renta" es ingreso en el Cono Sur |
| groceries | el súper, las compras | no "el mandado" (MX) ni "la despensa" |
| barter | trueque | - |
| commodity money | dinero mercancía | - |
| coincidence of wants | coincidencia de necesidades | - |

### La red y el protocolo

| Inglés | Español | Nota |
|---|---|---|
| Bitcoin (network, protocol) | Bitcoin (m.) | "la red Bitcoin", "el protocolo Bitcoin"; nunca "el Bitcoin" |
| bitcoin (unit) | bitcoin (m.), plural bitcoins | "0.5 bitcoin", "diez bitcoins", "comprar bitcoin" |
| BTC | BTC | código de unidad, sin artículo en cifras |
| "crypto" (the marketing umbrella) | "cripto" (entre comillas) | "cryptocurrency" literal = "criptomoneda" |
| token / shitcoin | token (m.) / shitcoin (f.) | "shitcoin shills" = "promotores de shitcoins" |
| peer-to-peer | entre pares (P2P) | "red entre pares"; "P2P" tras la primera mención; no "punto a punto" |
| protocol | protocolo | - |
| network | red | - |
| ledger | registro (contable) | "un registro compartido"; "libro mayor" es jerga contable, admitida una vez como glosa |
| chain / main chain | la cadena / la cadena principal | - |
| timestamp | marca de tiempo | no "sello de tiempo" |
| consensus | consenso | la entrada "Parámetro de consenso" cubre las reglas; la palabra suelta va así |
| run a node | correr un nodo | no "ejecutar un nodo"; "Run a node." = "Corre un nodo." |
| developer | desarrollador | "quienes desarrollan el software" cuando se quiere forma neutra |
| implementation | implementación | - |
| 51% attack | ataque del 51% | no "ataque 51" |
| upgrade (protocol) | actualización | "soft-fork upgrade" = "actualización por soft fork" |
| activation | activación | - |
| hard fork | hard fork (m.) | préstamo; "soft fork" sí tiene entrada |
| censorship resistance | resistencia a la censura | - |
| permissionless | sin permiso | "you don't need permission" = "no necesitas permiso de nadie" |
| trustless | sin necesidad de confiar | frase, no palabra; "sin confianza" confunde |
| verify, don't trust | verifica, no confíes | en ese orden, el del sitio |
| trusted third party | tercero de confianza | - |
| intermediary | intermediario | - |
| sovereignty / sovereign | soberanía / soberano | el capítulo se titula "Soberanía" |
| on-chain | on-chain (invariable) | adjetivo: "una transacción on-chain"; cuando es un lugar, "en la cadena": "se liquida en la cadena"; "Off-chain" sí tiene entrada |

### Transacciones y comisiones

| Inglés | Español | Nota |
|---|---|---|
| balance | saldo | "There are no balances" = "No hay saldos" |
| fee (plain) | comisión | nunca tarifa, cuota ni fee; la entrada es "Comisión de transacción" |
| fee rate | tasa de comisión | "una tasa de comisión de 3 sat/vB" |
| sat/vB, virtual byte | sat/vB, byte virtual (vbyte) | "141 bytes virtuales (vB)" |
| block space | espacio en el bloque | - |
| fee market | mercado de comisiones | - |
| confirmation / unconfirmed | confirmación / sin confirmar | "1 confirmación", "6 confirmaciones" |
| settle / settlement / final | liquidar / liquidación / definitivo | "effectively final" = "prácticamente definitivo"; "settles on-chain" = "se liquida en la cadena" |
| broadcast / rebroadcast | transmitir (a la red) / retransmitir | no "difundir" ni "emitir" |
| sign / signature | firmar / firma | "firma digital" solo cuando el inglés dice digital |
| txid | txid (m.) | no "ID de transacción" |
| malleability | maleabilidad | - |
| stuck transaction | transacción atascada | no "trabada" (AR) |
| Child Pays for Parent (CPFP) | Child Pays for Parent (CPFP) | primera mención: "(CPFP, el hijo paga por el padre)", igual que RBF |
| abandon (a transaction) | abandonar | - |
| tx | tx | solo en código y tablas |

### Claves, billeteras y custodia

| Inglés | Español | Nota |
|---|---|---|
| hot wallet / cold wallet | billetera caliente / billetera fría | - |
| cold storage | almacenamiento en frío | - |
| custodial / non-custodial (adj.) | custodial / no custodial (invariable) | "custodial bitcoin" = "bitcoin en custodia de un tercero"; la entrada es "Billetera custodial" |
| custodian | custodio | - |
| custody | custodia | "Autocustodia" sí tiene entrada |
| IOU | un pagaré | "you own an IOU" = "tienes un pagaré" |
| mnemonic (adj.) | mnemónico / la frase mnemónica | solo en contexto técnico de BIP 39; en prosa, "frase semilla" |
| 12 / 24 words | 12 / 24 palabras | "una frase de 12 palabras" |
| seed (the derived bytes) | la semilla | cuando "seed" significa la frase, "frase semilla" |
| backup (noun / verb) | respaldo / respaldar | no "copia de seguridad" (España); "metal backup" = "respaldo en metal" |
| SLIP-39 | SLIP-39 | - |
| cosigner / coordinator | cofirmante / coordinador | - |
| single point of failure | punto único de falla | "falla", no "fallo" |
| heirs / executor | herederos / albacea | "quienes hereden" cuando se quiere forma neutra; la entrada es "Planificación de la herencia (Bitcoin)" |
| threat model | modelo de amenazas | - |
| op-sec | seguridad operativa (op-sec) | - |
| attack surface | superficie de ataque | - |
| phishing / scam | phishing (m.) / estafa | no "suplantación" |
| wrench attack | ataque de la llave inglesa | "wrench, warrant, kidnap" = "llave inglesa, orden judicial, secuestro" |
| coercion / theft / loss | coerción / robo / pérdida | - |
| secure element | elemento seguro | - |
| firmware / open source | firmware (m.) / código abierto | "Bitcoin-only firmware" = "firmware solo para Bitcoin" |
| QR code | código QR | - |
| safe / safe-deposit box | caja fuerte / caja de seguridad (en un banco) | - |
| steel plate | placa de acero | - |
| message signing | firma de mensajes | rótulos de billetera "Firmar mensaje" / "Verificar mensaje" |
| Tor (the network) | Tor | la entrada "Servicio oculto de Tor" es el servicio, no la red |
| Electrum server | servidor Electrum | - |
| privacy / pseudonymous | privacidad / seudónimo (adj. seudónima) | "Bitcoin es seudónimo, no anónimo"; no "pseudónimo" |
| no-KYC | sin KYC | "comprar sin KYC"; "KYC" sí tiene entrada |

### Lightning y otras capas

| Inglés | Español | Nota |
|---|---|---|
| routing fee | comisión de enrutamiento | "route a payment" = "enrutar un pago"; la entrada es "Enrutamiento en Lightning" |
| hop | salto | - |
| open / close a channel | abrir / cerrar un canal | - |
| Lightning Address | Lightning Address (f.) | nombre de la especificación; se glosa una vez: "(dirección Lightning)" |
| Offers (BOLT 12) | Offers (BOLT 12) | se glosa una vez: "Offers (ofertas)" |
| millisat | milisat | - |
| functionary | funcionario | la entrada es "Federación de Liquid" |
| L-BTC | L-BTC | - |
| Confidential Transactions | Transacciones Confidenciales | nombre de la función, con mayúsculas como en inglés |
| stablecoin | stablecoin (f.) | - |
| watchtower | watchtower (m.) | - |

### El sitio y su voz

| Inglés | Español | Nota |
|---|---|---|
| the Journey | el Recorrido | R mayúscula cuando nombra la sección; "Journey chapter" = "capítulo del Recorrido" |
| rabbit hole / Rabbit Holes | tema a fondo / A fondo | "madriguera" se descartó; "the rabbit holes go deeper" = "los temas a fondo profundizan más" |
| glossary / entry | glosario / entrada | minúscula en prosa |
| chapter | capítulo | "Capítulo 3" |
| corrections | correcciones | - |
| newsletter | boletín | - |
| graduation | graduación | - |
| hands-on | práctica | "reading + hands-on" = "lectura + práctica" |
| checklist | lista de verificación | no "lista de comprobación" |
| check mark | marca de verificación | neutro; no palomita, tilde ni chulo |
| click / tap | hacer clic / tocar | "clic", plural "clics"; nunca "clickear" |
| app / phone / laptop / computer | app (f.) / celular / laptop (f.) / computadora | no móvil, portátil ni ordenador |
| browser / download / file | navegador / descargar / archivo | - |
| Edit on GitHub / pull request / issue | Editar en GitHub / pull request / issue | "abre un issue o manda un pull request" |
| CC BY-SA | CC BY-SA | - |
| unsubscribe | darse de baja | - |

### Formas derivadas de entradas del glosario

Estas palabras sí dependen de una entrada: la forma de la segunda
columna es la que corresponde al título de esa entrada, y el enlace,
cuando lo hay, va a ella.

| Inglés | Español | Entrada |
|---|---|---|
| to mine / mined | minar / minado; "was mined" = "se minó" | Minería |
| mining pool (plural) | el pool, los pools | Pool de minería |
| double-spend attack | ataque de doble gasto | Doble gasto |
| gold window / Nixon shock | ventana del oro / el shock de Nixon | Qué pasó en 1971 (el shock de Nixon) |
| entropy | entropía; "128 bits de entropía" | Bits de entropía de la frase semilla |
| derivation | derivación | Ruta de derivación |
| seed splitting | dividir la frase semilla; nunca "compartir" | División de la clave (key split); Secreto compartido de Shamir |
| passphrase | passphrase (f.); primera mención: "una passphrase opcional, la llamada 'palabra 25'" | Passphrase (la palabra 25) |
| change (in a transaction) | cambio; "dirección de cambio"; "$0.70 de cambio" | Salida de cambio |
| finality | definitivo; "prácticamente definitivo" | Irreversibilidad de la transacción (finality) |
| M-of-N, 2-of-3 | M de N, 2 de 3 | M de N; Multisig |
| light wallet | billetera ligera (SPV) | SPV (verificación simplificada de pagos) |
| layer 2 | capa 2 | Segunda capa; Capa 1 |
| peg-in / peg-out | peg-in / peg-out; "el peg (anclaje) 1:1" | Peg-in; Peg-out |
| invoice | factura (invoice); primera mención: "una factura Lightning (invoice)" | Factura Lightning (invoice); BOLT 11 |
| Lightning (short) | Lightning; "en Lightning", "un pago por Lightning", "la red Lightning" | Lightning Network |

## 4. Cómo revisar

Las páginas en español salen primero como borradores hechos con ayuda de
IA y llevan arriba el aviso "Traducción hecha con ayuda de IA, pendiente
de revisión humana". Convertir ese aviso en un crédito es trabajo de una
persona hispanohablante nativa, y así se hace:

1. Abre la página en learnbitcoin.com y usa el enlace "Editar esta página
   en GitHub", cerca del final. Lleva al archivo exacto bajo `es/` en el
   repositorio del contenido. Corrige lo que haga falta directamente en
   el texto: terminología (los títulos del glosario y esta guía), tono
   (tú, registro directo), números y fechas, y cualquier calco del
   inglés. Si cambias un término que aparece en más páginas, cámbialo en
   todas o dilo en el pull request.
2. En el frontmatter del mismo archivo, dentro del bloque `translation:`,
   cambia `method` a `"llm-draft+human-review"` y añade tu nombre o tu
   usuario y la fecha:

   ```yaml
   translation:
     method: "llm-draft+human-review"
     reviewedBy: "Tu nombre o usuario"
     reviewedAt: "2026-10-20"
   ```

   Con eso el aviso de la página pasa a decir "Traducción revisada por
   Tu nombre el 20 de octubre de 2026". No toques `translationOf`,
   `sourceHash`, `sourceCommit` ni `sourceUpdated`: describen el original
   en inglés, no la revisión.
3. Manda el pull request. La compilación corre sola los controles de
   caracteres (`check-charset`) y de procedencia (`check-translations`);
   si uno falla, el mensaje dice el archivo, la línea y el carácter.
   Leemos todo y las revisiones sustanciales reciben crédito en la
   página.
4. Si la página muestra "La versión en inglés se actualizó el ..., después
   de esta traducción", el original cambió después del borrador. Puedes
   portar el cambio en el mismo pull request (y entonces quien lo
   integre vuelve a correr `node scripts/translation-source.mjs` para
   refrescar `sourceHash`), o dejarlo dicho en la descripción para que lo
   haga otra persona.

Lo que no hace falta revisar: los bloques de código (son idénticos al
inglés a propósito), las URLs de las fuentes y las etiquetas de las
fuentes (describen documentos en inglés y se dejan tal cual).
