---
title: "PayJoin"
slug: payjoin
draft: false
shortDefinition: "A collaborative transaction (a.k.a. P2EP) where sender and receiver both add inputs, obscuring usual input-output analysis."
keyTakeaways:
  - "Both sides contribute inputs to a single transaction"
  - "Breaks simplistic chain analysis assumptions"
  - "Requires special wallet support but can happen on-the-fly"
sources: []
relatedTerms:
  - address-clustering
  - address-reuse
  - coin-plasma
  - coinjoin
  - gadget-utxo
  - mixing-service
  - shielded-coinjoin
  - stealth-address
liveWidget: ~
---

PayJoin works by having the recipient provide one of its own UTXOs as an input in the same transaction as the sender. This disrupts common heuristics like 'all inputs are controlled by the same entity' or typical change detection. Observers see a transaction that looks less straightforward-some outputs might belong to the sender, some to the receiver, but it's not obvious. PayJoin requires coordination between sender and receiver wallets, and can be used in e-commerce or personal trades. It's not as large-scale as a CoinJoin, but it significantly boosts privacy for both parties.
