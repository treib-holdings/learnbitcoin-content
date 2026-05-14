---
title: "Transaction Fee"
slug: transaction-fee
draft: false
shortDefinition: "An amount included by the sender to reward miners for prioritizing transaction confirmation."
keyTakeaways:
  - "Motivates miners to include your transaction in a block"
  - "Calculated as input total minus output total"
  - "Dynamic depending on network congestion and block space demand"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - coinbase-transaction
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - mining-subsidy
  - replace-fee-rbf
  - transaction
  - transaction-chaining
liveWidget: ~
---

A transaction fee is what you pay [miners](/glossary/miner) to include your [Bitcoin transaction](/glossary/transaction) in a block. Mechanically, it's the difference between the sum of input values and the sum of output values - whatever you don't explicitly send to an output, the miner who confirms the transaction collects.

Fees are quoted as a *rate*, not a total: **sats per virtual byte (sat/vB)**. A larger transaction costs more in fees at the same rate. Typical transaction sizes:

- Simple [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) (1 input, 2 outputs): ~140 vB
- [Taproot](/glossary/taproot) (1 input, 2 outputs): ~110 vB
- 2-of-3 multisig: ~250 vB
- Consolidations with many inputs: 500+ vB

At 10 sat/vB, those would cost 1,400 / 1,100 / 2,500 / 5,000+ sats respectively. Real fees vary wildly depending on network congestion.

The fee market dynamics:

- **Low-congestion periods.** Fees drop to 1-3 sat/vB. Most transactions confirm in the next block at that rate.
- **High-congestion periods.** Fees spike. During the early-2024 Ordinals mint surge, next-block fees occasionally touched 500+ sat/vB.
- **Estimator-driven defaults.** Your wallet uses [fee estimation](/glossary/fee-estimation) to pick a reasonable rate. Most wallets get this right; you can override if you understand the trade-off.
- **Fee bumping** ([RBF](/glossary/replace-fee-rbf), [CPFP](/glossary/fee-bumping)) is available if you underpaid and got stuck.

Long-term, transaction fees become *the* incentive for miners. Today they're ~3-10% of [block reward](/glossary/block-reward) revenue; as the [block subsidy](/glossary/block-subsidy) halves toward zero around 2140, fees become 100% of it. The fee market that exists today is a small preview of the fee market Bitcoin needs to sustain its security post-subsidy.

See live mempool fee bands on the [Node page](/node) or in the [Mining rabbit hole §6](/rabbit-hole/mining).
