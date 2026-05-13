---
title: "Mempool"
slug: mempool
draft: false
shortDefinition: "A node's local 'waiting room' for unconfirmed transactions, which miners draw from when creating new blocks."
keyTakeaways:
  - "Holds pending transactions awaiting confirmation"
  - "Policies differ, so not all nodes have identical mempools"
  - "Fee estimation and RBF rely heavily on mempool dynamics"
sources: []
relatedTerms: []
liveWidget: ~
---

When you broadcast a Bitcoin transaction, it goes to the mempool (memory pool) of each node, waiting until a miner includes it in a block. Each node maintains its own mempool policy-like minimum fee or size limits-so mempools can differ. During congestion, lower-fee transactions may linger for extended periods or get dropped. Tools like fee estimation analyze the mempool's state to suggest fees that will confirm in a target timeframe. Once a transaction confirms, it's removed from the mempool.
