---
title: "Exposición de la clave pública"
slug: exposicion-de-la-clave-publica
aliases:
  - "exposición de clave pública"
  - "exposición de claves públicas"
  - "clave pública expuesta"
  - "claves públicas expuestas"
  - "public key exposure"
avoid:
  - "exposición de llave pública"
  - "llave pública expuesta"
draft: false
published: "2026-10-15"
shortDefinition: "El estado de una moneda cuya clave pública está a la vista, en la cadena o en manos de otra persona, de modo que cualquiera con una forma de romper la clave, como una computadora cuántica futura, podría gastarla. Expuesta no es lo mismo que robada. Algunos tipos de script muestran la clave desde su creación; los tipos con hash la muestran en el primer gasto, y por eso la reutilización de direcciones es la principal vía por la que las monedas modernas acaban expuestas."
keyTakeaways:
  - "Dos clases: las siempre expuestas (P2PK, la multisig sin hash o bare multisig, Taproot) muestran la clave desde su creación; las expuestas por reutilización (P2PKH, P2SH, P2WPKH, P2WSH) la esconden detrás de un hash hasta el primer gasto, y desde entonces cada depósito posterior a esa dirección queda detrás de una clave pública"
  - "El BIP 360 divide la amenaza en ataques de exposición prolongada, contra claves que llevan años públicas, y ataques de exposición breve, contra claves que pasan minutos en el mempool; la higiene de la billetera evita los primeros y no puede evitar los segundos"
  - "El conteo de ChainQuery en el bloque 970,878 (instantánea del 11 de octubre de 2026): alrededor del 35% de la oferta expuesta, 7,105,243 BTC, de los cuales 5,172,596 BTC están expuestos por reutilización, más o menos una moneda de cada cuatro; el grupo más grande es P2WPKH, con 2,081,021 BTC"
