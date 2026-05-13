---
title: "Incremental Batching"
slug: incremental-batching
draft: false
shortDefinition: "Continuously adding new outputs to a single transaction until a threshold is met, then broadcasting it for fee savings."
keyTakeaways:
  - "Aggregates multiple payouts into a single on-chain transaction"
  - "Drastically lowers aggregate fees compared to individual sends"
  - "Users may face minor delays but benefit from reduced costs"
sources: []
relatedTerms:
  - batch-transaction
  - batching-optimizer
  - consolidation-transaction
  - transaction
  - transaction-chaining
  - transaction-fee
liveWidget: ~
---

Incremental batching is a technique where a service-say, an exchange-collects withdrawal requests over time. Instead of sending each withdrawal in a separate transaction, it merges them into one. The transaction is only broadcast when it hits a certain size limit or after a set time window. Because transaction fees depend heavily on the number of inputs and overall bytes, bundling many outputs into one transaction often lowers the per-withdrawal cost.
The trade-off is a slight delay for users waiting to be included in the batch, but it can yield substantial savings, especially during high-fee periods. It also reduces blockchain load, aligning with best practices for efficiency and user cost reductions.
