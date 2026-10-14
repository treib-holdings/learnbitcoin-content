---
title: "Halving"
slug: halving
draft: false
published: "2026-10-13"
shortDefinition: "Cada 210,000 bloques (unos 4 años), el subsidio de bloque de Bitcoin se reduce un 50%, lo que frena la emisión de nuevos BTC."
keyTakeaways:
  - "Ocurre más o menos cada cuatro años y reduce las recompensas en BTC nuevos"
  - "Es central en el diseño de oferta fija de Bitcoin"
  - "Puede influir en las ganancias de los mineros y en el ánimo del mercado"
aliases:
  - "halvings"
  - "halvening"
sources:
  - { label: "Halvings rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/halvings" }
  - { label: "ChainQuery - halving history, current subsidy and next halving estimate (cross-checked with mempool.space)", url: "https://chainquery.com/api/edu/halving" }
  - { label: "Bitcoin Core GetBlockSubsidy (permalink, Oct 2026)", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L1833-L1844" }
relatedTerms:
  - asymptote
  - bip-42
  - block-height
  - block-reward
  - block-size
  - block-subsidy
  - coinbase-transaction
  - difficulty-retargeting
  - disinflation
  - hal-finneys-running-bitcoin
  - mining-subsidy
  - revenue-ths
  - reward-era
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_protocol"
  - "https://www.wikidata.org/wiki/Q17001427"
  - "https://en.bitcoin.it/wiki/Controlled_supply"
liveWidget: ~
translationOf: halving-halvening
sourceHash: "691da9a2e80d"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Cada 210,000 bloques, más o menos cada 4 años, el subsidio de bloque que se paga a los mineros de Bitcoin se reduce a la mitad. El evento se llama halving o, en su versión de meme más antigua, el "halvening".

El subsidio empezó en 50 BTC por bloque cuando la red arrancó en enero de 2009. Bajó a 25 en el bloque 210,000 (noviembre de 2012), a 12.5 en el bloque 420,000 (julio de 2016), a 6.25 en el 630,000 (mayo de 2020) y a 3.125 en el 840,000 (abril de 2024), que sigue siendo el subsidio a octubre de 2026. El próximo halving será en el bloque 1,050,000, previsto hacia abril de 2028, y bajará el subsidio a 1.5625 BTC.

Cada intervalo entre halvings (210,000 bloques con un subsidio fijo) se llama [era de recompensa (en inglés)](/glossary/reward-era) (o "época", según algunos analistas).

El halving es el mecanismo central de la política monetaria de Bitcoin. Hace cumplir el tope de 21 millones, reduce a la mitad la tasa de emisión de BTC nuevos cada cuatro años y genera una presión periódica sobre la economía de los mineros que la red ha superado cuatro veces a octubre de 2026 (2012, 2016, 2020 y 2024).

Consulta el [tema a fondo sobre los halvings (en inglés)](/rabbit-hole/halvings) para la historia completa y una cuenta regresiva en vivo hacia el próximo. Consulta [Desinflación](/es/glosario/desinflacion) para ver qué significa el calendario de halvings para la tasa de inflación de Bitcoin con el paso del tiempo.
