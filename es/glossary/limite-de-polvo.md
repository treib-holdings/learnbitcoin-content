---
title: "Límite de polvo (dust limit)"
slug: limite-de-polvo
aliases:
  - "límites de polvo"
  - "umbral de polvo"
  - "umbrales de polvo"
  - "dust limit"
  - "dust threshold"
draft: false
published: "2026-10-15"
shortDefinition: "Un umbral por debajo del cual una salida se considera polvo y la política por defecto de los nodos la rechaza como no estándar (por ejemplo, unos 546 sats para una salida P2PKH legacy)."
keyTakeaways:
  - "Evita que salidas insignificantes inunden la red"
  - "Varía según el tipo de script (legacy frente a SegWit, por ejemplo)"
  - "Es política de los nodos, no una regla de consenso estricta, pero se aplica en casi toda la red"
sources:
  - { label: "Bitcoin Core - GetDustThreshold in src/policy/policy.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/policy/policy.cpp" }
  - { label: "Bitcoin Core - DUST_RELAY_TX_FEE default in src/policy/policy.h", url: "https://github.com/bitcoin/bitcoin/blob/master/src/policy/policy.h" }
  - { label: "Bitcoin Core 29.0 release notes - ephemeral dust", url: "https://bitcoincore.org/en/releases/29.0/" }
  - { label: "Bitcoin Optech - Uneconomical outputs (dust) topic", url: "https://bitcoinops.org/en/topics/uneconomical-outputs/" }
relatedTerms:
  - discard-threshold
  - dust
  - dust-attack
  - dust-sweeping
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
translationOf: dust-limit
sourceHash: "a6f75fc7324a"
sourceCommit: "fa94f44"
sourceUpdated: "2026-10-02"
translation:
  method: "llm-draft"
---

El límite de polvo es el umbral de la política de Bitcoin Core por debajo del cual una salida se considera "polvo" y la transacción se trata como no estándar: el nodo no la retransmite ni la admite en su mempool, con una excepción muy acotada que se explica más abajo.

El umbral exacto depende del tipo de script de la salida, porque el cálculo toma en cuenta lo que costará *gastar* esa salida más adelante: una salida es polvo si gastarla costaría más en comisiones que el valor que mueve. En 2026:

- **P2PKH (legacy)**: unos 546 sats.
- **P2SH**: unos 540 sats.
- **P2WPKH (SegWit nativo)**: unos 294 sats (menos, porque una entrada SegWit es más pequeña).
- **P2TR (Taproot)**: unos 330 sats.
- Las salidas **OP_RETURN** están exentas porque son demostrablemente imposibles de gastar (no hay un costo futuro de gasto que amortizar).

La fórmula en Bitcoin Core: `dust_threshold = (output_size + input_size) * dustRelayFee / 1000`, donde `dustRelayFee` vale 3,000 sats/kvB por defecto. Quien opera el nodo puede ajustar esa tasa de comisión, y el umbral cambia en la misma proporción.

Qué significa "no estándar" en la práctica:

- **Los nodos de Bitcoin Core con la configuración por defecto no retransmiten** transacciones con salidas de polvo. La transacción es, en la práctica, invisible para casi toda la red. La única excepción, desde Bitcoin Core 29.0, es el polvo efímero: una transacción sin comisión puede llevar una sola salida de polvo si una transacción hija, retransmitida junto con ella, gasta esa salida.
- **La política de minería por defecto de Bitcoin Core no las incluye** en los bloques candidatos.
- **Las reglas de consenso no las rechazan.** Una transacción con polvo puede, técnicamente, estar en un bloque; la política es un filtro de retransmisión (qué se considera estándar), no una regla estricta. Algunos mineros y pools aceptan transacciones con polvo por envío fuera de banda, a cambio de una comisión.

Por qué existe el límite:

- **Crecimiento del conjunto de UTXOs.** Cada salida que un nodo guarda cuesta espacio en disco y memoria caché. Las salidas de polvo que nadie va a gastar nunca inflan el conjunto de UTXOs para siempre.
- **Racionalidad económica.** Si gastar una salida cuesta más de lo que vale, nadie la va a gastar nunca: queda atascada de forma permanente. Mejor no crearla desde el principio.
- **Resistencia al spam.** Las salidas minúsculas son una forma barata de abusar de la red. El límite de polvo sube el costo.

Los usuarios suelen toparse con el límite de polvo solo en los casos límite: al armar una transacción con una salida de cambio muy pequeña o al intentar enviar una cantidad minúscula. La billetera o bien suma el polvo a la comisión o bien se niega a construir la transacción, según cómo esté diseñada.
