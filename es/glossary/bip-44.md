---
title: "BIP 44"
slug: bip-44
aliases:
  - "BIP-44"
  - "BIP 44"
draft: false
published: "2026-10-15"
shortDefinition: "Amplía el marco de billeteras HD del BIP 32 para admitir varias cuentas, varios tipos de moneda y estructuras de organización."
keyTakeaways:
  - "Ofrece una estructura multicuenta estándar para las billeteras HD"
  - "Permite varios tipos de moneda bajo una misma frase semilla"
  - "Mejora la compatibilidad entre billeteras distintas"
sources:
  - { label: "BIP 44 - Multi-Account Hierarchy for Deterministic Wallets, by Marek Palatinus and Pavol Rusnak (the m / purpose' / coin_type' / account' / change / address_index layout, hardened at the first three levels, change 0 for receiving and 1 for change; status Deployed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "BIP 32 - Hierarchical Deterministic Wallets (hardened child keys cannot be derived from an extended public key; a parent xpub plus any non-hardened child private key is equivalent to the parent xprv, which is why the account level is hardened)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "SLIP-0044 - Registered coin types for BIP-0044 (coin type 0 is Bitcoin; created 2014-07-09)", url: "https://github.com/satoshilabs/slips/blob/master/slip-0044.md" }
  - { label: "BIP 49 - Derivation scheme for P2WPKH-nested-in-P2SH based accounts (purpose 49'; status Deployed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki" }
  - { label: "BIP 84 - Derivation scheme for P2WPKH based accounts (purpose 84'; status Deployed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki" }
  - { label: "BIP 86 - Key Derivation for Single Key P2TR Outputs (purpose 86'; status Deployed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0086.mediawiki" }
relatedTerms:
  - address-derivation-path
  - bip-bitcoin-improvement-proposal
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - seed-phrase
  - xpub-extended-public-key
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0044"
liveWidget: ~
translationOf: bip-44
sourceHash: "313f12c1be95"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

El [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) define la estructura estándar de rutas de derivación para las [billeteras HD (jerárquicas deterministas)](/es/glosario/billetera-hd). Es la convención que te permite respaldar una [frase semilla](/es/glosario/frase-semilla) en una billetera y restaurar las mismas cuentas en cualquier otra billetera compatible con el BIP 44.

La estructura de la ruta es:

```
m / purpose' / coin_type' / account' / change / address_index
```

En concreto, la primera dirección de recepción de la primera cuenta de Bitcoin sería:

```
m / 44' / 0' / 0' / 0 / 0
```

Qué significa cada nivel:

- **44'**: el número de propósito (purpose), fijo en 44 para la derivación al estilo del BIP 44. (Existen otros propósitos: 49' para SegWit envuelto en P2SH, 84' para SegWit nativo, 86' para Taproot.)
- **0'**: el tipo de moneda (coin type), donde Bitcoin es 0. Las demás cadenas tienen su propio número según [SLIP-44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).
- **0'**: el número de cuenta. Te permite tener "cuentas" separadas dentro de una misma billetera (por ejemplo, ahorro frente a gasto).
- **0**: el indicador de cambio. 0 = direcciones de recepción, 1 = direcciones internas de cambio.
- **0**: el índice de dirección. Aumenta en uno con cada dirección nueva.

Los apóstrofos significan derivación "endurecida" (hardened): un nivel que no puede derivarse a partir de una clave *pública* extendida padre, solo a partir de la privada. El BIP 32 endurece el nivel de cuenta por una razón: una clave pública extendida más cualquier clave privada no endurecida por debajo de ella delata la clave privada extendida padre, así que, con el nivel de cuenta endurecido (y los dos niveles por encima), una filtración dentro de una cuenta no puede llegar a la clave maestra ni a las demás cuentas.

El BIP 44 es la especificación que convirtió "respalda tu frase semilla" en un estándar portátil, confiable y con muchas implementaciones. La mayoría de las billeteras con frase semilla lo siguen, o siguen uno de sus BIPs hermanos para otros tipos de dirección (BIP 49, BIP 84, BIP 86), todos marcados como desplegados en el repositorio de BIPs. Consulta [Billetera HD (jerárquica determinista)](/es/glosario/billetera-hd) para el marco del [BIP 32](/es/glosario/bip-32) sobre el que se construye.
