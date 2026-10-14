---
title: "BIP 50"
slug: bip-50
aliases:
  - "BIP-50"
  - "postmortem de 2013"
  - "postmortem de la bifurcación de 2013"
  - "postmortem del fork de 2013"
draft: false
published: "2026-10-15"
shortDefinition: "El postmortem de la bifurcación de la cadena de marzo de 2013, cuando Bitcoin 0.8 y las versiones anteriores discreparon sobre si un bloque era válido y la red quedó dividida durante casi ocho horas."
keyTakeaways:
  - "Lo escribió Gavin Andresen y recibió su número el 20 de marzo de 2013; registra un incidente y no propone ningún cambio de protocolo"
  - "Causa raíz: las versiones anteriores limitaban su base de datos Berkeley DB a 10,000 locks (bloqueos internos), un límite accidental sobre los bloques que cambiaba de un nodo a otro; la versión 0.8 pasó a LevelDB y dejó de tenerlo"
  - "El texto se revisó en febrero de 2016, así que una cita suya no siempre es la redacción de 2013"
sources:
  - { label: "BIP-50 - March 2013 Chain Fork Post-Mortem", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "BIP-50 revision history", url: "https://github.com/bitcoin/bips/commits/master/bip-0050.mediawiki" }
  - { label: "bitcoin.org - 11/12 March 2013 Chain Fork Information", url: "https://bitcoin.org/en/alert/2013-03-11-chain-fork" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block
  - fork
  - chain-split
  - reorg-reorganization
  - double-spend
liveWidget: ~
translationOf: bip-50
sourceHash: "8bc8f3ac24b9"
sourceCommit: "6637eb3"
translation:
  method: "llm-draft"
---

BIP 50 no es un cambio de protocolo. Es un postmortem.

El 11 de marzo de 2013 la red se dividió. Las versiones de Bitcoin anteriores a la 0.8 guardaban su índice de bloques en Berkeley DB y la habían configurado con un techo de 10,000 locks (los bloqueos internos con los que la base de datos protege sus páginas). Nadie había tratado ese número como una regla sobre los bloques, pero lo era: un bloque que tocara demasiadas transacciones anteriores agotaba los locks, y el nodo rechazaba el bloque como inválido. Como los locks se toman por página de la base de datos, el techo exacto dependía de cómo hubiera quedado organizada la base de datos de cada nodo, así que ni siquiera era la misma regla en todas las máquinas. La versión 0.8 reemplazó Berkeley DB por LevelDB y perdió el límite sin que nadie lo notara.

A la altura de bloque 225,430, un minero con la 0.8 produjo un bloque de unos 998 kB, por debajo del límite de un megabyte, que superaba el techo de locks en muchos nodos antiguos. Los nodos con la 0.8 lo aceptaron. Los nodos antiguos lo rechazaron y construyeron una cadena distinta. Alrededor del 60% del poder de cómputo estaba del lado de la 0.8.

La solución fue ir hacia atrás. Tras una discusión en la sala de chat pública de los desarrolladores, el pool más grande devolvió su hashrate al software antiguo, para que la cadena que todos los nodos podían seguir alcanzara y superara a la más larga. Lo logró 7 horas y 41 minutos después del bloque que lo desató todo, y los 25 bloques de la cadena de la 0.8 quedaron abandonados. Un comercio, el procesador de pagos OKPay, sufrió un doble gasto de unos $10,000 (dólares estadounidenses) durante ese lapso y recibió un reembolso.

BIP 50 también registra la reparación: la versión 0.8.1 limitó temporalmente los bloques a lo que los nodos antiguos podían manejar, se dio plazo hasta el 15 de mayo de 2013 para actualizar, y el 16 de agosto de 2013 se minó un bloque que los nodos sin parchar ya no podían seguir.

Lo que se cita del documento es la lección. Cualquier cosa que cambie qué bloques acepta un nodo es un cambio de consenso, incluida una biblioteca de base de datos que nunca debió tener opinión.

Léelo con una salvedad. Partes del texto se reescribieron en febrero de 2016, así que no es un relato puramente contemporáneo, y algunos de sus detalles difieren del registro del chat de esa noche.

Más a fondo en [La bifurcación de la cadena de 2013](/es/a-fondo/bifurcacion-de-2013), que sigue el incidente desde el registro del chat, con las horas exactas, y corrige varios detalles de la versión que suele contarse.

Especificación: [BIP-50](https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki).
