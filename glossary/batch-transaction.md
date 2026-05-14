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
  - consolidation-transaction
  - transaction
  - transaction-chaining
  - transaction-fee
liveWidget: ~
---

A batch transaction bundles multiple separate payments into one Bitcoin transaction with multiple outputs. Instead of `n` transactions each with their own inputs, fee overhead, and confirmation wait, you make one transaction paying `n` recipients at once.

The savings are real. A transaction's bytes are dominated by inputs (script, signature, witness data), not outputs. Adding a fifth output to a transaction adds maybe 30 vbytes; sending five separate transactions costs five full transactions worth of input overhead. Exchanges processing withdrawals, custodians paying out coupons, payroll services, mining pool payouts: all classic batch-transaction users. Coinbase Exchange's batched withdrawals are estimated to have saved millions of dollars in network fees over the years.

What you give up:

- Privacy for recipients. All n recipients are visible in one transaction. Chain analysis can cluster them as "paid by the same source on the same day" much more confidently than n separate transactions would allow.
- Atomicity in operational systems. If one recipient address is invalid or one payment needs to be reversed, you can't just amend it; the whole batch already broadcast or already confirmed.
- Variance in confirmation. The whole batch confirms together. If you mis-fee the batch, all recipients wait.

For high-volume operators, the fee savings dominate. For privacy-sensitive flows (donations, payroll where individual amounts shouldn't be linkable), separate transactions remain the right call. The honest answer is "it depends on whose privacy you're optimizing."
