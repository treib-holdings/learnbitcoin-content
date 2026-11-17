---
title: "Nodo completo"
slug: nodo-completo
draft: false
published: "2026-10-14"
updated: "2026-11-17"
shortDefinition: "Un cliente de Bitcoin que descarga y valida todos los bloques y transacciones, y hace cumplir las reglas por su cuenta."
keyTakeaways:
  - "Descarga y valida la cadena de bloques completa; guardarla entera es opcional"
  - "La columna vertebral del modelo de Bitcoin, que no exige confiar en nadie"
  - "Necesita más recursos que una billetera ligera (SPV)"
aliases:
  - "nodos completos"
  - "full node"
  - "full nodes"
sources:
  - { label: "Blockchain.com - blockchain size, the chart's raw data (783,343 MB on November 16, 2026; 700,178 MB a year earlier)", url: "https://api.blockchain.info/charts/blocks-size?timespan=3years&format=json&sampled=false" }
  - { label: "mempool.space - block sizes and weights (about 82.5 GB of blocks mined from October 2025 to October 2026)", url: "https://mempool.space/graphs/mining/block-sizes-weights" }
  - { label: "Bitcoin Core 32.1 - intro.cpp (the setup screen adds the two figures and says at least 911 GB of data will be stored)", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/qt/intro.cpp" }
  - { label: "Bitcoin Core 32.1 - kernel/chainparams.cpp (mainnet disk guidelines of 897 GB of blocks and 14 GB of chain state; default assumevalid block 966,143)", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core 32.1 - init.cpp (the -assumevalid option: blocks up to the default one are assumed valid and their script verification may be skipped; 0 verifies all)", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/init.cpp" }
  - { label: "Bitcoin Core 32.1 - doc/reduce-traffic.md (default settings can use a lot of traffic, much of it old blocks served to nodes that are syncing; an upload target or -listen=0 reduces it)", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/doc/reduce-traffic.md" }
  - { label: "Bitcoin Wiki - Full node (being an archival node is not necessary to being a full node; a pruned node is still fully validating)", url: "https://en.bitcoin.it/wiki/Full_node" }
  - { label: "Bitcoin Wiki - Clearing Up Misconceptions About Full Nodes (lists as a myth that the number of nodes is what matters: the only node that matters is the one you use)", url: "https://en.bitcoin.it/wiki/Clearing_Up_Misconceptions_About_Full_Nodes" }
  - { label: "BTC Nodes API - snapshots from a crawler rebuilt from the Bitnodes code and run by Rodrigo Martinez, who also holds the bitnodes.io domain; not affiliated with the original Bitnodes project (23 snapshots on November 16, 2026 UTC, between 17,827 and 19,925 reachable nodes)", url: "https://btcnodes.io/api/v1/snapshots/" }
  - { label: "Bitcoin Core - About (a direct descendant of the original Bitcoin client released by Satoshi Nakamoto)", url: "https://bitcoincore.org/en/about/" }
  - { label: "Luke Dashjr - Bitcoin node software chart, listening nodes plus his estimate of non-listening ones (on October 10, 2026: Bitcoin Core 87%, Bitcoin Knots 13%)", url: "https://luke.dashjr.org/programs/bitcoin/files/charts/software.html" }
  - { label: "Bitcoin Knots README (development generally takes place in Bitcoin Core and is merged into Knots for each release)", url: "https://github.com/bitcoinknots/bitcoin" }
  - { label: "Bitcoin Knots v29.3.knots20260508 release notes (May 9, 2026) - this version applies BIP-110 (RDTS) after the user confirms", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260508" }
  - { label: "BIP-110 - Reduced Data Temporary Softfork (temporarily limits data fields; blocks 961,632 to 963,647 that do not signal bit 4 are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki" }
  - { label: "bitcoin/bips PR #2245 - BIP 110 status changed to Closed (opened August 9, 2026); notes Knots released it on mainnet and on August 8 its nodes began rejecting non-signaling blocks, split to a new chain and stalled", url: "https://github.com/bitcoin/bips/pull/2245" }
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-knots
  - byzantine-fault-tolerance
  - corrupted-chain-state
  - full-rbf
  - full-validation
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
sameAs:
  - "https://en.bitcoin.it/wiki/Full_node"
liveWidget: ~
translationOf: full-node
sourceHash: "474a81ff7707"
sourceCommit: "74f1a22"
sourceUpdated: "2026-11-17"
translation:
  method: "llm-draft"
---

Un nodo completo es un [nodo](/es/glosario/nodo) de Bitcoin que descarga y valida la cadena de bloques (blockchain) entera: cada bloque, desde el [bloque génesis](/es/glosario/bloque-genesis) del 3 de enero de 2009 hasta el más reciente. Hace cumplir cada regla de consenso por su cuenta y no responde a la interpretación de nadie más que a la suya. Por defecto también guarda cada bloque, pero eso no es lo que hace completo a un nodo: un nodo podado (pruned) revisa cada bloque, descarta los viejos y hace cumplir las mismas reglas.

Los requisitos prácticos en 2026:

- **Disco:** unos 783 GB de datos de bloques a mediados de noviembre de 2026, y crece a un ritmo de unos 83 GB al año; la pantalla de configuración inicial de Bitcoin Core 32.1 dice que se guardarán al menos 911 GB. Un SSD de 2 TB dura años, y un nodo podado necesita mucho menos.
- **RAM:** con 4 GB funciona; con 8 GB o más va cómodo.
- **CPU:** cualquier cosa desde una Raspberry Pi 4 en adelante lo corre. La sincronización inicial depende del CPU y tarda unos días; después, la operación diaria es trivial.
- **Ancho de banda:** con la configuración por defecto, un nodo que acepta conexiones entrantes puede usar mucho, buena parte en bloques viejos que sirve a nodos que se están sincronizando. Se puede limitar por configuración si tu proveedor de internet es hostil: Bitcoin Core puede limitar las subidas o dejar de aceptar conexiones entrantes.

El software suele ser [Bitcoin Core](/es/glosario/bitcoin-core), descendiente directo del software original de Bitcoin, que corría en cerca del 87% de los nodos según una estimación de octubre de 2026. [Bitcoin Knots](/es/glosario/bitcoin-knots) es una versión modificada de Core. Las versiones de Knots publicadas desde el 9 de mayo de 2026 hacen cumplir el BIP 110, un límite temporal a los datos en las transacciones, y los nodos que las corren salieron de la cadena principal de Bitcoin el 8 de agosto de 2026.

¿Para qué molestarse en correr un nodo completo, si las billeteras pueden conectarse a servidores públicos? Tres razones:

1. **Verificas tus propias transacciones.** Sin un nodo completo, confías en el servidor que te diga si tus monedas son válidas, sea cual sea. Con un nodo completo, tu propio software comprueba las reglas. Vale la pena conocer un valor por defecto: Bitcoin Core 32.1 da por válidos los bloques hasta el 966,143 y puede saltarse la comprobación de sus scripts y firmas, a menos que lo configures para verificarlos todos.
2. **Haces cumplir las reglas para ti.** Tu nodo rechaza cualquier bloque o pago que las rompa, acepten lo que acepten los mineros u otros nodos. Contar nodos importa menos de lo que parece: en palabras de la Bitcoin Wiki, "the only node that matters is the one you use" (el único nodo que importa es el que usas).
3. **Evitas la fuga de metadatos.** Preguntarle a un servidor público "¿ya se confirmó esta transacción?" le dice a ese servidor qué direcciones te importan. Tu propio nodo ve solo la cadena global, nunca tu interés particular.

BTC Nodes, una reconstrucción independiente del rastreador de Bitnodes, contó unos 19,000 nodos públicamente alcanzables el 16 de noviembre de 2026, y muchos más corren detrás de routers domésticos y firewalls sin aceptar conexiones entrantes. El tuyo puede ser uno de ellos.

Para la guía completa, paso a paso, lee [Corre tu propio nodo (en inglés)](/rabbit-hole/run-your-own-node).
