---
title: "Clave pública"
slug: clave-publica
draft: false
published: "2026-10-13"
shortDefinition: "Se deriva de una clave privada mediante multiplicación en una curva elíptica y sirve para verificar firmas o generar direcciones de BTC."
keyTakeaways:
  - "Es el núcleo de la criptografía de Bitcoin: verificar firmas hechas con claves privadas"
  - "Se puede compartir sin peligro, a diferencia de la clave privada"
  - "Se convierte en hash (HASH160) para formar las direcciones legacy y las nativas de SegWit de una sola clave; una dirección Taproot lleva en cambio una clave pública ajustada (tweaked)"
aliases:
  - "claves públicas"
  - "pubkey"
  - "pubkeys"
sources:
  - { label: "SECG - SEC 1: Elliptic Curve Cryptography, version 2.0 (May 21, 2009): a key pair is a secret integer d and the public point Q = dG; the security of every ECC scheme rests on the elliptic curve discrete logarithm problem, for which no general subexponential algorithm is known", url: "https://www.secg.org/sec1-v2.pdf" }
  - { label: "BIP 340 - Schnorr Signatures for secp256k1: Bitcoin has used ECDSA over secp256k1 to authenticate transactions; the standard compressed public key is 33 bytes, and Taproot keys are encoded as 32 bytes (x-only)", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System (2008): each owner signs a hash of the previous transaction and the public key of the next owner, and a payee can verify the signatures to verify the chain of ownership", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Core - src/hash.h: CHash160, Bitcoin's 160-bit hash (SHA-256 then RIPEMD-160)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/hash.h" }
  - { label: "BIP 141 - Segregated Witness: for a 20-byte version-0 witness program (P2WPKH), the HASH160 of the public key must match the program", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 341 - Taproot: a version-1 witness program is the 32-byte encoding of the output key Q, a public key tweaked with the script tree", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP 360 (Draft, Pay-to-Merkle-Root, version 0.12.1): long-exposure quantum attacks target public keys already on the chain; Taproot outputs are fundamentally vulnerable, while P2PKH and P2WPKH funds become vulnerable once a spend reveals the key", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
relatedTerms:
  - address
  - b32-address
  - p2pk-pay-public-key
  - post-quantum-bitcoin
  - shors-algorithm
  - xpub-extended-public-key
sameAs:
  - "https://en.wikipedia.org/wiki/Public-key_cryptography"
  - "https://www.wikidata.org/wiki/Q201339"
liveWidget: ~
translationOf: public-key
sourceHash: "e13ddbdc2958"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una clave pública es un número derivado de una [clave privada](/es/glosario/clave-privada) mediante multiplicación en una curva elíptica. Corresponde de forma única a la clave privada, pero no revela nada sobre ella: puedes publicar tu clave pública sin comprometer tu secreto.

El mecanismo: Bitcoin usa la curva elíptica secp256k1. Multiplicar un punto generador G de la curva por tu clave privada k da un punto P = k*G. Ese punto P (codificado en 33 bytes en forma comprimida, o como una clave de 32 bytes de solo coordenada x bajo Taproot) es tu clave pública. Ir hacia adelante, de k a P, es barato. Ir hacia atrás, de P a k, exige resolver el problema del logaritmo discreto en curvas elípticas, para el que no se conoce ningún método eficiente: el mismo problema difícil en el que se apoya todo criptosistema de curva elíptica.

Para qué sirven las claves públicas:

- **Verificar firmas.** Cuando gastas BTC, tu billetera firma la transacción con tu clave privada. Cualquiera, incluido cada nodo de la red, puede verificar esa firma contra tu clave pública sin llegar a conocer tu clave privada. Así es como Bitcoin hace cumplir la regla de "solo el dueño legítimo puede gastar".
- **Generar [direcciones](/es/glosario/direccion).** Las direcciones legacy (P2PKH) y las nativas de SegWit (P2WPKH) se derivan aplicando a la clave pública el hash HASH160 (SHA-256 y luego RIPEMD-160). Lo que se comparte es el hash; la clave pública en sí solo se revela cuando gastas. Las direcciones [Taproot](/es/glosario/taproot) funcionan distinto: contienen directamente una clave pública de 32 bytes ajustada (tweaked), no un hash de ella.

¿Por qué convertir la clave pública en hash para formar una dirección, en vez de compartir la clave pública sin más? Por dos razones. Primero, las direcciones son mucho más cortas y fáciles de manejar. Segundo, el hash agrega una capa de defensa: si algún día se rompe la criptografía de curva elíptica, por ejemplo con una computadora cuántica lo bastante potente para ejecutar el [algoritmo de Shor (en inglés)](/glossary/shors-algorithm), los fondos en direcciones sin gastar siguen a salvo siempre que la clave pública nunca se haya revelado. Las direcciones reutilizadas o ya gastadas están más expuestas, y las salidas Taproot, que llevan su clave en la cadena, no reciben esta protección en absoluto. Consulta [Bitcoin poscuántico (en inglés)](/glossary/post-quantum-bitcoin) para el marco de migración.

La asimetría entre la clave privada y la pública (barata en un sentido, imposible en el otro) es la base de todo lo que en Bitcoin tiene que ver con la propiedad criptográfica.
