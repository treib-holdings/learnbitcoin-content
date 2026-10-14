---
title: "Sidechain (cadena lateral)"
slug: sidechain
draft: false
published: "2026-10-13"
shortDefinition: "Una cadena de bloques (blockchain) externa, interoperable con Bitcoin mediante un peg (anclaje), como Liquid, que permite funciones nuevas o transacciones más rápidas."
keyTakeaways:
  - "Añade funciones extra sin cambiar la unidad monetaria, que sigue siendo BTC"
  - "Necesita un mecanismo puente (federado o de otro tipo) para bloquear y desbloquear BTC"
  - "Permite experimentar sin poner en riesgo el consenso de la red principal (mainnet)"
aliases:
  - "sidechain"
  - "sidechains"
  - "cadena lateral"
  - "cadenas laterales"
sources:
  - { label: "Back et al. - Enabling Blockchain Innovations with Pegged Sidechains: a sidechain validates data from other blockchains; two-way peg moves coins over and back; federated peg in Appendix A (2014)", url: "https://blockstream.com/sidechains.pdf" }
  - { label: "Liquid docs - Technical Overview (sidechain runs in parallel with its own rules; one-minute blocks; confidential transactions; Issued Assets; the general public cannot peg out on its own; peg-outs only to addresses under a Peg-out Authorization Key; sidechains as a way to test new features)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig for peg-ins and peg-outs; each of the 15 functionaries holds one key)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Blockstream - Liquid Network launch press release: an inter-exchange settlement network (October 10, 2018)", url: "https://blockstream.com/press-releases/2018-10-10-blockstream-launches-the-liquid-network/" }
  - { label: "Liquid Federation - Q1 2026 quarterly update: tokenized securities from STOKR and other issuers on Liquid (May 1, 2026)", url: "https://blog.liquid.net/liquid-federation-quarterly-update-q1-2026/" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: unbacked L-BTC redeemed through SideSwap, a federation member holding a Peg-out Authorization Key; network halted September 6, 2026, including peg-outs; recovery resumed blocks with peg-outs paused; USDt issued on Liquid (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "Liquid Network homepage - banner says LBTC peg-out operations remain paused (checked October 10, 2026)", url: "https://liquid.net/" }
  - { label: "mempool Liquid explorer API - BTC held in the Liquid peg wallet: 3,632.23 BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/reserves" }
  - { label: "mempool Liquid explorer API - L-BTC in circulation: 4,234.76 L-BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/pegs" }
  - { label: "BIP-300 (Draft as of October 2026) - Hashrate Escrows: withdrawals governed by proof-of-work instead of a federation", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
  - { label: "BIP-301 (Draft as of October 2026) - Blind Merged Mining", url: "https://github.com/bitcoin/bips/blob/master/bip-0301.mediawiki" }
  - { label: "Rootstock docs - Foundations: an open-source, EVM-compatible Bitcoin sidechain, merge-mined with Bitcoin", url: "https://dev.rootstock.io/concepts/fundamentals/" }
  - { label: "Rootstock docs - PowPeg: began in 2018 as a federation; multisig keys kept in PowHSMs that sign only when commanded by Rootstock's cumulative proof of work; functionaries keep the hardware running but do not directly control the keys", url: "https://dev.rootstock.io/concepts/foundations/powpeg/" }
relatedTerms:
  - off-chain
  - one-way-peg
liveWidget: ~
translationOf: sidechain
sourceHash: "dfc819bb74ca"
sourceCommit: "8bb2e1c"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

Una sidechain (cadena lateral) es una cadena de bloques aparte, interoperable con Bitcoin mediante un **peg (anclaje) bidireccional**: bloqueas BTC en la cadena principal, se emite un token equivalente en la sidechain y, más adelante, el proceso puede revertirse para recuperar los BTC en la cadena principal. Que puedas hacerlo por tu cuenta, y cuándo, depende de quién opera el peg (ver Liquid más abajo).

La sidechain tiene su propio consenso, su propia producción de bloques, muchas veces su propio entorno de scripts y su propio tiempo de bloque. Los usuarios pueden hacer transacciones libremente en la sidechain (a menudo con funciones que la capa base de Bitcoin no tiene, como bloques más rápidos, transacciones confidenciales o contratos inteligentes) mientras los BTC permanecen bloqueados en la red principal (mainnet).

El mecanismo del peg es la pregunta central en materia de confianza. Los enfoques principales:

- **Peg federado.** Un comité de operadores con una multisig custodia los BTC bloqueados. Emiten o canjean los tokens de la sidechain según los depósitos y retiros firmados. La confianza recae en la federación: si suficientes miembros para alcanzar el umbral de firmas (11 de 15 en Liquid) se coluden o quedan comprometidos, el peg se rompe. Lo usa **Liquid** (Blockstream).
- **Drivechain ([BIP 300/301 (en inglés)](/glossary/bip-300-drivechains)):** una actualización propuesta para Bitcoin en la que los mineros hacen cumplir el peg votando las solicitudes de retiro. Sigue en borrador a octubre de 2026.

Sidechains de Bitcoin destacadas en 2026:

- **Liquid Network** (Blockstream): federada, admite transacciones confidenciales y activos emitidos. Se usa para la liquidación institucional entre exchanges, tokens de valores (security tokens) y parte del Tether USD. Solo los miembros de la federación que tienen una clave de autorización de peg-out (PAK) pueden hacer peg-out, así que el resto de los usuarios pasa por uno de ellos. Los peg-outs se detuvieron tras un ataque el 6 de septiembre de 2026; al 10 de octubre de 2026 seguían en pausa, y la billetera del peg tenía unos 600 BTC menos que los L-BTC en circulación (ver [Liquid Network](/es/glosario/liquid-network)).
- **RSK (Rootstock)**: contratos inteligentes compatibles con la EVM. Su peg, el PowPeg, empezó en 2018 como una federación. En 2026, las claves de la multisig están en módulos de hardware que opera un conjunto de funcionarios, y los módulos solo firman cuando la prueba de trabajo (proof-of-work) de Rootstock respalda la solicitud.

La idea general: las sidechains permiten experimentar con funciones que Bitcoin no puede adoptar con seguridad en su capa base. El precio es algún supuesto de confianza adicional (normalmente, una federación). Cada usuario valorará ese intercambio a su manera. Las sidechains son una especie dentro de la categoría más amplia de lo [off-chain](/es/glosario/off-chain); ver también [Segunda capa](/es/glosario/segunda-capa) para las construcciones que se anclan a Bitcoin sin correr una cadena aparte.
