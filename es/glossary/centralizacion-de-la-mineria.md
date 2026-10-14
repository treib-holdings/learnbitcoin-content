---
title: "Centralización de la minería"
slug: centralizacion-de-la-mineria
aliases:
  - "centralización minera"
  - "centralización de minería"
  - "centralización del minado"
  - "mining centralization"
draft: false
published: "2026-10-15"
shortDefinition: "La preocupación de que buena parte del hashrate de Bitcoin se concentre en unos pocos pools grandes, con la amenaza de un ataque del 51%."
keyTakeaways:
  - "Los pools grandes podrían superar el 50% del hashrate de la red si nadie los vigila"
  - "Los peligros incluyen el doble gasto, la censura o la pérdida de confianza"
  - "Soluciones: vigilancia de los usuarios, cambio de pool o protocolos de pool descentralizados"
sources:
  - { label: "mempool.space API - mining pool shares over the last year (live; on 14 October 2026: Foundry USA 28.2%, AntPool 18.1%, F2Pool 12.6%, ViaBTC 9.7% of 52,370 blocks)", url: "https://mempool.space/api/v1/mining/pools/1y" }
  - { label: "Cambridge Centre for Alternative Finance - Cambridge Digital Mining Industry Report: Global Operations, Sentiment, and Energy Use (April 2025; US 75.4% of reported activity among 49 surveyed firms, a sample the report says may overstate the US; Bitmain 82.0%, MicroBT 15.0%, Canaan 2.1% of the ASIC market)", url: "https://www.jbs.cam.ac.uk/wp-content/uploads/2025/04/2025-04-cambridge-digital-mining-industry-report.pdf" }
  - { label: "Cambridge Judge Business School - New data reveals timeline of China's bitcoin mining exodus: China's share of hash rate fell from 75.5% in September 2019 to 46% in April 2021, before the June 2021 crackdown (15 July 2021)", url: "https://www.jbs.cam.ac.uk/2021/new-data-reveals-timeline-of-chinas-bitcoin-mining-exodus/" }
  - { label: "Andreas M. Antonopoulos and David A. Harding - Mastering Bitcoin, chapter 12: a majority (51%) attack can fork the chain, double-spend the attacker's own transactions or deny service to specific transactions; a managed pool's operator could direct the pool's effort to double-spend (GitHub develop branch, accessed 2026-10-14)", url: "https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch12_mining.adoc" }
  - { label: "Stratum V2 specification - Job Declaration Protocol: coordinates custom work so pools are not unilaterally imposing work on miners; pools that opt in are only responsible for accounting shares and distributing rewards (accessed 2026-10-14)", url: "https://github.com/stratum-mining/sv2-spec/blob/main/06-Job-Declaration-Protocol.md" }
  - { label: "0xB10C - Six OFAC-sanctioned transactions missing: four transactions missing from F2Pool blocks were likely filtered; a co-founder confirmed the filtering and said it would be disabled; miners can switch to a different pool (20 November 2023, updated 23 November 2023)", url: "https://b10c.me/observations/08-missing-sanctioned-transactions/" }
relatedTerms:
  - competitive-block-propagation
  - competitive-mining
  - decentralization
  - energy-fud
  - geographic-mining-distribution
  - hidden-miner-tax
  - miner-capitulation
  - miner-extractable-value-mev
  - mining
  - mining-pool
  - mining-algorithm
  - retail-mining
liveWidget: ~
translationOf: mining-centralization
sourceHash: "7ff5af478c40"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

La centralización de la minería es la preocupación de que el [hashrate](/es/glosario/hashrate) de Bitcoin esté concentrado en muy pocas manos, lo que socava la [descentralización](/es/glosario/descentralizacion) de la que Bitcoin depende.

La realidad estructural en 2026:

- **Unos pocos [pools de minería](/es/glosario/pool-de-mineria) coordinan la mayor parte del hashrate.** En el año que terminó a mediados de octubre de 2026, Foundry USA, AntPool, F2Pool y ViaBTC minaron entre los cuatro cerca del 69% de todos los bloques.
- **Unos pocos fabricantes de [ASIC](/es/glosario/asic) suministran la mayor parte del hardware.** La encuesta de la industria que Cambridge publicó en 2025 situó a Bitmain en el 82% del mercado de ASICs, a MicroBT en el 15% y a Canaan en el 2%.
- **Unas pocas jurisdicciones alojan la mayor parte de la minería.** Estados Unidos es la mayor: el 75% del hashrate que reportaron las 49 empresas de la encuesta de Cambridge de 2025, una muestra que, según el propio Cambridge, puede sobrestimar a Estados Unidos. La prohibición de China en 2021 cambió la geografía de manera sustancial; en septiembre de 2019 el mapa minero de Cambridge había situado el 75.5% del hashrate mundial en China.

Qué significa esto en la práctica:

- **Un ataque coordinado es posible en teoría.** Pools que entre todos controlen más del 50% del hashrate podrían intentar reorganizar bloques recientes, censurar transacciones concretas o gastar dos veces sus propias salidas. Nada de esto ha ocurrido a gran escala en Bitcoin, pero la capacidad existe.
- **Existe un punto único de presión.** Los gobiernos que quieran censurar transacciones de Bitcoin podrían, en principio, presionar a los operadores de pools de su jurisdicción para que obedezcan. Ya se ha visto en formas más suaves: a fines de 2023 se descubrió que F2Pool dejaba fuera de sus bloques transacciones que gastaban desde una dirección sancionada por la OFAC; un cofundador lo confirmó y el pool dijo que, por ahora, dejaría de hacerlo.

Qué lo contrarresta:

- **Los pools no son los mineros.** El hashrate de un pool viene de mineros individuales que pueden apuntar sus máquinas a otro pool en cualquier momento. Un pool al que descubren portándose mal le da a cada uno de ellos una razón para irse.
- **El avance de Stratum V2.** La declaración de trabajo (Job Declaration) del nuevo protocolo entre pool y minero permite que los mineros armen sus propias plantillas de bloque, y deja al pool solo la tarea de contabilizar las "shares" y pagar. La adopción es gradual, pero va en la dirección correcta.
- **La dispersión geográfica mejoró.** Comparada con 2019, cuando unas tres cuartas partes del hashrate estaban en China, la red está repartida en más países, aunque Estados Unidos concentre ahora, por sí solo, una porción grande.
- **El hardware de minería es fungible.** Los mineros pueden dirigir su hashrate a distintos pools, en distintas jurisdicciones, con poca anticipación, y lo hacen.

La evaluación honesta: la centralización de la minería es una preocupación real, con modos de falla reales, pero los contrapesos estructurales también son reales. Es un tema que vale la pena vigilar, que vale la pena combatir con la adopción de Stratum V2 y con el escrutinio de los operadores de pools, y por el que no vale la pena entrar en pánico. Consulta la [sección 8 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para una mirada más detenida.

Para una noche en la que el operador de un solo pool pudo decidir cuál de dos cadenas sobrevivía, y lo que eso dice en ambos sentidos, lee [La bifurcación de la cadena de 2013](/es/a-fondo/bifurcacion-de-2013).
