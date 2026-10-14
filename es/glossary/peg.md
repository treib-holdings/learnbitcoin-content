---
title: "Peg-in"
slug: peg
draft: false
published: "2026-10-14"
shortDefinition: "Bloquear BTC en la cadena principal para recibir tokens anclados en una sidechain (por ejemplo, el L-BTC de Liquid)."
keyTakeaways:
  - "Transfiere BTC de la cadena principal a una dirección de la sidechain"
  - "Una federación o sus funcionarios validan el bloqueo y emiten los activos anclados"
  - "Habilita funciones de la sidechain, como bloques más rápidos o privacidad"
aliases:
  - "peg-in"
  - "peg-ins"
sources:
  - { label: "Back et al. - Enabling Blockchain Innovations with Pegged Sidechains: two-way peg at a fixed or otherwise deterministic exchange rate; destroying bitcoins as a one-way transfer; SPV peg needs a Bitcoin soft fork; federated peg in Appendix A (2014)", url: "https://blockstream.com/sidechains.pdf" }
  - { label: "Liquid docs - Technical Overview (anyone can peg in; the general public cannot peg out on its own and goes through a functionary or participant; peg-outs only to addresses under a Peg-out Authorization Key; one-minute blocks; confidential transactions)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig for peg-ins and peg-outs; each of the 15 functionaries holds one key)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "BIP-300 (Draft as of October 2026) - Hashrate Escrows: withdrawals governed by proof-of-work, need 13,150 miner ACKs at most one per block", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: about 4,000 unbacked L-BTC created through an Elements bug and redeemed through SideSwap's peg-out; network halted September 6, 2026, including peg-outs; recovery resumed blocks with peg-outs paused; about 602 BTC outstanding (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "Liquid Network homepage - banner says LBTC peg-out operations remain paused (checked October 10, 2026)", url: "https://liquid.net/" }
  - { label: "mempool Liquid explorer API - BTC held in the Liquid peg wallet: 3,632.23 BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/reserves" }
  - { label: "mempool Liquid explorer API - L-BTC in circulation: 4,234.76 L-BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/pegs" }
relatedTerms:
  - bitcoin-bridge
  - liquid-federation
  - liquid-network
  - peg-guard
  - peg-out
  - sidechain
liveWidget: ~
translationOf: peg
sourceHash: "a19235e4f366"
sourceCommit: "8bb2e1c"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

Un **peg** (anclaje), en el contexto de Bitcoin, es el mecanismo que ata las unidades de una [sidechain](/es/glosario/sidechain) (cadena lateral), o de otro sistema aparte, a los BTC de la cadena principal (mainnet) en una proporción fija de 1:1. Mover BTC a través de ese mecanismo es lo que en inglés se llama pegging.

Las dos operaciones:

- **Peg-in:** bloqueas BTC en la cadena principal y recibes el equivalente en tokens de la sidechain. Los BTC de la cadena principal quedan bloqueados en una multisig o en un script controlado por la infraestructura del peg de la sidechain.
- **[Peg-out](/es/glosario/peg-out):** quemas o mueves tokens de la sidechain y recibes el equivalente en BTC en la cadena principal, tomados de la reserva bloqueada del peg.

La meta es que cada token de la sidechain se pueda canjear por un BTC (1 L-BTC = 1 BTC) mientras vive en una cadena aparte con propiedades distintas. Eso solo se cumple mientras el peg funciona. En Liquid, los peg-outs se detuvieron tras un ataque el 6 de septiembre de 2026. Al 10 de octubre de 2026 seguían pausados, y la billetera del peg tenía unos 600 BTC menos que los L-BTC en circulación (ver [Liquid Network](/es/glosario/liquid-network)).

Las arquitecturas de peg varían según el modelo de confianza:

- **Peg federado** (el que usa [Liquid](/es/glosario/liquid-network)). Un consorcio de operadores de confianza controla los BTC bloqueados mediante una multisig; en Liquid, 15 funcionarios tienen una clave cada uno y deben firmar 11. El peg-in no necesita permiso de nadie (cualquiera puede bloquear BTC); el peg-out requiere que firme un umbral de la federación. En Liquid, solo los miembros de la federación que tienen una clave de autorización de peg-out (PAK) pueden solicitar un peg-out, así que el resto de los usuarios pasa por uno de ellos.
- **Peg de drivechain** (propuesto, [BIP 300 (en inglés)](/glossary/bip-300-drivechains)). Los mineros de Bitcoin votan los retiros por peg-out a lo largo de un periodo largo. Sigue en borrador a octubre de 2026.
- **Peg SPV.** Propuesto en el paper de sidechains de 2014: cada cadena verifica pruebas compactas (pruebas SPV) de lo que pasó en la otra, de modo que el propio Bitcoin liberaría las monedas bloqueadas una vez demostrado que fueron devueltas. El script de Bitcoin no puede verificar esas pruebas sin un soft fork (bifurcación compatible hacia atrás), así que el mismo paper sugirió un peg federado mientras tanto.
- **Peg unidireccional** ([prueba de quema, proof-of-burn (en inglés)](/glossary/one-way-peg)). Los BTC pasan a la sidechain mediante una destrucción verificable; no hay camino de regreso.

El mecanismo del peg es el punto crítico de confianza de cualquier sidechain. Un peg federado vale lo que valen la honestidad de la federación, su seguridad operativa y el software que corre. Un peg de drivechain vale lo que valga la alineación de incentivos de los mineros. Distintos usuarios valorarán de forma distinta lo que se gana y lo que se cede en cada diseño.

Consulta [Peg-out](/es/glosario/peg-out), [Peg-Guard (en inglés)](/glossary/peg-guard), [Sidechain](/es/glosario/sidechain) y [Liquid Network](/es/glosario/liquid-network) para los conceptos relacionados.
