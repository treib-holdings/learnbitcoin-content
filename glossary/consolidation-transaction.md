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
  - bitcoin-days-destroyed
  - coin-age
  - transaction
  - transaction-chaining
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

A consolidation transaction takes many small [UTXOs](/glossary/utxo-unspent-transaction-output) and combines them into one larger output. It's the cleanup pass for a wallet that's accumulated lots of small inputs over time.

The motivation is fee efficiency. Every input in a [transaction](/glossary/transaction) takes up bytes (roughly 68-148 depending on script type), and bigger transactions cost more in [fees](/glossary/fee-estimation). If you have 50 small UTXOs and want to spend them later, every future transaction that touches multiple of them pays for all those input bytes. Consolidating during a low-fee period means paying once for the bytes now, saving on every spend after.

The practical recipe:

1. **Wait for a low-fee window.** Watch the [mempool](/glossary/mempool) and consolidate when next-block fees drop to 1-3 sat/vB. Idle weekends and post-rally calm periods are common windows.
2. **Pick the UTXOs deliberately.** Consolidating UTXOs from different sources publicly links them. If you've been carefully keeping certain addresses separate for privacy reasons, do *not* combine them in one consolidation transaction.
3. **Send to a fresh address** in your own wallet. The output is a single new UTXO controlled by you.

The privacy tradeoff is real. Consolidation tells the public chain: "these UTXOs all share an owner." If they came from KYC sources or distinct identity contexts, you've just linked them. The right move when privacy matters is to consolidate UTXOs that are *already publicly linked* (came from the same source, were already used together) rather than mixing isolated ones.

Exchanges and merchants do this routinely as ordinary operations. Individual users typically consolidate every few months if at all. See [Dust](/glossary/dust) for the small-UTXO problem this addresses.
