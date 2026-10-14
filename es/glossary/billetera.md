---
title: "Billetera"
slug: billetera
draft: false
published: "2026-10-14"
shortDefinition: "Software o hardware que administra claves privadas y direcciones y permite enviar y recibir BTC."
keyTakeaways:
  - "Administra las claves que controlan salidas de BTC, no dinero físico"
  - "Puede ser solo software, basada en hardware o una configuración multisig"
  - "Su seguridad depende de un respaldo cuidadoso y de proteger bien las claves"
aliases:
  - "billeteras"
  - "billetera de Bitcoin"
  - "wallet"
  - "wallets"
sources:
  - { label: "bitcoin.org - Developer Guide, Wallets: wallet programs create public keys to receive satoshis and use the corresponding private keys to spend them; full-service, signing-only, offline and hardware wallets (accessed 2026-10-13)", url: "https://developer.bitcoin.org/devguide/wallets.html" }
  - { label: "bitcoin.org - Developer Guide, Operating Modes: a simplified payment verification client downloads block headers and requests transactions from full nodes as needed (accessed 2026-10-13)", url: "https://developer.bitcoin.org/devguide/operating_modes.html" }
  - { label: "Andreas M. Antonopoulos and David A. Harding - Mastering Bitcoin, chapter 5: a Bitcoin wallet contains only keys, associated with bitcoins recorded on the blockchain, and proving control of the keys is what lets you spend them (GitHub develop branch, accessed 2026-10-13)", url: "https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05_wallets.adoc" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys: a mnemonic sentence for the generation of deterministic wallets, converted to a seed for BIP 32 (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "BIP-32 - Hierarchical Deterministic Wallets (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "Bitcoin Core - doc/external-signer.md: spending from a hardware wallet through an external signer and PSBT (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/external-signer.md" }
  - { label: "Bitcoin Core - doc/multisig-tutorial.md: a 2-of-3 multisig built from three signer wallets and one watch-only wallet, run inside the node (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/multisig-tutorial.md" }
  - { label: "Bitcoin Core - 0.9.0 release notes, GUI: Add Coin Control Features (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.9.0.md" }
relatedTerms:
  - bitcoin-client
  - bitcoin-dev-kit-bdk
  - bitcoin-vault
  - coin-control
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - green-address
  - gui-wallet
  - hardware-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-deterministic-wallet
  - hierarchical-multisig
  - security
  - wallet-import-format-wif
  - watch-only-wallet
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptocurrency_wallet"
  - "https://www.wikidata.org/wiki/Q40186999"
  - "https://en.bitcoin.it/wiki/Wallet"
liveWidget: ~
translationOf: wallet
sourceHash: "8076fca5b35e"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una billetera de Bitcoin en realidad no guarda bitcoin. El bitcoin vive en la cadena. Lo que guarda una billetera son las [claves privadas](/es/glosario/clave-privada) que autorizan moverlo.

Lo que hace una billetera, en términos mecánicos:

- **Genera y guarda claves**, normalmente derivándolas de una frase semilla [BIP 39](/es/glosario/bip-39) (también llamada frase de recuperación) mediante una estructura [jerárquica determinista](/es/glosario/billetera-hd).
- **Lleva la cuenta de los [UTXOs](/es/glosario/utxo) on-chain que puedes gastar**, ya sea preguntándoles a nodos completos que no corre ella misma (el modelo de billetera ligera) o, con [Bitcoin Core](/es/glosario/bitcoin-core), desde el nodo completo del que su propia billetera forma parte.
- **Construye y firma [transacciones](/es/glosario/transaccion)** cuando quieres enviar.
- **Genera [direcciones](/es/glosario/direccion) de recepción nuevas** a medida que las necesitas.

Las billeteras vienen en varios arquetipos, cada uno con un equilibrio distinto entre seguridad y comodidad:

- **[Billeteras custodiales](/es/glosario/billetera-custodial)**: otra persona tiene tus claves (un exchange o una app de pagos). Las más fáciles de usar y las de garantías de propiedad más débiles. Quien tiene las claves puede gastar las monedas, así que lo que tú tienes es la promesa de pago de una empresa, no bitcoin; la entrada enlazada registra cuántas veces ha fallado esa promesa.
- **Billeteras móviles**: tú tienes las claves en el propio celular. Cómodas para el uso diario, con el modelo de seguridad de una billetera caliente: las claves viven en un dispositivo conectado a internet.
- **Billeteras de escritorio**: la billetera propia de Bitcoin Core y otras. Suelen conectarse a tu propio nodo y por lo general ofrecen [control de monedas](/es/glosario/control-de-monedas) (la interfaz gráfica de Bitcoin Core lo tiene desde la versión 0.9.0).
- **[Billeteras de hardware](/es/glosario/billetera-de-hardware)** (hardware wallets): las claves se quedan en un dispositivo de firma dedicado y nunca tocan una máquina conectada a internet. Tu computadora pasa las transacciones de ida y vuelta; el dispositivo firma.
- **Configuraciones [multisig](/es/glosario/multisig)**: hace falta más de una clave, normalmente en dispositivos separados, para autorizar una transacción. Muy recomendables para montos importantes.

La billetera correcta depende de lo que guardas y de lo que haces con ello. ¿Dinero para gastar, del que llevarías en efectivo? Una billetera móvil está bien. ¿Ahorros a largo plazo? Hardware, idealmente multisig. La regla general: más valor -> más fricción -> más separación entre las claves y cualquier superficie en línea.

Consulta el capítulo del Recorrido [Sé tu propio banco](/es/recorrido/se-tu-propio-banco) para el paso a paso completo.
