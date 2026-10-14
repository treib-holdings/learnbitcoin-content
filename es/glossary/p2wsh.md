---
title: "P2WSH (pago a hash de script con testigo)"
slug: p2wsh
draft: false
published: "2026-10-15"
shortDefinition: "La versión de P2SH en SegWit para scripts avanzados (por ejemplo, multisig), con direcciones que empiezan con bc1q."
keyTakeaways:
  - "Lleva la funcionalidad de P2SH a la estructura de testigo de SegWit"
  - "Reduce el uso de datos en la cadena para scripts complejos y multisig"
  - "Preferido en las billeteras modernas por encima del antiguo P2SH para scripts avanzados"
aliases:
  - "P2WSH"
  - "pay-to-witness-script-hash"
  - "Pay to Witness Script Hash"
  - "pago a hash de script con testigo"
  - "direcciones P2WSH"
  - "salidas P2WSH"
sources:
  - { label: "BIP 141 - Segregated Witness: a P2WSH program is the 32-byte SHA256 of the witnessScript and a P2WPKH program is the 20-byte HASH160 of the public key; the P2WSH scriptPubKey is 34 bytes against 23 for P2SH, a size chosen to improve security against collision attacks because 2^80 work 'is not infeasible anymore'; the spending script moves to the witness", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 173 - Bech32 address format: version 0 witness addresses are always 42 or 62 characters (P2WPKH and P2WSH respectively)", url: "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" }
  - { label: "BIP 48 - Multi-Script Hierarchy for Multi-Sig Wallets: script types are nested SegWit (p2sh-p2wsh) and native SegWit (p2wsh); the recommended default for wallets is p2wsh", url: "https://github.com/bitcoin/bips/blob/master/bip-0048.mediawiki" }
  - { label: "Lightning BOLT 3 - Bitcoin Transaction and Script Formats: most transaction outputs used are P2WSH, 'the Segwit version of P2SH'; the funding output is a P2WSH 2-of-2 multisig, and the to_local and HTLC outputs are P2WSH", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md" }
  - { label: "BIP 341 - Taproot: merges pay-to-pubkey and pay-to-scripthash so outputs spendable by a key or a script are indistinguishable; a key-path spend does not reveal whether a script path existed; Merkle branches reveal only the executed part of the script", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Core - BIPs implemented (doc/bips.md): MuSig2 key aggregation and derivation via musig() descriptors (BIP 327, 328, 390) supported as of v30.0, MuSig2 signing as of v31.0", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/doc/bips.md" }
  - { label: "Bitcoin Core - Release lifecycle table: version 30.0 released 2025-10-10, version 31.0 released 2026-04-19", url: "https://bitcoincore.org/en/lifecycle/" }
  - { label: "mainnet-observer - Input Types by Count (daily CSV read October 14, 2026): in September 2026 P2WSH was 2.1% of inputs, nested P2WSH 0.5%, Taproot key-path 7.0% and Taproot script-path 0.8%", url: "https://mainnet.observer/charts/inputs-types-by-count/" }
relatedTerms:
  - address
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0141"
liveWidget: ~
translationOf: p2wsh-pay-witness-script-hash
sourceHash: "f69daec0b7f1"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

P2WSH, "Pay to Witness Script Hash" (pago a hash de script con testigo), es la versión de [P2SH](/es/glosario/p2sh) en [SegWit](/es/glosario/segwit) nativo. Lleva el mismo modelo de "enviar al hash de un script" a la estructura de testigo de SegWit, con todas las ventajas de SegWit: comisiones efectivas más bajas y nada de maleabilidad.

Las direcciones empiezan con `bc1q` y son notablemente más largas que las direcciones [P2WPKH](/es/glosario/p2wpkh) (62 caracteres frente a 42), porque P2WSH usa un hash de script de 32 bytes (SHA-256) frente al hash de clave de 20 bytes de P2WPKH (RIPEMD-160 de SHA-256). El hash más largo da mayor resistencia a colisiones, algo que importa en scripts que podrían compartirse con contrapartes potencialmente hostiles.

Dónde se usa P2WSH en la práctica:

- **Billeteras multisig.** Las 2 de 3, 3 de 5, etc. en SegWit nativo. El [BIP 48](https://github.com/bitcoin/bips/blob/master/bip-0048.mediawiki), el esquema de derivación estándar para billeteras multisig, recomienda P2WSH como opción predeterminada.
- **Canales Lightning.** El [BOLT 3](https://github.com/lightning/bolts/blob/master/03-transactions.md) construye como P2WSH la salida de financiamiento (funding output) y la mayoría de las salidas de las transacciones de compromiso, incluidas las salidas HTLC.
- **Cualquier cosa con lógica de gasto no trivial.** Bloqueos de tiempo, bloqueos por hash, construcciones de bóveda (vault).

[P2TR](/es/glosario/taproot) (versión de testigo 1) ofrece mejores propiedades para los mismos trabajos: firmas agregadas con MuSig2, ramas de Merkle (MAST) para revelar solo la ruta de script que se ejecuta, una huella más pequeña en la cadena y gastos por la ruta de clave que se ven como cualquier gasto de una sola firma. Las herramientas, eso sí, todavía se están poniendo al día. Bitcoin Core añadió los descriptores MuSig2 en la versión 30.0 (octubre de 2025) y la firma con MuSig2 en la versión 31.0 (abril de 2026), y el BIP 48 sigue recomendando P2WSH. En la cadena, en septiembre de 2026, los gastos P2WSH (2.1% de todas las entradas) todavía superaban a los gastos de Taproot por la ruta de script (0.8%); la multisig de Taproot hecha con MuSig2 se esconde dentro de los gastos por la ruta de clave y no se puede contar, pero las herramientas de Bitcoin Core para hacerla llegaron apenas en 2025 y 2026. P2WSH sigue siendo el caballo de batalla de la multisig, con la multisig de Taproot más llegando que llegada.
