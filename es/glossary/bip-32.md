---
title: "BIP 32 (billeteras HD)"
slug: bip-32
translationOf: bip-32
sourceHash: "517f93dbd184"
sourceCommit: "b8304cf"
sourceUpdated: "2026-10-13"
translation: { method: "llm-draft" }
draft: false
published: "2026-10-13"
shortDefinition: "El estándar de Pieter Wuille de 2012 para la derivación determinista de claves: una semilla se convierte en un árbol de claves, todas reproducibles a partir de un solo respaldo."
keyTakeaways:
  - "Define las claves extendidas (xpub / xprv) y la derivación de claves hijas mediante HMAC-SHA512"
  - "La derivación endurecida (índice >= 2^31) cierra el ataque de recuperación de la clave padre"
  - "Ampliamente adoptado: Bitcoin Core deriva claves así desde la versión 0.13 (2016), y el BIP 39 y el BIP 44 se apoyan en él"
sources:
  - { label: "BIP-32 - Hierarchical Deterministic Wallets (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "BIP-44 - Multi-Account Hierarchy for Deterministic Wallets: hardened derivation at the purpose, coin type and account levels (2014)", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys: the derived seed is 512 bits and feeds BIP-32 (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Bitcoin Core - 0.13.0 release notes: newly created wallets use hierarchical deterministic key generation according to BIP32 (2016-08-23)", url: "https://bitcoincore.org/en/releases/0.13.0/" }
  - { label: "BIP-380 - Output Script Descriptors General Operation, Motivation: not all wallets support or use the standard derivation paths (2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki" }
relatedTerms:
  - bip-39
  - bip-44
  - bip-bitcoin-improvement-proposal
  - chaincode
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-aggregation
  - seed-phrase
  - xpub-extended-public-key
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0032"
liveWidget: ~
---

El BIP 32, escrito por Pieter Wuille en febrero de 2012, es el estándar fundacional de las billeteras HD (jerárquicas deterministas) de Bitcoin. Una semilla de 128 a 512 bits (la semilla del BIP 39 tiene 512) produce un árbol de claves, todas reproducibles a partir de esa única semilla. Respalda la semilla y habrás respaldado todas las claves que tu billetera llegue a derivar.

La construcción es sencilla. La semilla pasa por HMAC-SHA512 con la clave fija "Bitcoin seed", y el resultado de 512 bits se divide en una clave privada maestra de 256 bits y un chaincode (código de cadena) de 256 bits, empaquetados juntos como una clave privada extendida (`xprv`). Para derivar una clave hija, se calcula HMAC-SHA512 sobre la clave padre y el índice del hijo, usando el chaincode como clave del HMAC. La mitad izquierda del resultado, sumada a la clave padre, da la clave hija; la mitad derecha es el nuevo chaincode. Se repite en cada nivel para recorrer el árbol.

Hay dos modos de derivación que importan:

- **No endurecida** (non-hardened, índice del hijo < 2^31). La clave pública hija se puede derivar a partir de la clave pública padre más el chaincode. Esto es lo que hace que el xpub sea útil: entrégale el xpub a alguien y podrá derivar todas las direcciones de recepción sin ver nunca el lado privado.
- **Endurecida** (hardened, índice del hijo >= 2^31). La derivación requiere la clave privada padre. Un atacante que obtenga una clave privada hija endurecida no puede reconstruir la clave padre ni las claves hermanas. Esto cierra un ataque famoso contra la derivación no endurecida. Por convención, el BIP 44 usa derivación endurecida en las rutas a nivel de cuenta, para que una clave de cuenta filtrada no comprometa las demás cuentas.

Por qué importa en la práctica:

- **Un respaldo, direcciones infinitas.** Genera una dirección nueva para cada transacción sin hacer más respaldos.
- **Billeteras de solo lectura.** Importa un xpub en una app del celular para monitorear el saldo de una billetera de hardware (hardware wallet) sin exponer ninguna clave privada.
- **Separación entre cuentas.** El [BIP 44 (en inglés)](/glossary/bip-44) usa rutas endurecidas a nivel de cuenta, para que una cuenta expuesta no contamine a sus hermanas.
- **Portabilidad entre billeteras.** Restaura la semilla en otra billetera que use la misma ruta de derivación y el mismo tipo de script y obtendrás las mismas direcciones; el BIP 32 deja la disposición del árbol como una simple recomendación, y por eso el BIP 44 y los descriptores de salida la fijan. La semilla es el activo; el software es reemplazable.

El BIP 32 por sí solo dice únicamente que la semilla es una secuencia de bytes aleatorios; no especifica cómo respaldarla en una forma que una persona pueda anotar. De eso se encarga el [BIP 39](/es/glosario/bip-39): las frases semilla mnemónicas (también llamadas frases de recuperación). Juntos son la base de la autocustodia moderna en Bitcoin.

Especificación: [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).
