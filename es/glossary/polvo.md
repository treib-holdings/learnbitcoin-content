---
title: "Polvo (dust)"
slug: polvo
draft: false
published: "2026-10-14"
updated: "2026-10-21"
shortDefinition: "Una cantidad muy pequeña de BTC en un UTXO, muchas veces por debajo de la comisión que haría falta para gastarla de forma rentable."
keyTakeaways:
  - "Salidas tan pequeñas que gastarlas cuesta más en comisiones de lo que valen"
  - "Una consolidación puede limpiar el polvo cuando las comisiones de la red están bajas"
  - "Posible vector de ataques contra la privacidad (los 'ataques de polvo')"
aliases:
  - "polvo"
  - "dust"
sources:
  - { label: "Bitcoin Core - GetDustThreshold in src/policy/policy.cpp (546 satoshis for a legacy output and 294 for P2WPKH at the default dust relay rate of 3,000 sat/kvB)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/policy/policy.cpp" }
  - { label: "Bitcoin Core 29.0 release notes - ephemeral dust: a single dust output is allowed in a zero-fee transaction, provided the spender of any of its outputs also spends the dust (2025)", url: "https://bitcoincore.org/en/releases/29.0/" }
  - { label: "Bitcoin Core 29.1 release notes - minrelaytxfee and incrementalrelayfee defaults lowered to 100 satoshis per kvB, which is 0.1 sat/vB (September 4, 2025)", url: "https://bitcoincore.org/en/releases/29.1/" }
  - { label: "Bitcoin Core 30.0 release notes - the same two defaults restated as 0.1 satoshis per vB (October 10, 2025)", url: "https://bitcoincore.org/en/releases/30.0/" }
  - { label: "Bitcoin Optech - Uneconomical outputs (dust) topic: outputs worth less than the fee to spend them, the dust limit, and dust attacks", url: "https://bitcoinops.org/en/topics/uneconomical-outputs/" }
  - { label: "Bitcoin Optech - Transaction size calculator (a P2WPKH input is 68 vbytes: 36-byte outpoint, 1-byte scriptSig length, 4-byte sequence and 27 vbytes of witness)", url: "https://bitcoinops.org/en/tools/calc-size/" }
  - { label: "Bitcoin Wiki - Bitcoin faucet (sites that purport to pay bitcoin for free but often pay such paltry sums as to make the effort pointless)", url: "https://en.bitcoin.it/wiki/Bitcoin_faucet" }
relatedTerms:
  - address-reuse
  - discard-threshold
  - dust-attack
  - dust-limit
  - dust-sweeping
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
translationOf: dust
sourceHash: "90ed8f1d5dae"
sourceCommit: "044488a"
sourceUpdated: "2026-10-21"
translation:
  method: "llm-draft"
---

El polvo (dust) es un [UTXO](/es/glosario/utxo) tan pequeño que gastarlo costaría más en comisiones de transacción de lo que vale. No hay un umbral fijo para eso: depende de la tasa de comisión en el momento en que quieras gastarlo.

Una regla aproximada: a 10 sat/vB, gastar una entrada P2WPKH típica cuesta unos 680 satoshis en comisiones. Cualquier UTXO más pequeño que eso es polvo en ese momento. A 50 sat/vB, lo es cualquiera menor que unos 3,400 sats. El polvo depende de las condiciones de la red, no de una cifra fija.

De dónde sale el polvo:

- **Sobras de cambio.** Una transacción que paga X y devuelve Y-X-comisión como cambio puede, de vez en cuando, dejar un cambio tan pequeño que entra en esta categoría.
- **Faucets (sitios que reparten sats a cuentagotas) y regalos promocionales.** Los pagos promocionales suelen ser una miseria a propósito.
- **[Ataques de polvo](/es/glosario/ataque-de-polvo).** Un atacante manda cantidades pequeñas a muchas direcciones con la esperanza de que, más adelante, quienes las reciben combinen esas salidas de polvo con sus otros UTXOs en una sola transacción, lo que vincula las direcciones públicamente y ayuda al atacante a mapear una billetera.

Bitcoin Core también impone un piso en su política de retransmisión, el [límite de polvo](/es/glosario/limite-de-polvo), por debajo del cual no retransmite una transacción: 546 sats para una salida P2PKH legacy (la de formato antiguo) y 294 sats para una P2WPKH, a la tasa de comisión de polvo por defecto de 3 sat/vB. Las salidas por debajo del límite no son estándar y no se propagan, con una excepción muy acotada desde Bitcoin Core 29.0: el polvo efímero, una única salida de polvo en una transacción sin comisión que una transacción hija, retransmitida junto con ella, gasta de inmediato. Crear una salida que está por encima del límite pero que sigue siendo polvo en términos económicos es válido; solo resulta caro gastarla.

Si tienes polvo, lo más sensato suele ser esperar. Cuando las comisiones bajan a 1 sat/vB o menos (hay periodos de calma, y desde Bitcoin Core 29.1, en septiembre de 2025, el piso de retransmisión por defecto es 0.1 sat/vB), puedes [barrer](/es/glosario/barrido-de-polvo) muchos UTXOs de polvo en una sola salida más grande con una [transacción de consolidación (en inglés)](/glossary/consolidation-transaction). Eso sí: consolidar polvo vincula las direcciones involucradas, así que hazlo a conciencia, no a la ligera.
