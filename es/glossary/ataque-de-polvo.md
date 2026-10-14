---
title: "Ataque de polvo (dust attack)"
slug: ataque-de-polvo
aliases:
  - "ataques de polvo"
  - "dust attack"
  - "dust attacks"
  - "dusting"
  - "ataque de dusting"
  - "ataques de dusting"
draft: false
published: "2026-10-15"
shortDefinition: "Pagar cantidades minúsculas de bitcoin a direcciones que ya se usaron, con la esperanza de que la billetera del dueño gaste más adelante esa migaja junto con otras monedas y las vincule todas. La Bitcoin Wiki lo llama reutilización forzada de direcciones."
keyTakeaways:
  - "Solo funciona contra una dirección que ya se usó, y solo rinde si gastas la migaja junto con tus otras monedas"
  - "La regla de los dos casos: polvo en una dirección que ya vaciaste, no lo gastes nunca (bloquéalo); polvo en una dirección que todavía guarda tus monedas, gasta todo lo de esa dirección junto, en una sola transacción, sin nada de otro lado"
  - "La opción avoid_reuse de la billetera de Bitcoin Core (0.19, desactivada por defecto) omite las monedas pagadas a una dirección desde la que ya gastaste; el control de monedas y el congelamiento del UTXO hacen lo mismo a mano"
sources:
  - { label: "Bitcoin Optech - Output linking topic (address reuse and dust attacks)", url: "https://bitcoinops.org/en/topics/output-linking/" }
  - { label: "Bitcoin Wiki - Privacy: forced address reuse (sometimes incorrectly called a dust attack; the never-spend / spend-together rule)", url: "https://en.bitcoin.it/wiki/Privacy#Forced_address_reuse" }
  - { label: "Bitcoin Optech Newsletter #391 - Discussion of dust attack mitigations (February 2026)", url: "https://bitcoinops.org/en/newsletters/2026/02/06/#discussion-of-dust-attack-mitigations" }
  - { label: "Bitcoin Core PR #13756 - avoid_reuse wallet flag: a payer could otherwise begin tracking a payee's wallet by regularly peppering a known UTXO with dust outputs (merged June 2019)", url: "https://github.com/bitcoin/bitcoin/pull/13756" }
  - { label: "Bitcoin Core 0.19.0.1 release notes - the avoid_reuse wallet flag, off by default; listunspent gains a reused field (November 2019)", url: "https://bitcoincore.org/en/releases/0.19.0.1/" }
  - { label: "Bitcoin Core 0.17.0 release notes - the -avoidpartialspends flag; coins sent to an address after it was used will still be included in future coin selections (2018)", url: "https://bitcoincore.org/en/releases/0.17.0/" }
  - { label: "Bitcoin Core 0.21.0 release notes - partial spend avoidance on by default when it costs no extra fee (-maxapsfee, January 2021)", url: "https://bitcoincore.org/en/releases/0.21.0/" }
  - { label: "Bitcoin Core PR #23065 - persistent parameter for lockunspent, so a locked dust output stays locked across restarts (merged September 2021)", url: "https://github.com/bitcoin/bitcoin/pull/23065" }
relatedTerms:
  - address-reuse
  - avoid-reuse
  - coin-control
  - discard-threshold
  - dust
  - dust-limit
  - dust-sweeping
  - forced-address-reuse
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
translationOf: dust-attack
sourceHash: "b9d927b7b1bf"
sourceCommit: "b4fda3b"
sourceUpdated: "2026-10-12"
translation:
  method: "llm-draft"
---

Un ataque de polvo es una táctica para degradar la privacidad: un adversario envía cantidades minúsculas de BTC (polvo) a muchas direcciones que quiere rastrear. Cuando quien las recibe termina consolidando esas salidas de polvo con otras monedas en una transacción, el adversario puede vincular todas las entradas como pertenecientes a la misma billetera. La Bitcoin Wiki cataloga la táctica bajo el nombre de [reutilización forzada de direcciones](/es/glosario/reutilizacion-forzada-de-direcciones) y dice que a veces se le llama, de forma incorrecta, ataque de polvo ("is sometimes incorrectly called a dust attack"): la migaja es un pago forzado a una dirección que ya usaste, y el daño es la reutilización de direcciones que te impone, no el polvo en sí. El nombre popular se quedó de todos modos, así que esta entrada usa los dos.

