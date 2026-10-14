---
title: "Comisión de transacción"
slug: comision-de-transaccion
aliases:
  - "comisión"
  - "comisiones"
  - "comisiones de transacción"
  - "comisión de red"
  - "comisiones de red"
  - "comisión de minería"
draft: false
published: "2026-10-14"
shortDefinition: "Una cantidad que incluye quien envía para recompensar a los mineros por priorizar la confirmación de su transacción."
keyTakeaways:
  - "Motiva a los mineros a incluir tu transacción en un bloque"
  - "Se calcula como el total de las entradas menos el total de las salidas"
  - "Varía según la congestión de la red y la demanda de espacio en el bloque"
sources:
  - { label: "mempool.space - block fees vs subsidy chart (has a percentage view of the fee share)", url: "https://mempool.space/graphs/mining/block-fees-subsidy" }
  - { label: "mempool.space API - reward stats for the last 52,560 blocks (fees about 0.6% of revenue as of block 970,650, Oct 2026)", url: "https://mempool.space/api/v1/mining/reward-stats/52560" }
  - { label: "mempool.space API - median fee rates in mined blocks, last 3 years (peak on April 20, 2024)", url: "https://mempool.space/api/v1/mining/blocks/fee-rates/3y" }
  - { label: "Ordinals docs - Runes specification (activates on block 840,000)", url: "https://docs.ordinals.com/runes/specification.html" }
  - { label: "mempool.space - block fee rates chart (in 2026 about a third of blocks had a median fee rate under 1 sat/vB)", url: "https://mempool.space/graphs/mining/block-fee-rates" }
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - coinbase-transaction
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - mining-subsidy
  - replace-fee-rbf
  - transaction
  - transaction-chaining
sameAs:
  - "https://en.bitcoin.it/wiki/Miner_fees"
liveWidget: ~
translationOf: transaction-fee
sourceHash: "a639af86a92c"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

La comisión de transacción es lo que les pagas a los [mineros](/es/glosario/minero) para que incluyan tu [transacción de Bitcoin](/es/glosario/transaccion) en un bloque. Mecánicamente, es la diferencia entre la suma de los valores de las entradas y la suma de los valores de las salidas: todo lo que no envías explícitamente a una salida se lo queda el minero que confirma la transacción.

Las comisiones se expresan como una *tasa*, no como un total: **sats por byte virtual (sat/vB)**. Una transacción más grande paga más comisión a la misma tasa. Tamaños típicos de transacción:

- [P2WPKH](/es/glosario/p2wpkh) simple (1 entrada, 2 salidas): unos 140 vB
- [Taproot](/es/glosario/taproot) (1 entrada, 2 salidas): unos 110 vB
- Multisig 2 de 3: unos 250 vB
- Consolidaciones con muchas entradas: más de 500 vB

A 10 sat/vB, costarían 1,400 / 1,100 / 2,500 / más de 5,000 sats, respectivamente. Las comisiones reales varían muchísimo según la congestión de la red.

La dinámica del mercado de comisiones:

- **Periodos de baja congestión.** Las comisiones bajan a entre 1 y 3 sat/vB y, en 2026, muchas veces a menos de 1 sat/vB. A esas tasas, la mayoría de las transacciones se confirman en el siguiente bloque.
- **Periodos de alta congestión.** Las comisiones se disparan. Cuando el protocolo de tokens Runes se lanzó en el bloque del halving, el 20 de abril de 2024, la tasa de comisión mediana de los bloques minados promedió más de 1,000 sat/vB durante varias horas.
- **Valores por defecto según el estimador.** Tu billetera usa la [estimación de comisión](/es/glosario/estimacion-de-comision) para elegir una tasa razonable. La mayoría de las billeteras lo hacen bien; puedes cambiarla a mano si entiendes lo que está en juego.
- **Subir la comisión** ([RBF](/es/glosario/rbf), [CPFP](/es/glosario/subir-la-comision)) es posible si pagaste de menos y tu transacción se atascó.

A largo plazo, las comisiones de transacción están llamadas a convertirse en *el* incentivo de los mineros. En el año que terminó en octubre de 2026 fueron cerca del 0.6% de los ingresos por [recompensa de bloque](/es/glosario/recompensa-de-bloque) (cerca del 6.5% en 2024). A medida que el [subsidio de bloque](/es/glosario/subsidio-de-bloque) se reduce a la mitad una y otra vez hasta llegar a cero hacia 2140, las comisiones pasan a ser el 100% de esa recompensa. Si para entonces el mercado de comisiones será lo bastante grande para pagar una seguridad sólida es una pregunta abierta.

Mira las franjas de comisión del mempool en vivo en la [página del nodo](/es/nodo) o en la [sección 6 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining).
