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

In Bitcoin's soft-fork activation process (e.g., BIP 9), miners signal support for new rules. Once enough blocks in a period show support (meeting the threshold), the network enters a 'locked-in' state. During this window, the community expects all participants to upgrade or ensure compatibility. After the locked-in period expires (often one difficulty period), the soft fork activates, and blocks must follow the new rules. This transition phase prevents sudden forks; it gives time for nodes to upgrade, avoiding confusion or chain splits.
