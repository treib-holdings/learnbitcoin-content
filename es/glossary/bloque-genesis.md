---
title: "Bloque génesis"
slug: bloque-genesis
draft: false
published: "2026-10-14"
shortDefinition: "El primer bloque de Bitcoin, minado por Satoshi Nakamoto el 3 de enero de 2009, con una referencia a un titular del Times."
keyTakeaways:
  - "Lo minó Satoshi y es el cimiento de la cadena de bloques (blockchain)"
  - "Contiene una referencia a los titulares de la crisis bancaria de 2009"
  - "Su recompensa coinbase de 50 BTC no se puede gastar por una rareza del código original"
aliases:
  - "bloque genesis"
  - "genesis block"
sources:
  - { label: "mempool.space - block 0 (timestamp 1231006505, 3 January 2009 18:15:05 UTC; no previous block hash; nonce 2083236893)", url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "mempool.space - the genesis coinbase transaction (its scriptSig pushes 0x45 = 69 bytes of headline text)", url: "https://mempool.space/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b" }
  - { label: "Bitcoin Core source - CreateGenesisBlock in src/kernel/chainparams.cpp (pszTimestamp is the Times headline; hashPrevBlock.SetNull(); the result is asserted against the known hash)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core source - ConnectBlock in src/validation.cpp: 'Special case for the genesis block, skipping connection of its transactions (its coinbase is unspendable)'", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "Bitcoin Wiki - Genesis block (the Times front page; the reward can't be spent due to a quirk in the way the block is expressed in the code, and it is not known if this was intentional)", url: "https://en.bitcoin.it/wiki/Genesis_block" }
  - { label: "Satoshi Nakamoto Institute - Satoshi's forum posts (the last bitcointalk post is dated 12 December 2010; the lone 2014 P2P Foundation post carries the Institute's disclaimer that its authenticity demands scrutiny)", url: "https://satoshi.nakamotoinstitute.org/posts/" }
relatedTerms:
  - block-header
  - block-height
  - block-reward
  - block-subsidy
  - blockchain
  - coinbase-transaction
  - satoshi-nakamoto
  - whitepaper
sameAs:
  - "https://www.wikidata.org/wiki/Q124624002"
  - "https://en.bitcoin.it/wiki/Genesis_block"
liveWidget: ~
translationOf: genesis-block
sourceHash: "e8fe3a8015f3"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

El bloque génesis es el bloque 0 de la cadena de Bitcoin: el primero. [Satoshi Nakamoto](/es/glosario/satoshi-nakamoto) lo minó el 3 de enero de 2009 e incrustó en su [transacción coinbase](/es/glosario/transaccion-coinbase) un mensaje que hoy es famoso:

> "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" (es decir: The Times, 3 de enero de 2009, el ministro de Hacienda británico al borde de un segundo rescate a los bancos)

Era, palabra por palabra, el titular de la portada del Times de Londres de ese mismo día. Cumple dos funciones. Primero, demuestra que el bloque no se minó por adelantado: no pudo existir antes que el titular del periódico. Segundo, es una declaración de intenciones inconfundible: Bitcoin arrancó en plena crisis bancaria, invocando de forma explícita las fallas del sistema con el que fue diseñado para competir.

Algunas rarezas técnicas del bloque génesis:

- **El [subsidio de bloque](/es/glosario/subsidio-de-bloque) de 50 BTC no se puede gastar.** El código original nunca añadió la coinbase del génesis al conjunto de UTXOs, y Bitcoin Core mantiene ese comportamiento a propósito hasta hoy. Nadie sabe si Satoshi lo quiso así. Las monedas existen en la leyenda, pero no en la oferta gastable.
- **No tiene hash del bloque anterior.** El campo del hash del bloque anterior es todo ceros, porque no hay nada antes.
- **Está fijo en el código de Bitcoin Core.** Cada nodo reconstruye el bloque a partir de constantes en su código fuente (el titular, la marca de tiempo, el nonce) y compara el resultado con el hash conocido. La red no lo "encuentra": es una constante.

Hoy el bloque génesis es sobre todo simbólico, pero vale la pena releer el mensaje en cada halving. Es el documento fundacional de un sistema monetario alternativo, escrito en 69 caracteres por alguien que dejó de publicar en diciembre de 2010 y no ha vuelto a aparecer desde entonces.

Lee el [whitepaper](/es/glosario/whitepaper), el documento que lo acompaña, y [Satoshi Nakamoto](/es/glosario/satoshi-nakamoto) para lo que sabemos de quien lo puso ahí.
