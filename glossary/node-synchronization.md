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

Node synchronization, almost always called Initial Block Download (IBD), is the process a fresh node goes through to catch up to the chain tip.

In 2026 the steps roughly are:

1. Connect to peers and download the full header chain (~880K headers). Minutes to a couple of hours.
2. Validate the header chain: proof-of-work, ancestry, difficulty adjustments.
3. Download all block bodies (around 600 GB total) and validate every transaction in every block. Slow: 12-24 hours on a fast NVMe SSD with a modern CPU, several days on a Raspberry Pi or a spinning disk.
4. Settle into "tip mode": only process new blocks as they arrive.

Speedups available:

- `assumevalid` ships with a recent block hash and tells the node "signatures in blocks before this are assumed valid." Skips script verification for old blocks; everything else still gets checked. Cuts IBD time by a large factor.
- `dbcache=<MB>` cranks the UTXO cache size. Big RAM = much faster IBD.
- Pruning (`-prune=<MB>`) discards old block data after validation, dropping disk usage to a few GB at the cost of not being able to serve historical blocks.

A node only does IBD once. After that, it just keeps up with the chain tip at ~10-minute intervals, which costs almost nothing. Offline for a few days, catch up is fast; for months, slower but still manageable.

The reason IBD takes hours instead of minutes is the same reason Bitcoin is secure: every signature on every transaction in every block gets verified locally. That's the work. Skipping it is what makes [light wallets](/glossary/spv-simplified-payment-verification) light.
