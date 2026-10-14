---
title: "Clave pública x-only"
slug: clave-publica-x-only
aliases:
  - "clave x-only"
  - "claves x-only"
  - "claves públicas x-only"
  - "clave pública de solo x"
  - "x-only"
  - "x-only pubkey"
  - "x-only public key"
avoid:
  - "llave x-only"
  - "llaves x-only"
  - "pubkey x-only"
draft: false
published: "2026-10-15"
shortDefinition: "Una clave pública de 32 bytes que guarda solo la coordenada X de un punto de la curva, y da por sentado que la coordenada Y es par. La introdujo el BIP 340 y se usa en todas las salidas y firmas de Taproot."
keyTakeaways:
  - "Cada coordenada X válida en secp256k1 tiene exactamente dos coordenadas Y, una par y una impar, así que fijar la paridad en par no pierde información ni cuesta seguridad"
  - "Una clave x-only equivale a la clave comprimida de 33 bytes con prefijo 0x02, y por eso las claves BIP 32 existentes se pueden reutilizar quitando el primer byte"
  - "La paridad la maneja quien firma, no quien verifica: si una clave tiene Y impar, el firmante niega su clave privada (le cambia el signo) antes de firmar, así que toda clave x-only tiene dos claves privadas que le corresponden"
sources:
  - { label: "BIP-340 - Schnorr Signatures for secp256k1 (design section on implicit Y coordinates)", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "BIP-341 - Taproot (32-byte witness program)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Optech - X-only public keys topic", url: "https://bitcoinops.org/en/topics/x-only-public-keys/" }
relatedTerms:
  - bip-340
  - public-key
  - schnorr-signature
  - taproot
  - taproot-tweak
  - control-block
  - elliptic-curve
liveWidget: ~
translationOf: x-only-public-key
sourceHash: "bb3a78cb6fce"
sourceCommit: "0ea202c"
sourceUpdated: "2026-09-17"
translation:
  method: "llm-draft"
---

Una [clave pública](/es/glosario/clave-publica) es un punto de la curva secp256k1, y un punto tiene dos coordenadas. Durante casi toda la historia de Bitcoin las claves se guardaron comprimidas: la coordenada X de 32 bytes más un byte de prefijo, 0x02 o 0x03, que dice si Y es par o impar. Una clave x-only se deshace también de ese byte. Es la coordenada X de 32 bytes a secas, y quien la lee debe dar por sentado que la Y es la par.

Eso funciona porque la curva es simétrica. Para cualquier X que esté sobre la curva hay exactamente dos valores posibles de Y, y como el primo que define el campo es impar, uno de ellos es par y el otro es impar. Elegir "siempre par" fija uno de los dos sin ambigüedad. El [BIP 340](/es/glosario/bip-340) argumenta, y el argumento se sostiene, que esto reduce a la mitad el conjunto de claves utilizables sin debilitarlas en absoluto: quien pudiera romper una clave x-only podría romper una clave completa atacando su coordenada X y negando la respuesta (cambiándole el signo) si hiciera falta.

Llevar la cuenta de la paridad le toca a quien firma. Si una clave privada produce un punto con Y impar, el firmante niega la clave privada (le cambia el signo), lo que convierte el punto en su gemelo de Y par, y firma con esa. Quien verifica nunca nota la diferencia. Un efecto secundario es que cada clave pública x-only corresponde a dos claves privadas, un hecho que importa para el software de billeteras y para nada más.

Taproot usa claves x-only en todas partes. El valor de 32 bytes dentro de una dirección `bc1p` es una clave x-only, la clave interna que viaja en el [bloque de control (en inglés)](/glossary/control-block) es una clave x-only, y las claves dentro de [Tapscript (en inglés)](/glossary/bip-342-tapscript) son claves x-only, lo que explica que una clave de cualquier otra longitud se trate ahí como un tipo desconocido, reservado para esquemas futuros. El único lugar donde hay que registrar la paridad descartada es el bloque de control, cuyo primer byte lleva la paridad de la clave de salida para que quien verifica pueda reconstruir el punto exacto durante un gasto por la ruta de script.

La codificación x-only ahorra un byte por clave y un byte por firma. Frente a ECDSA, una clave y una firma Schnorr suman 96 bytes en lugar de unos 104 o 105, una reducción de alrededor del 8%. La razón para conocer el término no es el byte. Es que "32 bytes" y "x-only" significan lo mismo en todos los documentos sobre Taproot, y leer esos documentos se vuelve más fácil una vez que lo sabes.

Lee [Cómo funciona Taproot en realidad (en inglés)](/rabbit-hole/how-taproot-works) para ver dónde se ubican estas claves dentro de una salida Taproot.
