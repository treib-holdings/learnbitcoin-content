---
title: "Selección de monedas"
slug: seleccion-de-monedas
aliases:
  - "coin selection"
draft: false
published: "2026-10-14"
shortDefinition: "El problema de ingeniería de billeteras que consiste en elegir qué UTXOs gastar al armar una transacción. La elección fija la comisión, decide si hay una salida de cambio y determina cuáles de tus direcciones quedan vinculadas públicamente entre sí."
keyTakeaways:
  - "Todo pago on-chain empieza con una selección: la billetera guarda un conjunto de monedas independientes y debe elegir un subconjunto cuyo total cubra el monto más la comisión"
  - "Bitcoin Core corre varios algoritmos (Branch and Bound, Knapsack, Single Random Draw y, desde la versión 27.0, CoinGrinder) y se queda con el candidato que menos puntúa en una métrica de desperdicio"
  - "Una buena selección es invisible; una mala se nota en comisiones más altas, una billetera llena de polvo (dust) y direcciones soldadas entre sí a la vista de los analistas de cadena"
sources:
  - { label: "Bitcoin Core - src/wallet/coinselection.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.cpp" }
  - { label: "Mark Erhardt - An Evaluation of Coin Selection Strategies (2016)", url: "https://murch.one/wp-content/uploads/2016/11/erhardt2016coinselection.pdf" }
  - { label: "Bitcoin Optech - Coin selection topic", url: "https://bitcoinops.org/en/topics/coin-selection/" }
  - { label: "Bitcoin Core PR #22009 - Decide which coin selection solution to use based on waste metric", url: "https://github.com/bitcoin/bitcoin/pull/22009" }
relatedTerms:
  - utxo-unspent-transaction-output
  - utxo-pool
  - branch-and-bound-bnb
  - coingrinder
  - changeless-transaction
  - change-output
  - coin-control
  - dust
  - consolidation-transaction
  - fee-estimation
  - address-clustering
sameAs:
  - "https://bitcoinops.org/en/topics/coin-selection/"
liveWidget: ~
translationOf: coin-selection
sourceHash: "678bfc11dcc8"
sourceCommit: "0ea202c"
sourceUpdated: "2026-09-08"
translation:
  method: "llm-draft"
---

Bitcoin no tiene saldos de cuenta. Una [billetera](/es/glosario/billetera) guarda un conjunto de monedas independientes, los [UTXOs](/es/glosario/utxo), cada una con su propio monto, y pagarle a alguien significa escoger algunas de esas monedas, gastarlas enteras y devolverte el sobrante como [cambio](/es/glosario/salida-de-cambio). Selección de monedas es el nombre de ese paso de escoger. Cada transacción on-chain que hayas enviado en tu vida pasó por él y, a menos que hayas usado el [control de monedas](/es/glosario/control-de-monedas) para intervenir, la decisión la tomó tu billetera por ti.

La decisión tiene tres consecuencias que el usuario rara vez ve. Comisiones: cada entrada agrega peso a la transacción, así que gastar ocho monedas pequeñas cuesta más que gastar una grande, y con una tasa de comisión alta la diferencia es dinero de verdad. Cambio: si las monedas elegidas superan por mucho el monto del pago, la billetera tiene que crear una salida de cambio, que cuesta bytes ahora y vuelve a costar bytes el día en que ese cambio se gaste. Privacidad: los analistas de cadena dan por hecho que todas las entradas de una transacción pertenecen al mismo dueño, así que la selección decide cuáles de tus direcciones quedan agrupadas públicamente, y para siempre.

Esos tres objetivos tiran en direcciones distintas, y por eso la selección de monedas es un problema de ingeniería de verdad y no una simple consulta en una tabla. El estudio de referencia es la tesis de 2016 de Mark "Murch" Erhardt, que evaluó las estrategias de la época contra una carga real de transacciones y encontró que el método entonces estándar de [Bitcoin Core](/es/glosario/bitcoin-core), un algoritmo Knapsack (el problema de la mochila) que intentaba mantener el cambio en un mínimo fijo de 0.01 BTC o más, hallaba coincidencias exactas sin cambio en menos del 1.5 por ciento de los pagos, mientras que una búsqueda diseñada para eso las hallaba hasta en el 30 por ciento.

La billetera de Bitcoin Core ahora corre varios algoritmos en cada gasto y compara los resultados. Branch and Bound (ramificación y poda), de la tesis de Murch, busca una coincidencia exacta que no necesite nada de cambio. Knapsack y Single Random Draw (sorteo aleatorio simple) producen soluciones corrientes, con cambio. CoinGrinder, agregado en la versión 27.0 en 2024, busca el conjunto de entradas más liviano cuando las comisiones están altas. La billetera califica cada candidato con una métrica de desperdicio que combina la comisión que se paga ahora, la comisión que costará después la salida de cambio y cualquier excedente que se vaya al minero, y se queda con el candidato que menos desperdicia. Puedes leerlo todo en `src/wallet/coinselection.cpp`.

Para el usuario, las lecciones prácticas son cortas. Consolida las monedas pequeñas cuando las comisiones estén baratas, para que los periodos caros no obliguen a tu billetera a gastar una docena de entradas. Mantén separadas, con el control de monedas, las monedas de distinto origen si sus historiales no deberían vincularse. Y prefiere las billeteras que te muestran qué monedas eligieron, porque no puedes corregir una decisión que nunca viste.
