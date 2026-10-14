---
title: "Estimación de comisión"
slug: estimacion-de-comision
draft: false
published: "2026-10-14"
shortDefinition: "Predecir la tasa en sat/vByte necesaria para confirmar dentro de cierto plazo, según las condiciones actuales de la red."
keyTakeaways:
  - "Ayuda a no pagar de más ni de menos en comisiones de transacción"
  - "Consiste en leer la cola del mempool y a qué ritmo entran las transacciones en los bloques recientes"
  - "Puede cambiar muy rápido cuando la actividad de la red se dispara de golpe"
aliases:
  - "estimación de comisiones"
  - "estimación de la comisión"
  - "fee estimation"
sources:
  - { label: "mempool.space source - fee-api.ts (recommended fees come from the medians of the projected next blocks: fastestFee, halfHourFee, hourFee, economyFee, with minimumFee taken from the mempool's minimum fee)", url: "https://github.com/mempool/mempool/blob/master/backend/src/api/fee-api.ts" }
  - { label: "Bitcoin Core 31 - policy/fees/block_policy_estimator.h (groups transactions into fee rate buckets and tracks how many blocks they take to be mined after entering the mempool; MIN_BUCKET_FEERATE 100 sat/kvB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/policy/fees/block_policy_estimator.h" }
  - { label: "Bitcoin Core 31 - rpc/fees.cpp (estimatesmartfee: confirmation target 1 to 1,008 blocks, clamped to at least 2; the result is never below the mempool minimum fee or the relay minimum)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/rpc/fees.cpp" }
  - { label: "Bitcoin Core 29.1 release notes (September 2025) - default minrelaytxfee lowered to 0.1 sat/vB; the minimum returned by the fee estimator and the wallet's fee rates unchanged", url: "https://bitcoincore.org/en/releases/29.1/" }
  - { label: "Bitcoin Core 31.0 release notes (April 2026) - the fee estimator's minimum fee rate bucket lowered from 1 sat/vB to 0.1 sat/vB, matching the default minrelaytxfee", url: "https://bitcoincore.org/en/releases/31.0/" }
  - { label: "Bitcoin Core 31 - wallet/wallet.h (DEFAULT_TRANSACTION_MINFEE 1,000 sat/kvB, which is 1 sat/vB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/wallet.h" }
  - { label: "Bitcoin Core 31 - wallet/fees.cpp (a fee rate taken from the estimator is raised to the wallet's required fee rate, the higher of -mintxfee and the relay minimum)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/fees.cpp" }
  - { label: "mempool.space - block 840,000, the fourth halving (00:09 UTC, April 20, 2024): median fee rate about 200 sat/vB", url: "https://mempool.space/block/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5" }
  - { label: "Ordinals documentation - Runes specification (the Runes protocol activates on block 840,000)", url: "https://docs.ordinals.com/runes/specification.html" }
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
translationOf: fee-estimation
sourceHash: "d1897181c553"
sourceCommit: "8bb2e1c"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

La estimación de comisión es el trabajo que hace la billetera para predecir cuántos satoshis por byte virtual (sat/vB) necesitas pagar para que tu [transacción](/es/glosario/transaccion) se confirme dentro de cierto número de bloques objetivo. Si pagas poco, esperas; si pagas mucho, pagas de más.

Los estimadores trabajan con una de estas dos señales, o con ambas:

- **El estado actual del [mempool](/es/glosario/mempool).** ¿Cuántos datos de transacciones sin confirmar hay en cola a cada tasa de comisión? mempool.space, por ejemplo, distribuye las transacciones en espera entre los bloques que prevé que los mineros construirán a continuación y recomienda tasas de comisión a partir de esos bloques proyectados. Cuanto más lleno está el mempool, más alto es el piso.
- **El historial reciente de confirmaciones.** ¿Cuánto tardaron en minarse las transacciones a cada tasa de comisión? El estimador de Bitcoin Core clasifica las transacciones que ve su nodo en rangos de tasa de comisión y registra cuántos bloques tardó cada una en confirmarse.

Bitcoin Core expone su estimador a través de la llamada RPC `estimatesmartfee`, que recibe un objetivo de 1 a 1,008 bloques y trata un objetivo de 1 como si fuera 2. Los sitios de comisiones y las billeteras suelen ofrecer, en cambio, unos pocos niveles. La API de comisiones de mempool.space, por ejemplo, llama a sus tasas fastest, half hour, hour y economy (la más rápida, media hora, una hora y económica). A menor urgencia, menor comisión.

Cuando a los bloques les sobra espacio, las estimaciones para todos los objetivos pueden caer hasta el piso. El estimador de Bitcoin Core no bajaba de 1 sat/vB hasta que la versión 31.0 (abril de 2026) redujo su mínimo a 0.1 sat/vB, el mismo mínimo de retransmisión por defecto que la versión 29.1 había fijado en septiembre de 2025. Cuando la propia billetera de Core elige una comisión a partir de sus estimaciones, sigue sin bajar de 1 sat/vB a menos que se reduzca su ajuste `-mintxfee`.

Cuando la demanda se dispara, las estimaciones se disparan con ella. El 20 de abril de 2024, cuando el protocolo de tokens Runes se activó en el cuarto halving, la tasa de comisión mediana en el bloque 840,000 fue de unos 200 sat/vB.

Las estimaciones son *conjeturas*. Si pagas de menos y te quedas atascado, lee [Subir la comisión](/es/glosario/subir-la-comision). El mercado de comisiones en vivo se puede ver en la [sección 6 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) y en la [página del nodo](/es/nodo).
