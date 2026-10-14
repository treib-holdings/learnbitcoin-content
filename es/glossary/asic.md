---
title: "ASIC (circuito integrado de aplicación específica)"
slug: asic
draft: false
published: "2026-10-14"
shortDefinition: "Un chip de hardware especializado, diseñado para sobresalir en una sola tarea; los ASICs de Bitcoin no hacen otra cosa que el hash SHA-256 que se usa en la minería."
keyTakeaways:
  - "Chips hechos a la medida para minar Bitcoin"
  - "Impulsan operaciones de minería a escala industrial"
  - "Generan preocupación por la centralización y el consumo de energía"
sources:
  - { label: "Michael Bedford Taylor - Bitcoin and the Age of Bespoke Silicon (2013): CPU, GPU, FPGA and first ASIC miners", url: "https://cseweb.ucsd.edu/~mbtaylor/papers/bitcoin_taylor_cases_2013.pdf" }
  - { label: "Michael Bedford Taylor - The Evolution of Bitcoin Hardware (IEEE Computer, September 2017)", url: "https://cseweb.ucsd.edu/~mbtaylor/papers/Taylor_Bitcoin_IEEE_Computer_2017.pdf" }
  - { label: "Bitmain support - S21 Pro specification (234 TH/s typical, 3,510 W, 15 J/TH)", url: "https://support.bitmain.com/hc/en-us/articles/31321354157593-S21-Pro-Specification" }
  - { label: "Cambridge Centre for Alternative Finance - Cambridge Digital Mining Industry Report (April 2025): 138 TWh, about 0.54% of global electricity; hardware market shares; 51% attack cost", url: "https://www.jbs.cam.ac.uk/wp-content/uploads/2025/04/2025-04-cambridge-digital-mining-industry-report.pdf" }
relatedTerms:
  - asic-resistance
  - asicboost
  - cpu-mining
  - hash-rate
  - miner
  - mining-algorithm
  - mining-rig
  - mining-software
sameAs:
  - "https://en.wikipedia.org/wiki/Application-specific_integrated_circuit"
  - "https://www.wikidata.org/wiki/Q217302"
  - "https://en.bitcoin.it/wiki/ASIC"
liveWidget: ~
aliases:
  - "ASIC"
  - "ASICs"
translationOf: asic-application-specific-integrated-circuit
sourceHash: "6d6cfa858a45"
sourceCommit: "375acfd"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Un ASIC (**A**pplication-**S**pecific **I**ntegrated **C**ircuit, circuito integrado de aplicación específica) es un chip diseñado para hacer exactamente una cosa extremadamente bien. Para Bitcoin, esa única cosa es calcular [hashes](/es/glosario/hash) SHA-256. Una máquina de minería empaqueta muchos de estos chips en una sola caja. Un modelo lanzado en 2024 tiene una capacidad nominal de 234 billones de hashes por segundo con un consumo de 3,510 vatios. Un procesador (CPU) de escritorio de gama alta de 2011, un Intel Core i7-990X de seis núcleos con overclock, llegaba como máximo a unos 33 millones de hashes por segundo. La máquina de 2024 es unos siete millones de veces más rápida.

La progresión del hardware de Bitcoin fue así:

- **2009-2010:** minería con CPU. Cualquiera con una laptop podía encontrar bloques.
- **2010-2013:** minería con GPU. Los primeros programas públicos de minería con GPU salieron en septiembre y octubre de 2010, y los aficionados se pasaron a las tarjetas gráficas. Una tarjeta de punta de la época calculaba hashes entre 5 y 20 veces más rápido que aquel procesador de gama alta.
- **2011-2013:** minería con FPGA. Los mineros adoptaron estos chips reconfigurables en 2011. Costaban más que las GPUs para el mismo hashrate, pero eran hasta unas cinco veces más eficientes en energía. Los ASICs llegaron antes de que las FPGAs pudieran reemplazar a las GPUs.
- **De 2013 en adelante:** minería con ASIC. Los primeros chips específicos para SHA-256 se lanzaron en enero de 2013. Dejaron en números rojos primero a la minería con GPU y luego a la de FPGA, y cada nueva generación de ASICs volvió obsoleta a la anterior.

La minería con ASIC convirtió la minería de Bitcoin de un pasatiempo en una industria. El hashrate (el poder de cómputo de la red) se trasladó a instalaciones de escala comercial, que se agrupan donde la electricidad es más barata, y se acabó la era en que cualquiera podía minar con ganancia desde una computadora de casa.

Qué gana Bitcoin con esto:

- **Un presupuesto de seguridad enorme.** Minar de forma competitiva exige flotas industriales de máquinas que cuestan miles de dólares cada una. Un atacante tiene que comprar y operar ese hardware contra toda la industria minera mundial para amenazar el consenso. En un cálculo de ejemplo publicado en abril de 2025, investigadores de Cambridge estimaron que un ataque del 51% requeriría unos 1.74 millones de máquinas del modelo de 2024 descrito arriba, a $6,318 cada una (dólares estadounidenses), es decir, unos $11,000 millones antes de contar la electricidad.
- **Difíciles de reutilizar.** Los ASICs de Bitcoin literalmente no pueden destinarse a ninguna otra cosa. No sirven más que para minar Bitcoin (u otras cadenas SHA-256). Esa especialización significa que la inversión en seguridad queda *comprometida* de una forma en que el hardware genérico no lo está.

Lo que cuesta:

- **Presión hacia la centralización.** La oferta de ASICs está dominada por unos pocos fabricantes. Entre los mineros encuestados para el informe de Cambridge de 2025, las máquinas de Bitmain representaban el 82% del hardware por hashrate, las de MicroBT el 15% y las de Canaan el 2.1%. La concentración geográfica de la minería sigue a los precios de la electricidad.
- **Huella energética.** Cambridge estimó el consumo de la minería en unos 138 TWh al año a junio de 2024, alrededor del 0.5% de la electricidad mundial. Los mineros que Cambridge encuestó obtenían el 52.4% de su energía de fuentes renovables y nucleares, con el gas natural como la mayor fuente individual, con un 38.2%.

Lee [Minería](/es/glosario/mineria) para el panorama general y [Centralización de la minería](/es/glosario/centralizacion-de-la-mineria) para las preocupaciones estructurales.
