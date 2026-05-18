---
title: "Double Spend Relay"
slug: double-spend-relay
draft: false
shortDefinition: "A node policy or tool that forwards conflicting transactions to detect (or broadcast warnings about) potential double spends."
keyTakeaways:
  - "Relays conflicting TXs rather than discarding them"
  - "Helps merchants spot double spends for zero-conf payments"
  - "Useful but doesn't replace waiting for confirmations"
sources: []
relatedTerms:
  - double-spend
  - race-attack
  - reorg-reorganization
  - replay-attack
  - transaction
liveWidget: ~
---

Double-spend relay is the practice of propagating conflicting (mutually-incompatible) unconfirmed transactions through the P2P network so that merchants and services can detect double-spend attempts in real time.

By default, a Bitcoin Core node accepts the first version of a transaction it sees and silently drops any conflicting versions that arrive later. That's fine for the node's own bookkeeping but bad for anyone trying to detect a [race attack](/glossary/race-attack): if Alice sends one tx to the merchant and a conflicting tx to most of the network, the merchant's node never hears about the conflict until the wrong one confirms.

Double-spend relay flips that default. When a conflicting transaction arrives, the node forwards it to peers (typically with a flag indicating it's a conflict) so monitoring services can see both versions and raise an alert.

Where this matters:

- **Zero-conf merchants.** Coffee shops, point-of-sale terminals, and instant-settlement services that accept payments before confirmation rely on double-spend monitoring to flag suspicious activity. Bitrefill, mempool.space, and various commercial monitoring services consume the relay.
- **Mempool monitoring infrastructure.** Block explorers and chain-analysis tools track conflict events as signals.
- **Research.** Studying real-world race-attack rates and mempool behavior.

The flip side: the full-RBF default in Bitcoin Core 28.0 (2024) means most transactions are explicitly replaceable, so "conflict relay" is now closer to "RBF replacement relay" - a feature, not an attack signal. Genuine attempted double-spends (non-RBF conflicts) are now rare because zero-conf reliance on unmarked-final transactions has largely been abandoned in favor of Lightning or waiting for confirmations.
