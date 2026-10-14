---
title: "Raíz de Merkle"
slug: raiz-de-merkle
draft: false
published: "2026-10-14"
shortDefinition: "El único hash de 32 bytes en la cima del árbol de Merkle de un bloque, que resume todas las transacciones incluidas."
keyTakeaways:
  - "El hash final que encapsula cada transacción del bloque"
  - "Parte integral de la prueba de trabajo, porque los mineros calculan el hash del encabezado del bloque"
  - "Una alteración mínima en las transacciones rompería la cadena de hashes"
aliases:
  - "raíz Merkle"
  - "raíces de Merkle"
  - "raíz del árbol de Merkle"
  - "merkle root"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, sections 7 and 8 (2008): transactions are hashed in a Merkle Tree with only the root included in the block's hash; a light client keeps the block headers and obtains the Merkle branch linking a transaction to its block", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin.org Developer Reference - Block Chain, block headers and merkle trees: the merkle root is a SHA256(SHA256()) hash derived from all the TXIDs in the block; if all 32-bit nonce values are tested, the coinbase transaction can be changed and the merkle root updated", url: "https://developer.bitcoin.org/reference/block_chain.html" }
  - { label: "Bitcoin.org Developer Guide - Block Chain, merkle trees and SPV: hashes are paired, hashed, paired again and hashed again until a single hash remains; to verify one of five transactions an SPV client needs only three intermediate hashes plus the merkle root", url: "https://developer.bitcoin.org/devguide/block_chain.html" }
  - { label: "Bitcoin.org Developer Guide - Mining: the mining hardware iterates through every possible nonce; if none works it gets a new header with a new merkle root, made by adding extra nonce data to the coinbase transaction", url: "https://developer.bitcoin.org/devguide/mining.html" }
  - { label: "BIP-37 - Connection Bloom filtering (2012): a merkleblock message is a block header plus part of a merkle tree, proving that the matching transactions really appeared in the block", url: "https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki" }
  - { label: "BIP-141 - Segregated Witness, Consensus layer (2015): block weight must be at most 4,000,000", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
relatedTerms:
  - bip-37
  - bip-158
  - block-header
  - block-size
  - bloom-filter
  - chain-visualization
  - hash
  - merkle-block
  - merkle-inclusion-proof
  - merkle-tree-merkle-root
  - merkleized-abstract-syntax-tree-mast
  - merkle-proof
  - spv-simplified-payment-verification
liveWidget: ~
translationOf: merkle-root
sourceHash: "719ce8e6ddd2"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

La raíz de Merkle es el único hash de 32 bytes que va en cada [encabezado del bloque](/es/glosario/encabezado-del-bloque) y que fija todas las transacciones del bloque.

Se calcula construyendo un [árbol de Merkle (en inglés)](/glossary/merkle-tree-merkle-root) sobre los txids de las transacciones del bloque: se emparejan, se calcula el hash de cada par, luego se emparejan los hashes resultantes, luego esos, y así hasta que queda un solo hash. Ese hash final es la raíz de Merkle.

Tres cosas hacen que todo descanse sobre ella:

1. **Ata las transacciones al bloque.** Cambia los datos de cualquier transacción y cambia la raíz de Merkle. Cambia la raíz de Merkle y cambia el encabezado del bloque. Cambia el encabezado y tienes que rehacer la [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work). El costo de manipular el bloque es el costo de volver a minarlo por completo.
2. **Es lo que en realidad entra en el hash que calculan los mineros.** El hash del [encabezado del bloque](/es/glosario/encabezado-del-bloque) incluye la raíz de Merkle. Cuando un [minero](/es/glosario/minero) varía su [nonce](/es/glosario/nonce) en busca de un bloque válido, la raíz de Merkle es una de las entradas. (Cuando agota los nonces, modifica el extranonce de la transacción coinbase, lo que cambia la raíz de Merkle, lo que le da un espacio de nonces nuevo.)
3. **Hace posible el SPV (verificación simplificada de pagos).** Los [clientes ligeros](/es/glosario/spv) pueden verificar que sus transacciones están en la cadena descargando solo los encabezados de bloque más una prueba de Merkle de tamaño `log2(N)` por transacción.

Un compromiso criptográfico de 32 bytes que fija unos cuantos megabytes de datos de transacciones (todo lo que cabe en un bloque), sin perder ninguna información en lo que respecta a la inclusión. Una de las piezas de elegancia de diseño más discretas de Bitcoin.

Consulta [Árbol de Merkle / raíz de Merkle (en inglés)](/glossary/merkle-tree-merkle-root) para ver la construcción en detalle.
