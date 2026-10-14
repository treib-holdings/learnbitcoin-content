---
title: "Minero"
slug: minero
draft: false
published: "2026-10-13"
shortDefinition: "Un participante que usa hardware especializado para encontrar hashes de bloque válidos, con lo que asegura la red y gana recompensas de bloque."
keyTakeaways:
  - "Busca un hash de bloque que cumpla con la dificultad de la red"
  - "Recibe BTC recién emitidos (el subsidio) más las comisiones de transacción"
  - "En el panorama actual de la minería, sobre todo operaciones de ASICs a gran escala"
aliases:
  - "mineros"
  - "minero de Bitcoin"
  - "mineros de Bitcoin"
sources:
  - { label: "Bitcoin.org Developer Guide - Mining: mining software builds a block header and sends it to an ASIC, which iterates through every nonce; solo mining keeps the whole block reward and fees with high variance, pooled mining shares them out for smaller, steadier payouts", url: "https://developer.bitcoin.org/devguide/mining.html" }
  - { label: "Bitcoin.org Developer Reference - Block Chain, serialized blocks: the transaction fees and block subsidy together are called the block reward; a coinbase transaction that spends more than the block reward is invalid", url: "https://developer.bitcoin.org/reference/block_chain.html" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 5 (2008): nodes accept a block only if all transactions in it are valid and not already spent", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Cambridge Centre for Alternative Finance - Cambridge Digital Mining Industry Report (April 2025): ASICs ushered in industrial-scale mining in specialised data centres; electricity is more than 80% of miners' cash operating expenses; miners are drawn to regions rich in hydropower and wind and tap stranded energy and flared natural gas; China's clampdown altered the global mining landscape", url: "https://www.jbs.cam.ac.uk/wp-content/uploads/2025/04/2025-04-cambridge-digital-mining-industry-report.pdf" }
  - { label: "Sixth Tone - After Inner Mongolia Bitcoin Ban, Sichuan Mulls Mining Shutdown (May 28, 2021): many miners flocked to Sichuan hoping to cash in on the coming wet season's cheap hydropower", url: "https://www.sixthtone.com/news/1007595" }
  - { label: "mempool.space API - mining pool shares over the last year (read 13 October 2026: 52,377 blocks; Foundry USA 28.2%, AntPool 18.1%, F2Pool 12.6%, ViaBTC 9.7%; unknown 0.5%; the solo services Solo CK, Public Pool, Braiins Solo and SoloPool.com found 23 blocks between them)", url: "https://mempool.space/api/v1/mining/pools/1y" }
relatedTerms:
  - coinbase-transaction
  - cpu-mining
  - difficulty-retargeting
  - gui-miner
  - hash
  - hash-rate
  - merged-mining
  - miner-capitulation
  - mining
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-rig
  - mining-software
  - mining-subsidy
  - revenue-ths
liveWidget: ~
translationOf: miner
sourceHash: "bf8d161c75e9"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Un minero es cualquiera que corre hardware que participa en la [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work) de Bitcoin: genera [encabezados de bloque](/es/glosario/encabezado-del-bloque) candidatos y les calcula el hash, intentando encontrar uno lo bastante válido para proponérselo a la red. A cambio, el minero cobra la [recompensa de bloque](/es/glosario/recompensa-de-bloque): BTC recién emitidos más todas las comisiones de las transacciones que incluye.

En la práctica, los "mineros" de hoy son sobre todo operaciones industriales que corren bodegas enteras de hardware ASIC diseñado para esto, instaladas donde la electricidad sea más barata (la energía hidroeléctrica de Sichuan en la temporada de lluvias, cuando China todavía permitía minar; el gas que sobra y se quema en los pozos petroleros; energía renovable sin salida a la red y sin otro comprador). El hardware es especializado; la economía, de márgenes mínimos; y como la electricidad suele representar más del 80% de los costos operativos en efectivo de un minero, los márgenes viven o mueren según el precio de un kilovatio-hora.

Todavía hay actores más pequeños. Los mineros solitarios de vez en cuando ganan un bloque por su cuenta, con probabilidades de lotería; los servicios de minería en solitario que los atienden se llevan un par de docenas de bloques al año. Los aficionados corren equipos pequeños por la experiencia. Pero la mayor parte del hashrate en operación (el poder de cómputo de la red) pasa por [pools de minería](/es/glosario/pool-de-mineria): agregadores que juntan a muchos contribuyentes pequeños para que cada uno reciba pagos regulares en lugar de esperar años a encontrar un bloque por su cuenta.

Los mineros no mandan en Bitcoin. El protocolo lo hace cumplir cada nodo completo, no los mineros. Los mineros pueden elegir *qué transacciones válidas* incluir en sus bloques, pero no pueden cambiar las reglas. Cualquier bloque que viole el consenso (más subsidio del permitido, una firma inválida, etcétera) es rechazado por todos los nodos honestos del planeta.

Consulta el [tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para ver el mecanismo completo, y [Pool de minería](/es/glosario/pool-de-mineria) para las preocupaciones sobre centralización en torno a cómo se organizan los mineros en realidad.
