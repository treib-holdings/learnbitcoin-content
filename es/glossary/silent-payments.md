---
title: "Silent Payments (pagos silenciosos)"
slug: silent-payments
aliases:
  - "pagos silenciosos"
  - "pago silencioso"
  - "silent payments"
  - "silent payment"
  - "BIP 352"
  - "BIP-352"
avoid:
  - "pagos silentes"
  - "pagos mudos"
draft: false
published: "2026-10-15"
shortDefinition: "Un esquema del BIP 352 que permite a quien recibe publicar un solo código de pago reutilizable mientras cada pago llega a una dirección on-chain nueva. Sin transacción de notificación, sin interacción, sin reutilización de direcciones; el costo es que quien recibe tiene que escanear la cadena."
keyTakeaways:
  - "Especificados en el BIP 352 por josibake, Ruben Somsen y Sebastian Falbesoner, a partir de una propuesta de 2022 en la lista bitcoin-dev; el BIP se integró al repositorio en mayo de 2024"
  - "Quien envía deriva una salida Taproot única a partir de la clave publicada por quien recibe y de las claves de sus propias entradas, así que el código público nunca aparece en la cadena y nada vincula un pago con el siguiente"
  - "Recibir exige escanear todas las transacciones elegibles, algo barato en un nodo completo y el principal obstáculo para las billeteras ligeras; el soporte se extendió a dispositivos firmantes, billeteras de escritorio y móviles, y libsecp256k1 entre 2024 y 2026"
sources:
  - { label: "BIP-352 - Silent Payments", url: "https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki" }
  - { label: "Bitcoin Optech - Silent payments topic", url: "https://bitcoinops.org/en/topics/silent-payments/" }
  - { label: "Bitcoin Optech Newsletter #194 - silent payments proposed (2022)", url: "https://bitcoinops.org/en/newsletters/2022/04/06/#delinked-reusable-addresses" }
  - { label: "silentpayments.xyz - Silent Payments explained", url: "https://silentpayments.xyz/docs/explained/" }
relatedTerms:
  - address-reuse
  - bip-47-payment-codes
  - stealth-address
  - taproot
  - fungibility
  - address-clustering
  - chain-analysis
  - payjoin
liveWidget: ~
translationOf: silent-payments
sourceHash: "50f2595e7002"
sourceCommit: "fa94f44"
sourceUpdated: "2026-10-02"
translation:
  method: "llm-draft"
---

Los Silent Payments resuelven un viejo problema de Bitcoin: cómo publicar una sola dirección de pago permanente sin que cada pago que llegue caiga en el mismo montón público. Una página de donaciones, el pie de una factura o el enlace de un perfil siempre han significado [reutilización de direcciones](/es/glosario/reutilizacion-de-direcciones), y la reutilización de direcciones les entrega a los [analistas de cadena](/es/glosario/analisis-de-cadena) un historial completo en un solo lugar. El [BIP 352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki) lo arregla en la capa de la billetera, sin cambiar las reglas de Bitcoin.

Quien recibe publica una dirección de pago silencioso, una cadena de texto que empieza con `sp1q` y codifica dos claves públicas, una para escanear y otra para gastar. Quien envía combina la clave de escaneo del receptor con las claves privadas que hay detrás de las entradas de su propia transacción para derivar un secreto compartido, y usa ese secreto para ajustar (tweak) la clave de gasto del receptor y convertirla en una salida [Taproot](/es/glosario/taproot) nueva que ningún observador externo puede vincular con el receptor y que solo el receptor puede gastar. En la cadena es una dirección Taproot corriente, de un solo uso. El código `sp1q` publicado no aparece nunca en ninguna parte, y dos pagos al mismo código no comparten nada que un observador pueda ver.

Frente a los intentos anteriores de la misma idea, hay dos novedades. Los [códigos de pago del BIP 47](/es/glosario/codigos-de-pago-bip-47) necesitaban una transacción de notificación on-chain, una sola vez, que anunciaba la relación, y los diseños más antiguos de [stealth address (en inglés)](/glossary/stealth-address) (direcciones sigilosas) necesitaban datos adicionales en la transacción. Los Silent Payments no necesitan ni lo uno ni lo otro, porque el secreto compartido se deriva de claves que quien envía ya está revelando para gastar sus entradas. Eso también implica que al menos una de las entradas del emisor tiene que ser de un tipo de una sola clave del que el receptor pueda leer una clave pública, y por eso el BIP enumera exactamente qué tipos de entrada son elegibles.

El costo recae en quien recibe. No hay ninguna dirección que buscar, así que la billetera receptora tiene que cotejar con su clave de escaneo cada transacción que tenga entradas elegibles y salidas Taproot. Un [nodo completo](/es/glosario/nodo-completo) lo hace sin problema. Una billetera ligera no puede hacerlo sin ayuda, así que los clientes ligeros dependen de servidores de indexación que precalculan los datos que cada transacción necesita; en 2026 todavía se discutía una especificación común para esos servidores. Otras propuestas complementarias cubren tareas distintas: el BIP 375 para enviar mediante PSBTs (2025) y el BIP 392 para descriptores (2026).

La idea se propuso en la lista de correo bitcoin-dev en marzo de 2022, josibake y Ruben Somsen la refinaron hasta convertirla en el BIP 352, y se integró al repositorio de BIPs en mayo de 2024; Sebastian Falbesoner se sumó como coautor en 2026. El soporte en billeteras llegó a lo largo de los dos años siguientes: primero en una billetera móvil en mayo de 2024 y en un dispositivo firmante más tarde ese mismo año, después en más billeteras de escritorio y móviles durante 2025 y 2026, y libsecp256k1 publicó un módulo de Silent Payments en agosto de 2026. En 2026 es la respuesta más práctica que tiene Bitcoin al problema de la dirección reutilizable, y la única que no necesita ni interacción entre las partes ni datos adicionales en la cadena.

Consulta [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin) para ver dónde encajan los Silent Payments entre las defensas.
