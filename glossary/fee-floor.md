---
title: "Fee Floor"
slug: fee-floor
draft: false
shortDefinition: "An unofficial minimum fee rate below which transactions rarely get mined, especially during busy mempool conditions."
keyTakeaways:
  - "Reflects the lowest competitive fee rate during congestion"
  - "Transactions below it may remain unconfirmed for long"
  - "Can drop if the mempool clears or network activity declines"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-estimation
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

The fee floor is the practical minimum fee rate (in sat/vByte) below which Bitcoin transactions are unlikely to confirm in a reasonable timeframe. It's not a single protocol-level constant; it's an emergent property of the [mempool](/glossary/mempool) state and miner behavior at any given moment.

Two related concepts that get conflated:

- **The relay-policy minimum.** Bitcoin Core's default minimum to *accept* a transaction into its mempool: 1 sat/vB. Below this, the transaction won't be relayed by Core nodes at all. Knots and other implementations can set this higher.
- **The market floor.** The actual fee rate the cheapest currently-mined transactions are paying. During congestion this can be much higher than the relay minimum; during quiet periods it equals the relay minimum.

How the market floor behaves:

- **Idle periods (typical 2024-2026 low-traffic times):** the cheapest mined transactions pay 1-2 sat/vB. Nearly anything gets in.
- **Moderate congestion:** 5-20 sat/vB floor. Lowest-fee transactions sit in mempool for hours.
- **Severe congestion (Ordinals mints, exchange exodus, market panic):** floor spikes to 50-500+ sat/vB. Transactions below this can wait days or get evicted.

What sets the floor:

- **Block space is fixed.** Roughly 4MB equivalent weight per block, ~144 blocks/day = bounded throughput.
- **Demand varies wildly.** Spikes can be 10x baseline within hours.
- **Miners pack by fee rate.** Highest-paying transactions get in first; lower-paying ones queue.

The fee floor isn't enforced by anyone. It's just what happens when there's more transaction demand than block space. Modern wallets do [fee estimation](/glossary/fee-estimation) to set rates that comfortably clear the current floor; aggressive users sometimes underpay and rely on [RBF](/glossary/replace-fee-rbf) to bump up later if needed.

In the long run, the fee floor becomes a more meaningful number as [block subsidies](/glossary/block-subsidy) decline and miner revenue depends more on fees. The 2140 endgame requires fees alone to fund mining; the floor under those conditions has to be high enough to sustain network security.
