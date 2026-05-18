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

A double spend is when someone tries to spend the same Bitcoin twice. It's the central problem Bitcoin was invented to solve.

In a digital system without trusted intermediaries, there's no obvious reason you can't make two copies of a payment and broadcast both. Earlier digital cash projects (DigiCash, e-gold, others) handled this by routing every transaction through a central server that maintained a single authoritative ledger. The server prevented double spends; the server was also a single point of failure and trust.

Bitcoin's design eliminates the server. Instead, the global UTXO set is replicated across every full node, and every node enforces the rule: once a [UTXO](/glossary/utxo-unspent-transaction-output) has been spent, no other transaction can reference it. Try to spend the same UTXO twice and your second transaction is rejected by every honest node it reaches.

The remaining edge case is what happens *before* a transaction confirms. While in the [mempool](/glossary/mempool), two conflicting transactions can race. Whichever gets mined first wins; the other becomes invalid the moment a block including its rival is found. This is why zero-confirmation transactions aren't truly final - and why the Bitcoin community uses the **6-confirmation rule** for large amounts. After six blocks (~60 minutes), reversing the transaction would require an attacker to secretly mine six replacement blocks faster than the entire honest network mines them. That requires more than half the global hash rate, sustained, and even then succeeds only probabilistically.

Bitcoin's security against double spends is what proof-of-work *buys*. See the [Mining rabbit hole](/rabbit-hole/mining) for why the energy spent isn't waste - it's the cost of making the ledger forgery-resistant.
