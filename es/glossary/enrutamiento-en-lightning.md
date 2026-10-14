---
title: "Enrutamiento en Lightning"
slug: enrutamiento-en-lightning
aliases:
  - "enrutamiento"
  - "enrutamiento Lightning"
  - "enrutamiento de pagos"
  - "enrutar un pago"
  - "Lightning routing"
draft: false
published: "2026-10-14"
shortDefinition: "Encontrar una ruta de canales Lightning desde quien envía hasta quien recibe, que puede pasar por varios intermediarios."
keyTakeaways:
  - "Elige una ruta de canales conectados con capacidad suficiente"
  - "Usa los datos de gossip de la red Lightning para conocer el estado actual de los canales"
  - "Se apoya en HTLCs efímeros que garantizan pagos de varios saltos sin necesidad de confiar en nadie"
sources:
  - { label: "Lightning Routing rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/lightning-routing" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - bolt
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - delayed-payment-channel
  - gossip-protocol-lightning
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-probe
  - lightning-refund-invoice
  - lightning-sphinx
  - onion-routing-lightning
liveWidget: ~
translationOf: lightning-routing
sourceHash: "abbd4096fbe1"
sourceCommit: "f73ff00"
translation:
  method: "llm-draft"
---

El enrutamiento en Lightning es el proceso de encontrar una ruta a través de la red de [canales Lightning](/es/glosario/canal-lightning) que pueda llevar tu pago desde quien envía hasta quien recibe, cuando no existe un canal directo entre ambos.

La mayoría de los usuarios de Lightning no tiene canales directos con las personas a las que paga: eso exigiría una [transacción on-chain](/es/glosario/transaccion) de apertura con cada contraparte, lo que anularía el sentido de la red. En su lugar, tu [nodo Lightning (en inglés)](/glossary/lightning-node) enruta los pagos a través de nodos intermedios que *sí* tienen una ruta hasta el destino, de forma atómica, mediante [HTLCs](/es/glosario/htlc) encadenados.

Cómo funciona por dentro:

1. **Construir el grafo.** Los nodos Lightning comparten un [protocolo de gossip (en inglés)](/glossary/gossip-protocol-lightning) en el que anuncian qué canales existen, su capacidad y sus políticas de comisiones. Tu nodo mantiene una vista local de ese grafo.
2. **Encontrar una ruta.** Correr una variante del algoritmo de Dijkstra para hallar una secuencia de canales desde ti hasta el destino, con capacidad suficiente del lado que corresponde en cada canal, optimizando comisiones y confiabilidad.
3. **Enrutar el pago en capas, como una cebolla.** Cada salto conoce solo el salto anterior y el siguiente, no la ruta completa. Es el **enrutamiento cebolla (onion routing) de [Sphinx (en inglés)](/glossary/lightning-sphinx)**, parecido al de Tor.
4. **Los HTLCs bloquean el pago** en cada salto. Si cualquier salto falla, el pago entero se deshace de forma atómica: no pierdes dinero en una ruta a medias.
5. **Si el enrutamiento falla, reintentar.** Las billeteras modernas reintentan con otras rutas o dividen el pago entre varias ([pagos atómicos multirruta / AMP (en inglés)](/glossary/atomic-multi-path-payment-amp)).

Los problemas difíciles del enrutamiento:

- **La liquidez es privada.** El gossip te dice que un canal existe y cuál es su capacidad total, pero no de qué lado está el saldo. El enrutamiento tiene que sondear o adivinar.
- **Los canales se vacían.** Un canal que sirvió para enrutar hace un minuto puede haberse quedado sin saldo del lado que corresponde después de que pasó tu pago. Los pagos de otras personas son invisibles para ti.
- **Los pagos grandes son más difíciles.** La probabilidad de encontrar una ruta completa cae a medida que el monto del pago se acerca a la capacidad típica de un canal. AMP y el splicing de canales ayudan, pero los pagos enormes suelen exigir varios intentos o coordinarse por otra vía.

La confiabilidad del enrutamiento ha mejorado muchísimo desde 2020: la mayoría de los pagos cotidianos de menos de unos cientos de miles de sats se enruta al primer intento. Los pagos más grandes o hacia destinos más remotos todavía fallan de vez en cuando, pero esas fallas tienen remedio y nunca se pierden fondos.

Consulta el [tema a fondo sobre el enrutamiento en Lightning (en inglés)](/rabbit-hole/lightning-routing) para el tratamiento más profundo: enrutamiento en origen, cifrado cebolla, pagos multirruta, heurísticas de búsqueda de rutas y las técnicas de sondeo que usan las billeteras para encontrar liquidez.