sources:
  - { label: "BIP-360 - Pay-to-Merkle-Root (P2MR): long exposure and short exposure attacks", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
  - { label: "BIP-141 - Segregated Witness (P2WPKH and P2SH-P2WPKH: the key is in the witness)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP-341 - Taproot (the witness program is the tweaked public key)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "ChainQuery - Quantum exposure report (figures from snapshot 2026-10-11, block 970,878)", url: "https://chainquery.com/reports/quantum-exposure" }
  - { label: "Project Eleven - Bitcoin Risq List", url: "https://bitcoin-risq-list.projecteleven.com/" }
  - { label: "Glassnode Research - Measuring Bitcoin's Quantum-Exposed Supply (20 May 2026)", url: "https://research.glassnode.com/measuring-bitcoins-quantum-exposed-supply/" }
relatedTerms:
  - address-reuse
  - post-quantum-bitcoin
  - bip-360
  - bip-361
  - p2pk-pay-public-key
  - p2pkh-pay-public-key-hash
  - p2wpkh-pay-witness-public-key-hash
  - p2sh-p2wsh-nested-segwit
  - p2wsh-pay-witness-script-hash
  - taproot
  - public-key
  - x-only-public-key
  - xpub-extended-public-key
  - nonce-reuse
  - crqc-cryptographically-relevant-quantum-computer
  - shors-algorithm
liveWidget: ~
translationOf: public-key-exposure
sourceHash: "f87cb1709e85"
sourceCommit: "3508921"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

"Expuesta" quiere decir que la [clave pública](/es/glosario/clave-publica) que controla una moneda ya no está solo en tus manos: está en la cadena, donde cualquiera puede leerla, o se la diste a alguien más, como cuando una [xpub](/es/glosario/xpub) compartida entrega todas las claves que cuelgan de ella. Los conteos de esta página cubren solo el caso on-chain. Expuesta no quiere decir robada. No se conoce ninguna forma de obtener la clave privada a partir de la clave pública por sí sola, y no existe ninguna computadora cuántica criptográficamente relevante. Los errores de firma, como la [reutilización de nonce](/es/glosario/reutilizacion-de-nonce), son otro problema: filtran la clave a través de firmas defectuosas, no a través de la clave pública. Lo que importa aquí es si todavía hay un hash delante de la clave.

Dos clases:

- Siempre expuestas, desde su creación: [P2PK](/es/glosario/p2pk), donde la clave va en la propia salida; la multisig sin hash (bare multisig), donde van todas las claves; y [Taproot](/es/glosario/taproot) (bc1p), donde la dirección es la clave ajustada (tweaked).
- Expuestas por reutilización: P2PKH (1...), P2WPKH (bc1q, 42 caracteres), P2SH (3...) y P2WSH (bc1q, 62 caracteres) ponen en la salida un hash de la clave o del script. La clave sigue oculta hasta el primer gasto, cuando aparece en el scriptSig o en el testigo (witness). Una multisig P2SH revela sus claves en el script de canje (redeem script); la dirección "3..." de SegWit anidado, tan común, revela su clave en el testigo, no en el script de canje. Desde entonces la clave queda en la cadena para siempre, y cada depósito posterior a esa dirección queda detrás de ella mientras siga sin gastarse.

La exposición sigue a la clave, no a la cadena de texto de la dirección. Una misma clave privada produce una dirección P2PKH, una P2WPKH y una de SegWit anidado; revélala a través de cualquiera de las tres y las tres quedan expuestas. Cambiar de tipo de dirección no es pasar a una clave nueva.

El [BIP 360](/es/glosario/bip-360) les pone nombre a los dos casos. Un ataque de exposición prolongada "Attempts to derive private keys from public keys that are exposed for an extended period of time; that is, longer than the window of time that a public key is generally exposed in the mempool while waiting to be confirmed" (intenta derivar claves privadas a partir de claves públicas que llevan expuestas un periodo largo; es decir, más que la ventana durante la que una clave pública suele estar expuesta en el mempool mientras espera confirmación). Los ataques de exposición breve "cannot be prevented through wallet hygiene, as revealing a public key is necessary for spending" (no pueden evitarse con higiene de billetera, porque revelar la clave pública es necesario para gastar). Y la línea que deja el trabajo en manos de los usuarios: "Protection from long exposure quantum attacks does not depend on the activation of post-quantum signatures in Bitcoin, but requires that users do not expose their public keys to attackers via public key reuse or other unsafe practices" (la protección contra los ataques cuánticos de exposición prolongada no depende de que se activen firmas poscuánticas en Bitcoin, sino de que los usuarios no expongan sus claves públicas a los atacantes mediante la reutilización de claves públicas u otras prácticas inseguras).

Cuánto hay expuesto depende de la regla de conteo. El informe de exposición cuántica de ChainQuery en el bloque 970,878 (instantánea del 11 de octubre de 2026) situó el total en alrededor del 35% de la oferta, 7,105,243 BTC. De eso, 5,172,596 BTC estaban expuestos por reutilización, más o menos una moneda de cada cuatro, y el grupo más grande era P2WPKH, con 2,081,021 BTC: billeteras de la era SegWit, no las de Satoshi. La Risq List de Project Eleven y Glassnode cuentan según reglas distintas, así que las tres cifras se acotan entre sí en vez de coincidir moneda por moneda.

La salida es el consejo más viejo de Bitcoin: usa cada dirección una sola vez y, si ya gastaste desde una dirección reutilizada, mueve todo lo que haya ahí a una dirección nueva con hash en una sola transacción. El tema a fondo [Úsala una sola vez](/es/a-fondo/reutilizacion-de-direcciones) explica por qué un solo gasto expone todos los depósitos posteriores. Consulta [Reutilización de direcciones](/es/glosario/reutilizacion-de-direcciones), [Bitcoin poscuántico](/es/glosario/bitcoin-poscuantico) y el tema a fondo [Computación cuántica y Bitcoin](/es/a-fondo/computacion-cuantica-y-bitcoin).
