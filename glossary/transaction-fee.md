---
title: "Transaction Fee"
slug: transaction-fee
draft: false
updated: "2026-10-09"
shortDefinition: "An amount included by the sender to reward miners for prioritizing transaction confirmation."
keyTakeaways:
  - "Motivates miners to include your transaction in a block"
  - "Calculated as input total minus output total"
  - "Dynamic depending on network congestion and block space demand"
sources:
  - { label: "mempool.space - block fees vs subsidy chart (has a percentage view of the fee share)", url: "https://mempool.space/graphs/mining/block-fees-subsidy" }
  - { label: "mempool.space API - reward stats for the last 52,560 blocks (fees about 0.6% of revenue as of block 970,650, Oct 2026)", url: "https://mempool.space/api/v1/mining/reward-stats/52560" }
  - { label: "mempool.space API - median fee rates in mined blocks, last 3 years (peak on April 20, 2024)", url: "https://mempool.space/api/v1/mining/blocks/fee-rates/3y" }
  - { label: "Ordinals docs - Runes specification (activates on block 840,000)", url: "https://docs.ordinals.com/runes/specification.html" }
  - { label: "mempool.space - block fee rates chart (in 2026 about a third of blocks had a median fee rate under 1 sat/vB)", url: "https://mempool.space/graphs/mining/block-fee-rates" }
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
sameAs:
  - "https://en.bitcoin.it/wiki/Miner_fees"
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

- **Low-congestion periods.** Fees drop to 1-3 sat/vB, and in 2026 often below 1 sat/vB. Most transactions confirm in the next block at those rates.
- **High-congestion periods.** Fees spike. When the Runes token protocol launched at the halving block on April 20, 2024, the median fee rate in mined blocks averaged more than 1,000 sat/vB for several hours.
- **Estimator-driven defaults.** Your wallet uses [fee estimation](/glossary/fee-estimation) to pick a reasonable rate. Most wallets get this right; you can override if you understand the trade-off.
- **Fee bumping** ([RBF](/glossary/replace-fee-rbf), [CPFP](/glossary/fee-bumping)) is available if you underpaid and got stuck.

Long-term, transaction fees are meant to become *the* incentive for miners. In the year to October 2026 they were about 0.6% of [block reward](/glossary/block-reward) revenue (about 6.5% in 2024). As the [block subsidy](/glossary/block-subsidy) halves toward zero around 2140, fees become 100% of it. Whether the fee market will be big enough by then to pay for strong security is an open question.

See live mempool fee bands on the [Node page](/node) or in the [Mining rabbit hole section 6](/rabbit-hole/mining).
