---
title: "Factura Lightning (invoice)"
slug: factura-lightning
aliases:
  - "factura Lightning"
  - "facturas Lightning"
  - "factura de Lightning"
  - "facturas de Lightning"
  - "invoice"
  - "invoice Lightning"
  - "Lightning invoice"
draft: false
published: "2026-10-13"
shortDefinition: "Una solicitud de pago en la red Lightning, codificada por lo general como una cadena BOLT 11 para enviarla y recibirla con facilidad."
keyTakeaways:
  - "Codifica los datos de un pago por Lightning (monto, destino, vencimiento)"
  - "Se escanea o se pega en una billetera Lightning para pagar off-chain"
  - "Puede incluir campos opcionales, como pistas de enrutamiento"
sources:
  - { label: "BOLT #11 - Invoice Protocol for Lightning Payments", url: "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md" }
  - { label: "BOLT #12 - Negotiation Protocol for Lightning Payments (offers)", url: "https://github.com/lightning/bolts/blob/master/12-offer-encoding.md" }
  - { label: "BOLTs PR #798 - Offers (merged September 2024)", url: "https://github.com/lightning/bolts/pull/798" }
  - { label: "Bitcoin Optech - Offers (topic page and implementation history)", url: "https://bitcoinops.org/en/topics/offers/" }
  - { label: "LND 0.22.0 release notes (in development) - first BOLT 12 code", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/release-notes/release-notes-0.22.0.md" }
relatedTerms:
  - bolt-11
  - graph-pruning
  - htlc-invoice
  - htlc-preimage-manager
  - lightning-network
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
sameAs:
  - "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md"
liveWidget: ~
translationOf: lightning-invoice
sourceHash: "2f69ea9afd8e"
sourceCommit: "375acfd"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Una factura Lightning (invoice) es una solicitud de pago en la [Lightning Network](/es/glosario/lightning-network). Es una cadena de texto que el receptor genera y comparte con quien paga, y que codifica todo lo que este necesita para encontrar y completar el pago.

El formato estándar es **[BOLT 11](/es/glosario/bolt-11)**, una cadena codificada que suele empezar con `lnbc` (mainnet, la red principal) o `lntb` (testnet, la red de pruebas). Contiene:

- **Monto** (opcional: algunas facturas dejan que quien paga lo elija).
- **Hash del pago**: el hash de un secreto (la *preimagen*) que conoce el receptor. El pago solo se completa cuando se revela la preimagen.
- **Secreto del pago**: un valor aleatorio que impide que los nodos de la ruta sondeen al receptor.
- **Clave pública del nodo receptor**: qué nodo Lightning debe recibir el pago (escrita explícitamente o recuperada a partir de la firma).
- **Pistas de enrutamiento** (routing hints): información opcional sobre qué canales pueden entregar el pago, útil para nodos con poca conectividad pública.
- **Vencimiento**: cuánto tiempo es válida la factura (1 hora si la factura no lo indica).
- **Descripción o nota**: un texto corto sobre a qué corresponde el pago, o el hash de una descripción más larga. Toda factura debe llevar una cosa o la otra.
- **Firma** del nodo del receptor.

El flujo del pago:

1. El receptor genera una factura y se la pasa a quien paga (código QR, copiar y pegar, NFC, etc.).
2. La billetera de quien paga decodifica la factura, encuentra una ruta por la red y reenvía un HTLC.
3. Cada salto mantiene el pago bloqueado hasta que se revela la preimagen.
4. El receptor final revela la preimagen para reclamar el pago, y eso se propaga en cascada de vuelta por la ruta.
5. Quien paga termina con la preimagen en su poder, que sirve como comprobante de pago.

Las facturas están pensadas para pagarse una sola vez. Cuando un pago se liquida, la preimagen deja de ser secreta, porque quien pagó y cada nodo de la ruta ya la vieron. Si un segundo pago al mismo hash pasara por uno de esos nodos, ese nodo podría quedárselo en lugar de reenviarlo. La especificación BOLT 12 incluye el peligro de pagar dos veces una misma factura entre las limitaciones de BOLT 11.

Un formato más nuevo, las **Offers de BOLT 12** (ofertas), resuelve algunas limitaciones de BOLT 11. Una offer es reutilizable, porque la billetera de cada pagador la usa para pedir una factura nueva a través de Lightning, y las rutas cegadas (blinded paths) le permiten al receptor mantener oculto su nodo. Las Offers se integraron en la especificación de Lightning en septiembre de 2024, sin los pagos recurrentes integrados que incluían los borradores anteriores.

A octubre de 2026, Core Lightning, eclair y LDK admiten las Offers. Las versiones publicadas de LND no, aunque el trabajo para darles soporte nativo ya empezó en su rama de desarrollo.

Consulta [Lightning Network](/es/glosario/lightning-network) para ver cómo se enrutan las facturas.
