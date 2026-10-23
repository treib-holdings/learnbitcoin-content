---
title: "SLH-DSA (SPHINCS+, FIPS 205)"
slug: slh-dsa
aliases:
  - "SLH-DSA"
  - "SPHINCS+"
  - "SPHINCS"
  - "FIPS 205"
  - "SLH-DSA-128s"
  - "SLH-DSA-256f"
draft: false
published: "2026-10-15"
shortDefinition: "El esquema de firma poscuántica basado en hash que estandarizó el NIST, su respaldo para ML-DSA: descansa en menos supuestos criptográficos, pero sus firmas son mucho más grandes."
keyTakeaways:
  - "Esquema de firma poscuántica basado en hash y estandarizado por el NIST (FIPS 205, agosto de 2024)"
  - "Sus firmas son de 100 a 800 veces más grandes que las firmas actuales de Bitcoin"
  - "Es el respaldo que el NIST designó para ML-DSA, valorado por su modelo de seguridad basado en funciones hash, no por su eficiencia; el trabajo poscuántico de Bitcoin se ha inclinado hacia los esquemas basados en hash"
sources:
  - { label: "NIST FIPS 205 - Stateless Hash-Based Digital Signature Standard (August 13, 2024): based on SPHINCS+; security relies on the presumed difficulty of finding preimages for hash functions and related properties; parameter sets are designed for relatively small signatures ('s') or relatively fast signature generation ('f'); Table 2 gives 32, 48 and 64-byte public keys and signatures of 7,856 (128s), 17,088 (128f), 16,224 (192s), 35,664 (192f), 29,792 (256s) and 49,856 (256f) bytes", url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.205.pdf" }
  - { label: "NIST FIPS 204 - Module-Lattice-Based Digital Signature Standard (August 13, 2024): Table 2 gives ML-DSA signature sizes of 2,420 (ML-DSA-44), 3,309 (ML-DSA-65) and 4,627 (ML-DSA-87) bytes", url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf" }
  - { label: "NIST - NIST Releases First 3 Finalized Post-Quantum Encryption Standards (August 13, 2024): FIPS 205 uses SPHINCS+, renamed SLH-DSA, is based on a different math approach than ML-DSA, and is intended as a backup method in case ML-DSA proves vulnerable", url: "https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards" }
  - { label: "BIP-340 - Schnorr Signatures for secp256k1: fixed 64-byte signatures versus DER-encoded ECDSA signatures of variable size up to 72 bytes", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "BIP-361 - Post Quantum Migration and Legacy Signature Sunset (draft, assigned 2026-02-11): header lists Requires: TBD Post Quantum Signature BIP", url: "https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki" }
  - { label: "Bitcoin Optech Newsletter #412 (July 3, 2026): why Bitcoin post-quantum work has focused on hash-based signatures - weaker security assumptions, implementation simplicity, fast verification and suitability as a long-term fallback; hybrid schemes under discussion", url: "https://bitcoinops.org/en/newsletters/2026/07/03/" }
  - { label: "Bitcoin Optech Newsletter #421 (September 4, 2026): SHRINCS draft BIP, a semi-stateful hash-based signature scheme for Bitcoin with 48-byte public keys, 548-byte stateful signatures and a 5,777-byte stateless fallback", url: "https://bitcoinops.org/en/newsletters/2026/09/04/" }
  - { label: "Bitcoin-Dev mailing list - conduition, SHRINCS: an efficient hash-based signature scheme for Bitcoin (first draft) (August 26, 2026): first draft of a BIP specifying SHRINCS, a semi-stateful hash-based signature scheme for Bitcoin, posted on behalf of the SHRINCS working group", url: "https://www.learnbitcoin.com/archive/m/-w8D4WbD7zY2bfYQIES40iBZQWbZx6ab-S6EW8tWsMEFaHO9NEOLUkte_MZZgNQDd0pljCM2wD1Ccnk3BfjwLPgCiVz-NfTwjHJ4aZHUqUw%3D%40proton.me" }
relatedTerms:
  - post-quantum-bitcoin
  - bip-361
  - ml-dsa-dilithium
  - shors-algorithm
  - grovers-algorithm
  - hash
liveWidget: ~
translationOf: slh-dsa-sphincs-plus
sourceHash: "b6a4b91157be"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

SLH-DSA (Stateless Hash-Based Digital Signature Algorithm, el algoritmo de firma digital sin estado basado en hash) es el estándar de firma poscuántica que el NIST finalizó como [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) en agosto de 2024. Se basa en SPHINCS+, el esquema basado en hash que salió de la misma competencia del NIST que produjo [ML-DSA](/es/glosario/ml-dsa). El NIST lo posiciona como el respaldo de ML-DSA, para el caso de que los esquemas basados en retículos (lattices) resulten vulnerables. En la discusión poscuántica de Bitcoin, la familia basada en hash es la que ha concentrado la mayor parte del trabajo, porque su seguridad descansa solo en que la función hash aguante y porque es más sencilla de implementar.

## Qué es

SLH-DSA construye las firmas a partir de composiciones de funciones hash: árboles de Merkle de firmas de un solo uso, de forma recursiva. El supuesto de seguridad es la dificultad de encontrar preimágenes de un [hash](/es/glosario/hash), más unas cuantas propiedades relacionadas de las mismas funciones hash, que el [algoritmo de Grover](/es/glosario/algoritmo-de-grover) debilita pero no rompe.

Se estandarizaron tres niveles de seguridad, cada uno con una variante "pequeña" (s, small) y una "rápida" (f, fast), que intercambian tamaño de firma por velocidad de firmado:

- **SLH-DSA-128s**: firmas de unos 7,856 bytes, seguridad de unos 128 bits, firmado lento
- **SLH-DSA-128f**: firmas de unos 17,088 bytes, seguridad de unos 128 bits, firmado rápido
- **SLH-DSA-192s / 192f**: firmas de unos 16,224 y 35,664 bytes, seguridad de unos 192 bits
- **SLH-DSA-256s**: firmas de unos 29,792 bytes, seguridad de unos 256 bits
- **SLH-DSA-256f**: firmas de unos 49,856 bytes, seguridad de unos 256 bits

Las claves públicas son pequeñas (de unos 32 a 64 bytes); el costo está en el tamaño de la firma.

## Basado en hash frente a basado en retículos

El modelo de seguridad de SLH-DSA es fundamentalmente distinto del de ML-DSA:

- **ML-DSA**: la seguridad viene de la supuesta dificultad de los problemas de retículos. Están bien estudiados matemáticamente, pero son criptográficamente más jóvenes que las funciones hash.
- **SLH-DSA**: la seguridad viene de la supuesta dificultad de invertir funciones hash (funciones unidireccionales). Las funciones hash están entre las primitivas criptográficas más antiguas, más estudiadas y más confiables.

La disyuntiva: los esquemas basados en hash son conservadores, construidos sobre primitivas criptográficas con décadas de análisis encima. Pero pagan un costo enorme en tamaño de firma. Los esquemas basados en retículos son más eficientes, pero dependen de un área más joven del criptoanálisis, donde los avances futuros son más plausibles.

Si quieres firmas que no pueda romper ningún algoritmo que todavía no sabemos que existe, SLH-DSA es la opción conservadora. Si quieres eficiencia práctica, gana ML-DSA.

## Ventajas y desventajas

Frente a los esquemas actuales de Bitcoin:

- Firma [ECDSA](/es/glosario/ecdsa): unos 71 a 72 bytes
- Firma [Schnorr](/es/glosario/firma-schnorr): 64 bytes
- Firma SLH-DSA-128s: unos 7,856 bytes, más de 100 veces más grande
- Firma SLH-DSA-256f: unos 49,856 bytes, casi 800 veces más grande

A la escala de Bitcoin, una migración completa a SLH-DSA inflaría el tamaño de las transacciones y reduciría de forma significativa la capacidad efectiva de los bloques. Los conjuntos de parámetros más grandes son, podría decirse, impracticables para transacciones generales de Bitcoin; los más pequeños siguen siendo unas tres veces más grandes que el más pequeño de ML-DSA (2,420 bytes para ML-DSA-44).

Por eso, el argumento a favor de SLH-DSA en Bitcoin es la criptografía conservadora, no la eficiencia. Sería la opción si la comunidad quisiera la máxima confianza en que ningún avance criptoanalítico futuro pueda amenazar la red, a costa de la economía del espacio en el bloque.

## Su lugar en la discusión sobre la migración de Bitcoin

SLH-DSA es el segundo esquema de firma poscuántica estandarizado por el NIST y la alternativa canónica basada en hash a ML-DSA. En la conversación de Bitcoin suele mencionarse como:

- Un plan de reserva por si los esquemas de retículos resultan comprometidos más adelante por un ataque clásico
- Una opción para transacciones de alto valor o de larga vida, donde la seguridad conservadora importa más que las comisiones
- Un posible componente de un esquema híbrido: varias firmas con distintos supuestos de seguridad en la misma transacción

El "BIP de firma poscuántica por definir" (TBD Post Quantum Signature BIP) que exige el [BIP 361](/es/glosario/bip-361) todavía no se ha publicado, así que la posición formal de Bitcoin sobre SLH-DSA está por determinar. El supuesto de trabajo va en sentido contrario al orden del NIST: la mayor parte del trabajo poscuántico de Bitcoin se ha ido a los esquemas basados en hash, y el borrador del BIP de SHRINCS (primer borrador publicado el 26 de agosto de 2026) reduce una firma basada en hash con estado parcial (semi-stateful) a 548 bytes, con una alternativa sin estado de 5,777 bytes, a cambio de guardar un poco de estado en la billetera.

Lee el tema a fondo [Computación cuántica y Bitcoin](/es/a-fondo/computacion-cuantica-y-bitcoin) para ver lo que cada esquema candidato cuesta en espacio en el bloque.

Especificación: [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) (NIST CSRC).
