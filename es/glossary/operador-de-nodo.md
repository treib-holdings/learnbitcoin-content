---
title: "Operador de nodo"
slug: operador-de-nodo
draft: false
published: "2026-10-14"
shortDefinition: "Una persona o entidad que corre un nodo de Bitcoin para verificar bloques y transacciones y ayudar a mantener la red."
keyTakeaways:
  - "Hace cumplir las reglas de consenso directamente, sin depender de intermediarios"
  - "Puede servir a la red retransmitiendo transacciones y bloques"
  - "Ayuda a preservar la resistencia a la censura y la independencia del protocolo"
aliases:
  - "operadores de nodo"
  - "operadores de nodos"
  - "operadora de nodo"
  - "quien opera un nodo"
  - "quienes operan nodos"
  - "node operator"
sources:
  - { label: "Bitcoin Core 31 - intro.cpp (the setup screen adds the two figures and says at least 870 GB of data will be stored)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/qt/intro.cpp" }
  - { label: "Bitcoin Core 31 - chainparams.cpp (mainnet disk guidelines 856 and 14, which the setup screen adds up to 870 GB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/chainparams.cpp" }
  - { label: "btcd README (an alternative full node Bitcoin implementation written in Go)", url: "https://github.com/btcsuite/btcd" }
  - { label: "Bitcoin Knots README (development generally takes place in Bitcoin Core and is merged into Knots for each release)", url: "https://github.com/bitcoinknots/bitcoin" }
  - { label: "Bitcoin Knots v29.3.knots20260508 release notes (May 9, 2026) - this version applies BIP-110 (RDTS) after the user confirms", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260508" }
  - { label: "bitcoin/bips PR #2245 - BIP 110 status changed to Closed (opened August 9, 2026); notes Knots released it on mainnet and on August 8 its nodes began rejecting non-signaling blocks, split to a new chain and stalled", url: "https://github.com/bitcoin/bips/pull/2245" }
relatedTerms:
  - bitcoin-knots
  - bitcoin-satellite
  - dedicated-ip-nodes
  - full-node
  - headless-node
  - hidden-service-node
  - i2p-invisible-internet-project
  - node
  - node-autoban
  - node-headcount
  - node-synchronization
  - node-uptime
liveWidget: ~
translationOf: node-operator
sourceHash: "d1f9fb37c43c"
sourceCommit: "d728434"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

Un operador de nodo es cualquiera que corra un nodo completo de Bitcoin. Eso es todo. Sin registro, sin permiso, sin capital mínimo. Descargas Bitcoin Core (o btcd, o una distribución empaquetada), le indicas un disco, abres un puerto si puedes, y ya eres operador de nodo. Bitcoin Knots, una versión modificada de Core, funciona igual en las versiones publicadas antes del 9 de mayo de 2026; las versiones posteriores de Knots siguen una cadena que se separó de la cadena principal de Bitcoin el 8 de agosto de 2026.

Lo que haces en realidad cuando corres un nodo:

- Validar cada bloque y cada transacción contra las reglas de consenso. Nada entra en tu visión de la cadena sin pasar tus propias comprobaciones.
- Retransmitir transacciones y bloques a tus pares, ayudando a que la red los propague.
- Servir datos históricos a los nodos nuevos durante su sincronización inicial, si aceptas conexiones entrantes.
- Negarte a seguir cualquier cambio de reglas con el que no estés de acuerdo. Este es el mecanismo estructural por el que Bitcoin sigue bajo el control de sus usuarios.

No ganas dinero por correr un nodo. Las recompensas de bloque son de los [mineros](/es/glosario/minero). Lo que ganas es independencia. Dejas de confiar en que un tercero te diga la verdad sobre tu propio saldo, tus propias transacciones o si un bloque es válido.

Los requisitos de hardware en 2026 son modestos. Un SSD de 2 TB (la pantalla de configuración de Bitcoin Core 31 pide al menos 870 GB), un procesador de cuatro núcleos, de 4 a 8 GB de RAM y una conexión a internet decente. Una Raspberry Pi 5 o cualquier laptop vieja corre un nodo sin problema. Las distribuciones empaquetadas (Umbrel, Start9, RaspiBlitz, MyNode) hacen que la instalación sea casi tan fácil como instalar una app.

Si usas Bitcoin y no corres un nodo, estás confiando en el nodo de alguien más. Es una decisión defendible para el uso ocasional o desde el celular, pero la diferencia entre confiar y verificar es real, y ser operador de nodo es lo que verificar significa en la práctica.
