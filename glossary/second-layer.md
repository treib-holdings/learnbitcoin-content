---
title: "Second Layer"
slug: second-layer
draft: false
shortDefinition: "Networks built atop Bitcoin's main chain, like Lightning or sidechains, for improved scalability or features."
keyTakeaways:
  - "Eases load on the base chain for faster/cheaper payments"
  - "Examples include LN channels and pegged sidechains"
  - "Requires eventual settlement or peg-out to reconcile final states"
sources: []
relatedTerms:
  - atomic-swap
  - layer-1
  - lightning-channel
  - lightning-network
  - liquid-network
  - off-chain
  - payment-channel
  - sidechain
  - state-channel
liveWidget: ~
---

"Second layer" (or "layer 2") refers to any protocol built on top of Bitcoin's base chain that processes transactions outside the main chain while ultimately settling back to it. The goal is to add throughput, speed, or features without changing - and without burdening - the base layer.

The major second-layer designs for Bitcoin:

- **[Lightning Network](/glossary/lightning-network).** Off-chain payment channels secured by Bitcoin scripts. Instant, cheap, private payments; periodic on-chain settlement. The most-deployed Bitcoin second layer.
- **[Sidechains](/glossary/sidechain)** like Liquid and RSK. Separate blockchains pegged to Bitcoin via federated or other peg mechanisms. Often used for features Bitcoin lacks (confidential transactions, smart contracts).
- **Statechains / Mercury Layer.** Off-chain transfer of UTXO control without on-chain transactions, with eventual fallback to on-chain.
- **Ark.** A newer approach where a service operator allows many users to transact instantly via short-lived off-chain channels.
- **Chaumian e-cash** (Fedimint, Cashu). Federated mints issuing privacy-preserving e-cash redeemable for sats on Lightning. Trade self-custody for strong privacy and instant payments at the federation level.
- **Drivechain (proposed)** - hypothetical sidechain category secured by Bitcoin miners voting on peg withdrawals. Not yet activated.

The shared logic of every second layer: Bitcoin's base chain is the global settlement layer - secure, immutable, expensive to use in volume. Second layers absorb the day-to-day transactional load and only settle back to the base chain when needed.

The trade-offs vary by design. Lightning is genuinely trustless but requires liquidity management. Sidechains are easier to use but introduce federation trust. E-cash mints are convenient but require federation honesty.

The base + layer model is how Bitcoin scales. The base layer doesn't need to handle every coffee purchase; it needs to settle the final state. See [Layer 1](/glossary/layer-1) for the base-chain view this builds on.
