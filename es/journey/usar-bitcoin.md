---
title: "Usar Bitcoin"
slug: usar-bitcoin
translationOf: using-bitcoin
sourceHash: "436eede24802"
sourceCommit: "d5353d2"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-13"
order: 5
goDeeper: ["mempool", "lightning-routing", "utxos"]
estimatedMinutes: 30
tagline: "Transacciones on-chain, comisiones en la práctica, lo básico de Lightning. Ya lo tienes; ahora, cómo usarlo de verdad."
prerequisites: ["be-your-own-bank"]
relatedTerms: ["lightning-network", "transaction-fee", "fee-estimation", "lightning-channel", "payment-channel", "bolt-11", "htlc-hashed-time-locked-contract", "replace-fee-rbf", "fee-bumping"]
ogImage: "/diagrams/og/bitcoin-lifecycle.png"
ogImageAlt: "Último cuadro de la animación del ciclo de vida de una transacción de Bitcoin. La billetera de Alice, a la izquierda, muestra la transacción que envió (Para bc1q...x4z, Monto 0.1 BTC, Comisión 20 sat/vB, botón ENVIAR). La billetera de Bob, a la derecha, muestra la recepción (+0.1 BTC) con el contador de confirmaciones en Definitivo, en naranja. La franja de la cadena de bloques en la parte inferior muestra siete bloques consecutivos, del 920,247 al 920,253; el bloque de Alice, el 920,251, está resaltado en naranja. Leyenda: Tres bloques de profundidad. Prácticamente definitivo."
sources:
  - { label: "mempool.space - live fee dashboard", url: "https://mempool.space" }
  - { label: "Bitcoin developer guide - transactions", url: "https://developer.bitcoin.org/devguide/transactions.html" }
  - { label: "BIP 125 - Opt-in Full Replace-by-Fee Signaling", url: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki" }
  - { label: "Lightning Network whitepaper (Poon & Dryja, 2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "ChainQuery - fee pressure dashboard", url: "https://chainquery.com/fee-pressure" }
  - { label: "BIP 141 - Segregated Witness (virtual size is transaction weight divided by 4)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "mempool.space API docs - recommended fees (fastestFee, halfHourFee, hourFee)", url: "https://mempool.space/docs/api/rest#get-recommended-fees" }
  - { label: "Bitcoin Core source - fee estimator tracks how long past transactions took to confirm", url: "https://github.com/bitcoin/bitcoin/blob/master/src/policy/fees/block_policy_estimator.h" }
  - { label: "Bitcoin Core PR #34075 - mempool-based fee estimation (merged August 2026 for version 32.0)", url: "https://github.com/bitcoin/bitcoin/pull/34075" }
  - { label: "Ordinals docs - Runes specification (activates on block 840,000)", url: "https://docs.ordinals.com/runes/specification.html" }
  - { label: "mempool.space - block 840,002, first block over 500 sat/vB median after the April 20, 2024 halving", url: "https://mempool.space/block/00000000000000000002c0cc73626b56fb3ee1ce605b0ce125cc4fb58775a0a9" }
  - { label: "mempool.space - block 840,005, median fee rate about 2,879 sat/vB", url: "https://mempool.space/block/000000000000000000027b0ec0e3acadd018cd19e7dd976602f216a1bc12d079" }
  - { label: "mempool.space - block 840,064 (11:00 UTC April 20, 2024), last of the run over 500 sat/vB", url: "https://mempool.space/block/00000000000000000001289854c5bbc59c15dc0d0e73ba477222aa8f7da90e04" }
  - { label: "mempool.space - mempool size graph, all-time view (over 144 vMB, a full day of blocks, waiting at every 12-hour reading from November 3, 2023 to July 14, 2024)", url: "https://mempool.space/graphs/mempool#all" }
  - { label: "Bitcoin Core GUI source - Increase transaction fee menu item", url: "https://github.com/bitcoin-core/gui/blob/master/src/qt/transactionview.cpp" }
  - { label: "Electrum source - Bump fee button", url: "https://github.com/spesmilo/electrum/blob/master/electrum/gui/qml/components/TxDetails.qml" }
  - { label: "Bitcoin Core 28.0 release notes (October 2024) - mempoolfullrbf default changed from 0 to 1", url: "https://bitcoincore.org/en/releases/28.0/" }
  - { label: "Bitcoin Core 30.0 release notes (October 2025) - wallet fee bumps no longer require BIP-125 signaling", url: "https://bitcoincore.org/en/releases/30.0/" }
  - { label: "Bitcoin Optech - Child pays for parent (CPFP)", url: "https://bitcoinops.org/en/topics/cpfp/" }
  - { label: "Bitcoin Core source - kernel/mempool_options.h (default mempool expiry 336 hours)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/mempool_options.h" }
  - { label: "ChainQuery - abandontransaction RPC reference", url: "https://chainquery.com/rpc/abandontransaction" }
  - { label: "blockchain.com - bitcoin market price (about $63,800 on April 20, 2024)", url: "https://www.blockchain.com/explorer/charts/market-price" }
  - { label: "Bitcoin Core source - kernel/chainparams.cpp (10-minute block target)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "BOLT 2 - Peer protocol (the funder puts up the channel's bitcoin; dual funding is an option)", url: "https://github.com/lightning/bolts/blob/master/02-peer-protocol.md" }
  - { label: "BOLT 4 - Onion routing (the route is constructed by the origin node)", url: "https://github.com/lightning/bolts/blob/master/04-onion-routing.md" }
  - { label: "mempool.space - Lightning network statistics (median channel fee 100 ppm plus 0.5 sat base, August 2026)", url: "https://mempool.space/lightning" }
  - { label: "BOLT 11 - Invoice protocol (lnbc prefix; expiry defaults to 3600 seconds when not set)", url: "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md" }
  - { label: "LND API docs - AddInvoice (expiry defaults to 86,400 seconds)", url: "https://lightning.engineering/api-docs/api/lnd/lightning/add-invoice/" }
  - { label: "Core Lightning docs - invoice (expiry defaults to 604,800 seconds)", url: "https://docs.corelightning.org/reference/invoice" }
  - { label: "LUD-16 - Lightning Address specification", url: "https://github.com/lnurl/luds/blob/luds/16.md" }
  - { label: "BOLT 12 - Offers (added to the Lightning spec in September 2024)", url: "https://github.com/lightning/bolts/blob/master/12-offer-encoding.md" }
  - { label: "Bitcoin Optech - Offers (implementation progress by year)", url: "https://bitcoinops.org/en/topics/offers/" }
  - { label: "Jameson Lopp - Known physical bitcoin attacks (365 entries, December 2014 to October 2026)", url: "https://github.com/jlopp/physical-bitcoin-attacks" }
---

> **Adónde vas:** Vas a enviar una transacción on-chain con una comisión que elegiste a propósito, generar una factura Lightning (invoice) y recibir un pago por Lightning. Las dos cosas deberían sentirse distintas. Las dos deberían dejarte un modelo mental que te sirva para saber cuándo usar cada una.

<figure>
  <video
    src="/videos/bitcoin-lifecycle.mp4"
    poster="/videos/posters/bitcoin-lifecycle.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Animación paso a paso del ciclo de vida de una transacción de Bitcoin on-chain. La billetera de Alice muestra tres campos (dirección de destino, monto, tasa de comisión) y un botón ENVIAR. Un paquete de transacción sale de su billetera y se une al mempool, una fila de transacciones sin confirmar ordenada por comisión. La transacción de Alice se acomoda en su franja de comisión. Un minero selecciona la parte superior del mempool; las transacciones elegidas, incluida la de Alice, entran a toda velocidad en un bloque en formación. El bloque se sella y se encaja al final de la cadena. La billetera de Bob recibe una notificación de más 0.1 BTC. Un contador de confirmaciones avanza de 1 a 2 a 3 a Definitivo. Pilares de cierre: Público. Definitivo. Tuyo."
  ></video>
  <figcaption>Envías. Espera en el mempool, ordenada por comisión. Se sella en un bloque. Se encaja en la cadena. Se confirma del lado de quien recibe. Ningún intermediario en todo el circuito.</figcaption>
</figure>

## 1. Ya tienes bitcoin. ¿Y ahora qué?

La autocustodia es la base. *Usarlo* es lo que le da sentido.

La mayoría de la gente, una vez que hace autocustodia, trata sus bitcoins como un bono de ahorro que le da miedo tocar. Está bien: bitcoin es realmente excelente como instrumento de ahorro, y *no vender* es una estrategia real. Pero Bitcoin también es dinero, y el dinero que nunca circula no es realmente dinero. Este capítulo trata de cómo usarlo.

Las dos capas que nos importan:

- **On-chain.** Transacciones que se liquidan en un bloque de Bitcoin. Definitivas, globales, más lentas, con comisión. Ideal para: montos grandes, pagos poco frecuentes, cualquier cosa que quieras dejar registrada para siempre.
- **Lightning.** Pagos que se mueven por una red de canales de pago bidireccionales construida sobre Bitcoin. Instantáneos, casi gratis, montos más pequeños. Ideal para: el café, propinas, suscripciones a podcasts, micropagos, el día a día.

Vas a usar las dos. Saber cuál es cuál ya es la mayor parte de la habilidad.

## 2. Anatomía de un envío on-chain

Abre tu billetera. Toca Enviar. Te va a pedir tres cosas:

- **Una dirección de destino.** Una cadena larga que empieza con `bc1` (formato moderno) o con `3` o `1` (formatos más antiguos). Pégala siempre desde una fuente confiable. Revisa siempre dos veces varios caracteres del principio y del final. Trata las direcciones como números de cuenta, no como URLs.
- **Un monto.** En BTC o en sats, tú decides. Las billeteras modernas te dejan alternar entre las dos.
- **Una tasa de comisión.** Normalmente en **sat/vB** (satoshis por byte virtual), el precio por cada unidad del tamaño de tu transacción. Un byte virtual funciona como un byte, salvo que los datos de firma cuentan a un cuarto de su tamaño real.

Algunas cosas para interiorizar:

- **Las comisiones no son un porcentaje del monto.** Enviar 1 BTC cuesta la misma comisión que enviar 0.001 BTC (suponiendo que ambas transacciones usan el mismo número de entradas y salidas). La comisión paga por *espacio en el bloque*, no por mover valor. Por eso Bitcoin es más barato para transferencias grandes y proporcionalmente caro para las diminutas, y por eso existe Lightning.
- **Envía siempre una prueba pequeña primero** cuando uses una dirección nueva para cualquier monto serio. Unos cuantos miles de sats. Confirma que llegó. Luego envía el resto.
- **Revisar la dirección es tu responsabilidad.** Ninguna autoridad central puede revertir una transacción mal dirigida. Bitcoin funciona exactamente como Bitcoin dice que funciona.

Muchas billeteras te sugieren tres tasas de comisión (por ejemplo, 2 sat/vB, 5 sat/vB y 12 sat/vB) que corresponden a "en aproximadamente una hora", "en aproximadamente media hora" y "en el siguiente bloque". Son estimaciones. Algunas se construyen a partir del mempool actual. Las versiones de Bitcoin Core hasta la 31 basan las suyas solo en cuánto tardaron en confirmarse las transacciones recientes a cada tasa de comisión. La versión 32, en pruebas previas al lanzamiento a octubre de 2026, también lee el mempool actual.

## 3. Leer el mempool

<figure>
  <video
    src="/videos/mempool.mp4"
    poster="/videos/posters/mempool.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Ciclo de vida animado del mempool. Una transacción se transmite y se propaga por cuatro nodos, cada uno de los cuales la agrega a su mempool local. Las transacciones se ordenan por tasa de comisión en franjas: más de 50 sat por byte virtual arriba, y va bajando hasta la franja de 1 a 5 sat por byte virtual abajo. Alice transmite temprano con una tasa de comisión baja; Bob transmite después con una tasa alta. Un minero mina el siguiente bloque tomando la franja de comisión más alta. La de Bob se confirma en ese bloque. Pasa el tiempo; los bloques siguientes van vaciando el mempool; al final, la transacción de comisión baja de Alice se confirma varios bloques después. Lema de cierre: Paga la tasa. O espera."
  ></video>
  <figcaption>El mempool es una fila ordenada por tasa de comisión. Las comisiones más altas se confirman primero. Las más bajas esperan, o al final se caen y hay que retransmitirlas.</figcaption>
</figure>

El mempool es la fila de transacciones sin confirmar, ordenada por tasa de comisión. Cada nodo tiene su propia copia; son casi idénticas (ver el capítulo 3).

Cuando el mempool está vacío (el espacio en el bloque supera la demanda), casi cualquier comisión entra en el siguiente bloque. Cuando está congestionado (la demanda supera la capacidad), el mercado de comisiones se pone serio, y las tasas de comisión pueden saltar a cientos o incluso miles de sat/vB.

En las horas previas al bloque 840,000, el 20 de abril de 2024, la tasa de comisión mediana en los bloques minados era de unos 60 a 110 sat/vB. Ese bloque trajo el cuarto halving, y también activó Runes, un nuevo protocolo de tokens. Dos bloques después, la mediana superó los 500 sat/vB. Se mantuvo por encima casi 11 horas, con un pico cercano a 2,900 sat/vB.

**Herramientas que te muestran el estado en vivo:**

- [**mempool.space**](https://mempool.space): el estándar. Visualización del mempool en vivo, estimaciones de comisión, tiempos de bloque.
- [**El tablero de presión de comisiones de ChainQuery**](https://chainquery.com/fee-pressure): lectura en vivo de lo que se está confirmando ahora mismo, servida desde un nodo de Bitcoin real.
- El [`estimatesmartfee`](https://chainquery.com/rpc/estimatesmartfee) de tu propio nodo, si corres uno.

Un flujo de trabajo sensato:

1. Revisa las estimaciones de comisión actuales antes de armar una transacción
2. Elige una tasa de comisión según qué tan pronto necesitas que se confirme
3. Si no tienes prisa, elige una tasa baja. En periodos tranquilos, una transacción con comisión baja suele confirmarse en cuestión de horas, pero en una racha de mucha actividad puede esperar días. De principios de noviembre de 2023 a mediados de julio de 2024, cada lectura de mempool.space (una cada 12 horas) mostró una fila de espera más grande de lo que un día entero de bloques podía absorber.
4. Si tienes prisa, paga más

No existe la comisión "correcta". Existe "la comisión que necesitas pagar para entrar en los próximos *N* bloques". Elige *N* según tu paciencia.

## 4. Replace-by-Fee (RBF): cuando tu transacción se atasca

<figure>
  <img src="/diagrams/bumping-stuck-tx.svg" alt="Diagrama de dos filas con los dos mecanismos para destrabar una transacción de Bitcoin. Fila superior, RBF: una transacción atascada a 5 sat por byte virtual (gris) es reemplazada por una nueva versión de la transacción, que gasta las mismas monedas, a 50 sat por byte virtual (naranja), que se confirma en el siguiente bloque mientras la original desaparece. Fila inferior, CPFP: una nueva transacción hija a 50 sat por byte virtual (naranja) gasta la salida de cambio de una transacción padre atascada a 5 sat por byte virtual (gris); padre e hija terminan en el siguiente bloque porque el minero ve la comisión combinada. Lema: Tu transacción no está atascada para siempre. Está en el nivel de comisión equivocado para las condiciones actuales." />
  <figcaption>Dos mecanismos, mismo resultado: una transacción atascada entra en el siguiente bloque. RBF reemplaza la original. CPFP la rescata con una transacción hija de comisión alta.</figcaption>
</figure>

Supón que enviaste a 5 sat/vB y luego una oleada en el mempool subió el piso a 50 sat/vB. Tu transacción se va a quedar ahí, quizá por horas, quizá hasta que el mempool vuelva a bajar. Si no puedes esperar:

**Replace-by-Fee (RBF, reemplazo por comisión)** ([BIP 125](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki)) te permite transmitir una nueva versión de la transacción, que gasta las mismas monedas, con una comisión más alta. Los mineros prefieren la versión que paga más; la original desaparece del mempool. Muchas billeteras lo hacen con un solo botón, normalmente con una etiqueta como "Subir comisión" o "Aumentar comisión".

Con el BIP 125, la transacción original señala con una bandera que es "reemplazable". Desde la versión 28.0 (octubre de 2024), los nodos de Bitcoin Core con la configuración por defecto aceptan un reemplazo con comisión más alta incluso sin esa bandera. Tu billetera puede negarse de todos modos a subirle la comisión a una transacción que no la tenga; la propia billetera de Bitcoin Core se negaba hasta la versión 30.0 (octubre de 2025).

Si la tuya no te deja subirla, tienes otra opción llamada **Child Pays for Parent (CPFP, el hijo paga por el padre)**: gastas la *salida de cambio* de tu transacción atascada con una comisión más alta, y así arrastras la transacción padre a un bloque junto con ella.

No memorices la mecánica. Memoriza el principio: **tu transacción no está atascada para siempre; solo está en el nivel de comisión equivocado para las condiciones actuales.** Espera o sube la comisión.

Si la comisión es tan baja que nunca se confirma, la mayoría de los nodos terminan por sacarla de sus mempools (la caducidad por defecto en Bitcoin Core es de dos semanas), y puedes volver a gastar esas monedas. Algunas billeteras te obligan a cancelar o "abandonar" primero la transacción vieja. Sigue siendo válida hasta que se confirme otra transacción que gaste las mismas monedas, así que todavía puede confirmarse si alguien la retransmite. Nunca pierdes bitcoin por una transacción atascada: los UTXOs siguen siendo tuyos; la transmisión simplemente no surtió efecto.

## 5. La red Lightning: un panorama general

Bitcoin on-chain es excelente para liquidaciones de alto valor y baja frecuencia. *No* es la capa adecuada para comprar un café de 4 dólares. La comisión es la misma si envías $4 o $4,000, así que en un día de mucha actividad puede costar más que el café.

Durante el pico de Runes de abril de 2024 (sección 3), la tasa de comisión mediana se mantuvo por encima de 500 sat/vB durante horas. Incluso a 500 sat/vB, un pago simple con una entrada y dos salidas (unos 141 bytes virtuales) costaba 70,500 sats, unos $45 al precio de ese día. Además, la primera confirmación tarda unos 10 minutos en promedio.

La red Lightning resuelve esto moviendo los pagos pequeños y frecuentes **fuera de la cadena (off-chain)**, y a la vez deja que cualquiera de las dos partes liquide en la cadena principal de Bitcoin en cualquier momento.

La mecánica, simplificada:

1. **Abrir un canal.** Dos partes (tú y otro nodo) bloquean bitcoin en una dirección multisig 2 de 2 mediante una transacción on-chain; normalmente una de las dos lo pone todo. Esa es la única transacción on-chain que vas a necesitar para miles de pagos posteriores entre ustedes.
2. **Actualizar el saldo.** Dentro del canal, tú y la otra parte pueden actualizar el saldo relativo tantas veces como quieran, casi al instante, con garantías criptográficas. Cada actualización es un mensaje firmado; la más reciente es la "verdad actual".
3. **Enrutar pagos.** Si no tienes un canal directo con la persona a la que quieres pagar, tu billetera encuentra un camino a través de los canales de otras personas (A le paga a B, que le paga a C, que le paga a tu destino) usando un mecanismo ingenioso llamado HTLC que ata cada salto al mismo secreto, de modo que el pago pasa de punta a punta o no pasa en absoluto.
4. **Cerrar el canal.** Cualquiera de las dos partes puede cerrarlo en cualquier momento transmitiendo a la cadena el último estado del canal. Los saldos finales se liquidan en la cadena principal de Bitcoin. Estás de vuelta en la capa 1.

<figure>
  <img src="/diagrams/lightning-channel.svg" alt="Un canal Lightning entre Alice y Bob. En la red principal de Bitcoin (mainnet), un bloque de APERTURA bloquea BTC en una multisig 2 de 2; después, un bloque de CIERRE liquida los saldos finales de vuelta en la cadena principal. Entre esos dos anclajes on-chain, el canal funciona off-chain con muchos pagos de ida y vuelta. Alice y Bob tienen cada uno líneas de canal punteadas hacia otros nodos fantasma, lo que indica que también tienen canales hacia la red Lightning más amplia." />
  <figcaption>Un canal entre Alice y Bob: se abre una vez on-chain, se paga libremente off-chain, se cierra on-chain si es que algún día se cierra. Cada lado tiene otros canales hacia la red más amplia.</figcaption>
</figure>

Un pago por Lightning no espera un bloque, así que normalmente se completa en segundos. Para pagos pequeños, las comisiones de enrutamiento suelen ser de unos pocos sats, muy por debajo de las comisiones on-chain. La liquidación es definitiva en el momento en que quien recibe ve el pago.

El whitepaper de Lightning ([Poon y Dryja, 2016](https://lightning.network/lightning-network-paper.pdf)) es denso pero legible. No necesitas leerlo para usar Lightning, pero deberías saber que existe.

## 6. Lightning en la práctica

<figure>
  <video
    src="/videos/lightning-mesh.mp4"
    poster="/videos/posters/lightning-mesh.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Malla animada de la red Lightning. Alice tiene un solo canal, con Bob. Usa ese mismo canal para pagarle a Bob directamente, y luego para enrutar pagos a Carol, Frank e Ivy a través de la red. La animación después se invierte para mostrar pagos que vuelven a Alice por ese único canal. El flujo bidireccional es la lección: un canal, muchos destinos, ambas direcciones."
  ></video>
  <figcaption>Alice abre un solo canal, con Bob. Ese mismo canal enruta pagos a cualquier destino alcanzable en la red, en ambas direcciones.</figcaption>
</figure>

Tres categorías de billeteras Lightning, ordenadas por soberanía. La categoría importa más que la app específica.

**Custodial.** Alguien más corre el nodo Lightning; tú tienes una cuenta. La configuración más fácil, casi sin complejidad operativa. Has vuelto a meter a un tercero de confianza. Está bien para saldos pequeños de uso diario, igual que está bien tener en el celular una billetera para el dinero del café. *No es el lugar para guardar nada serio.*

**No custodial, gestionada.** Corres un nodo Lightning *dentro de la app*, en tu celular, con la gestión de canales automatizada. Las claves son tuyas; de la complejidad operativa se encarga la app. El punto ideal para la mayoría de la gente después del capítulo 4.

**Totalmente soberana.** Corres un nodo Lightning en tu propio hardware. Máximo control, máxima complejidad. Funciona mejor junto al nodo que configuras en el [capítulo 6 (Soberanía)](/es/recorrido/soberania).

> **Puntos de partida, no dogmas.** El ecosistema de billeteras Lightning se mueve rápido. Las apps específicas van y vienen; las categorías son estables. Elige la opción más simple dentro de la categoría que encaje con tu modelo de confianza, verifica que siga recibiendo mantenimiento y empieza.

Para recibir un pago por Lightning: en tu billetera, toca "Recibir", ingresa un monto si quieres y obtendrás una cadena larga que empieza con `lnbc...` (una [factura BOLT 11](/es/glosario/bolt-11)) más un código QR. Cualquiera con una billetera Lightning puede pagarla.

Para enviar: pega una factura, toca Pagar, listo. El pago normalmente se completa en segundos.

## 7. Cuándo usar on-chain y cuándo Lightning

Una heurística que acierta en la mayoría de los casos:

<figure>
  <img src="/diagrams/on-chain-vs-lightning.svg" alt="Tres tarjetas lado a lado que muestran la capa de Bitcoin recomendada según el tamaño del pago. Pagos pequeños, menos de $50: Lightning; las comisiones y la velocidad lo favorecen. Pagos medianos, de $50 a unos pocos miles: cualquiera de las dos sirve; preferencia personal. Pagos grandes, por encima de unos pocos miles: on-chain; los límites de capacidad de los canales Lightning más la preferencia por liquidar en la cadena. Tres casos especiales debajo: destinatario sin billetera Lightning significa on-chain; pagos repetidos a la misma parte significan abrir un canal Lightning; guardar a largo plazo significa no moverlo en absoluto. Lema: mucha gente usa las dos; saber cuál es cuál ya es la mayor parte de la habilidad." />
  <figcaption>Tres carriles por tamaño de pago más tres casos especiales. La mayoría de los pagos del mundo real caben en algún lugar de esta tarjeta.</figcaption>
</figure>

Mucha gente usa las dos. Una billetera Lightning en el celular para lo del día a día; una billetera on-chain para guardar, de preferencia una billetera de hardware (hardware wallet).

## 8. Recibir pagos

La otra cara del envío: cómo lograr que te *paguen*.

**On-chain:**
- Genera una dirección nueva cada vez. Las billeteras modernas lo hacen automáticamente.
- Evita la reutilización de direcciones. Es una fuga de privacidad: cualquiera que vea la dirección puede ver después todo lo que recibas en ella.
- Comparte la dirección como texto o como código QR. Quien envía paga la tasa de comisión que elija. Si su pago se atasca, puedes destrabarlo tú con CPFP (sección 4) gastando tu nueva salida con una comisión más alta, si tu billetera lo permite.

**Lightning:**
- Genera una factura. Puedes especificar un monto (por ejemplo, "págame 5,000 sats") o dejarlo abierto ("págame cualquier monto").
- Las facturas vencen. Si una factura no dice cuándo, la especificación de facturas Lightning (BOLT 11) la considera válida por una hora. El software de los nodos suele traer un valor por defecto más largo, como 24 horas (LND) o una semana (Core Lightning). Cuando una vence, generas otra.
- Quien envía paga tu factura; el pago normalmente llega en segundos; la factura queda consumida.

Existe una convención llamada **Lightning Address** (una dirección Lightning; se ve como un correo electrónico: `you@yourdomain.com`) que permite que la gente te pague sin pedirte una factura nueva cada vez; un servidor web en ese dominio crea una nueva para cada pago. Es cómodo, pero requiere correr ese servidor o usar un servicio que lo haga. Opcional para la mayoría; útil si haces trabajo de cara al público y recibes propinas.

Las **Offers** (ofertas; [BOLT 12](/es/glosario/bolt), añadido a la especificación de Lightning en septiembre de 2024) son códigos de pago reutilizables que no necesitan servidor web. A octubre de 2026, la compatibilidad de las billeteras sigue siendo desigual.

## 9. Los efectos secundarios de la soberanía

Una vez que usas Bitcoin de verdad, algunas cosas que antes eran abstractas se vuelven tangibles:

- **Puedes pagarle a cualquiera, en cualquier lugar, a cualquier hora.** Sin horarios bancarios. Sin banca corresponsal. Sin "no podemos enviar a ese país". Una billetera en un celular con internet es una terminal financiera global.
- **La privacidad es tu responsabilidad.** Cada transacción on-chain es pública para siempre. Evita la reutilización de direcciones. Considera el control de monedas si manejas montos delicados. Tenemos en este sitio una guía de [buenas prácticas de privacidad](/downloads/bitcoin-privacy-best-practices.pdf) (PDF en inglés); léela antes de usar Bitcoin en serio.
- **Los errores son permanentes.** Dirección equivocada, monto equivocado, red equivocada: no hay mesa de ayuda. Prueba siempre con poco primero. Verifica siempre antes de enviar.
- **Eres un objetivo.** Cada persona que sabe que tienes bitcoin de verdad suma un poco a tu riesgo. A octubre de 2026, la lista pública de Jameson Lopp de ataques físicos contra personas y negocios que tienen bitcoin u otras criptomonedas lleva 365 entradas desde diciembre de 2014, 86 de ellas en 2025, y aclara que muchos ataques no se reportan públicamente. No hables en público de cuánto tienes. No pongas un letrero afuera de tu casa que diga "I HODL". La amenaza es baja para la mayoría de la gente, pero no es cero.

No son razones para evitar Bitcoin. Son las consecuencias operativas de salirte del mundo de los terceros de confianza. Vale la pena. Solo que son reales.

## 10. Tu meta

Antes del capítulo 6 (Soberanía: correr un nodo, multisig, seguridad operativa u op-sec), haz estas tres cosas:

- [ ] Envía una transacción on-chain deliberada: elige tú la tasa de comisión y mira cómo se confirma
- [ ] Abre un canal Lightning o fondea una billetera Lightning de autocustodia (la categoría no custodial gestionada de la sección 6 es el camino fácil)
- [ ] Envía y recibe un pago por Lightning: debería tomar segundos

Eso es todo. Estás usando Bitcoin, no solo guardándolo. Te damos la bienvenida a vivir de verdad en el nuevo sistema monetario.

> **Consejo pro:** Quienes dicen "Bitcoin es demasiado lento para pagos" normalmente están pensando solo en on-chain. Quienes dicen "Lightning es el futuro de los pagos" a veces se olvidan de que la capa on-chain existe. Las dos capas son reales, las dos tienen su trabajo, y usar bien Bitcoin significa saber cuál es cuál. El sistema se diseñó para ser flexible. Usa esa flexibilidad.
