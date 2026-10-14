---
title: "Billetera HD (jerárquica determinista)"
slug: billetera-hd
aliases:
  - "billetera HD"
  - "billeteras HD"
  - "billetera jerárquica determinista"
  - "billeteras jerárquicas deterministas"
  - "HD wallet"
draft: false
published: "2026-10-13"
shortDefinition: "Una billetera que usa rutas de derivación de BIP 32 para crear un árbol de claves estructurado a partir de una sola semilla."
keyTakeaways:
  - "Permite recuperar todas las direcciones a partir de una sola semilla maestra"
  - "Sigue rutas de derivación estandarizadas (por ejemplo, BIP 44)"
  - "Un rasgo que define el diseño moderno de las billeteras de Bitcoin"
sources:
  - { label: "BIP-32 - Hierarchical Deterministic Wallets: knowing an extended public key allows reconstruction of all descendant non-hardened public keys; an xpub plus any non-hardened child private key equals the parent extended private key", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "BIP-360 - Pay-to-Merkle-Root (P2MR): extended public keys and wallet descriptors also reveal quantum vulnerable public key information", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
relatedTerms:
  - address-derivation-path
  - bip-32
  - bip-44
  - bip-85
  - bitcoin-dev-kit-bdk
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - chaincode
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - gui-wallet
  - hardware-seed-vault
  - hardware-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - public-key-exposure
  - seed-phrase
  - wallet
  - wallet-import-format-wif
  - xpub-extended-public-key
liveWidget: ~
translationOf: hd-wallet-hierarchical-deterministic-wallet
sourceHash: "62602f1cbe6c"
sourceCommit: "b4fda3b"
sourceUpdated: "2026-10-12"
translation:
  method: "llm-draft"
---

Una billetera HD (jerárquica determinista, por sus siglas en inglés) es el diseño estándar de las billeteras de Bitcoin: cada clave que la billetera vaya a necesitar se deriva de manera determinista a partir de una única semilla raíz. Respalda la semilla y habrás respaldado todo.

La estructura, definida en el [BIP 32](/es/glosario/bip-32):

- Una sola frase semilla (normalmente 12 o 24 palabras del [BIP 39](/es/glosario/bip-39)) más una passphrase opcional (la llamada "palabra 25") produce una semilla maestra de 512 bits.
- La semilla maestra se divide en una clave privada maestra y un chaincode (código de cadena) maestro.
- Las claves hijas se derivan con HMAC-SHA512, usando el chaincode de la clave padre como clave del HMAC sobre la clave padre y el índice; la mitad izquierda del resultado se suma a la clave padre para obtener la clave hija, y la mitad derecha se convierte en el chaincode propio de la hija. Cada hija es a su vez una clave padre que puede derivar sus propias hijas. Así se forma el árbol.
- Las rutas estandarizadas (BIP 44 para direcciones legacy, BIP 49 para SegWit envuelto, BIP 84 para SegWit nativo, BIP 86 para Taproot) le dicen a la billetera exactamente dónde buscar las direcciones.

Por qué dominan las billeteras HD:

- **Un solo respaldo lo cubre todo.** Anota 12 o 24 palabras y habrás respaldado todas las direcciones que tu billetera vaya a generar jamás, en todas las cuentas, por tiempo indefinido.
- **Portabilidad entre billeteras.** Importa una frase semilla BIP 39 en cualquier billetera que siga los estándares (Sparrow, BlueWallet, Electrum, Trezor, la que sea) y obtendrás las mismas direcciones.
- **Modo de solo lectura.** Entrégale a alguien la xpub (clave pública extendida) y podrá derivar todas las direcciones de recepción sin ver jamás una clave privada. Sirve para contabilidad, para monitoreo y para apps móviles de solo lectura respaldadas por una billetera de hardware (hardware wallet).
- **Separación en varias cuentas.** La estructura de rutas del BIP 44/84/86 incluye un nivel de cuenta, de modo que puedes mantener billeteras separadas lógicamente (`account 0` para lo personal, `account 1` para el negocio, etc.) a partir de una sola semilla.
- **Integración con billeteras de hardware.** El dispositivo de hardware guarda la semilla; la billetera de software solo ve la xpub. Gracias a las rutas de derivación estandarizadas, cualquier software compatible se empareja con cualquier hardware compatible.

Lo que las billeteras HD no son:

- **Una panacea para la privacidad.** Una [xpub](/es/glosario/xpub) es una clave pública padre más su chaincode, y con esas dos piezas cualquiera puede derivar todas las claves hijas no endurecidas (non-hardened) que cuelgan de ella (cada hija recibe su propio chaincode, calculado a partir del de su padre, así que la rama entera se despliega). Si se filtra, quien la tenga verá todas las direcciones de esa rama, pasadas y futuras.
- **Un motivo para repartir xpubs a la ligera.** El BIP 32 añade una advertencia más dura: "knowledge of a parent extended public key plus any non-hardened private key descending from it is equivalent to knowing the parent extended private key" (conocer una clave pública extendida padre más cualquier clave privada no endurecida que descienda de ella equivale a conocer la clave privada extendida padre). Si se filtra una sola clave privada hija junto con una xpub filtrada, quien las tenga posee las claves de gasto de la rama, no solo sus direcciones. La derivación endurecida (que se usa en los niveles superiores de la ruta) impide que esto siga subiendo por el árbol. Y una xpub también es material de claves en el sentido cuántico: el BIP 360 señala que las xpubs y los descriptores de billetera "also reveal quantum vulnerable public key information" (también revelan información de clave pública vulnerable a la computación cuántica), así que entregarle una a un servidor es [exposición de la clave pública (en inglés)](/glossary/public-key-exposure) para todas las direcciones que cuelgan de ella, usadas o no.
- **Un sustituto del respaldo.** La semilla sigue siendo un punto único de falla. Pierde la semilla y lo pierdes todo. Las billeteras de hardware y los esquemas multisig añaden capas de resiliencia por encima del diseño HD.

Las billeteras HD se volvieron universales entre 2014 y 2016, a medida que maduraban las implementaciones de los BIP 32 / 39 / 44. Hoy, prácticamente toda billetera que valga la pena usar es una billetera HD, y "la semilla" es la pieza básica de todo respaldo.
