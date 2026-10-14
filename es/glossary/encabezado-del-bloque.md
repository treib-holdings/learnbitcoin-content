---
title: "Encabezado del bloque"
slug: encabezado-del-bloque
draft: false
published: "2026-10-13"
shortDefinition: "El resumen de 80 bytes que va al principio de un bloque: versión, hash del bloque anterior, raíz de Merkle, marca de tiempo, objetivo de dificultad (bits) y nonce."
keyTakeaways:
  - "Contiene los elementos esenciales que se hashean en la prueba de trabajo"
  - "Enlaza con el bloque anterior y resume las transacciones mediante la raíz de Merkle"
  - "Los mineros se concentran en encontrar un hash válido del encabezado para producir un bloque nuevo"
aliases:
  - "encabezado de bloque"
  - "encabezados de bloque"
  - "block header"
avoid:
  - "cabecera del bloque"
  - "cabecera de bloque"
sources:
  - { label: "Bitcoin Core - src/primitives/block.h: CBlockHeader fields nVersion, hashPrevBlock, hashMerkleRoot, nTime, nBits, nNonce (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/primitives/block.h" }
  - { label: "Bitcoin developer reference - Block Headers: 80-byte format, timestamp rules, nBits and nonce (accessed 2026-10-13)", url: "https://developer.bitcoin.org/reference/block_chain.html#block-headers" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, sections 7 and 8: 80 bytes * 6 * 24 * 365 = 4.2MB per year (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Wiki - Block hashing algorithm: the extraNonce field in the coinbase transaction (accessed 2026-10-13)", url: "https://en.bitcoin.it/wiki/Block_hashing_algorithm" }
  - { label: "Bitcoin Core - Release notes 0.10.0: headers-first synchronization (2015)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.10.0.md" }
  - { label: "BIP-130 - sendheaders message: announcing new blocks by header (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0130.mediawiki" }
relatedTerms:
  - bip-22-getblocktemplate
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-height
  - block-propagation
  - block-time
  - blockchain
  - genesis-block
  - merkle-block
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
sameAs:
  - "https://en.bitcoin.it/wiki/Block_hashing_algorithm"
liveWidget: ~
translationOf: block-header
sourceHash: "dbc954b20b29"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

El encabezado del bloque es el resumen de 80 bytes que va al principio de cada bloque de Bitcoin. Es diminuto, pero es todo lo que importa para la [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work).

Los seis campos:

1. **Versión** (4 bytes): señala qué reglas del protocolo sigue el bloque.
2. **Hash del bloque anterior** (32 bytes): el hash del encabezado del bloque previo. Esto es lo que hace de Bitcoin una *cadena*.
3. **[Raíz de Merkle](/es/glosario/raiz-de-merkle)** (32 bytes): un solo hash que fija todas las transacciones del bloque. Cambia cualquier transacción y este hash cambia.
4. **Marca de tiempo** (4 bytes): lo que el minero afirma sobre cuándo se minó el bloque. Tiene límites laxos: debe ser posterior a la mediana de las marcas de tiempo de los 11 bloques anteriores (el [median time past (en inglés)](/glossary/mtp-median-time-past)) y no puede adelantarse más de dos horas al reloj del nodo que lo recibe.
5. **Bits** (4 bytes): una codificación compacta del objetivo de dificultad vigente.
6. **[Nonce](/es/glosario/nonce)** (4 bytes): el campo que los mineros van variando mientras buscan un hash válido.

Para minar un bloque, calculas SHA-256(SHA-256(encabezado)) y compruebas si el resultado es igual o menor que el objetivo codificado en *bits*. Si no, cambias el nonce y vuelves a intentarlo. (Cuando agotas los 4,000 millones de valores del nonce, ajustas el extranonce de la [transacción coinbase](/es/glosario/transaccion-coinbase), lo que cambia la raíz de Merkle, y empiezas de nuevo.)

Como un encabezado ocupa solo 80 bytes, un nodo puede comprobar la prueba de trabajo de un bloque antes de tener el bloque en sí. Bitcoin Core sincroniza primero los encabezados desde la versión 0.10 (2015), y desde el BIP 130 un par (un nodo vecino) puede pedir que los bloques nuevos se le anuncien por su encabezado y no solo por su hash. Los clientes ligeros (las billeteras [SPV](/es/glosario/spv)) siguen la cadena comprobando únicamente los encabezados, unos 4.2 MB al año, como calculó el whitepaper, sin almacenar los gigabytes de datos completos de las transacciones.

Mira el [tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para el proceso de búsqueda, y [Bloque](/es/glosario/bloque) para saber qué es lo que el encabezado resume.
