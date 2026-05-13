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
  - incremental-batching
  - mining-subsidy
  - replace-fee-rbf
  - transaction
  - transaction-chaining
liveWidget: ~
---

When you create a Bitcoin transaction, you set a fee that effectively pays miners to include it in the next block. This fee is the difference between the sum of inputs and outputs. Miners prioritize higher-fee transactions when the mempool is crowded, so users competing for block space raise fees. During low network usage, minimal fees can still get confirmed. Lightning channels, batching, or using off-peak hours are strategies to mitigate high fees. Over time, as the block subsidy halves, transaction fees are expected to become the primary incentive for mining.
