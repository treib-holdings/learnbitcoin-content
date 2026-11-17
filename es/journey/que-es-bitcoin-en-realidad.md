---
title: "Qué es Bitcoin"
slug: que-es-bitcoin-en-realidad
translationOf: what-bitcoin-actually-is
sourceHash: "b8386c74f11c"
sourceCommit: "74f1a22"
sourceUpdated: "2026-11-17"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-14"
updated: "2026-11-17"
reviewedAt: "2026-11-16"
order: 1
goDeeper: ["supply", "bitcoin-units"]
estimatedMinutes: 5
tagline: "Qué es, quién manda y cómo se tiene, en palabras sencillas. Nada que comprar."
prerequisites: []
relatedTerms: ["wallet", "address", "block", "blockchain", "satoshi-unit", "private-key", "block-explorer", "satoshi-nakamoto", "node"]
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System (the design; the file read today is the revision of March 24, 2009)", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "Satoshi Nakamoto - Bitcoin P2P e-cash paper, the Cryptography Mailing List at metzdowd.com (October 31, 2008): the email that announced the design", url: "https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html" }
  - { label: "Satoshi Nakamoto - Bitcoin v0.1 released, the Cryptography Mailing List (January 8, 2009): open source code, and 21,000,000 coins in total", url: "https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html" }
  - { label: "mempool.space API - block 0, the first block, stamped January 3, 2009", url: "https://mempool.space/api/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "Bitcoin Core 32.1, transactionrecord.h - the wallet treats six confirmations as the recommended number", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/qt/transactionrecord.h#L76" }
  - { label: "Bitcoin Core, amount.h - one bitcoin is 100,000,000 satoshis", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/consensus/amount.h" }
  - { label: "Bitcoin Core, validation.cpp - the schedule of new coins: 50 a block at first, halved every 210,000 blocks until it reaches zero", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L1833-L1844" }
  - { label: "Bitcoin Core, validation.cpp - a block that pays its maker more than the fees plus the scheduled amount is rejected", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L2608-L2611" }
  - { label: "Satoshi Nakamoto Institute - Satoshi's forum posts (the last on the Bitcoin forum is dated December 12, 2010; the index also lists one disputed line from March 7, 2014)", url: "https://satoshi.nakamotoinstitute.org/posts/" }
  - { label: "High Court of England and Wales - COPA v Wright (May 20, 2024): the one claim to be Satoshi Nakamoto that was tested in court failed", url: "https://caselaw.nationalarchives.gov.uk/ewhc/ch/2024/1198" }
  - { label: "BTC Nodes - computers that accept connections from others: 18,519 in the snapshot of November 16, 2026, of which 90.1% announced themselves as Bitcoin Core and 9.6% as Bitcoin Knots, which is built from Core's code", url: "https://btcnodes.io/api/v1/snapshots/1794846425/" }
  - { label: "mempool.space API - who made the last month's blocks (three pools made 62% of them in the month to November 16, 2026)", url: "https://mempool.space/api/v1/mining/pools/1m" }
  - { label: "Bitcoin Core - the signing keys that may merge changes into the program (five, October 2026)", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/contrib/verify-commits/trusted-keys" }
  - { label: "Bitcoin Core 32.1 release notes (October 27, 2026) - How to Upgrade: a new version is installed by hand", url: "https://bitcoincore.org/en/releases/32.1/" }
  - { label: "Bitcoin Core - download page: one of the copies offered, a snap, is updated by the computer without being asked", url: "https://bitcoincore.org/en/download/" }
  - { label: "Bitcoin Wiki - Value overflow incident (August 15, 2010): 184 billion coins created by a bug, a patched program within five hours", url: "https://en.bitcoin.it/wiki/Value_overflow_incident" }
  - { label: "BIP 50 - March 2013 Chain Fork Post-Mortem", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "Bitcoin Core - notice of September 20, 2018: a bug that could have let a block maker create coins, fixed on September 18 and described in full two days later", url: "https://bitcoincore.org/en/2018/09/20/notice/" }
  - { label: "UK Financial Conduct Authority - Cryptoassets consumer research 2025: 74% of people who own crypto keep it at the exchange where they bought it", url: "https://www.fca.org.uk/publication/research-notes/cryptoasset-consumer-research-2025-wave-6.pdf" }
  - { label: "European Central Bank - Use of cash by companies in the euro area in 2026 (August 13, 2026), chart 1: 1% of companies with physical points of sale accept crypto-assets or stablecoins", url: "https://www.ecb.europa.eu/press/use-of-cash/html/ecb.uccea202608.en.html" }
  - { label: "Board of Governors of the Federal Reserve System - Economic Well-Being of U.S. Households in 2025 (May 2026), table 33: 9% of adults held cryptocurrency as an investment, 2% used it to buy something or make a payment", url: "https://www.federalreserve.gov/publications/2026-economic-well-being-of-us-households-in-2025-banking.htm" }
  - { label: "Federal Reserve Bank of Atlanta - 2025 Survey and Diary of Consumer Payment Choice (May 2026), table E: 66.7% of people who own cryptocurrency say it is an investment", url: "https://www.atlantafed.org/-/media/Project/Atlanta/FRBA/Documents/research-and-data/surveys/consumer-payments/survey-diary-consumer-payment-choice/2025/2025-SDCPC-results-report.pdf" }
  - { label: "US Federal Trade Commission - What To Know About Cryptocurrency and Scams: only scammers will guarantee profits or big returns", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams" }
  - { label: "Coin Metrics - BTC daily reference price since 2010: falls of more than half from a record high in 2011, twice between 2013 and 2015, in 2017 to 2018, twice between 2021 and 2022, and from October 2025 to June 2026", url: "https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?assets=btc&metrics=PriceUSD&frequency=1d&start_time=2010-07-18&page_size=10000" }
---

> **Adónde vas:** Al terminar sabrás qué es Bitcoin y quién manda en él. También lo habrás probado por tu cuenta, con monedas de práctica que no valen nada.

**Primero, adivina.** ¿Quién manda en Bitcoin: una empresa, un gobierno o nadie? Recuerda tu respuesta. Al final de la página volvemos a ella.

Probablemente conociste Bitcoin por su precio. La gente lo compra y lo vende por dólares, euros y otros tipos de dinero, y el precio se mueve mucho. Deja el precio a un lado por unos minutos. Este capítulo trata de la cosa en sí, y no necesitas ningún conocimiento técnico para leerlo.

## ¿Qué es?

Bitcoin se creó como dinero para internet. Puedes enviárselo a cualquier persona, en cualquier lugar, y ningún banco ni ninguna empresa de pagos tiene que aprobarlo.

Un banco lleva un registro de lo que tiene cada persona, y tú confías en que el banco lo lleve bien. Bitcoin lleva la cuenta de quién tiene qué sin un banco. La siguiente sección dice cómo.

## ¿Dónde está el dinero?

Está en un registro compartido. Miles de computadoras en todo el mundo guardan una copia cada una. Todas usan el mismo tipo de programa, con las reglas escritas dentro. Las reglas principales son fáciles de decir: nadie puede gastar monedas que no tiene, ni gastar las mismas monedas dos veces, ni crear monedas nuevas fuera de un calendario fijo.

Cada computadora revisa que cada pago nuevo cumpla esas reglas e ignora los que las rompen. Cualquiera puede poner una a funcionar. El programa es gratis, y cualquiera puede leer cómo funciona.

Los pagos nuevos se agregan al registro en lotes llamados **bloques**, más o menos uno cada diez minutos. Cada bloque está unido al anterior, como los eslabones de una cadena. Eso es todo lo que quiere decir *cadena de bloques* (blockchain).

Cuando un bloque incluye tu pago, el pago tiene una **confirmación**. Cada bloque que se agrega después es una más. Después de seis, un pago suele considerarse definitivo.

## ¿Cuánto hay?

Las reglas permiten 21 millones de bitcoins y no más. Ese límite nunca se ha subido. Las monedas nuevas salen según un calendario fijo que se va frenando hasta detenerse, dentro de más de cien años.

No necesitas uno entero. Un bitcoin se divide en 100 millones de partes llamadas **sats**, así que una persona puede tener o enviar el equivalente a unos pocos dólares.

## ¿Cómo se tiene?

Puedes tenerlo sin una cuenta y sin dar tu nombre. El registro no guarda nombres. Las monedas están anotadas junto a **direcciones**. Una dirección es una serie de letras y números que le das a quien quiera pagarte.

Tus monedas nunca están en tu celular. Se quedan en el registro compartido. Lo que tú tienes es un secreto que te permite gastarlas, llamado **clave**. Una **billetera** es la app que guarda tus claves.

Quien tenga la clave puede gastar las monedas, y sin ella nadie puede. Si la pierdes, nadie te la puede devolver, porque no hay ninguna empresa a la que pedírsela.

Muchas personas, en cambio, dejan sus monedas con una empresa. Entonces las claves las tiene la empresa, no esas personas. Más adelante, un capítulo trata de esa elección, y de cómo mantener a salvo una clave para que perder el celular no signifique perder las monedas.

## ¿Quién manda?

Ninguna persona, empresa ni gobierno por sí solo.

Lo puso en marcha en 2009 alguien que usaba el nombre Satoshi Nakamoto. Nadie ha demostrado quién era. Satoshi dejó de escribir en público a finales de 2010, y desde entonces Bitcoin ha funcionado sin su fundador.

Hoy cada una de esas computadoras, que son miles, es de quien decidió ponerla a funcionar. Cada una sigue las reglas del programa que eligió su dueño. Una versión nueva llega solo si el dueño la instala, o si le ha dicho a la computadora que lo haga. Así que no hay ningún interruptor que una sola persona pueda mover para cambiarles las reglas a todos.

## Lo que no es

- **No es una empresa, ni una acción de una empresa.** No hay ganancias ni nadie que las reparta. Lo único que hay son las monedas.
- **No es un banco.** Nadie puede revertir un pago por ti ni restablecer una clave perdida.
- **No es dinero para el día a día, al menos todavía no.** Puedes enviárselo a cualquier persona, pero pocas tiendas lo aceptan. La razón que más dan los dueños de bitcoin para tenerlo es la inversión.
- **No es una promesa.** El precio ha caído más de la mitad al menos siete veces. Cualquiera que te garantice una ganancia está cometiendo una estafa. Este Recorrido no te va a decir si comprar o no.

## Pruébalo

Con eso basta para probarlo. El paso de abajo abre la billetera de práctica de este mismo sitio, en practice.learnbitcoin.com. No pide nombre, ni correo, ni dinero, y lleva unos minutos. Las monedas de práctica se envían, se reciben y se confirman igual que bitcoin, y no valen nada.

Van a aparecer tres cosas. Primero, la billetera pregunta si quieres usar una llave de acceso (passkey), que es una forma de iniciar sesión que tu celular o tu computadora guarda por ti. Si te ofrece las dos opciones, cualquiera sirve, y sin llave de acceso es más simple.

Después te muestra 12 palabras y te pide que las escribas en papel. Son una clave maestra: todas las claves de esta billetera salen de ellas. Aquí solo protegen monedas de práctica.

Por último, antes de que se envíen las monedas, Cloudflare, una empresa que protege sitios web, comprueba que seas una persona. Puede pedirte que marques una casilla.

**Hazlo:** [Ten algunas](https://practice.learnbitcoin.com/es/do/hold-some). Crea una billetera de práctica, pide monedas de práctica y mira cómo un bloque las incluye.

## Lo que muestra el paso

Creas una billetera, y la billetera saca sus claves a partir de 12 palabras. Te da una dirección, a esa dirección se envían monedas de práctica, y un bloque incluye el pago. Esa es su primera confirmación. Si te saltaste el paso, puedes volver a él en cualquier momento.

Por último, el paso puede decirte qué bloque incluyó una moneda tuya, y te ofrece ver esa moneda en un explorador de bloques, un sitio web que le muestra el registro a quien pregunte. La red de práctica la mantenemos nosotros, y su explorador también, así que aquí ves la idea y no la demostración. En Bitcoin, los exploradores los mantiene mucha gente distinta, y cualquiera puede usar el programa y revisar el registro directamente.

## Una objeción razonable

"Nadie manda" es demasiado simple.

Casi todas esas computadoras usan el mismo programa o una copia muy parecida, y un grupo pequeño de programadores cuida ese programa. Unos pocos grupos grandes hacen la mayoría de los bloques.

Al menos tres veces un error en el programa puso en riesgo todo el registro, en 2010, 2013 y 2018, y un puñado de personas lo arregló en cuestión de días. El primero permitió que alguien creara miles de millones de monedas de la nada. Cada arreglo se sostuvo únicamente porque quienes hacían funcionar las computadoras lo aceptaron.

Así que algunas personas pesan mucho más que otras. Lo que podemos decir hasta ahora es más limitado que "nadie manda": ninguna de ellas ha cambiado una regla que hayan rechazado quienes hacen funcionar esas computadoras. El capítulo 3, "Preguntas razonables", cuenta lo cerca que ha estado eso de ponerse a prueba.

## Ponte a prueba

<details>
<summary>¿Quién puede cambiar el registro?</summary>

Nadie por sí solo. Miles de computadoras revisan, cada una, que cada pago nuevo cumpla las mismas reglas, y cada una sigue el programa que eligió su dueño. Vuelve a leer "¿Quién manda?".

</details>

<details>
<summary>¿Qué guarda una billetera?</summary>

Tus claves: los secretos que te permiten gastar tus monedas. Las monedas mismas se quedan en el registro compartido. Vuelve a leer "¿Cómo se tiene?".

</details>

<details>
<summary>Lo que adivinaste al principio: ¿quién manda en Bitcoin?</summary>

Ni una empresa ni un gobierno. No manda ninguna persona ni ningún grupo por sí solo, aunque algunos pesan mucho más que otros. Vuelve a leer "Una objeción razonable".

</details>

## Palabras que ya conoces

- **Bloque.** Un lote de pagos nuevos que se agrega al registro compartido. Todos los bloques, unidos en orden, son la cadena de bloques (blockchain).
- **Confirmación.** Un bloque que contiene tu pago, o uno que se agrega después de él.
- **Sats.** Las partes pequeñas de un bitcoin. 100 millones hacen uno.
- **Dirección.** Lo que le das a alguien para que pueda pagarte.
- **Clave.** El secreto que te permite gastar tus monedas. Esta billetera saca todas sus claves a partir de 12 palabras.
- **Billetera.** La app que guarda tus claves.

¿Por qué querría alguien un dinero así?
