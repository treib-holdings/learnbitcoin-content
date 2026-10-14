---
title: "Reutilización de direcciones"
slug: reutilizacion-de-direcciones
translationOf: address-reuse
sourceHash: "760d8bd1b3b2"
sourceCommit: "3508921"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
aliases:
  - "reutilizar direcciones"
  - "reutilización de dirección"
  - "dirección reutilizada"
draft: false
published: "2026-10-14"
updated: "2026-10-15"
shortDefinition: "Pagar más de una vez a la misma dirección de Bitcoin. Entrega todo tu historial, en un solo lugar, a cualquiera que mire; pone todas las monedas de esa dirección detrás de una sola clave; y, una vez que esa clave ha firmado, deja los depósitos posteriores a la vista. Las billeteras modernas lo evitan por defecto."
keyTakeaways:
  - "Cada pago a una dirección reutilizada queda vinculado en público, para siempre: contrapartes, montos y fechas, todo en un solo lugar para cualquiera que relacione la dirección contigo"
  - "El primer gasto desde una dirección con hash publica su clave pública, así que cada depósito posterior a esa dirección queda detrás de una clave que todo el mundo puede leer, mientras las monedas sigan ahí"
  - "Recibir dos veces en una dirección que nunca ha gastado filtra privacidad; gastar una vez y volver a recibir filtra también la clave. Las billeteras modernas entregan una dirección nueva para cada pago, así que la solución es dejar de pelear con ellas"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 10, Privacy: a new key pair should be used for each transaction to keep them from being linked to a common owner (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Satoshi Nakamoto - bitcointalk, 25 November 2009: for greater privacy, it's best to use bitcoin addresses only once", url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/11/" }
  - { label: "BIP-360 - Pay-to-Merkle-Root (P2MR): poor wallet hygiene such as address reuse increases vulnerability to long exposure attacks; protection from them does not depend on post-quantum signatures activating", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
  - { label: "Bitcoin Wiki - Address reuse", url: "https://en.bitcoin.it/wiki/Address_reuse" }
  - { label: "ChainQuery - Quantum exposure report (snapshot 2026-10-11, block 970,878: 5,172,596 BTC still sitting at hashed addresses that had already been spent from)", url: "https://chainquery.com/reports/quantum-exposure" }
relatedTerms:
  - address
  - address-clustering
  - address-indexing
  - bip-360
  - chain-analysis
  - dust
  - dust-attack
  - forced-address-reuse
  - fungibility
  - gap-limit
  - hd-wallet-hierarchical-deterministic-wallet
  - nonce-reuse
  - post-quantum-bitcoin
  - public-key-exposure
  - security
  - silent-payments
  - xpub-extended-public-key
liveWidget: ~
---

La reutilización de direcciones es la práctica de recibir varios pagos en la misma [dirección](/es/glosario/direccion) de Bitcoin. Es uno de los errores de privacidad más comunes y uno de los más fáciles de evitar. El whitepaper ya lo decía en 2008: "a new key pair should be used for each transaction to keep them from being linked to a common owner" (debería usarse un par de claves nuevo para cada transacción, para que no se vinculen a un dueño común).

Por qué importa: toda transacción de Bitcoin es visible públicamente en la cadena, para siempre. Una dirección que recibe un pago aparece una vez. Una dirección que recibe cien pagos aparece cien veces, con cada contraparte, cada monto y cada marca de tiempo vinculados entre sí a la vista de todos. Cualquiera que sepa que esa dirección es tuya (porque la publicaste en Twitter, la usaste en una página de donaciones o se la diste a un exchange con KYC) puede ver ahora todo tu historial a través de esa dirección.

La solución es trivial: usa una dirección nueva para cada pago entrante. Las [billeteras HD (jerárquicas deterministas)](/es/glosario/billetera-hd) modernas generan direcciones nuevas automáticamente. Las mismas 12 o 24 palabras de la [frase semilla](/es/glosario/frase-semilla) (también llamada frase de recuperación) respaldan miles de direcciones, y una billetera restaurada a partir de ellas sigue escaneando más allá de la última dirección usada (el [gap limit (en inglés)](/glossary/gap-limit)) hasta encontrarlas todas; no tienes que llevar la cuenta una por una.

Dónde sigue habiendo reutilización en la práctica:

- **Direcciones de donación en sitios personales y bios de Twitter.** Cómodo, pero todos los donantes ven la misma dirección y pueden correlacionarla. Mejores alternativas: una oferta (Offers, BOLT 12) o una Lightning Address (dirección Lightning) en [Lightning](/es/glosario/lightning-network), donde un servidor emite una factura (invoice) nueva cada vez, así que es tan privado como ese servidor; los [Silent Payments (en inglés)](/glossary/silent-payments) (pagos silenciosos: un solo código reutilizable, direcciones on-chain nuevas); o rotar la dirección fija cada cierto tiempo.
- **Direcciones de retiro en exchanges.** Algunos usuarios retiran una y otra vez a la misma dirección. El exchange lo ve; los analistas de cadena lo ven; el historial de la dirección queda completamente expuesto.
- **Configuraciones multisig** en las que regenerar direcciones resulta operativamente engorroso.
- **Reutilización que no elegiste.** Un desconocido puede pagar unos cientos de sats a una dirección que ya usaste ([reutilización forzada de direcciones (en inglés)](/glossary/forced-address-reuse), lo que suele llamarse un [ataque de polvo (en inglés)](/glossary/dust-attack) o dust attack), apostando a que tu billetera gastará más adelante esa migaja junto con tus monedas de verdad y las vinculará. No puedes impedir que otra gente pague a una dirección que publicaste; sí puedes negarte a gastar lo que te manden.

Si no puedes evitar reutilizar una dirección concreta, que al menos sea una claramente pública (tu dirección de donaciones, la dirección de cobro de tu negocio) que ya se sabe que está vinculada a tu identidad. No reutilices la misma dirección para tus ahorros personales.

El protocolo permite la reutilización. El modelo de privacidad, no. Trata las direcciones como de un solo uso.

La reutilización de direcciones también tiene una dimensión de seguridad de las claves y otra [poscuántica (en inglés)](/glossary/post-quantum-bitcoin). Una dirección P2PKH o P2WPKH es un hash; la clave pública que hay detrás permanece oculta hasta el primer gasto, cuando la transacción que gasta la publica para siempre. Cada depósito posterior a esa misma dirección queda entonces detrás de una clave que todo el mundo puede leer ([exposición de la clave pública (en inglés)](/glossary/public-key-exposure)), mientras las monedas sigan ahí. Una sola clave custodia ahora todos los pagos que se hayan hecho jamás a esa dirección, así que basta con que esa clave caiga una sola vez para perderlos todos: malware, un respaldo robado, un error de [reutilización de nonce (en inglés)](/glossary/nonce-reuse) (que necesita dos firmas de la misma clave, y la reutilización es justo lo que le da a una clave una segunda firma) o una computadora cuántica futura.

El orden de los hechos importa. Recibir dos veces en una dirección que nunca ha gastado filtra privacidad, pero no la clave; gastar una vez y volver a recibir filtra las dos cosas. Según el conteo de ChainQuery, 5,172,596 BTC, más o menos una moneda de cada cuatro, estaban en direcciones con hash desde las que ya se había gastado, así que su clave ya era pública (instantánea del 11 de octubre de 2026, bloque 970,878).

El BIP 360 plantea lo mismo desde el otro lado: la protección contra los ataques de exposición prolongada no espera a las firmas poscuánticas; exige que los usuarios no expongan sus claves mediante la reutilización. Reutilizar cuesta privacidad, seguridad de las claves y seguridad cuántica a la vez, y un solo hábito arregla las tres cosas.

El argumento completo, con las cifras y la limpieza sin prisas, está en el capítulo a fondo [Úsala una sola vez (en inglés)](/rabbit-hole/address-reuse). Consulta [Privacidad en Bitcoin (en inglés)](/rabbit-hole/bitcoin-privacy) para saber cómo la reutilización de direcciones alimenta las heurísticas de agrupamiento (clustering), y sobre los Silent Payments como solución para las direcciones permanentes; ver el tema a fondo [Computación cuántica y Bitcoin (en inglés)](/rabbit-hole/quantum-and-bitcoin) para saber qué significa y qué no significa una clave expuesta, y por qué nadie debería mover sus monedas por pánico.
