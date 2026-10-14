---
title: "Salida (de una transacción)"
slug: salida-de-transaccion
draft: false
published: "2026-10-13"
shortDefinition: "Especifica una cantidad de BTC y un script (script de bloqueo) que determina cómo se puede gastar. Las salidas se convierten en UTXOs hasta que se gastan."
keyTakeaways:
  - "Define al destinatario y las condiciones de gasto"
  - "Se convierte en un UTXO una vez confirmada, a la espera de un gasto futuro"
  - "El scriptPubKey puede ser de una sola firma (single-sig), multisig o un script avanzado"
aliases:
  - "salida de transacción"
  - "salidas de transacción"
  - "salida de la transacción"
  - "salidas de la transacción"
  - "output"
  - "outputs"
sources:
  - { label: "Bitcoin developer reference - Raw Transaction Format: TxOut (8-byte value, compactSize-prefixed pubkey script) and Outpoint (TXID plus output index, first output is 0)", url: "https://developer.bitcoin.org/reference/transactions.html" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 9, Combining and Splitting Value: at most two outputs, one for the payment and one returning the change (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP-13 - Address Format for pay-to-script-hash: version byte 5 becomes the leading character 3 (2011)", url: "https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki" }
  - { label: "BIP-173 - Base32 address format for native v0-16 witness outputs: bc1 prefix, version 0 addresses are 42 or 62 characters (2017)", url: "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" }
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules, key path and script path spending (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Core - GetDustThreshold in src/policy/policy.cpp: 546 sat for a legacy output and 294 sat for P2WPKH at the default 3000 sat/kvB dust rate; unspendable outputs have no dust threshold", url: "https://github.com/bitcoin/bitcoin/blob/master/src/policy/policy.cpp" }
relatedTerms:
  - bitcoin-script
  - input-transaction-input
  - opreturn
  - p2pkh-pay-public-key-hash
  - p2sh
  - taproot
  - transaction
  - utxo-unspent-transaction-output
liveWidget: ~
translationOf: output-transaction-output
sourceHash: "39e03c3fd279"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una salida de transacción especifica una cantidad de BTC y un **script de bloqueo** (técnicamente, el *scriptPubKey*) que define qué hace falta para gastarla después. Una vez que la transacción se confirma, la salida se convierte en un [UTXO](/es/glosario/utxo) dentro del conjunto global de salidas no gastadas, y se queda en la cadena hasta que alguien produce una [entrada de transacción](/es/glosario/entrada-de-transaccion) que satisface su script.

En el formato que circula por la red, cada salida consta de dos campos: un valor de 8 bytes en satoshis, seguido de un script de bloqueo precedido por su longitud. Las salidas van ordenadas dentro de la transacción; la posición de cada una (el índice **vout**, que empieza en 0) pasa a formar parte de su identidad permanente. Los gastos futuros hacen referencia a una salida como el par `(txid, vout)`.

El script de bloqueo puede ser simple ("quien tenga esta clave privada puede gastar") o tan complejo como se quiera (multisig, con bloqueo de tiempo, con bloqueo por hash, o lógica general de [Bitcoin Script (en inglés)](/glossary/bitcoin-script)). En la práctica dominan un puñado de patrones estándar:

- **[P2PKH (en inglés)](/glossary/p2pkh-pay-public-key-hash)**: direcciones legacy (las anteriores a SegWit) que empiezan con `1`. Se gasta revelando una clave pública más una firma que le corresponda.
- **[P2SH (en inglés)](/glossary/p2sh)**: direcciones que empiezan con `3`. Se gasta revelando un script de canje (redeem script), que es el que define las condiciones reales de gasto, junto con los datos que lo satisfacen.
- **[P2WPKH (en inglés)](/glossary/p2wpkh-pay-witness-public-key-hash)**: direcciones SegWit que empiezan con `bc1q...`. El equivalente de P2PKH en SegWit nativo.
- **[P2WSH (en inglés)](/glossary/p2wsh-pay-witness-script-hash)**: direcciones SegWit que también empiezan con `bc1q...` (pero más largas: 62 caracteres en vez de 42). El equivalente de P2SH en SegWit nativo.
- **[Taproot](/es/glosario/taproot) (P2TR)**: direcciones que empiezan con `bc1p...`. Añade el gasto por ruta de clave (key path) y por ruta de script (script path) con firmas Schnorr.

Las salidas son *indivisibles*. No puedes gastar la mitad de un UTXO: lo gastas entero y te devuelves el sobrante en una nueva **[salida de cambio](/es/glosario/salida-de-cambio)**. Por eso la mayoría de las [transacciones](/es/glosario/transaccion) que haces tienen dos salidas: una para el destinatario real y otra de vuelta a tu propia billetera.

Dos casos especiales que vale la pena conocer:

- **Salidas de [polvo (dust)](/es/glosario/polvo).** Las salidas que valen menos que la comisión que costaría gastarlas (546 sats para una salida legacy, 294 para P2WPKH y 330 para Taproot, con la tasa de polvo por defecto de Bitcoin Core de 3 sat/vB) no son estándar: la política de retransmisión por defecto se niega a retransmitirlas o minarlas. Consulta [límite de polvo (en inglés)](/glossary/dust-limit).
- **Salidas [OP_RETURN (en inglés)](/glossary/opreturn).** Un script de bloqueo que empieza con `OP_RETURN` es imposible de gastar, y se puede demostrar. Normalmente llevan cero satoshis y existen solo para incrustar datos, como metadatos de protocolos, certificaciones o anclas de sidechains (cadenas laterales), sin inflar el conjunto de UTXOs.
