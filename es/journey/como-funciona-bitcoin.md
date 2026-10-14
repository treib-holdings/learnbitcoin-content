---
title: "Cómo funciona Bitcoin"
slug: como-funciona-bitcoin
translationOf: how-bitcoin-works
sourceHash: "a9b385ddaa84"
sourceCommit: "d5353d2"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-14"
order: 3
goDeeper: ["utxos", "mempool", "mining"]
estimatedMinutes: 30
tagline: "Bloques, transacciones, minería, comisiones, UTXOs. La maquinaria, sin misterio y sin saltarse las partes que importan."
prerequisites: ["what-bitcoin-actually-is"]
relatedTerms: ["block", "transaction", "utxo-unspent-transaction-output", "mempool", "transaction-fee", "miner", "merkle-root", "nonce", "difficulty", "difficulty-retargeting", "full-node"]
ogImage: "/diagrams/og/alice-pays-bob.png"
ogImageAlt: "Alice le paga 0.5 BTC a Bob: diagrama de una transacción con UTXOs que muestra cómo se consume la entrada de 1.0 BTC y se crean dos UTXOs nuevos (0.5 BTC para Bob y 0.499 BTC de cambio para Alice), con 0.001 BTC de comisión para el minero."
sources:
  - { label: "Bitcoin developer documentation", url: "https://developer.bitcoin.org/reference/transactions.html" }
  - { label: "ChainQuery - inspect any block or transaction yourself", url: "https://chainquery.com" }
  - { label: "Bitcoin Wiki - block protocol spec", url: "https://en.bitcoin.it/wiki/Block" }
  - { label: "Mastering Bitcoin, 3rd edition (Andreas M. Antonopoulos and David A. Harding, CC-BY-SA)", url: "https://github.com/bitcoinbook/bitcoinbook" }
  - { label: "Mastering Bitcoin, ch. 9 - fees and fee rates (miners rank transactions by fee per unit of size)", url: "https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch09_fees.adoc" }
  - { label: "Mastering Bitcoin, ch. 12 - mining (ASICs, the 32-bit nonce and the extra nonce, subsidy plus fees, pool servers that build the candidate block, the 10-minute interval as a design compromise)", url: "https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch12_mining.adoc" }
  - { label: "mempool.space API - mining pools over the past year (named pools found all but 288 of 52,323 blocks, year to 9 October 2026)", url: "https://mempool.space/api/v1/mining/pools/1y" }
  - { label: "mempool.space - a one-input, two-output payment in block 970,600 (222 bytes, 141 virtual bytes)", url: "https://mempool.space/tx/951df0fc57709bd21518c24864826adeef3e7f43399da71f166304239550c9d5" }
  - { label: "mempool.space API - block fee rates over the past year (block median fee rate of 3 sat/vB or less in about 99% of samples, year to 9 October 2026)", url: "https://mempool.space/api/v1/mining/blocks/fee-rates/1y" }
  - { label: "Bitcoin Core source - default mempool size limit of 300 MB (src/kernel/mempool_options.h)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/mempool_options.h" }
  - { label: "Bitcoin Core source - CalculateNextWorkRequired: the 2016-block retarget and its factor-of-four limit (src/pow.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
  - { label: "BIP 9 - version bits: miners signal soft-fork readiness in the block version field", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "Bitcoin Wiki - block timestamp rules (later than the median of the last 11 blocks, at most 2 hours ahead)", url: "https://en.bitcoin.it/wiki/Block_timestamp" }
  - { label: "mempool.space API - block sizes and weights over the past year (average about 1.58 MB, October 2025 to October 2026; blockchain.com's average-block-size chart agrees)", url: "https://mempool.space/api/v1/mining/blocks/sizes-weights/1y" }
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double spending (2012), Table 1: success odds by attacker share and confirmations", url: "https://arxiv.org/abs/1402.2009" }
  - { label: "Bitcoin whitepaper, section 11 - Satoshi's own attacker calculation", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Kraken - cryptocurrency deposit processing times (credits bitcoin deposits after three confirmations)", url: "https://support.kraken.com/articles/203325283-cryptocurrency-deposit-processing-times" }
  - { label: "Bitcoin Core source - RecommendedNumConfirmations is 6; the wallet shows 'Confirming (n of 6 recommended confirmations)' (src/qt/transactionrecord.h)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/qt/transactionrecord.h" }
  - { label: "BitMEX Research - Bitcoin's consensus forks: at least three identifiable chain splits, in 2010, 2013 and 2015 (Wayback Machine)", url: "https://web.archive.org/web/20240110121831/https://blog.bitmex.com/bitcoins-consensus-forks/" }
  - { label: "bitcoin.org alert - July 2015 chain forks (a 6-block fork on 4 July, after BIP 66, from miners who were not validating blocks)", url: "https://bitcoin.org/en/alert/2015-07-04-spv-mining" }
  - { label: "bitcoin-data/stale-blocks - public dataset of stale blocks (between 28 and 93 a year from 2022 through 2025, as of October 2026)", url: "https://github.com/bitcoin-data/stale-blocks" }
  - { label: "mempool.space API - every difficulty adjustment (summed, about 1.03 x 10^29 hashes of total work through block 970,600)", url: "https://mempool.space/api/v1/mining/difficulty-adjustments/all" }
  - { label: "mempool.space API - network hash rate (about 995 EH/s on 9 October 2026; total work divided by hash rate is about 3.3 years)", url: "https://mempool.space/api/v1/mining/hashrate/1m" }
  - { label: "Cambridge Judge Business School - Cambridge study (April 2025): about 138 TWh a year, roughly 0.5% of global electricity", url: "https://www.jbs.cam.ac.uk/2025/cambridge-study-sustainable-energy-rising-in-bitcoin-mining/" }
  - { label: "blockchain.com - total size of the blockchain (774,075 MB on 8 October 2026)", url: "https://www.blockchain.com/explorer/charts/blocks-size" }
  - { label: "Bitcoin Core source - the -assumevalid option (src/init.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/init.cpp" }
---

> **Adónde vas:** Vas a poder seguir una transacción desde "tocar Enviar" hasta "ya es prácticamente definitiva". Vas a entender qué hacen en realidad el mempool, las comisiones, los bloques y los mineros, y vas a tener un modelo mental lo bastante concreto para razonar sobre Bitcoin en lugar de solo creer en él.

## 1. El botón de enviar

Alice tiene 1 BTC. Quiere enviarle 0.5 BTC a Bob. Abre su billetera, escribe la dirección de Bob, pone el monto, elige una comisión y toca Enviar.

Unos segundos después, la billetera de Bob muestra el pago entrante como "sin confirmar". Unos diez minutos más tarde, muestra "1 confirmación". Más o menos una hora después de que Alice tocó Enviar, ya dice "6 confirmaciones": en la práctica, irreversible.

Este capítulo es lo que pasa en medio. Vamos capa por capa. Al final, vas a poder dibujarlo en una servilleta.

## 2. No hay saldos

Esta es la primera idea que la mayoría de la gente entiende mal:

**Bitcoin no lleva saldos de cuentas.** No hay en ningún lado una fila que diga *"Alice: 1.00000000 BTC"*. El registro contable de Bitcoin (su "libro mayor") no es eso.

Lo que el registro lleva son **transacciones**, y cada transacción crea **salidas** que después se pueden gastar. Una salida *no gastada* (un UTXO, por "unspent transaction output", salida de transacción no gastada) es lo único que existe. Tu "saldo" es solo la suma de todos los UTXOs que tu billetera puede gastar.

Un modelo mental útil: Bitcoin es **como el efectivo, no como una cuenta bancaria**.

Cuando pagas $4.30 (dólares estadounidenses) en una cafetería con un billete de $5, no le dices a quien atiende "descuéntame $4.30 de mis $5". Entregas un billete, un objeto concreto. Te devuelven $0.70 de cambio como un conjunto *nuevo* de billetes y monedas. Tu billetera contiene objetos físicos distintos a los de antes.

Los UTXOs funcionan exactamente así. El "1 BTC" de Alice puede ser en realidad un solo UTXO de 1 BTC, o dos UTXOs de 0.5 BTC cada uno, o 100 UTXOs de 0.01 BTC, o cualquier otra combinación. La billetera esconde la diferencia. La cadena de bloques (blockchain) no tiene esa opción.

Esto suena a un detalle curioso. En realidad es la base de todo lo demás.

## 3. La anatomía de una transacción

La transacción de Alice a Bob tiene tres partes:

- **Entradas.** Referencias a UTXOs que Alice controla ahora mismo. Cada entrada dice "estoy gastando esta salida específica de esta transacción pasada específica". Cada entrada incluye una firma criptográfica: la prueba de que Alice tiene la clave privada autorizada para gastar ese UTXO.
- **Salidas.** Adónde va el bitcoin. En el caso de Alice, dos salidas: 0.5 BTC a la dirección de Bob y unos 0.499 BTC de vuelta a ella misma como cambio. (El cambio va a una dirección *nueva* que la billetera de Alice genera automáticamente.)
- **La comisión.** Lo que sobra al restar las salidas de las entradas. No es un campo aparte: es todo lo que no reclamaste de vuelta como cambio. Los mineros se lo quedan como recompensa por incluir tu transacción.

En el ejemplo de Alice, las entradas suman 1.0 BTC, las salidas suman 0.999 BTC y los 0.001 BTC que faltan son la comisión.

Esa comisión es un número redondo para que el ejemplo sea simple, y es mucho más de lo que un pago así suele necesitar. Las comisiones se cobran según el tamaño de la transacción, no según el monto que mueve (más sobre las tasas de comisión en la sección 4).

Un [sat](/es/glosario/satoshi-unidad), abreviatura de satoshi, es la unidad más pequeña de bitcoin. Un bitcoin son 100 millones de sats, así que la comisión de 0.001 BTC de Alice son 100,000 sats. El tamaño se mide en bytes virtuales, que cuentan los datos de las firmas con descuento. Un pago como el de Alice ocupa unos 141 bytes virtuales. En el año que terminó en octubre de 2026, la transacción mediana de un bloque normalmente pagó 3 sats por byte virtual o menos. A esa tasa, la comisión del pago de Alice quedaría por debajo de 500 sats.

<figure>
  <img src="/diagrams/alice-pays-bob.svg" alt="El UTXO de 1.0 BTC de Alice lo consume una transacción que crea dos UTXOs nuevos: 0.5 BTC para Bob y 0.499 BTC de cambio para Alice en una dirección nueva. Los 0.001 BTC restantes son la comisión que se paga al minero." />
  <figcaption>El UTXO de 1.0 BTC de Alice se consume entero. Se crean dos UTXOs nuevos; la comisión de 0.001 BTC es la diferencia entre entradas y salidas.</figcaption>
</figure>

Después la transacción se **firma**: la billetera de Alice usa su clave privada para producir una firma que demuestra que ella está autorizada para gastar esas entradas específicas. La firma no revela la clave privada. Cualquiera puede verificarla; solo Alice pudo haberla creado.

Lo que se transmite a la red son poco más de 200 bytes de datos: las entradas, las salidas, las firmas, los metadatos. Eso es todo. La transacción entera cabe en lo que pesa una imagen en miniatura.

## 4. El mempool: la sala de espera

Cuando la billetera de Alice transmite la transacción, esta llega a uno de los nodos a los que la billetera está conectada, que la reenvía a sus pares, que la reenvían a los suyos. En cuestión de segundos, casi todos los nodos de la red Bitcoin se han enterado de la transacción de Alice y la han guardado en su **mempool** local (por "memory pool", la reserva en memoria): la fila de transacciones válidas que esperan a que las minen.

Algunas cosas que conviene notar:

- **El mempool no es una sola cosa global.** Cada nodo tiene su propia copia. Son casi idénticas, pero no del todo: un nodo en Tokio y un nodo en Sao Paulo pueden tener conjuntos ligeramente distintos durante unos segundos. Algunas diferencias duran más, porque cada nodo puede elegir configuraciones distintas, como cuánta memoria puede usar el mempool (300 MB por defecto en Bitcoin Core). Así, dos nodos pueden tener en espera transacciones distintas hasta que esas transacciones se minen o se descarten. El [tema a fondo sobre el mempool (en inglés)](/rabbit-hole/mempool) tiene los detalles.
- **Las transacciones del mempool son válidas pero están sin confirmar.** Cada nodo ya comprobó que las firmas son válidas, que los UTXOs que se gastan existen de verdad y no se han gastado, y que las cuentas cuadran. Si alguna comprobación falla, la transacción se descarta.
- **El mempool se ordena por tasa de comisión.** Los mineros quieren maximizar lo que ganan por bloque, así que eligen primero las transacciones que pagan más por cada byte de espacio en el bloque. Tu tasa de comisión (sats por byte virtual), no el monto que envías, decide tu lugar en la fila.

Puedes [ver un mempool en vivo con tus propios ojos](https://chainquery.com/reports/mempool): esa página muestra el mempool de un nodo de Bitcoin en el momento en que la cargas, ordenado en franjas de tasa de comisión.

## 5. Minería: cómo se hace un bloque en realidad

Un minero es una computadora con chips especializados en calcular hashes (llamados ASICs, construidos para no hacer otra cosa) que trabaja junto con un nodo de Bitcoin que mantiene un mempool. Casi todos los bloques los encuentra un [pool de minería](/es/glosario/pool-de-mineria), cuyo nodo normalmente arma el bloque para todas las máquinas del pool. Entre los dos, el nodo y las máquinas que calculan hashes hacen dos cosas en paralelo:

1. **Armar bloques candidatos.** El nodo reúne el subconjunto más rentable de transacciones de su mempool, agrega una transacción coinbase (que le paga al minero el [subsidio de bloque](/es/glosario/subsidio-de-bloque) en monedas recién creadas, más las comisiones de todas las transacciones del bloque) y construye el encabezado del bloque.
2. **Calcular el hash del encabezado una y otra vez con nonces distintos.** Un "nonce" es solo un número: una casilla del encabezado donde el minero puede meter valores distintos. El minero prueba billones de valores por segundo, buscando un hash que quede por debajo del objetivo actual. La casilla solo admite unos 4,300 millones de valores, y el hardware moderno los recorre todos en una fracción mínima de segundo. Así que los mineros también modifican otras partes del bloque, como el espacio libre de la transacción coinbase, y vuelven a empezar la cuenta.

Cuando un minero encuentra un nonce que produce un hash por debajo del objetivo, transmite el bloque. Cada nodo:

- Recibe el bloque
- Verifica que el hash esté por debajo del objetivo
- Verifica cada transacción del bloque
- Agrega el bloque a su copia de la cadena
- Quita esas transacciones de su mempool
- Si es un minero, empieza a minar encima de este bloque nuevo

Toda esta cascada, desde "el minero encuentra el nonce" hasta "todos los nodos del planeta tienen el bloque", tarda unos segundos. El bloque llegó. La transacción de Alice ya está adentro. La billetera de Bob muestra "1 confirmación".

## 6. Dificultad: el reloj que se regula solo

El tiempo de bloque objetivo de Bitcoin es de **10 minutos**. El número no tiene nada de mágico. Es un compromiso de diseño: lo bastante largo para que los bloques alcancen a propagarse por toda la red antes de que empiece el siguiente, y lo bastante corto para que las confirmaciones no tarden una eternidad.

Pero el hashrate total de la red (su poder de cómputo) sube y baja todo el tiempo. Si el hashrate se duplicara, los bloques empezarían a llegar cada 5 minutos. Si se redujera a la mitad, cada 20.

Para que los bloques sigan llegando a un promedio de unos 10 minutos, el protocolo ajusta la dificultad cada **2016 bloques**, más o menos cada dos semanas. Si los 2016 bloques anteriores tardaron menos de dos semanas, la dificultad sube. Si tardaron más, baja. El ajuste es proporcional a cuánto se desvió el tiempo, pero un solo ajuste no puede mover la dificultad en más de un factor de cuatro en ninguna dirección.

Es el mecanismo más hermoso de todo el diseño de Bitcoin. **Ningún humano fija la dificultad.** Ningún comité se reúne para "subir las tasas". La red responde a sus propias condiciones, automáticamente, cada dos semanas, para siempre.

Puedes [ver la cuenta regresiva del próximo ajuste de dificultad](https://chainquery.com/reports/difficulty) en la página de dificultad de ChainQuery.

## 7. Encabezados de bloque y árboles de Merkle

Un bloque de Bitcoin tiene dos partes: un encabezado pequeño (80 bytes) y un cuerpo con todas las transacciones (alrededor de 1.6 MB en promedio en el año que terminó en octubre de 2026).

El encabezado es denso. Contiene:

- **Versión**: un número cuyos bits los mineros pueden usar para señalar que están listos para una actualización del protocolo
- **Hash del bloque anterior**: enlaza este bloque con el que vino antes
- **Raíz de Merkle**: un solo hash de 32 bytes que resume *todas* las transacciones del cuerpo
- **Marca de tiempo**: más o menos cuándo lo armó el minero (las reglas permiten una o dos horas de margen)
- **Objetivo de dificultad**: el valor por debajo del cual tiene que quedar el hash
- **Nonce**: el número que encontró el minero

La parte ingeniosa es la **raíz de Merkle**. Es la raíz de un árbol binario que se construye calculando el hash de las transacciones de dos en dos, luego el hash de pares de esos hashes, y así hasta arriba. El resultado es un solo valor que depende de cada transacción del bloque. Cambia cualquier transacción y cambia la raíz de Merkle, y cambia el hash del bloque, y la cadena se rompe.

<figure>
  <img src="/diagrams/merkle-tree.svg" alt="Un árbol de Merkle binario. Ocho transacciones (TX1 a TX8) en la base se emparejan y se les calcula el hash en conjunto para producir cuatro hashes intermedios. Esos cuatro se emparejan y se les vuelve a calcular el hash para producir dos más. Al último par se le calcula el hash una vez más para producir la única raíz de Merkle en la cima. El encabezado de 80 bytes del bloque contiene solo esa raíz." />
  <figcaption>Ocho transacciones, con hashes calculados por pares hasta llegar a una sola raíz. Cambia cualquier hoja y también cambia cada hash en el camino hacia la raíz.</figcaption>
</figure>

¿Por qué importa esto? Porque quien solo tiene el encabezado de 80 bytes tiene un compromiso criptográfico con todas las transacciones, sin tener que descargarlas. Esto es lo que hace posibles las billeteras ligeras (SPV): pueden verificar que una transacción en particular está en un bloque en particular descargando la ruta de Merkle (un puñado de hashes) en lugar del bloque entero.

El árbol de Merkle es una de esas ideas que, la primera vez que la ves, piensas "eso es matar moscas a cañonazos". La centésima vez, te das cuenta de que el cañón tenía el calibre justo.

## 8. Confirmaciones: por qué esperamos

La transacción de Alice está en el bloque N. La billetera de Bob dice "1 confirmación".

¿Por qué esperar más? Porque en una red probabilística nada es nunca definitivo del todo; solo *cada vez más* definitivo.

Imagina a un atacante que quiere revertir el pago de Alice. Tendría que:

1. Construir una cadena alternativa que se bifurque a partir del bloque *anterior* a la transacción de Alice
2. Minar esa cadena alternativa más rápido de lo que el resto del mundo mina la cadena real
3. En algún momento transmitir su cadena más larga, haciendo que todos los nodos honestos se cambien a ella

Se puede hacer con un bloque, si el atacante controla suficiente hashrate durante un momento de suerte. **¿Con seis bloques? Casi imposible, a menos que el atacante controle una parte grande del hashrate mundial.**

Estas son las probabilidades aproximadas según el análisis de Meni Rosenfeld de 2012 (Satoshi hizo una versión más simple en la sección 11 del whitepaper), suponiendo que el atacante controla el 10% del hashrate:

| Confirmaciones | Probabilidad de revertir el pago con éxito |
|---|---|
| 1 | ~20% |
| 2 | ~5.6% |
| 3 | ~1.7% |
| 4 | ~0.55% |
| 5 | ~0.18% |
| 6 | ~0.06% |

Seis es la primera profundidad en la que las probabilidades de un atacante con el 10% caen por debajo del 0.1%. Eso sí, la proporción que controla el atacante importa mucho. Frente a un atacante con el 30% del hashrate, seis confirmaciones todavía dejan una probabilidad de alrededor del 16%.

<figure>
  <img src="/diagrams/confirmations-stack.svg" alt="Una cadena de seis bloques de Bitcoin. El primer bloque contiene la transacción de Alice; cada bloque siguiente es una confirmación construida encima. Debajo de cada bloque está la probabilidad de que un atacante con el 10 por ciento revierta el pago con esa cantidad de confirmaciones, que cae del 20 por ciento con una confirmación a alrededor del 0.06 por ciento con seis. Un eje de casos de uso arriba va de compras pequeñas (una camiseta) a la izquierda a compras grandes (una casa) a la derecha; un eje de tiempo abajo muestra unos diez minutos por bloque, con la cadena completa liquidada en alrededor de una hora." />
  <figcaption>Cada confirmación reduce las probabilidades de que un atacante con el 10% revierta el pago en un factor de aproximadamente tres. Después de seis, la probabilidad es de alrededor del 0.06%, o 1 entre 1,700.</figcaption>
</figure>

Por eso seis confirmaciones (alrededor de una hora) son el umbral convencional de "liquidado". Para montos muy grandes quizás quieras esperar más; para un café, con una confirmación sobra. Los exchanges fijan sus propios umbrales, y algunos aceptan menos de seis. Kraken, por ejemplo, acredita los depósitos de bitcoin después de tres. La billetera de Bitcoin Core muestra un pago como "Confirmando" hasta que llega a seis.

Cuanto más profunda está una transacción, más astronómico se vuelve el costo de deshacerla. Con doce confirmaciones, un atacante tendría que rehacer unas dos horas de minería de toda la red, y hacerlo más rápido de lo que todos los demás siguen extendiendo la cadena real. Ningún atacante lo ha logrado jamás. Las únicas reorganizaciones tan profundas en la historia de Bitcoin vinieron de errores de software (ver la siguiente sección).

## 9. La cadena (y las reorganizaciones)

El encabezado de cada bloque incluye el hash del bloque anterior. Eso es lo que hace que sea una *cadena* y no una simple lista. Cambiar cualquier bloque cambia su hash, lo que significa que el "hash anterior" del bloque siguiente ya no coincide, lo que significa que todos los nodos rechazan el cambio.

Para alterar de verdad el pasado de la cadena, tendrías que rehacer la prueba de trabajo (proof-of-work) de cada bloque desde tu objetivo hasta el más reciente, y después superar en velocidad a todos los que siguen minando la cadena real. Cuanto más atrás vayas, más trabajo hay que rehacer.

Reescribir toda la cadena hasta 2009 mantendría ocupadas todas las máquinas de minería del planeta durante poco más de tres años al hashrate de octubre de 2026. Para dar una idea del costo, un estudio de Cambridge publicado en abril de 2025 estimó el consumo eléctrico de la minería de Bitcoin en unos 138 teravatios-hora al año, más o menos el 0.5% del total mundial.

A veces la red tiene un desacuerdo *breve* sobre qué bloque llegó primero: dos mineros encuentran bloques válidos casi en el mismo instante, y distintas partes de la red ven primero bloques distintos. Es una bifurcación temporal, y el cambio que le pone fin se llama **reorganización (reorg)**. La bifurcación se resuelve sola en uno o dos bloques: gana la cadena que recibe encima el siguiente bloque válido, y el bloque que quedó huérfano se convierte en un "bloque obsoleto". Las transacciones que solo estaban en el bloque obsoleto vuelven al mempool.

Las carreras de un bloque como esta son cosa de rutina: un conjunto de datos público de [bloques obsoletos](/es/glosario/bloque-obsoleto) registra entre 28 y 93 al año de 2022 a 2025. Las reorganizaciones de dos bloques son raras, y las más largas, rarísimas.

Las reorganizaciones profundas en la historia de Bitcoin vinieron de errores de software y de problemas con actualizaciones, no de la minería normal. Las dos más profundas fueron de 53 bloques en agosto de 2010, cuando se revirtió el bug de inflación, y de 25 bloques en marzo de 2013, cuando dos versiones del software no se pusieron de acuerdo sobre si un bloque era válido. En julio de 2015, justo después de la actualización del [BIP 66](/es/glosario/bip-66), mineros que se saltaron la verificación de los bloques extendieron uno inválido hasta formar una cadena de 6 bloques. Las billeteras ligeras y los nodos que no se habían actualizado siguieron esa cadena hasta que la válida la rebasó.

## 10. Verificar sin confiar

No tienes que creerle a nadie nada de esto. Puedes correr un **nodo completo**: un software que descarga la cadena entera (unos 775 GB en octubre de 2026), valida cada transacción desde el bloque génesis y sigue validando cada bloque nuevo para siempre.

Un nodo completo verifica:

- Cada firma de cada transacción
- Cada referencia a un UTXO (¿esta salida existe de verdad?, ¿está sin gastar?, ¿quien la gasta está autorizado?)
- Cada encabezado de bloque (¿el hash está por debajo del objetivo?)
- Cada regla de consenso (sin doble gasto, sin dinero creado de la nada, sin violaciones de las reglas)

Bitcoin Core sí toma un atajo por defecto. Para acelerar la primera sincronización, se salta la comprobación de firmas de todos los bloques hasta uno reciente cuyo hash viene escrito en cada versión del software (la opción `assumevalid`). Todo lo demás lo sigue comprobando, y poner `assumevalid=0` apaga el atajo.

Si un minero produjera un bloque inválido (digamos, pagándose a sí mismo más de lo que permite el calendario de emisión), todos los nodos completos del planeta lo rechazarían. El trabajo del minero se habría desperdiciado. El bloque nunca llegaría a formar parte de la cadena.

Esto es lo que hace que Bitcoin funcione sin necesidad de confiar en nadie. No "nadie está a cargo" en un sentido vago, sino "cada participante puede verificar cada regla por su cuenta". No confías en los mineros. No confías en los desarrolladores. Ni siquiera confías en mí. Corres el software, y el software te dice qué es verdad.

Una laptop puede correr un nodo completo. Una Raspberry Pi puede correr un nodo completo. No necesitas permiso de nadie; solo necesitas el software y espacio en disco. En el capítulo 6 lo vas a hacer de verdad.

> **Consejo pro:** De este capítulo se te quedan tres cosas y el resto es detalle. **Una:** no hay saldos, solo UTXOs. **Dos:** la minería es un reloj más un presupuesto de seguridad. **Tres:** cualquiera con una computadora puede verificar la cadena de punta a punta. En el siguiente capítulo dejas de leer sobre Bitcoin y empiezas a tener bitcoin de verdad.
