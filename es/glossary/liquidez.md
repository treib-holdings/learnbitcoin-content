---
title: "Liquidez"
slug: liquidez
aliases:
  - "liquidez entrante"
  - "liquidez saliente"
  - "liquidez de mercado"
  - "liquidity"
draft: false
published: "2026-10-14"
shortDefinition: "La facilidad de comprar o vender BTC con un impacto mínimo en el precio (en los mercados) o la capacidad de los canales (en Lightning)."
keyTakeaways:
  - "Mercados de BTC: volumen y profundidad del libro de órdenes para operar sin sobresaltos"
  - "Canales Lightning: capacidad entrante y saliente para que el enrutamiento funcione"
  - "Vital tanto para operar en un exchange como para el flujo de pagos off-chain en Lightning"
sources:
  - { label: "Lightning Labs docs - Loop: Loop Out sends Lightning funds to an on-chain address, Loop In sends on-chain bitcoin into a channel; emptying a channel acquires inbound capacity (checked October 12, 2026)", url: "https://docs.lightning.engineering/lightning-network-tools/loop" }
relatedTerms:
  - balanced-channel-lightning
  - lightning-channel
  - lightning-channel-capacity
  - liquidity-ads
  - loop-inout
liveWidget: ~
translationOf: liquidity
sourceHash: "32e45a618d51"
sourceCommit: "ceb6634"
sourceUpdated: "2026-10-12"
translation:
  method: "llm-draft"
---

"Liquidez" significa cosas distintas en el contexto del mercado de Bitcoin y en el de Lightning. Las dos importan; confundirlas lo enreda todo.

**La liquidez de mercado** tiene que ver con los libros de órdenes de los exchanges y las mesas OTC (over-the-counter, fuera de bolsa): cuánto puedes comprar o vender antes de mover el precio. Mucha liquidez significa spreads estrechos entre compra y venta, órdenes grandes que se ejecutan sin deslizamiento (slippage) y un proceso de descubrimiento de precios robusto. Poca liquidez significa libros de órdenes delgados, spreads amplios y movimientos bruscos de precio con un volumen modesto. Los grandes mercados spot de BTC/USD en los exchanges son profundamente líquidos (miles de millones de dólares de volumen diario, spreads de menos de un centavo); los mercados pequeños o los pares exóticos no lo son.

**La liquidez en Lightning** tiene que ver con cómo se reparte el saldo de los canales. Todo canal Lightning tiene una capacidad total (el monto de la salida de financiamiento) dividida entre el saldo local (el tuyo, disponible para enviar) y el saldo remoto (el de tu contraparte, disponible para que te envíe a ti, es decir, tu capacidad entrante).

- **Liquidez saliente.** El saldo de tu lado de tus canales, disponible para enviar.
- **Liquidez entrante.** El saldo del otro lado de tus canales, disponible para que otros te envíen. Un canal nuevo que financiaste tú tiene cero liquidez entrante; no puedes recibir hasta que fluya saldo hacia tu lado.

Los usuarios de Lightning sin suficiente liquidez entrante no pueden recibir pagos mayores que lo que ya está del lado remoto. Los usuarios de Lightning sin suficiente liquidez saliente no pueden enviar. Los nodos de enrutamiento necesitan [canales equilibrados (en inglés)](/glossary/balanced-channel-lightning), con liquidez sustancial de los dos lados, para reenviar pagos en cualquier dirección.

Cómo conseguir liquidez entrante:

- Gastar primero la saliente que ya tienes (cada pago que envías mueve saldo al otro lado y aumenta tu entrante).
- Comprar liquidez entrante a un servicio de nodos de enrutamiento ([anuncios de liquidez (en inglés)](/glossary/liquidity-ads), Lightning Pool, de Lightning Labs, etc.) o empujar saldo al otro lado con un submarine swap de salida no custodial ([Loop Out (en inglés)](/glossary/loop-inout), por ejemplo).
- Hacer un splice o abrir un canal en el que la otra parte aporte el capital.
- Ganar entrante recibiendo pagos (lo cual es circular si, para empezar, no puedes recibir).

La asimetría es uno de los retos persistentes de experiencia de usuario en Lightning. Es habitual que los usuarios nuevos choquen contra el muro de la liquidez entrante en su primer intento de recibir, sin saber por qué.
