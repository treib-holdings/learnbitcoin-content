---
title: "Nonce"
slug: nonce
draft: false
published: "2026-10-14"
shortDefinition: "Un campo de 32 bits en el encabezado del bloque que los mineros van variando para encontrar un hash por debajo del objetivo de dificultad de la red."
keyTakeaways:
  - "Es central en el proceso de prueba de trabajo al calcular el hash del bloque"
  - "Son solo 4 bytes, así que los mineros también modifican el extranonce y otros campos"
  - "Encontrar un nonce válido demuestra que el bloque cumple con la dificultad"
aliases:
  - "nonces"
sources:
  - { label: "Bitmain support - S21 Pro specification (234 TH/s typical, 3,510 W, 15 J/TH)", url: "https://support.bitmain.com/hc/en-us/articles/31321354157593-S21-Pro-Specification" }
relatedTerms:
  - consensus-parameter
  - difficulty
  - difficulty-retargeting
  - hash
  - nonce-exhaustion
  - proof-work-pow
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptographic_nonce"
  - "https://www.wikidata.org/wiki/Q1749235"
  - "https://en.bitcoin.it/wiki/Nonce"
liveWidget: ~
translationOf: nonce
sourceHash: "73942fd65219"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

El nonce es un campo de 32 bits en el [encabezado del bloque](/es/glosario/encabezado-del-bloque) que los mineros van cambiando mientras buscan un bloque válido. "Nonce" es la abreviatura de "number used once" (número usado una sola vez).

La [minería](/es/glosario/mineria), en su nivel más bajo, se ve así:

```
loop:
  set nonce to next value
  hash = SHA-256(SHA-256(header))
  if hash < target: broadcast block
  else: try again
```

Eso es todo. No hay atajo, ni álgebra, ni derivación ingeniosa. Solo calculas hashes hasta que uno, por casualidad, queda por debajo del objetivo. Una sola máquina de minería lanzada en 2024, repleta de chips [ASIC](/es/glosario/asic), tiene una capacidad nominal de 234 billones de hashes por segundo.

El nonce de 32 bits solo tiene 2^32 = unos 4,300 millones de valores posibles, que una operación de minería seria agota en una fracción de segundo. Cuando se acaban, el minero cambia otra parte del bloque (normalmente el *extranonce* dentro de la transacción coinbase), lo que cambia la [raíz de Merkle](/es/glosario/raiz-de-merkle) del encabezado, lo que a su vez le da un nuevo espacio de 4,300 millones de nonces por recorrer. Y se repite hasta que algo funcione.

El nonce son los 4 bytes más aburridos de Bitcoin y, al mismo tiempo, todo el mecanismo por el que ocurre la prueba de trabajo (proof-of-work). Consulta [Hash](/es/glosario/hash) para ver qué es lo que se calcula, y el [tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para entender por qué importa encontrar uno bueno.
