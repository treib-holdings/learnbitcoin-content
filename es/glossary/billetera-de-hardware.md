---
title: "Billetera de hardware"
slug: billetera-de-hardware
draft: false
published: "2026-10-14"
updated: "2026-11-17"
shortDefinition: "Un dispositivo físico que guarda las claves privadas fuera de línea y firma transacciones en un entorno seguro."
keyTakeaways:
  - "Mantiene las claves fuera de las computadoras conectadas a internet, donde un malware podría copiarlas"
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
  - { label: "Coinkite - Coldcard security advisory (published July 30, 2026): a firmware bug weakened seed generation, and attackers regenerated the keys offline and stole funds; updating the firmware does not change or repair an existing seed", url: "https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/" }
  - { label: "Coinkite - technical backgrounder on the flaw (July 30, 2026): the Coldcard source code had always been open and publicly available; the faulty generator entered seed generation in March 2021", url: "https://blog.coinkite.com/entropy-technical-backgrounder/" }
  - { label: "Trail of Bits - 10 Rules for the Secure Use of Cryptocurrency Hardware Wallets (November 27, 2018): buy the device from a trusted source, preferably direct from its maker, new and unopened; never use a pre-initialized device or pre-selected recovery words", url: "https://blog.trailofbits.com/2018/11/27/10-rules-for-the-secure-use-of-cryptocurrency-hardware-wallets/" }
  - { label: "BitBox - Check your BitBox before first use (updated November 6, 2026): never use recovery words supplied with a device to create a new wallet; do not set up a device you suspect has been tampered with", url: "https://support.bitbox.swiss/en_US/verifying-the-bitbox02-packaging" }
  - { label: "Singapore Police Force - advisory of October 28, 2026: hardware wallets bought from some retail stores in Singapore contained malicious hardware components that could capture recovery phrases; at least two cases since September 10, 2026, with losses of about S$3.5 million", url: "https://www.police.gov.sg/Media-Hub/News/2026/10/20261028_police_advisory_on_tampered_cryptocurrency_hardware_wallets" }
  - { label: "FBI - public service announcement of December 21, 2022: criminals buy search advertisements that imitate real companies; type the company's address into the browser yourself", url: "https://www.ic3.gov/PSA/2022/PSA221221" }
  - { label: "Sparrow Wallet - Best practices: a single-key wallet for amounts up to US$100,000 and multisig above that; multisig takes more time and resources", url: "https://sparrowwallet.com/docs/best-practices.html" }
  - { label: "BitBox - The pitfalls of multisig when using hardware wallets (December 3, 2019, archived copy): a multisig setup can end up less secure than an ordinary single-key wallet", url: "https://web.archive.org/web/20250719224348/https://blog.bitbox.swiss/en/the-pitfalls-of-multisig-when-using-hardware-wallets/" }
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
sourceHash: "8f319f1f238c"
sourceCommit: "74f1a22"
sourceUpdated: "2026-11-17"
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

Ninguna de estas cosas es una garantía. En julio de 2026 Coinkite reveló que sus dispositivos Coldcard llevaban desde 2021 creando frases semilla débiles, por un error del firmware en el paso que las genera, y que unos atacantes habían deducido las claves y robado fondos. El código fuente de ese firmware siempre había sido público, según el propio fabricante, y el error estuvo en él durante más de cinco años. Después llegó un firmware corregido, pero, en palabras del fabricante, actualizarlo "does not change or repair an existing seed" (no cambia ni repara una semilla existente): quienes tenían frases semilla afectadas tuvieron que crear otras nuevas y mover sus monedas. Ese traslado se hace en el dispositivo, con un pago normal a la billetera nueva. Nadie que ofrezca revisar o migrar una frase semilla necesita las palabras, ni las viejas ni las nuevas.

Las recomendaciones envejecen rápido, así que esta página no recomienda ningún producto. La [página de billeteras](/es/a-fondo/billeteras), que lleva fecha, enlaza al propio sitio web de cada fabricante. Sigue ese enlace o escribe tú la dirección, y nunca compres a partir de un resultado de búsqueda ni de un anuncio. Compra el dispositivo a su fabricante, nuevo y sin abrir. Uno que llega ya configurado, o con palabras de recuperación incluidas en la caja, no se debe usar: las palabras las tiene que crear tu dispositivo, delante de ti.

Una billetera de hardware no es magia. La [frase semilla](/es/glosario/frase-semilla) (también llamada frase de recuperación) que genera sigue siendo el respaldo maestro; si alguien consigue esa frase, no necesita el dispositivo. El trabajo del dispositivo es mantener las claves fuera de línea en el uso diario, no reemplazar un buen cuidado de la frase.

Una billetera de hardware importa cuando tienes más de lo que guardarías con tranquilidad en un celular. Para montos mucho mayores, muchos asesores sugieren [multisig](/es/glosario/multisig), aunque no todos, y es mucho más difícil de manejar: consulta [Multisig y herencia (en inglés)](/rabbit-hole/multisig-and-inheritance). Para los dispositivos, consulta la [página de billeteras](/es/a-fondo/billeteras).
