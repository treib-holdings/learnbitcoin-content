---
title: "CoinGrinder"
slug: coingrinder
aliases:
  - "CoinGrinder"
draft: false
published: "2026-10-15"
shortDefinition: "Un algoritmo de selección de monedas de Bitcoin Core, agregado en la versión 27.0 en 2024, que busca el conjunto de entradas con el menor peso total para que las transacciones construidas en periodos de comisiones altas cuesten lo menos posible."
keyTakeaways:
  - "Escrito por Mark 'Murch' Erhardt e integrado como el PR #27877 de Bitcoin Core; solo corre cuando las tasas de comisión están elevadas, porque el peso de las entradas importa más cuando cada byte es caro"
  - "Donde Branch and Bound optimiza para no tener cambio, CoinGrinder optimiza para las entradas más baratas y siempre produce una salida de cambio"
  - "Deja en paz a propósito las monedas pequeñas cuando las comisiones están altas; barrerlas es tarea para una semana barata, no para una cara"
sources:
  - { label: "Bitcoin Core PR #27877 - Add CoinGrinder coin selection algorithm", url: "https://github.com/bitcoin/bitcoin/pull/27877" }
  - { label: "Bitcoin Core 27.0 release notes", url: "https://bitcoincore.org/en/releases/27.0/" }
  - { label: "Bitcoin Core - src/wallet/coinselection.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.cpp" }
  - { label: "Bitcoin Optech - Coin selection topic", url: "https://bitcoinops.org/en/topics/coin-selection/" }
relatedTerms:
  - coin-selection
  - branch-and-bound-bnb
  - utxo-pool
  - change-output
  - consolidation-transaction
  - fee-estimation
  - dust
  - transaction-fee
liveWidget: ~
translationOf: coingrinder
sourceHash: "dbe18086877e"
sourceCommit: "0ea202c"
sourceUpdated: "2026-09-08"
translation:
  method: "llm-draft"
---

CoinGrinder es el algoritmo de [selección de monedas](/es/glosario/seleccion-de-monedas) al que [Bitcoin Core](/es/glosario/bitcoin-core) recurre cuando las comisiones están altas. Su objetivo es estrecho: encontrar la combinación de monedas que cubra el pago con el menor peso total de entradas, porque cuando un bloque es caro, cada entrada que puedas dejar fuera de una transacción es dinero ahorrado.

Eso lo convierte en el complemento de [Branch and Bound](/es/glosario/branch-and-bound), el algoritmo que Core corre a su lado. Branch and Bound quiere un conjunto de entradas que coincida con el pago tan de cerca que no haga falta ninguna [salida de cambio](/es/glosario/salida-de-cambio), y con gusto usa varias monedas pequeñas para lograrlo. Con una tasa de comisión baja esa es la decisión correcta, porque las entradas salen casi gratis y la salida de cambio es la parte cara. Con una tasa de comisión alta, la aritmética se invierte. Cada entrada adicional cuesta ahora más que la salida de cambio que podría evitar, y la mejor transacción es la que tiene las entradas más grandes y en menor número, aunque tenga que devolver cambio. CoinGrinder es la búsqueda de esa transacción.

La búsqueda en sí es otro recorrido en profundidad, acotado, sobre las monedas, esta vez ordenadas por valor efectivo, de mayor a menor y con preferencia por las monedas más livianas en caso de empate, y la poda descarta cualquier rama que no pueda superar la solución más liviana encontrada hasta el momento. Como Branch and Bound, tiene un presupuesto de intentos y se retira sin hacer ruido, dejando que los otros algoritmos de la billetera produzcan una alternativa. La billetera compara después cada candidato con su métrica de desperdicio y se queda con el más barato.

El algoritmo lo escribió Mark "Murch" Erhardt, cuya tesis de 2016 ya había reformado una vez la selección de monedas de Core, y llegó en la versión 27.0 en abril de 2024, tras una revisión que empezó a mediados de 2023, cuando los picos de comisiones que los Ordinals provocaron ese año habían mostrado exactamente el problema que vino a resolver. Está condicionado a la tasa de comisión: Core lo corre solo cuando la tasa de comisión de la transacción supera el triple de la estimación de tasa de comisión a largo plazo de la billetera (la opción `-consolidatefeerate`, 10 sat/vB por defecto, es decir, de 30 sat/vB en adelante), porque minimizar el peso de las entradas con comisiones ordinarias significaría no gastar nunca las monedas pequeñas y dejar que se acumulen como [polvo](/es/glosario/polvo).

Ese último punto es la lección para el usuario. CoinGrinder te protege de pagar de más durante un pico de comisiones, pero lo hace ignorando tus monedas pequeñas. Esas todavía hay que barrerlas en algún momento, y el momento de hacerlo es una [consolidación (en inglés)](/glossary/consolidation-transaction) durante una semana barata, cuando gastar una docena de entradas no cuesta casi nada.
