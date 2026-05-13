---
title: "Pruning Mode"
slug: pruning-mode
draft: false
shortDefinition: "A feature in Bitcoin Core that discards older block data after validation, minimizing disk usage while preserving node security."
keyTakeaways:
  - "Enables running a full node with reduced disk space"
  - "Fully validates once but discards old blocks after syncing"
  - "Ideal for space-limited users but can’t provide deep historical data"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - graph-pruning
liveWidget: ~
---

In pruning mode, a node keeps only the most recent blocks (e.g., last few GBs) and discards older ones. It still validates the entire chain initially, ensuring full security. Once validated, storing ancient blocks is optional—pruned nodes cannot serve historical block data to other peers. Pruning helps those with limited storage run a full node, enforcing consensus without hosting the entire blockchain. It’s especially useful on smaller devices or servers with constrained disk capacity, though it limits certain functions (like serving historical queries or re-scanning old transactions).
