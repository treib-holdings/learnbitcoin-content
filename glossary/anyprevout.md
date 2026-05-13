---
title: "ANYPREVOUT"
slug: anyprevout
draft: false
shortDefinition: "A proposed SIGHASH flag (BIP-118) enabling partially signed transactions without strictly binding to specific inputs, unlocking advanced Layer-2 protocols."
keyTakeaways:
  - "New SIGHASH type that loosens input binding"
  - "Key for advanced Layer-2 designs (e.g., Eltoo)"
  - "Still under active development and review"
sources: []
relatedTerms:
  - eltoo
  - payment-channel
  - sighash
  - sighashanyonecanpay
  - sighashsingle
liveWidget: ~
---

ANYPREVOUT is like giving your future self the power to revise which piggy bank is being spent, without changing the overall transaction conditions. Defined in [BIP-118](https://github.com/bitcoin/bips/blob/master/bip-0118.mediawiki), it lets you sign a transaction in a way that doesn’t lock in the precise outputs being spent. Instead, it focuses on ensuring the rules of the transaction remain intact.
This flexibility is crucial for protocols like Eltoo, which allow state updates on second-layer networks without complex penalty transactions. ANYPREVOUT can help reduce the risk of errors and keep the on-chain footprint minimal. While it’s still a proposal, developers see it as a stepping stone toward more agile payment channels and robust multi-party transaction flows.
