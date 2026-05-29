---
title: "Absolute Fee"
slug: absolute-fee
draft: false
shortDefinition: "A transaction fee set as a specific amount in satoshis or BTC, rather than a fee rate based on transaction size."
keyTakeaways:
  - "Flat amount paid regardless of transaction size"
  - "Can be convenient but risky if network conditions change"
  - "Useful when transaction size and timing are predictable"
sources: []
relatedTerms:
  - fee-bumping
  - fee-estimation
  - fee-rate-escalation
  - full-rbf
  - mempool
  - replace-fee-rbf
  - transaction-fee
liveWidget: ~
---

An absolute fee is a transaction fee expressed as a fixed amount (e.g., 5,000 sats) rather than a feerate (e.g., 30 sats/vB). Some wallets let users set fees this way; some expert-mode flows require it.

What miners actually optimize for is feerate (fee per virtual byte), because block space is the scarce resource and they want to maximize total fees per block. A 5,000-sat absolute fee on a 100-vbyte transaction is 50 sats/vB (likely fine); the same absolute fee on a 500-vbyte transaction is 10 sats/vB (likely stuck during congestion). The absolute number is meaningless without the size context.

Where absolute fee setting still makes sense:

- **Single-input single-output spends** with predictable size. If you know exactly how big the transaction will be, the absolute-fee number maps directly to a known feerate.
- **PSBT workflows.** Some PSBT signing flows require committing to a specific fee total before the final transaction size is known; absolute fee is the natural unit.
- **Educational demonstrations.** Explaining "this transaction paid X sats" is more concrete than "this transaction paid Y sats/vB."

Where it's a footgun:

- **Variable-size transactions.** A wallet building a transaction with multiple inputs and outputs of varying script types may not know the exact size until signing is done. Setting an absolute fee can either overpay (size came in smaller than expected) or underpay (size came in larger).
- **Fee-bumping.** RBF replacements need to clear specific feerate thresholds. Thinking in absolute terms makes it easy to under-bump.
- **During fee-rate escalation.** When the mempool clears at, say, 200 sats/vB, an absolute fee chosen based on yesterday's normal feerate will be wildly under-priced and the transaction will sit indefinitely.

Modern wallets default to feerate-based fee selection for a reason: it produces sensible behavior in variable network conditions. Absolute fee mode is a power-user tool, not a general default.
