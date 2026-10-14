---
title: "Nodo completo"
slug: nodo-completo
draft: false
published: "2026-10-14"
shortDefinition: "Un cliente de Bitcoin que descarga y valida todos los bloques y transacciones, y hace cumplir las reglas por su cuenta."
keyTakeaways:
  - "Guarda y valida la cadena de bloques completa en tu propio equipo"
  - "La columna vertebral del modelo de Bitcoin, que no exige confiar en nadie"
  - "Necesita más recursos que una billetera ligera (SPV)"
aliases:
  - "nodos completos"
  - "full node"
  - "full nodes"
sources:
  - { label: "Blockchain.com - blockchain size chart (774,075 MB on October 8, 2026)", url: "https://www.blockchain.com/explorer/charts/blocks-size" }
  - { label: "mempool.space - block sizes and weights (about 82.5 GB of blocks mined from October 2025 to October 2026)", url: "https://mempool.space/graphs/mining/block-sizes-weights" }
  - { label: "Bitcoin Core 31 - intro.cpp (the setup screen adds the two figures and says at least 870 GB of data will be stored)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/qt/intro.cpp" }
  - { label: "Bitnodes - reachable Bitcoin nodes (25,514 counted on October 9, 2026)", url: "https://bitnodes.io" }
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
sourceHash: "7a0872dde22c"
sourceCommit: "f3d40f1"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

Un nodo completo es un [nodo](/es/glosario/nodo) de Bitcoin que descarga, valida y guarda la cadena de bloques (blockchain) entera: cada bloque, desde el [bloque génesis](/es/glosario/bloque-genesis) del 3 de enero de 2009 hasta el más reciente. Hace cumplir cada regla de consenso por su cuenta y no responde a la interpretación de nadie más que a la suya.

Los requisitos prácticos en 2026:

- **Disco:** unos 775 GB de datos de bloques en octubre de 2026, y crece a un ritmo de unos 80 GB al año; la pantalla de configuración inicial de Bitcoin Core 31 pide al menos 870 GB. Un SSD de 2 TB dura años.
- **RAM:** con 4 GB funciona; con 8 GB o más va cómodo.
- **CPU:** cualquier cosa desde una Raspberry Pi 4 en adelante lo corre. La sincronización inicial depende del CPU y tarda unos días; después, la operación diaria es trivial.
- **Ancho de banda:** varios cientos de GB al mes de salida, sobre todo para servir bloques a otros nodos. Se puede limitar por configuración si tu proveedor de internet es hostil.

El software suele ser [Bitcoin Core](/es/glosario/bitcoin-core), descendiente directo del software original de Bitcoin, que corría en cerca del 87% de los nodos según una estimación de octubre de 2026. [Bitcoin Knots](/es/glosario/bitcoin-knots) es una versión modificada de Core. Las versiones de Knots publicadas desde el 9 de mayo de 2026 hacen cumplir el BIP 110, un límite temporal a los datos en las transacciones, y los nodos que las corren salieron de la cadena principal de Bitcoin el 8 de agosto de 2026.

¿Para qué molestarse en correr un nodo completo, si las billeteras pueden conectarse a servidores públicos? Tres razones:

1. **Verificas tus propias transacciones.** Sin un nodo completo, confías en el servidor que te diga si tus monedas son válidas, sea cual sea. Con un nodo completo, compruebas la matemática por tu cuenta: no hace falta confiar en nadie.
2. **Haces cumplir el consenso.** Cada nodo completo es un nodo más que un atacante hipotético tendría que convencer. La resistencia de la red a los cambios de reglas crece con el número de validadores independientes.
3. **Evitas la fuga de metadatos.** Preguntarle a un servidor público "¿ya se confirmó esta transacción?" le dice a ese servidor qué direcciones te importan. Tu propio nodo ve solo la cadena global, nunca tu interés particular.

Bitnodes contó 25,514 nodos accesibles públicamente el 9 de octubre de 2026, y muchos más corren detrás de routers domésticos y firewalls sin aceptar conexiones entrantes. El tuyo puede ser uno de ellos.

Para la guía completa, paso a paso, lee el capítulo [Soberanía](/es/recorrido/soberania) del Recorrido.
