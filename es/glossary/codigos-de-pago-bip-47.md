---
title: "Códigos de pago (BIP 47)"
slug: codigos-de-pago-bip-47
draft: false
published: "2026-10-15"
shortDefinition: "Identificadores reutilizables que permiten pagos privados sin exponer direcciones estáticas, evitando la reutilización de direcciones."
keyTakeaways:
  - "Un solo código genera direcciones nuevas para cada pago"
  - "Evita las fugas de privacidad de la reutilización de direcciones"
  - "Requiere una transacción de notificación para sincronizar el código entre las partes"
aliases:
  - "código de pago"
  - "código de pago reutilizable"
  - "BIP 47"
  - "BIP-47"
  - "payment codes"
  - "PayNym"
sources:
  - { label: "BIP 47 - Reusable Payment Codes for Hierarchical Deterministic Wallets (Status: Deployed): codes are Base58Check with version byte 0x47, which 'produces a P as the first character'; before the first payment the sender MUST send a notification transaction, a small payment to the receiver's notification address (the P2PKH address of the code's first derived key) with an 80-byte OP_RETURN carrying the blinded payment code; the inputs 'MUST NOT be easily associated' with the sender; the receiver must send its own notification before paying back; after that up to 2^32 payments need no further notification; future versions will not go through the BIP process", url: "https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki" }
  - { label: "BIP 352 - Silent Payments: static payment addresses 'without on-chain linkability of payments or a need for on-chain notifications'; notification schemes leave 'a noticeable footprint in the blockchain, potentially revealing metadata about the sender and receiver' and let the receiver link all payments from the same sender; version 0 addresses start sp1q and outputs are BIP 341 taproot outputs; the cost is that wallets must scan the chain", url: "https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki" }
  - { label: "Bitcoin Optech - Silent payments topic: a receiver publishes a single silent payment address, eliminating the need for interaction; the sender derives the destination from its own input keys and the address; the main downside is the cost of scanning", url: "https://bitcoinops.org/en/topics/silent-payments/" }
  - { label: "Samourai Wallet - samourai-wallet-android features list (GitHub): 'BIP47 Reusable Payment Codes support' and 'PayNym.is lookup of BIP47 payment codes'; the repository README adds 'BIP47: Samourai implementation based on original BIP by Justus Ranvier', with modifications to incorporate SegWit addresses", url: "https://github.com/Samourai-Wallet/samourai-wallet-android/blob/master/Samourai-Wallet-features.md" }
  - { label: "US DOJ SDNY - founders and CEO of cryptocurrency mixing service arrested and charged (April 24, 2024): indictment unsealed, Samourai's web servers and domain seized, a seizure warrant for the app served on the Google Play Store", url: "https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering" }
  - { label: "US DOJ SDNY - Samourai Wallet founders sentenced to five and four years (November 19, 2025)", url: "https://www.justice.gov/usao-sdny/pr/founders-samourai-wallet-cryptocurrency-mixing-service-sentenced-five-and-four-years" }
relatedTerms:
  - address-reuse
  - bip-47-payment-codes
  - bip-bitcoin-improvement-proposal
  - silent-payments
  - stealth-address
liveWidget: ~
translationOf: payment-codes-bip-47
sourceHash: "d3c354c7e301"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

Los códigos de pago son identificadores reutilizables del receptor, definidos en [BIP 47 (en inglés)](/glossary/bip-47-payment-codes). Un usuario publica un único código de pago de largo plazo (una cadena de texto que empieza con `P`); quienes le envían lo combinan con sus propias claves mediante ECDH para derivar una [dirección](/es/glosario/direccion) on-chain única por pago. El receptor escanea en busca de esas direcciones derivadas; el remitente conoce la dirección por su propia derivación.

El objetivo de privacidad: evitar la [reutilización de direcciones](/es/glosario/reutilizacion-de-direcciones) sin obligar a los usuarios a compartir una dirección nueva cada vez que quieren cobrar.

El problema que limitó la adopción de BIP 47: antes del primer pago, cada nuevo remitente tiene que publicar on-chain una **transacción de notificación** por única vez (una por sentido: si el receptor luego quiere pagarle de vuelta al remitente, manda la suya). Esa notificación es una transacción de Bitcoin real: un pago pequeño a la dirección de notificación del receptor, que lleva el código de pago del remitente en una salida `OP_RETURN` de 80 bytes, cegado para que solo el receptor pueda leerlo. Una vez que existe esa notificación, los pagos posteriores entre las mismas dos partes van a direcciones únicas sin más intercambios previos on-chain. Pero la notificación *en sí* es una fuga de privacidad. La dirección de notificación se deriva del código público del receptor, así que cualquiera que conozca el código puede ver llegar ahí las monedas de los nuevos remitentes (por eso BIP 47 exige que las entradas "NO DEBEN poder asociarse fácilmente" con la propia dirección de notificación del remitente), y el receptor puede vincular entre sí todos los pagos posteriores del mismo remitente.

Dónde queda BIP 47 hoy:

- **Samourai Wallet** construyó sobre él su función PayNym y la distribuyó hasta abril de 2024, cuando la fiscalía de Estados Unidos hizo pública una acusación formal contra los fundadores, incautó los servidores y el dominio, e hizo retirar la app de Google Play en Estados Unidos. Los fundadores fueron condenados en noviembre de 2025.
- **La especificación está congelada.** BIP 47 figura como Deployed (desplegado), pero dice que las versiones futuras de los códigos de pago no pasarán por el proceso de los BIPs.
- **El sucesor moderno, [Silent Payments](/es/glosario/silent-payments) (BIP 352),** logra el mismo objetivo de "un código, muchas direcciones" sin ninguna transacción de notificación: solo se publica la dirección de pago silencioso (`sp1q...`) y se deriva una salida Taproot nueva a partir de las claves que el remitente ya revela al gastar sus entradas, así que no hace falta ningún intercambio previo. El costo se traslada al receptor, que tiene que escanear la cadena.

BIP 47 se entiende hoy mejor como una prueba de concepto histórica: útil para demostrar el espacio de diseño, técnicamente funcional y superada en buena medida por sucesores mejores. Quien busque direcciones de cobro privadas y reutilizables debería mirar los Silent Payments. Consulta [Silent Payments](/es/glosario/silent-payments) para el equivalente moderno.

Nota: esta entrada se solapa en parte con [BIP 47, códigos de pago (en inglés)](/glossary/bip-47-payment-codes). Las dos cubren el mismo concepto desde ángulos ligeramente distintos.
