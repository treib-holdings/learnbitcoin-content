---
title: "Block Propagation"
slug: block-propagation
draft: false
shortDefinition: "The process by which newly mined blocks are transmitted among Bitcoin nodes worldwide."
keyTakeaways:
  - "Miners broadcast newly found blocks to peers"
  - "Efficient methods reduce bandwidth and orphan rates"
  - "Rapid propagation maintains global network consensus"
sources: []
relatedTerms:
  - bip-152-compact-blocks
  - bitcoin-satellite
  - block
  - block-explorer
  - block-header
  - block-height
  - block-time
  - blockchain
  - competitive-block-propagation
  - competitive-mining
  - reorg-reorganization
  - stale-block
liveWidget: ~
---

Block propagation is how a newly-mined block travels from the miner who found it to every other node on the network. Speed matters: until a peer hears about the new block, they're potentially still mining or building on the previous tip, and the longer that takes, the higher the chance of an [orphan / stale block](/glossary/miner-orphan-rate) collision.

The protocol-level optimizations:

- **Compact Blocks (BIP 152).** Instead of sending the full block (1.5+ MB), the sender transmits the header plus short transaction IDs. The receiver reconstructs the block from transactions it already has in its mempool. Bandwidth drops by an order of magnitude. In Bitcoin Core since 0.13 (2016).
- **High-bandwidth mode.** A node tells a few well-connected peers "send me compact blocks aggressively before validation completes." Reduces latency at the cost of bandwidth from those peers.
- **FIBRE / Falcon / similar networks.** Dedicated low-latency relay backbones run by miners and infrastructure providers. They use UDP, forward-error-correcting codes, and direct peering to push blocks across the globe in tens of milliseconds.
- **Bitcoin Satellite.** Blockstream's geostationary broadcast (covered in [bitcoin-satellite](/glossary/bitcoin-satellite)) provides a redundant non-internet path for block data.

Why all the engineering: every additional second of propagation latency adds proportional orphan risk for whichever miner is downstream. At a global scale this affects miner profitability, which is why the largest mining operations invest heavily in connectivity. The protocol level keeps improving so the playing field doesn't tilt entirely toward the best-connected.

Typical 2026 propagation: a new block reaches ~80% of reachable nodes within 5-8 seconds, and substantially everyone within 30 seconds.
