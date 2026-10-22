---
title: "Métrica de desperdicio"
slug: metrica-de-desperdicio
aliases:
  - "waste metric"
  - "puntuación de desperdicio"
  - "waste score"
draft: false
published: "2026-10-22"
shortDefinition: "La puntuación que la billetera de Bitcoin Core usa para elegir entre los conjuntos de entradas que proponen sus algoritmos de selección de monedas: la comisión que las entradas cuestan ahora menos lo que costarían a una tasa de comisión a largo plazo, más el costo de una salida de cambio o el excedente que se paga al minero. Gana la puntuación más baja. Es una puntuación de comisiones; no tiene término de privacidad."
keyTakeaways:
  - "desperdicio = entradas x (tasa de comisión actual - tasa a largo plazo) + el costo del cambio, o + el excedente cuando no hay cambio; por debajo de la tasa a largo plazo (10 sat/vB por defecto) cada entrada adicional baja la puntuación, por encima cada entrada adicional la sube"
  - "El PR #22009 subió la puntuación al nivel de la billetera en Bitcoin Core 23.0 (2022), de modo que la billetera corre todos los algoritmos y compara, con -consolidatefeerate como perilla; Branch and Bound ya la usaba dentro de su propia búsqueda desde la 0.17.0"
  - "Los empates se los lleva el candidato con más entradas; el costo del cambio valora el gasto futuro del cambio a la tasa de descarte, no a la de largo plazo"
sources:
  - { label: "Bitcoin Core - src/wallet/coinselection.cpp (RecalculateWaste)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.cpp" }
  - { label: "Bitcoin Core - src/wallet/coinselection.h (the comment above RecalculateWaste)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.h" }
  - { label: "Bitcoin Core - src/wallet/spend.cpp (cost of change: created at the effective feerate, spent at the discard feerate)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/spend.cpp" }
  - { label: "Bitcoin Core PR #22009 - Decide which coin selection solution to use based on waste metric (Andrew Chow; merged September 2021, shipped in 23.0)", url: "https://github.com/bitcoin/bitcoin/pull/22009" }
  - { label: "Bitcoin Optech Newsletter, 8 September 2021 (the waste score in plain words)", url: "https://bitcoinops.org/en/newsletters/2021/09/08/" }
  - { label: "Bitcoin Optech Newsletter, 25 May 2022 (Mark Erhardt's definition of waste)", url: "https://bitcoinops.org/en/newsletters/2022/05/25/" }
  - { label: "Bitcoin Optech Newsletter, 31 July 2026 (the long-term feerate against the discard feerate)", url: "https://bitcoinops.org/en/newsletters/2026/07/31/" }
  - { label: "Bitcoin Core PR #27877 - Add CoinGrinder coin selection algorithm (the sentence on metrics for privacy and wallet health)", url: "https://github.com/bitcoin/bitcoin/pull/27877" }
relatedTerms:
  - coin-selection
  - effective-value
  - branch-and-bound-bnb
  - coingrinder
  - changeless-transaction
  - change-output
  - consolidation-transaction
  - fee-estimation
  - bitcoin-core
liveWidget: ~
translationOf: waste-metric
sourceHash: "da9fc4c2588c"
sourceCommit: "ded4695"
sourceUpdated: "2026-10-22"
translation:
  method: "llm-draft"
---

La métrica de desperdicio es la puntuación que la billetera de [Bitcoin Core](/es/glosario/bitcoin-core) usa para elegir entre los conjuntos de entradas que proponen sus algoritmos de [selección de monedas](/es/glosario/seleccion-de-monedas). La billetera corre varios algoritmos en cada pago y se queda con el candidato que menos puntúa. La puntuación, que calcula `RecalculateWaste` en `src/wallet/coinselection.cpp`, tiene dos partes. La primera son las entradas: la comisión que cuestan a la tasa de la transacción menos la comisión que costarían a una tasa a largo plazo, 10 sat/vB por defecto (la opción `-consolidatefeerate`). Por debajo de 10 sat/vB esa diferencia es negativa, así que cada moneda adicional que la billetera barre baja la puntuación; por encima, cada moneda adicional la sube. La segunda parte es el cambio. Si el candidato crea una [salida de cambio](/es/glosario/salida-de-cambio), se suma lo que esa salida cuesta crear ahora y gastar después, con el gasto futuro valorado a la tasa de descarte de la billetera, la tasa por debajo de la cual prefiere darle el cambio al minero antes que crearlo. Si no crea ninguna, se suman los pocos satoshis de excedente que van al minero en su lugar. Gana la más baja, y un empate se lo lleva el candidato que gasta más entradas.

El PR #22009, de Andrew Chow, introdujo la puntuación a este nivel en la versión 23.0 (2022); ya formaba parte de la búsqueda de [Branch and Bound](/es/glosario/branch-and-bound) desde la 0.17.0. La descripción del pull request explica para qué sirve la tasa a largo plazo: es "the feerate that we switch between consolidating and optimizing for fees" (la tasa de comisión en la que pasamos de consolidar a optimizar las comisiones). Mark Erhardt, que diseñó esa búsqueda, describe el desperdicio como una "measure of the fees for the input set at the current feerate compared to spending the same inputs at the hypothetical long-term feerate" (medida de las comisiones del conjunto de entradas a la tasa actual, comparadas con gastar las mismas entradas a la hipotética tasa a largo plazo).

Es una puntuación de comisiones, y sus autores lo dicen: el pull request que agregó [CoinGrinder](/es/glosario/coingrinder) en 2024 dice que a la billetera todavía le faltan "additional metrics to score different input set candidates, e.g. on basis of their privacy and wallet health impact" (métricas adicionales para puntuar los distintos conjuntos de entradas candidatos, por ejemplo según su impacto en la privacidad y en la salud de la billetera). Qué direcciones quedan vinculadas por una selección no está en el número.

Profundiza en [¿Qué monedas gasta tu billetera?](/es/a-fondo/seleccion-de-monedas): los cuatro algoritmos que la puntuación juzga, un ejemplo resuelto a 1 y a 100 sat/vB, y lo que la puntuación no ve.
