---
title: "Propagación de bloques"
slug: propagacion-de-bloques
draft: false
published: "2026-10-14"
shortDefinition: "El proceso por el que los bloques recién minados se transmiten entre los nodos de Bitcoin de todo el mundo."
keyTakeaways:
  - "Los mineros transmiten a sus pares los bloques recién encontrados"
  - "Los métodos de retransmisión eficientes reducen el ancho de banda y la tasa de bloques obsoletos"
  - "Una propagación rápida mantiene el consenso global de la red"
aliases:
  - "propagación de bloque"
  - "propagación del bloque"
  - "block propagation"
sources:
  - { label: "BIP 152 - Compact Block Relay (Matt Corallo, 2016; 80-byte header plus 6-byte short transaction IDs; high-bandwidth mode to at most three peers, relayed before full validation once the header checks out)", url: "https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki" }
  - { label: "Bitcoin Core 0.13.0 release notes - Compact Block support (BIP 152) (August 23, 2016)", url: "https://bitcoincore.org/en/releases/0.13.0/" }
  - { label: "Christian Decker and Roger Wattenhofer - Information Propagation in the Bitcoin Network (IEEE P2P 2013; median 6.5 seconds and mean 12.6 seconds for a node to receive a block; propagation delay as the primary cause of blockchain forks)", url: "https://tik-old.ee.ethz.ch/file//49318d3f56c1d525aabf7fda78b23fc0/P2P2013_041.pdf" }
  - { label: "KIT DSN Research Group - Bitcoin Network Monitor, current block propagation delay distribution (raw file data/curblock.gpd as served on 13 October 2026: half of peer announcements within 0.84 seconds of the first, 90% within 2.5 seconds, 99% within 10.4 seconds)", url: "https://www.dsn.kastel.kit.edu/bitcoin/" }
  - { label: "FIBRE - The Fast Internet Bitcoin Relay Engine (UDP transport, forward error correction and compact blocks; the original network sat in stasis for almost a decade before Localhost Research revived a public network)", url: "https://bitcoinfibre.org/" }
  - { label: "Blockstream - Blockstream Satellite (broadcasts the Bitcoin blockchain worldwide 24/7 for free from geosynchronous satellites, so a node is not cut off when its internet connection fails)", url: "https://blockstream.com/satellite/" }
relatedTerms:
  - bip-152-compact-blocks
  - bitcoin-satellite
  - block
  - block-explorer
  - block-header
  - block-height
  - block-time
  - blockchain
  - competitive-block-propagation
  - competitive-mining
  - reorg-reorganization
  - stale-block
liveWidget: ~
translationOf: block-propagation
sourceHash: "354d91fc6239"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

La propagación de bloques es la forma en que un bloque recién minado viaja desde el minero que lo encontró hasta todos los demás nodos de la red. La velocidad importa: mientras un par (un nodo vecino) no se entere del bloque nuevo, puede seguir minando o construyendo sobre la punta anterior de la cadena, y cuanto más tarde en enterarse, mayor es la probabilidad de que un segundo minero encuentre un bloque competidor y uno de los dos termine como [bloque obsoleto](/es/glosario/bloque-obsoleto).

Las optimizaciones a nivel de protocolo:

- **[Bloques compactos (BIP 152) (en inglés)](/glossary/bip-152-compact-blocks).** En lugar de enviar el bloque completo, el emisor transmite el encabezado de 80 bytes más un identificador corto de 6 bytes por cada transacción. El receptor reconstruye el bloque a partir de las transacciones que ya tiene en su mempool y pide solo las que le faltan. El ancho de banda baja a una pequeña fracción de un bloque completo y, como efecto secundario, los bloques llegan antes. En Bitcoin Core desde la 0.13 (agosto de 2016).
- **Modo de alto ancho de banda.** Un nodo pide a un máximo de tres pares que le envíen bloques compactos sin esperar a que los pida, en cuanto el encabezado pasa la comprobación y antes de que el bloque se haya validado por completo. Menos latencia, a cambio de algo más de ancho de banda de esos pares.
- **FIBRE y redes de retransmisión similares.** FIBRE es un conjunto de parches sobre Bitcoin Core que combina transporte UDP, corrección de errores hacia adelante y bloques compactos para mover los bloques entre sus nodos a una velocidad cercana a la de la luz en la fibra óptica. La red original de Matt Corallo, sucesora de su Bitcoin Relay Network, estuvo inactiva durante casi una década hasta que Localhost Research revivió una red FIBRE pública e invitó a otros a correr la suya.
- **Bitcoin Satellite.** La transmisión satelital de Blockstream (descrita en [Bitcoin Satellite (en inglés)](/glossary/bitcoin-satellite)) transmite la cadena de bloques (blockchain) a todo el mundo gratis: un camino redundante, fuera de internet, para los datos de los bloques.

Por qué tanta ingeniería: cada segundo adicional de retraso en la propagación aumenta la probabilidad de un bloque obsoleto, más o menos en proporción, para el minero que recibe el bloque tarde. Eso es dinero que se pierde, y en las carreras de bloques obsoletos las operaciones de minería más grandes tienen una ventaja asimétrica. El protocolo sigue mejorando para que la cancha no se incline del todo hacia los mejor conectados.

Qué tan rápido es: en 2013, antes de los bloques compactos, una medición de la red alcanzable encontró una mediana de 6.5 segundos para que un nodo recibiera un bloque nuevo, con una media de 12.6 segundos. El monitor de red del KIT, en Alemania, que registra cuándo cada uno de sus pares anuncia un bloque nuevo, vio en octubre de 2026 que la mitad de los anuncios llegaban dentro de unos 0.8 segundos del primero y el 90% dentro de unos 2.5 segundos; el 1% más lento tardó más de diez segundos.
