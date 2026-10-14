---
title: "Whitepaper"
slug: whitepaper
draft: false
published: "2026-10-13"
shortDefinition: "La publicación original de Satoshi Nakamoto de 2008, 'Bitcoin: A Peer-to-Peer Electronic Cash System', que detalla el diseño de Bitcoin."
keyTakeaways:
  - "Documento pionero que inventó la moneda digital descentralizada"
  - "Explica los encabezados de bloque, la prueba de trabajo (PoW) y el consenso entre pares"
  - "Considerado un hito de la innovación criptográfica y monetaria"
aliases:
  - "whitepaper de Bitcoin"
avoid:
  - "white paper"
  - "libro blanco"
sources:
  - { label: "mempool.space - genesis block 0, mined January 3, 2009", url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
relatedTerms:
  - bitcoin-pizza-day
  - genesis-block
  - hal-finneys-running-bitcoin
  - satoshi-nakamoto
liveWidget: ~
translationOf: whitepaper
sourceHash: "c0d84ac5ea39"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

El whitepaper de Bitcoin es el documento fundacional de la red: un PDF de nueve páginas titulado *Bitcoin: A Peer-to-Peer Electronic Cash System*, publicado por [Satoshi Nakamoto](/es/glosario/satoshi-nakamoto) el 31 de octubre de 2008. Describe, con una brevedad y una precisión poco comunes, la idea central completa de Bitcoin.

Lo que de verdad hay en esas nueve páginas:

1. **Transacciones como cadenas de firmas**: el mecanismo central con el que se transfiere la propiedad de las monedas.
2. **El problema del doble gasto y la solución propuesta**: poner marca de tiempo a las transacciones en una cadena verificada públicamente mediante [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work).
3. **El modelo de red**: nodos que transmiten, validan y convergen en la cadena más larga.
4. **Los incentivos**: el [subsidio de bloque](/es/glosario/subsidio-de-bloque) más las comisiones de transacción como el motor económico que asegura la red.
5. **Privacidad mediante la rotación de direcciones**: tratada de forma explícita; el whitepaper anticipó desde el principio el problema de la [reutilización de direcciones](/es/glosario/reutilizacion-de-direcciones).
6. **Un análisis de seguridad hecho en una servilleta**: el argumento probabilístico de por qué la prueba de trabajo vuelve impracticable el doble gasto mientras una proporción razonable del hashrate (el poder de cómputo de la red) esté en manos honestas.

Lo que *no* está en el whitepaper: Lightning, SegWit, Taproot, las configuraciones multisig, los mercados de comisiones en un equilibrio de comisiones altas, las billeteras HD. Nada de eso existía todavía. Satoshi describió el chasis; todo lo que vino después se ha construido encima.

Puedes leer el whitepaper en unos 20 minutos. Son, de verdad, las nueve páginas más densas, más claras y de mayores consecuencias en la historia de la computación. Si nunca lo has leído, deberías hacerlo, sobre todo porque ha envejecido notablemente bien. Cada afirmación que hace sobre cómo funcionaría el sistema se ha sostenido desde que la red arrancó en enero de 2009.

Una copia servida desde este sitio está en [/bitcoin.pdf](/bitcoin.pdf) (PDF en inglés). Lee también [Satoshi Nakamoto](/es/glosario/satoshi-nakamoto) sobre el autor, [Bloque génesis](/es/glosario/bloque-genesis) sobre el arranque de la red dos meses después y el [Capítulo 2 del Recorrido](/es/recorrido/que-es-bitcoin-en-realidad) para una lectura guiada más larga.
