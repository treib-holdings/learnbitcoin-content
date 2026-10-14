---
title: "Bitcoin Knots"
slug: bitcoin-knots
aliases:
  - "Knots"
draft: false
published: "2026-10-14"
shortDefinition: "Software de nodo construido a partir del código de Bitcoin Core, con filtros de retransmisión adicionales. Las versiones anteriores al 9 de mayo de 2026 siguen la cadena principal de Bitcoin; las posteriores siguen una cadena que se separó en agosto de 2026."
keyTakeaways:
  - "Construido a partir del código de Bitcoin Core, con sus propios ajustes de retransmisión y valores por defecto que filtran muchas transacciones que llevan datos"
  - "Las versiones hasta el 8 de mayo de 2026 no incluyen el BIP 110 y siguen la misma cadena que Bitcoin Core"
  - "Las versiones desde el 9 de mayo de 2026 hacen cumplir el BIP 110; los nodos que las corren abandonaron la cadena principal de Bitcoin el 8 de agosto de 2026, y Knots 29.4.1 (2 de septiembre de 2026) es un hard fork que le da a esa cadena una prueba de trabajo BLAKE2b"
sources:
  - { label: "Bitcoin Knots - official site (names Luke Dashjr as lead maintainer; lists 29.4.2.knots20260508 as the latest version on October 10, 2026)", url: "https://bitcoinknots.org/" }
  - { label: "Bitcoin Knots README (development generally takes place in Bitcoin Core and is merged into Knots for each release; changes not suited to Core can be proposed to Knots)", url: "https://github.com/bitcoinknots/bitcoin" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, policy.h (default data-carrier limit of 83 bytes, applied by default to all known data-carrier methods)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/policy/policy.h" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, script.cpp (counts the bytes inside an OP_FALSE OP_IF envelope as data carried outside an OP_RETURN output)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/script/script.cpp" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, mempool_options.h (-acceptnonstddatacarrier, which allows data carried outside OP_RETURN outputs, is off by default)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/kernel/mempool_options.h" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, validation.cpp (with that setting off, a transaction carrying such data is refused as txn-datacarrier-nonstandard)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/validation.cpp" }
  - { label: "Ordinal Theory Handbook - Inscriptions (inscription content sits in an envelope: OP_FALSE OP_IF ... OP_ENDIF wrapping data pushes)", url: "https://docs.ordinals.com/inscriptions.html" }
  - { label: "Bitcoin Knots v29.3.knots20260507 release notes (May 8, 2026) - this version does not support BIP-110", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260507" }
  - { label: "Bitcoin Knots v29.3.knots20260508 release notes (May 9, 2026) - this version applies BIP-110 (RDTS) after the user confirms", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260508" }
  - { label: "Bitcoin Knots v29.4.knots20260508 release notes (August 7, 2026) - its change log includes fixes to BIP-110 (RDTS) validation", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.knots20260508" }
  - { label: "BIP-110 - Reduced Data Temporary Softfork (one-year rules: most data pushes capped at 256 bytes, Tapscripts that execute OP_IF invalid; blocks 961,632 to 963,647 must signal bit 4; marked Closed in August 2026)", url: "https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki" }
  - { label: "mempool.space - block 961,632 (August 8, 2026), the first block of BIP-110's mandatory signaling period, which did not signal bit 4", url: "https://mempool.space/block/00000000000000000000d1e01392faa65ceeaed307f0a3159144b84146ff24ba" }
  - { label: "bitcoin/bips PR #2245 - BIP 110 status changed to Closed (opened August 9, merged August 10, 2026); notes Knots released it on mainnet and its nodes rejected non-signaling blocks, split to a new chain and stalled", url: "https://github.com/bitcoin/bips/pull/2245" }
  - { label: "Bitcoin Knots v29.4.1 release notes (September 2, 2026) - dates the split to August 8; backward-incompatible change to a BLAKE2b proof of work that also activates BIP-110's rules", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.1.knots20260508" }
  - { label: "bitcoin-blake2b.org, the page Knots' v29.4.1 release notes link for more information (first BLAKE2b block 961,640 on August 30, 2026; data limits last until September 1, 2027)", url: "https://bitcoin-blake2b.org/" }
  - { label: "BTC Nodes API - bitnodes.io snapshot of October 9, 2026, 19:28 UTC (nodes on Knots releases up to 29.3.knots20260507 report main-chain heights near 970,671; nearly all nodes on the 29.3 and 29.4 builds dated 20260508 sit at 961,639; nodes on 29.4.1 and 29.4.2 report heights near 976,430)", url: "https://btcnodes.io/api/v1/snapshots/1791574083/" }
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-core-rpc
  - chain-split
  - inscriptions
  - node
  - node-operator
  - node-synchronization
  - opreturn
  - safe-mode-bitcoin-core
liveWidget: ~
translationOf: bitcoin-knots
sourceHash: "ac668d7f4f57"
sourceCommit: "d728434"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

**Bitcoin Knots** es un software de nodo construido a partir del código de [Bitcoin Core](/es/glosario/bitcoin-core). Su mantenedor principal es Luke Dashjr. El trabajo hecho en Bitcoin Core se integra en Knots en cada versión, y Knots agrega encima cambios propios.

## Filtros de retransmisión

Muchos de esos cambios tienen que ver con la política de retransmisión (relay): qué transacciones sin confirmar guarda un nodo en su [mempool](/es/glosario/mempool) y cuáles pasa a sus pares. Knots agrega ajustes para esto, y sus valores por defecto filtran muchas transacciones que llevan datos arbitrarios. Por ejemplo, por defecto no retransmite una transacción que lleve datos dentro de un sobre de [inscripción (en inglés)](/glossary/inscriptions), y limita las salidas [OP_RETURN (en inglés)](/glossary/opreturn) a 83 bytes.

Los filtros de retransmisión no deciden qué bloques acepta un nodo. Eso lo deciden las reglas de consenso, que vienen a continuación.

## Consenso: antes y después de mayo de 2026

Las versiones de Knots hasta la 29.3.knots20260507 inclusive (8 de mayo de 2026) no incluyen el BIP 110. Los nodos que las corren siguen la misma cadena que los nodos de Bitcoin Core.

La versión siguiente, la 29.3.knots20260508, salió el 9 de mayo de 2026 y aplica el [BIP 110](https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki), el "Reduced Data Temporary Softfork" (soft fork temporal de datos reducidos), una vez que el usuario lo confirma. El BIP 110 proponía un [soft fork](/es/glosario/soft-fork) (bifurcación compatible hacia atrás) de un año que limitaría a 256 bytes la mayoría de los data pushes (los datos que un script mete en la pila) y volvería inválido cualquier Tapscript que ejecute `OP_IF`. Todas las versiones de Knots desde entonces lo incluyen.

Bajo el BIP 110, los bloques a partir de la altura 961,632 tenían que señalizar apoyo a la propuesta. El bloque 961,632, minado el 8 de agosto de 2026, no lo hizo. Los nodos que corrían estas versiones de Knots lo rechazaron, junto con cada bloque construido encima, lo que significaba rechazar la cadena principal de Bitcoin, y [se separaron](/es/glosario/division-de-la-cadena) en una cadena propia que se estancó. El BIP 110 quedó marcado como Closed (cerrado) ese mes.

Knots 29.4.1, publicada el 2 de septiembre de 2026, es un [hard fork](/es/glosario/bifurcacion) para esa cadena separada. Sus notas de la versión fechan la división el 8 de agosto. Reemplaza la [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work) de Bitcoin por un algoritmo distinto, BLAKE2b, y activa los límites de datos del BIP 110 en el momento del cambio. El software anterior no puede seguir los bloques nuevos. La página que enlazan esas notas da el bloque 961,640, del 30 de agosto de 2026, como el primer bloque BLAKE2b. La versión más reciente de Knots en octubre de 2026, la 29.4.2, sigue esa misma cadena BLAKE2b.

En la instantánea de bitnodes.io del 9 de octubre de 2026, la división se nota en las alturas de bloque que reportan los nodos. Los nodos con versiones de Knots hasta el 8 de mayo de 2026 reportan casi todos la altura de la cadena principal. Los que corren la 29.3.knots20260508 o la 29.4 están casi todos atascados en 961,639, donde la cadena separada se estancó antes del cambio. Los nodos con la 29.4.1 o la 29.4.2 reportan alturas de la cadena BLAKE2b.

Para el debate sobre los datos en las transacciones de Bitcoin que llevó al BIP 110, lee [Inscripciones (en inglés)](/glossary/inscriptions).
