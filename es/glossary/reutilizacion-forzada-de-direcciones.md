---
title: "Reutilización forzada de direcciones"
slug: reutilizacion-forzada-de-direcciones
draft: false
published: "2026-10-15"
shortDefinition: "Un ataque en el que alguien paga una cantidad pequeña a una dirección que ya usaste, apostando a que tu billetera gastará más adelante esa migaja junto con tus otras monedas y las vinculará todas. Es el nombre que la Bitcoin Wiki le da a lo que la prensa llama ataque de polvo, y solo funciona contra una dirección que ya se ha usado."
keyTakeaways:
  - "La migaja en sí es inofensiva; el daño llega cuando se gasta en la misma transacción que tus otras monedas, porque el supuesto de propiedad común de las entradas las ata entre sí"
  - "La regla se divide en dos: una migaja en una dirección que ya vaciaste no se gasta nunca (bloquéala); una migaja en una dirección que todavía tiene monedas se gasta junto con todo lo que hay ahí, en una sola transacción, sin ninguna otra entrada"
  - "Bitcoin Core respondió en tres pasos: -avoidpartialspends (0.17.0), la opción avoid_reuse de la billetera (0.19.0.1, desactivada por defecto) y agrupar por defecto las monedas de una misma dirección cuando no cuesta comisión extra (0.21.0)"
aliases:
  - "reutilización forzada"
  - "reutilización forzada de dirección"
  - "forced address reuse"
avoid:
  - "reuso forzado de direcciones"
sources:
  - { label: "Bitcoin Wiki - Privacy: Forced address reuse", url: "https://en.bitcoin.it/wiki/Privacy#Forced_address_reuse" }
  - { label: "Bitcoin Optech - Output linking topic", url: "https://bitcoinops.org/en/topics/output-linking/" }
  - { label: "Bitcoin Core 0.17.0 release notes (-avoidpartialspends)", url: "https://bitcoincore.org/en/releases/0.17.0/" }
  - { label: "Bitcoin Core PR #13756 - avoid_reuse wallet flag (kallewoof, merged 2019-06-18)", url: "https://github.com/bitcoin/bitcoin/pull/13756" }
  - { label: "Bitcoin Core 0.21.0 release notes (partial spend avoidance by default when fee-neutral)", url: "https://bitcoincore.org/en/releases/0.21.0/" }
  - { label: "Bitcoin Core PR #23065 - persistent option for lockunspent (merged 2021-09-26, shipped in 23.0)", url: "https://github.com/bitcoin/bitcoin/pull/23065" }
  - { label: "Matt Corallo, bitcoin-dev - PQC: What is our Goal, Even? (19 April 2026): dusting attacks could trigger many wallets to reveal a public key too soon", url: "https://mirror.b10c.me/lists/bitcoindev/39f3c26e-2cb5-4dcb-a269-78c793174b2a@mattcorallo.com/" }
  - { label: "Matt Corallo, bitcoin-dev - PQC: What is our Goal, Even? (19 April 2026), the thread on Google Groups", url: "https://groups.google.com/g/bitcoindev/c/Qy4gwAGTK2w" }
relatedTerms:
  - dust-attack
  - dust
  - dust-limit
  - address-reuse
  - address-clustering
  - coin-control
  - coin-selection
  - coin-freeze
  - avoid-reuse
  - chain-analysis
  - public-key-exposure
  - utxo-unspent-transaction-output
liveWidget: ~
translationOf: forced-address-reuse
sourceHash: "e6e6c733be33"
sourceCommit: "3508921"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

La reutilización forzada de direcciones es el nombre que la Bitcoin Wiki le da a un truco de rastreo que solo funciona con una dirección que ya usaste. Un adversario manda un pago pequeño, unos cientos de satoshis de [polvo](/es/glosario/polvo), a direcciones que ya aparecieron en la cadena. Por ahora no pasa nada. La apuesta es a tu próximo gasto: si tu billetera toma la migaja como entrada junto con tus monedas de verdad, la transacción declara que todas las entradas tienen un mismo dueño, y la [agrupación de direcciones](/es/glosario/agrupacion-de-direcciones) del adversario crece en consecuencia. La Wiki dice que a esto "is sometimes incorrectly called a dust attack" (a veces se le llama, incorrectamente, ataque de polvo); la entrada [ataque de polvo](/es/glosario/ataque-de-polvo) cubre el nombre que usa la prensa.

Una billetera que entrega una dirección nueva para cada pago no tiene ninguna dirección usada y todavía activa donde pueda caer una migaja. El ataque fabrica una [reutilización de direcciones](/es/glosario/reutilizacion-de-direcciones) que tú no elegiste, así que la defensa está en lo que hagas después. Se divide en dos, tal como la divide la Wiki:

- Si la migaja cayó en una dirección que ya habías vaciado, no la gastes nunca. Congélala con el [control de monedas](/es/glosario/control-de-monedas). El [lockunspent](https://chainquery.com/rpc/lockunspent) de Bitcoin Core ganó una opción `persistent` en el PR #23065 (integrado en 2021, incluido en la versión 23.0 en 2022) para que el bloqueo sobreviva a un reinicio.
- Si cayó en una dirección que todavía guarda tus monedas, gasta todo lo que hay en esa dirección junto, migaja incluida, en una sola transacción sin entradas de ningún otro lado. Esas monedas ya estaban vinculadas por compartir dirección, así que gastarlas juntas no añade nada nuevo; dejar la migaja atrás mantiene la trampa armada.

La respuesta de Bitcoin Core llegó en tres versiones. La 0.17.0 (2018) añadió `-avoidpartialspends`, que gasta juntas todas las monedas de una misma dirección aunque cueste más comisión; su nota de versión admitía el hueco: "If someone were to send coins to an address after it was used, those coins will still be included in future coin selections" (si alguien mandara monedas a una dirección después de que ya se usó, esas monedas seguirían incluyéndose en futuras selecciones de monedas). La 0.19.0.1 (2019) cerró ese hueco con la opción `avoid_reuse` de la billetera, que marca cada dirección desde la que la billetera ya gastó y omite las monedas que lleguen ahí después; el PR #13756 dio el motivo: sin ella, "a payer could otherwise begin tracking a payee's wallet by regularly peppering a known UTXO with dust outputs" (quien paga podría empezar a rastrear la billetera de quien cobra salpicando con regularidad un UTXO conocido con salidas de polvo). La opción está desactivada por defecto; consulta [Avoid Reuse (Bitcoin Core)](/es/glosario/avoid-reuse). Desde la 0.21.0 (2021), la billetera agrupa por defecto las monedas de una misma dirección siempre que eso no cueste comisión extra (PR #14582).

Hay un motivo más reciente para prestar atención. En bitcoin-dev, el 19 de abril de 2026, al discutir los tipos de salida poscuánticos, Matt Corallo señaló que "dusting attacks could trigger many wallets to reveal a public key too soon" (los ataques de polvo podrían provocar que muchas billeteras revelen una clave pública demasiado pronto): una migaja que provoca un gasto desde una dirección protegida por un hash deja su clave en la cadena para siempre. Consulta [Exposición de la clave pública](/es/glosario/exposicion-de-la-clave-publica) para saber por qué importa, y [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin) para ver la agrupación que alimenta.
