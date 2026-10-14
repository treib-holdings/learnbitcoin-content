---
title: "Altura de bloque"
slug: altura-de-bloque
draft: false
published: "2026-10-13"
shortDefinition: "El número de bloques desde el bloque génesis (que está a la altura 0)."
keyTakeaways:
  - "Cuenta los bloques desde el bloque génesis original"
  - "Sirve para referirse a puntos concretos de la cadena de bloques (blockchain)"
  - "Esencial para los eventos del protocolo ligados a intervalos de bloques"
aliases:
  - "altura del bloque"
  - "alturas de bloque"
  - "block height"
sources:
  - { label: "BIP-34 - Block v2, Height in Coinbase: the genesis block is height zero; 75% and 95% rules over the last 1,000 blocks (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki" }
  - { label: "Bitcoin Core - src/validation.cpp: GetBlockSubsidy halves every 210,000 blocks; ContextualCheckBlockHeader bounds a block's timestamp between median time past and two hours ahead (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "Bitcoin Core - src/pow.cpp: the target changes only once per DifficultyAdjustmentInterval of 2016 blocks (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
  - { label: "BIP-9 - Version bits with timeout and delay: signalling tallied per 2016-block retarget period, 95% threshold; BIP 34's supermajority rule reused by BIP 66 and BIP 65 (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP-341 - Taproot, Deployment: 90% threshold and min_activation_height 709632 (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Core - 0.21.1 release notes: taproot activation managed by a variation of BIP9 called Speedy Trial, 90% of a 2,016-block retarget period, active as of block 709632 (2021-05-01)", url: "https://bitcoincore.org/en/releases/0.21.1/" }
  - { label: "mempool.space - Block 840000, the fourth halving (2024-04-20)", url: "https://mempool.space/block/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5" }
relatedTerms:
  - bip-30
  - bip-34
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-header
  - block-propagation
  - block-time
  - blockchain
  - difficulty-retargeting
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - speedy-trial
sameAs:
  - "https://en.bitcoin.it/wiki/Confirmation"
liveWidget: ~
translationOf: block-height
sourceHash: "f81761f08af4"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

La altura de bloque es el número de bloques que hay entre un bloque dado y el [bloque génesis](/es/glosario/bloque-genesis), que está a la altura 0. El bloque 1 está uno por encima del génesis. El bloque 840,000, donde cayó el cuarto [halving](/es/glosario/halving) en abril de 2024, está 840,000 por encima de él.

La altura es la forma canónica de referirse a un punto de la historia de Bitcoin. Las marcas de tiempo son imprecisas (los mineros controlan sus propios relojes dentro de un margen). Las fechas dependen de convenciones de calendario. Pero las alturas de bloque son números enteros, nunca retroceden y son idénticas para todos los nodos de la red.

La mayoría de los eventos del protocolo de Bitcoin se programan por altura, no por fecha:

- Los **[halvings](/es/glosario/halving)** ocurren a las alturas 210,000, 420,000, 630,000 y así sucesivamente (cada 210,000).
- Los **[ajustes de dificultad](/es/glosario/ajuste-de-dificultad)** ocurren a las alturas que son múltiplos de 2,016.
- Los **[soft forks](/es/glosario/soft-fork)** también se activan por altura. Con el [BIP 9](/es/glosario/bip-9-versionbits), un cambio como [SegWit](/es/glosario/segwit) queda fijado (locked in) cuando el 95% de los bloques de un periodo de ajuste de 2,016 bloques lo señalizan, y se activa un periodo después; el despliegue de [Taproot](/es/glosario/taproot) con [Speedy Trial (en inglés)](/glossary/speedy-trial) usó un umbral del 90% más una altura mínima de activación fija, la 709,632. Soft forks anteriores, como el [BIP 34 (en inglés)](/glossary/bip-34) y el [BIP 66](/es/glosario/bip-66), se activaron en dos pasos: cuando 750 de los 1,000 bloques anteriores llevaban el número de versión nuevo, las reglas nuevas se aplicaban a los bloques de la versión nueva; cuando lo hacían 950, se aplicaban a todos los bloques.

Si quieres un solo número que ubique "qué está pasando en Bitcoin ahora mismo", es la altura de bloque actual. Mira la [página del nodo (en inglés)](/node) para ver la altura actual en vivo.
