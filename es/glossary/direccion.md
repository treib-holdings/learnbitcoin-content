---
title: "Dirección"
slug: direccion
translationOf: address
sourceHash: "596b4833ce48"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
aliases:
  - "direcciones"
  - "dirección de Bitcoin"
draft: false
published: "2026-10-13"
shortDefinition: "Una cadena de caracteres (que suele empezar con 1, 3 o bc1) que representa un destino para pagos en Bitcoin, derivada de una clave pública."
keyTakeaways:
  - "Se deriva de una clave pública o de un script, normalmente mediante un hash criptográfico"
  - "Existen varios formatos (por ejemplo, P2PKH y Bech32)"
  - "Compartir una dirección es la forma de recibir bitcoin"
sources:
  - { label: "BIP-173 - Base32 address format for native v0-16 witness outputs: the checksum guarantees detection of any error affecting at most 4 characters; the mainnet P2WPKH example starts with bc1q (2017)", url: "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" }
  - { label: "BIP-350 - Bech32m format for v1+ witness addresses: witness version 1 and later use Bech32m; the valid Taproot test vectors start with bc1p (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki" }
  - { label: "BIP-341 - Taproot: a Taproot output is a native SegWit version 1 output whose 32-byte witness program is a public key; key-based spends by one party or many are indistinguishable from each other (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-340 - Schnorr Signatures for secp256k1: a fixed 64-byte format instead of DER-encoded ECDSA signatures of up to 72 bytes (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "Bitcoin Core - 0.13.1 release notes: each byte of a segregated witness is given a weight of 1, each other byte in a block a weight of 4 (2016-10-27)", url: "https://bitcoincore.org/en/releases/0.13.1/" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 10, Privacy: a new key pair should be used for each transaction to keep them from being linked to a common owner (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
relatedTerms:
  - address-reuse
  - b32-address
  - bech32m
  - bip-173-bech32
  - bitcoin-script
  - p2pk-pay-public-key
  - p2pkh-pay-public-key-hash
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - price-discovery
  - silent-payments
  - stealth-address
  - vanity-address
sameAs:
  - "https://en.bitcoin.it/wiki/Address"
liveWidget: ~
---

Una dirección de Bitcoin es una cadena corta de caracteres que representa el destino de un pago. Normalmente codifica un [hash](/es/glosario/hash) de una [clave pública](/es/glosario/clave-publica) o de un script; una dirección Taproot codifica directamente una clave pública ajustada (tweaked). En cualquier caso, su formato está pensado para copiarse, pegarse y escanearse con facilidad.

En la red conviven varios formatos de dirección:

- **Legacy / P2PKH** - empieza con `1`. El formato original. Sigue funcionando; ocupa más espacio en el bloque que los tipos más nuevos.
- **P2SH** - empieza con `3`. Pay-to-Script-Hash, usado a menudo para [multisig](/es/glosario/multisig) o para las antiguas direcciones SegWit envueltas en P2SH.
- **SegWit nativo / Bech32** - empieza con `bc1q`. Introducido por el [BIP 173 (en inglés)](/glossary/bip-173-bech32). Comisiones más baratas y mejor detección de errores.
- **Taproot / Bech32m** - empieza con `bc1p`. Definido por el [BIP 341](/es/glosario/taproot) y codificado con [Bech32m (en inglés)](/glossary/bech32m). Firmas Schnorr de tamaño fijo (64 bytes), y un gasto por la ruta de clave se ve igual tanto si detrás hay una sola clave, una multisig o un árbol de scripts.

Todos los formatos representan el mismo concepto de fondo: "para gastar los BTC enviados aquí, tienes que presentar un script válido y la firma o firmas que cumplan las condiciones de bloqueo codificadas en esta dirección". Cada formato solo especifica una estructura distinta de script de bloqueo y deja una huella distinta en la cadena.

Algunas cosas que una dirección no es:

- **No es tu identidad.** Una dirección es un destino, no una cuenta. Una billetera suele generar muchas direcciones para recibir.
- **No es anónima.** La cadena es completamente pública. Si una dirección se ha vinculado contigo (por el KYC de un exchange, una donación pública, una dirección reutilizada), toda transacción que la toque puede rastrearse hasta ti. Consulta [Fungibilidad (en inglés)](/glossary/fungibility).
- **No es permanente.** La mayoría de las billeteras generan una dirección nueva para cada pago entrante. [Reutilizar direcciones](/es/glosario/reutilizacion-de-direcciones) filtra privacidad al concentrar la actividad en un solo lugar observable.

Comparte direcciones sin problema para recibir. Genera direcciones nuevas con frecuencia. Trata el historial on-chain de cualquier dirección como una anotación en un registro público, porque eso es exactamente lo que es.
