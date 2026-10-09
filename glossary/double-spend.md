---
title: "Double Spend"
slug: double-spend
draft: false
updated: "2026-10-09"
shortDefinition: "Attempting to use the same UTXO more than once, which Bitcoin's consensus rules prevent once a transaction is confirmed."
keyTakeaways:
  - "Bitcoin's ledger logic invalidates previously spent outputs"
  - "Conflicts are resolved by miners building on one valid chain"
  - "Multiple confirmations drastically reduce double-spend risk"
sources:
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double spending (2012), Table 1: 0.059% for a 10% attacker and 15.6% for a 30% attacker at six confirmations", url: "https://arxiv.org/abs/1402.2009" }
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
  - transaction-finality
liveWidget: ~
---

A double spend is when someone tries to spend the same Bitcoin twice. It's the central problem Bitcoin was invented to solve.

In a digital system without trusted intermediaries, there's no obvious reason you can't make two copies of a payment and broadcast both. Earlier digital cash projects (DigiCash, e-gold, others) handled this by routing every transaction through a central server that maintained a single authoritative ledger. The server prevented double spends; the server was also a single point of failure and trust.

Bitcoin's design eliminates the server. Instead, the global UTXO set is replicated across every full node, and every node enforces the rule: once a [UTXO](/glossary/utxo-unspent-transaction-output) has been spent, no other transaction can reference it. Try to spend the same UTXO twice and your second transaction is rejected by every honest node it reaches.

The remaining edge case is what happens *before* a transaction confirms. While in the [mempool](/glossary/mempool), two conflicting transactions can race. Whichever gets mined first wins; the other becomes invalid the moment a block including its rival is found. This is why zero-confirmation transactions aren't truly final - and why the Bitcoin community uses the **6-confirmation rule** for large amounts.

After six confirmations (about an hour), an attacker would have to secretly build a longer replacement chain faster than the honest network extends the real one. Meni Rosenfeld's 2012 analysis puts the odds at about 1 in 1,700 for an attacker with 10% of the global hash rate and about 1 in 6 for one with 30%, and an attacker with more than half is sure to win eventually. Below half, the odds shrink exponentially with each extra confirmation. That is the practical shape of [transaction finality](/glossary/transaction-finality) on Bitcoin.

Bitcoin's security against double spends is what proof-of-work *buys*. See the [Mining rabbit hole](/rabbit-hole/mining) for why the energy spent isn't waste - it's the cost of making the ledger forgery-resistant.

For a real double spend against a payment processor during a chain split, with the transactions still checkable, see [The 2013 Chain Fork](/rabbit-hole/2013-chain-fork).
