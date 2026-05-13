---
title: "Eltoo"
slug: eltoo
draft: false
shortDefinition: "A proposed LN channel update mechanism (requiring ANYPREVOUT) eliminating the need for penalty transactions."
keyTakeaways:
  - "Removes the penalty-based approach to outdated states"
  - "Relies on ANYPREVOUT to reference the latest valid transaction"
  - "Simplifies LN’s dispute mechanics for safer channel updates"
sources: []
relatedTerms:
  - anyprevout
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - payment-channel
  - penalty-transaction
liveWidget: ~
---

Eltoo reimagines how Lightning channels handle state updates. Instead of punishing a cheater who broadcasts an old channel state, it simply invalidates old states by referencing the newest transaction. This requires a new SIGHASH flag ([ANYPREVOUT](https://github.com/bitcoin/bips/blob/master/bip-0118.mediawiki)) to let the final transaction override earlier ones.
The advantage: no penalty transaction or forced security windows, reducing channel closure complexity and user error. If implemented, Eltoo could simplify off-chain contract logic, but it demands a soft-fork to enable ANYPREVOUT. Though not yet active, it remains a top contender for advancing LN’s robustness.
