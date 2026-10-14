---
title: "Tamaño de bloque"
slug: tamano-de-bloque
aliases:
  - "tamaño del bloque"
  - "tamaño de los bloques"
  - "límite de tamaño de bloque"
  - "límite de tamaño del bloque"
  - "block size"
draft: false
published: "2026-10-15"
shortDefinition: "La cantidad máxima de datos que se permite en un bloque: históricamente 1 MB, pero en la práctica mayor bajo las reglas por peso de SegWit."
keyTakeaways:
  - "Se fijó en 1 MB en 2010, un límite que suele leerse como medida contra el spam"
  - "SegWit introdujo un sistema por peso, de hasta 4 millones de unidades de peso"
  - "Permite una capacidad efectiva mayor que el límite estricto de 1 MB"
sources:
  - { label: "Bitcoin Core on GitHub - commit a30b56e by Satoshi Nakamoto, 15 July 2010 (adds static const unsigned int MAX_BLOCK_SIZE = 1000000 to main.h; the commit message mentions only an OpenSSL linkage fix)", url: "https://github.com/bitcoin/bitcoin/commit/a30b56ebe76ffff9f9cc8a6667186179413c6349" }
  - { label: "Bitcoin Wiki - Block size limit controversy (the 1 MB limit was added in 2010 in two unannounced commits and only became the binding limit after the May 2013 hard fork removed the database lock limit)", url: "https://en.bitcoin.it/wiki/Block_size_limit_controversy" }
  - { label: "BIP 141 - Segregated Witness, consensus layer (blocks were limited to 1,000,000 bytes; block weight is base size times 3 plus total size and must not exceed 4,000,000)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core - src/consensus/consensus.h (MAX_BLOCK_WEIGHT 4,000,000; WITNESS_SCALE_FACTOR 4)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/consensus.h" }
  - { label: "mempool.space - Block sizes and weights graph (1-month series to 14 October 2026; per-point average sizes from 0.87 to 2.75 MB with a median of 1.59 MB; median weight 3,993,795 WU and 92.7 percent of points above 3.9 million WU)", url: "https://mempool.space/graphs/mining/block-sizes-weights" }
  - { label: "bitcoin.org - Running a full node, minimum requirements (desktop or laptop hardware, 2 gigabytes of memory, 7 gigabytes of free disk space, a broadband connection with at least 400 kilobits per second upload)", url: "https://bitcoin.org/en/full-node" }
relatedTerms:
  - bip-42
  - bip-102-2mb-block-size
  - block
  - block-reward
  - block-subsidy
  - blockchain
  - halving-halvening
  - merkle-root
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_scalability_problem"
  - "https://www.wikidata.org/wiki/Q30325190"
  - "https://en.bitcoin.it/wiki/Block_size_limit_controversy"
liveWidget: ~
translationOf: block-size
sourceHash: "ed2412ed6c20"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

El tamaño de bloque es el [parámetro de consenso](/es/glosario/parametro-de-consenso) más famoso de Bitcoin. El tope duro original de 1 MB (una constante MAX_BLOCK_SIZE de 1,000,000 bytes que Satoshi deslizó en el código en julio de 2010, y que suele leerse como una medida contra el spam) fue el centro de años de debate y, al final, del soft fork [SegWit](/es/glosario/segwit) de 2017. La regla actual no es un tamaño plano en bytes: es un límite de 4 millones de unidades de peso, donde los datos que no son de testigo (witness) cuestan 4 unidades de peso por byte y los datos de testigo cuestan 1.

Efectos en la práctica:

- **Los tamaños típicos de bloque** rondan entre 1.5 y 1.6 MB en disco, con un rango que va de menos de 1 MB a unos 2.75 MB en el último mes, según qué fracción de las transacciones sea SegWit o Taproot (las que reciben el descuento por los datos de testigo). Más de nueve bloques de cada diez están llenos por peso, apenas por debajo de los 4 millones de unidades, sea cual sea su tamaño en bytes.
- **El tope duro** mantiene acotado el costo de validar. El mínimo que bitcoin.org indica para un nodo completo de Bitcoin Core es una computadora de escritorio o una laptop corriente, con 2 GB de memoria y una conexión de banda ancha. Eso es a propósito. Bloques más grandes empujarían hacia arriba el costo de correr un nodo y centralizarían el conjunto de validadores.
- **El límite de peso del bloque** ha sido políticamente intocable desde 2017. La [guerra del tamaño de bloque (en inglés)](/glossary/block-size-war) de 2015 a 2017 (ver el [BIP 101 (en inglés)](/glossary/bip-101-increase-block-size) y el [BIP 102 (en inglés)](/glossary/bip-102-2mb-block-size)) terminó con el soft fork SegWit más el hard fork de Bitcoin Cash; la comunidad de Bitcoin que quedó se decidió por "los bloques se quedan pequeños y el escalado ocurre fuera de la cadena, por Lightning".

Lo que no es:

- Ya no es 1 MB. Quien cite "los bloques de 1 MB de Bitcoin" en 2026 está usando información desactualizada.
- No es un límite literal en bytes. El enfoque por unidades de peso importa porque cambia la economía de las transacciones SegWit frente a las de tipo antiguo (legacy).

La cuestión del tamaño de bloque está zanjada para el futuro previsible. Los debates de fondo sobre capacidad se han trasladado al diseño de los canales Lightning, a la eficiencia del enrutamiento de pagos y a la optimización de los scripts de Taproot, no a la capacidad on-chain.

Lee [La guerra del tamaño de bloque (en inglés)](/rabbit-hole/block-size-war) para ver cómo este límite se convirtió en el centro de una pelea de gobernanza de dos años.
