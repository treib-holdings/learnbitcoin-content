---
title: "Bloque obsoleto"
slug: bloque-obsoleto
draft: false
published: "2026-10-14"
shortDefinition: "Un bloque válido que no pasa a formar parte de la cadena principal; históricamente se le llamaba a menudo 'bloque huérfano'."
keyTakeaways:
  - "Pierden la carrera por formar la cadena más larga, y con ella la recompensa de bloque"
  - "Reflejan algo normal: dos mineros que encuentran un bloque casi al mismo tiempo"
  - "Se confunden a menudo con los verdaderos bloques huérfanos (aquellos cuyo bloque padre el nodo todavía no ha recibido)"
sources:
  - { label: "bitcoin-data/stale-blocks - public dataset of stale blocks (between 28 and 93 a year from 2022 through 2025, as of October 2026)", url: "https://github.com/bitcoin-data/stale-blocks" }
relatedTerms:
  - block-propagation
  - blockchain
  - chain-split
  - reorg-reorganization
liveWidget: ~
translationOf: stale-block
sourceHash: "862e8d1b9e4c"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Un bloque obsoleto es un bloque válido de Bitcoin que no terminó en la cadena canónica. Dos mineros encontraron bloques a la misma altura casi en el mismo instante; la red se dividió por un momento; un lado ganó; el perdedor es un bloque obsoleto.

Lo que vuelve obsoleto a un bloque no es ningún defecto del bloque en sí: cualquier nodo completo podría validarlo como bien formado, con firmas válidas, una prueba de trabajo (proof-of-work) válida y una transacción coinbase que reclama una recompensa válida. Simplemente ya no forma parte de la cadena más larga. Una vez que una reorganización (reorg) lo reemplaza, el minero que lo encontró se queda sin la recompensa de bloque; las transacciones del bloque obsoleto (salvo la coinbase) suelen volver a los mempools para minarse de nuevo más tarde.

Los bloques obsoletos son normales. El objetivo de Bitcoin de un bloque cada 10 minutos equivale a unos 52,600 bloques al año, encontrados por mineros repartidos por todo el mundo, y los hallazgos casi simultáneos dejan decenas de ellos obsoletos cada año. El conjunto de datos público bitcoin-data/stale-blocks registra entre 28 y 93 al año de 2022 a 2025. Cuanto más largo es el tiempo promedio entre bloques y mejor la propagación de los bloques, más baja es la tasa de bloques obsoletos. El tiempo de bloque de 10 minutos de Bitcoin se eligió en parte para mantener baja esa tasa.

El término más antiguo para lo mismo es [bloque huérfano](/es/glosario/bloque-huerfano), que todavía aparece a veces en documentación más antigua, pero que ya se distingue formalmente de un caso distinto (y más raro): aquel en que un nodo literalmente todavía no ha recibido el bloque padre.

Los bloques obsoletos no indican un problema en Bitcoin. Indican que Bitcoin está funcionando: mineros independientes en todo el planeta compiten por extender la cadena, y la red converge en el lado que tenga más trabajo acumulado.
