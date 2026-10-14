---
title: "PayJoin"
slug: payjoin
draft: false
published: "2026-10-15"
shortDefinition: "Una transacción colaborativa (también llamada P2EP) en la que quien envía y quien recibe aportan entradas, lo que confunde el análisis habitual de entradas y salidas."
keyTakeaways:
  - "Las dos partes aportan entradas a una sola transacción"
  - "Rompe los supuestos simplistas del análisis de cadena"
  - "Requiere que la billetera lo implemente, pero puede ocurrir sobre la marcha"
aliases:
  - "P2EP"
  - "Pay-to-Endpoint"
  - "payjoins"
sources:
  - { label: "BIP-78 - A Simple Payjoin Proposal", url: "https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki" }
  - { label: "BIP-77 - Async Payjoin", url: "https://github.com/bitcoin/bips/blob/master/bip-0077.md" }
  - { label: "Blockstream - Improving Privacy Using Pay-to-EndPoint (P2EP) (2018)", url: "https://blog.blockstream.com/en-improving-privacy-using-pay-to-endpoint/" }
  - { label: "Bitcoin Optech - Payjoin topic", url: "https://bitcoinops.org/en/topics/payjoin/" }
relatedTerms:
  - address-clustering
  - address-reuse
  - coinjoin
  - mixing-service
  - shielded-coinjoin
  - stealth-address
sameAs:
  - "https://en.bitcoin.it/wiki/PayJoin"
  - "https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki"
  - "https://bitcoinops.org/en/topics/payjoin/"
liveWidget: ~
translationOf: payjoin
sourceHash: "9bd29fdfa7fa"
sourceCommit: "c599b9b"
sourceUpdated: "2026-10-02"
translation:
  method: "llm-draft"
---

PayJoin (también llamado Pay-to-Endpoint, P2EP) es un formato de transacción que mejora la privacidad: quien envía *y* quien recibe aportan [entradas](/es/glosario/entrada-de-transaccion). El resultado es un pago on-chain que derrota una de las heurísticas más fuertes del [análisis de cadena](/es/glosario/analisis-de-cadena): "todas las entradas de una transacción tienen el mismo dueño".

Un pago normal: quien envía aporta las entradas y quien recibe no aporta nada. Los analistas de cadena dan por hecho que todas las entradas de la transacción pertenecen a una misma billetera, y usan eso para agrupar direcciones.

Un PayJoin: quien envía aporta sus entradas *y quien recibe añade al menos una entrada propia* antes de firmar. La transacción ahora tiene entradas de dos billeteras distintas. La heurística de propiedad común de las entradas se rompe: cualquier analista que la aplique va a fusionar dos billeteras sin relación en un solo grupo falso.

Ganancias prácticas:

- **Para quien envía:** el supuesto del analista de que todas las entradas de tu transacción son tuyas pasa a ser falso. Los análisis de agrupación anteriores quedan contaminados.
- **Para quien recibe:** el monto que le pagaron queda oculto, porque su salida también lleva el valor de la moneda que añadió.
- **Quien recibe** además consigue algo de [consolidación (en inglés)](/glossary/consolidation-transaction) de paso: gasta un UTXO viejo en el mismo momento en que le pagan.

El problema es la coordinación: las dos billeteras tienen que hablarse antes de transmitir la transacción. Estándares como [BIP 78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki) definen un protocolo PayJoin sobre HTTP en el que quien recibe corre un endpoint. Una segunda versión, BIP 77 (PayJoin asíncrono, incorporado en 2025), pasa los mensajes por un servidor intermedio de almacenamiento y reenvío en el que no hace falta confiar, llamado directorio, al que se llega por Oblivious HTTP para que el directorio no pueda vincular a ninguna de las partes con una dirección IP. Quien recibe ya no necesita correr un servidor ni estar en línea en el momento del pago.

PayJoin no se parece a [CoinJoin](/es/glosario/coinjoin) ni en escala ni en intención. CoinJoin es una mezcla por lotes entre muchas partes, para ganar privacidad a posteriori. PayJoin es privacidad entre dos partes en un pago corriente. Los dos sirven; PayJoin es mucho más difícil de censurar o de combatir de forma coordinada, porque un PayJoin bien hecho parece un pago normal.

Consulta [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin) para ver dónde encaja PayJoin entre las herramientas que parecen uso corriente.
