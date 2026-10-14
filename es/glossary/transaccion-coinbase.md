---
title: "Transacción coinbase"
slug: transaccion-coinbase
aliases:
  - "transacciones coinbase"
draft: false
published: "2026-10-13"
shortDefinition: "La primera transacción de cada bloque: crea los BTC nuevos (el subsidio de bloque) y cobra las comisiones de transacción."
keyTakeaways:
  - "Genera los BTC recién creados de cada bloque"
  - "Cobra las comisiones de las transacciones incluidas en el bloque"
  - "Debe madurar 100 bloques antes de poder gastarse"
sources:
  - { label: "Bitcoin Core source - GetBlockSubsidy (src/validation.cpp); 3.125 BTC for blocks 840,000 to 1,049,999", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "Bitcoin Core source - COINBASE_MATURITY = 100 (src/consensus/consensus.h)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/consensus.h" }
relatedTerms:
  - block
  - block-reward
  - block-subsidy
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - miner
  - miner-capitulation
  - mining-pool
  - mining-subsidy
  - transaction
sameAs:
  - "https://en.bitcoin.it/wiki/Coinbase"
liveWidget: ~
translationOf: coinbase-transaction
sourceHash: "073dd9c6ffb7"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

La transacción coinbase es la primera transacción de cada bloque de Bitcoin. Es la vía por la que los BTC recién emitidos entran en circulación, y es el único tipo de transacción en Bitcoin que no tiene entradas reales.

El minero que encuentra un bloque válido arma la coinbase para pagarse a sí mismo la [recompensa de bloque](/es/glosario/recompensa-de-bloque): el [subsidio de bloque](/es/glosario/subsidio-de-bloque) (3.125 BTC a octubre de 2026) más la suma de las comisiones de todas las transacciones empaquetadas en el bloque. La "entrada" de la coinbase es un marcador de posición: no hace referencia a ningún UTXO anterior, porque no se está gastando ningún UTXO anterior. La salida (o las salidas) se convierten en UTXOs nuevos que pertenecen al minero.

Dos reglas que vale la pena conocer:

- **El scriptSig de la coinbase es un campo libre.** Los mineros pueden meter ahí los datos que quieran. Satoshi, como es bien sabido, puso un titular del Times en la coinbase del [bloque génesis](/es/glosario/bloque-genesis): "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" (The Times, 3 de enero de 2009: el ministro de Hacienda británico, al borde de un segundo rescate a los bancos). Los pools de minería modernos lo usan para sus etiquetas de pool y para el marcador de altura de bloque del BIP 34.
- **Madurez de 100 bloques.** Las salidas de la coinbase no se pueden gastar hasta que se hayan minado 100 bloques más encima. Esto impide que los mineros gasten monedas recién creadas que podrían desaparecer en una reorganización de la cadena.

La coinbase es el único lugar por donde entran BTC nuevos en circulación. Cada satoshi que existe se pagó originalmente en una transacción coinbase. Cuando el subsidio llegue a cero, hacia 2140, las transacciones coinbase seguirán existiendo, solo que pagarán únicamente comisiones.

Lee el tema a fondo [Minería (en inglés)](/rabbit-hole/mining) para ver el flujo completo de la minería, y [Subsidio de bloque](/es/glosario/subsidio-de-bloque) para el calendario de emisión.
