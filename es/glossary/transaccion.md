---
title: "Transacción"
slug: transaccion
aliases:
  - "transacciones"
  - "transacción de Bitcoin"
  - "transacciones de Bitcoin"
draft: false
published: "2026-10-13"
shortDefinition: "Una estructura de datos que mueve BTC de unas entradas (que hacen referencia a UTXOs) a unas salidas (scripts de bloqueo). Se firma con claves privadas."
keyTakeaways:
  - "Consta de entradas, salidas, firmas y, opcionalmente, scripts o datos"
  - "Consume UTXOs existentes y crea otros nuevos: así fluye el registro contable"
  - "Una transacción válida debe cumplir las condiciones del script de cada entrada"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, sections 2, 6 and 9 (2008): a coin is a chain of digital signatures; if a transaction's output value is less than its input value, the difference is a transaction fee; transactions carry multiple inputs and outputs, normally one for the payment and one returning change to the sender", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin developer reference - Raw transaction format: the serialized transaction is SHA256(SHA256()) hashed to create the txid; the fields are version, inputs, outputs and lock time", url: "https://developer.bitcoin.org/reference/transactions.html" }
  - { label: "Bitcoin developer guide - Transactions: the full value of the included UTXOs must be spent or given to a miner as a fee, so most transactions include a change output paying the surplus back to the spender", url: "https://developer.bitcoin.org/devguide/transactions.html" }
  - { label: "BIP-141 - Segregated Witness: the txid remains the double SHA256 of the traditional serialization without witness data, and a separate wtxid covers the witness", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
relatedTerms:
  - absolute-fee
  - accelerator
  - batch-transaction
  - change-output
  - psbt
  - coin-age
  - coin-control
  - coinbase-transaction
  - consolidation-transaction
  - double-spend
  - double-spend-relay
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - input-transaction-input
  - nlocktime
  - nsequence
  - output-transaction-output
  - replace-fee-rbf
  - satoshi-unit
  - transaction-chaining
  - transaction-fee
  - transaction-index-txindex
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_protocol"
  - "https://www.wikidata.org/wiki/Q17001427"
  - "https://en.bitcoin.it/wiki/Transaction"
liveWidget: ~
translationOf: transaction
sourceHash: "b8d39301740b"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una transacción de Bitcoin es una estructura de datos que mueve BTC de un grupo de dueños a otro. Lo hace consumiendo [salidas no gastadas](/es/glosario/utxo) (UTXOs) ya existentes como [**entradas**](/es/glosario/entrada-de-transaccion) y creando [**salidas**](/es/glosario/salida-de-transaccion) nuevas que bloquean los fondos bajo nuevas condiciones de gasto.

La estructura es atómica: una transacción se ejecuta entera o falla entera. Cada entrada debe aportar una firma válida (o un testigo de script) que demuestre que quien gasta controla el UTXO que se consume. Si falla una sola entrada, toda la transacción es inválida. La suma de los valores de las entradas debe ser al menos igual a la suma de los valores de las salidas; la diferencia es la [comisión de transacción](/es/glosario/comision-de-transaccion) que se paga al minero.

Un envío típico funciona así: tu billetera elige uno o más de tus UTXOs cuyo valor sume al menos lo que quieres enviar, los firma como entradas, crea una salida que paga al destinatario y crea una [salida de *cambio*](/es/glosario/salida-de-cambio) que te devuelve el sobrante. El paquete completo se transmite a la red entre pares, donde espera en los [mempools](/es/glosario/mempool) hasta que un minero lo incluye en un bloque.

La transacción se identifica por su **txid**: el doble hash SHA256 de su forma serializada, que desde SegWit deja fuera los datos de testigo. Una vez confirmada, las salidas que creó pasan a ser UTXOs nuevos en el conjunto global, disponibles para gastarse en transacciones futuras, y las entradas que consumió desaparecen para siempre.

Lee la [sección 6 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para ver cómo deciden los mineros qué transacciones meter en un bloque, y [UTXO](/es/glosario/utxo) para el modelo de "objetos moneda" en el que se basa la contabilidad de Bitcoin.
