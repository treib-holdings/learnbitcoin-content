---
title: "Qué es Bitcoin en realidad"
slug: que-es-bitcoin-en-realidad
translationOf: what-bitcoin-actually-is
sourceHash: "42c680c269a9"
sourceCommit: "d5353d2"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-14"
order: 2
goDeeper: ["supply", "decentralization", "energy"]
estimatedMinutes: 25
tagline: "No es una acción. No es una empresa. No es una app de pagos. Bitcoin es un nuevo tipo de dinero, y la diferencia importa."
prerequisites: ["why-money-is-broken"]
relatedTerms: ["satoshi-nakamoto", "whitepaper", "proof-work-pow", "decentralization", "halving-halvening", "genesis-block", "block-subsidy", "hash"]
ogImage: "/diagrams/og/network-topology.png"
ogImageAlt: "Dos topologías de red, lado a lado. A la izquierda, un único banco central como centro solitario. A la derecha, Bitcoin como unos treinta y cinco nodos pares conectados en una malla orgánica sin centro. Un banco central, frente a decenas de miles de nodos de Bitcoin. Nadie manda."
sources:
  - { label: "Bitcoin Whitepaper (Satoshi Nakamoto, 2008)", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "ChainQuery - getblock RPC reference and playground (run it with the genesis block hash)", url: "https://chainquery.com/rpc/getblock" }
  - { label: "mempool.space - the genesis block (block 0, January 3, 2009), whose coinbase carries The Times headline", url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "Satoshi Nakamoto - Bitcoin P2P e-cash paper, the Cryptography Mailing List at metzdowd.com (October 31, 2008, 14:10 EDT)", url: "https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html" }
  - { label: "Satoshi Nakamoto - Bitcoin v0.1 released, the Cryptography Mailing List (January 8, 2009): 21,000,000 coins in total, cut in half every 4 years", url: "https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html" }
  - { label: "Satoshi Nakamoto Institute - Bitcoin emails", url: "https://satoshi.nakamotoinstitute.org/emails/" }
  - { label: "Satoshi Nakamoto Institute - Satoshi's forum posts (the last BitcoinTalk post is dated December 12, 2010)", url: "https://satoshi.nakamotoinstitute.org/posts/" }
  - { label: "Sergio Lerner - The Return of the Deniers and the Revenge of Patoshi (2019): about 1.1M coins attributed to Satoshi, 99.9% of those blocks unspent", url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/" }
  - { label: "FRED - Federal Reserve total assets (WALCL): $925.7 billion on September 10, 2008, $1,969.1 billion on October 29, 2008", url: "https://fred.stlouisfed.org/series/WALCL" }
  - { label: "FRED - M2 money stock, seasonally adjusted (M2SL): $7.51 trillion in January 2008, $23.34 trillion in August 2026", url: "https://fred.stlouisfed.org/series/M2SL" }
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double-spending (December 2012), Table 1: 0.059% for a 10% attacker after 6 confirmations", url: "https://arxiv.org/abs/1402.2009" }
  - { label: "Bitcoin Core GetBlockSubsidy (permalink, Oct 2026) - halves the subsidy every 210,000 blocks, counted in whole satoshis", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L1833-L1844" }
  - { label: "mempool.space - block 840,000, the fourth halving (mined 00:09 UTC April 20, 2024)", url: "https://mempool.space/block/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5" }
  - { label: "mempool.space - block 969,999 (October 5, 2026): 20,093,750 BTC issued by the schedule, against 164,250 BTC a year at 3.125 BTC per block, about 0.82%", url: "https://mempool.space/block/000000000000000000001d95e5f7284cb199b8620eb6a7938dd9696f85751bb3" }
  - { label: "World Gold Council - How much gold has been mined? (about 222,600 t, end-Q2 2026)", url: "https://www.gold.org/goldhub/data/how-much-gold" }
  - { label: "World Gold Council - Gold Demand Trends Full Year 2025, supply (mine production 3,672 t)", url: "https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-full-year-2025/supply" }
  - { label: "USGS Mineral Commodity Summaries 2026 - Gold (world mine production 2025: 3,300 t)", url: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gold.pdf" }
  - { label: "BTC Nodes - reachable Bitcoin nodes (25,514 in the 19:28 UTC snapshot of October 9, 2026; the old bitnodes.io API now redirects here)", url: "https://btcnodes.io" }
  - { label: "BTC Nodes API - bitnodes.io snapshot of October 9, 2026, 19:28 UTC (25,514 nodes, main chain at height 970,671; 1,829 nodes with Knots user agents report heights off the main chain: 656 stuck at 961,639 and 1,173 near 976,430, ahead of the main chain)", url: "https://btcnodes.io/api/v1/snapshots/1791574083/" }
  - { label: "Mike Belshe - Segwit2x Final Steps, calling off the planned 2MB fork (bitcoin-segwit2x list, November 8, 2017, archived)", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
  - { label: "Bitcoin Wiki - Value overflow incident (August 15, 2010; patched client within five hours)", url: "https://en.bitcoin.it/wiki/Value_overflow_incident" }
  - { label: "BIP 50 - March 2013 Chain Fork Post-Mortem", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "mempool.space - block 225,455 (06:20 UTC March 12, 2013), where the chain every version accepted took the lead again", url: "https://mempool.space/block/000000000000016924f85069603be8164578eedf113f44d60bf0438cba047c7f" }
  - { label: "Coin Metrics - BTC daily reference price (about $124,800 on October 6, 2025; about $58,500 on June 30, 2026)", url: "https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?assets=btc&metrics=PriceUSD&frequency=1d&start_time=2025-10-01&end_time=2026-10-08&page_size=10000" }
  - { label: "Cambridge Judge Business School - Cambridge study: sustainable energy rising in Bitcoin mining (April 2025; 138 TWh, about 0.5% of global electricity; 52.4% from renewables and nuclear among 49 surveyed firms)", url: "https://www.jbs.cam.ac.uk/2025/cambridge-study-sustainable-energy-rising-in-bitcoin-mining/" }
---

> **Adónde vas:** Podrás describir Bitcoin desde sus fundamentos: no como una "moneda" o una "inversión", sino como una red, un protocolo y una oferta fija de unidades monetarias gobernada por reglas que nadie puede cambiar de manera unilateral. Al terminar sabrás quién lo hizo, qué hace en realidad y qué te pide a cambio.

<figure>
  <video
    src="/videos/fixed-vs-infinite.mp4"
    poster="/videos/posters/fixed-vs-infinite.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Gráfica animada en paralelo: la oferta M2 del dólar estadounidense crece más allá de un 'techo de cristal' hasta superar los $22 billones, mientras la oferta de Bitcoin sube en escalones de halving y se aplana por debajo de su tope de 21 millones. La tarjeta final muestra la diferencia en ceros: 22,000,000,000,000 frente a 21,000,000."
  ></video>
  <figcaption>Dos calendarios de emisión, lado a lado. USD: más de $22 billones en M2 ($23.3 billones en agosto de 2026), sin tope. BTC: 21 millones, fijos.</figcaption>
</figure>

## 1. Un correo extraño

El viernes 31 de octubre de 2008, día de Halloween, a las 2:10 de la tarde (hora del este de Estados Unidos), un correo llegó a la lista de correo Cryptography de metzdowd.com. El remitente era alguien que se hacía llamar Satoshi Nakamoto. El asunto no llamaba la atención: *"Bitcoin P2P e-cash paper"* (un artículo sobre efectivo electrónico P2P). El cuerpo era corto. Tenía una oración de introducción, una lista de las cinco propiedades principales del sistema y el resumen del whitepaper.

Enlazaba a un PDF en bitcoin.org: [*Bitcoin: A Peer-to-Peer Electronic Cash System* (PDF en inglés)](/bitcoin.pdf). Nueve páginas. Ocho referencias. Nada de marketing.

El contexto importa. Lehman Brothers había quebrado seis semanas antes. La crisis financiera estaba en plena ebullición. El gobierno de Estados Unidos acababa de firmar un rescate bancario de $700,000 millones (dólares estadounidenses). Todas las grandes economías corrían para evitar que su sistema bancario implosionara. El balance de la Reserva Federal (la suma de todo lo que poseía, incluidos los préstamos que había hecho) se había más que duplicado en siete semanas: de unos $926,000 millones el 10 de septiembre a $1.97 billones el 29 de octubre.

El correo de Satoshi fue, visto en retrospectiva, la versión educada de *"Quizá mejor prueben esto"*.

Sesenta y cuatro días después, el 3 de enero de 2009, Satoshi minó el primer bloque de la red Bitcoin. Incrustada en ese bloque, de forma permanente e infalsificable, había una cadena de texto:

> *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"*

Era el titular de portada del *Times* de Londres esa mañana (el ministro de Hacienda británico, al borde de un segundo rescate a los bancos). Sigue ahí, en cada copia completa de la cadena de bloques (blockchain) de Bitcoin que existe en el planeta.

Este capítulo trata de lo que señalaba ese correo extraño.

## 2. Qué es Bitcoin (y qué no)

La mayoría de la gente conoce Bitcoin por su precio. Esa es la puerta equivocada. Empecemos de nuevo.

**Bitcoin es, al mismo tiempo, tres cosas:**

- **Una red** - miles de computadoras en todo el mundo que corren software compatible, se comunican entre sí y mantienen un registro compartido
- **Un protocolo** - las reglas precisas que sigue cada una de esas computadoras: qué es una transacción válida, qué es un bloque válido, cómo se emiten las unidades nuevas, qué gana en caso de empate
- **Una unidad de cuenta** - el activo con una oferta de 21 millones cuyos movimientos rastrea esa red

Y, sobre todo, **Bitcoin no es:**

- Una acción - no hay ninguna empresa detrás
- Un token - no está construido sobre otra red
- Una app de pagos - es la capa que está debajo de las apps de pagos
- "Cripto" - eso es un paraguas de marketing que se refiere más que nada a otras cosas

Bitcoin no tiene CEO. Ni junta directiva. Ni sede. Ni entidad legal. Ni presupuesto de marketing. Ni servicio al cliente. Si tienes una pregunta, lees el código. Si quieres usarlo, corres el software. Si quieres cambiarlo, tendrás que convencer a todos los demás participantes de cambiar también, cosa que ya se ha intentado y a la que llegaremos.

Esto es *profundamente* distinto de todo lo demás en el sistema financiero moderno. También es el único diseño que produce las propiedades que enumeramos al final del capítulo 1.

## 3. El whitepaper en cinco minutos

El whitepaper tiene nueve páginas y se lee en una hora. El argumento va así:

**El problema.** El comercio en línea depende de terceros de confianza (bancos, procesadores de pagos) para liquidar las transacciones. Esos intermediarios pueden revertir pagos, así que los comercios se protegen del fraude pidiendo a sus clientes más información de la que necesitarían de otro modo. Los intermediarios también agregan costo y fricción. El efectivo funciona sin terceros de confianza. El efectivo en línea, hasta Bitcoin, no.

**La propuesta.** Un sistema de efectivo digital en el que las transacciones se transmiten a una red, se agrupan en bloques y se ordenan mediante un cómputo competitivo llamado prueba de trabajo (proof-of-work). La cadena más larga de esos bloques, la que tiene más prueba de trabajo detrás, es la verdad.

**La idea clave.** La red se pone de acuerdo sobre el orden de las transacciones *sin* que nadie mande, porque reorganizar bloques pasados se vuelve exponencialmente más difícil cuanto más atrás vas. El sistema no tiene botón de apagado ni editor.

**La economía.** Los participantes que agregan bloques nuevos (los "mineros") cobran en bitcoin recién emitido más las comisiones de transacción. El whitepaper en sí solo dice que entrará en circulación un "predetermined number" (número predeterminado) de monedas. Las cifras llegaron con el software en enero de 2009, cuando Satoshi anunció un total de 21 millones de monedas, con una emisión que se reduce a la mitad cada cuatro años.

Eso es todo. Ese es el whitepaper. El resto es ingeniería.

## 4. El tope de 21 millones

¿De dónde salen los 21 millones?

Bitcoin emite unidades nuevas como recompensa por minar cada bloque. Un bloque aparece más o menos cada 10 minutos. La recompensa empezó en 50 BTC y se reduce a la mitad cada 210,000 bloques, aproximadamente cada cuatro años.

Estas son las cuentas:

```
50 + 25 + 12.5 + 6.25 + 3.125 + ... = 100 BTC (one block's reward in each era, added up)
210,000 blocks per era x 100 BTC = 21,000,000 BTC (rounded; actual: 20,999,999.9769)
```

La oferta es una serie geométrica que converge. La emisión nueva va cayendo hacia cero y, como Bitcoin cuenta en satoshis enteros, el subsidio llega exactamente a cero en el bloque 6,930,000, alrededor del año 2140.

El tope lo hace cumplir cada nodo completo de la red. Si un minero intentara emitir más de lo que permite el calendario, todos los demás nodos rechazarían el bloque por inválido. El tope no es una promesa. No es una ley. No es una recomendación. Es una propiedad del software que corre cada participante.

Para cambiar el tope de 21 millones habría que convencer a prácticamente todos los operadores de nodos del planeta de correr otro software. El costo político de hacerlo es precisamente el contrato social que hace valioso a Bitcoin: si lo rompes, rompes justo lo que querías heredar.

Esto es lo que significa "dinero sólido", en términos técnicos. No "prometemos tener cuidado", sino "las reglas son las reglas y puedes verificarlas por tu cuenta".

## 5. La prueba de trabajo, el reloj más ruidoso del mundo

La minería es la parte que más gente entiende mal. Vamos a entenderla bien.

Un bloque de Bitcoin es solo una lista de transacciones más un encabezado. Para "minar" un bloque, una computadora intenta encontrar un número (un "nonce") tal que el hash criptográfico del encabezado quede por debajo de cierto objetivo. La mayoría de los números no sirven. Pruebas uno, compruebas, pruebas otro, compruebas. Billones de veces por segundo.

Cuando alguien encuentra un nonce válido, transmite el bloque a la red. Todos comprueban el trabajo (es barato: un solo hash) y lo agregan a su copia de la cadena.

¿Para qué tanto esfuerzo? Por dos razones.

**Una: es el reloj de la red.** Más o menos cada 10 minutos aparece un bloque. Esa cadencia ancla todo el sistema. Sin prueba de trabajo, no hay una forma objetiva de que participantes repartidos por todo el mundo se pongan de acuerdo sobre qué pasó primero.

**Dos: hace que reescribir la historia salga caro.** Para reorganizar bloques viejos, un atacante tendría que rehacer toda la prueba de trabajo acumulada desde entonces, y al mismo tiempo superar al resto de la minería del mundo. Cuanto más profundo el bloque, más astronómico el costo. Después de seis bloques (más o menos una hora), un atacante con la décima parte del poder de minería del mundo tiene una probabilidad de alrededor de 1 entre 1,700 de alcanzar la cadena algún día, según el análisis de Meni Rosenfeld de 2012. Solo un atacante con la mayor parte del poder de minería podría contar con lograrlo.

El consumo de energía no es una falla de diseño: es el diseño. Es lo que convierte la realidad física (electricidad, hardware, tiempo) en la seguridad que protege cada bitcoin que existe. El oro obtiene sus propiedades monetarias de lo difícil que es sacarlo de la tierra. Bitcoin obtiene las suyas de lo difícil que es agregarle bloques. El mecanismo es distinto. El papel es el mismo.

## 6. El calendario de halvings

Cada 210,000 bloques, la recompensa de bloque se reduce a la mitad. No es una encuesta de opinión. Es una línea de código que cada nodo hace cumplir.

| Halving | Altura de bloque | Fecha aproximada | Nueva recompensa |
|---|---|---|---|
| Génesis | 0 | 3 de enero de 2009 | 50 BTC |
| Primero | 210,000 | 28 de noviembre de 2012 | 25 BTC |
| Segundo | 420,000 | 9 de julio de 2016 | 12.5 BTC |
| Tercero | 630,000 | 11 de mayo de 2020 | 6.25 BTC |
| Cuarto | 840,000 | 20 de abril de 2024 (UTC) | 3.125 BTC |
| Quinto | 1,050,000 | ~2028 | 1.5625 BTC |

La tasa anual de emisión de bitcoin nuevo, alta en sus inicios, era de alrededor de 0.82% en octubre de 2026, más o menos la mitad del ritmo al que la minería aumentó las existencias mundiales de oro en 2025 (entre 1.5 y 1.7%). Después del quinto halving, previsto hacia 2028, será de alrededor de 0.4%. En el bloque 6,930,000, hacia 2140, llega a cero. El [tema a fondo sobre el calendario de emisión (en inglés)](/rabbit-hole/supply) tiene las cuentas.

Compáralo con el dinero fiat (fiduciario). La oferta monetaria M2 de Estados Unidos se multiplicó por más de tres entre enero de 2008 y agosto de 2026, de unos $7.5 billones a $23.3 billones. En esos mismos años, la oferta de Bitcoin, lanzado en enero de 2009, siguió su camino predeterminado, sin importar quién estuviera en el gobierno.

Así se ve la escasez cuando está escrita en matemáticas y no en políticas.

## 7. La pregunta de quién manda

Mucha gente, al oír "sin CEO, sin empresa", supone que Bitcoin debe ser entonces tierra de nadie. No lo es.

Hay tres grupos de participantes, y se vigilan unos a otros:

- **Operadores de nodos** - cualquiera que corra software de Bitcoin que valide cada transacción y cada bloque. Su copia de las reglas es lo que cuenta como Bitcoin. Hay decenas de miles.
- **Mineros** - computadoras especializadas que compiten por agregar el siguiente bloque a cambio de la recompensa. Producen bloques, pero no *hacen las reglas*; si producen un bloque inválido, los nodos lo rechazan y el trabajo se pierde.
- **Desarrolladores** - las personas que escriben el software. Hay varias implementaciones independientes; la dominante se llama Bitcoin Core. Los desarrolladores pueden proponer cambios, pero no imponerlos; los nodos eligen qué software correr.

<figure>
  <img src="/diagrams/network-topology.svg" alt="Dos topologías de red, lado a lado. A la izquierda, un banco central: un único centro institucional, solo. A la derecha, la red Bitcoin: unos treinta y cinco nodos pares repartidos por el panel y conectados con sus vecinos en una malla orgánica, sin nodo central." />
  <figcaption>Un banco central, frente a decenas de miles de nodos de Bitcoin. Sin centro, sin sede, sin botón de apagado.</figcaption>
</figure>

Esta es la parte de verdad radical. **Nadie manda.** Ni el minero más grande. Ni el desarrollador más prolífico. Ni quien más bitcoins tiene. Las reglas las sostiene todo el que corre un nodo, y cambiarlas exige un acuerdo casi universal. Ha habido intentos de "toma de control", sobre todo en 2017, por parte de una coalición de grandes mineros y empresas, y la red los derrotó simplemente con seguir haciendo cumplir las reglas existentes. La coalición canceló su bifurcación planeada, SegWit2x, en noviembre de 2017 por falta de consenso.

**Sobre Satoshi.** La persona o personas que crearon Bitcoin dejaron de escribir en público en diciembre de 2010. No dejaron testamento, ni marca registrada, ni fundación. Casi ninguna de las monedas que se cree que minaron se ha movido jamás. No sabemos quiénes eran. Probablemente nunca lo sabremos. Y eso es una ventaja: no hay un fundador al que capturar, coaccionar o comprometer. Bitcoin ha estado sin dueño durante casi toda su existencia. Eso es parte de lo que lo hace duradero.

Si quieres profundizar en esto (qué significa "descentralizado" en realidad, dónde queda Bitcoin en ese espectro y cómo se derrotó el intento de toma de control de 2017), lee el [tema a fondo sobre la descentralización (en inglés)](/rabbit-hole/decentralization).

## 8. Las propiedades, puestas a prueba

El capítulo 1 terminó con una lista de seis propiedades que querríamos del dinero sólido. Veamos cómo le va a Bitcoin con cada una:

- **Portátil** - bitcoin se mueve a la velocidad de un paquete de internet. Mil millones de dólares pueden cruzar cualquier frontera en minutos.
- **Divisible** - un bitcoin se divide en 100 millones de satoshis. (El [tema a fondo sobre las unidades de Bitcoin (en inglés)](/rabbit-hole/bitcoin-units) muestra la escala completa.)
- **Duradero** - la red funciona desde enero de 2009. Sus dos peores incidentes se repararon, cada uno, en menos de un día. En agosto de 2010 un bug creó 184,000 millones de BTC, y la cadena reparada los borró (ver [la autopsia del bug de inflación (en inglés)](/rabbit-hole/inflation-bug-postmortem)). En marzo de 2013 la cadena se partió en dos (ver [la bifurcación de 2013](/es/a-fondo/bifurcacion-de-2013)). Tus monedas existen mientras exista la red.
- **Verificable** - puedes correr un nodo en una laptop y verificar por tu cuenta toda la historia. Sin necesidad de confiar en nadie.
- **Escaso** - con un tope de 21 millones fijado por código que cada nodo hace cumplir. El tope nunca se ha subido. Casi con certeza nunca se subirá.
- **Soberano** - ningún gobierno, empresa ni individuo puede emitir, congelar, confiscar ni invalidar tus bitcoins sin tu clave privada.

El oro también cumple con la mayoría, y fue, durante miles de años, el mejor dinero del mundo. La tesis de Bitcoin es que cumple las seis *y además* elimina las desventajas del oro (la custodia, la divisibilidad a pequeña escala, la velocidad de liquidación). Si esa tesis se sostiene es algo que decidirás por tu cuenta de aquí al capítulo 6.

## 9. Las desventajas, con honestidad

"Solo Bitcoin. Sin tonterías." también vale para los argumentos a favor.

**Volatilidad.** El precio de bitcoin es volátil en términos fiat. De su máximo de octubre de 2025 a su mínimo de junio de 2026, el precio diario cayó alrededor de 53%. En parte porque la monetización es un proceso, no un evento; en parte porque el activo es pequeño frente a la riqueza mundial.

**Velocidad de liquidación on-chain.** Una transacción de Bitcoin tarda unos 10 minutos en confirmarse y una hora en considerarse liquidada del todo. Es una decisión de diseño deliberada (una liquidación más lenta hace que el sistema sea más difícil de atacar), pero significa que pagar en la cadena no es ideal para comprar un café. (La red Lightning resuelve esto, en su mayor parte; capítulo 5.)

**Curva de aprendizaje.** La experiencia de uso ha mejorado muchísimo, pero todavía no es tan fluida como la app de tu banco. La autocustodia exige que te hagas responsable de tus claves. Perderlas es perder tus monedas. No hay mesa de ayuda.

**Consumo de energía.** La red de minería de Bitcoin usa bastante electricidad: alrededor de 0.5% del consumo mundial, unos 138 TWh al año, según una estimación de la Universidad de Cambridge de 2025. Los mineros encuestados por Cambridge obtenían 52.4% de su energía de renovables y nuclear. Esa energía no se desperdicia (asegura la red), pero tampoco es gratis. Si ese costo vale lo que compra es una cuestión de valores.

**Riesgo de custodia.** Si haces autocustodia, el riesgo lo cargas tú. Si no la haces, has reintroducido exactamente los terceros de confianza que Bitcoin se diseñó para eliminar. Las dos opciones tienen formas de fallar.

Ninguna de estas desventajas es fatal. Ninguna está escondida. Son el precio de la entrada.

## 10. Adónde vamos desde aquí

Ya conociste Bitcoin en el plano conceptual. Sabes qué es, quién lo hizo, por qué tiene las propiedades que tiene y qué cuesta usarlo.

El capítulo 3 es *cómo funciona por dentro*: la maquinaria. Bloques, transacciones, el mempool, comisiones, UTXOs. El modelo que te permite razonar sobre Bitcoin en vez de solo creer en él.

El capítulo 4 es *tenerlo de verdad*. Frases semilla (también llamadas frases de recuperación), billeteras de hardware (hardware wallets), autocustodia. Lo vas a hacer, no solo a leer sobre ello.

Por ahora, quédate con lo que acabas de aprender. **[El dinero se rompió en 1971](/es/glosario/que-paso-en-1971). Seis semanas después de la caída de Lehman Brothers, alguien propuso una alternativa. Sigue funcionando, el calendario de emisión sigue en su curso y el tope de 21 millones nunca se ha subido.** Ese es el hecho básico. Todo lo demás es detalle.

> **Consejo pro:** Si quieres verificar *cualquier* afirmación de este capítulo, el [whitepaper](/bitcoin.pdf) tiene nueve páginas y no ha cambiado desde 2009. El [bloque génesis](https://chainquery.com/rpc/getblock) sigue ahí (corre `getblock` en cualquier nodo activo con el hash `000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f`), con el titular del *Times* incrustado. La red lleva funcionando, con código fuente público, desde enero de 2009. Verifica, no confíes.
