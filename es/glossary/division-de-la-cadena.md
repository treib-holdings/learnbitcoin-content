---
title: "División de la cadena"
slug: division-de-la-cadena
draft: false
published: "2026-10-13"
shortDefinition: "Ocurre cuando reglas de consenso en conflicto hacen que la cadena de bloques (blockchain) se separe en dos cadenas incompatibles."
keyTakeaways:
  - "Deja dos cadenas de bloques con una historia compartida pero reglas distintas"
  - "Puede ser intencional (hard forks) o accidental (conflictos de software)"
  - "Quienes controlaban sus claves terminan con monedas en las dos cadenas"
sources:
  - { label: "BIP 50 - March 2013 Chain Fork Post-Mortem (Gavin Andresen, 2013; 0.8 swapped Berkeley DB for LevelDB, older nodes hit the BDB lock limit, the 0.8 chain held about 60% of the hash power, and BTCGuild and Slush downgraded to 0.7 to end the split)", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "bitcoin.org - 11/12 March 2013 Chain Fork Information (the notice as updated 16 May 2013)", url: "https://bitcoin.org/en/alert/2013-03-11-chain-fork" }
  - { label: "mempool.space - block 225,455 (06:20 UTC, 12 March 2013), where the chain every version could follow overtook the abandoned 25-block chain", url: "https://mempool.space/block/000000000000016924f85069603be8164578eedf113f44d60bf0438cba047c7f" }
  - { label: "Bitcoin Cash - UAHF technical specification (GitHub, 2017; activation at Unix time 1501590000, 1 August 2017 12:20 UTC; the fork block must exceed 1 MB; blocks of at least 8 MB; signature digest revised for a non-SegWit deployment)", url: "https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/uahf-technical-spec.md" }
  - { label: "Bitcoin SV - release 0.1.0 notes (GitHub, October 2018; support for the November 2018 upgrade that split it from Bitcoin Cash, 128 MB blocks)", url: "https://github.com/bitcoin-sv/bitcoin-sv/releases/tag/v0.1.0" }
  - { label: "Blockchair - Bitcoin Cash chain stats (JSON; 13 October 2026: 24-hour hash rate 3.2 EH/s against 1,069 EH/s on the matching Bitcoin endpoint, api.blockchair.com/bitcoin/stats)", url: "https://api.blockchair.com/bitcoin-cash/stats" }
relatedTerms:
  - airdrop-btc-fork
  - bitcoin-cash
  - chain-flag-day
  - fork
  - fork-detection
  - fork-watcher
  - reorg-reorganization
sameAs:
  - "https://en.wikipedia.org/wiki/Fork_(blockchain)"
  - "https://www.wikidata.org/wiki/Q48893562"
  - "https://en.wikipedia.org/wiki/Bitcoin_Cash"
liveWidget: ~
translationOf: chain-split
sourceHash: "dc1db99a3350"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una división de la cadena ocurre cuando la red Bitcoin se separa en dos cadenas persistentes, cada una válida por su lado: ya sea por accidente (por un error de software) o a propósito (por un [hard fork](/es/glosario/bifurcacion) polémico).

Después de la división, cada cadena sigue con sus propios bloques, sus propios mineros y sus propios seguidores. Las monedas que existían antes de la división se duplican: quien las tenía termina con un saldo en cada cadena, controlado por las mismas [claves privadas](/es/glosario/clave-privada). Una división deliberada está pensada para ser permanente; una accidental puede sanar, como mostró 2013.

Divisiones de la cadena notables en la historia de Bitcoin:

- **[Bitcoin Cash (en inglés)](/glossary/bitcoin-cash) (BCH), agosto de 2017.** La grande. La [guerra del tamaño de bloque (en inglés)](/glossary/block-size-war) de 2015 a 2017 culminó cuando BCH se separó de Bitcoin el 1 de agosto de 2017, con bloques de 8 MB y sin [SegWit](/es/glosario/segwit). Hoy BCH sigue existiendo como una red aparte, con unas pocas décimas de punto porcentual del hashrate de Bitcoin (el poder de cómputo de la red).
- **[Bitcoin SV (en inglés)](/glossary/bitcoin-sv-bsv) (BSV), noviembre de 2018.** Una bifurcación de BCH, no de Bitcoin, con bloques de 128 MB. A dos bifurcaciones de distancia de Bitcoin, y todavía más lejos de la relevancia.
- **Marzo de 2013 (accidental, y sanó).** La versión 0.8 reemplazó la base de datos sobre la que corría el software del nodo y, sin que nadie lo supiera, eliminó un límite que las versiones anteriores venían haciendo cumplir. Un bloque grande separó a los nodos viejos de los nuevos durante 7 horas y 41 minutos. Los mineros que tenían la mayor parte del hashrate abandonaron entonces su propia cadena de 25 bloques para que la cadena que los nodos viejos sí podían seguir la rebasara. A diferencia de las dos divisiones anteriores, esta se reconcilió. La bitácora de esa noche está en [La bifurcación de la cadena de 2013 (en inglés)](/rabbit-hole/2013-chain-fork).

Lo que la división de BCH dejó claro: cuando hay un hard fork polémico, el mercado decide cuál cadena es "Bitcoin". Importan tanto los factores técnicos como los económicos, pero en la práctica la cadena que conserva el símbolo bursátil original (el ticker), los listados en los exchanges, la asociación con la marca y la atención de los desarrolladores se queda con el nombre "Bitcoin" y con la mayor parte del valor. La cadena bifurcada cambia de marca y se negocia como un activo aparte, por lo general a una fracción del valor de Bitcoin.

Si alguna vez volviera a haber una división de la cadena, quienes tuvieran monedas en la cadena previa a la división las tendrían en los dos lados, pero los mercados de las dos cadenas les pondrían precios muy distintos. Este patrón es una defensa estructural importante contra los cambios que en realidad nadie quiere: la amenaza de "terminar rebautizada como una altcoin" mantiene conservadores los cambios al protocolo.
