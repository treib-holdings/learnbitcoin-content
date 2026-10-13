---
title: "Satoshi (unidad)"
slug: satoshi-unidad
translationOf: satoshi-unit
sourceHash: "f9d4ae271a3f"
sourceCommit: "01378cb"
sourceUpdated: "2026-05-14"
translation:
  method: "llm-draft"
published: "2026-10-13"
draft: false
shortDefinition: "La unidad más pequeña de Bitcoin: 1 sat = 0.00000001 BTC (100 millones de sats = 1 BTC)."
keyTakeaways:
  - "Unidad fundamental del registro de Bitcoin; facilita expresar cantidades pequeñas"
  - "De uso común en Lightning y en contextos de microtransacciones"
  - "Parte central de la discusión sobre qué denominación de BTC usar en el día a día"
sources:
  - { label: "Bitcoin Units rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/bitcoin-units" }
relatedTerms:
  - bitcoin-pizza-day
  - satoshi-nakamoto
  - transaction
liveWidget: ~
---

Un satoshi (sat) es la unidad más pequeña de Bitcoin. **1 BTC = 100,000,000 sats.** Debajo del sat no hay nada: en la cadena, Bitcoin no se puede dividir más. (Lightning opera internamente en milisats para enrutar con más precisión, pero esos no existen en la cadena base.)

Bautizado en honor a Satoshi Nakamoto, el sat es la unidad entera con la que trabaja el protocolo. Internamente, Bitcoin Core lleva todos los saldos y montos en satoshis. "BTC" es una forma legible para humanos de mostrar el número de sats dividido entre 100,000,000.

En la cultura de las billeteras de 2026, los sats son cada vez más la unidad por defecto para hablar de Bitcoin en contextos cotidianos:

- **Los saldos en Lightning** se muestran en sats casi sin excepción.
- **Las tasas de comisión** siempre se expresan en sats por byte virtual (sat/vB).
- **La cultura de los stackers** usa "stacking sats" (acumular sats) como la frase estándar para hablar de juntar BTC.
- **Las propinas y los pagos pequeños** se denominan en sats: "1,000 sats" se lee mejor que "0.00001 BTC".
- **Los zaps de Nostr**, que corren sobre Lightning, se expresan únicamente en sats.

Un ancla mental útil: con un precio de $1,000,000 (dólares estadounidenses) por BTC, que muchos esperan dentro de una o dos décadas, **1 sat = $0.01**. El sat se convierte en el "centavo" cotidiano de Bitcoin. Esa convergencia explica por qué los sats son cada vez más la unidad natural incluso para quienes no viven metidos en la cultura de Lightning.

Consulta el tema a fondo [Unidades de Bitcoin (en inglés)](/rabbit-hole/bitcoin-units) para ver la escala completa de unidades y dónde quedan las intermedias (mBTC, uBTC, Finney).
