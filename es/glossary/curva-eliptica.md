---
title: "Curva elíptica"
slug: curva-eliptica
draft: false
published: "2026-10-15"
shortDefinition: "Un tipo de curva que la criptografía de Bitcoin usa (secp256k1) para generar pares de claves pública y privada."
keyTakeaways:
  - "La matemática en la que se apoya el sistema de claves pública y privada de Bitcoin"
  - "Se usa para las firmas ECDSA y, ahora, para las firmas Schnorr sobre secp256k1"
  - "Su seguridad depende de que el problema del logaritmo discreto siga siendo intratable"
aliases:
  - "curvas elípticas"
  - "criptografía de curva elíptica"
  - "criptografía de curvas elípticas"
  - "elliptic curve"
  - "elliptic curve cryptography"
sources:
  - { label: "BIP 341 - Taproot: 32-byte output key and 64-byte key-path signature", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
relatedTerms:
  - bip-66
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - musig
  - musig2
  - post-quantum-bitcoin
  - schnorr-signature
  - shors-algorithm
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://en.wikipedia.org/wiki/Elliptic-curve_cryptography"
  - "https://www.wikidata.org/wiki/Q1048911"
liveWidget: ~
translationOf: elliptic-curve
sourceHash: "a65a33913b7e"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

La [criptografía de clave pública](/es/glosario/clave-publica) de Bitcoin se construye sobre una curva elíptica concreta llamada **secp256k1**. Satoshi la eligió para el diseño original de Bitcoin y desde entonces ha sido la columna vertebral de cada firma de Bitcoin.

La propiedad que importa: las curvas elípticas permiten hacer "matemática de un solo sentido". Puedes multiplicar un punto conocido G de la curva por un número secreto k y obtener otro punto P (barato). Ir en sentido contrario, es decir, dado P, encontrar k, es computacionalmente inviable para cualquier adversario realista. Esa asimetría es el **problema del logaritmo discreto en curvas elípticas**, y todo el modelo de propiedad de Bitcoin descansa en que siga siendo difícil.

En la práctica:

- Tu [clave privada](/es/glosario/clave-privada) no es más que un número k entre 1 y aproximadamente 2^256.
- Tu [clave pública](/es/glosario/clave-publica) es el punto P = k*G sobre la curva secp256k1.
- Firmar una transacción demuestra que conoces k *sin revelarlo*, aprovechando la misma matemática de un solo sentido.

Existen otras curvas elípticas (ed25519, NIST P-256, entre otras). Bitcoin se queda con secp256k1 por compatibilidad y porque no se le ha encontrado ninguna vulnerabilidad seria desde que Bitcoin arrancó sobre ella en 2009, aun cuando el crecimiento de Bitcoin la convirtió en uno de los objetivos criptográficos más atacados del planeta.

La amenaza más plausible es una computadora cuántica lo bastante potente para ejecutar el [algoritmo de Shor](/es/glosario/algoritmo-de-shor), que en principio podría romper el logaritmo discreto en curvas elípticas. Es una preocupación real, pero no inminente. Los tipos de dirección que mantienen la clave pública detrás de un hash hasta que se gastan las monedas, como [P2WPKH](/es/glosario/p2wpkh), ofrecen cierta defensa en profundidad frente a ese futuro. Las direcciones [Taproot](/es/glosario/taproot) no, porque cada una contiene la propia clave pública ajustada (tweaked), sin ningún hash delante.

Consulta [Bitcoin poscuántico](/es/glosario/bitcoin-poscuantico) para el marco de migración, y el tema a fondo [Espacio de claves (en inglés)](/rabbit-hole/key-space) para entender por qué 2^256 es muchísimo más grande de lo que tu intuición quiere admitir.
