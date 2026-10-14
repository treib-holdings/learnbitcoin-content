---
title: "Soft fork"
slug: soft-fork
draft: false
published: "2026-10-14"
shortDefinition: "Un cambio compatible hacia atrás que vuelve más estrictas las reglas de consenso de Bitcoin. Los bloques que cumplen las reglas nuevas siguen pareciendo válidos a los nodos que no se han actualizado, y una mayoría de los mineros, medida en hashrate (el poder de cómputo de la red), puede imponerlas."
keyTakeaways:
  - "Cambios de reglas compatibles hacia atrás, que endurecen las restricciones o añaden otras nuevas"
  - "Es seguro una vez que una mayoría del hashrate hace cumplir las reglas nuevas; los despliegues con BIP 9 esperan la señalización de los mineros para quedar fijados (locked in)"
  - "Los nodos sin actualizar siguen la cadena, pero no hacen cumplir las reglas nuevas"
aliases:
  - "soft forks"
  - "softfork"
  - "bifurcación suave"
  - "bifurcaciones suaves"
sources:
  - { label: "BIP-99 - Motivation and deployment of consensus rule changes: a softfork is a consensus fork in which everything previously invalid stays invalid while some previously valid blocks become invalid, and a hashrate majority of miners can impose the new rules; a hardfork makes previously invalid blocks valid and requires all users to upgrade", url: "https://github.com/bitcoin/bips/blob/master/bip-0099.mediawiki" }
  - { label: "BIP-9 - Version bits with timeout and delay: backward-compatible changes (soft forks) are signaled by miners through bits in the block version, tallied each retarget period, and move through STARTED, LOCKED_IN and ACTIVE states", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP-16 - Pay to Script Hash: the new rules apply to blocks timestamped from April 1, 2012; the matching address format is BIP-13", url: "https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki" }
  - { label: "BIP-141 - Segregated Witness (consensus layer): signature data leaves the transaction hash so nonintentional malleability becomes impossible; block weight is capped at 4,000,000; deployed with BIP-9 on bit 1", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core - Segregated Witness benefits (2016): SegWit raises the block size limit to nearly 4 MB, and its cost limit results in an effective limit closer to 1.6 to 2 MB", url: "https://bitcoincore.org/en/2016/01/26/segwit-benefits/" }
  - { label: "Bitcoin Core 0.21.1 release notes (May 1, 2021): Taproot's Speedy Trial needs 90 percent of blocks in a 2,016-block retarget period to signal; once locked in, Taproot activates at block 709632, expected in November 2021", url: "https://bitcoincore.org/en/releases/0.21.1/" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - bip-148-uasf
  - bitcoin-governance
  - chain-split
  - consensus-parameter
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - miner-signaling
sameAs:
  - "https://en.wikipedia.org/wiki/Fork_(blockchain)"
  - "https://www.wikidata.org/wiki/Q48893562"
  - "https://en.bitcoin.it/wiki/Softfork"
liveWidget: ~
translationOf: soft-fork
sourceHash: "a41c45895fe4"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Un soft fork (bifurcación compatible hacia atrás) es un cambio de consenso de Bitcoin que *endurece* las reglas: cosas que antes eran válidas pasan a ser inválidas con las reglas nuevas, pero todo lo que es válido con las reglas nuevas también lo es con las viejas. Los nodos antiguos que no se han actualizado siguen viendo los bloques nuevos como legítimos; simplemente no hacen cumplir por su cuenta las restricciones nuevas.

Es la forma *compatible hacia atrás* de hacer evolucionar el protocolo Bitcoin. Contrasta con un hard fork, que relaja las reglas y crea una cadena incompatible que los nodos viejos rechazan.

Soft forks destacados de Bitcoin:

- **[BIP 16 (P2SH) (en inglés)](/glossary/p2sh)**: 2012. Añadió las salidas P2SH, el tipo de script detrás de las direcciones que empiezan con 3.
- **[BIP 65 (CLTV) (en inglés)](/glossary/bip-65-opchecklocktimeverify)**: 2015. Añadió `OP_CHECKLOCKTIMEVERIFY` para los [bloqueos de tiempo absolutos (en inglés)](/glossary/absolute-locktime) en los scripts.
- **[BIP 68/112/113 (CSV) (en inglés)](/glossary/checksequenceverify-csv)**: 2016. Añadió los bloqueos de tiempo relativos.
- **[BIP 141 (SegWit)](/es/glosario/segwit)**: 2017. El grande: movió los datos de firma a un testigo (witness) separado, corrigió la maleabilidad por terceros y elevó la capacidad efectiva del bloque a entre 1.6 y 2 MB, aproximadamente, bajo un nuevo límite de 4 millones de unidades de peso.
- **[BIP 340/341/342 (Taproot)](/es/glosario/taproot)**: 2021. Añadió las [firmas Schnorr (en inglés)](/glossary/schnorr-signature), Taproot y Tapscript.

La activación suele pasar por la [señalización de mineros (en inglés)](/glossary/miner-signaling): suficientes mineros deben señalizar en los encabezados de sus bloques que están listos para las reglas nuevas antes de que el soft fork "quede fijado" (locked in) y empiece a hacerse cumplir. El mecanismo está definido en el [BIP 9](/es/glosario/bip-9-versionbits) y sus sucesores. Tras la activación, los nodos que no se han actualizado siguen funcionando, pero pueden aceptar bloques que violen las reglas nuevas; por eso los soft forks que de verdad cuentan con apoyo mayoritario son prácticamente seguros, mientras que los disputados pueden provocar [divisiones de la cadena](/es/glosario/division-de-la-cadena).

El enfoque del soft fork es conservador: Bitcoin puede añadir funciones sin obligar a todo el mundo a actualizarse al mismo tiempo. También es parte de la razón por la que Bitcoin evoluciona despacio: para activarse de verdad, cualquier propuesta tiene que superar una vara muy alta de consenso entre la comunidad, los mineros y los nodos económicos. Esa dinámica completa entre todas las partes es lo que describe la [gobernanza de Bitcoin (en inglés)](/glossary/bitcoin-governance); los soft forks son la forma más común que toma ese proceso cuando el objetivo es añadir capacidades sin dividir la red.

Lee [El proceso de los BIPs (en inglés)](/rabbit-hole/bip-process) para ver cómo un soft fork pasa de propuesta a activación.
