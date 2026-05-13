---
title: "Transaction Finality"
slug: transaction-finality
draft: false
shortDefinition: "After several confirmations, reversing a transaction by reorg becomes highly improbable, ensuring practical finality."
keyTakeaways:
  - "Every new block reduces the chance of a successful reorg attack"
  - "No absolute guarantee, but risk diminishes rapidly"
  - "Higher-value transactions typically wait more confirmations"
sources: []
relatedTerms: []
liveWidget: ~
---

Each new block built atop your transaction's block makes rewriting that part of the chain more difficult. With enough depth, it's computationally expensive for an attacker to reorganize, thus transactions are 'final' in a practical sense. Different use cases require different confirmation depths-exchanges may wait for 3-6 confirmations for moderate amounts, while very high-value transfers might wait for even more. Lightning Network offers near-instant finality in the off-chain sense, but the underlying security still relies on Bitcoin's consensus for ultimate dispute resolution.
