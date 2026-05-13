---
title: "Consolidation Transaction"
slug: consolidation-transaction
draft: false
shortDefinition: "A transaction combining multiple small UTXOs into a single output, typically done during low-fee periods."
keyTakeaways:
  - "Combines small UTXOs into fewer, larger outputs"
  - "Reduces future transaction fees and wallet clutter"
  - "Can compromise privacy if inputs come from distinct addresses"
sources: []
relatedTerms:
  - batch-transaction
  - batching-optimizer
  - bitcoin-days-destroyed
  - coin-age
  - incremental-batching
  - transaction
  - transaction-chaining
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

Consolidation is like cleaning up a messy wallet filled with loose change. By bundling many small UTXOs (unspent transaction outputs) into one larger UTXO, users reduce future transaction fees and complexity. Wallets often recommend doing this when fees are cheap, so you don't pay high costs multiple times.
While consolidation helps manage UTXO count and can simplify wallet usage, it might also reduce privacy by merging different addresses in a single transaction. Observers can link what might have been separate clusters of your funds. Still, it remains a common strategy for companies or individuals who handle many small payments and want to streamline future spending.
