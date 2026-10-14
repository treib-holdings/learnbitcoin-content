---
title: "Hashrate"
slug: hashrate
aliases:
  - "hash rate"
avoid:
  - "tasa de hash"
  - "velocidad de hash"
draft: false
published: "2026-10-14"
shortDefinition: "La capacidad de hash conjunta de todos los mineros de la red, medida en hashes por segundo (TH/s, PH/s, EH/s)."
keyTakeaways:
  - "Muestra el caudal total de prueba de trabajo que protege a Bitcoin"
  - "Se correlaciona con la dificultad de minería y con la seguridad de la red"
  - "Sus cambios reflejan mejoras en el hardware o la economía de la electricidad"
sources:
  - { label: "mempool.space API - daily network hash rate since 2009 (June to August 2026 average about 9.1 x 10^20 H/s)", url: "https://mempool.space/api/v1/mining/hashrate/all" }
  - { label: "blockchain.com - network hash rate chart", url: "https://www.blockchain.com/explorer/charts/hash-rate" }
  - { label: "Bitcoin Wiki - non-specialized hardware comparison (CPU and GPU mining speeds)", url: "https://en.bitcoin.it/wiki/Non-specialized_hardware_comparison" }
relatedTerms:
  - asic-application-specific-integrated-circuit
  - competitive-block-propagation
  - competitive-mining
  - cpu-mining
  - hash
  - hash-rate-derivative
  - hashlet
  - miner
  - mining-algorithm
  - mining-colocation
  - revenue-ths
sameAs:
  - "https://en.bitcoin.it/wiki/Hash_per_second"
liveWidget: ~
translationOf: hash-rate
sourceHash: "492234e071b2"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

El hashrate (el poder de cómputo de la red) es toda la capacidad de cálculo que se dedica al rompecabezas de [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work) de Bitcoin, medida en [hashes](/es/glosario/hash) por segundo. A mediados de 2026 (de junio a agosto), el hashrate global de Bitcoin promedió unos **910 EH/s**: 910 exahashes por segundo, o alrededor de 9 x 10^20 hashes cada segundo.

Las unidades suben rápido:

- 1 **KH/s** = mil hashes por segundo
- 1 **MH/s** = un millón (los procesadores de computadora de escritorio de 2010 minaban a entre 1 y 20 MH/s, más o menos, y las tarjetas gráficas de 2011 a unos cuantos cientos)
- 1 **GH/s** = mil millones (un ASIC de los primeros)
- 1 **TH/s** = un billón (un solo chip ASIC moderno, más o menos)
- 1 **PH/s** = mil billones (una granja de minería pequeña)
- 1 **EH/s** = un trillón (una operación industrial grande)

El hashrate de Bitcoin creció unos **14 órdenes de magnitud** entre 2009, cuando toda la red promediaba unos pocos millones de hashes por segundo, y mediados de 2026. Ese crecimiento es exactamente lo que el [ajuste de dificultad](/es/glosario/ajuste-de-dificultad) absorbe para mantener el tiempo entre bloques cerca de los 10 minutos.

El hashrate importa porque es el presupuesto de seguridad de Bitcoin. Para reescribir la historia, un atacante tiene que superar al resto de la red. A unos 900 EH/s, eso significa comprar, alimentar y operar más hardware de minería que todos los demás mineros del planeta juntos, durante todo el tiempo que dure el ataque. Eso es lo que *compra* la prueba de trabajo.

La gráfica que más vas a ver es la de "hashrate a lo largo del tiempo", que por lo general sube de izquierda a derecha, con caídas ocasionales durante eventos importantes (la prohibición en China de 2021, las capitulaciones de los mercados bajistas).
