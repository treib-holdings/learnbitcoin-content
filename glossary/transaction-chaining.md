---
title: "Transaction Chaining"
slug: transaction-chaining
draft: false
shortDefinition: "Broadcasting multiple transactions that depend on the outputs of earlier unconfirmed transactions."
keyTakeaways:
  - "Multiple unconfirmed TXs depend on each other’s outputs"
  - "Mempool policies may restrict how many TXs can chain"
  - "Used in CPFP or rapid-fire sending before confirmations"
sources: []
relatedTerms:
  - consolidation-transaction
  - incremental-batching
  - transaction
  - transaction-fee
liveWidget: ~
---

In normal usage, each transaction must wait for prior outputs to confirm, ensuring clear ownership. However, sometimes you chain transactions: TX2 spends the output from TX1 even before TX1 confirms. While this can work, miners may limit how many chained unconfirmed transactions they relay, to avoid spam or complex mempool dependencies. Users chain transactions for convenience—like building a Child Pays for Parent (CPFP) scenario to bump fees or to handle quick consecutive sends. Careful fee management is crucial so that miners have enough incentive to confirm the entire chain rather than dropping low-fee ancestors.
