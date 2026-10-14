---
title: "Firma Schnorr"
slug: firma-schnorr
aliases:
  - "firmas Schnorr"
  - "firma de Schnorr"
  - "firmas de Schnorr"
  - "Schnorr"
  - "Schnorr signature"
  - "Schnorr signatures"
draft: false
published: "2026-10-15"
shortDefinition: "Un esquema de firma más eficiente, introducido con Taproot, que permite agregar claves y firmas para ganar privacidad y pagar menos comisiones."
keyTakeaways:
  - "Reduce el tamaño de las transacciones con varias firmas"
  - "Su seguridad es más fácil de demostrar que la de ECDSA, y tiene propiedades algebraicas únicas"
  - "Es la base de funciones avanzadas como la agregación de claves con MuSig2 y los gastos por la ruta de clave de Taproot"
sources:
  - { label: "BIP-340 - Schnorr Signatures for secp256k1: 64-byte signatures versus DER-encoded ECDSA of variable size up to 72 bytes; provably SUF-CMA secure in the random oracle model assuming ECDLP, while ECDSA's best proofs rely on stronger assumptions; non-malleable; linearity lets collaborating parties produce a signature valid for the sum of their public keys; explicitly not a unique signature scheme", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "BIP-341 - Taproot: the deployment activated at height 709632 on mainnet; cross-input aggregation was left out because it interacts in complex ways with upgrade mechanisms", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "mempool.space - block 709,632, the first block under Taproot rules, timestamped 2021-11-14 05:15 UTC", url: "https://mempool.space/block/709632" }
  - { label: "BIP-327 - MuSig2 for BIP340-compatible Multi-Signatures: a MuSig2 Taproot output is a single BIP340 key and spending it takes a single signature cooperatively produced by all signers, indistinguishable to an observer from a single-signer output", url: "https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki" }
  - { label: "Google Patents - US 4,995,082, Claus P. Schnorr: filed February 23, 1990, granted February 19, 1991, anticipated expiration February 23, 2010, status expired", url: "https://patents.google.com/patent/US4995082A/en" }
  - { label: "Bitcoin Core - libsecp256k1 README: constant time, constant memory access signing and public key generation, intended to be free of timing side channels for secret-key operations", url: "https://github.com/bitcoin-core/secp256k1/blob/master/README.md" }
  - { label: "Bitcoin v0.1.5 - key.h (2009): keys and signatures go through OpenSSL's EC_KEY, ECDSA_sign and ECDSA_verify on the secp256k1 curve", url: "https://github.com/bitcoin/bitcoin/blob/v0.1.5/key.h" }
relatedTerms:
  - taproot
  - bip-342-tapscript
  - constant-time
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - mono-signature
  - musig
  - musig2
  - post-quantum-bitcoin
  - psbt
  - shors-algorithm
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://en.wikipedia.org/wiki/Schnorr_signature"
  - "https://www.wikidata.org/wiki/Q1465057"
  - "https://en.bitcoin.it/wiki/Schnorr"
  - "https://bitcoinops.org/en/topics/schnorr-signatures/"
liveWidget: ~
translationOf: schnorr-signature
sourceHash: "e83e8877aed6"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

Las firmas Schnorr son el esquema de firma moderno de Bitcoin, activado con [Taproot](/es/glosario/taproot) en noviembre de 2021 mediante el [BIP 340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki). Reemplazan a [ECDSA](/es/glosario/ecdsa) en toda salida que use una dirección Taproot (las que empiezan con `bc1p`).

Lo que Schnorr aporta y ECDSA no:

- **Linealidad.** Las firmas Schnorr son lineales, matemáticamente hablando: los cofirmantes pueden combinar sus firmas parciales en una sola firma válida para la suma de sus claves públicas. Suena esotérico, pero es lo que hace posible la [agregación de firmas (en inglés)](/glossary/signature-aggregation), la mayor ganancia práctica.
- **Una sola firma entre varios cofirmantes.** Una multisig 5 de 5 con Schnorr (mediante el protocolo MuSig2) aparece en la cadena como una sola firma, indistinguible de un gasto de una sola firma. Antes, una 5 de 5 exigía cinco firmas y saltaba a la vista en el bloque; ahora parece una sola persona gastando. Privacidad más ahorro de espacio. Esto es agregación entre los cofirmantes de una misma salida. Una transacción con cinco entradas Taproot sigue llevando cinco firmas, y combinar firmas entre entradas necesitaría otro soft fork.
- **Firmas más pequeñas.** Una firma Schnorr ocupa 64 bytes, frente a los 70 a 72 bytes de tamaño variable de ECDSA. Ahorra espacio en el bloque y ahorra comisiones.
- **Seguridad demostrable más limpia.** Schnorr tiene una prueba de seguridad más ajustada que ECDSA bajo supuestos estándar, lo que pone más contentos a los criptógrafos.
- **Sin maleabilidad.** Un tercero no puede convertir una firma Schnorr válida en otra distinta, también válida, para la misma clave y el mismo mensaje (las firmas del BIP 340 son fuertemente infalsificables): la maleabilidad que molestaba en ECDSA desapareció. Quien firma todavía puede producir firmas válidas distintas eligiendo nonces distintos; el BIP 340 dice de forma explícita que no es un esquema en el que cada mensaje tenga una única firma posible.

Las implementaciones de Schnorr en producción, con libsecp256k1 de Bitcoin a la cabeza, exigen una disciplina estricta de [tiempo constante (en inglés)](/glossary/constant-time) en la ruta de firma para no filtrar material de la clave por canales laterales de tiempo o de acceso a la caché. La matemática es limpia; la ingeniería necesaria para defenderla en hardware real es una disciplina aparte.

La versión habitual dice que Bitcoin usó ECDSA porque la patente de Claus Schnorr acababa de vencer, demasiado tarde para que el esquema se estandarizara. No fue así: la patente estadounidense 4,995,082 se presentó en febrero de 1990 y venció en febrero de 2010, más de un año después del lanzamiento de Bitcoin. La razón más aburrida es que ECDSA era el esquema de curva elíptica estandarizado y con una implementación en OpenSSL, y Satoshi usó lo que había. Después, la comunidad tardó más de una década en diseñar, revisar y desplegar bien Schnorr. La espera valió la pena; hoy Schnorr se considera uno de los esquemas de firma más limpios de la criptografía en producción.

Schnorr hereda de ECDSA el supuesto del logaritmo discreto en curvas elípticas y, por lo tanto, su vulnerabilidad cuántica. Una computadora cuántica lo bastante potente que corra el [algoritmo de Shor](/es/glosario/algoritmo-de-shor) rompe los dos esquemas. Consulta [Bitcoin poscuántico](/es/glosario/bitcoin-poscuantico) para el marco de migración.

Consulta [Agregación de firmas (en inglés)](/glossary/signature-aggregation) para ver qué se gana con la linealidad, y [Taproot](/es/glosario/taproot) para el soft fork que trajo Schnorr a Bitcoin.

Lee [Cómo funciona Taproot en realidad (en inglés)](/rabbit-hole/how-taproot-works) para ver qué ganó Bitcoin con Schnorr en la práctica y qué sigue guardado en el estante.
