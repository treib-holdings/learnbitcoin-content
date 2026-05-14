---
title: "Transaction Chaining"
slug: transaction-chaining
draft: false
shortDefinition: "Broadcasting multiple transactions that depend on the outputs of earlier unconfirmed transactions."
keyTakeaways:
  - "Multiple unconfirmed TXs depend on each other's outputs"
  - "Mempool policies may restrict how many TXs can chain"
  - "Used in CPFP or rapid-fire sending before confirmations"
sources: []
relatedTerms:
  - consolidation-transaction
  - transaction
  - transaction-fee
liveWidget: ~
---

Transaction chaining is broadcasting a transaction that spends an output from an unconfirmed parent. The child sits in the mempool waiting for the parent (and potentially other ancestors) to confirm first.

It's normal and supported. Bitcoin doesn't make you wait for confirmations to spend your own outputs. But there are limits:

- Bitcoin Core's default policy caps unconfirmed chains at 25 ancestors / 25 descendants per transaction, with an aggregate weight ceiling. Beyond that, the chain becomes unrelayable, and miners won't include it.
- The whole chain confirms or fails together. If an ancestor gets evicted (because fees are too low or a conflicting tx replaces it), all descendants become invalid.
- Miners optimize for fee-per-vbyte across the chain as a unit. A high-fee child pulls a low-fee parent into a block (Child Pays For Parent, CPFP); a low-fee child stuck behind a low-fee parent goes nowhere.

Common use cases:

- CPFP fee bumping: parent transaction is under-fee'd; user (or recipient) spends one of its outputs in a child transaction at a much higher fee, paying for both.
- Rapid consecutive sends: exchange withdrawal flows, payment processors, anyone needing to issue multiple transactions in succession without waiting for confirmations between them.
- Lightning splice transactions and certain on-chain swap constructions that depend on a specific UTXO becoming available.

Long chains are fine as long as the cumulative fee rate makes the whole chain attractive to miners. They become a problem when the parent is so under-fee'd that it's stuck and CPFP can't save it before mempool eviction kicks in.
