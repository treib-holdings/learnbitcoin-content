---
title: "ECDSA (algoritmo de firma digital de curva elíptica)"
slug: ecdsa
aliases:
  - "ECDSA"
  - "firma ECDSA"
  - "firmas ECDSA"
  - "algoritmo de firma digital de curva elíptica"
  - "Elliptic Curve Digital Signature Algorithm"
draft: false
published: "2026-10-15"
shortDefinition: "El esquema de firma original de Bitcoin para demostrar la propiedad de las monedas; todavía lo usa cada tipo de salida anterior a Taproot, junto a las firmas Schnorr de Taproot."
keyTakeaways:
  - "Método basado en curvas elípticas para firmar transacciones"
  - "Fue la piedra angular de la seguridad criptográfica de Bitcoin"
  - "Las firmas Schnorr ahora conviven con él y traen ventajas potenciales"
sources:
  - { label: "BIP-340 - Schnorr Signatures for secp256k1: Bitcoin has traditionally used ECDSA over secp256k1; ECDSA signatures are inherently malleable since (r, n-s) verifies whenever (r, s) does; the best provable-security results for ECDSA rely on stronger assumptions; Schnorr's linearity is the building block for multisignatures (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "bitcoin-core/secp256k1 - README: constant time, constant memory access signing; intended to be completely free of timing sidechannels for secret-key operations; derandomized ECDSA via RFC 6979 (accessed 2026-10-14)", url: "https://github.com/bitcoin-core/secp256k1/blob/master/README.md" }
  - { label: "Billy Bob Brumley and Nicola Tuveri - Remote Timing Attacks are Still Practical: a timing leak in OpenSSL's elliptic-curve scalar multiplication recovers a TLS server's ECDSA private key (IACR ePrint 2011/232)", url: "https://eprint.iacr.org/2011/232" }
  - { label: "BIP-141 - Segregated Witness: signature data is no longer part of the transaction hash, so nonintentional malleability becomes impossible for inputs that use it (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP-341 - Taproot: key path spends verify a BIP 340 signature; the deployment activated at height 709632 on mainnet (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-342 - Validation of Taproot Scripts: OP_CHECKSIG and OP_CHECKSIGVERIFY are modified to operate on Schnorr public keys and signatures instead of ECDSA (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" }
  - { label: "Peter W. Shor - Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer (1995)", url: "https://arxiv.org/abs/quant-ph/9508027" }
relatedTerms:
  - adapter-signature
  - bip-66
  - constant-time
  - elliptic-curve
  - musig
  - musig2
  - post-quantum-bitcoin
  - schnorr-signature
  - shors-algorithm
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"
  - "https://www.wikidata.org/wiki/Q915079"
  - "https://en.bitcoin.it/wiki/ECDSA"
liveWidget: ~
translationOf: ecdsa-elliptic-curve-digital-signature-algorithm
sourceHash: "30715cc5b57e"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

ECDSA es el esquema de firma digital original de Bitcoin. Así es como la red verifica, desde 2009, que quien gasta un UTXO es quien de verdad controla la [clave privada](/es/glosario/clave-privada) a la que se envió.

El mecanismo se construye sobre la [curva elíptica secp256k1](/es/glosario/curva-eliptica). A grandes rasgos:

1. Un firmante con la clave privada `d` produce una firma `(r, s)` que depende de `d`, del mensaje que se firma y de un nonce secreto `k` (aleatorio en el ECDSA de libro de texto; libsecp256k1 lo deriva de forma determinista a partir de la clave y el mensaje, según el RFC 6979).
2. Cualquiera que tenga la [clave pública](/es/glosario/clave-publica) correspondiente puede verificar que la firma es matemáticamente consistente, es decir, que quien firmó tenía que conocer `d`.
3. En el proceso, quien verifica no aprende nada sobre `d`.

Las implementaciones de ECDSA en producción también tienen que seguir una disciplina estricta de [tiempo constante (en inglés)](/glossary/constant-time): el paso de multiplicación escalar al firmar filtra bits de la clave a través de los tiempos de ejecución si se implementa de forma ingenua, y un ataque de 2011 recuperó la clave ECDSA de un servidor TLS a partir de una fuga de tiempos en la multiplicación escalar de OpenSSL. La libsecp256k1 de Bitcoin Core, construida para no tener canales laterales de tiempo en las operaciones con claves secretas, es una de las implementaciones de firma en tiempo constante mejor diseñadas de la criptografía en producción.

ECDSA funciona, pero tiene algunas molestias:

- **Maleabilidad de la firma.** Una firma dada `(r, s)` se puede convertir trivialmente en `(r, n - s)`, donde `n` es el orden de la curva. Las dos son válidas para la misma clave y el mismo mensaje. Eso causó dolores de cabeza reales con la estabilidad del txid. [SegWit](/es/glosario/segwit) lo corrigió para las entradas que lo usan, al sacar las firmas de los datos con los que se calcula el txid.
- **Sin agregación nativa.** Cinco cofirmantes en una salida multisig producen cinco firmas separadas, cada una ocupando espacio en la cadena. No hay una forma limpia de comprimirlas.
- **Pruebas algo incómodas.** Los resultados de seguridad demostrable para ECDSA son más enredados que para Schnorr.

Las [firmas Schnorr](/es/glosario/firma-schnorr), activadas con [Taproot](/es/glosario/taproot) en noviembre de 2021 en el bloque 709,632, resuelven los tres problemas. ECDSA sigue en uso en todos los tipos de salida anteriores a Taproot (P2PK, P2PKH, P2SH, P2WPKH, P2WSH) y sigue siendo el esquema de firma más probado que usa Bitcoin en producción. Las salidas Taproot usan solo Schnorr: la ruta de clave verifica una firma BIP 340, y el OP_CHECKSIG de tapscript se redefinió para claves y firmas Schnorr en vez de ECDSA.

La seguridad de ECDSA descansa en que el problema del logaritmo discreto en curvas elípticas sea computacionalmente difícil. El [algoritmo de Shor](/es/glosario/algoritmo-de-shor) rompe esa suposición en una computadora cuántica lo bastante potente. Consulta [Bitcoin poscuántico](/es/glosario/bitcoin-poscuantico) para ver el marco de migración.
