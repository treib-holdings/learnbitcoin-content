---
title: "Bitcoin poscuántico"
slug: bitcoin-poscuantico
draft: false
published: "2026-10-15"
shortDefinition: "El conjunto de cambios de protocolo que Bitcoin necesita para seguir siendo seguro frente a una computadora cuántica lo bastante potente; se concentra en los esquemas de firma, no en la función hash."
keyTakeaways:
  - "La exposición cuántica de Bitcoin está en las firmas (ECDSA, Schnorr), no en la función hash (SHA-256)"
  - "Más del 34% de todos los BTC está en direcciones con la clave pública revelada: gastables con una computadora cuántica en cuanto llegue una CRQC"
  - "El NIST ha estandarizado dos candidatos de firma poscuántica (ML-DSA, SLH-DSA); Bitcoin no se ha comprometido con ninguno"
aliases:
  - "post-quantum Bitcoin"
  - "Bitcoin post-cuántico"
  - "Bitcoin postcuántico"
  - "migración poscuántica"
  - "criptografía poscuántica"
  - "poscuántico"
  - "poscuántica"
sources:
  - { label: "BIP-361 - Post Quantum Migration and Legacy Signature Sunset, draft assigned 2026-02-11: as of March 1, 2026, over 34% of all bitcoin have revealed a public key on-chain; Phase A at 160,000 blocks (about 3 years) after activation and Phase B 2 years after that; requires a TBD Post Quantum Signature BIP; the rescue example is a BIP-32 hardened-derivation proof, and no rescue protocol is currently believed possible for P2PK", url: "https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki" }
  - { label: "NIST - NIST Releases First 3 Finalized Post-Quantum Encryption Standards (August 13, 2024): FIPS 204 (ML-DSA, from CRYSTALS-Dilithium) and FIPS 205 (SLH-DSA, from SPHINCS+) are the two signature standards; a draft FIPS 206 built around FALCON, to be called FN-DSA, was still to come", url: "https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards" }
  - { label: "NIST CSRC - Post-Quantum Cryptography project page (updated August 5, 2026): the Falcon digital signature algorithm was selected for ongoing standardization and that process is underway", url: "https://csrc.nist.gov/projects/post-quantum-cryptography" }
  - { label: "Aggarwal, Brennen, Lee, Santha, Tomamichel - Quantum attacks on Bitcoin, and how to protect against them (arXiv, October 28, 2017): proof-of-work is relatively resistant to quantum speedup; the elliptic curve signature scheme could be completely broken as early as 2027 by the most optimistic estimates", url: "https://arxiv.org/abs/1710.10377" }
  - { label: "NIST IR 8105 - Report on Post-Quantum Cryptography (April 2016): Grover's algorithm gives a quadratic speed-up on unstructured search, so symmetric ciphers and hash functions need larger sizes rather than replacement", url: "https://nvlpubs.nist.gov/nistpubs/ir/2016/NIST.IR.8105.pdf" }
  - { label: "Global Risk Institute - Quantum Threat Timeline Report 2024, executive summary (December 2024): experts gave likelihood ranges for a CRQC over 5 to 30 years; about 34% within a decade on an optimistic reading and about 19% on a pessimistic one", url: "https://globalriskinstitute.org/mp-files/quantum-threat-timeline-report-2024-executive-summary.pdf" }
relatedTerms:
  - shors-algorithm
  - grovers-algorithm
  - crqc-cryptographically-relevant-quantum-computer
  - bip-361
  - ml-dsa-dilithium
  - slh-dsa-sphincs-plus
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - elliptic-curve
  - hash
  - p2pk-pay-public-key
  - address-reuse
liveWidget: ~
translationOf: post-quantum-bitcoin
sourceHash: "b7dfa20e9f23"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

La criptografía de Bitcoin no se diseñó pensando en computadoras cuánticas. "Bitcoin poscuántico" es el término paraguas para los cambios de protocolo que tienen que ocurrir antes de que lleguen: en concreto, cambiar los esquemas de firma ([ECDSA](/es/glosario/ecdsa) y [Schnorr](/es/glosario/firma-schnorr)) por otros que no se derritan ante el [algoritmo de Shor](/es/glosario/algoritmo-de-shor).

La amenaza es concreta, la matemática está publicada y la migración está en borrador activo. Nada de eso es consenso todavía.

## Qué está en riesgo

Los esquemas de firma de Bitcoin, ECDSA y Schnorr, ambos sobre la [curva elíptica](/es/glosario/curva-eliptica) secp256k1, dependen del supuesto de que el problema del logaritmo discreto es computacionalmente difícil. Una computadora cuántica lo bastante grande que corra el algoritmo de Shor rompe ese supuesto de frente: dada la [clave pública](/es/glosario/clave-publica), el algoritmo deriva la clave privada en tiempo polinómico.

Esa es la exposición existencial. Cualquier UTXO cuya clave pública se haya revelado on-chain es, en teoría, gastable por cualquiera que tenga una máquina así.

## Qué no lo está

