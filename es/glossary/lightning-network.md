---
title: "Lightning Network"
slug: lightning-network
aliases:
  - "red Lightning"
draft: false
published: "2026-10-14"
shortDefinition: "Un sistema de capa 2 sobre Bitcoin que permite pagos rápidos y de baja comisión a través de canales off-chain, y que se liquida en la cadena solo cuando hace falta."
keyTakeaways:
  - "Resuelve las comisiones altas on-chain y las confirmaciones lentas para los pagos de todos los días"
  - "Usa canales de pago para agrupar transacciones off-chain"
  - "Depende de una red global de nodos Lightning interconectados por rutas"
sources:
  - { label: "BOLT #12 - Negotiation Protocol for Lightning Payments (offers)", url: "https://github.com/lightning/bolts/blob/master/12-offer-encoding.md" }
  - { label: "BOLTs PR #798 - Offers (merged September 2024)", url: "https://github.com/lightning/bolts/pull/798" }
  - { label: "Bitcoin Optech - Offers (topic page and implementation history)", url: "https://bitcoinops.org/en/topics/offers/" }
  - { label: "LND 0.22.0 release notes (in development) - first BOLT 12 code", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/release-notes/release-notes-0.22.0.md" }
  - { label: "LNDK - standalone daemon that adds BOLT 12 offers to LND (experimental)", url: "https://github.com/lndk-org/lndk" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bolt
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - delayed-payment-channel
  - eltoo
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - gossip-protocol-lightning
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-probe
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
  - micropayment
  - off-chain
  - onion-routing-lightning
  - payment-channel
  - submarine-swap
  - wumbo-channels-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
  - "https://en.bitcoin.it/wiki/Lightning_Network"
liveWidget: ~
translationOf: lightning-network
sourceHash: "f58fce931bdc"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

La Lightning Network (la red Lightning) es una capa de pagos construida sobre Bitcoin. Permite pagos instantáneos y de baja comisión enrutándolos a través de una red de canales de pago financiados de antemano, y solo se liquida en la cadena base cuando los canales se abren o se cierran.

La mecánica, simplificada:

1. **Abrir un [canal](/es/glosario/canal-lightning).** Dos partes crean una salida on-chain de Bitcoin con multisig 2 de 2, financiada por una de ellas o por ambas. Es una transacción on-chain normal y paga una comisión normal.
2. **Transaccionar [off-chain](/es/glosario/off-chain).** Las dos partes intercambian "actualizaciones de saldo" firmadas: declaraciones criptográficamente válidas sobre el reparto actual de los fondos del canal. Estas actualizaciones no se transmiten a la red; viven solo entre los dos participantes.
3. **Enrutar por la red.** La mayoría de los canales no van directamente de ti a tu destinatario final. La Lightning Network es una malla de canales; los pagos saltan por nodos intermedios usando [HTLCs (contratos bloqueados por hash y tiempo)](/es/glosario/htlc), de modo que cada salto es atómico: el pago completo tiene éxito, o no se realiza en absoluto.
4. **Cerrar el canal.** Cualquiera de las dos partes puede cerrarlo en cualquier momento transmitiendo a la cadena el último estado firmado por ambas. Los fondos se reparten según ese estado final. Listo.

Qué ganas con esto:

- **Velocidad.** Los pagos se confirman en segundos, no en minutos.
- **Costo.** Lo habitual son comisiones de menos de un centavo. De verdad puedes usar Bitcoin para [micropagos (en inglés)](/glossary/micropayment).
- **Privacidad.** Los pagos por Lightning *no* se transmiten a la cadena pública. Solo aparecen las aperturas y los cierres de canales; los pagos intermedios quedan entre los participantes y los nodos de enrutamiento.
- **Escalabilidad.** Cada canal admite transacciones ilimitadas entre sus dos partes sin inflar la cadena base.

Las limitaciones son reales:

- **Liquidez.** Un canal solo puede enrutar lo que tiene del lado que corresponde. La liquidez entrante es un concepto real y un problema real para los nodos nuevos.
- **Hay que estar en línea.** Los nodos deben estar conectados para enviar, recibir y (esto es importante) vigilar los intentos de fraude de la contraparte de un canal.
- **Complejidad operativa.** Correr tu propio nodo Lightning exige más atención que simplemente tener bitcoin. Muchos usuarios prefieren billeteras Lightning custodiales, que, como las billeteras custodiales on-chain, cambian autocustodia por comodidad.

Lightning es la forma en que Bitcoin escala sin cambiar la capa base. La capa base se optimiza para la seguridad de la liquidación a lo largo de décadas; Lightning se optimiza para pagos instantáneos. Las dos son complementarias por diseño.

**Una nota sobre las Offers de BOLT 12.** El formato de factura (invoice) heredado es [BOLT 11](/es/glosario/bolt-11): solicitudes de pago de un solo uso, ligadas a un momento concreto. BOLT 12 ("Offers", ofertas) es su sucesor moderno. Una offer es reutilizable, porque la billetera de cada pagador la usa para pedir una factura nueva a través de Lightning, y las rutas cegadas (blinded paths) le permiten al receptor mantener oculto su nodo. Se integró en la especificación de Lightning en septiembre de 2024, sin los pagos recurrentes integrados de los borradores anteriores.

A octubre de 2026, Core Lightning, eclair y LDK admiten las Offers de forma nativa. Las versiones publicadas de LND no, aunque el trabajo ya empezó en su rama de desarrollo, y el proyecto aparte LNDK, todavía experimental, añade las Offers a un nodo LND.

Consulta [Canal Lightning](/es/glosario/canal-lightning) para la pieza básica, y [Recorrido: Usar Bitcoin](/es/recorrido/usar-bitcoin) para la vista práctica del usuario.
