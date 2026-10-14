---
title: "Segunda capa"
slug: segunda-capa
draft: false
published: "2026-10-14"
shortDefinition: "Redes construidas sobre la cadena principal de Bitcoin, como Lightning o las sidechains, para ganar escalabilidad o funciones."
keyTakeaways:
  - "Alivia la carga de la cadena base para lograr pagos más rápidos y baratos"
  - "Ejemplos: los canales Lightning y las sidechains con peg"
  - "Tarde o temprano requiere una liquidación, o un peg-out, para conciliar los estados finales"
aliases:
  - "capa 2"
  - "layer 2"
  - "segundas capas"
sources:
  - { label: "Joseph Poon and Thaddeus Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments, draft 0.5.9.2 (January 14, 2016): a network of payment channels whose transfers happen off-blockchain and are enforceable on the blockchain against uncooperative parties; both parties must watch the blockchain or delegate a third party to do so; the design needs a malleability soft fork", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "Liquid docs - Technical Overview: an open-source Bitcoin sidechain with a two-way peg, federated consensus (Strong Federations) run by functionary operators, and Confidential Transactions that hide amounts and asset types", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Rootstock docs - Fundamentals: an open-source, EVM-compatible Bitcoin sidechain, merge-mined with Bitcoin, with blocks every 30 seconds for smart contracts", url: "https://dev.rootstock.io/concepts/fundamentals/" }
  - { label: "Bitcoin Optech - Statechains topic: an offchain system for delegating the ability to spend a UTXO from one user to the next; a delegated signer can always spend onchain without the operator's permission; Mercury Layer announced as an implementation in 2024", url: "https://bitcoinops.org/en/topics/statechains/" }
  - { label: "Bitcoin Optech - Ark protocol topic: many users share onchain UTXOs through trees of pre-signed offchain transactions built in rounds with an Ark operator; VTXOs expire under an absolute timelock and must be refreshed; users can exit unilaterally", url: "https://bitcoinops.org/en/topics/ark/" }
  - { label: "Bitcoin Optech - Ecash topic: a mint issues blind-signed tokens so it cannot learn who paid whom; users need to trust the mint to store their money and honor redemptions", url: "https://bitcoinops.org/en/topics/ecash/" }
  - { label: "BIP 300 (Draft) - Hashrate Escrows: a layer whose withdrawals back to Bitcoin are governed by proof-of-work instead of a federation", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
relatedTerms:
  - atomic-swap
  - layer-1
  - lightning-channel
  - lightning-network
  - liquid-network
  - off-chain
  - payment-channel
  - sidechain
  - state-channel
liveWidget: ~
translationOf: second-layer
sourceHash: "7b8320c82658"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Se llama "segunda capa" (o "capa 2") a cualquier protocolo construido encima de la cadena base de Bitcoin que procesa transacciones fuera de la cadena principal y que, al final, se liquida en ella. El objetivo es sumar capacidad, velocidad o funciones sin cambiar la capa base, y sin cargarla de trabajo.

Los principales diseños de segunda capa para Bitcoin:

- **[Lightning Network](/es/glosario/lightning-network).** Canales de pago off-chain asegurados por scripts de Bitcoin, que solo se hacen cumplir en la cadena si una de las partes no juega limpio. Pagos instantáneos y baratos; liquidación on-chain periódica. Es la segunda capa de Bitcoin más conocida.
- **[Sidechains](/es/glosario/sidechain)** (cadenas laterales) como Liquid y Rootstock (RSK). Cadenas de bloques (blockchains) separadas, ancladas a Bitcoin mediante un peg (anclaje) federado o de otro tipo. Suelen usarse para funciones que Bitcoin no tiene (transacciones confidenciales en Liquid, contratos inteligentes al estilo de Ethereum en Rootstock).
- **Statechains.** Transferencia off-chain del derecho a gastar un UTXO (una salida de transacción no gastada) de un usuario al siguiente, coordinada por un operador, en la que quien lo tiene en ese momento siempre puede liquidarlo en la cadena sin permiso del operador. Mercury Layer, anunciado en 2024, es una implementación.
- **Ark.** Un diseño más nuevo en el que muchos usuarios y un operador comparten UTXOs on-chain a través de árboles de transacciones off-chain prefirmadas, construidos en rondas periódicas. Los usuarios tienen "UTXOs virtuales" que caducan si no se renuevan en una ronda nueva, y siempre pueden salir a la cadena por su cuenta.
- **E-cash chaumiano** (Fedimint, Cashu). Mints (emisores) que guardan bitcoin y emiten tokens con firma ciega, de modo que el mint no puede ver quién le pagó a quién; los tokens se canjean con el mint por sats. Los usuarios cambian la autocustodia por una privacidad fuerte y pagos instantáneos, y tienen que confiar en el mint.
- **Drivechain (propuesta).** Un diseño de sidechain del BIP 300 en el que los retiros de vuelta a Bitcoin se rigen por la prueba de trabajo (proof-of-work) de los mineros y no por una federación. Sigue siendo un borrador; no está activado.

La lógica que comparten todas las segundas capas: la cadena base de Bitcoin es la capa de liquidación global, segura, inmutable y cara de usar en volumen. Las segundas capas absorben la carga transaccional del día a día y solo liquidan en la cadena base cuando hace falta.

Cada diseño cede algo distinto. Lightning no necesita un tercero de confianza, pero exige administrar la liquidez y que alguien (tú, o un tercero en quien delegues) vigile la cadena por si la contraparte intenta hacer trampa. Las sidechains son más fáciles de usar, pero añaden una suposición de confianza: la federación que custodia el peg. Los mints de e-cash son cómodos, pero obligan a confiar en el mint.

El modelo de base + capa es la forma en que Bitcoin escala. La capa base no tiene que procesar cada café que alguien compra; tiene que liquidar el estado final. En [Capa 1](/es/glosario/capa-1) está la visión de la cadena base sobre la que se construye todo esto.
