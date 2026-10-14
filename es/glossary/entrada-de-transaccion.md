---
title: "Entrada (de una transacción)"
slug: entrada-de-transaccion
draft: false
published: "2026-10-14"
shortDefinition: "Una referencia a un UTXO concreto que se está gastando, junto con la firma que desbloquea esos fondos."
keyTakeaways:
  - "Identifica qué UTXO se está gastando"
  - "Debe contener una firma o datos de testigo (witness) válidos"
  - "Varias entradas pueden financiar una sola transacción"
aliases:
  - "entrada de transacción"
  - "entradas de transacción"
  - "entrada de la transacción"
  - "input"
  - "inputs"
sources:
  - { label: "Bitcoin Core - src/primitives/transaction.h, COutPoint and CTxIn (master, accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/primitives/transaction.h" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 9, Combining and Splitting Value (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP 141 - Segregated Witness (Consensus layer) (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin developer reference - Raw Transaction Format, TxIn (accessed 2026-10-13)", url: "https://developer.bitcoin.org/reference/transactions.html" }
  - { label: "Bitcoin Core - src/consensus/tx_verify.cpp, CheckTxInputs (master, accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/tx_verify.cpp" }
  - { label: "Bitcoin Core - src/validation.cpp, CheckInputScripts (master, accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
relatedTerms:
  - bitcoin-script
  - coinbase-transaction
  - nsequence
  - output-transaction-output
  - segwit-segregated-witness-bip-141
  - transaction
  - utxo-unspent-transaction-output
liveWidget: ~
translationOf: input-transaction-input
sourceHash: "2b6cba79b931"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una entrada de transacción es un puntero a un [UTXO](/es/glosario/utxo) que se está gastando, más la prueba de que quien lo gasta tiene permiso para hacerlo.

Cada entrada identifica el UTXO por su **txid** de origen (la transacción que lo creó) y por su **índice de salida** (cuál de las salidas de esa transacción). También lleva los datos de desbloqueo que satisfacen el script de bloqueo del UTXO: un script de firma (scriptSig) en las salidas legacy, las anteriores a SegWit, o datos de testigo (witness) en las salidas [SegWit](/es/glosario/segwit), que sacaron la firma y la clave pública del scriptSig y las pasaron al testigo. Un tercer campo, el [número de secuencia (en inglés)](/glossary/nsequence), normalmente se deja en su valor por defecto, pero puede codificar un bloqueo de tiempo relativo.

Una sola [transacción](/es/glosario/transaccion) puede tener muchas entradas. Gastar tres UTXOs en una transacción significa tres entradas, y cada una tiene que satisfacer su propio script de bloqueo. Si una sola entrada no pasa la validación, todos los nodos rechazan la transacción completa: las entradas son atómicas con la transacción que las contiene.

Una vez que la transacción se confirma, todos los UTXOs a los que apuntaban sus entradas quedan consumidos para siempre. Intentar reutilizar un UTXO ya gastado es lo que constituye un intento de [doble gasto](/es/glosario/doble-gasto); un nodo comprueba que cada salida referenciada todavía exista y siga sin gastar antes de molestarse en verificar una sola firma, y si no es así rechaza la transacción.

La única excepción a todo esto es la [transacción coinbase](/es/glosario/transaccion-coinbase) con la que empieza cada bloque. Su única entrada no apunta a ninguna salida anterior (un txid formado solo por ceros y un índice formado solo por unos), porque el subsidio de bloque y las comisiones que paga los crea el propio bloque; no se gastan de la cadena.
