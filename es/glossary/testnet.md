---
title: "Testnet"
slug: testnet
aliases:
  - "red de pruebas"
  - "testnet3"
  - "testnet4"
draft: false
published: "2026-10-15"
shortDefinition: "Un clon de la red Bitcoin con monedas sin valor, que los desarrolladores usan para probar código sin arriesgar BTC reales."
keyTakeaways:
  - "Entorno público para experimentar sin riesgo con funciones nuevas"
  - "Los BTC de testnet no valen nada a propósito, para evitar la especulación"
  - "Sufre interrupciones de vez en cuando, porque los ajustes de dificultad varían muchísimo"
sources:
  - { label: "BIP-94 - Testnet 4 (assigned 2024-05-27, status Deployed): a new test network to replace Testnet 3; keeps the 20-minute exception, under which a block more than 20 minutes after the previous one must use minimum difficulty except the first block of a difficulty period; fixes block storms and time warp; own genesis block and message start; quotes the proposal that testnet3 coins were being bought and sold and used for scammy airdrops", url: "https://github.com/bitcoin/bips/blob/master/bip-0094.mediawiki" }
  - { label: "Bitcoin Core 28.0 release notes (October 2024): support for Testnet4 as specified in BIP94 added, selected with -testnet4; the intention is to phase out Testnet3 in an upcoming version", url: "https://bitcoincore.org/en/releases/28.0/" }
  - { label: "Bitcoin Core - src/chainparamsbase.cpp (master, October 2026): the -testnet option still selects the testnet3 chain, and its help text says support for testnet3 is deprecated and will be removed in an upcoming release, pointing users to -testnet4", url: "https://github.com/bitcoin/bitcoin/blob/master/src/chainparamsbase.cpp" }
  - { label: "Bitcoin Wiki - Testnet: four generations of testnet; testnet2 was the first reset, because people were starting to trade testnet coins for real money; testnet3 came with the 0.7 release and a new rule for the difficulty problem; if no block is found in 20 minutes the difficulty resets to the minimum for a single block", url: "https://en.bitcoin.it/wiki/Testnet" }
  - { label: "bitcoin.org Developer Examples - Testing Applications: on testnet the satoshis spent have no real-world value and some restrictions such as standard transaction checks are relaxed; a community faucet gives free testnet satoshis; regtest mode creates a private block chain where you choose when blocks are created", url: "https://developer.bitcoin.org/examples/testing.html" }
  - { label: "BIP-325 - Signet (assigned 2019-03-20): testnet is notoriously unreliable, with huge block reorgs, long gaps between blocks and sudden bursts; signet aims for a predictable amount of unreliability and suits integration testing by organizations such as exchanges", url: "https://github.com/bitcoin/bips/blob/master/bip-0325.mediawiki" }
relatedTerms:
  - bitcoin-core
  - block-subsidy
  - coinbase-transaction
  - genesis-block
  - mainnet
  - signet
liveWidget: ~
translationOf: testnet
sourceHash: "48437c4c3353"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

Testnet es una red pública del protocolo Bitcoin que corre las reglas de consenso de Bitcoin con monedas que, a propósito, no valen nada. Existe para que desarrolladores y operadores prueben billeteras, transacciones y configuraciones de nodo sin arriesgar BTC reales de la [mainnet (en inglés)](/glossary/mainnet), la red principal.

Hoy la testnet corre como **testnet4** (el tercer reinicio, lanzado en 2024). Las versiones anteriores (testnet, testnet2, testnet3) se reemplazaron con cadenas nuevas cuando sus monedas empezaron a venderse por dinero real o cuando sus rarezas de dificultad las volvieron inservibles; Bitcoin Core todavía incluye testnet3, pero la marca como obsoleta y planea retirarla en una versión próxima. La testnet4 actual tiene:

- **Monedas gratis de los faucets.** Varios sitios reparten a cuentagotas pequeñas cantidades de BTC de testnet a quien las pida. En la práctica no valen nada.
- **Un bloque génesis y un identificador de red (network magic) propios.** Las cadenas de testnet no son la mainnet: las transacciones y las direcciones de una no sirven en la otra.
- **Una regla de dificultad modificada.** Si pasan 20 minutos sin un bloque, el siguiente usa la dificultad mínima, para que la cadena no se detenga en periodos de poca actividad (el primer bloque de cada periodo de dificultad sí debe minarse a la dificultad real, y testnet4 cambió el cálculo del ajuste de dificultad para que la excepción ya no pueda desatar las tormentas de bloques que plagaron testnet3). La mainnet no tiene ninguna válvula de escape así.

Los inconvenientes de testnet:

- **Es caótica.** La dificultad oscila a lo loco, los bloques llegan en ráfagas o en sequías, y hay quien la llena de spam. No puedes usar el comportamiento de testnet para predecir el de la mainnet.
- **Los BTC de prueba a veces han llegado a venderse.** Aunque oficialmente no valen nada, las monedas de testnet se han comprado y vendido, y hay estafadores que montaron esquemas de airdrop sobre la cadena; esa compraventa fue justamente lo que obligó al primer reinicio.
- **No sirve para pruebas delicadas de seguridad.** Si quieres probar una actualización de alto riesgo en condiciones hostiles realistas, [Signet (en inglés)](/glossary/signet) suele ser mejor opción.

Para el desarrollo informal de todos los días ("¿funciona mi billetera?, ¿puedo transmitir una transacción?, ¿cómo se ve el manejo de comisiones?"), testnet está bien. Para cualquier cosa más seria, mira Signet o una red regtest privada.
