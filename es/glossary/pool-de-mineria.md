---
title: "Pool de minería"
slug: pool-de-mineria
draft: false
published: "2026-10-14"
shortDefinition: "Un grupo de mineros que suman su hashrate y reparten las recompensas en proporción al trabajo que aporta cada uno."
keyTakeaways:
  - "Junta recursos para que los mineros cobren con más regularidad"
  - "Los miembros del pool reciben una parte de la recompensa de bloque"
  - "Puede llevar a la centralización si unos pocos pools dominan"
sources:
  - { label: "mempool.space - mining pools over the past year (Foundry USA 28.2%, AntPool 18.1%, F2Pool 12.5%, ViaBTC 9.7% of 52,323 blocks to October 9, 2026)", url: "https://mempool.space/graphs/mining/pools#1y" }
relatedTerms:
  - block-reward
  - coinbase-transaction
  - merged-mining
  - miner
  - mining
  - mining-algorithm
  - mining-colocation
  - mining-centralization
  - mining-front-end
  - mining-rig
  - mining-software
  - mining-subsidy
  - pool-hopping
  - pooled-mining
  - retail-mining
  - revenue-ths
sameAs:
  - "https://en.wikipedia.org/wiki/Mining_pool"
  - "https://www.wikidata.org/wiki/Q18207063"
  - "https://en.bitcoin.it/wiki/Mining_pool"
liveWidget: ~
translationOf: mining-pool
sourceHash: "43a7a31cc2d6"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Un pool de minería es un grupo de mineros que juntan su hashrate (su poder de cómputo) para encontrar bloques entre todos y repartirse las recompensas en proporción a lo que aporta cada uno.

Los pools existen por una razón: la varianza. Un minero con el 0.01% del hashrate mundial encontraría, en promedio, un bloque cada 70 días más o menos, pero la varianza alrededor de ese promedio es enorme. Habría trimestres en los que encontraría tres y trimestres en los que no encontraría ninguno. Con un recibo de luz que vence cada mes, "en promedio a lo largo de los años" no es un flujo de caja viable.

Los pools lo resuelven sumando el hashrate de muchos mineros, de modo que los bloques llegan con más frecuencia (en proporción al hashrate combinado), y pagándole a cada participante según las "shares" de trabajo que envía. Los esquemas modernos de reparto de shares (PPLNS, FPPS) también anulan el pool hopping (saltar de un pool a otro), un viejo truco que explotaba las shares enviadas al inicio de cada ronda para sacar recompensas por encima del promedio.

En el año que terminó en octubre de 2026, los cuatro pools más grandes (Foundry USA, AntPool, F2Pool y ViaBTC) encontraron cerca del 69% de todos los bloques, según el conteo de mempool.space. Esta es la preocupación por la centralización que les quita el sueño a los desarrolladores de Bitcoin: si unos cuantos operadores de pools se ponen de acuerdo para censurar ciertas transacciones, o para intentar una reorganización, tienen el hashrate para intentarlo.

El contrapeso es que **los operadores de pools no son mineros**. El hashrate de un pool viene de mineros individuales que pueden cambiarse de pool cuando quieran. Si un pool empieza a portarse mal, los mineros pueden migrar a otro en cuestión de horas, y lo hacen. También hay trabajo en marcha para devolverles el poder a los mineros individuales: **Stratum V2** es una actualización del protocolo que permite que sean los mineros (y no los operadores del pool) quienes elijan qué transacciones entran en los bloques que están minando. Su despliegue ha sido lento, pero es la solución estructural.

Del lado del operador, la capa que de verdad gestiona las conexiones al pool, la distribución del trabajo y el monitoreo de cada ASIC es el [front-end de minería (en inglés)](/glossary/mining-front-end): para un aficionado con un solo ASIC es simplemente el firmware de fábrica; para un operador industrial que maneja miles, una plataforma dedicada de gestión de flota.

A octubre de 2026, la situación es incómoda pero no catastrófica. Consulta la [sección 8 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para una mirada más detenida a la centralización de la minería y a cómo está evolucionando en realidad.
