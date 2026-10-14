---
title: "Billetera de hardware"
slug: billetera-de-hardware
draft: false
published: "2026-10-14"
shortDefinition: "Un dispositivo físico que guarda las claves privadas fuera de línea y firma transacciones en un entorno seguro."
keyTakeaways:
  - "Guardar las claves fuera de línea impide el robo por software"
  - "El usuario verifica los datos de la transacción en una pantalla segura"
  - "Un punto medio entre las billeteras de papel puras y las billeteras en línea"
aliases:
  - "billeteras de hardware"
  - "hardware wallet"
  - "hardware wallets"
sources:
  - { label: "BIP-174 - Partially Signed Bitcoin Transaction Format (lets offline signers such as air-gapped wallets and hardware wallets sign without direct access to the UTXO set and without risk of being defrauded)", url: "https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki" }
  - { label: "Bitcoin Optech - Hardware wallet interface (HWI): a library and command-line tool that talks to hardware wallets using PSBTs and output script descriptors", url: "https://bitcoinops.org/en/topics/hwi/" }
  - { label: "Bitcoin Wiki - Hardware wallet (keys cannot be transferred out of the device in plaintext; malware on the PC can still swap the recipient address, so confirm it out of band)", url: "https://en.bitcoin.it/wiki/Hardware_wallet" }
  - { label: "Dmitry Nedospasov, Thomas Roth, Josh Datko - wallet.fail: hacking the most popular cryptocurrency hardware wallets, 35C3 (December 2018; some bugs fixable in firmware, some needing new hardware)", url: "https://media.ccc.de/v/35c3-9563-wallet_fail" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic wallets (the phrase is converted into the seed that regenerates every key)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
relatedTerms:
  - air-gapped
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - custodial-wallet
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-security-module-hsm
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - key-generation-ceremony
  - key-rotation
  - seed-phrase
  - security
  - wallet
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptocurrency_wallet"
  - "https://www.wikidata.org/wiki/Q40186999"
  - "https://en.bitcoin.it/wiki/Hardware_wallet"
liveWidget: ~
translationOf: hardware-wallet
sourceHash: "f4f12ca51ce9"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una billetera de hardware (hardware wallet) es un dispositivo pequeño y dedicado cuyo único trabajo es guardar [claves privadas](/es/glosario/clave-privada) y firmar [transacciones](/es/glosario/transaccion). Las claves se generan dentro del dispositivo y nunca salen de él. Cuando quieres gastar, la transacción sin firmar entra al dispositivo (como [PSBT](/es/glosario/psbt), el formato estándar para exactamente este traspaso), verificas el destino y el monto en la pantalla integrada, confirmas, y sale una transacción firmada. Tu laptop nunca ve la clave.

El modelo de amenazas del que esto te defiende: una computadora totalmente comprometida. Si tu computadora corre un malware que vigila cada tecla y lee cada archivo, las claves de una billetera caliente están perdidas: el atacante puede firmar transacciones hacia sí mismo cuando quiera. Con una billetera de hardware, el malware puede mostrarte en la computadora una pantalla falsa de "Enviar a tu amigo", pero cuando la transacción de verdad llega al dispositivo de hardware, este te muestra en su pantalla confiable la dirección de destino y el monto *reales*. Ves la dirección que el malware sustituyó, rechazas la transacción y estás a salvo. Eso solo funciona si de verdad lees la pantalla del dispositivo y la comparas con una dirección que recibiste por un canal que el malware no controla; el dispositivo puede mostrarte adónde van las monedas, no adónde querías que fueran.

Qué buscar al elegir una:

- **Firmware de código abierto.** Los dispositivos de firma de código cerrado te piden confiar en la palabra del fabricante de que el dispositivo hace lo que dice. El firmware abierto permite que la comunidad en general audite el código que corre en el chip. Hay varios dispositivos de firma de código abierto, maduros y fáciles de conseguir; prefiérelos.
- **Firmware solo para Bitcoin, si lo ofrecen.** El firmware multimoneda agrega superficie de ataque para funciones que nunca vas a usar. Una base de código más simple es una base de código más fácil de auditar.
- **Un flujo de trabajo [sin conexión (air-gapped)](/es/glosario/air-gapped), idealmente.** Los dispositivos que firman por código QR o tarjeta microSD nunca se conectan a una computadora, ni siquiera por USB, lo que cierra otra categoría de ataques.
- **Desarrollo activo y un historial de seguridad creíble.** Las vulnerabilidades de las billeteras de hardware se descubren y se parchan con regularidad; quieres un fabricante que publique las correcciones pronto y en público.

Las recomendaciones envejecen rápido. En lugar de nombrar productos concretos aquí, busca "open-source bitcoin hardware wallet" o fíjate en lo que están recomendando ahora los bitcoiners con experiencia que se enfocan en la autocustodia.

Una billetera de hardware no es magia. La [frase semilla](/es/glosario/frase-semilla) (también llamada frase de recuperación) que genera sigue siendo el respaldo maestro; si alguien consigue esa frase, no necesita el dispositivo. El trabajo del dispositivo es mantener las claves fuera de línea en el uso diario, no reemplazar un buen cuidado de la frase.

Para montos que superan el gasto del día a día, una billetera de hardware es el piso. Una multisig con varios dispositivos de hardware es el siguiente nivel. Consulta el capítulo del Recorrido [Sé tu propio banco](/es/recorrido/se-tu-propio-banco) para el paso a paso.
