---
title: "Desinflación"
slug: desinflacion
draft: false
published: "2026-10-13"
shortDefinition: "Una reducción de la tasa de inflación. La tasa de emisión de Bitcoin se frena con cada halving, un ejemplo de comportamiento desinflacionario."
keyTakeaways:
  - "Describe una tasa de inflación que baja con el tiempo"
  - "Los bitcoins emitidos por bloque se reducen a la mitad más o menos cada cuatro años"
  - "Sitúa a BTC como más escaso que el dinero fiat tradicional"
aliases:
  - "desinflacionario"
  - "desinflacionaria"
sources:
  - { label: "Bitcoin Core source - GetBlockSubsidy, the halving schedule every node enforces (src/validation.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "mempool.space - block 969,999 (5 October 2026); 20,093,750 BTC issued by the schedule through this block", url: "https://mempool.space/block/000000000000000000001d95e5f7284cb199b8620eb6a7938dd9696f85751bb3" }
  - { label: "ChainQuery - circulating supply and annual inflation rate (live; 0.8173% on 9 October 2026, cross-checked against the GetBlockSubsidy schedule)", url: "https://chainquery.com/api/edu/supply" }
  - { label: "Federal Reserve - why the Fed aims for 2 percent inflation over the longer run", url: "https://www.federalreserve.gov/faqs/economy_14400.htm" }
relatedTerms:
  - asymptote
  - block-reward
  - block-subsidy
  - fungibility
  - halving-halvening
  - inflation
  - inflation-bug
  - mining-subsidy
liveWidget: ~
translationOf: disinflation
sourceHash: "6ce0911ba912"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Desinflación significa que la inflación va a *menos* con el tiempo. Los precios o la oferta monetaria siguen subiendo, pero el ritmo del aumento se frena.

Bitcoin es el ejemplo más limpio de desinflación programada en la historia monetaria. Con cada bloque se emiten BTC nuevos, así que la oferta en circulación crece sin parar; pero cada 210,000 bloques (más o menos cada 4 años) la emisión por bloque se reduce a la mitad. Eso hace que la tasa de inflación caiga en escalones:

- **2009-2012:** subsidio de 50 BTC/bloque
- **2012-2016:** 25 BTC/bloque (después del primer halving)
- **2016-2020:** 12.5 BTC/bloque
- **2020-2024:** 6.25 BTC/bloque
- **2024-2028:** 3.125 BTC/bloque (cerca de 0.83% de inflación anual al inicio de la era, 0.82% en octubre de 2026)
- **2028-2032:** 1.5625 BTC/bloque (cerca de 0.4% de inflación)

Esto continúa cada 210,000 bloques hasta que el subsidio se redondea a cero hacia 2140. A partir de ahí, Bitcoin tiene inflación monetaria cero: todos los ingresos de los mineros vienen de las comisiones de transacción.

La desinflación es lo contrario de cómo suelen funcionar los sistemas fiat (fiduciarios). Los bancos centrales normalmente *fijan como meta* una tasa de inflación positiva (la Reserva Federal apunta al 2% a largo plazo). Bitcoin no tiene meta. Su emisión cae en cada halving y llega exactamente a cero en el bloque 6,930,000, hacia 2140.

La entrada [Halving](/es/glosario/halving) explica el mecanismo, y el [tema a fondo sobre el calendario de emisión (en inglés)](/rabbit-hole/supply) cuenta la versión larga.
