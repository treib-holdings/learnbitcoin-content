---
title: "Subsidio de bloque"
slug: subsidio-de-bloque
draft: false
published: "2026-10-13"
shortDefinition: "La parte de BTC recién emitidos dentro de la recompensa de bloque de un minero; se reduce a la mitad cada 210,000 bloques."
keyTakeaways:
  - "Empieza en 50 BTC por bloque y se reduce a la mitad más o menos cada cuatro años"
  - "Garantiza una oferta máxima de 21 millones de BTC"
  - "Se combina con las comisiones para mantener los incentivos de los mineros a largo plazo"
sources:
  - { label: "mempool.space - block fees vs subsidy chart (has a percentage view of the fee share)", url: "https://mempool.space/graphs/mining/block-fees-subsidy" }
  - { label: "mempool.space API - reward stats for the last 52,560 blocks (fees about 0.6% of revenue as of block 970,650, Oct 2026)", url: "https://mempool.space/api/v1/mining/reward-stats/52560" }
relatedTerms:
  - asymptote
  - bip-42
  - block
  - block-reward
  - block-size
  - coinbase-transaction
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - mining-subsidy
sameAs:
  - "https://en.bitcoin.it/wiki/Controlled_supply"
liveWidget: ~
translationOf: block-subsidy
sourceHash: "60238b41fb75"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

El subsidio de bloque es el bitcoin nuevo que recibe un minero por agregar un bloque válido a la cadena. Es el *único* mecanismo por el que entran BTC nuevos en circulación: cada bitcoin que ha existido se pagó primero como subsidio de bloque.

A octubre de 2026, el subsidio es de **3.125 BTC por bloque**, cifra fijada tras el halving de abril de 2024. Volverá a reducirse a la mitad, a 1.5625 BTC, hacia abril de 2028, y seguirá cayendo a la mitad cada 210,000 bloques hasta que el subsidio se redondee a cero alrededor del año 2140.

El subsidio se paga mediante la transacción coinbase, una transacción especial al inicio de cada bloque que no tiene entradas y que le paga al minero lo que el protocolo permita. Si un minero intenta pagarse más de lo que suman el subsidio definido por el protocolo y las comisiones recaudadas, todos los demás nodos de la red rechazan el bloque. Así es como cada nodo completo del planeta hace cumplir el tope de 21 millones: un bloque a la vez.

Junto con las comisiones de transacción, el subsidio forma la recompensa de bloque: la compensación total que recibe un minero por encontrar un bloque. En el año que terminó en octubre de 2026, las comisiones representaron cerca del 0.6% del total (alrededor del 6.5% en 2024). Cuando el subsidio llegue a cero, hacia 2140, las comisiones serán toda la recompensa. Lee el [tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para la versión larga, o el [tema a fondo sobre los halvings (en inglés)](/rabbit-hole/halvings) para saber cuándo ocurre cada recorte del subsidio.
