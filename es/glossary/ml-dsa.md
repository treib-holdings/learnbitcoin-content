---
title: "ML-DSA (Dilithium, FIPS 204)"
slug: ml-dsa
aliases:
  - "ML-DSA"
  - "Dilithium"
  - "CRYSTALS-Dilithium"
  - "FIPS 204"
  - "ML-DSA-65"
draft: false
published: "2026-10-15"
shortDefinition: "El esquema de firma poscuántica basado en retículos (lattices) que estandarizó el NIST, una de las opciones que se discuten para la migración poscuántica de Bitcoin."
keyTakeaways:
  - "Esquema de firma poscuántica basado en retículos, estandarizado por el NIST (FIPS 204, agosto de 2024)"
  - "Sus firmas son unas 50 veces más grandes que las actuales de Bitcoin (unos 3 KB frente a 64 bytes)"
  - "Se discute para la migración poscuántica de Bitcoin, aunque el trabajo poscuántico de Bitcoin se ha centrado sobre todo en esquemas basados en hash"
sources:
  - { label: "NIST FIPS 204 - Module-Lattice-Based Digital Signature Standard (August 2024)", url: "https://csrc.nist.gov/pubs/fips/204/final" }
  - { label: "Bitcoin Optech Newsletter #412 - why Bitcoin post-quantum work has focused on hash-based signatures (3 July 2026)", url: "https://bitcoinops.org/en/newsletters/2026/07/03/" }
  - { label: "Bitcoin Optech Newsletter #421 - SHRINCS draft BIP, a semi-stateful hash-based signature scheme (4 September 2026)", url: "https://bitcoinops.org/en/newsletters/2026/09/04/" }
relatedTerms:
  - post-quantum-bitcoin
  - bip-361
  - slh-dsa-sphincs-plus
  - shors-algorithm
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - public-key
  - elliptic-curve
liveWidget: ~
translationOf: ml-dsa-dilithium
sourceHash: "261cc10b3c1d"
sourceCommit: "b3ef864"
sourceUpdated: "2026-06-01"
translation:
  method: "llm-draft"
---

ML-DSA (Module-Lattice-Based Digital Signature Algorithm, algoritmo de firma digital basado en retículos modulares) es el estándar de firma poscuántica que el NIST finalizó como [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) en agosto de 2024. Se basa en CRYSTALS-Dilithium, el esquema de criptografía de retículos (lattices) que ganó el concurso de firmas poscuánticas del NIST. En las discusiones sobre la migración de Bitcoin, ML-DSA es el candidato más citado para reemplazar a [ECDSA](/es/glosario/ecdsa) y a las [firmas Schnorr](/es/glosario/firma-schnorr).

## Qué es

ML-DSA es un esquema de firma digital cuya seguridad depende de que ciertos problemas de retículos sean difíciles; en concreto, los problemas Module Learning With Errors (MLWE) y Module Short Integer Solution (MSIS). Se cree que estos problemas son difíciles incluso para las computadoras cuánticas; el [algoritmo de Shor](/es/glosario/algoritmo-de-shor) no se aplica a los problemas de retículos como se aplica a los logaritmos discretos de curva elíptica.

El esquema produce firmas con aritmética de polinomios sobre retículos modulares. Hay tres conjuntos de parámetros estandarizados:

- **ML-DSA-44**: unos 128 bits de seguridad, firmas de unos 2,420 bytes
- **ML-DSA-65**: unos 192 bits de seguridad, firmas de unos 3,309 bytes
- **ML-DSA-87**: unos 256 bits de seguridad, firmas de unos 4,627 bytes

Las [claves públicas](/es/glosario/clave-publica) van de unos 1,300 a unos 2,600 bytes según el conjunto de parámetros.

## El supuesto de los retículos

El supuesto de seguridad detrás de ML-DSA es de otra naturaleza que el de ECDSA. ECDSA supone que el problema del logaritmo discreto es difícil; ese supuesto se derrumba ante una [CRQC](/es/glosario/crqc). De los problemas de retículos (encontrar vectores cortos en retículos de muchas dimensiones, o resolver sistemas de ecuaciones lineales con ruido) no se conoce ningún algoritmo cuántico que los resuelva con eficiencia.

Eso no es una garantía. La criptografía de retículos es más joven que RSA y ECDSA; la comunidad criptográfica tiene menos experiencia acumulada en atacarla. Avances futuros (cuánticos o clásicos) podrían debilitar esquemas concretos. La estandarización del NIST refleja el consenso actual de que los problemas de retículos ofrecen el mejor equilibrio entre seguridad y practicidad para las firmas poscuánticas, no que esté demostrado que son irrompibles.

## Lo que cuesta

Comparado con los esquemas actuales de Bitcoin:

- Firma ECDSA (codificada en DER en la cadena): unos 71 a 72 bytes
- Firma Schnorr ([BIP 340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)): exactamente 64 bytes
- Firma ML-DSA-65 (el conjunto de parámetros intermedio): unos 3,309 bytes

Es un aumento de unas 50 veces en el tamaño de la firma. Las consecuencias:

- El tamaño de las transacciones crece de forma sustancial; las comisiones crecen en proporción
- El presupuesto de peso del bloque se consume más rápido
- Los requisitos de almacenamiento con poda (pruning) aumentan
- El tamaño del conjunto de UTXOs y el costo de validación suben

Nada de esto es insalvable, pero es la razón de que la migración poscuántica de Bitcoin no sea un simple reemplazo directo. La economía del espacio en el bloque tendrá que absorber las firmas más grandes, y eso explica en parte por qué la migración en dos fases del [BIP 361](/es/glosario/bip-361) se extiende a lo largo de cinco años.

## Su lugar en la discusión sobre la migración de Bitcoin

El BIP 361, la propuesta en borrador activa para la migración poscuántica de Bitcoin, es agnóstico respecto al esquema de firma: deja la elección del algoritmo a un BIP de firmas aparte. ML-DSA aparece en esa discusión porque:

- Está estandarizado por el NIST (FIPS 204)
- Sus firmas son mucho más pequeñas que las de SLH-DSA ([SLH-DSA / SPHINCS+](/es/glosario/slh-dsa) es mucho más grande; Falcon es más pequeño, pero más frágil de implementar)
- La verificación es lo bastante rápida para que los nodos completos validen a la escala de Bitcoin
- Ya se está desplegando fuera de Bitcoin (TLS, firma de código)

Aun así, el trabajo poscuántico de Bitcoin se ha centrado sobre todo en las firmas basadas en hash, cuya seguridad descansa únicamente en que la función hash aguante y cuya implementación es más simple. El borrador de BIP SHRINCS, publicado en 2026, es un esquema basado en hash compatible con SLH-DSA que baja las firmas a 548 bytes a cambio de guardar un poco de estado en la billetera. Los esquemas de retículos como ML-DSA siguen en la discusión, y la elección de Bitcoin sopesará el tamaño de la firma frente a lo bien probada que esté la matemática de fondo.

Consulta el tema a fondo [Computación cuántica y Bitcoin](/es/a-fondo/computacion-cuantica-y-bitcoin) para ver cuánto espacio en el bloque cuestan los esquemas candidatos y cómo se toma la decisión.

Especificación: [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) (NIST CSRC).
