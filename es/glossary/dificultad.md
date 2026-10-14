---
title: "Dificultad"
slug: dificultad
draft: false
published: "2026-10-13"
shortDefinition: "Una medida de qué tan difícil es encontrar un hash de bloque por debajo del objetivo de la red. Se ajusta cada 2016 bloques (unas dos semanas)."
keyTakeaways:
  - "Regula el hallazgo de bloques a unos 10 minutos en promedio"
  - "Se ajusta automáticamente según el hashrate total de la red"
  - "Mantiene un patrón de emisión predecible"
aliases:
  - "dificultad de minería"
  - "objetivo de dificultad"
sources:
  - { label: "mempool.space API - every difficulty change since 2009 (466 changes through October 2026, about 1.3 x 10^14 in mid-2026)", url: "https://mempool.space/api/v1/mining/hashrate/all" }
relatedTerms:
  - coin-control
  - competitive-mining
  - consensus-parameter
  - difficulty-retargeting
  - double-spend
  - mining-subsidy
  - nonce
  - poisson-process
  - proof-work-pow
  - revenue-ths
sameAs:
  - "https://en.bitcoin.it/wiki/Difficulty"
liveWidget: ~
translationOf: difficulty
sourceHash: "61a9c295c0db"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

La dificultad es un número que define qué tan difícil es minar un bloque de Bitcoin en este momento. En concreto, determina el valor **objetivo** por debajo del cual debe quedar el [hash](/es/glosario/hash) del [encabezado del bloque](/es/glosario/encabezado-del-bloque) para que el bloque sea válido. Mayor dificultad = objetivo más bajo = más intentos en promedio para encontrar un hash válido.

La dificultad se fija de modo que, con el [hashrate](/es/glosario/hashrate) global actual (el poder de cómputo de la red), los bloques salgan en promedio cada 10 minutos. Cuando el hashrate crece o se reduce, la dificultad se adapta mediante el [ajuste de dificultad](/es/glosario/ajuste-de-dificultad) cada 2,016 bloques (más o menos cada dos semanas).

Para darte una idea de la escala: la red Bitcoin cambió su dificultad más de 460 veces entre el bloque génesis y octubre de 2026. La dificultad del bloque génesis era 1. A mediados de 2026 rondaba los 130 billones. Esa proporción, unos 14 órdenes de magnitud, es todo el crecimiento de la industria mundial de minería de Bitcoin: de un solo CPU en una computadora de escritorio a un sector industrial global.

La dificultad es la parte de la [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work) que hace que el sistema se ajuste solo. Ya sea que compitan 10 mineros o 10,000, los bloques siguen saliendo más o menos cada 10 minutos y los BTC se emiten según el calendario. A la red no le importa el precio del hardware ni el de la electricidad. Le importa el hashrate, y se ajusta en respuesta a él.

La [sección 4 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) explica el mecanismo, y la [página del nodo (en inglés)](/node) muestra la dificultad actual y el avance de la época.
