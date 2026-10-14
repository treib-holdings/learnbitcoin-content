---
title: "Federación de Liquid"
slug: federacion-de-liquid
aliases:
  - "la Federación de Liquid"
  - "federación Liquid"
  - "Liquid Federation"
  - "funcionarios de Liquid"
draft: false
published: "2026-10-14"
shortDefinition: "El grupo de empresas detrás de la sidechain Liquid; 15 funcionarios operados por sus miembros firman los bloques y tienen las claves de la multisig que guarda los BTC anclados."
keyTakeaways:
  - "Grupo federado con multisig que asegura el peg de la sidechain Liquid"
  - "Hace falta un umbral de firmantes para liberar los BTC anclados"
  - "Ofrece bloques más rápidos y funciones confidenciales, pero no elimina del todo la necesidad de confiar"
sources:
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig for peg-ins and peg-outs; each of the 15 functionaries holds one key in its HSM; Blockstream holds emergency backup keys usable after a 4,032-block timelock that is refreshed in normal operation)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Blockstream Help - What is a Liquid Network functionary? (15 functionaries take turns proposing blocks and 11 of 15 sign each one; each functionary is run by a single federation member; HSM signing rules; functionaries dispersed around the world)", url: "https://help.blockstream.com/liquid-network/faqs/what-is-a-liquid-network-functionary" }
  - { label: "Liquid docs - Technical Overview (a block every minute; blocks stop if a third or more of functionaries are offline; other federation members can peg in and out without a direct role in securing the network; amounts and asset types hidden by default)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Liquid Federation - Q1 2026 quarterly update: 87 federation members; DePix, a Brazilian-real stablecoin, on Liquid; Boltz runs Liquid-Lightning swaps; new tokenized securities (May 1, 2026)", url: "https://blog.liquid.net/liquid-federation-quarterly-update-q1-2026/" }
  - { label: "Blockstream - Liquid Network launch press release: chain live September 27, 2018 with 23 members, mostly exchanges, including Bitfinex and BTSE (October 10, 2018)", url: "https://blockstream.com/press-releases/2018-10-10-blockstream-launches-the-liquid-network/" }
  - { label: "Liquid Network homepage - member logos include Bull Bitcoin, SideSwap and Boltz; footer names Blockstream as technology provider to the Liquid Federation; banner says LBTC peg-out operations remain paused (checked October 10, 2026)", url: "https://liquid.net/" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: range-proof cache bug, about 4,000 unbacked L-BTC, 3,996.02 BTC released via SideSwap's peg-out, no key compromised, two causes (the Elements consensus bug and SideSwap's online peg-out key with automatic payouts), 3,400 BTC returned, chain restarted from block 4,050,335 with valid transactions replayed, USDt and DePix unaffected (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "mempool Liquid explorer API - BTC held in the Liquid peg wallet: 3,632.23 BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/reserves" }
  - { label: "mempool Liquid explorer API - L-BTC in circulation: 4,234.76 L-BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/pegs" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper: all transactions publicly announced; blocks assumed every 10 minutes (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
relatedTerms:
  - liquid-network
  - multisig
  - peg
  - peg-guard
  - peg-out
  - sidechain
liveWidget: ~
translationOf: liquid-federation
sourceHash: "bacaee118177"
sourceCommit: "f3d40f1"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

La **Federación de Liquid** es el grupo de empresas que supervisa la sidechain (cadena lateral) [Liquid Network](/es/glosario/liquid-network). Quince funcionarios, cada uno operado por un solo miembro, firman los bloques de Liquid y tienen las 15 claves de la billetera multisig detrás del [peg (anclaje) bidireccional](/es/glosario/peg) con la red principal de Bitcoin. Un funcionario es un servidor acompañado de un módulo de seguridad de hardware (HSM). Los demás miembros pueden hacer peg-in y peg-out y validar la cadena, pero no tienen ningún papel directo en asegurarla.

La estructura en 2026:

- **87 miembros de la federación, a mayo de 2026.** La mayoría de los 23 miembros fundadores de 2018 eran exchanges, como Bitfinex y BTSE. Entre los miembros posteriores hay empresas de billeteras, pagos y swaps, como Bull Bitcoin, SideSwap y Boltz. Blockstream, que construyó Liquid, es el proveedor de tecnología de la federación.
- **La firma de bloques rota.** Los 15 funcionarios se turnan para proponer bloques, y un bloque entra en la cadena cuando 11 de los 15 lo han verificado y firmado. Los bloques llegan más o menos cada minuto.
- **Aprobar un peg-out exige un umbral.** Mover BTC de Liquid de vuelta a la red principal de Bitcoin mediante un peg-out requiere las firmas de 11 de los 15 funcionarios que tienen las claves de la billetera de la federación, a octubre de 2026.
- **Claves en hardware dedicado.** Cada funcionario guarda sus claves en su HSM, que en operación normal no firma un bloque que reorganizaría la cadena en más de un bloque, y firma un peg-out solo si las monedas vuelven a la federación o van a una dirección de una lista blanca. Los funcionarios están repartidos por todo el mundo.

El supuesto de confianza: si 11 de los 15 funcionarios se coludieran, o si les robaran las claves, podrían firmar la salida de los BTC anclados. Si cinco o más se desconectaran o dejaran de firmar, la sidechain se detendría. Repartir los funcionarios entre distintos operadores y países lo vuelve difícil, pero no imposible. Como salvaguarda, Blockstream tiene un juego de claves de respaldo de emergencia que pueden gastar las monedas ancladas cuando vence un bloqueo temporal (timelock) de hasta 4,032 bloques (unos 28 días). La federación renueva esos bloqueos temporales una y otra vez mientras la red funciona con normalidad, así que las claves de emergencia solo entran en juego si deja de funcionar. El peg también depende del software que corre cada funcionario, como lo demostró el ataque de 2026 que se describe más abajo.

Lo que se obtiene a cambio de esa confianza:

- **Liquidación rápida.** Bloques de alrededor de un minuto, frente a los de unos 10 minutos de Bitcoin.
- **Transacciones confidenciales.** La cadena transparente de Bitcoin no puede ocultar los montos; la de Liquid sí.
- **Activos emitidos.** Stablecoins como USDT y DePix, y valores tokenizados, se emiten en la misma cadena.

**El ataque de septiembre de 2026.** El 6 de septiembre de 2026, un atacante aprovechó un error en la forma en que Elements, el software que corre cada funcionario, guarda en caché las verificaciones de las pruebas de rango, y creó unos 4,000 L-BTC sin ningún bitcoin detrás. Los funcionarios aceptaron esas monedas como válidas y, cuando el atacante las canjeó a través del servicio de peg-out de SideSwap, firmaron la liberación de unos 3,996 BTC. Según Blockstream, no se comprometió ninguna clave. Atribuyó la pérdida a dos puntos débiles: el software compartido en el que confían los funcionarios para rechazar monedas falsas, y la forma en que SideSwap operaba su servicio de peg-out, pagando automáticamente en lugar de retener los BTC para una revisión manual. El atacante devolvió 3,400 BTC al día siguiente. Para eliminar las monedas falsas, el proceso de recuperación de Blockstream hizo retroceder Liquid hasta el bloque 4,050,335, el último antes del ataque, y volvió a aplicar las transacciones válidas. Al 10 de octubre de 2026, los peg-outs seguían pausados y la billetera del peg tenía unos 600 BTC menos que los L-BTC en circulación. Consulta [Liquid Network](/es/glosario/liquid-network) para más detalles sobre el incidente.

Que el trato valga la pena depende de cuánto confíes en los 15 operadores de los funcionarios y en el software que corren. Si no confías, tienes que buscar en otra parte: la red principal, Lightning, o esperar a ver en qué terminan convirtiéndose las [drivechains de BIP 300 (en inglés)](/glossary/bip-300-drivechains).

Consulta [Liquid Network](/es/glosario/liquid-network) para la sidechain en sí.
