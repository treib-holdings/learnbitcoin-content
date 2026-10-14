---
title: "Billetera de papel"
slug: billetera-de-papel
draft: false
published: "2026-10-14"
shortDefinition: "Una clave privada (y su dirección) impresa en papel para guardar BTC sin conexión. Segura si se genera bien, pero físicamente vulnerable."
keyTakeaways:
  - "Toda su seguridad depende de generarla bien sin conexión y de resguardar la clave"
  - "El daño físico o el robo son un riesgo importante"
  - "Reemplazada en gran medida por las billeteras de hardware o por un almacenamiento en frío más robusto"
aliases:
  - "billeteras de papel"
  - "paper wallet"
  - "paper wallets"
sources:
  - { label: "Bitcoin Wiki - Paper wallet: an obsolete and unsafe method popular between 2011 and 2016; change addresses are not handled; sweep the entire balance into a deterministic wallet", url: "https://en.bitcoin.it/wiki/Paper_wallet" }
  - { label: "MyCrypto - Disclosure: key generation vulnerability found on WalletGenerator.net, served code did not match GitHub from after 17 August 2018 until 23 May 2019 (24 May 2019)", url: "https://blog.mycrypto.com/disclosure--key-generation-vulnerability-found-on-walletgenerator-net---potentially-malicious-/" }
  - { label: "Bitcoin Wiki - BitcoinPaperWallet: sold in April 2018, later found returning 60 pre-generated keypairs hidden in a fake unit test", url: "https://en.bitcoin.it/wiki/BitcoinPaperWallet" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 9, Combining and Splitting Value: one output for the payment and one returning the change (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Bitcoin Core 30.0 release notes - legacy wallets can no longer be created or loaded; importprivkey and the other legacy-only RPCs removed (10 October 2025)", url: "https://bitcoincore.org/en/releases/30.0/" }
relatedTerms:
  - address
  - bitcoin-inheritance-planning
  - key-rotation
  - key-split
  - key-wiping
  - mixing-service
sameAs:
  - "https://en.bitcoin.it/wiki/Paper_wallet"
liveWidget: ~
translationOf: paper-wallet
sourceHash: "719499052d60"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una billetera de papel es una [clave privada](/es/glosario/clave-privada) (con su [dirección](/es/glosario/direccion) correspondiente) impresa en papel, muchas veces como código QR, y guardada físicamente en vez de digitalmente. Fue popular más o menos de 2011 a 2016; hoy está obsoleta.

El atractivo original: ninguna superficie de ataque digital. Un papel no se puede hackear por internet, no puede correr malware y nadie se lo puede llevar a distancia. Lo generas sin conexión, lo guardas en un lugar seguro y listo.

Por qué las billeteras de papel cayeron en desuso:

- **La fragilidad de una sola clave.** Una billetera de papel respalda *una* clave privada. Gasta cualquier parte y la moneda entera se mueve, porque una transacción gasta un UTXO completo: el resto cae en una [salida de cambio](/es/glosario/salida-de-cambio) controlada por la billetera que firmó, no de vuelta en el papel. Muchas historias del tipo "perdí BTC por una billetera de papel" se remontan a gente que gastó una parte desde una billetera de software, dando por hecho que el resto seguía en el papel, cuando en realidad estaba en una dirección de cambio que nunca respaldaron.
- **Los peligros de la generación.** Una billetera de papel vale lo que vale la entropía con la que se generó. A los "generadores de billeteras de papel" en línea les han metido puertas traseras más de una vez: WalletGenerator.net sirvió un código de generación de claves que no coincidía con su código fuente publicado desde agosto de 2018 hasta mayo de 2019, y se descubrió que BitcoinPaperWallet.com repartía claves pregeneradas tras un cambio de dueño en 2018. Las herramientas sin conexión exigen un [aislamiento de la red (air gap)](/es/glosario/air-gapped) cuidadoso.
- **La fragilidad física.** El papel se quema, se moja, se destiñe, se va a la basura por error. No es un medio hecho para durar.
- **Sin un ecosistema maduro.** Las billeteras modernas están construidas alrededor de las frases semilla (también llamadas frases de recuperación), no de claves sueltas. Canjear una billetera de papel significa barrer su única clave hacia un software que todavía entienda el formato; la Bitcoin Wiki registra al menos un caso en que un cambio de formato de clave dejó fondos atascados, y Bitcoin Core 30 (octubre de 2025) eliminó el viejo comando `importprivkey` junto con las billeteras legacy.

El reemplazo moderno es un respaldo de la [frase semilla](/es/glosario/frase-semilla) guardado en metal (placas de acero, arandelas, titanio grabado), combinado con una [billetera de hardware](/es/glosario/billetera-de-hardware) (hardware wallet) para el uso diario. Conserva lo bueno de la billetera de papel (las claves nunca tocan la red) y es muchísimo mejor en todas las dimensiones prácticas.

Si encuentras una billetera de papel vieja, bárrela con cuidado (el UTXO completo, no una parte), deja de usar esa dirección y migra a una [billetera HD](/es/glosario/billetera-hd) moderna. No generes nuevas.
