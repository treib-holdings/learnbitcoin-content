---
title: "Doble gasto"
slug: doble-gasto
draft: false
published: "2026-10-14"
shortDefinition: "Intentar usar el mismo UTXO más de una vez, algo que las reglas de consenso de Bitcoin impiden una vez que la transacción está confirmada."
keyTakeaways:
  - "La lógica del registro de Bitcoin invalida las salidas ya gastadas"
  - "Los conflictos se resuelven cuando los mineros construyen sobre una sola cadena válida"
  - "Varias confirmaciones reducen drásticamente el riesgo de doble gasto"
aliases:
  - "ataque de doble gasto"
  - "dobles gastos"
sources:
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double spending (2012), Table 1: 0.059% for a 10% attacker and 15.6% for a 30% attacker at six confirmations", url: "https://arxiv.org/abs/1402.2009" }
relatedTerms:
  - bip-30
  - bip-34
  - difficulty
  - double-spend-relay
  - energy-fud
  - full-validation
  - race-attack
  - reorg-reorganization
  - replay-attack
  - spv-simplified-payment-verification
  - transaction-finality
liveWidget: ~
translationOf: double-spend
sourceHash: "ce1b75f124ee"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Un doble gasto es cuando alguien intenta gastar el mismo bitcoin dos veces. Es el problema central para el que se inventó Bitcoin.

En un sistema digital sin intermediarios de confianza, no hay ninguna razón obvia por la que no puedas hacer dos copias de un pago y transmitir ambas. Los proyectos anteriores de dinero digital (DigiCash, e-gold y otros) lo resolvían pasando cada transacción por un servidor central que mantenía un único registro con autoridad. El servidor impedía los dobles gastos; el servidor era también un punto único de falla y de confianza.

El diseño de Bitcoin elimina el servidor. En su lugar, el conjunto global de UTXOs (salidas de transacción no gastadas) se replica en cada nodo completo, y cada nodo hace cumplir la regla: una vez que un [UTXO](/es/glosario/utxo) se ha gastado, ninguna otra transacción puede hacer referencia a él. Intenta gastar el mismo UTXO dos veces y tu segunda transacción será rechazada por cada nodo honesto al que llegue.

El caso límite que queda es lo que pasa *antes* de que una transacción se confirme. Mientras están en el [mempool](/es/glosario/mempool), dos transacciones en conflicto pueden competir. La que se mine primero gana; la otra queda inválida en el momento en que se encuentra un bloque que incluye a su rival. Por eso las transacciones con cero confirmaciones no son definitivas de verdad, y por eso la comunidad de Bitcoin usa la **regla de las 6 confirmaciones** para montos grandes.

Después de seis confirmaciones (cerca de una hora), un atacante tendría que construir en secreto una cadena de reemplazo más larga, y más rápido de lo que la red honesta extiende la real. El análisis de Meni Rosenfeld de 2012 pone las probabilidades en cerca de 1 entre 1,700 para un atacante con 10% del hashrate global (el poder de cómputo de la red) y en cerca de 1 entre 6 para uno con 30%; un atacante con más de la mitad tiene asegurado ganar tarde o temprano. Por debajo de la mitad, las probabilidades se reducen exponencialmente con cada confirmación adicional. Esa es la forma práctica que toma en Bitcoin la [irreversibilidad de la transacción](/es/glosario/irreversibilidad-de-la-transaccion), lo que se conoce como finality.

La seguridad de Bitcoin contra el doble gasto es lo que la prueba de trabajo (proof-of-work) *compra*. El [tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) explica por qué la energía gastada no es un desperdicio: es el costo de hacer que el registro sea resistente a la falsificación.

Para un doble gasto real contra un procesador de pagos durante una división de la cadena, con las transacciones todavía verificables, lee [La bifurcación de la cadena de 2013](/es/a-fondo/bifurcacion-de-2013).
