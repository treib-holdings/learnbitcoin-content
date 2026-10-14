---
title: "Taproot"
slug: taproot
aliases:
  - "actualización Taproot"
  - "soft fork Taproot"
  - "salidas Taproot"
  - "direcciones Taproot"
draft: false
published: "2026-10-13"
shortDefinition: "El soft fork de 2021 (BIPs 340, 341 y 342) que trajo a Bitcoin las firmas Schnorr, las salidas Taproot y Tapscript. Toda salida Taproot se ve igual en la cadena, sea cual sea el script que tenga detrás."
keyTakeaways:
  - "Se activó en noviembre de 2021 a la altura de bloque 709,632: la mayor actualización del protocolo de Bitcoin desde SegWit"
  - "Firmas Schnorr: 64 bytes fijos (frente a los 71 o 72 de ECDSA), pruebas de seguridad más sólidas y agregación nativa"
  - "Gasto por la ruta de clave: los contratos complejos se ven en la cadena como gastos de una sola firma (una ganancia enorme en privacidad)"
  - "Gasto por la ruta de script (MAST): se revela solo la rama del script que de verdad se usa, no el árbol entero"
  - "Las direcciones Taproot empiezan con `bc1p` (codificación bech32m)"
sources:
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules (Pieter Wuille, Jonas Nick, Anthony Towns): a Taproot output is a native SegWit version 1 output with a 32-byte witness program; a key path spend is a single 64-byte signature, and a script path spend reveals one leaf plus a Merkle path proving the output committed to it", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-340 - Schnorr signatures for secp256k1: a fixed 64-byte format where DER-encoded ECDSA signatures are variable size and up to 72 bytes; provable security, where the best known results for ECDSA rely on stronger assumptions; linearity lets several parties produce one signature valid for the sum of their keys", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "Bitcoin Core 0.21.1 release notes (May 1, 2021): Speedy Trial needs 90 percent of blocks in a 2,016-block retarget period to signal; once locked in, Taproot activates at block 709632, expected in November 2021", url: "https://bitcoincore.org/en/releases/0.21.1/" }
  - { label: "BIP-350 - Bech32m format for v1+ witness addresses: native witness version 1 and later addresses use the Bech32m checksum; the mainnet test vectors begin bc1p", url: "https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki" }
  - { label: "Bitcoin Core source - src/wallet/wallet.h: DEFAULT_ADDRESS_TYPE is OutputType::BECH32, so new addresses are bc1q unless the user picks another type", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/wallet.h" }
  - { label: "ChainQuery - UTXO set repartition by output type (snapshot 2026-10-11): 53.8 million P2TR outputs, more than any other type, holding 1.1 percent of all bitcoin", url: "https://chainquery.com/reports/utxo-repartition" }
  - { label: "mainnet.observer - outputs created per day by type, raw data (outputs_p2tr_sum.csv against outputs_sum.csv and date.csv): Taproot was 5.4 percent of new outputs in September 2026; 2024 was the peak year at 26.5 percent, with 41.7 percent in January 2024", url: "https://mainnet.observer/csv/outputs_p2tr_sum.csv" }
relatedTerms:
  - bech32m
  - bip-bitcoin-improvement-proposal
  - bip-342-tapscript
  - inscriptions
  - key-path-spend
  - lightning-channel
  - low-r-signatures
  - merkleized-abstract-syntax-tree-mast
  - musig
  - musig2
  - post-quantum-bitcoin
  - schnorr-signature
  - script-path-spend
  - segwit-segregated-witness-bip-141
  - signature-aggregation
  - signature-clipping
  - silent-payments
  - soft-fork
sameAs:
  - "https://en.bitcoin.it/wiki/Taproot"
  - "https://en.bitcoin.it/wiki/BIP_0341"
  - "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki"
  - "https://bitcoinops.org/en/topics/taproot/"
liveWidget: ~
translationOf: taproot
sourceHash: "aeb43e3e4d2d"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Taproot es el soft fork (una bifurcación compatible hacia atrás) que se activó en Bitcoin en noviembre de 2021, a la altura de bloque 709,632, y que trajo al protocolo dos mejoras criptográficas: las [firmas Schnorr (en inglés)](/glossary/schnorr-signature) ([BIP 340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)) y el propio Taproot ([BIP 341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki), escrito por Pieter Wuille, Jonas Nick y Anthony Towns), junto con el nuevo lenguaje Tapscript ([BIP 342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki)) para condiciones de gasto avanzadas.

La característica principal es que **toda salida Taproot se ve igual en la cadena**. Da lo mismo si respalda una billetera de una sola firma, una multisig o un script complejo con bloqueos de tiempo y preimágenes de hash: la salida en la cadena es solo una clave pública de 32 bytes, y si las partes cooperan, el gasto es una sola firma Schnorr de 64 bytes. Quien observa no puede saber cuál de los tres se usó, a menos que se revele una ruta de script. Para la privacidad, esto es enorme.

Las direcciones Taproot empiezan con `bc1p` (usan la codificación [bech32m (en inglés)](/glossary/bech32m)).

## Cómo funciona

Una salida Taproot se compromete con una sola clave pública (la "clave interna"), con un árbol de scripts de gasto alternativos (las rutas de script), o con ambas cosas.

Dos rutas de gasto (en inglés, key path y script path):

1. **[Gasto por la ruta de clave (en inglés)](/glossary/key-path-spend).** Si todos los participantes de una multisig o de un contrato complejo están de acuerdo, pueden firmar en conjunto con una clave pública agregada (mediante [MuSig2 (en inglés)](/glossary/musig2)). En la cadena, el gasto se ve como una sola firma; quien observa no puede saber si existían rutas de script ni cuáles habrían sido. Es el caso común, y el tipo de gasto más privado y más barato que tiene Bitcoin.
2. **[Gasto por la ruta de script (en inglés)](/glossary/script-path-spend) ([MAST (en inglés)](/glossary/merkleized-abstract-syntax-tree-mast)).** Si no están de acuerdo (alguien está desconectado, vence un bloqueo de tiempo o hace falta una rama de respaldo), una de las partes puede revelar *solo la rama del script que de verdad se ejecuta*, junto con una prueba de Merkle de que la salida original se comprometió con ella. Las demás ramas siguen ocultas.

La combinación hace que los contratos complejos paguen un costo casi nulo en la cadena cuando "salen bien" (todos firman en cooperación), y que revelen solo la rama estrictamente necesaria cuando "salen mal".

## Qué hace posible

- **Agregación con MuSig2 / FROST.** Varios cofirmantes producen una sola firma Schnorr sobre una sola clave interna. Una federación 5 de 7 gasta una salida Taproot de forma indistinguible de una billetera de una sola firma.
- **Privacidad en los canales Lightning.** Los cierres cooperativos de canal se ven como cualquier otro gasto Taproot por la ruta de clave, y ya no como un visible "cierre de multisig 2 de 2".
- **Multisig barata.** Pagas por la firma que de verdad usas, no por todas las claves con las que te comprometiste.
- **Menos datos en la cadena.** Las firmas Schnorr ocupan 64 bytes fijos; las firmas ECDSA codificadas en DER llegan a 72 y se quedan en 71 incluso cuando se buscan a propósito firmas [low-R (en inglés)](/glossary/low-r-signatures).
- **Criptografía más limpia.** Schnorr tiene pruebas de seguridad más sólidas que ECDSA.
- **Una base para protocolos futuros.** Los [Silent Payments (en inglés)](/glossary/silent-payments), los Discreet Log Contracts (DLCs) y las construcciones más nuevas de Lightning se benefician de las primitivas de Taproot.

## Adopción

La adopción de Taproot tardó unos años en extenderse por el software de billeteras, las billeteras de hardware y la infraestructura. En 2026 casi todo el software ya lo admite para enviar y recibir, pero la mayoría de las billeteras importantes todavía entregan por defecto direcciones SegWit nativas `bc1q`; Bitcoin Core lo hace, y ofrece Taproot como opción. Alrededor del 5% de las salidas recién creadas son `bc1p...`, por debajo del pico de las [inscripciones (en inglés)](/glossary/inscriptions) de 2024, aunque por cantidad Taproot ya es el tipo de salida más numeroso del conjunto de UTXOs.

Vale la pena nombrar una propiedad estructural: las salidas Taproot se comprometen con la clave pública ajustada (tweaked) directamente en la dirección bech32m; no hay una capa de hash delante. Toda salida P2TR está por eso "siempre expuesta" en términos [poscuánticos (en inglés)](/glossary/post-quantum-bitcoin): la clave pública está en la cadena desde que se crea la salida, se gaste o no alguna vez. A cambio se obtienen la privacidad de la ruta de clave y la eficiencia para los contratos complejos. La solución, cuando lleguen las firmas poscuánticas, es un nuevo tipo de salida, no abandonar Taproot.

Lee [Firma Schnorr (en inglés)](/glossary/schnorr-signature) y [Agregación de firmas (en inglés)](/glossary/signature-aggregation) para conocer las piezas básicas.

Lee [El proceso de los BIPs (en inglés)](/rabbit-hole/bip-process) para ver el proceso que llevó a activar Taproot.

Profundiza en [Cómo funciona Taproot en realidad (en inglés)](/rabbit-hole/how-taproot-works): el ajuste (tweak), las dos rutas de gasto byte a byte, lo que Schnorr cambió y lo que no, la cronología de la activación y cinco años de cifras de adopción.
