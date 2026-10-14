---
title: "BIP 39 (frase semilla)"
slug: bip-39
translationOf: bip-39
sourceHash: "2d1fed63677d"
sourceCommit: "b8304cf"
sourceUpdated: "2026-10-13"
translation: { method: "llm-draft" }
draft: false
published: "2026-10-13"
shortDefinition: "El estándar de 2013 para codificar la semilla de una billetera como 12 a 24 palabras en inglés, con una passphrase opcional como protección adicional."
keyTakeaways:
  - "Codifica de 128 a 256 bits de entropía como 12 a 24 palabras tomadas de una lista de 2048"
  - "Una passphrase opcional produce una billetera distinta a partir de las mismas palabras"
  - "Es el estándar de frase semilla más común, aunque no universal: Electrum usa su propio formato"
sources:
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "BIP-39 - Wordlists: English, Japanese, Korean, Spanish, Chinese (Simplified and Traditional), French, Italian, Czech, Portuguese", url: "https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md" }
  - { label: "Electrum - Documentation, Seed phrase: Electrum does not generate BIP39 seeds", url: "https://electrum.readthedocs.io/en/latest/seedphrase.html" }
  - { label: "Bitcoin Wiki - Seed phrase: BIP39 is the most common standard used for seed phrases", url: "https://en.bitcoin.it/wiki/Seed_phrase" }
  - { label: "BIP-380 - Output Script Descriptors General Operation, Motivation: not all wallets support or use the standard derivation paths (2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki" }
relatedTerms:
  - bip-32
  - bip-bitcoin-improvement-proposal
  - mnemonic-entropy-bits
  - mnemonic-password
  - seed-phrase
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0039"
liveWidget: ~
---

El BIP 39, escrito por Marek Palatinus, Pavol Rusnak, Aaron Voisine y Sean Bowe en septiembre de 2013, define cómo una billetera de Bitcoin codifica su semilla como una secuencia de 12 a 24 palabras comunes del inglés. Es el estándar más común de frase semilla (también llamada frase de recuperación), aunque no el único: Electrum genera a propósito su propio formato de semilla.

La matemática:

1. Se parte de 128, 160, 192, 224 o 256 bits de entropía criptográfica.
2. Se agrega una suma de verificación (checksum) derivada de SHA-256, cuyo largo es la cantidad de bits de entropía dividida entre 32.
3. Se divide el resultado en grupos de 11 bits y se busca cada grupo en la lista de 2048 palabras del BIP 39.

El resultado es una frase de 12, 15, 18, 21 o 24 palabras. Con 12 palabras se codifican 128 bits de entropía; con 24 palabras, 256 bits (la escala completa está en [bits de entropía de la frase semilla](/es/glosario/bits-de-entropia)). Ambas opciones quedan muy lejos del alcance de la fuerza bruta; elegir una u otra es cuestión de preferencia.

Para obtener la semilla real de la billetera (la entrada de la derivación [BIP 32](/es/glosario/bip-32)), la frase mnemónica pasa por PBKDF2-HMAC-SHA512 con 2048 iteraciones, usando como sal (salt) la cadena "mnemonic" más una passphrase opcional. Con una passphrase vacía obtienes una billetera; con una passphrase no vacía obtienes una billetera completamente distinta a partir de las mismas palabras. A esa [passphrase](/es/glosario/passphrase) opcional a veces se le llama la "palabra 25".

Por qué importa el BIP 39:

- **Un respaldo pensado para personas.** Una lista de 24 palabras es más fácil de anotar sin errores, transcribir y verificar que 64 caracteres hexadecimales.
- **Detección de errores.** Una palabra que no está en la lista se rechaza de inmediato, y la suma de verificación atrapa la mayoría de los errores restantes al cargar la frase, así que una palabra mal escrita suele fallar rápido en vez de abrir en silencio una billetera distinta (y probablemente vacía). La propia especificación reconoce que la suma de verificación es corta: un error que aun así produce palabras válidas se le escapa aproximadamente una de cada 16 veces en una frase de 12 palabras y una de cada 256 en una de 24.
- **Portabilidad entre billeteras.** Restaura una frase semilla BIP 39 en cualquier billetera compatible con BIP 39 / BIP 32 y obtendrás las mismas claves. Las mismas direcciones solo aparecen si, además, las dos billeteras usan la misma ruta de derivación y el mismo tipo de script.
- **Listas de palabras en varios idiomas.** La lista de palabras está publicada en inglés, japonés, coreano, español, francés, italiano, checo, portugués y chino (simplificado y tradicional). La misma matemática, con palabras locales. La propia especificación desaconseja con firmeza las listas en otros idiomas, porque la mayoría de las billeteras solo admiten la lista en inglés y una frase traducida a otra lista produce una semilla distinta.

La lista en inglés se eligió con cuidado: 2048 palabras (exactamente 11 bits cada una), ninguna comparte sus primeras cuatro letras con otra (así que una palabra escrita a medias se resuelve sin ambigüedad) y sin pares fáciles de confundir. Es el estándar de frase semilla más usado.

Especificación: [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
