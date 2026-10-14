---
title: "Bits de entropía de la frase semilla"
slug: bits-de-entropia
draft: false
published: "2026-10-14"
shortDefinition: "La aleatoriedad binaria subyacente con la que se generan las palabras de una frase semilla de BIP 39 (normalmente 128, 192 o 256 bits)."
keyTakeaways:
  - "128 bits -> 12 palabras, 256 bits -> 24 palabras, etc."
  - "12 palabras (128 bits) ya igualan la seguridad de unos 128 bits que tienen las claves de Bitcoin"
  - "La suma de verificación (checksum) detecta la mayoría de los errores de escritura, así que una palabra equivocada suele rechazarse en lugar de abrir otra billetera"
aliases:
  - "bits de entropía"
  - "entropía"
  - "entropía de la frase semilla"
  - "entropía de la semilla"
  - "mnemonic entropy"
sources:
  - { label: "BIP 39 - entropy, checksum and word count", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "SEC 2 v2.0 - secp256k1 rated at 128-bit strength (Table 1)", url: "https://www.secg.org/sec2-v2.pdf" }
  - { label: "NIST Post-Quantum Cryptography Call for Proposals (2016) - Grover needs long serial runs (section 4.A.5)", url: "https://csrc.nist.gov/CSRC/media/Projects/Post-Quantum-Cryptography/documents/call-for-proposals-final-dec-2016.pdf" }
  - { label: "NIST IR 8105 - impact of quantum computing on common algorithms (Table 1)", url: "https://nvlpubs.nist.gov/nistpubs/ir/2016/NIST.IR.8105.pdf" }
relatedTerms:
  - bip-39
  - hierarchical-deterministic-wallet
  - mnemonic-password
  - private-key
  - seed-phrase
liveWidget: ~
translationOf: mnemonic-entropy-bits
sourceHash: "b80afc147085"
sourceCommit: "1abeee5"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Una frase mnemónica de BIP 39 (la frase semilla) es una codificación legible para humanos de bits aleatorios en bruto. La billetera genera entropía, le añade una pequeña suma de verificación (checksum) y luego convierte el resultado en palabras de la lista de BIP 39 (2048 palabras, cada una con 11 bits de información).

La correspondencia es fija:

- 128 bits + 4 bits de checksum -> 12 palabras
- 160 bits + 5 bits de checksum -> 15 palabras
- 192 bits + 6 bits de checksum -> 18 palabras
- 224 bits + 7 bits de checksum -> 21 palabras
- 256 bits + 8 bits de checksum -> 24 palabras

128 bits es el piso práctico de seguridad, y coincide con lo que las claves de Bitcoin ofrecen de todos modos. Una clave secp256k1 da unos 128 bits de seguridad frente al mejor ataque conocido en computadoras ordinarias (no cuánticas), y probar por fuerza bruta 2^128 posibilidades está fuera del alcance de cualquiera de ellas.

En teoría, el algoritmo de Grover podría reducir una búsqueda a ciegas entre 2^128 frases semilla a unos 2^64 pasos cuánticos, cada uno un cálculo completo de frase semilla a dirección. Para obtener toda esa aceleración, los pasos tienen que ejecutarse uno tras otro, y repartir el trabajo entre muchas máquinas reduce la ganancia. El NIST señala que el algoritmo de Grover "requires a long-running serial computation, which is difficult to implement in practice" (requiere un cálculo en serie de larga duración, difícil de llevar a la práctica). El mayor riesgo cuántico para cualquier billetera es que el [algoritmo de Shor (en inglés)](/glossary/shors-algorithm) derive las claves a partir de claves públicas expuestas, y una frase semilla más larga no sirve de nada contra eso.

En la práctica, casi cualquier billetera moderna usa por defecto 12 o 24 palabras, y ambas opciones quedan muy lejos del alcance de la fuerza bruta. 24 palabras añaden margen frente a ataques especulativos contra la frase semilla misma, pero no protegen las monedas cuyas claves públicas ya están expuestas si llega una computadora cuántica grande. Cualquiera de las dos es muchísimo más segura que la contraseña que de verdad usas para tu correo.

Los bits de checksum importan en la práctica. Si una palabra está mal pero sigue estando en la lista de BIP 39, el checksum lo detecta unas 15 de cada 16 veces en una frase de 12 palabras (4 bits de checksum) y unas 255 de cada 256 veces en una de 24 palabras (8 bits de checksum). La billetera entonces rechaza la frase al cargarla, en lugar de producir en silencio una billetera distinta. Es una red de seguridad pequeña pero real contra los errores de transcripción.
