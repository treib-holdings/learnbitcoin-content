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

Block propagation is like spreading the latest news headline across a global network of subscribers. When a miner finds a valid block, it immediately broadcasts the block data to its connected peers, which in turn relay it onward. Methods like [Compact Blocks (BIP 152)](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki) help reduce data overhead by sending shorter transaction IDs rather than full transaction sets.
Fast, efficient block propagation is critical for keeping the network in sync and minimizing the chance of competing blocks—otherwise known as orphans or stale blocks. Good connectivity among nodes also helps ensure consensus remains robust, as most honest participants will quickly learn about new blocks and continue building on the longest valid chain.