Cómo funciona el ataque:

1. El atacante envía unos cientos de sats, apenas por encima del [límite de polvo](/es/glosario/limite-de-polvo), a miles de direcciones que ya aparecieron en la cadena y parecen interesantes (por análisis de cadena, bases de datos filtradas, etc.).
2. Algunas personas ignoran el polvo; otras no lo notan; otras lo barren a propósito más tarde pensando que es "dinero gratis".
3. Cada vez que quien lo recibe firma una transacción que incluye el polvo como una de las entradas, la billetera declara, en la práctica, "estas entradas pertenecen a la misma entidad". Los algoritmos de análisis de cadena agrupan las entradas en la billetera de un solo dueño.
4. El atacante ahora conoce las otras direcciones del grupo, puede seguir su actividad y, potencialmente, identificar al dueño en el mundo real.

La condición previa es fácil de pasar por alto: el ataque solo funciona contra una dirección que ya se usó. Y solo rinde si gastas la migaja junto con monedas a las que esa dirección todavía no estaba vinculada. Tus direcciones sin usar no pueden ser blanco de nada, una razón más para entregar una nueva en cada pago.

Defensas modernas:

- **Control de monedas.** Bitcoin Core y la mayoría de las billeteras serias de autocustodia te dejan elegir qué UTXOs gastar. Dejar fuera de una transacción el polvo sospechoso conserva la frontera de privacidad.
- **Etiquetas y congelamiento de UTXOs.** Algunas billeteras marcan de forma automática los pagos pequeños que caen en direcciones que ya usaste, y la mayoría de las billeteras de autocustodia te dejan congelar ese UTXO para que nunca se gaste.
- **La regla de los dos casos.** Qué hacer depende de dónde cayó la migaja, y la Wiki lo divide en dos. En una dirección que ya vaciaste: no la gastes nunca. Bloquéala (el [lockunspent](https://chainquery.com/rpc/lockunspent) de Bitcoin Core ganó una opción `persistent` en el PR #23065, integrado en 2021 y publicado en la versión 23.0 en 2022, así que el bloqueo sobrevive a un reinicio), congélala, olvídala; de todos modos vale poco más que la comisión. En una dirección que todavía guarda tus monedas: la próxima vez que gastes desde esa dirección, gasta todo lo que hay en ella junto, migaja incluida, en una sola transacción sin entradas de otro lado. La migaja entonces no añade ningún vínculo que la dirección no tuviera ya. El agrupamiento `-avoidpartialspends` de Core hace exactamente eso, y está activado por defecto siempre que no cueste comisión extra desde la 0.21.0 (2021).
- **O quémala.** Si quieres que desaparezca, una migaja se puede gastar sola, entera en comisiones, para que nunca comparta transacción con tus otras monedas.
- **La respuesta integrada de Core.** Bitcoin Core 0.19.0.1 (2019) añadió la opción de billetera [avoid_reuse](/es/glosario/avoid-reuse). La billetera marca cada dirección desde la que gastó y después omite cualquier moneda pagada a esas direcciones porque, en palabras del pull request, "de lo contrario, un pagador podría empezar a rastrear la billetera de quien cobra salpicando con regularidad un UTXO conocido con salidas de polvo". Viene desactivada por defecto: actívala al crear una billetera ([createwallet](https://chainquery.com/rpc/createwallet), `avoid_reuse`) o después con [setwalletflag](https://chainquery.com/rpc/setwalletflag), y [listunspent](https://chainquery.com/rpc/listunspent) marcará entonces esas monedas como `reused`.

El ataque es viejo y vuelve una y otra vez. La defensa no es difícil una vez que sabes que hay que mirar; el ataque tiene éxito con quienes no lo saben.

Para usuarios comunes: no barras cualquier UTXO pequeño hacia tu billetera principal. Si no te lo enviaste tú ni reconoces el origen, trátalo como un intento de rastreo y, si cayó en una dirección que todavía guarda tus monedas, aplica la regla de los dos casos de arriba.
