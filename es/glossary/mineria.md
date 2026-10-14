---
title: "Minería"
slug: mineria
draft: false
published: "2026-10-14"
shortDefinition: "Usar poder de cómputo para resolver la prueba de trabajo de Bitcoin, validar transacciones y asegurar la cadena de bloques (blockchain)."
keyTakeaways:
  - "Asegura el registro mediante cálculos de prueba de trabajo"
  - "Distribuye la emisión de BTC nuevos en un mercado competitivo"
  - "Alto consumo de energía, pero aporta una descentralización robusta"
aliases:
  - "minar"
  - "minado"
  - "minería de Bitcoin"
  - "mining"
sources:
  - { label: "Mining rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/mining" }
  - { label: "mempool.space API - daily network hash rate since 2009 (June to August 2026 average about 9.1 x 10^20 H/s)", url: "https://mempool.space/api/v1/mining/hashrate/all" }
relatedTerms:
  - competitive-mining
  - cpu-mining
  - geographic-mining-distribution
  - hash-rate
  - hidden-miner-tax
  - miner
  - miner-capitulation
  - miner-extractable-value-mev
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-centralization
  - mining-rig
  - mining-software
  - mining-subsidy
  - retail-mining
  - revenue-ths
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_protocol"
  - "https://www.wikidata.org/wiki/Q17001427"
  - "https://en.bitcoin.it/wiki/Mining"
liveWidget: ~
translationOf: mining
sourceHash: "f8c17a3e9544"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

La minería es el proceso por el que se agregan [bloques](/es/glosario/bloque) nuevos a la cadena de Bitcoin y entran en circulación BTC nuevos. Es una carrera global y continua: cada [minero](/es/glosario/minero) arma un bloque candidato con transacciones del [mempool](/es/glosario/mempool) y luego calcula el hash de su encabezado con distintos [nonces](/es/glosario/nonce) hasta encontrar uno cuyo doble SHA-256 quede por debajo del objetivo de [dificultad](/es/glosario/dificultad) actual.

Quien gana la carrera recibe dos cosas:

- **El [subsidio de bloque](/es/glosario/subsidio-de-bloque)**: bitcoin recién emitido, 3.125 BTC por bloque a octubre de 2026 (cifra fijada por el halving de abril de 2024).
- **Las comisiones de transacción** de cada transacción que empaquetó en el bloque.

Ese pago total, la [recompensa de bloque](/es/glosario/recompensa-de-bloque), es lo que paga la electricidad y el hardware. No hay otra fuente de ingresos que importe. No hay otro incentivo que importe para minar.

A mediados de 2026 (de junio a agosto), el hashrate global (el poder de cómputo de la red) promedió unos 910 exahashes por segundo (unos 9 x 10^20 hashes por segundo). Cada bloque de Bitcoin representa unos 10 minutos de todos los mineros del planeta calculando hashes al mismo tiempo: más o menos 5 x 10^23 intentos por bloque. Esa energía, por diseño, es lo que hace que reescribir la cadena salga caro. Para revertir un bloque reciente, un atacante tendría que minar una bifurcación más larga, y hacerlo más rápido de lo que el resto del mundo entero mina la cadena real. Cuanto más profunda está una transacción, menos plausible resulta revertirla.

A veces se describe la minería como "el problema energético de Bitcoin". Es más exacto llamarla el *modelo de seguridad* de Bitcoin. La energía gastada compra la [inmutabilidad (en inglés)](/rabbit-hole/mining#10-what-this-buys-us) de cada transacción en toda la historia de la cadena. Consulta el [tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para la versión larga.
