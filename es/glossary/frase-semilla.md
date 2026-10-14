---
title: "Frase semilla"
slug: frase-semilla
draft: false
published: "2026-10-13"
shortDefinition: "12 o 24 palabras en inglés (BIP 39) que codifican el secreto maestro de una billetera de Bitcoin. Es el respaldo completo: si la pierdes, pierdes las monedas; si se filtra, otra persona las tiene."
keyTakeaways:
  - "El estándar es el BIP 39: una lista de 2,048 palabras, 11 bits por palabra y una suma de verificación integrada"
  - "12 palabras = 128 bits de entropía. 24 palabras = 256 bits. En la práctica, ninguna de las dos se puede adivinar"
  - "Toda clave y toda dirección de una billetera HD se deriva de esta única frase"
  - "Guárdala fuera de línea. Verifica el respaldo. Considera la redundancia geográfica"
aliases:
  - "frase de recuperación"
  - "frases semilla"
  - "frase mnemónica"
  - "seed phrase"
sources:
  - { label: "Seed Backup Strategies rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/seed-backup-strategies" }
relatedTerms:
  - bip-32
  - bip-39
  - bip-44
  - bip-85
  - bitcoin-inheritance-planning
  - chaincode
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - mnemonic-entropy-bits
  - mnemonic-password
  - private-key
  - seed-entropy-mixer
  - seed-tool
  - security
sameAs:
  - "https://en.bitcoin.it/wiki/Seed_phrase"
  - "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0039"
liveWidget: ~
translationOf: seed-phrase
sourceHash: "7098bd1263dc"
sourceCommit: "f73ff00"
translation:
  method: "llm-draft"
---

Una frase semilla es una secuencia de 12 o 24 palabras en inglés que codifica el secreto maestro de toda una billetera de Bitcoin. También se le llama "frase mnemónica" o "frase de recuperación"; en la práctica, los tres términos son intercambiables.

## Qué es, mecánicamente

El estándar es el **[BIP 39](/es/glosario/bip-39)**, publicado en 2013. Define:

- Una lista fija de 2,048 palabras. Cada palabra es única en sus primeras cuatro letras, así que una palabra escrita a medias se resuelve sin ambigüedad y los errores de transcripción son más fáciles de detectar.
- Una correspondencia entre entropía binaria y secuencias de palabras. Cada palabra codifica 11 bits.
- Una suma de verificación (checksum) derivada de SHA-256, para que una frase mal escrita o adivinada al azar no pase la validación, en lugar de abrir en silencio una billetera distinta (y probablemente vacía).
- Una derivación de las palabras a una semilla maestra de 512 bits: PBKDF2-HMAC-SHA512, 2,048 iteraciones, con una passphrase opcional elegida por el usuario como sal (salt).

Esa semilla maestra de 512 bits alimenta la derivación jerárquica de claves del [BIP 32](/es/glosario/bip-32), que produce cada [clave privada](/es/glosario/clave-privada) y cada dirección que usa la billetera. La secuencia completa (palabras -> semilla maestra -> clave privada maestra -> claves derivadas -> direcciones) es puramente determinista. Entran las mismas palabras, sale la misma billetera, en cualquier software compatible con BIP 39 + BIP 32.

12 palabras codifican 128 bits de entropía. 24 palabras codifican 256 bits. Cualquiera de las dos sobra: 128 bits de aleatoriedad no se pueden adivinar en ningún sentido práctico, y 256 bits están muy por encima del alcance de cualquier adversario imaginable.

## Por qué se impuso

Portabilidad. Respaldas con una billetera, restauras en una de otra marca completamente distinta, y tus monedas siguen ahí, siempre que ambas implementen el estándar. Esa interoperabilidad entre fabricantes es una de las victorias silenciosas del proceso de estándares de Bitcoin.

La frase es el respaldo **completo**. A partir de esas 12 o 24 palabras, una [billetera HD (jerárquica determinista)](/es/glosario/billetera-hd) puede regenerar cada clave privada, cada clave pública y cada dirección que la billetera haya usado o vaya a usar. Pierde tu billetera de hardware (hardware wallet), tu celular, tu laptop, todo, y aun así puedes restaurar la billetera en cualquier dispositivo compatible con solo volver a escribir las palabras.

Ese poder es un arma de doble filo. Cualquiera que lea tu frase semilla tiene exactamente la misma capacidad.

## Reglas para guardarla

- **Escríbela en papel o en metal.** No le tomes foto. No la teclees en una computadora, salvo en una billetera al momento de restaurar. No la guardes en un administrador de contraseñas ni en la nube.
- **Verifica el respaldo.** Practica la restauración en un dispositivo nuevo. Un respaldo que nunca probaste es un respaldo que no tienes.
- **Considera la redundancia geográfica.** Un incendio en casa que destruya tu frase semilla y tu billetera de hardware destruye tu dinero. Para cantidades que no sean triviales, es razonable tener dos o tres copias en lugares físicamente separados.
- **Considera una [passphrase](/es/glosario/passphrase)** (la llamada "palabra 25"). Un secreto adicional, opcional y elegido por el usuario, que se combina con las 12 o 24 palabras para derivar una billetera aparte. Es potente, pero suma riesgo operativo: si olvidas la passphrase, los fondos se pierden.

La frase semilla es **lo único** que debes proteger para hacer autocustodia de Bitcoin de verdad. Todo lo demás se puede recuperar; esto no.

Para el tratamiento más a fondo (papel contra metal, esquemas de respaldo con multisig, planificación de la herencia y cómo verificar un respaldo sin exponerle las palabras a nadie), lee el [tema a fondo Estrategias de respaldo de la frase semilla (en inglés)](/rabbit-hole/seed-backup-strategies).
