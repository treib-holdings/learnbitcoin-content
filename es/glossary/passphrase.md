---
title: "Passphrase (la palabra 25)"
slug: passphrase
draft: false
published: "2026-10-13"
shortDefinition: "Una passphrase opcional que se mezcla en la derivación de una semilla BIP 39 y actúa como una 'palabra 25' para mayor protección."
keyTakeaways:
  - "Refuerza la seguridad más allá de la frase semilla por sí sola"
  - "Un segundo factor que hay que memorizar o respaldar de forma segura"
  - "Si se pierde, la billetera se vuelve imposible de recuperar"
sources:
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys, From mnemonic to seed: the salt is the string mnemonic plus the passphrase; every passphrase generates a valid seed (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Bitcoin Wiki - Seed phrase: Electrum and some other wallets call the passphrase a 13th/25th word", url: "https://en.bitcoin.it/wiki/Seed_phrase" }
  - { label: "Trezor - What is Shamir backup? FAQ: back up your passphrase offline as well, do not rely solely on memory (accessed 2026-10-13)", url: "https://trezor.io/learn/a/what-is-shamir-backup" }
relatedTerms:
  - bip-39
  - hierarchical-deterministic-wallet
  - mnemonic-entropy-bits
  - private-key
  - seed-phrase
liveWidget: ~
translationOf: mnemonic-password
sourceHash: "e19d28dada0d"
sourceCommit: "b8304cf"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

La passphrase del BIP 39, a veces llamada la "palabra 25", es una cadena de texto opcional que se mezcla durante la derivación de la semilla. Las mismas 12 o 24 palabras más una passphrase diferente dan una billetera completamente distinta. La matemática es sencilla: el BIP 39 deriva la semilla maestra con PBKDF2(mnemonic, "mnemonic" + passphrase), así que cualquier cambio en la passphrase cambia todo lo que viene después.

Qué ganas con esto:

- Defensa contra el robo de la frase semilla. Si alguien encuentra tu frase semilla anotada, no obtiene nada sin la passphrase. Las 12 palabras por sí solas derivan una billetera señuelo (que puede estar vacía).
- Negación plausible. La billetera señuelo con passphrase = "" puede guardar un monto pequeño; la billetera real, detrás de una passphrase que no sea trivial, guarda el resto. Quien te coaccione solo ve el señuelo.
- Un "factor" adicional, si tratas la passphrase como algo que memorizas mientras la frase semilla queda grabada en metal.

Qué te cuesta:

- Si pierdes la passphrase, pierdes la billetera. No hay forma de recuperarla. La frase semilla por sí sola no sirve de nada. Basta con olvidarla, o con perder el único lugar donde estaba anotada, para que el saldo que protegía desaparezca para siempre.
- Complejidad operativa. La passphrase tiene que respaldarse aparte de la frase semilla (si no, las dos se pierden en el mismo incendio), respaldarse de forma confiable (si no, se pierde) y ser recuperable para tus herederos si la herencia importa (si no, la billetera muere contigo).
- Un tiro en el pie: un error al escribir la passphrase deriva, sin avisar, una billetera alternativa. La billetera no te dice que la passphrase está "equivocada"; simplemente abre otra billetera, vacía.

Para la mayoría de los usuarios, una frase semilla bien guardada y sin passphrase es más segura que una frase semilla con una passphrase que bien pueden terminar manejando mal. Agrega la passphrase solo si has pensado con cuidado en cómo se respalda, cómo se recupera y cómo se hereda.
