---
title: "Clave privada"
slug: clave-privada
aliases:
  - "claves privadas"
  - "private key"
draft: false
published: "2026-10-14"
shortDefinition: "Un secreto de 256 bits que da el poder de gastar los BTC de las direcciones derivadas de él; debe mantenerse confidencial."
keyTakeaways:
  - "El secreto central con el que se firman las transacciones"
  - "Perderla o exponerla significa perder el control de los BTC"
  - "Normalmente la genera y la administra la billetera, sin que lo veas"
sources:
  - { label: "Key Space rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/key-space" }
relatedTerms:
  - bip-39
  - hierarchical-deterministic-wallet
  - locked-memory
  - public-key
  - seed-phrase
sameAs:
  - "https://en.wikipedia.org/wiki/Public-key_cryptography"
  - "https://www.wikidata.org/wiki/Q201339"
  - "https://en.bitcoin.it/wiki/Private_key"
liveWidget: ~
translationOf: private-key
sourceHash: "b3547450a392"
sourceCommit: "a4df59d"
translation:
  method: "llm-draft"
---

Una clave privada en Bitcoin es un número de 256 bits. Eso es todo. 32 bytes aleatorios, tomados de un espacio de 2^256 valores posibles. Quien conoce ese número puede gastar los BTC que ese número controla. Quien no lo conoce, no puede.

Las implicaciones son absolutas e inmediatas:

- **Pierdes tu clave privada, pierdes tus BTC.** No hay restablecimiento de contraseña, ni recuperación de cuenta, ni línea de soporte. El protocolo no tiene ningún concepto de "dueño legítimo" más allá de "quien pueda producir una firma válida con la clave".
- **Revelas tu clave privada, pierdes tus BTC.** Una foto de la tarjeta de respaldo en redes sociales, un archivo de claves sincronizado con una nube comprometida, un correo de phishing que la captura: cualquiera de esas cosas basta.
- **La generas mal, pierdes tus BTC.** Un generador de números aleatorios predecible puede producir claves estadísticamente más fáciles de adivinar de lo que el espacio de 2^256 sugiere. Ha pasado, y hay gente que ha perdido millones por eso.
- **Se te filtra a la memoria de intercambio (swap), pierdes tus BTC.** Un software de billetera decente usa [memoria bloqueada (en inglés)](/glossary/locked-memory) para mantener las claves descifradas fuera de los archivos de swap y de las imágenes de hibernación. Las implementaciones descuidadas no lo hacen, y un volcado forense de un archivo de swap viejo ya ha entregado claves en el pasado.

Las billeteras modernas te ahorran lidiar con la clave privada cruda de 32 bytes: trabajan con una [frase semilla](/es/glosario/frase-semilla) (también llamada frase de recuperación; una frase mnemónica [BIP 39](/es/glosario/bip-39)) que genera miles de claves privadas de forma determinista mediante la estructura de una [billetera HD (jerárquica determinista)](/es/glosario/billetera-hd). Respaldas 12 o 24 palabras en vez de 32 bytes. La seguridad es funcionalmente la misma; la ergonomía humana, mejor.

La frase "no son tus claves, no son tus monedas" es la oración más importante de la autocustodia. Si tus BTC están en un exchange, el exchange tiene las claves. Su solvencia es tu modelo de seguridad. Todo el sentido de Bitcoin es no necesitar eso.

Consulta [Clave pública](/es/glosario/clave-publica) para ver qué se deriva de ella y por qué ese camino solo va en un sentido, y el [tema a fondo sobre el espacio de claves (en inglés)](/rabbit-hole/key-space) para entender por qué 2^256 es más grande de lo que tu intuición quiere admitir.
