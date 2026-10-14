---
title: "Gap limit (límite de direcciones sin usar)"
slug: gap-limit
draft: false
published: "2026-10-15"
shortDefinition: "La cantidad de direcciones sin usar seguidas que una billetera revisa antes de concluir que no hay nada más que encontrar. El BIP 44 lo fija en 20; Bitcoin Core, en cambio, mantiene 1,000 claves por adelantado. Es el único límite real que tiene entregar una dirección nueva cada vez, y solo se nota cuando se crean direcciones que nunca reciben un pago."
keyTakeaways:
  - "BIP 44: si el software encuentra 20 direcciones sin usar seguidas, da por hecho que no hay direcciones usadas más allá de ese punto y deja de buscar en la cadena de direcciones; a las billeteras se les pide avisar a quien intente generar más allá de ahí"
  - "Bitcoin Core no usa un gap limit de 20: su reserva de claves (keypool) mantiene 1,000 claves por adelantado desde la 0.15.0 (2017), subidas desde 100 'para que la recuperación sea más robusta'"
  - "El límite se nota cuando se generan muchas direcciones que nunca reciben un pago, como un servidor que crea una dirección en cada visita a una página; es un argumento a favor de una dirección por factura, no de reutilizar una"
aliases:
  - "gap limit"
  - "gap limits"
  - "límite de brecha"
  - "límite de gap"
  - "límite de direcciones sin usar"
sources:
  - { label: "BIP-44 - Multi-Account Hierarchy for Deterministic Wallets (Address gap limit)", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "Electrum documentation - FAQ (What is the gap limit?)", url: "https://electrum.readthedocs.io/en/latest/faq.html" }
  - { label: "Bitcoin Core 0.15.0 release notes (default keypool raised to 1,000)", url: "https://bitcoincore.org/en/releases/0.15.0/" }
  - { label: "Bitcoin Core PR #10831 - Batch flushing operations to the walletdb during top up and increase keypool size (merged 2017-07-17)", url: "https://github.com/bitcoin/bitcoin/pull/10831" }
  - { label: "BIP-32 - Hierarchical Deterministic Wallets (Motivation: the 100-key reserve pool)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
relatedTerms:
  - bip-44
  - bip-32
  - key-pool
  - hd-wallet-hierarchical-deterministic-wallet
  - address-derivation-path
  - address-reuse
  - seed-phrase
  - xpub-extended-public-key
  - watch-only-wallet
  - change-output
liveWidget: ~
translationOf: gap-limit
sourceHash: "2836aa24e2f4"
sourceCommit: "b4fda3b"
sourceUpdated: "2026-10-12"
translation:
  method: "llm-draft"
---

Un gap limit es la regla de parada de una billetera. Una [billetera HD](/es/glosario/billetera-hd) puede derivar una secuencia interminable de direcciones a partir de una sola semilla, así que, cuando se restaura desde esa semilla, tiene que decidir hasta dónde buscar monedas en la secuencia. Recorre la cadena de direcciones de recepción, comprueba cada una contra la cadena de bloques y se detiene tras una racha de direcciones sin usar lo bastante larga como para concluir que más allá no hay nada.

El [BIP 44](/es/glosario/bip-44) fija la racha en 20: "Address gap limit is currently set to 20. If the software hits 20 unused addresses in a row, it expects there are no used addresses beyond this point and stops searching the address chain" (el gap limit de direcciones está fijado actualmente en 20; si el software encuentra 20 direcciones sin usar seguidas, da por hecho que no hay direcciones usadas más allá de ese punto y deja de buscar en la cadena de direcciones). Solo se escanea la cadena de recepción; como dice el BIP, "internal chains receive only coins that come from the associated external chains" (las cadenas internas solo reciben monedas que vienen de las cadenas externas asociadas), así que, una vez encontradas las direcciones externas, el cambio aparece por sí solo. El BIP también les dice a quienes escriben billeteras qué hacer cuando un usuario sigue generando direcciones: "Wallet software should warn when the user is trying to exceed the gap limit on an external chain by generating a new address" (el software de billetera debería avisar cuando el usuario intente superar el gap limit de una cadena externa generando una dirección nueva).

La FAQ de Electrum enuncia la consecuencia sin rodeos: "Addresses beyond the gap limit will not automatically be recovered from the seed" (las direcciones más allá del gap limit no se recuperarán automáticamente a partir de la semilla). Las monedas no se pierden; las claves siguen derivándose de la semilla. La billetera restaurada deja de buscar antes de llegar a ellas, hasta que el usuario sube el límite.

Bitcoin Core funciona distinto. Mantiene una [reserva de claves](/es/glosario/reserva-de-claves) (keypool) de direcciones derivadas por adelantado, y una restauración encuentra cualquier cosa pagada a cualquiera de ellas, así que, en la práctica, su gap es el tamaño de la reserva. El cliente original guardaba 100 claves en reserva, como dice el [BIP 32](/es/glosario/bip-32), "In order to avoid the necessity for a backup after every transaction" (para evitar la necesidad de un respaldo después de cada transacción). La versión 0.15.0 (2017) subió la cifra (PR #10831): "Part of this speedup was used to increase the default keypool to 1000 keys to make recovery more robust" (parte de esa aceleración se aprovechó para aumentar el keypool por defecto a 1000 claves y hacer más robusta la recuperación). Las billeteras de descriptores de Core siguen manteniendo 1,000 claves por adelantado por cada descriptor.

Por qué importa para la práctica de usar direcciones nuevas: el gap limit es el único costo real de usar cada dirección una sola vez, y solo se nota cuando se crean direcciones que nunca reciben un pago. Entrega una dirección por cada persona que te debe dinero y nunca te acercarás a 20 direcciones sin pagar seguidas. El caso que sí lo alcanza es un servidor que genera una dirección en cada visita a una página, porque la mayoría de las visitas nunca se convierten en un pago; una billetera restaurada más tarde desde la misma semilla muestra menos saldo del que hay hasta que se le sube el límite. Es un argumento a favor de una dirección por factura, no de reutilizar una. La [reutilización de direcciones](/es/glosario/reutilizacion-de-direcciones) cuesta privacidad y, después del primer gasto, seguridad de las claves. Quedarse sin gap cuesta un cambio en la configuración.
