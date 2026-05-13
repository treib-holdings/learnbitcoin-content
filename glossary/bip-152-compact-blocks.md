---
title: "BIP 152 (Compact Blocks)"
slug: bip-152-compact-blocks
draft: false
shortDefinition: "A method allowing nodes to propagate newly mined blocks using short transaction IDs, reducing bandwidth use."
keyTakeaways:
  - "Minimizes redundant transaction data during block relay"
  - "Speeds up network convergence on new blocks"
  - "Reduces bandwidth usage for full nodes"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block
  - block-header
  - block-height
  - block-propagation
  - block-time
  - blockchain
liveWidget: ~
---

[BIP-152](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki) defines **compact block relay**, the protocol Bitcoin nodes use to propagate newly-mined blocks efficiently. Activated in Bitcoin Core in 2016, it dramatically reduced the bandwidth and latency of block propagation.

The problem it solves: when a new block is found, every node on the network needs to receive it as quickly as possible. Slow propagation means stale-block rates go up, which hurts miners and makes the network less efficient overall. Naively sending the full block to every peer is wasteful - if those peers already have most of the transactions in their [mempools](/glossary/mempool), you'd be sending data they already have.

How compact blocks work:

1. **New block arrives.** A miner publishes a new block.
2. **The relay sends a compact summary first.** Instead of the full block, peers receive the block header plus a list of short transaction IDs (6-byte hashes) of every transaction in the block.
3. **Each peer checks its mempool.** For every short ID, it tries to find the matching transaction in its own mempool. Hits are filled in locally.
4. **Peer requests the misses.** Any transactions the peer didn't already have are requested explicitly.
5. **Block reconstruction.** With most transactions already in mempool and the few missing ones now fetched, the peer reconstructs the full block and validates it.

Typical bandwidth savings: ~90%+ for well-connected nodes whose mempools are mostly synced with the network's. The block-propagation time drops from seconds to hundreds of milliseconds, which keeps stale block rates low and the network healthy.

Compact block relay is silently load-bearing for Bitcoin's network performance. Most users never know it exists.
