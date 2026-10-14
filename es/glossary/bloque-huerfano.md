---
title: "Bloque huérfano"
slug: bloque-huerfano
draft: false
published: "2026-10-13"
shortDefinition: "Término antiguo para un bloque que no fue aceptado en la mejor cadena (hoy se llama, con más precisión, bloque obsoleto o bloque huérfano según el caso)."
keyTakeaways:
  - "En otros sistemas también se les llama bloques obsoletos (stale) o bloques tío (uncle)"
  - "Pierden frente a otro bloque válido en la carrera por construir la cadena"
  - "El minero del bloque huérfano no recibe la recompensa de bloque"
aliases:
  - "bloques huérfanos"
sources:
  - { label: "bitcoin-data/stale-blocks - public dataset of stale blocks (between 28 and 93 a year from 2022 through 2025, as of October 2026)", url: "https://github.com/bitcoin-data/stale-blocks" }
relatedTerms:
  - block
  - block-propagation
  - chain-split
  - fork
  - miner
  - reorg-reorganization
  - stale-block
liveWidget: ~
translationOf: orphan-block
sourceHash: "a75738e6da52"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

"Bloque huérfano" es la terminología antigua para un bloque válido que no terminó en la cadena canónica. La documentación moderna de Bitcoin Core prefiere [bloque obsoleto](/es/glosario/bloque-obsoleto) para este concepto, y reserva "huérfano" para el caso realmente raro de un bloque cuyo padre el nodo local todavía no ha recibido.

En la práctica, cuando dos [mineros](/es/glosario/minero) encuentran un bloque válido a la misma altura casi al mismo tiempo, la red se divide por un momento. Cada mitad construye sobre el bloque que vio primero. En uno o dos bloques, una rama suele tomar la delantera, y el bloque en la punta de la otra rama queda abandonado. El minero de ese bloque abandonado no cobra. El conjunto de datos público bitcoin-data/stale-blocks cuenta entre 28 y 93 de estos bloques obsoletos al año de 2022 a 2025.

La historia de los nombres es enredada. En textos más antiguos verás "huérfano" (orphan), "obsoleto" (stale) y "tío" (uncle, el término de Ethereum) usados como sinónimos. Para Bitcoin en 2026, la distinción más limpia es:

- **Bloque obsoleto**: un bloque válido, verificado por completo, que perdió la carrera. El bloque existió; solo que ya no forma parte de la cadena más larga.
- **Bloque huérfano**: un bloque cuyo padre el nodo local no tiene. Por lo general es un efecto de la propagación, y casi siempre se resuelve en segundos, en cuanto llega el padre.

Los dos son consecuencias normales de una carrera de prueba de trabajo (proof-of-work) repartida por todo el planeta. Ninguno indica que algo ande mal en Bitcoin. Consulta [Reorganización (reorg)](/es/glosario/reorganizacion) para saber qué pasa con las transacciones que iban dentro de un bloque obsoleto.
