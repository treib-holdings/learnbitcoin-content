---
title: "Capacidad del canal Lightning"
slug: capacidad-del-canal-lightning
aliases:
  - "capacidad del canal"
  - "capacidad de canal"
  - "channel capacity"
draft: false
published: "2026-10-13"
shortDefinition: "La cantidad de BTC bloqueada en un canal Lightning, que determina cuánto se puede enviar o recibir a través de ese canal."
keyTakeaways:
  - "Representa el total de fondos bloqueados disponibles para pagos off-chain"
  - "Un desequilibrio en el reparto de la capacidad puede dificultar enviar o recibir"
  - "Las estrategias de rebalanceo mantienen los canales utilizables en ambas direcciones"
sources:
  - { label: "Lightning Labs docs - How to Get Inbound Capacity on the Lightning Network: the channel opener starts with zero inbound capacity, every satoshi spent out becomes inbound capacity, Loop Out raises inbound capacity (checked October 12, 2026)", url: "https://docs.lightning.engineering/the-lightning-network/liquidity/how-to-get-inbound-capacity-on-the-lightning-network" }
relatedTerms:
  - bolt
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - inactive-channel
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - lightning-routing
  - wumbo-channels-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
liveWidget: ~
translationOf: lightning-channel-capacity
sourceHash: "0bc7f0c26797"
sourceCommit: "ceb6634"
sourceUpdated: "2026-10-12"
translation:
  method: "llm-draft"
---

La capacidad del canal es la cantidad total de bitcoin bloqueada en la multisig 2 de 2 de un [canal Lightning](/es/glosario/canal-lightning): el tope de lo que puede fluir por ese canal en cualquiera de las dos direcciones a lo largo de su vida.

Lo que suele malentenderse: **la capacidad no es lo mismo que cuánto puedes enviar**. Un canal de 1 BTC puede enrutar como máximo 1 BTC en total, pero solo lo que en ese momento esté asignado al lado que *paga*. Si el 1 BTC entero está del lado de Alice, Bob no puede pagar por ese canal: no tiene liquidez saliente. La capacidad es el presupuesto; el *saldo de cada lado* es lo que de verdad puedes gastar.

Dos conceptos relacionados que aparecen todo el tiempo:

- **Liquidez saliente**: el saldo de tu lado de los canales. Determina cuánto puedes *pagar*.
- **Liquidez entrante**: el saldo del lado de tus contrapartes en los canales. Determina cuánto puedes *recibir*.

Para quien solo envía (por ejemplo, comprando por Lightning), importa la saliente. Para quien también recibe (comercios, creadores de contenido que reciben zaps), importa además la entrante. La asimetría es un dolor de cabeza real para quien recién llega a Lightning: cuando abres un canal financiándolo tú, arrancas con toda la liquidez saliente y cero entrante. Recibir cualquier monto significativo exige una de estas cosas:

- Enrutar primero algunos pagos hacia afuera, lo que mueve saldo al otro lado.
- Un [submarine swap (en inglés)](/glossary/submarine-swap) de salida, de Lightning a la cadena, que mueve saldo al otro lado y así "compra" liquidez entrante.
- Un servicio de liquidez como Lightning Pool, Magma o la incorporación a través de un LSP (proveedor de servicios Lightning); Phoenix y Breez lo hacen automáticamente.
- El [splicing del canal (en inglés)](/glossary/lightning-channel-splicing) para, de paso, ampliar la capacidad.

Las billeteras modernas le ocultan casi todo esto al usuario final. Los usuarios avanzados que corren sus propios nodos de enrutamiento trabajan con la capacidad y el rebalanceo de forma más directa. En cualquier caso, la capacidad del canal es la cantidad fundamental detrás de todo el enrutamiento en Lightning.
