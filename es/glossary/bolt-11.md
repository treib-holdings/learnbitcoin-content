---
title: "BOLT 11"
slug: bolt-11
draft: false
published: "2026-10-14"
shortDefinition: "Un formato de factura (invoice) de la red Lightning, que suele empezar con lnbc... y codifica los datos del pago, como el monto y el destino."
keyTakeaways:
  - "Codifica pagos por Lightning en un formato de factura estructurado"
  - "Especifica el monto, el nodo del receptor y datos opcionales"
  - "Ofrece una forma estándar y práctica de solicitar pagos por Lightning"
sources:
  - { label: "BOLT #11 - Invoice Protocol for Lightning Payments", url: "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md" }
  - { label: "BOLTs PR #183 - BOLT 11 added to the spec (merged June 2017)", url: "https://github.com/lightning/bolts/pull/183" }
  - { label: "BIP 173 - Base32 address format for native v0-16 witness outputs (bech32)", url: "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" }
  - { label: "BOLT #12 - Limitations of BOLT 11", url: "https://github.com/lightning/bolts/blob/master/12-offer-encoding.md#limitations-of-bolt-11" }
  - { label: "BOLTs PR #798 - Offers (merged September 2024)", url: "https://github.com/lightning/bolts/pull/798" }
  - { label: "LND API docs - AddInvoice (expiry defaults to 86,400 seconds)", url: "https://lightning.engineering/api-docs/api/lnd/lightning/add-invoice/" }
  - { label: "Core Lightning docs - invoice (expiry defaults to 604,800 seconds)", url: "https://docs.corelightning.org/reference/invoice" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bip-bitcoin-improvement-proposal
  - bolt
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
sameAs:
  - "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md"
liveWidget: ~
translationOf: bolt-11
sourceHash: "988ea32c35df"
sourceCommit: "375acfd"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

BOLT 11 es la especificación de las facturas Lightning (invoices): las solicitudes de pago codificadas que empiezan con `lnbc` (mainnet) o `lntb` (testnet). Es una de las [especificaciones BOLT](/es/glosario/bolt) que definen cómo interoperan las distintas implementaciones de Lightning.

Una factura BOLT 11 codifica todo lo que quien paga necesita para completar el pago:

- **Monto** (opcional: quien paga puede indicarlo si la factura no lo trae).
- **Hash de pago**: el hash de la preimagen secreta que, al revelarse, completa el pago.
- **Secreto de pago**: un valor aleatorio que impide que los nodos intermedios sondeen al destinatario.
- **Clave pública del nodo de destino**: escrita de forma explícita, o recuperada a partir de la firma.
- **Pistas de enrutamiento** para nodos poco conectados al grafo público (útiles para billeteras móviles).
- **Vencimiento**: 1 hora si la factura no indica otro. El software del nodo suele fijar un plazo más largo al crear la factura, como 24 horas (LND) o una semana (Core Lightning).
- **Descripción (memo)**: una nota corta, o el hash de una descripción más larga. Toda factura debe llevar una cosa o la otra.
- **Una firma** del nodo del destinatario, que prueba que ese nodo creó la factura.

Todo esto se codifica con bech32, el formato que el BIP 173 definió para las direcciones SegWit nativas, pero sin el límite de 90 caracteres de ese formato. El resultado es una sola cadena de texto, por lo general de unos cientos de caracteres, que cabe en un código QR y se puede copiar y pegar, escanear o transmitir por NFC con un toque.

Las facturas BOLT 11 son de un solo uso por diseño. Una vez que un pago se liquida, la preimagen deja de ser secreta, porque quien pagó y todos los nodos de la ruta ya la vieron. Si un segundo pago a la misma factura pasa por cualquiera de esos nodos, ese nodo podría quedárselo en lugar de reenviarlo. Para recibir pagos repetidos con un identificador fijo, necesitas algo que entregue una factura nueva cada vez, como las Offers (ofertas) de BOLT 12, su sucesor moderno, o un servicio que genere una factura por cada pago.

BOLT 11 se incorporó a la especificación de Lightning en junio de 2017 y se convirtió en la lengua franca de las solicitudes de pago en Lightning. Las Offers de BOLT 12, integradas a la especificación en septiembre de 2024, corrigen varias de sus limitaciones. Consulta la entrada [factura Lightning](/es/glosario/factura-lightning) para ver hasta dónde llegaba la compatibilidad con Offers en octubre de 2026.
