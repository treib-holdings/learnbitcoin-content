---
title: "Mempool"
slug: mempool
draft: false
published: "2026-10-14"
shortDefinition: "La 'sala de espera' local de un nodo para las transacciones sin confirmar, de la que los mineros toman transacciones al armar bloques nuevos."
keyTakeaways:
  - "Guarda las transacciones pendientes que esperan confirmación"
  - "Las políticas varían, así que no todos los nodos tienen mempools idénticos"
  - "La estimación de comisión y RBF dependen en gran medida de la dinámica del mempool"
aliases:
  - "mempools"
  - "pool de memoria"
  - "memory pool"
sources:
  - { label: "Mempool rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/mempool" }
relatedTerms:
  - double-spend
  - fee-bumping
  - fee-estimation
  - full-rbf
  - miner
  - mining
  - mining-pool
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
translationOf: mempool
sourceHash: "b0a257a5d49c"
sourceCommit: "4150fd9"
translation:
  method: "llm-draft"
---

El mempool (abreviatura de **mem**ory **pool**, "pool de memoria") es la lista local de transacciones sin confirmar que lleva un nodo de Bitcoin: las que ya le llegaron pero todavía no ha visto en ningún bloque. Cuando transmites una [transacción](/es/glosario/transaccion), se propaga de nodo en nodo, y cada uno la valida y la agrega a su propio mempool.

No existe un único mempool global. Cada nodo mantiene el suyo. La mayoría se parecen, pero difieren en dos cosas:

- **Política.** Cada nodo fija reglas locales sobre qué acepta y qué retransmite: tasas de comisión mínimas, umbrales de [polvo (dust)](/es/glosario/polvo), tamaño máximo, cadenas máximas de ancestros y descendientes, etcétera.
- **Retraso de propagación.** Una transacción nueva tarda un segundo o dos en llegar a todos los nodos alcanzables del planeta. Durante ese lapso, los mempools discrepan por un momento sobre qué está pendiente.

Los [mineros](/es/glosario/minero) arman bloques candidatos a partir de su propio mempool y dan prioridad a las transacciones con la tasa de comisión más alta (sats por byte virtual) para maximizar los ingresos de la recompensa de bloque. Así que cuando le "pones una comisión" a una transacción, lo que en realidad haces es pujar por un lugar en el bloque contra todas las demás personas que en ese momento tienen transacciones esperando en los mempools de todo el mundo. Consulta [Estimación de comisión](/es/glosario/estimacion-de-comision) para ver cómo adivinan las billeteras la puja correcta.

Cuando una transacción entra en un bloque, cada nodo ve ese bloque, lo valida y elimina de su mempool las transacciones incluidas. Las transacciones que llevan tiempo esperando también pueden ser expulsadas cuando falta memoria o reemplazadas al [subir la comisión](/es/glosario/subir-la-comision) (fee bumping).

Profundiza en el [tema a fondo sobre el mempool (en inglés)](/rabbit-hole/mempool): mercados de comisiones, reglas de expulsión, RBF y cómo se ve en realidad una transacción "atascada" a nivel del protocolo. Mira el estado del mempool en vivo en la [página del nodo](/es/nodo) o en la [sección 6 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining).
