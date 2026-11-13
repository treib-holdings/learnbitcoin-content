---
title: "Ajuste de dificultad"
slug: ajuste-de-dificultad
draft: false
published: "2026-10-14"
updated: "2026-11-05"
shortDefinition: "La recalibración automática de la dificultad de minería de Bitcoin cada 2,016 bloques, también llamada reajuste (retargeting), que mantiene el intervalo promedio entre bloques cerca de diez minutos. La nueva dificultad es la anterior multiplicada por dos semanas y dividida entre lo que tardó la última ventana, con un límite de un factor de cuatro hacia arriba o hacia abajo."
keyTakeaways:
  - "Cada 2,016 bloques (unas dos semanas), cada nodo reescala la dificultad por el cociente entre dos semanas y lo que tardó la ventana que acaba de terminar, medido desde la marca de tiempo de su primer bloque hasta la del último; ese cociente queda limitado entre un cuarto y cuatro"
  - "La ventana mide 2,015 intervalos contra un objetivo de 2,016 y no se superpone con la ventana anterior; lo primero es un error por uno inofensivo, lo segundo es el hueco que aprovecha el ataque time warp"
  - "Ningún evento lo ha roto: la pérdida de cerca de la mitad del hashrate en 2021 requirió cuatro ajustes a la baja seguidos, 45 por ciento en total, el mayor de ellos un recorte de 27.9 por ciento el 3 de julio de 2021, el más grande registrado; en la ventana siguiente los bloques ya estaban de vuelta cerca de los diez minutos"
aliases:
  - "ajuste de la dificultad"
  - "ajustes de dificultad"
  - "reajuste de dificultad"
  - "retarget de dificultad"
  - "época de dificultad"
  - "periodo de dificultad"
