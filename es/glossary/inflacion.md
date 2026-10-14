---
title: "Inflación"
slug: inflacion
draft: false
published: "2026-10-13"
shortDefinition: "El ritmo al que entran en circulación nuevos BTC, que disminuye con el tiempo por los halvings."
keyTakeaways:
  - "Empieza alta en el lanzamiento (50 BTC por bloque) y se reduce en cada halving"
  - "Garantiza un tope máximo de unos 21 millones de BTC hacia 2140"
  - "Define la narrativa de escasez de Bitcoin frente a la inflación del dinero fiat"
sources:
  - { label: "Bitcoin Core source - GetBlockSubsidy, the halving schedule every node enforces (src/validation.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "mempool.space - block 969,999 (5 October 2026); 20,093,750 BTC issued by the schedule through this block", url: "https://mempool.space/block/000000000000000000001d95e5f7284cb199b8620eb6a7938dd9696f85751bb3" }
  - { label: "ChainQuery - circulating supply and annual inflation rate (live; 0.8173% on 9 October 2026, cross-checked against the GetBlockSubsidy schedule)", url: "https://chainquery.com/api/edu/supply" }
  - { label: "World Gold Council - How much gold has been mined? (222,600 t, end-Q2 2026)", url: "https://www.gold.org/goldhub/data/how-much-gold" }
  - { label: "World Gold Council - Gold Demand Trends Full Year 2025, supply (mine production 3,672 t)", url: "https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-full-year-2025/supply" }
  - { label: "USGS Mineral Commodity Summaries 2026 - Gold (world mine production 2025: 3,300 t)", url: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gold.pdf" }
relatedTerms:
  - asymptote
  - bip-42
  - block-reward
  - block-subsidy
  - disinflation
  - halving-halvening
  - inflation-bug
  - mining-subsidy
liveWidget: ~
translationOf: inflation
sourceHash: "3afce368828c"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

"Inflación" puede significar dos cosas distintas, y vale la pena no confundirlas.

En economía en general, inflación suele significar la subida generalizada de los precios con el tiempo: lo que hoy cuesta $1 (dólares estadounidenses) costará $1.03 el año que viene. Se mide con índices como el IPC (índice de precios al consumidor) y la impulsan muchos factores, pero en un sistema de dinero fiat (fiduciario) la causa dominante a largo plazo es la expansión de la oferta monetaria.

En Bitcoin en concreto, "inflación" se refiere al ritmo al que entran *nuevos BTC* en la oferta circulante cada año. Depende únicamente del calendario del subsidio de bloque y del ritmo promedio al que se producen los bloques. Desde el halving de abril de 2024 hasta el siguiente, hacia abril de 2028, la emisión anual de Bitcoin es de unos 164,250 BTC. Frente a los 20,093,750 BTC emitidos hasta el bloque 969,999 (5 de octubre de 2026), eso es alrededor de 0.82% al año, más o menos la mitad del 1.5% a 1.7% que crecieron en 2025 las existencias de oro ya extraído.

Cada halving reduce la tasa de emisión a la mitad. Después del halving de 2028, la tasa de inflación de Bitcoin baja a cerca de 0.4%. Después del halving número 33, hacia 2140, llega a cero y se queda ahí para siempre.

El contraste con el dinero fiat es justamente la clave. La inflación monetaria de Bitcoin está fijada matemáticamente, es verificable por cualquiera y tiende a cero. La inflación monetaria del dinero fiat la deciden comités a puerta cerrada, sin ningún tope. Consulta el tema a fondo sobre el [calendario de emisión (en inglés)](/rabbit-hole/supply) para ver las cuentas, y [Desinflación](/es/glosario/desinflacion) para entender qué significa "tasa de inflación decreciente".
