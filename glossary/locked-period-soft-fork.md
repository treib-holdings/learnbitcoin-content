---
title: "Locked-In Period (Soft Fork)"
slug: locked-period-soft-fork
draft: false
shortDefinition: "A stage after a soft-fork signaling threshold is met but before the new consensus rules become active on the network."
keyTakeaways:
  - "Threshold met → locked in → waiting period → final activation"
  - "Prevents abrupt rule changes so nodes can update smoothly"
  - "Miners and users must align before rules become mandatory"
sources: []
relatedTerms:
  - bip-9-versionbits
  - bip-91
  - bip-119-ctv
  - bip-148-uasf
  - chain-flag-day
  - consensus-parameter
  - deployment-threshold-soft-fork
  - soft-fork
liveWidget: ~
---

The locked-in period is the waiting window between a soft fork meeting its signaling threshold and the new consensus rules actually taking effect.

In BIP 9 versionbits, the sequence is:

1. Started: signaling open, miners can set the version bit if they support the upgrade.
2. Locked-in: threshold met (historically 95% of blocks in a 2016-block period). The outcome is now committed; the upgrade will activate.
3. Active: rules take effect. Blocks that violate the new rules are rejected.

The gap between Locked-in and Active is the "locked-in period," typically one full retarget interval (~2 weeks). Its purpose is operational: node operators who haven't upgraded yet have a defined window to do so. Wallets, exchanges, and infrastructure can announce final compatibility status. Miners who weren't signaling can ensure their software is updated. The transition then happens at a known, predictable height with everyone forewarned.

Under Speedy Trial (used for Taproot), the same idea applies: lock-in is followed by a fixed delay before active. The mechanics changed but the operational rationale didn't. Sudden activation, even of a positive change, increases the risk of stale software hitting a wall and orphaning blocks or rejecting valid transactions. The lock-in period is a coordination courtesy that turned out to be load-bearing.
