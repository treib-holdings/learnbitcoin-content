---
title: "Node Synchronization"
slug: node-synchronization
draft: false
updated: "2026-10-09"
shortDefinition: "The process of downloading and validating all blocks when a node starts or reconnects after downtime."
keyTakeaways:
  - "Ensures a node has the entire verified blockchain history"
  - "Time-consuming for older nodes or large backlogs"
  - "Crucial for independent, trust-minimized operation"
sources:
  - { label: "Blockchain.com - blockchain size chart (774,075 MB on October 8, 2026)", url: "https://www.blockchain.com/explorer/charts/blocks-size" }
  - { label: "mempool.space - block explorer (chain tip at block 970,676 on October 9, 2026)", url: "https://mempool.space" }
  - { label: "Bitcoin Core 31 - intro.cpp (with pruning on, the setup screen estimates the prune target plus the chain state)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/qt/intro.cpp" }
  - { label: "Bitcoin Core 31 - chainparams.cpp (mainnet chain state guideline 14 GB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core 31 - guiconstants.h (default GUI prune target 2 GB, so about 16 GB in all)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/qt/guiconstants.h" }
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

1. Connect to peers and download the full header chain (about 970,000 headers as of October 2026). Minutes to a couple of hours.
2. Validate the header chain: proof-of-work, ancestry, difficulty adjustments.
3. Download all block bodies (about 775 GB as of October 2026) and validate every transaction in every block. Slow: 12-24 hours on a fast NVMe SSD with a modern CPU, several days on a Raspberry Pi or a spinning disk.
4. Settle into "tip mode": only process new blocks as they arrive.

Speedups available:

- `assumevalid` ships with a recent block hash and tells the node "signatures in blocks before this are assumed valid." Skips script verification for old blocks; everything else still gets checked. Cuts IBD time by a large factor.
- `dbcache=<MB>` cranks the UTXO cache size. Big RAM = much faster IBD.
- Pruning (`-prune=<MB>`) discards old block data after validation, at the cost of not being able to serve historical blocks. Bitcoin Core 31 puts disk use at about 16 GB with its default GUI prune target.

A node only does IBD once. After that, it just keeps up with the chain tip at ~10-minute intervals, which costs almost nothing. Offline for a few days, catch up is fast; for months, slower but still manageable.

The reason IBD takes hours instead of minutes is the same reason Bitcoin is secure: every signature on every transaction in every block gets verified locally. That's the work. Skipping it is what makes [light wallets](/glossary/spv-simplified-payment-verification) light.
