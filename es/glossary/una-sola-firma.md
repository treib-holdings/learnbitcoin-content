---
title: "Una sola firma (single-sig)"
slug: una-sola-firma
draft: false
published: "2026-10-14"
shortDefinition: "Una sola firma ECDSA o Schnorr que controla una salida: la configuración típica de una sola firma (single-sig), a diferencia de la multisig."
keyTakeaways:
  - "El enfoque estándar: una clave privada firma y una firma basta"
  - "Menos segura que la multisig si la clave se ve comprometida"
  - "Una firma Schnorr de una sola clave puede ser más compacta que una ECDSA"
aliases:
  - "single-sig"
  - "single sig"
  - "de una sola firma"
  - "firma única"
  - "monofirma"
  - "mono-signature"
sources:
  - { label: "BIP-340 - Schnorr Signatures for secp256k1 (2020): a standard for 64-byte Schnorr signatures; DER-encoded ECDSA signatures are variable size and up to 72 bytes", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "Bitcoin Core PR #13666 - Always create signatures with Low R values (merged August 2018): signatures of at most 71 bytes including the sighash byte, and 71 bytes in most cases", url: "https://github.com/bitcoin/bitcoin/pull/13666" }
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules (2020): multi-party public keys and signatures are indistinguishable from their single-party equivalents, so most applications can use the key-based spending path", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Optech - MuSig topic page: multiple users each with their own private key create a combined public key that is indistinguishable from any other schnorr pubkey", url: "https://bitcoinops.org/en/topics/musig/" }
  - { label: "BOLT #3 - Bitcoin Transaction and Script Formats: the funding output is a P2WSH 2-of-2 OP_CHECKMULTISIG script", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md" }
  - { label: "mainnet.observer (formerly transactionfee.info) - Input Types by Count (daily data read 13 October 2026: over the previous 30 days P2WPKH 71%, P2TR key path 8%, P2PKH 7% and nested P2WPKH 4% of inputs; P2A anchors 6%; P2SH, P2WSH, nested P2WSH and P2TR script path about 4% together)", url: "https://mainnet.observer/charts/inputs-types-by-count/" }
relatedTerms:
  - interactive-multi-sig
  - m-n
  - musig
  - musig2
  - quorum-signatures
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
translationOf: mono-signature
sourceHash: "cf6cb1ec7249"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

"Mono-signature" (monofirma) es una forma poco habitual de nombrar lo que casi todo el mundo llama single-sig, una sola firma: una clave privada, una firma, una salida bajo su control. Es el patrón de gasto por defecto en Bitcoin.

La gran mayoría de las transacciones on-chain de Bitcoin hoy son de una sola firma: los tipos de salida de una sola clave representan más o menos nueve de cada diez entradas gastadas en un mes típico (contando los gastos por ruta de clave de Taproot, que se ven igual en la cadena ya sea que la firma la haya producido una sola clave o un agregado de varias), y los gastos por script, como la multisig clásica, son apenas un pequeño porcentaje. La multisig y los esquemas agregados se usan para custodia de mayor seguridad (bóvedas, almacenamiento en frío de exchanges, tesorerías) o por razones de protocolo (los canales Lightning son, en el fondo, una multisig 2 de 2; una 2 de 2 construida con MuSig2 sobre Taproot puede gastar por la ruta de clave y verse exactamente igual que una sola firma).

Las firmas Schnorr (Taproot) de una sola clave ocupan 64 bytes fijos; las firmas ECDSA llegan hasta 72 bytes en codificación DER, o 71 cuando la billetera prueba firmas hasta dar con un valor [low-R (en inglés)](/glossary/low-r-signatures). Ambas autorizan el gasto con una clave privada, ambas se ven en la cadena como una sola firma y ambas tienen el mismo perfil de seguridad de punto único de falla.

La contrapartida es la obvia: una clave, un punto de falla. Si pierdes el acceso a la clave (frase semilla perdida, disco muerto, sin respaldo), las monedas desaparecen. Si la clave se ve comprometida (malware, un ataque a la cadena de suministro de una billetera, un manejo descuidado de la frase semilla), las monedas te las roban. La multisig y las firmas agregadas reparten ese riesgo entre varias claves o dispositivos, a cambio de complejidad operativa.

Para la mayoría de la gente, una única billetera de hardware (hardware wallet), con una sola firma y un respaldo de la frase semilla bien verificado, es muchísimo más segura que las alternativas que de verdad lograría ejecutar correctamente. La multisig es una mejora real solo si estás dispuesto a usarla con competencia.
