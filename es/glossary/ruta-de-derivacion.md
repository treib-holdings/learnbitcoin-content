---
title: "Ruta de derivación"
slug: ruta-de-derivacion
translationOf: address-derivation-path
sourceHash: "95059a63d810"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
aliases:
  - "rutas de derivación"
  - "derivation path"
draft: false
published: "2026-10-14"
shortDefinition: "Una ruta estructurada dentro de una billetera HD (jerárquica determinista), por ejemplo m/44'/0'/0'/0/0, para generar una secuencia de claves y direcciones."
keyTakeaways:
  - "Estructura cómo las billeteras HD generan múltiples direcciones"
  - "Se especifica en BIPs como el BIP 32 y el BIP 44"
  - "Garantiza la interoperabilidad y la organización entre billeteras"
sources:
  - { label: "BIP-44 - Multi-Account Hierarchy for Deterministic Wallets: m / purpose' / coin_type' / account' / change / address_index, apostrophe for hardened derivation at the first three levels; change 0 is the external chain and 1 the internal chain for change; accounts numbered from 0; coin type 0 is Bitcoin, 1 Bitcoin Testnet (2014)", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "BIP-32 - Hierarchical Deterministic Wallets: knowledge of a parent extended public key plus any non-hardened private key descending from it is equivalent to knowing the parent extended private key (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "BIP-86 - Key Derivation for Single Key P2TR Outputs: purpose 86', the same account structure as BIP-44, BIP-49 (P2WPKH nested in P2SH) and BIP-84 (P2WPKH), with a different purpose value per script type (2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0086.mediawiki" }
  - { label: "BIP-48 - Multi-Script Hierarchy for Multi-Sig Wallets: m / purpose' / coin_type' / account' / script_type' / change / address_index with purpose 48' (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0048.mediawiki" }
  - { label: "Bitcoin Core - src/wallet/walletutil.cpp, GenerateWalletDescriptor: legacy descriptors on 44h, P2SH-SegWit on 49h, bech32 on 84h, bech32m on 86h", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/walletutil.cpp" }
  - { label: "BIP-380 - Output Script Descriptors: the hardened indicator h may be replaced with an apostrophe; not all wallets support or use the standard derivation paths of BIPs 44, 49 and 84 (2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki" }
relatedTerms:
  - address
  - address-indexing
  - bip-32
  - bip-39
  - bip-44
  - chaincode
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - seed-entropy-mixer
  - seed-phrase
  - seed-tool
liveWidget: ~
---

Una ruta de derivación es la ruta, separada por barras, que entra en el árbol de una billetera HD del [BIP 32](/es/glosario/bip-32) y le dice a la billetera exactamente qué clave derivar a partir de la semilla maestra. El formato, tal como lo fija el [BIP 44 (en inglés)](/glossary/bip-44), es:

```
m / purpose' / coin_type' / account' / change / address_index
```

El apóstrofo (que muchas veces se escribe `h`) marca un nivel de derivación endurecida. Los tres primeros niveles van endurecidos para que una clave pública extendida más una clave hija filtrada no puedan convertirse en las claves de las cuentas vecinas.

Las convenciones del nivel purpose en la práctica:

- **BIP 44** (`m/44h/0h/0h/0/0`) - la convención multicuenta original. Direcciones Legacy P2PKH `1...`.
- **BIP 49** (`m/49h/0h/0h/0/0`) - SegWit envuelto en P2SH (direcciones `3...`).
- **BIP 84** (`m/84h/0h/0h/0/0`) - SegWit nativo (direcciones `bc1q...`). Las billeteras con descriptores de Bitcoin Core derivan aquí sus direcciones bc1q.
- **BIP 86** (`m/86h/0h/0h/0/0`) - Taproot (direcciones `bc1p...`).
- **BIP 48** (`m/48h/0h/0h/<script>h/0/0`) - la convención para multisig, con un nivel extra para el tipo de script.

Cómo leer cada parte:

- `purpose` - qué especificación rige el formato de dirección por debajo de este nivel.
- `coin_type` - el tipo de moneda registrado. Bitcoin es 0; la testnet es 1; otras cadenas tienen el suyo.
- `account` - un índice de cuenta independiente. La cuenta 0 es la predeterminada; las cuentas 1, 2 y siguientes mantienen fondos separados bajo una misma semilla.
- `change` - 0 para las direcciones de recepción (el BIP 44 la llama la cadena externa), 1 para las direcciones de [cambio](/es/glosario/salida-de-cambio) (la cadena interna).
- `address_index` - el contador secuencial de las direcciones individuales.

La misma semilla más la misma ruta de derivación produce siempre la misma clave privada, en cualquier billetera que siga la convención. Por eso una frase semilla (también llamada frase de recuperación) del [BIP 39](/es/glosario/bip-39) es portátil: impórtala en cualquier billetera que use el BIP 84 (o el 86, o el 44, o la convención que haya generado las direcciones) y recuperas las mismas claves.

Una ruta de derivación que no coincide es la falla clásica de "restauré mi billetera y no veo mi saldo": la semilla está bien, pero la billetera está mirando otra rama del árbol. No todas las billeteras usan las rutas estándar, como señala el BIP 380, así que a veces hay que escribir la ruta a mano al restaurar.
