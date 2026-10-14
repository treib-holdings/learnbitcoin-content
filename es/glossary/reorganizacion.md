---
title: "Reorganización (reorg)"
slug: reorganizacion
draft: false
published: "2026-10-13"
shortDefinition: "Cuando aparece una cadena con más prueba de trabajo acumulada, los nodos abandonan su punta actual y se pasan a ella, y los bloques de la punta vieja quedan obsoletos."
keyTakeaways:
  - "Ocurre si una cadena que iba atrás supera en prueba de trabajo a la cadena principal"
  - "Puede revertir transacciones recientes incluidas en bloques de la cadena abandonada"
  - "Las reorganizaciones cortas son normales; las profundas señalan posibles ataques o divisiones de la cadena"
aliases:
  - "reorg"
  - "reorgs"
  - "reorganización"
  - "reorganizaciones"
  - "reorganización de la cadena"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System (2008): nodes always consider the longest chain to be the correct one and keep extending it; the section 11 table gives an attacker with 10% of the hashrate a 0.024% chance of catching up once six blocks have been added", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Core - src/validation.cpp: FindMostWorkChain returns the tip of the chain with the most work in it; MaybeUpdateMempoolForReorg adds transactions from disconnected blocks back to the mempool", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "bitcoin-data/stale-blocks - public dataset of stale blocks (28 in 2022, 70 in 2023, 49 in 2024, 93 in 2025, counted by header timestamp, as of October 13, 2026)", url: "https://github.com/bitcoin-data/stale-blocks" }
  - { label: "mempool.space - block 74,691 (08:20 UTC, August 16, 2010), where the patched chain overtook the chain carrying the value overflow block 74,638, a 53-block reorganization", url: "https://mempool.space/block/00000000005c22d199706df1c38b38d76f8401920dcbe91edf3417f8847da707" }
  - { label: "BIP 50 - March 2013 Chain Fork Post-Mortem: a block that 0.8 nodes accepted and pre-0.8 nodes rejected split the chain; once majority hashpower returned to the pre-0.8 chain, the 0.8 nodes reorganised to it", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "#bitcoin-dev IRC log for March 12, 2013 (buildingbitcoin.org, archived): nodes on the 0.8 chain logged REORGANIZE: Disconnect 25 blocks at 06:22 UTC", url: "https://web.archive.org/web/20200921053434/https://buildingbitcoin.org/bitcoin-dev/log-2013-03-12.html" }
relatedTerms:
  - block-propagation
  - blockchain
  - chain-split
  - corrupted-chain-state
  - double-spend
  - double-spend-relay
  - fork
  - fork-detection
  - fork-watcher
  - full-validation
  - race-attack
  - replay-attack
  - stale-block
  - transaction-finality
liveWidget: ~
translationOf: reorg-reorganization
sourceHash: "5a6d5d31d421"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una reorg, o **reorganización** de la cadena, es lo que pasa cuando un [nodo](/es/glosario/nodo) de Bitcoin se entera de una cadena con más trabajo acumulado que la que venía siguiendo (a grandes rasgos, una cadena más larga) y se pasa a ella. Los bloques que tenía en la punta anterior quedan [obsoletos](/es/glosario/bloque-obsoleto); las transacciones que contenían vuelven al [mempool](/es/glosario/mempool), salvo que también estén en la cadena nueva.

La regla que provoca las reorganizaciones es "la cadena válida más larga gana"; más precisamente, gana la cadena con más [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work) acumulada. Cuando dos mineros encuentran bloques casi a la misma altura, la red se divide por un momento. En cuanto se mina el siguiente bloque de un lado, ese lado tiene más trabajo acumulado, y los nodos que estaban del otro lado se reorganizan hacia él.

Hay dos tipos:

- **Reorganizaciones cortas (de 1 o 2 bloques).** Rutina. Ocurren decenas de veces al año (la red registró entre 28 y 93 bloques obsoletos al año de 2022 a 2025) y solo afectan a transacciones que apenas acababan de confirmarse. Justo por eso existe la regla de las 6 confirmaciones para transferencias de alto valor: después de seis bloques, la probabilidad de que una reorganización revierta tu transacción es ínfima, salvo un ataque coordinado masivo. Según la propia tabla del whitepaper, un atacante con el 10% del hashrate (el poder de cómputo de la red) tiene cerca de un 0.02% de probabilidad de alcanzar la cadena.
- **Reorganizaciones profundas (de 3 bloques o más).** Raras y preocupantes. Las reorganizaciones más profundas de la red principal de Bitcoin (mainnet) vinieron de errores de software que dividieron la red: 53 bloques en agosto de 2010, cuando se abandonó la cadena que llevaba el bloque del desbordamiento de valor (value overflow), y 25 bloques en marzo de 2013, cuando los nodos de la versión 0.8 volvieron a la cadena que las versiones anteriores podían seguir. Una reorganización profunda hoy sería un suceso serio que valdría la pena investigar.

La implicación económica: la [irreversibilidad de la transacción](/es/glosario/irreversibilidad-de-la-transaccion) (finality) en Bitcoin es probabilística, no binaria; una transacción solo es tan definitiva como el trabajo que se ha minado encima de ella. Una confirmación es "probablemente suficiente para montos pequeños". Seis confirmaciones son "suficientes para casi todo". Cientos equivalen a "permanente a todos los efectos prácticos". Consulta [Doble gasto](/es/glosario/doble-gasto) para el ataque que las reorganizaciones dificultan, y el tema a fondo sobre [minería (en inglés)](/rabbit-hole/mining) para la economía.

Para la historia completa de la reorganización de 25 bloques de marzo de 2013, consulta [La bifurcación de la cadena de 2013 (en inglés)](/rabbit-hole/2013-chain-fork); para la de 53 bloques de agosto de 2010, consulta el [análisis post mortem del bug de inflación (en inglés)](/rabbit-hole/inflation-bug-postmortem).
