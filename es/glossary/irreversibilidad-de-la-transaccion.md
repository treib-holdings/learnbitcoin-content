---
title: "Irreversibilidad de la transacción (finality)"
slug: irreversibilidad-de-la-transaccion
draft: false
published: "2026-10-14"
shortDefinition: "Después de varias confirmaciones, revertir una transacción mediante una reorganización (reorg) se vuelve muy improbable, lo que da una irreversibilidad práctica."
keyTakeaways:
  - "Cada bloque nuevo reduce la probabilidad de que un ataque por reorganización tenga éxito"
  - "No hay garantía absoluta, pero el riesgo disminuye con rapidez"
  - "Las transacciones de mayor valor suelen esperar más confirmaciones"
aliases:
  - "irreversibilidad de las transacciones"
  - "finalidad de la transacción"
  - "finality"
  - "transaction finality"
sources:
  - { label: "bitcoin-data/stale-blocks - public dataset of stale blocks (between 28 and 93 a year from 2022 through 2025, as of October 2026)", url: "https://github.com/bitcoin-data/stale-blocks" }
  - { label: "bitcoin.org alert - July 2015 chain forks (a 6-block invalid chain on July 4, 2015)", url: "https://bitcoin.org/en/alert/2015-07-04-spv-mining" }
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double spending (2012), Table 1: 0.059% for a 10% attacker at six confirmations; success falls exponentially with confirmations", url: "https://arxiv.org/abs/1402.2009" }
relatedTerms:
  - double-spend
  - proof-work-pow
  - race-attack
  - reorg-reorganization
liveWidget: ~
translationOf: transaction-finality
sourceHash: "710821862e90"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Las transacciones de Bitcoin no son irreversibles en términos absolutos. La probabilidad de que una se revierta cae en picada con cada confirmación, pero nunca llega a cero. El número correcto de confirmaciones que conviene esperar depende del valor en juego y del modelo de amenazas.

Cómo funcionan las matemáticas. Para revertir una transacción con N confirmaciones, un atacante tiene que minar una cadena competidora de al menos N+1 bloques para que los demás nodos se pasen a ella. Cada bloque representa unos 10 minutos de trabajo de toda la red. Por debajo de la mitad del hashrate (el poder de cómputo de la red), la probabilidad de que un atacante alcance a la cadena honesta se reduce exponencialmente con N. El análisis de Meni Rosenfeld de 2012 la sitúa en alrededor de 1 entre 1,700 para un atacante con el 10% a seis confirmaciones. Bajo cualquier supuesto de mayoría honesta, una transacción con muchas confirmaciones es prácticamente definitiva.

Convenciones prácticas de confirmación:

- **0 confirmaciones (en el mempool).** Nada definitiva. Se puede reemplazar con Replace-by-Fee (RBF, reemplazo por comisión) o anular con un doble gasto en un ataque de carrera (race attack). Aceptable para compras minoristas de menos de 10 dólares en algunos flujos de trabajo, aunque ese caso migra cada vez más a Lightning.
- **1 confirmación (unos 10 min en promedio).** Definitiva para el uso cotidiano del consumidor. Café, compras, nómina. Las reorganizaciones de 1 bloque (reorgs) ocurren decenas de veces al año, pero la probabilidad de que una transacción concreta con 1 confirmación se revierta es pequeña.
- **3 confirmaciones (unos 30 min).** Umbral habitual de los exchanges para acreditar depósitos en cuentas pequeñas.
- **6 confirmaciones (alrededor de 1 hora).** El valor por defecto de la era de Satoshi. Umbral de depósito de los exchanges para montos mayores; es la cifra que cita casi todo el material introductorio sobre Bitcoin.
- **100 confirmaciones (unas 17 horas).** Madurez de la transacción coinbase: las recompensas de bloque recién minadas no se pueden gastar hasta que pasen 100 bloques. Es una regla dura, codificada en el consenso, no una convención de tiempo de espera.
- **N >> 6.** Para modelos de amenazas con un Estado-nación como atacante o para transferencias de valor extremadamente alto, espera días. El decaimiento exponencial hace que una transacción lo bastante antigua sea prácticamente irreversible.

Historial de reorganizaciones en la práctica. Bitcoin ha tenido reorganizaciones de 1 bloque de forma rutinaria (decenas al año de 2022 a 2025), de 2 bloques rara vez, y de 3 bloques solo un puñado de veces. Las más profundas que constan vinieron de errores de software y de problemas en actualizaciones, como la cadena inválida de 6 bloques que construyeron en julio de 2015 mineros que se saltaron la validación.

La reorganización profunda más famosa es la de 25 bloques que puso fin a la [bifurcación de la cadena de marzo de 2013](/es/a-fondo/bifurcacion-de-2013), documentada en el [BIP 50](/es/glosario/bip-50), durante la cual un pago con más de seis confirmaciones se revirtió y después fue reembolsado. Fuera de incidentes por errores de software como ese, ninguna reorganización ha anulado una transacción con 6 o más confirmaciones.

Lightning Network ofrece una liquidación casi instantánea dentro de un canal; el estado subyacente del canal, en última instancia, se liquida igual en la cadena base y hereda la irreversibilidad que ofrezca la capa base. Para el usuario, un pago por Lightning es definitivo en el momento en que se liquida; para los fondos del canal, lo que importa a largo plazo es el anclaje on-chain.
