---
title: "Replay Attack"
slug: replay-attack
draft: false
shortDefinition: "Reusing a valid transaction from one chain on another chain post-fork, potentially causing unintended fund transfers."
keyTakeaways:
  - "Arises when two chains share transaction formats and addresses post-fork"
  - "Can unintentionally spend the same UTXO on multiple networks"
  - "Mitigated via replay protection or distinct address formats"
sources: []
relatedTerms:
  - double-spend
  - double-spend-relay
  - eavesdropping-attack
  - eclipse-attack
  - griefing-attack
  - jamming-attack-ln
  - race-attack
  - reorg-reorganization
  - spv-simplified-payment-verification
liveWidget: ~
---

After a chain fork (like Bitcoin vs. Bitcoin Cash), a transaction broadcast on one chain may still be valid on the other if both share the same addresses/keys and no replay protection is implemented. Attackers can 'replay' your TX from chain A on chain B, unintentionally spending your funds there too. Solutions include unique transaction formats (replay protection), spending coins on each chain separately, or using address types only valid on one chain. Without such safeguards, users must carefully isolate coins after a fork to avoid accidental losses.
