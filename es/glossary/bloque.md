---
title: "Bloque"
slug: bloque
draft: false
published: "2026-10-13"
shortDefinition: "Una estructura de datos que agrupa transacciones y hace referencia al hash del bloque anterior para formar la cadena de bloques (blockchain) de Bitcoin."
keyTakeaways:
  - "Agrupa transacciones válidas en un formato de datos estructurado"
  - "Cada bloque hace referencia al hash del bloque anterior"
  - "La prueba de trabajo asegura la cadena e impide manipularla"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, sections 3 to 6 (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin developer reference - Block Headers: previous block header hash and merkle root (accessed 2026-10-13)", url: "https://developer.bitcoin.org/reference/block_chain.html#block-headers" }
  - { label: "Bitcoin Core - src/kernel/chainparams.cpp: nSubsidyHalvingInterval = 210000, nPowTargetSpacing = 10 * 60 (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core - src/validation.cpp: GetBlockSubsidy (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "mempool.space - Block 840000, first block of the 3.125 BTC subsidy era (2024-04-20)", url: "https://mempool.space/block/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5" }
relatedTerms:
  - bip-22-getblocktemplate
  - bip-30
  - bip-34
  - bip-102-2mb-block-size
  - bip-152-compact-blocks
  - block-explorer
  - block-header
  - block-height
  - block-propagation
  - block-reward
  - block-size
  - block-subsidy
  - block-time
  - blockchain
sameAs:
  - "https://en.wikipedia.org/wiki/Blockchain"
  - "https://www.wikidata.org/wiki/Q20514253"
  - "https://en.bitcoin.it/wiki/Block"
liveWidget: liveBlockHeight
translationOf: block
sourceHash: "fe50688bb87e"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Un bloque es un lote de transacciones de Bitcoin que se verificaron juntas, selladas con [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work) y con marca de tiempo más o menos cada 10 minutos. Piénsalo como una página de un registro contable del que todo el mundo tiene una copia, y que todos están cotejando contra las copias de los demás.

Cada bloque contiene en su encabezado el hash del bloque anterior. Eso es lo que convierte los bloques en una *cadena*: altera el bloque 800,000 y cada bloque posterior apunta a un hash equivocado. Tu falsificación salta a la vista de cada nodo del planeta en cuanto lo revisa.

Los [mineros](/es/glosario/minero) compiten por encontrar una prueba de trabajo válida para el siguiente bloque. El primero que lo logra recibe un [subsidio de bloque](/es/glosario/subsidio-de-bloque) nuevo (3.125 BTC desde el bloque 840,000, en abril de 2024, con un halving cada 210,000 bloques) más las comisiones de cada transacción que mete en el bloque. Esa es toda la estructura de incentivos que mantiene creciendo la cadena. Para el mecanismo en detalle, lee el tema a fondo [Minería (en inglés)](/rabbit-hole/mining).

Abajo está el último bloque aceptado por el nodo de Bitcoin que alimenta [ChainQuery](https://chainquery.com). Recarga esta página en unos 10 minutos y el número debería cambiar.
