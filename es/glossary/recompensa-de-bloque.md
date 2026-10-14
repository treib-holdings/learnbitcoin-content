---
title: "Recompensa de bloque"
slug: recompensa-de-bloque
draft: false
published: "2026-10-13"
shortDefinition: "El incentivo que reciben los mineros por encontrar un bloque válido: el subsidio de bloque más las comisiones de transacción."
keyTakeaways:
  - "Combina BTC nuevos (el subsidio) y las comisiones que pagan los usuarios"
  - "Cada halving reduce el subsidio a la mitad, una vez cada 210,000 bloques"
  - "Garantiza un incentivo constante para que los mineros aseguren la red"
sources:
  - { label: "mempool.space - block fees vs subsidy chart (has a percentage view of the fee share)", url: "https://mempool.space/graphs/mining/block-fees-subsidy" }
  - { label: "mempool.space API - reward stats for the last 52,560 blocks (fees about 0.6% of revenue as of block 970,650, Oct 2026)", url: "https://mempool.space/api/v1/mining/reward-stats/52560" }
  - { label: "mempool.space - block fee rates chart", url: "https://mempool.space/graphs/mining/block-fee-rates" }
  - { label: "mempool.space API - median fee rates in mined blocks, last 3 years", url: "https://mempool.space/api/v1/mining/blocks/fee-rates/3y" }
relatedTerms:
  - bip-42
  - block
  - block-explorer
  - block-size
  - block-subsidy
  - coinbase-transaction
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-subsidy
sameAs:
  - "https://en.bitcoin.it/wiki/Controlled_supply"
  - "https://en.bitcoin.it/wiki/Mining"
liveWidget: ~
translationOf: block-reward
sourceHash: "ef27e367214e"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

La recompensa de bloque es la compensación total que recibe un minero por encontrar un bloque válido. Tiene dos partes:

1. **El [subsidio de bloque](/es/glosario/subsidio-de-bloque)**: BTC recién emitidos, 3.125 por bloque a octubre de 2026, que se reducen a la mitad cada 210,000 bloques hasta llegar a cero alrededor de 2140.
2. **Las comisiones de transacción**: la suma de las comisiones de todas las transacciones que el minero decidió incluir en el bloque. Es variable; depende de cómo esté el mempool.

Las dos partes se le pagan al minero mediante la [transacción coinbase](/es/glosario/transaccion-coinbase), la transacción especial con la que empieza cada bloque. En los primeros años de Bitcoin el subsidio era casi toda la recompensa (las transacciones eran prácticamente gratis). En el año que terminó en octubre de 2026, las comisiones fueron cerca del 0.6% de los ingresos de los mineros, unos 0.02 BTC por bloque. En 2024 fueron cerca del 6.5%, y todavía se disparan por tramos cortos cuando el mempool está congestionado.

La pregunta económica de largo plazo para la seguridad de Bitcoin es si las comisiones pueden reemplazar por completo un subsidio que se encoge, y a octubre de 2026 seguía abierta. Tras un pico breve en el halving de 2024, la porción de las comisiones cayó, y con ella las tasas de comisión típicas. La tasa de comisión mediana en los bloques minados fue de unos 11 a 12 sat/vB en 2024 y de cerca de 1 sat/vB de enero a principios de octubre de 2026. Lee la [sección 9 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para la versión larga.
