---
title: "Soft Fork"
slug: soft-fork
draft: false
shortDefinition: "A backward-compatible change to Bitcoin’s consensus rules, valid if a majority of miners/nodes enforce it."
keyTakeaways:
  - "Backward-compatible rule changes tighten or add new constraints"
  - "Rely on miner/node majority support to activate"
  - "Non-upgraded nodes remain functional but miss nuances of new rules"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - bip-148-uasf
  - chain-split
  - consensus-parameter
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
liveWidget: ~
---

Soft forks tighten or extend existing rules so old nodes still see new blocks as valid, though they might not fully understand the new logic. Typically, a miner signaling threshold (e.g., BIP 9) is used to lock in the update once enough hash power agrees. Historic soft forks include SegWit, which introduced new witness data structures without invalidating older blocks. Nodes that don’t upgrade remain on the network but might not enforce the new constraints, relying on upgraded nodes and miners to reject invalid blocks according to the fork’s rules.
