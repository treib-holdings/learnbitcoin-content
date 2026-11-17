---
title: "Lightning Network"
slug: lightning-network
aliases:
  - "red Lightning"
draft: false
published: "2026-10-14"
updated: "2026-11-17"
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
  - { label: "Joseph Poon and Thaddeus Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (January 14, 2016): the design is conditional on a signature change that addresses malleability", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "BIP 141 - Segregated Witness: fixes transaction malleability, which lets chains of unconfirmed transactions be built without trust, as the Lightning Network needs", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BOLT 0 - Lightning is a protocol for making fast payments with Bitcoin using a network of channels", url: "https://github.com/lightning/bolts/blob/master/00-introduction.md" }
  - { label: "BOLT 2 - a mutual close, unlike a unilateral one, gives both nodes their funds immediately and can cost less in fees; to_self_delay is how long a node waits for its own funds after closing alone", url: "https://github.com/lightning/bolts/blob/master/02-peer-protocol.md" }
  - { label: "BOLT 5 - a node that publishes its own commitment transaction has to wait to claim its funds; if a node publishes an outdated one, the other node can claim all the funds in the channel", url: "https://github.com/lightning/bolts/blob/master/05-onchain.md" }
  - { label: "LND - sample-lnd.conf: the delay it asks of a channel partner by default runs from 144 to 2,016 blocks, scaled to the size of the channel", url: "https://github.com/lightningnetwork/lnd/blob/master/sample-lnd.conf" }
  - { label: "LND documentation - watchtowers: a second line of defense when a node is offline or unable to respond at the time of a breach", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/watchtower.md" }
  - { label: "LND documentation - recovery: getting funds back takes the 24-word seed and the channel backup file as well", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/recovery.md" }
  - { label: "bLIP 52 (LSPS2) - a channel opened in response to an incoming payment lets a wallet with no channels start receiving, with the cost of the inbound liquidity deducted from the first payment received", url: "https://github.com/lightning/blips/blob/master/blip-0052.md" }
  - { label: "mempool.space API - Lightning network statistics: in its latest record, dated July 13, 2026, the median channel fee rate was 100 parts per million and the median base fee 100 millisatoshis, a tenth of a satoshi (read November 16, 2026; the record this address serves changed during that day)", url: "https://mempool.space/api/v1/lightning/statistics/latest" }
  - { label: "Lightning specification - extension BOLT, Simple Taproot Channels (merged May 4, 2026): the funding output becomes a taproot output with a MuSig2 key", url: "https://github.com/lightning/bolts/blob/master/bolt-simple-taproot.md" }
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
sourceHash: "91cc3ad8cd4b"
sourceCommit: "74f1a22"
sourceUpdated: "2026-11-17"
translation:
  method: "llm-draft"
---

La Lightning Network (la red Lightning) es una capa de pagos construida sobre Bitcoin. Permite pagos instantáneos y de baja comisión enrutándolos a través de una red de canales de pago financiados de antemano, y solo se liquida en la cadena base cuando los canales se abren o se cierran.

La mecánica, simplificada:

1. **Abrir un [canal](/es/glosario/canal-lightning).** Dos partes bloquean monedas en una salida on-chain de Bitcoin que necesita las firmas de ambas (una multisig 2 de 2 en un canal estándar, una sola clave combinada en un canal Taproot), financiada por una de ellas o por ambas. Es una transacción on-chain normal y paga una comisión normal.
2. **Transaccionar [off-chain](/es/glosario/off-chain).** Las dos partes intercambian "actualizaciones de saldo" firmadas: declaraciones criptográficamente válidas sobre el reparto actual de los fondos del canal. Estas actualizaciones no se transmiten a la red; viven solo entre los dos participantes.
3. **Enrutar por la red.** La mayoría de los canales no van directamente de ti a tu destinatario final. La Lightning Network es una malla de canales; los pagos saltan por nodos intermedios usando [HTLCs (contratos bloqueados por hash y tiempo)](/es/glosario/htlc), de modo que cada salto es atómico: el pago completo tiene éxito, o no se realiza en absoluto.
4. **Cerrar el canal.** El cierre normal es uno que firman las dos partes, y le paga a cada una de inmediato. Cualquiera de las dos también puede cerrarlo sola en cualquier momento transmitiendo el último estado firmado. Eso suele costar más en comisiones on-chain y deja bloqueada la porción de quien cierra durante un plazo acordado cuando se abrió el canal: de 144 bloques, cerca de un día, a 2,016, unas dos semanas, en los valores por defecto de LND, una implementación común. También se puede transmitir un estado más antiguo. La otra parte puede entonces reclamar el canal entero, pero solo si ella, o un watchtower que actúa en su nombre, está vigilando a tiempo.

Qué ganas con esto:

- **Velocidad.** Un pago no espera a un bloque. La especificación llama a Lightning un protocolo para "fast payments" (pagos rápidos), y el paper que lo propuso lleva "Instant Payments" (pagos instantáneos) en su título.
- **Costo.** Las comisiones de enrutamiento son pequeñas: según las estadísticas de red de mempool.space para mediados de 2026, la tasa de comisión mediana entre los canales era de 100 partes por millón del monto, una centésima del uno por ciento, y la comisión fija mediana, de una décima de satoshi. Las billeteras y los proveedores de servicios pueden cobrar por encima de eso. De verdad puedes usar Bitcoin para [micropagos (en inglés)](/glossary/micropayment).
- **Privacidad.** Los pagos por Lightning *no* se transmiten a la cadena pública. Solo aparecen las aperturas y los cierres de canales; los pagos intermedios quedan entre los participantes y los nodos de enrutamiento.
- **Escalabilidad.** Cada canal admite transacciones ilimitadas entre sus dos partes sin inflar la cadena base.

Las limitaciones son reales:

- **Liquidez.** Un canal solo puede enrutar lo que tiene del lado que corresponde. La liquidez entrante es un concepto real y un problema real para los nodos nuevos. Una billetera nueva no tiene ninguna: su primer pago entrante necesita que le abran un canal, y un servicio que abre uno descuenta su costo de ese pago. No te pide que envíes dinero primero.
- **Hay que estar en línea.** Los nodos deben estar conectados para enviar, recibir y (esto es importante) vigilar los intentos de fraude de la contraparte de un canal.
- **Complejidad operativa.** Correr tu propio nodo Lightning exige más atención que simplemente tener bitcoin. La frase semilla sola puede no traer de vuelta el dinero de los canales: LND necesita también su archivo de respaldo de canales. Las billeteras Lightning custodiales te quitan ese trabajo y, como las billeteras custodiales on-chain, cambian autocustodia por comodidad.

Lightning es la forma en que Bitcoin escala sin poner cada pago en la capa base. Primero necesitó un cambio ahí: el paper que propuso Lightning condicionó el diseño a una corrección de la maleabilidad de las transacciones, que SegWit aportó. La capa base se optimiza para la seguridad de la liquidación a lo largo de décadas; Lightning se optimiza para pagos instantáneos. Las dos son complementarias por diseño.

**Una nota sobre las Offers de BOLT 12.** El formato de factura (invoice) heredado es [BOLT 11](/es/glosario/bolt-11): solicitudes de pago de un solo uso, ligadas a un momento concreto. BOLT 12 ("Offers", ofertas) es su sucesor moderno. Una offer es reutilizable, porque la billetera de cada pagador la usa para pedir una factura nueva a través de Lightning, y las rutas cegadas (blinded paths) le permiten al receptor mantener oculto su nodo. Se integró en la especificación de Lightning en septiembre de 2024, sin los pagos recurrentes integrados de los borradores anteriores.

A noviembre de 2026, Core Lightning, eclair y LDK admiten las Offers de forma nativa. Las versiones publicadas de LND no, aunque el trabajo ya empezó en su rama de desarrollo, y el proyecto aparte LNDK, todavía experimental, añade las Offers a un nodo LND.

Consulta [Canal Lightning](/es/glosario/canal-lightning) para la pieza básica, y [Enrutamiento en Lightning (en inglés)](/rabbit-hole/lightning-routing) para ver cómo un pago encuentra su camino.