La función hash de Bitcoin, [SHA-256](/es/glosario/hash), queda debilitada pero no rota por el [algoritmo de Grover](/es/glosario/algoritmo-de-grover), que da una aceleración cuadrática en la búsqueda no estructurada. La seguridad efectiva baja de 256 bits a unos 128. Eso sigue siendo muy fuerte: 128 bits de seguridad es el piso estándar del resto de la criptografía simétrica.

En la práctica:

- **La prueba de trabajo sobrevive.** Los mineros cuánticos ganarían una aceleración de raíz cuadrada, no una ventaja dominante.
- **Los tipos de dirección con hash ([P2PKH](/es/glosario/p2pkh), [P2WPKH](/es/glosario/p2wpkh)) sobreviven** mientras sus claves públicas sigan sin revelarse.
- **El tope de 21 millones no está amenazado.** Una computadora cuántica permite robar monedas expuestas, no acuñar monedas nuevas.

## La exposición hoy

[BIP 361](/es/glosario/bip-361) sitúa **más del 34% de todos los bitcoins**, a marzo de 2026, en direcciones con la clave pública revelada. La exposición se reparte en tres grupos:

- **[Salidas P2PK](/es/glosario/p2pk)**: los bitcoins de los primeros tiempos (sobre todo recompensas de minería de 2009 y 2010, incluida la mayor parte de las monedas de Satoshi). La clave pública está on-chain desde que se crea la salida.
- **Direcciones P2PKH / P2WPKH reutilizadas**: una vez gastadas, la clave pública queda revelada para siempre. Las monedas que se quedan en esa dirección, o que vuelven a ella, están expuestas. Consulta [reutilización de direcciones](/es/glosario/reutilizacion-de-direcciones) para ver por qué pasa.
- **Salidas P2TR ([Taproot](/es/glosario/taproot))**: la dirección *es* la clave pública ajustada (tweaked), en bech32m. No hay ninguna capa de hash delante. Expuestas desde su creación, antes de cualquier gasto.

Las direcciones P2PKH y P2WPKH que nunca se han gastado son seguras hoy frente a un ataque cuántico. La clave pública está detrás de un hash; solo la transacción que la gasta la revela.

## La migración en marcha

El NIST finalizó dos estándares de firma poscuántica en agosto de 2024: [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) ([ML-DSA](/es/glosario/ml-dsa), basado en Dilithium) y [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) ([SLH-DSA](/es/glosario/slh-dsa), basado en SPHINCS+). Un tercero (Falcon, que pasará a llamarse FN-DSA) sigue en proceso de estandarización.

Para Bitcoin en concreto, el marco de migración es [BIP 361](/es/glosario/bip-361), una propuesta en borrador que retira los gastos con ECDSA y Schnorr a lo largo de cinco años mediante un soft fork en dos fases. El esquema de firma poscuántica en sí se deja para un BIP aparte, el "TBD Post Quantum Signature BIP" (BIP de firma poscuántica por definir), que todavía no se ha publicado.

Una consecuencia que vale la pena nombrar: bajo la fase B de BIP 361, las monedas en salidas legacy solo pueden moverse mediante un protocolo de rescate, y el ejemplo del BIP es una prueba de derivación endurecida de [BIP 32](/es/glosario/bip-32) que un atacante cuántico con solo la clave pública no puede producir. Las salidas P2PK de [Satoshi](/es/glosario/satoshi-nakamoto) son anteriores a BIP 32 (2012), y el BIP dice que hoy no se cree posible ningún protocolo de rescate para P2PK; remite en su lugar a una propuesta aparte, "Hourglass", para esas monedas. Solo con BIP 361, quedan bloqueadas para siempre. Si eso es una virtud o un defecto es la parte más encendida del debate.

## El calendario

Las estimaciones de cuándo llegará una [computadora cuántica criptográficamente relevante (CRQC)](/es/glosario/crqc) van desde "ya en 2027" (Aggarwal et al., 2017) hasta dentro de varias décadas. Los autores de BIP 361 citan hojas de ruta académicas que apuntan a entre 2027 y 2030. La encuesta a expertos de 2024 del Global Risk Institute reparte las probabilidades en una ventana de 5 a 30 años, con una probabilidad de entre uno de cada cinco y uno de cada tres, más o menos, de que ocurra en menos de diez años.

La disciplina consiste en planear para el caso optimista. El caso optimista viene siendo "ya en 2027" desde 2017, y el umbral se sigue desplazando hacia adelante a medida que los avances cuánticos chocan con la realidad de ingeniería de la corrección de errores. La tendencia apunta a que la capacidad llegará tarde o temprano: la pregunta no es si pasará, sino cuándo. La ventana de migración de cinco años de BIP 361 no es paranoia; es más o menos el tiempo que de verdad toma coordinar billeteras, exchanges y custodios en un nuevo esquema de firma.

Más a fondo en [Computación cuántica y Bitcoin](/es/a-fondo/computacion-cuantica-y-bitcoin): la medición completa de la exposición, qué está en riesgo y qué no, el calendario honesto y qué hacer de verdad hoy.

Especificación: [BIP 361](https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki). Página del NIST: [Post-Quantum Cryptography Project](https://csrc.nist.gov/projects/post-quantum-cryptography).
