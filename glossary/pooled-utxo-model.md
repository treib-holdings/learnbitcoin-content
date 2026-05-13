---
title: "Pooled UTXO Model"
slug: pooled-utxo-model
draft: false
shortDefinition: "A privacy or fee-optimization practice grouping multiple user UTXOs (e.g., in a coinjoin) to send collective transactions."
keyTakeaways:
  - "Groups multiple user outputs into one transaction for synergy"
  - "Improves on-chain privacy by mixing inputs/outputs"
  - "Reduces transaction fees by consolidating UTXOs"
sources: []
relatedTerms: []
liveWidget: ~
---

Sometimes called a ‘shared wallet’ or ‘cooperative transaction scheme,’ this approach aggregates many unspent transaction outputs (UTXOs) from different users into one or more transactions for combined efficiency. For instance, coinjoin protocols batch multiple participants’ inputs, concealing which inputs belong to which outputs. Exchanges or custodial services might also consolidate user funds for block space savings, though this can raise privacy concerns if poorly implemented. With a carefully arranged coinjoin or collaborative transaction, participants can reduce fees and obscure typical blockchain analysis heuristics.
