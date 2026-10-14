---
title: "Bifurcación (fork)"
slug: bifurcacion
draft: false
published: "2026-10-14"
shortDefinition: "Un cambio en las reglas de la cadena de bloques (blockchain); puede ser un hard fork (incompatible) o un soft fork (compatible con las reglas anteriores)."
keyTakeaways:
  - "Los hard forks corren el riesgo de crear cadenas alternativas permanentes"
  - "Los soft forks siguen siendo compatibles con los clientes antiguos"
  - "El consenso es crucial para evitar divisiones de la cadena"
aliases:
  - "bifurcación"
  - "bifurcaciones"
  - "fork"
  - "forks"
  - "hard fork"
  - "hard forks"
sources:
  - { label: "BIP-99 - Motivation and deployment of consensus rule changes (definitions: a softfork makes previously valid blocks invalid; a hardfork makes previously invalid blocks valid and requires all users to upgrade)", url: "https://github.com/bitcoin/bips/blob/master/bip-0099.mediawiki" }
  - { label: "Bitcoin Core source - src/kernel/chainparams.cpp (the soft-fork activation heights every node enforces: BIP65Height 388381, CSVHeight 419328, SegwitHeight 481824, plus the BIP16 exception block)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "BIP-341 - Taproot (Status: Deployed; the deployment did activate at height 709632 on Bitcoin mainnet, 14 November 2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-50 - March 2013 Chain Fork Post-Mortem (the accidental split between 0.8 and pre-0.8 nodes; the two-month temporary rules in 0.8.1; block 252,451 on 16 August 2013 forking unpatched nodes off the network)", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "Bitcoin Cash - UAHF Technical Specification (a block size hard fork from the original 1 MB chain; activation time 1 August 2017 12:20 UTC)", url: "https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/uahf-technical-spec.md" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 5: when two nodes broadcast different versions of the next block, the tie is broken when the next proof-of-work is found", url: "https://bitcoin.org/bitcoin.pdf" }
relatedTerms:
  - airdrop-btc-fork
  - alt-season
  - altcoin
  - bip-50
  - bip-102-2mb-block-size
  - bitcoin-cash
  - chain-flag-day
  - chain-split
  - consensus-parameter
  - fork-detection
  - fork-watcher
  - reorg-reorganization
  - replay-attack
sameAs:
  - "https://en.wikipedia.org/wiki/Fork_(blockchain)"
  - "https://www.wikidata.org/wiki/Q48893562"
  - "https://en.bitcoin.it/wiki/Fork"
liveWidget: ~
translationOf: fork
sourceHash: "8bb6e21433ac"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

"Bifurcación" (fork) en Bitcoin significa un cambio en las reglas de consenso. Hay dos tipos distintos, y la diferencia importa mucho.

**[Soft fork](/es/glosario/soft-fork).** *Endurece* las reglas. Los bloques que eran válidos con las reglas viejas se vuelven inválidos con las nuevas; los bloques válidos con las reglas nuevas siguen siendo válidos con las viejas. Los nodos viejos que no se han actualizado siguen viendo los bloques nuevos como legítimos; simplemente no hacen cumplir ellos mismos las nuevas restricciones. Compatible hacia atrás. La forma estándar de actualizar Bitcoin.

Ejemplos: [SegWit](/es/glosario/segwit) (2017), [Taproot](/es/glosario/taproot) (2021), BIP 65 (CLTV), BIP 68 (CSV), P2SH y otros.

**Hard fork.** *Relaja o rompe de alguna otra forma* las reglas. Los bloques válidos con las reglas nuevas pueden ser inválidos con las viejas. Los nodos viejos rechazan los bloques nuevos. No es compatible hacia atrás. Crea una [división de la cadena](/es/glosario/division-de-la-cadena) permanente, a menos que todos los nodos se actualicen.

Ejemplos en la historia de Bitcoin: ninguno que esté fuera de discusión. Las actualizaciones de la lista anterior, de P2SH a Taproot en 2021, fueron todas soft forks. El episodio en disputa es el de 2013: en marzo, un límite de la base de datos en las versiones más antiguas dividió la cadena por error; a la regla temporal que lo parchó se la dejó expirar, y en agosto un bloque dejó atrás para siempre a los nodos sin parchar. Si algo de eso cuenta como hard fork todavía lo discuten los desarrolladores que estuvieron ahí; el capítulo enlazado abajo lo retoma. La división de "Bitcoin Cash" de agosto de 2017 fue un hard fork según su propia especificación: un cambio de marca convertido en altcoin, no una actualización de Bitcoin en sí.

La asimetría entre soft forks y hard forks es una de las defensas conservadoras más discretas de Bitcoin. Los soft forks pueden desplegarse poco a poco y sin trastornos si tienen apoyo amplio. Los hard forks son prácticamente imposibles de desplegar en Bitcoin sin dividir la red, así que los cambios que *exigen* un hard fork (por ejemplo, cambiar el tope de 21 millones) son inviables en la práctica.

Las palabras "bifurcación" y "fork" también se usan a veces, de forma confusa, para divergencias *temporales* (dos mineros que encuentran bloques a la misma altura), pero a esas conviene llamarlas [reorganizaciones](/es/glosario/reorganizacion) breves (reorgs): la red las resuelve en uno o dos bloques.

Para seguir una bifurcación accidental minuto a minuto, lee [La bifurcación de 2013](/es/a-fondo/bifurcacion-de-2013).
