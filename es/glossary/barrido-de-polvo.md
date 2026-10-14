---
title: "Barrido de polvo (dust sweeping)"
slug: barrido-de-polvo
aliases:
  - "barrer polvo"
  - "barrer el polvo"
  - "barrido del polvo"
  - "consolidación de polvo"
  - "consolidar polvo"
  - "consolidar el polvo"
  - "dust sweeping"
draft: false
published: "2026-10-15"
shortDefinition: "Combinar varios UTXOs de poco valor (polvo) en una sola salida, normalmente cuando las comisiones de transacción están bajas."
keyTakeaways:
  - "Fusiona salidas pequeñas en menos UTXOs, más grandes"
  - "Ahorra comisiones futuras si se hace cuando las comisiones están bajas"
  - "Posible costo en privacidad si vincula direcciones"
sources:
  - { label: "Bitcoin Optech - Transaction size calculator (inputs of 148 vbytes for P2PKH, 68 for P2WPKH and 57.5 for a P2TR key-path spend; 10.5 vbytes of fixed overhead in a segwit transaction)", url: "https://bitcoinops.org/en/tools/calc-size/" }
  - { label: "Bitcoin Optech - Uneconomical outputs (dust) topic (outputs worth less than the fee to spend them; the dust limit exists to keep them from growing the UTXO set)", url: "https://bitcoinops.org/en/topics/uneconomical-outputs/" }
  - { label: "mempool.space - Block fee rates graph (1-month series to 14 October 2026; the median block's median feerate was 1 sat/vB overall and on six days of the week, 2 sat/vB on Fridays; 90th percentile 3 sat/vB)", url: "https://mempool.space/graphs/mining/block-fee-rates" }
  - { label: "mempool.space - recommended fees (two fetches on 14 October 2026; fastest 3 to 4 sat/vB, hour, economy and minimum 1 sat/vB)", url: "https://mempool.space/api/v1/fees/recommended" }
  - { label: "Bitcoin Wiki - Privacy (the common-input-ownership heuristic: inputs spent together are assumed to share an owner, which is exactly what a consolidation across privacy boundaries gives away)", url: "https://en.bitcoin.it/wiki/Privacy" }
relatedTerms:
  - discard-threshold
  - dust
  - dust-attack
  - dust-limit
  - transaction
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
translationOf: dust-sweeping
sourceHash: "8c6007fc85bd"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

El barrido de polvo es la práctica de consolidar muchos [UTXOs](/es/glosario/utxo) pequeños ([polvo](/es/glosario/polvo) y casi polvo) en un solo UTXO más grande mediante una [transacción de consolidación (en inglés)](/glossary/consolidation-transaction) enviada cuando las comisiones están bajas.

Por qué alguien hace esto:

- **Eficiencia en transacciones futuras.** Cada entrada que gastas suma entre 57.5 y 148 bytes virtuales a una transacción según el tipo de script (57.5 para una entrada Taproot por ruta de clave, 68 para SegWit nativo, 148 para P2PKH legacy), y paga comisión a la tasa que haya en ese momento futuro. Consolidar ahora a 5 sat/vB es mucho más barato que gastar esas entradas una por una a 100 sat/vB en un pico de comisiones futuro.
- **Limpieza de la billetera.** Una billetera con cientos de UTXOs pequeños es lenta de manejar y fea de ver. La consolidación pone orden.
- **Responsabilidad con el conjunto de UTXOs.** Las billeteras llenas de polvo contribuyen a inflar el conjunto de UTXOs global. Consolidar es un pequeño gesto de buena ciudadanía en la red.

Cómo hacerlo bien:

- **Espera a que bajen las comisiones.** La estimación de comisión de un explorador de mempool muestra dónde está el piso; consolida cuando la tasa para el siguiente bloque ande en unos pocos sat/vB. Los periodos de calma pueden durar semanas: en el mes previo a mediados de octubre de 2026, el bloque típico se llenó a 1 sat/vB.
- **Agrupa por frontera de privacidad.** No mezcles en la misma transacción UTXOs de distintos grupos de identidad o de uso. Si tienes una billetera A y una billetera B separadas a propósito, mantenlas separadas también al consolidar.
- **Cuidado con los ataques de polvo.** Si recibiste salidas de un [ataque de polvo](/es/glosario/ataque-de-polvo), consolidarlas con tu billetera principal echa por tierra tu privacidad. Déjalas fuera: congela o bloquea la migaja para que nunca entre en un barrido (la entrada sobre el ataque de polvo tiene la regla completa).
- **Firma una vez, transmite una vez.** Arma una sola transacción de consolidación grande en vez de muchas pequeñas, para amortizar el costo fijo (unos 10.5 bytes virtuales por transacción, más una salida).

Qué no hacer:

- **No barras UTXOs absurdamente pequeños.** Un UTXO SegWit nativo de 200 sats cuesta 68 sats como entrada incluso a 1 sat/vB; te quedan 132 sats netos, y nada en absoluto por encima de unos 3 sat/vB. A veces, dejar el polvo como polvo está bien.
- **No consolides durante un pico de comisiones.** La gracia es el arbitraje de comisiones; consolidar durante un pico va en la dirección contraria.

Para las billeteras que acumulan UTXOs por cientos, como las de mineros que cobran por bloque o las de procesadores de pagos, consolidar es mantenimiento de rutina. Para un usuario típico con un puñado de UTXOs, rara vez vale la pena pensarlo hasta que las comisiones bajan bastante y justo estás mirando.
