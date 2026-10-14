---
title: "Canal Lightning"
slug: canal-lightning
aliases:
  - "canal de Lightning"
  - "canales Lightning"
  - "Lightning channel"
draft: false
published: "2026-10-13"
shortDefinition: "Un canal de pago off-chain entre dos partes en la red Lightning, que permite transacciones rápidas y de baja comisión antes de la liquidación en la cadena."
keyTakeaways:
  - "Bloquea BTC en una dirección multisig 2 de 2 para transferencias off-chain"
  - "Permite pagos casi instantáneos y con comisiones mínimas"
  - "Al final se liquida en la cadena cuando el canal se cierra"
sources:
  - { label: "BOLT #2 - Peer Protocol for Channel Management (the funder opens and funds a v1 channel; v2 adds dual funding; mutual close; splicing replaces the funding transaction and sets a new channel capacity)", url: "https://github.com/lightning/bolts/blob/master/02-peer-protocol.md" }
  - { label: "BOLT #3 - Bitcoin Transaction and Script Formats (2-of-2 funding output, commitment transactions, revocation keys, to_self_delay for penalty transactions)", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md" }
  - { label: "BOLT #5 - On-chain Transaction Handling (unilateral close; on a revoked commitment the other node can claim all the channel's funds)", url: "https://github.com/lightning/bolts/blob/master/05-onchain.md" }
  - { label: "Poon and Dryja - The Bitcoin Lightning Network paper: if both parties cooperate, a channel can remain open indefinitely (2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "LND docs - Private altruist watchtowers (watch for a breach and publish the penalty transaction while the user is offline)", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/watchtower.md" }
  - { label: "Lightning Labs docs - Managing liquidity: --local-amt sets a channel's full capacity; Loop refills or empties channels without opening new ones", url: "https://docs.lightning.engineering/the-lightning-network/liquidity/manage-liquidity" }
  - { label: "Lightning Labs docs - Loop: submarine swaps that empty out or refill a channel", url: "https://docs.lightning.engineering/lightning-network-tools/loop" }
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
  - eltoo
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - inactive-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
  - loop-inout
  - payment-channel
  - rescue-transaction
  - wumbo-channels-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
  - "https://en.bitcoin.it/wiki/Payment_channels"
liveWidget: ~
translationOf: lightning-channel
sourceHash: "73359119202f"
sourceCommit: "c546920"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

Un canal Lightning es un conducto de pagos entre dos partes en la [Lightning Network](/es/glosario/lightning-network). Se bloquea bitcoin en una salida on-chain multisig 2 de 2 compartida (la **transacción de financiamiento**, o funding transaction), y a partir de ahí las dos partes pueden intercambiar pagos off-chain sin límite firmando sucesivas **transacciones de compromiso** (commitment transactions) que actualizan el reparto del saldo del canal. Por lo general, el lado que abre el canal aporta todo ese bitcoin.

Cómo funciona un canal, de principio a fin:

1. **Apertura.** Alice deposita fondos en una multisig 2 de 2 que exige tanto su firma como la de Bob. (Con el financiamiento dual, una opción más reciente, Bob también puede aportar fondos.) La transacción de financiamiento se transmite a la cadena y se confirma.
2. **Transacciones.** Para pagarle a Bob, Alice construye una nueva transacción de compromiso que le asigna a ella una parte menor del saldo del canal y a Bob una mayor, la firma y la comparte. Bob también la firma y la guarda. El compromiso anterior se invalida con una clave de revocación. El nuevo estado pasa a ser la "verdad vigente" entre ambos, aunque nada haya tocado la cadena.
3. **Muchas actualizaciones.** Pueden repetir esto una y otra vez, en cualquier dirección, miles de veces. Cada actualización no es más que una transacción firmada guardada en sus billeteras.
4. **Cierre.** Cualquiera de las dos partes puede transmitir el último compromiso a la cadena en cualquier momento. El compromiso es en sí una especie de [transacción de rescate (en inglés)](/glossary/rescue-transaction): prefirmada en cada actualización de estado, lista para transmitirse si la contraparte del canal se desconecta o actúa de mala fe. Los fondos se liquidan según el último estado. El **cierre cooperativo** lo firman ambos y es limpio. El **cierre forzado** es unilateral e incluye una ventana de espera durante la cual la otra parte puede castigar, con la clave de revocación, a una contraparte tramposa (una que transmita un estado desactualizado).

Esa protección contra trampas es lo que hace que en Lightning no haya necesidad de confiar en nadie. Si Bob intenta alguna vez transmitir un compromiso viejo que lo favorecía más, Alice puede usar la clave de revocación para reclamar *todos* los fondos del canal, incluidos los de Bob. El mecanismo es destrucción mutua asegurada a nivel del canal.

Algunas realidades prácticas:

- **Los canales no caducan.** Mientras ninguno de los dos lados lo cierre, un canal puede seguir abierto indefinidamente. Uno que lleva meses sin usarse sigue funcionando, y puedes volver a él.
- **Tienes que vigilar que no te hagan trampa.** Si estás desconectado cuando tu contraparte hace trampa, te pierdes la ventana de disputa. Para eso existen los servicios de watchtower.
- **La capacidad la fija la transacción de financiamiento.** Un canal financiado con 0.05 BTC contiene 0.05 BTC en total, repartidos entre los dos lados. Los servicios de intercambio como [Loop In/Out (en inglés)](/glossary/loop-inout) mueven ese reparto, rellenando o vaciando un lado, pero el total no cambia. Solo el [splicing (en inglés)](/glossary/lightning-channel-splicing), que reemplaza la transacción de financiamiento por una nueva, cambia la capacidad de un canal. La otra forma de conseguir más espacio es abrir otro canal.

Consulta [Lightning Network](/es/glosario/lightning-network) para la vista a nivel de red y el enrutamiento con HTLC.
