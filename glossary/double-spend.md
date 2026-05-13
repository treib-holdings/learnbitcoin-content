---
title: "Double Spend"
slug: double-spend
draft: false
shortDefinition: "Attempting to use the same UTXO more than once, which Bitcoin's consensus rules prevent once a transaction is confirmed."
keyTakeaways:
  - "Bitcoin's ledger logic invalidates previously spent outputs"
  - "Conflicts are resolved by miners building on one valid chain"
  - "Multiple confirmations drastically reduce double-spend risk"
sources: []
relatedTerms:
  - bip-30
  - bip-34
  - difficulty
  - double-spend-relay
  - energy-fud
  - full-validation
  - race-attack
  - reorg-reorganization
  - replay-attack
  - spv-simplified-payment-verification
liveWidget: ~
---

A double spend is the fundamental attack Bitcoin was designed to thwart. If you try to send the same coins to multiple addresses, only one transaction can be confirmed on the legitimate chain. Nodes reject any other transaction that tries to use those already-spent outputs. On rare occasions, if a block reorganization occurs at the same moment a transaction is confirmed, there's a tiny window where a transaction might be replaced on a reorganized chain. But once a transaction is several blocks deep, it becomes nearly impossible to reverse it without overwhelming the network's total hashing power.
