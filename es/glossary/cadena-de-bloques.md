---
title: "Cadena de bloques (blockchain)"
slug: cadena-de-bloques
aliases:
  - "cadena de bloques"
  - "blockchain"
draft: false
published: "2026-10-13"
shortDefinition: "Un registro distribuido que enlaza lotes de transacciones (bloques) mediante hashes criptográficos, de modo que cualquier alteración del historial queda en evidencia."
keyTakeaways:
  - "Cada bloque se enlaza criptográficamente con el anterior"
  - "Forma un registro cronológico de transacciones en el que cualquier alteración queda en evidencia"
  - "Sostiene el modelo de confianza descentralizado de Bitcoin"
sources:
  - { label: "Blockchain.com - blockchain size chart (774,075 MB on October 8, 2026)", url: "https://www.blockchain.com/explorer/charts/blocks-size" }
  - { label: "mempool.space - block sizes and weights (about 82.5 GB of blocks mined from October 2025 to October 2026)", url: "https://mempool.space/graphs/mining/block-sizes-weights" }
  - { label: "Bitcoin Core 0.11.0 release notes - block file pruning (a fully validating node that does not keep a copy of the raw blocks)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.11.0.md" }
relatedTerms:
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-header
  - block-height
  - block-propagation
  - block-size
  - block-time
  - fork-detection
  - genesis-block
  - market-depth
  - reorg-reorganization
  - stale-block
sameAs:
  - "https://en.wikipedia.org/wiki/Blockchain"
  - "https://www.wikidata.org/wiki/Q20514253"
liveWidget: ~
translationOf: blockchain
sourceHash: "cc6660642149"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

La cadena de bloques (blockchain) es el registro público de todas las transacciones de Bitcoin, organizado como una secuencia de [bloques](/es/glosario/bloque), cada uno atado criptográficamente al que lo precede. Es la estructura de datos que hace que Bitcoin funcione.

La construcción es simple. Cada bloque lleva en su propio encabezado el [hash](/es/glosario/hash) SHA-256 del encabezado del bloque anterior. Así, el bloque 800,000 hace referencia al bloque 799,999 por su hash; el 799,999 hace referencia al 799,998; y así sucesivamente hasta el [bloque génesis](/es/glosario/bloque-genesis). Si cambias un solo byte de cualquier bloque histórico, su hash cambia, con lo cual todos los bloques posteriores pasan a apuntar a un predecesor equivocado, con lo cual habría que minar de nuevo todos esos bloques. Con la carga de [prueba de trabajo (proof-of-work)](/es/glosario/prueba-de-trabajo) que exige Bitcoin, eso se vuelve prohibitivamente caro muy rápido.

Cada nodo completo de Bitcoin descarga la cadena entera (unos 775 GB de datos de bloques a octubre de 2026, que crecen más o menos 80 GB al año) y valida por su cuenta cada bloque contra cada regla de consenso. No hay un registro maestro; hay decenas de miles de copias idénticas, cada una verificada contra las demás. Para reescribir la historia de Bitcoin tendrías que convencer a la mayoría de esos nodos de que acepten tu versión falsa. No lo van a hacer.

La palabra "blockchain" se ha generalizado para nombrar cualquier estructura de datos enlazada por hashes a la que solo se puede añadir, y la tecnología se le ha pegado a un sinfín de proyectos de credibilidad variable. La cadena de bloques de Bitcoin es la que importa: la primera, la más grande, la más segura y la única que de verdad resuelve el problema para el que fue diseñada.

Lee el [tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para entender por qué la cadena es tan difícil de reescribir, y la entrada [Bloque](/es/glosario/bloque) para saber qué hay dentro de cada eslabón.
