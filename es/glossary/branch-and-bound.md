---
title: "Branch and Bound (BnB, ramificación y poda)"
slug: branch-and-bound
aliases:
  - "Branch and Bound"
  - "branch-and-bound"
  - "BnB"
  - "ramificación y poda"
avoid:
  - "ramificación y acotación"
  - "ramificación y acotamiento"
draft: false
published: "2026-10-15"
shortDefinition: "El algoritmo de selección de monedas de Bitcoin Core que busca coincidencias exactas: una búsqueda en profundidad, acotada, de un conjunto de entradas que cubra el pago tan de cerca que no haga falta ninguna salida de cambio."
keyTakeaways:
  - "Propuesto en la tesis de 2016 de Mark 'Murch' Erhardt, implementado en Bitcoin Core por Andrew Chow e incluido en la versión 0.17.0 en 2018"
  - "Busca combinaciones de entradas cuyo total quede entre el objetivo y el objetivo más el costo de una salida de cambio; cualquier combinación que caiga en esa ventana se convierte en una transacción sin cambio"
  - "Abandona tras un número fijo de intentos, así que nunca deja colgada a una billetera; los otros algoritmos corren de todos modos y gana el resultado que menos desperdicia"
sources:
  - { label: "Bitcoin Core PR #10637 - Coin Selection with Murch's algorithm", url: "https://github.com/bitcoin/bitcoin/pull/10637" }
  - { label: "Mark Erhardt - An Evaluation of Coin Selection Strategies (2016)", url: "https://murch.one/wp-content/uploads/2016/11/erhardt2016coinselection.pdf" }
  - { label: "Bitcoin Core 0.17.0 release notes", url: "https://bitcoincore.org/en/releases/0.17.0/" }
  - { label: "Bitcoin Core - src/wallet/coinselection.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.cpp" }
relatedTerms:
  - coin-selection
  - changeless-transaction
  - change-output
  - coingrinder
  - utxo-pool
  - utxo-unspent-transaction-output
  - transaction-fee
liveWidget: ~
translationOf: branch-and-bound-bnb
sourceHash: "0537b6bdfe3e"
sourceCommit: "0ea202c"
sourceUpdated: "2026-09-08"
translation:
  method: "llm-draft"
---

Branch and Bound es el algoritmo de [selección de monedas](/es/glosario/seleccion-de-monedas) que intenta no crear [cambio](/es/glosario/salida-de-cambio) en absoluto. Dado el monto de un pago y el conjunto de monedas de la billetera, busca un subconjunto cuyo total caiga en una ventana estrecha: como mínimo, el pago más su comisión; como máximo, esa cifra más lo que habría costado crear una salida de cambio. Cualquier combinación dentro de la ventana puede gastarse como una [transacción sin cambio (en inglés)](/glossary/changeless-transaction), y el pequeño excedente se va al minero en lugar de volver como una moneda nueva.

El nombre describe la búsqueda. El algoritmo ordena las monedas por valor y las recorre en un árbol en profundidad; en cada paso se ramifica según incluya o no la siguiente moneda. La poda es lo que mantiene eso manejable: cada vez que el total acumulado se pasa de la ventana, o las monedas que quedan no pueden alcanzarla de ninguna manera, la rama se abandona de inmediato. También se detiene tras un presupuesto fijo de intentos, 100,000 en la implementación de Core, y devuelve el mejor conjunto sin cambio que haya encontrado, o nada. Los demás algoritmos de la billetera corren junto a él de todos modos, así que el usuario nunca se queda esperándolo.

La idea viene de la tesis de maestría de 2016 de Mark "Murch" Erhardt sobre selección de monedas, que mostró que el método Knapsack que [Bitcoin Core](/es/glosario/bitcoin-core) usaba desde los primeros tiempos casi nunca encontraba las coincidencias exactas para las que había sido diseñado (menos del 1.5% de los pagos en su simulación), mientras que Branch and Bound las encontraba hasta en el 30% y reducía en más de un tercio el número de UTXOs que acumulaba la billetera. Andrew Chow implementó Branch and Bound para Core, el pull request se integró en 2018 y el algoritmo salió en la versión 0.17.0 en octubre de ese año. De la 0.17 a la 22.0 corría primero, y la billetera recurría a Knapsack si fallaba. Desde la versión 23.0 la billetera corre todos los algoritmos en cada gasto y se queda con el resultado que menos desperdicia, y una solución sin cambio de Branch and Bound suele ganar esa comparación.

¿Por qué tomarse la molestia de evitar el cambio? Porque una salida de cambio es un costo que se paga dos veces. Agrega bytes a la transacción actual y crea una moneda nueva que agregará más bytes a alguna transacción futura cuando por fin se gaste. Es también la salida que los [analistas de cadena](/es/glosario/analisis-de-cadena) siguen para vincular una de tus transacciones con la siguiente. Una transacción sin cambio es más barata de construir, más barata de gastar después y no le da nada con qué trabajar a la heurística de detección del cambio. Branch and Bound encuentra esas transacciones cuando existen, y resulta que existen más a menudo de lo que la gente espera en cuanto una billetera tiene una variedad razonable de tamaños de moneda.
