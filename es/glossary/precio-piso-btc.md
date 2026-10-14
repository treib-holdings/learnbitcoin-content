---
title: "Precio piso (BTC)"
slug: precio-piso-btc
aliases:
  - "precio piso"
  - "piso de precio"
  - "price floor"
draft: false
published: "2026-10-13"
shortDefinition: "La idea, discutida, de que el precio de BTC no cae por debajo del punto de equilibrio de los mineros, aunque la historia muestra que no hay ningún piso garantizado."
keyTakeaways:
  - "Hay quien toma el punto de equilibrio de los mineros como un nivel de soporte del mercado"
  - "Históricamente, el precio de BTC puede perforar esos niveles por poco tiempo o por periodos largos"
  - "No es un piso firme, por factores complejos del mercado y de la economía"
sources:
  - { label: "Satoshi Nakamoto - bitcointalk, 21 February 2010: the price of any commodity tends to gravitate toward the production cost", url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/65/" }
  - { label: "Bitcoin Core - nPowTargetTimespan of two weeks, nPowTargetSpacing of 10 minutes and nSubsidyHalvingInterval of 210,000 blocks in src/kernel/chainparams.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "mempool.space - Difficulty adjustments, full history (JSON; fetched 13 October 2026)", url: "https://mempool.space/api/v1/mining/difficulty-adjustments/all" }
  - { label: "mempool.space - Network hash rate, daily, full history (JSON; fetched 13 October 2026)", url: "https://mempool.space/api/v1/mining/hashrate/all" }
  - { label: "mempool.space - Historical BTC/USD price (JSON; fetched 13 October 2026)", url: "https://mempool.space/api/v1/historical-price?currency=USD" }
  - { label: "mempool.space - Block 840,000, the fourth halving (20 April 2024)", url: "https://mempool.space/block/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5" }
relatedTerms:
  - bull-market
  - dca-dollar-cost-averaging
  - hodl
  - paper-hands
  - price-discovery
  - price-slippage
  - volatility
liveWidget: ~
translationOf: price-floor-btc
sourceHash: "00de46e5c1b7"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

"Precio piso" es un concepto discutido: la idea de que el precio de Bitcoin no se queda mucho tiempo por debajo del punto de equilibrio del minero marginal, porque los mineros que operan a pérdida apagan sus máquinas, el hashrate (el poder de cómputo de la red) cae, la dificultad se ajusta a la baja y los costos de los mineros que sobreviven bajan hasta que se alcanza el nuevo equilibrio. La idea es tan vieja como la red. En febrero de 2010, Satoshi escribió que "the price of any commodity tends to gravitate toward the production cost" (el precio de cualquier mercancía tiende a gravitar hacia el costo de producción), y añadió que en años posteriores, cuando las monedas nuevas fueran una parte pequeña de la oferta, "market price will dictate the cost of production more than the other way around" (el precio de mercado dictará el costo de producción más que al revés).

La teoría:

- La minería necesita electricidad. Los mineros menos eficientes (los ASICs más viejos, la electricidad más cara) operan con un margen cercano a cero en periodos estables.
- Si el precio de BTC cae por debajo de su punto de equilibrio, apagan las máquinas para dejar de perder dinero.
- Con menos hashrate, el [ajuste de dificultad](/es/glosario/ajuste-de-dificultad) de la red reduce la dificultad de minería, y baja el costo de electricidad por moneda para los mineros que quedan.
- El nuevo piso es el punto de equilibrio del minero menos eficiente que sigue operando con la dificultad ya ajustada.

En la práctica, la cosa se complica:

- **El piso no es un solo número.** Varía según el minero. Un minero con ASICs de la generación actual y electricidad a $0.03/kWh (dólares estadounidenses) tiene un punto de equilibrio mucho más bajo que uno con máquinas de hace dos generaciones y electricidad a $0.06/kWh. Un precio en caída apaga primero las máquinas más viejas y más caras de operar.
- **El ajuste de dificultad es lento.** Se ajusta cada 2,016 bloques (unas 2 semanas). El precio puede quedarse por debajo del punto de equilibrio durante toda esa ventana antes de que entre el ajuste, y una caída fuerte tarda varios ciclos en absorberse: en noviembre y diciembre de 2018 la dificultad bajó tres ajustes seguidos, un 29 por ciento en total.
- **La minería no es el comprador ni el vendedor marginal de BTC.** Los mineros son vendedores (venden el [subsidio de bloque](/es/glosario/subsidio-de-bloque) para pagar la operación); los compradores comunes son los compradores marginales. El precio spot (al contado) puede quedarse por debajo del costo de minería durante periodos largos si la demanda de compra es débil.
- **El comportamiento estratégico de los mineros importa.** Los mineros que cotizan en bolsa y tienen BTC en tesorería pueden guardarlos en vez de venderlos cuando el precio está bajo, para no verse forzados a vender en el fondo del ciclo. Los mineros privados con capital de riesgo pueden operar a pérdida durante meses. La historia de que "los mineros apagan en el punto de equilibrio" es más limpia que la realidad.

El registro histórico:

- **El mercado bajista de 2018 y 2019.** BTC cayó de unos $6,500 a principios de noviembre de 2018 a menos de $3,500 un mes después, y se movió casi todo el tiempo entre unos $3,400 y $4,000 hasta fines de marzo de 2019. El hashrate (promedio de 7 días) cayó alrededor de un tercio, de 54 EH/s a fines de septiembre a 35 EH/s a mediados de diciembre, y la dificultad se recortó tres veces seguidas: un caso de manual de [capitulación de mineros (en inglés)](/glossary/miner-capitulation).
- **El mercado bajista de 2022.** BTC cayó de unos $44,000 a principios de enero a menos de $16,000 en noviembre de 2022, y aun así el hashrate siguió creciendo: el promedio de 7 días subió de unos 184 EH/s a mediados de enero a unos 262 EH/s a mediados de diciembre, y la dificultad subió un 45 por ciento en el año. Las máquinas nuevas y más eficientes entraron en operación más rápido de lo que se apagaban las viejas.
- **2024, después del halving.** El cuarto [halving](/es/glosario/halving), en el bloque 840,000 el 20 de abril de 2024, recortó el subsidio a la mitad y con eso duplicó de la noche a la mañana el costo de cada moneda minada. La dificultad bajó alrededor de un 10 por ciento en las diez semanas siguientes (de 88.1 billones el 24 de abril a 79.5 billones el 5 de julio) mientras las máquinas menos eficientes se desconectaban, y luego volvió a subir. El precio no cayó hacia el nuevo costo: se movió entre unos $50,000 y $73,000 hasta octubre de 2024.

La forma honesta de plantearlo: hay una relación entre el costo marginal de minería y el precio piso, pero no es una garantía firme, y el piso mismo se mueve con la eficiencia del hardware y los costos de la electricidad. Quien guarda bitcoin a largo plazo no debería apostar a un precio piso exacto; la versión realista es "Bitcoin tiende a encontrar soporte en algún nivel relacionado con los costos de minería, pero el nivel exacto cambia de ciclo en ciclo".
