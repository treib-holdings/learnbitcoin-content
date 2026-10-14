---
title: "Parámetro de consenso"
slug: parametro-de-consenso
aliases:
  - "parámetros de consenso"
  - "regla de consenso"
  - "reglas de consenso"
draft: false
published: "2026-10-13"
shortDefinition: "Una regla o configuración de toda la red, como el límite de peso del bloque o la regla de dificultad, que todos los nodos completos deben seguir para que haya consenso."
keyTakeaways:
  - "Define las reglas fundamentales de validez de bloques y transacciones"
  - "Cambiarlo puede provocar una división de la cadena si no se acepta de forma amplia"
  - "Lo hacen cumplir los nodos completos para que toda la red esté de acuerdo"
sources:
  - { label: "Bitcoin Core - src/consensus/consensus.h (MAX_BLOCK_WEIGHT 4,000,000; COINBASE_MATURITY 100)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/consensus.h" }
  - { label: "Bitcoin Core - src/kernel/chainparams.cpp (nSubsidyHalvingInterval 210,000; a two-week retarget timespan at 10-minute block spacing, 2,016 blocks)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Wiki - Controlled supply (50 BTC per block in the first era, a 50% reduction every 210,000 blocks, a retarget every 2,016 blocks, and the exact total of 20,999,999.9769 BTC)", url: "https://en.bitcoin.it/wiki/Controlled_supply" }
  - { label: "Bitcoin Optech - Soft fork activation topic (BIP 8, BIP 9 and Speedy Trial; the activation history from P2SH in 2012 through CLTV in 2015, CSV in 2016 and SegWit in 2017)", url: "https://bitcoinops.org/en/topics/soft-fork-activation/" }
  - { label: "Bitcoin Core - doc/bips.md (the BIPs each release implements: P2SH took effect on 1 April 2012; Taproot rules shipped in 0.21.0 with mainnet activation parameters in 0.21.1)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/bips.md" }
  - { label: "Bitcoin Core 0.21.1 release notes - Taproot activation by Speedy Trial, a variation of BIP 9 versionbits with a 90% threshold, active from block 709,632 (2021)", url: "https://bitcoincore.org/en/releases/0.21.1/" }
relatedTerms:
  - block
  - block-subsidy
  - blockchain
  - decentralization
  - deployment-threshold-soft-fork
  - difficulty
  - difficulty-retargeting
  - fork
  - locked-period-soft-fork
  - nonce
  - proof-work-pow
  - soft-fork
liveWidget: ~
translationOf: consensus-parameter
sourceHash: "b9c544971931"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Un parámetro de consenso es cualquier regla que el protocolo exige que todos los nodos completos hagan cumplir de forma idéntica. Si dos nodos no coinciden en un parámetro de consenso, terminan en cadenas distintas.

Los principales parámetros de consenso de Bitcoin:

- **Límite de peso del bloque.** 4 millones de unidades de peso. El reemplazo, tras SegWit, del tope original de 1 MB al tamaño del bloque.
- **Calendario de [halvings](/es/glosario/halving).** El subsidio se reduce a la mitad cada 210,000 bloques (unos 4 años), empezando en 50 BTC, lo que fija el total en la asíntota de 20,999,999.9769 BTC.
- **Opcodes de script válidos y su semántica.** Los define la implementación del consenso: qué hace `OP_CHECKLOCKTIMEVERIFY`, qué hace `OP_CHECKMULTISIG`, qué se permite en un testigo (witness) de SegWit, qué se permite en una hoja de Tapscript.
- **Regla de [ajuste de dificultad](/es/glosario/ajuste-de-dificultad).** Cada 2,016 bloques, la dificultad se ajusta para que el intervalo esperado entre bloques apunte a 10 minutos.
- **Madurez de la coinbase.** Las recompensas de bloque recién creadas no se pueden gastar hasta tener 100 confirmaciones.
- **Reglas de activación de los soft forks.** Los bits de versión de BIP 9, la variante Speedy Trial que activó Taproot, BIP 8: las reglas sobre *cómo* se activan los nuevos parámetros de consenso son, a su vez, una especie de parámetro de metaconsenso.

Cambiar un parámetro de consenso exige un [soft fork](/es/glosario/soft-fork) coordinado (una bifurcación compatible hacia atrás, que endurece las reglas) o un [hard fork](/es/glosario/bifurcacion) (que relaja las reglas y divide la cadena si no es unánime). La vara está alta en ambos casos. El conjunto de parámetros de Bitcoin se ha mantenido estable a propósito: los soft forks que la mayoría de la gente puede nombrar llegaron con pocos años de diferencia, P2SH (2012), CLTV (2015), CSV (2016), SegWit (2017) y Taproot (2021), y la lista completa de cambios de consenso en el doc/bips.md de Bitcoin Core añade apenas un puñado más.

Esa estabilidad es, en sí misma, una virtud. El valor del dinero viene en parte de la confianza en que las reglas no van a cambiar. Un parámetro de consenso que lleva una década sin cambios les dice a quienes tienen bitcoin algo que una cadena de políticas arbitrarias no puede decirles.
