---
title: "Capa 1"
slug: capa-1
draft: false
published: "2026-10-14"
shortDefinition: "La cadena de bloques (blockchain) de la red principal de Bitcoin (mainnet), donde las transacciones se liquidan en la cadena bajo el consenso completo de la prueba de trabajo."
keyTakeaways:
  - "La base de la seguridad y de la liquidación en Bitcoin"
  - "Limitada en capacidad de procesamiento, lo que da pie a las expansiones de capa 2"
  - "Mineros y nodos completos hacen cumplir el consenso de forma colectiva"
aliases:
  - "capa base"
  - "cadena base"
  - "layer 1"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP 141 - Segregated Witness (Consensus layer): block weight limit of 4,000,000 (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core - src/consensus/amount.h, MAX_MONEY (master, accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/amount.h" }
  - { label: "Bitcoin Core - src/kernel/chainparams.cpp, mainnet nPowTargetSpacing and nSubsidyHalvingInterval (master, accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Visuals - data_daily.csv, daily transaction counts (tx_count_total_sum), 2016 to 2026 (accessed 2026-10-13)", url: "https://bitcoinvisuals.com/static/data/data_daily.csv" }
  - { label: "Bitcoin Optech - Taproot topic: activated soft fork, block 709,632 (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/taproot/" }
relatedTerms:
  - bitcoin-core
  - block
  - block-size
  - consensus-parameter
  - full-node
  - lightning-network
  - off-chain
  - proof-work-pow
  - second-layer
  - soft-fork
liveWidget: ~
translationOf: layer-1
sourceHash: "12d9654b7728"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

La capa 1 es la cadena base de Bitcoin: el registro asegurado por [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work) donde toda transacción confirmada termina por liquidarse. Es la capa de máxima seguridad y máxima irreversibilidad, pero también la más lenta y la más cara de la arquitectura de Bitcoin.

Lo que vive en la capa 1:

- **Todos los UTXOs**, controlados directamente por [claves privadas](/es/glosario/clave-privada) o por scripts.
- **Todas las transacciones on-chain**, validadas por cada [nodo completo](/es/glosario/nodo-completo) bajo las reglas de consenso de Bitcoin.
- **La emisión del [subsidio de bloque](/es/glosario/subsidio-de-bloque)**, que se reduce a la mitad cada 210,000 bloques.
- **Las aperturas y cierres de canales** de [Lightning](/es/glosario/lightning-network).
- **Los peg-in y peg-out** de las [sidechains](/es/glosario/sidechain) (cadenas laterales).
- **La liquidación de toda actividad de segunda capa** que al final se resuelve en propiedad de BTC.

Las propiedades para las que está optimizada la capa 1:

- **Irreversibilidad.** Una vez que una transacción queda enterrada bajo suficientes bloques, es prácticamente permanente. La [regla de la cadena más larga (en inglés)](/glossary/longest-chain-rule) y la prueba de trabajo acumulada hacen que reescribirla cueste más de lo que cualquier atacante plausible puede pagar.
- **Resistencia a la censura.** Nadie puede impedir que una transacción concreta termine por minarse. Algunos mineros podrían intentarlo, pero existen otros que no lo harán.
- **Verificabilidad.** Cada nodo valida todo por su cuenta. Sin necesidad de confiar en nadie.
- **Cumplimiento del tope de 21 millones.** La [asíntota de la emisión (en inglés)](/glossary/asymptote) se hace cumplir aquí, en cada nodo y en cada bloque.

Para lo que la capa 1 *no* está optimizada:

- **Capacidad de procesamiento.** Los bloques tienen un tope de 4,000,000 unidades de peso, donde caben unos pocos miles de transacciones típicas cada diez minutos. Promediado por año, eso ha dado entre unas 2.5 y 7 transacciones por segundo desde 2016, según el tamaño de la transacción típica.
- **Pagos instantáneos.** Los bloques llegan en promedio cada diez minutos, por diseño; esperar varios toma más tiempo.
- **Microtransacciones.** Las comisiones hacen que los pagos de poco valor no sean rentables en la capa base.

Estas limitaciones son *características*, no errores. Mantienen la cadena base lo bastante segura como para ser la capa de liquidación final del mundo. Las soluciones de [segunda capa](/es/glosario/segunda-capa) como Lightning se encargan de los casos de uso que las limitaciones de la capa base descartan.

La capa 1 es la parte de Bitcoin que cambia más despacio, y solo mediante un [soft fork](/es/glosario/soft-fork) (una bifurcación compatible hacia atrás), cuando los nodos acuerdan hacer cumplir una regla nueva: [SegWit](/es/glosario/segwit) y [Taproot](/es/glosario/taproot) son los ejemplos emblemáticos. Todo lo demás se construye encima.
