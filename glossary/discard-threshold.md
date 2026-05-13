---
title: "Discard Threshold"
slug: discard-threshold
draft: false
shortDefinition: "A mempool rule where the lowest-fee transactions get dropped when the mempool reaches its full capacity."
keyTakeaways:
  - "Drops low-fee transactions from the mempool under high load"
  - "Encourages higher fees in periods of heavy network traffic"
  - "Varies by node configuration and available memory"
sources: []
relatedTerms:
  - absolute-fee
  - dust
  - dust-attack
  - dust-limit
  - dust-sweeping
  - transaction
  - transaction-fee
liveWidget: ~
---

When the Bitcoin mempool overflows, nodes prioritize higher-fee transactions. At some point, a node must discard lower-fee transactions to maintain memory usage. This discard threshold is effectively a dynamic ‘minimum fee rate’ for a transaction to remain in the mempool.
Nodes can set their own policies, leading to slight variations across the network. If your transaction’s fee is below the discard threshold, your node might forget it, though other nodes may still retain it if they have more memory or different rules. This mechanism motivates users to pay competitive fees during congestion if they want timely confirmation.