sources:
  - { label: "Bitcoin Core - src/pow.cpp: GetNextWorkRequired recalculates only when the next height is a multiple of DifficultyAdjustmentInterval() and reaches back 2,015 blocks for the first timestamp; CalculateNextWorkRequired clamps the span to between a quarter and four times nPowTargetTimespan, scales the target, and caps it at powLimit", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
  - { label: "Bitcoin Core - src/kernel/chainparams.cpp: mainnet nPowTargetTimespan of 14 * 24 * 60 * 60 seconds and nPowTargetSpacing of 10 * 60, so the interval is 2,016 blocks", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core - main.cpp at the repository's first commit (2009): the same two-week nTargetTimespan, the loop back nInterval minus one blocks, and the quarter-to-four-times clamp", url: "https://github.com/bitcoin/bitcoin/blob/4405b78d6059e536c36974088a8ed4d9f0f29898/main.cpp" }
  - { label: "Pieter Wuille - Oddities of Bitcoin's difficulty adjustment (gist): the window observes 2,015 blocks; because the formula uses the inverse of the observed span, the honest interblock time it targets is 600 x 2016/2014 seconds", url: "https://gist.github.com/sipa/1a70884abe6d0a7cddc340c99f741a41" }
  - { label: "mempool.space API - every difficulty change since 2009: the adjustment at block 689,472 on July 3, 2021, was a factor of 0.7206, the lowest in the series; the window before it took 19.4 days", url: "https://mempool.space/api/v1/mining/hashrate/all" }
  - { label: "BitMEX Research - The Timewarp Attack (March 31, 2025, Wayback Machine): the off-by-one makes the target 10 minutes and 0.3 seconds; the average interval since launch has been 9 minutes 36 seconds because hash rate has mostly risen", url: "https://web.archive.org/web/20251013153620/https://blog.bitmex.com/the-timewarp-attack/" }
  - { label: "BIP-54 - Consensus Cleanup: the timewarp fix constrains the first and last timestamps of each difficulty period", url: "https://github.com/bitcoin/bips/blob/master/bip-0054.md" }
relatedTerms:
  - block-height
  - block-time
  - block-timestamp-rules
  - chain-death-spiral
  - competitive-mining
  - consensus-parameter
  - difficulty
  - emergency-difficulty-adjustment-eda
  - great-consensus-cleanup
  - halving-halvening
  - hash-rate
  - miner
  - mining-algorithm
  - mtp-median-time-past
  - nonce-exhaustion
  - poisson-process
  - proof-work-pow
  - time-warp-attack
sameAs:
  - "https://en.bitcoin.it/wiki/Difficulty"
  - "https://en.bitcoin.it/wiki/Target"
  - "https://en.bitcoin.it/wiki/Protocol_rules"
liveWidget: ~
translationOf: difficulty-retargeting
sourceHash: "ef8bb43b8336"
sourceCommit: "e722e85"
sourceUpdated: "2026-11-05"
translation:
  method: "llm-draft"
---

El ajuste de dificultad, también llamado reajuste (retargeting), es el mecanismo que mantiene el [tiempo de bloque (en inglés)](/glossary/block-time) promedio de Bitcoin cerca de diez minutos, haga lo que haga el [hashrate](/es/glosario/hashrate) (poder de cómputo). Son dos funciones cortas en `src/pow.cpp`, `GetNextWorkRequired` y `CalculateNextWorkRequired`, y la regla no ha cambiado en lo esencial desde el primer código público, en 2009. El único cambio, en julio de 2010, modificó qué pasa si una ventana se mide como si el tiempo hubiera corrido hacia atrás, algo que nunca le ha ocurrido a ninguna.

La regla:

- Cada **2,016 bloques**, unas dos semanas a diez minutos por bloque, cada nodo calcula cuánto tardó en realidad la ventana que acaba de terminar: la marca de tiempo de su último bloque menos la de su primero.
- La nueva [dificultad](/es/glosario/dificultad) es la anterior multiplicada por dos semanas y dividida entre ese lapso. Si los bloques salieron demasiado rápido, la dificultad sube; si salieron demasiado despacio, baja. El objetivo, el número por debajo del cual debe quedar el hash de un bloque, se mueve en sentido contrario.
- Antes de la división, el lapso se **limita a entre un cuarto y cuatro veces** dos semanas, así que ningún ajuste puede mover la dificultad más de un factor de cuatro en ninguna dirección. El límite de subida se activó una sola vez, en el bloque 68,544, el 16 de julio de 2010, cuando una ventana tardó 3.35 días; el de bajada nunca se ha activado.
- El nuevo valor rige desde el primer bloque de la ventana siguiente y se mantiene durante 2,016 bloques. Entre un ajuste y otro no cambia nada, por mucho que tarden los bloques.

Hay dos rarezas que vale la pena conocer. Entre el primer bloque de la ventana y el último hay 2,015 intervalos, no 2,016, y aun así el código compara ese lapso con 2,016 veces diez minutos. Por este error por uno (off-by-one) de Satoshi, el intervalo objetivo queda, por simple división, en diez minutos y tres décimas de segundo, y si se hace bien la estadística de dividir entre un lapso medido, más cerca de diez minutos y seis décimas. En la práctica nadie lo ha notado, porque el hashrate ha crecido durante la mayor parte de la vida de Bitcoin y los bloques han promediado menos de diez minutos de todos modos. La segunda rareza es más seria. Las ventanas no se superponen, así que la primera marca de tiempo de una ventana nunca se compara con la última de la ventana anterior. Ese hueco es el [ataque time warp (en inglés)](/glossary/time-warp-attack), y cerrarlo es la primera regla de la propuesta de soft fork [Consensus Cleanup (en inglés)](/glossary/great-consensus-cleanup). Las marcas de tiempo, a su vez, están acotadas por las [reglas de marca de tiempo de los bloques (en inglés)](/glossary/block-timestamp-rules): un piso basado en una mediana y un techo de dos horas. Las dos rarezas vienen de una sola línea del código de la 0.1.0 de Satoshi, y el tema a fondo [El time warp](/es/a-fondo/time-warp) las sigue desde el borrador de noviembre de 2008 hasta lo que un minero mayoritario podría hacer hoy con el hueco.

No hay comité, y nadie puede saltarse la regla. La red observa sus propios tiempos de bloque y se corrige, con un calendario fijo, para siempre. Una granja minera nueva no cambia el calendario de emisión; provoca una dificultad más alta en el siguiente ajuste, y la parte de los bloques que le toca a cada uno de los demás se achica en la misma proporción.

El mecanismo ha resistido todo lo que le ha pasado hasta ahora. La prohibición de la minería en China en 2021 dejó fuera de línea cerca de la mitad del hashrate; la dificultad bajó en cuatro ajustes seguidos, 45 por ciento en total. La ventana que terminó el 3 de julio de 2021 promedió 13.9 minutos por bloque, y el ajuste del bloque 689,472 recortó la dificultad un 27.9 por ciento, el mayor paso a la baja registrado. La ventana siguiente promedió 10.5 minutos. El mercado bajista de 2022 dejó menos mineros, cada uno de los cuatro halvings les cortó el subsidio a la mitad de un día para otro, y en todos los casos los ajustes lo absorbieron en dos ventanas o menos. El diseño que cuenta en bloques sí tiene un modo de falla en el papel: una cadena que perdiera de golpe la mayor parte de su hashrate tendría que esperar mucho tiempo el ajuste que la salva. Eso es la [espiral de la muerte de una cadena (en inglés)](/glossary/chain-death-spiral), y por eso bifurcaciones minoritarias como Bitcoin Cash en 2017 le agregaron un [ajuste de dificultad de emergencia (en inglés)](/glossary/emergency-difficulty-adjustment-eda), con resultados que le dan la razón a la ventana lenta.

Puedes ver en vivo el avance de la época actual y la estimación del próximo ajuste en la [sección 4 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) o en la [página del nodo](/es/nodo).
