---
title: "Ajuste de dificultad"
slug: ajuste-de-dificultad
draft: false
published: "2026-10-14"
shortDefinition: "La recalibración automática de la dificultad de minería de Bitcoin cada 2016 bloques para mantener un intervalo de 10 minutos entre bloques."
keyTakeaways:
  - "Ocurre más o menos cada dos semanas (2016 bloques)"
  - "Garantiza intervalos de bloque constantes aunque cambie el hashrate"
  - "Clave en el diseño autorregulado de la prueba de trabajo de Bitcoin"
aliases:
  - "ajuste de la dificultad"
  - "reajuste de dificultad"
  - "retarget de dificultad"
sources:
  - { label: "Bitcoin Core source - CalculateNextWorkRequired, the factor-of-four adjustment limit (src/pow.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
relatedTerms:
  - block-height
  - block-time
  - competitive-mining
  - consensus-parameter
  - difficulty
  - halving-halvening
  - miner
  - mining-algorithm
  - nonce-exhaustion
  - poisson-process
  - proof-work-pow
sameAs:
  - "https://en.bitcoin.it/wiki/Difficulty"
  - "https://en.bitcoin.it/wiki/Target"
  - "https://en.bitcoin.it/wiki/Protocol_rules"
liveWidget: ~
translationOf: difficulty-retargeting
sourceHash: "d5b796b25d5b"
sourceCommit: "6851044"
sourceUpdated: "2026-10-05"
translation:
  method: "llm-draft"
---

El ajuste de dificultad es el mecanismo con el que Bitcoin mantiene su [tiempo de bloque (en inglés)](/glossary/block-time) promedio en unos 10 minutos, sin importar cuánto [hashrate](/es/glosario/hashrate) (poder de cómputo) haya en la red.

La regla es mecánica:

- Cada **2,016 bloques** (más o menos dos semanas), cada nodo calcula cuánto tardó en realidad esa "época" de 2,016 bloques.
- Si tardó **menos de dos semanas**, los bloques salieron demasiado rápido: la [dificultad](/es/glosario/dificultad) **sube**.
- Si tardó **más de dos semanas**, los bloques salieron demasiado despacio: la dificultad **baja**.
- El ajuste es proporcional a la desviación, **limitado a un factor de cuatro** en ambas direcciones (como máximo +300% hacia arriba o -75% hacia abajo en un solo paso) para evitar oscilaciones extremas.

El ajuste entra en vigor al instante, al comienzo de la siguiente época. La nueva dificultad rige durante los siguientes 2,016 bloques, y entonces el ciclo se repite.

Es una de las piezas de diseño de mecanismos más trascendentes y menos valoradas de Bitcoin. No hay comité. No hay una Reserva Federal que suba las tasas. La red observa sus propias condiciones y se corrige, con un calendario fijo, para siempre. Un minero que conecta 80 MW de poder de cómputo no cambia el calendario de emisión de Bitcoin; solo provoca una dificultad más alta en el siguiente ajuste.

El mecanismo ha resistido eventos enormes: la prohibición de la minería en China en 2021 (el hashrate cayó cerca de 50% en cuestión de semanas; la dificultad se corrigió 28% a la baja en el siguiente ajuste), el éxodo de mineros del mercado bajista de 2022 y cuatro halvings. Cada vez, la red se reequilibra y vuelve a su promedio de 10 minutos en una o dos épocas.

Puedes ver en vivo el avance de la época actual y la estimación del próximo ajuste en la [sección 4 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) o en la [página del nodo (en inglés)](/node).
