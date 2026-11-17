---
title: "Nodo"
slug: nodo
draft: false
published: "2026-10-14"
updated: "2026-11-17"
shortDefinition: "Una computadora que corre software de Bitcoin para validar y retransmitir bloques y transacciones, haciendo cumplir las reglas de consenso de la red."
keyTakeaways:
  - "Valida transacciones y bloques según el consenso"
  - "Puede ser completo (toda la cadena) o SPV (verificación parcial)"
  - "Pieza clave del modelo de seguridad descentralizado de Bitcoin"
aliases:
  - "nodos"
  - "nodo de Bitcoin"
  - "nodos de Bitcoin"
sources:
  - { label: "Bitcoin whitepaper (Satoshi Nakamoto, 2008) - section 5: nodes accept a block only if all transactions in it are valid; section 7: a block header is about 80 bytes, 4.2 MB a year; section 8: simplified payment verification keeps only the headers and checks a transaction with its Merkle branch", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "Bitcoin Core 31 - validation.cpp (a block whose coinbase pays more than the subsidy plus fees is invalid: bad-cb-amount)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/validation.cpp" }
  - { label: "Bitcoin Core 32.1 - kernel/chainparams.cpp (mainnet disk guidelines: m_assumed_blockchain_size 897 and m_assumed_chain_state_size 14, in GB)", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core 32.1 - qt/intro.cpp (the setup screen adds the two figures and says at least 911 GB of data will be stored)", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/qt/intro.cpp" }
  - { label: "BTC Nodes API - snapshots from a crawler rebuilt from the Bitnodes code and run by Rodrigo Martinez, who also holds the bitnodes.io domain; not affiliated with the original Bitnodes project (23 snapshots on November 16, 2026 UTC, between 17,827 and 19,925 reachable nodes)", url: "https://btcnodes.io/api/v1/snapshots/" }
  - { label: "BTC Nodes API - snapshot of November 16, 2026, 22:24 UTC (19,439 nodes, each checked against block 970,000 to be on Bitcoin's main chain; newest block 976,189)", url: "https://btcnodes.io/api/v1/snapshots/1794867852/" }
  - { label: "Luke Dashjr - Bitcoin node count history chart and its data file (listening plus estimated non-listening nodes: 100,236 at 00:00 UTC on November 16, 2026; the series it labels RDTS and BLAKE2b stood at 3,712 and 5,256 nodes)", url: "https://luke.dashjr.org/programs/bitcoin/files/charts/historical.html" }
  - { label: "Luke Dashjr - Bitcoin node software chart (its per-version list puts about 7,900 nodes on Knots builds that enforce BIP-110, about 5,000 of them on 29.4.1 or 29.4.2, on October 10, 2026)", url: "https://luke.dashjr.org/programs/bitcoin/files/charts/software.html" }
  - { label: "Bitcoin Knots - official site (names Luke Dashjr as lead maintainer)", url: "https://bitcoinknots.org/" }
  - { label: "Bitcoin Knots v29.4.1 release notes (September 2, 2026) - dates the split to August 8; backward-incompatible change to a BLAKE2b proof of work", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.1.knots20260508" }
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-knots
  - bitcoin-satellite
  - dedicated-ip-nodes
  - eclipse-attack
  - full-node
  - full-validation
  - headless-node
  - hidden-service-node
  - i2p-invisible-internet-project
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
sameAs:
  - "https://en.wikipedia.org/wiki/Node_(networking)"
  - "https://www.wikidata.org/wiki/Q173106"
liveWidget: ~
translationOf: node
sourceHash: "2b78e4d57a6a"
sourceCommit: "74f1a22"
sourceUpdated: "2026-11-17"
translation:
  method: "llm-draft"
---

Un nodo de Bitcoin es una computadora que corre software de Bitcoin y participa en la red entre pares (P2P). Recibe [transacciones](/es/glosario/transaccion) y [bloques](/es/glosario/bloque), los valida contra las reglas de consenso y retransmite los válidos a sus pares.

En la práctica hay dos tipos de nodo:

- **[Nodos completos](/es/glosario/nodo-completo)**: descargan y validan cada bloque desde el [bloque génesis](/es/glosario/bloque-genesis) en adelante, mantienen el conjunto completo de UTXOs y hacen cumplir cada regla de consenso por su cuenta. Es el estándar de oro: verificar todo sin necesidad de confiar en nadie.
- **Nodos SPV (verificación simplificada de pagos)**: descargan solo los encabezados de los bloques y dependen de los nodos completos para confirmar, mediante pruebas de Merkle, que una transacción está incluida. Son mucho más ligeros. Cada encabezado ocupa 80 bytes, unos 4.2 MB al año, así que los encabezados de los aproximadamente 976,000 bloques minados hasta mediados de noviembre de 2026 suman unos 78 MB. La pantalla de configuración de Bitcoin Core 32.1, en cambio, dice que un nodo completo guardará al menos 911 GB. El inconveniente es que los nodos SPV renuncian a parte de las garantías de verificación.

Los nodos son la forma en que Bitcoin hace cumplir sus reglas. Los mineros proponen bloques; los nodos los aceptan o los rechazan. Un minero que produce un bloque inválido (demasiado subsidio, una firma inválida, una transacción malformada) ve cómo todos los nodos honestos de la red ignoran su bloque. Ese es el razonamiento detrás del dicho popular de que a Bitcoin lo gobiernan los nodos, no los mineros. El hashrate (el poder de cómputo de la red) decide qué historia válida gana; los nodos deciden qué significa *válida*.

BTC Nodes, una reconstrucción independiente del rastreador de Bitnodes, contó unos 19,000 nodos públicamente alcanzables el 16 de noviembre de 2026. Solo cuenta los nodos que ha comprobado que están en la cadena principal de Bitcoin. Muchos más no aceptan conexiones entrantes, así que un rastreador no puede llegar a ellos para contarlos. El contador de Luke Dashjr añade una estimación de esos nodos y situó el total en unos 100,000 el 16 de noviembre de 2026. Dashjr mantiene Bitcoin Knots, y su total incluye varios miles de nodos Knots en versiones que han abandonado la cadena principal. Que las reglas se hagan cumplir de forma distribuida es la verdadera columna vertebral del modelo de seguridad de Bitcoin.

Consulta [Nodo completo](/es/glosario/nodo-completo) para ver cómo es correr uno en la práctica, y el capítulo [Adónde ir después](/es/recorrido/soberania) para saber por qué querrías hacerlo.
