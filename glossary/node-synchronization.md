---
title: "Node Synchronization"
slug: node-synchronization
draft: false
shortDefinition: "The process of downloading and validating all blocks when a node starts or reconnects after downtime."
keyTakeaways:
  - "Ensures a node has the entire verified blockchain history"
  - "Time-consuming for older nodes or large backlogs"
  - "Crucial for independent, trust-minimized operation"
sources: []
relatedTerms:
  - bitcoin-knots
  - bitcoin-satellite
  - corrupted-chain-state
  - dedicated-ip-nodes
  - full-node
  - full-validation
  - headless-node
  - hidden-service-node
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-uptime
liveWidget: ~
---

On first run, a full node fetches the blockchain from peers, verifying block headers, then each block's transactions and scripts. This can take days for slow hardware or networks. Once in sync, the node only processes new blocks as they appear. If a node has been offline for a while, it catches up by downloading the missing blocks. Synchronization ensures the node has the latest canonical chain state, so it can accurately accept or reject new transactions. 'Fast sync' or pruning modes reduce storage by discarding spent data, but validation still checks the entire chain.
