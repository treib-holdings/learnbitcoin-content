---
title: "Off-chain"
slug: off-chain
draft: false
published: "2026-10-14"
shortDefinition: "Cualquier actividad relacionada con Bitcoin que no se liquida directamente en la cadena de bloques (blockchain) principal, incluidos los canales Lightning, las sidechains y la contabilidad interna de los custodios."
keyTakeaways:
  - "Reduce el uso de la red principal; ahorra espacio en el bloque y comisiones"
  - "Va desde la confianza minimizada (Lightning) hasta la confianza total en un tercero (custodial)"
  - "Lo off-chain de confianza minimizada sigue anclando las disputas en la capa base"
aliases:
  - "fuera de la cadena"
sources:
  - { label: "Poon and Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (January 2016): channels perpetually update balances and defer what is broadcast to the blockchain; payments are real bitcoin exchanged off-chain, enforceable on-chain against uncooperative counterparties", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "BOLT #7 - P2P Node and Channel Discovery: a channel's fee is fee_base_msat, in millisatoshi, plus fee_proportional_millionths", url: "https://github.com/lightning/bolts/blob/master/07-routing-gossip.md" }
  - { label: "Liquid Network documentation - Technical overview: Liquid is a sidechain of Bitcoin with a two-way peg, secured by functionary operators under a federated consensus model", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "BIP-300 - Hashrate Escrows, Consensus layer (2017): a type of L2 whose withdrawals to L1 are governed by proof-of-work instead of a federation", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
  - { label: "Coinbase Developer Platform - Send crypto, transfer APIs: funds can be sent to a network address or to a recipient's email; no transaction fees are required for off-blockchain cryptocurrency transactions", url: "https://docs.cdp.coinbase.com/coinbase-app/transfer-apis/send-crypto" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 7 (2008): blocks are generated every 10 minutes", url: "https://bitcoin.org/bitcoin.pdf" }
relatedTerms:
  - layer-1
  - lightning-network
  - second-layer
  - sidechain
  - state-channel
liveWidget: ~
translationOf: off-chain
sourceHash: "274b3425217a"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

"Off-chain" es el término comodín para cualquier actividad relacionada con Bitcoin que no produce una transacción on-chain. La capa base sigue siendo la fuente de verdad definitiva; los sistemas off-chain llevan el estado, los saldos o los compromisos en otra parte y (en los diseños de confianza minimizada) se anclan de vuelta a la cadena cuando hace falta.

Las variantes principales:

- **Off-chain de confianza minimizada.** La [Lightning Network](/es/glosario/lightning-network) es el ejemplo canónico. Dos partes abren un canal con una sola transacción de financiamiento on-chain, intercambian entre ellas un número ilimitado de actualizaciones de estado firmadas off-chain, y solo vuelven a la cadena cuando cierran el canal o entran en una disputa. El estado off-chain se puede hacer valer en la cadena si alguien hace trampa.

- **Sidechains.** Liquid, las propuestas al estilo Drivechain y otros diseños de [sidechain](/es/glosario/sidechain) (cadena lateral) corren una cadena aparte, anclada a Bitcoin mediante un peg (anclaje). La actividad ocurre en la sidechain; la capa base solo ve los eventos del peg.

- **Off-chain custodial.** El registro interno de todo exchange es off-chain. Cuando operas con BTC en un exchange, o le envías a otro cliente del mismo exchange, no ocurre ninguna transacción de Bitcoin (Coinbase, por ejemplo, documenta sus envíos entre cuentas como operaciones fuera de la cadena de bloques y sin comisión). El custodio solo actualiza filas en una base de datos. Rápido, gratis y exactamente tan seguro como lo sea el custodio.

Lo que off-chain te permite hacer y on-chain no:

- **Liquidación en segundos.** Un pago por Lightning queda definitivo en segundos; una confirmación on-chain tarda unos diez minutos en promedio.
- **Comisiones de menos de un centavo.** Los pagos off-chain no compiten por espacio en el bloque.
- **Mejoras de privacidad.** El enrutamiento en Lightning no deja un registro on-chain permanente de cada salto.
- **Capacidad de procesamiento.** La capa off-chain puede procesar millones de actualizaciones de estado entre dos puntos de anclaje on-chain.

Lo que cedes:

- **Algo de confianza.** Lo off-chain de confianza minimizada (Lightning) tiene un mecanismo de resolución de disputas diseñado con cuidado. Lo off-chain custodial no lo tiene, y el [historial de quiebras de exchanges](/es/glosario/exchange) es la etiqueta de advertencia.
- **Algo de flexibilidad en la liquidez.** El saldo de un canal Lightning queda bloqueado entre dos partes; los UTXOs on-chain se pueden enviar a cualquiera.
- **Algo de auditabilidad.** La actividad off-chain no es verificable públicamente, a menos que el operador decida publicarla.

La división entre on-chain y off-chain es intencional. La capa base está optimizada para la seguridad y la liquidación; las capas off-chain, para el volumen y la velocidad. Las dos están pensadas para complementarse, en lugar de que una sola capa lo haga todo.
