---
title: "P2PKH (pago a hash de clave pública)"
slug: p2pkh
aliases:
  - "P2PKH"
  - "Pay to Public Key Hash"
  - "pay-to-public-key-hash"
  - "pago a hash de clave pública"
  - "salida P2PKH"
  - "salidas P2PKH"
  - "dirección legacy"
  - "direcciones legacy"
avoid:
  - "pago a hash de llave pública"
draft: false
published: "2026-10-15"
shortDefinition: "El formato de script legacy dominante (direcciones que empiezan con '1'), que bloquea BTC al hash de una clave pública."
keyTakeaways:
  - "El formato más reconocible de las direcciones legacy de BTC"
  - "Para desbloquear exige la clave pública y la firma de quien gasta"
  - "Menos eficiente en comisiones que los scripts SegWit o Taproot"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin v0.1.5 script.cpp (the first commit in the Bitcoin Core repository, August 2009): the two standard templates are 'sender provides pubkey, receiver adds signature' (P2PK) and the 'short account number' form, 'sender provides hash of pubkey, receiver provides signature and pubkey' (P2PKH)", url: "https://github.com/bitcoin/bitcoin/blob/4405b78d6059e536c36974088a8ed4d9f0f29898/script.cpp" }
  - { label: "Bitcoin Core - src/script/solver.cpp: a P2PKH script is the 25-byte pattern OP_DUP OP_HASH160 <20 bytes> OP_EQUALVERIFY OP_CHECKSIG; a P2PK script carries a 65- or 33-byte public key", url: "https://github.com/bitcoin/bitcoin/blob/master/src/script/solver.cpp" }
  - { label: "Bitcoin 0.6.0 release notes: new wallets created with this version use 33-byte 'compressed' public keys instead of 65-byte public keys, resulting in smaller transactions", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.6.0.md" }
  - { label: "mainnet-observer - Output Types by Count (daily CSV read October 14, 2026): P2PKH was 0.5% of outputs created in 2009, 70% in 2010, 97.5% in 2011, 99.5% in 2014, 80% in 2017 and 5.7% in 2026", url: "https://mainnet.observer/charts/output-type-distribution-count/" }
  - { label: "BIP 141 - Segregated Witness: compared with a traditional P2PKH output, the P2WPKH equivalent occupies 3 less bytes in the scriptPubKey and moves the signature and public key from scriptSig to witness", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core 0.20.0 release notes (June 3, 2020): the wallet now uses bech32 addresses by default", url: "https://bitcoincore.org/en/releases/0.20.0/" }
  - { label: "BIP 360 (Draft, Pay-to-Merkle-Root): P2PKH (prefix 1, example 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa) is not vulnerable to long-exposure quantum attacks until a spend reveals the public key; reused outputs are", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
relatedTerms:
  - address
  - b32-address
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pk-pay-public-key
  - post-quantum-bitcoin
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.bitcoin.it/wiki/Invoice_address"
liveWidget: ~
translationOf: p2pkh-pay-public-key-hash
sourceHash: "8be656370f94"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

P2PKH ("Pay to Public Key Hash", pago a hash de clave pública) es el formato de script original de uso general en Bitcoin. Sus [direcciones](/es/glosario/direccion) empiezan con `1` (por ejemplo, `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`).

El script de bloqueo es directo: "para gastar este UTXO, presenta una [clave pública](/es/glosario/clave-publica) cuyo hash sea un valor concreto de 20 bytes, y una firma válida sobre la transacción que lo gasta". Quien recibe publica solo el hash (la dirección); la clave pública en sí no se revela hasta que los fondos se gastan.

P2PKH salió en la primera versión de Bitcoin junto con [P2PK](/es/glosario/p2pk); el código de Satoshi lo llama la forma de "número de cuenta corto" ("short account number"). Dos razones por las que se impuso en cuanto las monedas empezaron a cambiar de manos (P2PKH pasó de menos del 1% de las salidas nuevas en 2009 al 70% en 2010 y al 97.5% en 2011):

- **Direcciones más cortas.** Un hash ocupa 20 bytes; las claves públicas de la época ocupaban 65 (la forma comprimida de 33 bytes llegó con Bitcoin 0.6.0). Más fáciles de copiar, compartir y leer en voz alta.
- **Defensa en profundidad.** Si algún día se rompiera la criptografía de curva elíptica que hay debajo (el [escenario poscuántico](/es/glosario/bitcoin-poscuantico)), los fondos en direcciones P2PKH sin gastar seguirían protegidos por el hash. Las claves públicas solo quedan expuestas cuando el usuario gasta. Las direcciones reutilizadas pierden esta protección en el primer gasto.

P2PKH ha sido el caballo de batalla de Bitcoin durante más de una década. Sigue teniendo soporte completo y sigue siendo del todo seguro, pero cuesta más en comisiones que los formatos más nuevos. Las billeteras modernas entregan por defecto direcciones [P2WPKH](/es/glosario/p2wpkh) (SegWit, `bc1q...`) o [P2TR](/es/glosario/taproot) (Taproot, `bc1p...`) para recibir; la billetera de Bitcoin Core cambió su valor por defecto a `bc1q` en 2020. La participación de P2PKH en las salidas nuevas cayó de más del 99% en 2014 a menos del 6% en 2026, así que la oferta migra despacio a medida que las salidas antiguas se gastan hacia formatos más nuevos.

Lee [Dirección](/es/glosario/direccion) para ver todos los formatos de dirección que hoy conviven en Bitcoin.
