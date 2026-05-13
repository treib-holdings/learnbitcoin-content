---
title: "Batch Transaction"
slug: batch-transaction
draft: false
shortDefinition: "A method of bundling multiple Bitcoin payments into a single on-chain transaction to save fees and reduce network load."
keyTakeaways:
  - "Combines multiple payments into one transaction"
  - "Decreases total fees and blockchain data usage"
  - "Requires trust in the entity performing the batch"
sources: []
relatedTerms:
  - batching-optimizer
  - consolidation-transaction
  - incremental-batching
  - transaction
  - transaction-chaining
  - transaction-fee
liveWidget: ~
---

A batch transaction is like going grocery shopping for all your friends at once instead of each person driving separately. By consolidating several outputs into a single transaction, you spread the fixed cost (inputs, transaction overhead) across multiple payments. Exchanges and high-volume services often use batching to reduce transaction fees and lessen blockchain congestion.
For recipients, their funds still arrive as separate outputs corresponding to each address. The main difference is that all those outputs share the same transaction ID. Batching can save a substantial amount in fees if you’re sending payments in bulk. However, it can also slightly reduce privacy if all recipients are visible in one transaction, so some businesses have to weigh convenience against potential privacy concerns.
