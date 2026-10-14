---
title: "Hash"
slug: hash
draft: false
published: "2026-10-14"
shortDefinition: "La salida de una función criptográfica (por ejemplo, SHA-256) que condensa los datos de entrada en un resumen de tamaño fijo."
keyTakeaways:
  - "Convierte datos de tamaño variable en una salida pseudoaleatoria de longitud fija"
  - "Es fundamental para la minería de bloques y la integridad del árbol de Merkle"
  - "Propiedad criptográfica: un cambio pequeño produce hashes radicalmente distintos"
aliases:
  - "hashes"
  - "función hash"
  - "funciones hash"
sources:
  - { label: "mempool.space - genesis block 0, mined January 3, 2009", url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "BIP 341 - Taproot: a version 1 output's 32-byte witness program is a public key", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
relatedTerms:
  - grovers-algorithm
  - hash-puzzle
  - hash-rate
  - hash-rate-derivative
  - hashlet
  - merged-mining
  - merkle-proof
  - merkle-root
  - nonce
  - nonce-exhaustion
  - post-quantum-bitcoin
  - proof-work-pow
sameAs:
  - "https://en.wikipedia.org/wiki/Hash_function"
  - "https://www.wikidata.org/wiki/Q183427"
  - "https://en.wikipedia.org/wiki/Cryptographic_hash_function"
  - "https://www.wikidata.org/wiki/Q477202"
  - "https://en.bitcoin.it/wiki/Hash"
liveWidget: ~
translationOf: hash
sourceHash: "4269dd3b4def"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Un hash es la salida de una función hash: un algoritmo que toma una entrada de cualquier tamaño y produce una salida de longitud fija con apariencia pseudoaleatoria. Bitcoin usa **SHA-256**, que siempre produce 256 bits (64 caracteres hexadecimales), sin importar si le diste un byte o un terabyte.

Tres propiedades hacen que los hashes le sirvan a Bitcoin:

- **Determinista.** La misma entrada siempre produce el mismo hash.
- **De una sola vía.** Dada la salida, no hay forma eficiente de encontrar una entrada que la produzca, salvo probar entradas hasta que una funcione por casualidad. El número esperado de intentos es de unos 2^256, una cifra inabarcable.
- **Avalancha.** Cambia un bit de la entrada y más o menos la mitad de los bits de la salida cambian, de forma impredecible. Entradas parecidas producen hashes totalmente distintos.

Bitcoin usa hashes por todas partes:

- **A los [encabezados de bloque](/es/glosario/encabezado-del-bloque)** se les calcula el hash (dos veces, el llamado doble SHA-256) y el resultado tiene que quedar por debajo del objetivo de dificultad para ser válido. Esa es la búsqueda que los [mineros](/es/glosario/minero) compiten por ganar.
- **Cada bloque hace referencia al hash del bloque anterior**, y así se forma la [cadena de bloques](/es/glosario/cadena-de-bloques) (blockchain), que delata cualquier alteración.
- **Las transacciones se organizan en un [árbol de Merkle (en inglés)](/glossary/merkle-tree-merkle-root)** cuya raíz fija todas las transacciones del bloque en un solo hash.
- **La mayoría de las direcciones son hashes** de una clave pública o de un script, lo que mantiene en privado la clave o el script hasta que gastas. Las direcciones [Taproot](/es/glosario/taproot) llevan la clave pública directamente, en lugar de un hash.
- **Los txids son hashes** de las transacciones serializadas.

La apuesta de Bitcoin es que SHA-256 siga siendo de una sola vía en el futuro previsible. Si eso se rompe algún día, Bitcoin se rompe. Desde 2009, Bitcoin ha convertido a SHA-256 en uno de los sistemas criptográficos más atacados del planeta, y hasta ahora ha aguantado.

El debilitamiento más plausible (no una ruptura) es el [algoritmo de Grover (en inglés)](/glossary/grovers-algorithm) corriendo en una computadora cuántica: reduce a la mitad la seguridad efectiva de SHA-256, de 256 bits a 128, mediante una aceleración cuadrática en la búsqueda no estructurada. Una seguridad simétrica de 128 bits sigue siendo el piso estándar de la criptografía en otros ámbitos: molesto para Bitcoin, no catastrófico. Consulta [Bitcoin poscuántico (en inglés)](/glossary/post-quantum-bitcoin) para el panorama completo.

Consulta la [sección 2 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para ver cómo la propiedad de una sola vía se convierte en seguridad, y el [tema a fondo sobre el espacio de claves (en inglés)](/rabbit-hole/key-space) para entender por qué 2^256 es más grande de lo que tu intuición quiere admitir.
