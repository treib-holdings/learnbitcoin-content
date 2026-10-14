---
title: "Liquid Network"
slug: liquid-network
draft: false
published: "2026-10-13"
shortDefinition: "Una sidechain federada desarrollada por Blockstream, con liquidaciones más rápidas, transacciones confidenciales y un modelo de BTC anclado (peg)."
keyTakeaways:
  - "Un peg federado asegura los BTC bloqueados en la cadena principal dentro de una multisig"
  - "Las Transacciones Confidenciales ocultan los montos en las transferencias de L-BTC"
  - "Liquidaciones más rápidas, pero depende de funcionarios de confianza"
sources:
  - { label: "Blockstream - Liquid Network launch press release: chain live September 27, 2018; an inter-exchange settlement network for exchanges, market makers, brokers and financial institutions (October 10, 2018)", url: "https://blockstream.com/press-releases/2018-10-10-blockstream-launches-the-liquid-network/" }
  - { label: "Liquid docs - Technical Overview (a block every minute; final after two confirmations, two to three minutes; amounts and asset types hidden by default; Issued Assets for stablecoins and tokenized securities; peg-outs only to addresses under a Peg-out Authorization Key)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Blockstream Help - What is a Liquid Network functionary? (15 functionaries take turns proposing blocks; 11 of 15 sign each block; each functionary is run by a single federation member)", url: "https://help.blockstream.com/liquid-network/faqs/what-is-a-liquid-network-functionary" }
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig wallet for peg-ins and peg-outs)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Liquid Federation - Q1 2026 quarterly update: 87 federation members; DePix stablecoin about half of transaction volume; new tokenized securities (May 1, 2026)", url: "https://blog.liquid.net/liquid-federation-quarterly-update-q1-2026/" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: Pedersen commitments and range proofs; range-proof cache bug; about 4,000 unbacked L-BTC; 3,996.02 BTC released via SideSwap's peg-out; no key compromised; 3,400 BTC returned; chain restarted from block 4,050,335 with valid transactions replayed; USDt unaffected (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "ElementsProject on GitHub - Elements 23.3.4 release, hardens range proof cache keys (September 9, 2026)", url: "https://github.com/ElementsProject/elements/releases/tag/elements-23.3.4" }
  - { label: "Liquid Network official update - transfers running since September 10; peg-outs paused and will resume only after full 1:1 BTC backing for LBTC is confirmed; about 600 BTC unreturned (September 17, 2026; also posted on X as @Liquid_BTC)", url: "https://t.me/liquid/101" }
  - { label: "Liquid Network homepage - banner says LBTC peg-out operations remain paused (checked October 10, 2026)", url: "https://liquid.net/" }
  - { label: "mempool Liquid explorer API - BTC held in the Liquid peg wallet: 3,632.23 BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/reserves" }
  - { label: "mempool Liquid explorer API - L-BTC in circulation: 4,234.76 L-BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/pegs" }
  - { label: "Decrypt - Blockstream refuses to pay the attacker's demanded bounty for the remaining 598.5 BTC (September 11, 2026)", url: "https://decrypt.co/377959/blockstream-refuses-ransom-for-return-of-47m-in-bitcoin-from-liquid-hack-it-is-theft" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper: blocks assumed every 10 minutes (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
relatedTerms:
  - bitcoin-bridge
  - liquid-federation
  - multisig
  - peg
  - peg-out
  - second-layer
  - sidechain
liveWidget: ~
translationOf: liquid-network
sourceHash: "60db6053de2a"
sourceCommit: "f3d40f1"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

La **Liquid Network** es una sidechain (cadena lateral) federada de Bitcoin, desarrollada por Blockstream y en operación desde septiembre de 2018. Ofrece liquidaciones más rápidas (bloques de alrededor de un minuto, frente a los de unos 10 minutos de Bitcoin), transacciones confidenciales (los montos y los tipos de activo quedan ocultos para quien observa la cadena) y un marco nativo para emitir activos. Los BTC anclados en Liquid se llaman **L-BTC**.

Cómo funciona Liquid en la práctica:

- **La Federación de Liquid** (87 empresas miembro a mayo de 2026, desde exchanges y firmas de trading hasta billeteras y emisores de activos) supervisa la sidechain. Quince funcionarios, cada uno operado por un solo miembro, se turnan para proponer bloques, y cada bloque necesita las firmas de 11 de los 15.
- **El peg-in** envía BTC a una multisig controlada por la federación en la cadena principal; a cambio se emite L-BTC en Liquid con un peg (anclaje) 1:1.
- **El peg-out** quema L-BTC en Liquid; los funcionarios liberan la misma cantidad de BTC desde la multisig de la cadena principal. Solo pagan a direcciones registradas bajo la clave de autorización de peg-out (PAK) de un miembro.
- **Las Transacciones Confidenciales** usan compromisos criptográficos (compromisos de Pedersen, que son homomórficos) para ocultar los montos y, aun así, dejar que los nodos verifiquen que no hubo inflación. Cada monto oculto viene con una prueba de rango que demuestra que cae dentro de un rango válido, y el ataque de septiembre de 2026 esquivó justamente esa verificación (ver más abajo).
- **Activos emitidos (Issued Assets).** Liquid permite emitir activos arbitrarios (se usa para el USDT de Tether, la stablecoin DePix ligada al real brasileño, valores tokenizados, etc.) junto al L-BTC.

Para qué se usa Liquid en 2026:

- **Liquidación entre exchanges.** Liquid nació en 2018 como una red de liquidación para exchanges, creadores de mercado y brokers. En operación normal, sus transacciones son definitivas tras dos bloques, unos dos o tres minutos.
- **Pagos con stablecoins.** DePix, una stablecoin anclada al real brasileño, representó aproximadamente la mitad del volumen de transacciones de Liquid a principios de 2026. El USDT de Tether también se emite en Liquid.
- **Experimentos con valores tokenizados.** Varios emisores han lanzado valores tokenizados en Liquid.

Lo que Liquid no es:

- **No elimina la necesidad de confiar, como sí lo hace la cadena principal.** Si 11 de los 15 funcionarios se coludieran, o si les robaran las claves, en principio podrían robar los BTC anclados. El peg también depende de que el software que corre cada nodo esté libre de errores, como lo demostró el ataque de septiembre de 2026. Son supuestos de confianza, sustancialmente distintos del modelo de seguridad de Bitcoin basado en prueba de trabajo (proof-of-work).
- **No es la solución principal de escalabilidad de Bitcoin.** Liquid cubre un nicho específico (liquidación rápida para instituciones, transacciones confidenciales). Lightning es la capa 2 de propósito general.

**El ataque de septiembre de 2026.** El 6 de septiembre de 2026, un atacante aprovechó una falla en Elements, el software con el que corre Liquid, para crear unos 4,000 L-BTC sin ningún bitcoin que los respaldara: los nodos guardan en caché los resultados de las verificaciones de pruebas de rango, y una prueba falsificada coincidió con una entrada anterior y legítima de esa caché, así que en realidad nunca se verificó. El atacante canjeó las monedas a través del servicio de peg-out de SideSwap, un miembro de la federación, y los funcionarios liberaron unos 3,996 BTC en Bitcoin; Blockstream afirma que no se comprometió ninguna clave. El atacante devolvió 3,400 BTC al día siguiente. Para eliminar las monedas falsas, el proceso de recuperación de Blockstream reinició la cadena desde el bloque 4,050,335, el último antes del ataque, y volvió a aplicar las transacciones válidas. Las transacciones se reanudaron el 10 de septiembre tras una corrección publicada en Elements 23.3.4, pero al 10 de octubre de 2026 los peg-outs seguían pausados y la billetera del peg tenía unos 600 BTC menos que los L-BTC en circulación. El comunicado oficial de Liquid del 17 de septiembre dijo que los peg-outs se reanudarían solo cuando los L-BTC volvieran a estar respaldados 1:1 por completo, sin dar fecha. Blockstream se negó a pagar la recompensa que el atacante exigía por las monedas que aún retiene, según informó Decrypt.

Consulta [Federación de Liquid](/es/glosario/federacion-de-liquid) para la estructura de la federación y [Sidechain](/es/glosario/sidechain) para la categoría más amplia.
