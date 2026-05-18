---
title: "Block Height"
slug: block-height
draft: false
shortDefinition: "The count of blocks since the genesis block (which is at height 0)."
keyTakeaways:
  - "Counts blocks from the original genesis block"
  - "Used for referencing specific points in the blockchain"
  - "Essential for protocol events tied to block intervals"
sources: []
relatedTerms:
  - bip-30
  - bip-34
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-header
  - block-propagation
  - block-time
  - blockchain
  - difficulty-retargeting
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
sameAs:
  - "https://en.bitcoin.it/wiki/Confirmation"
liveWidget: ~
---

Block height is the number of blocks between any given block and the [genesis block](/glossary/genesis-block), which sits at height 0. Block 1 is one above genesis. Block 840,000 - where the most recent [halving](/glossary/halving-halvening) occurred - is 840,000 above it.

Height is the canonical way to refer to a point in Bitcoin's history. Timestamps are imprecise (miners control their own clocks within a window). Dates depend on calendar conventions. But block heights are integer, monotonic, and identical for every node on the network.

Most of Bitcoin's protocol-level events are scheduled by height, not by date:

- **[Halvings](/glossary/halving-halvening)** happen at heights 210,000, 420,000, 630,000, and so on (every 210,000).
- **[Difficulty retargets](/glossary/difficulty-retargeting)** happen at heights that are multiples of 2,016.
- **Soft forks** (Taproot, SegWit, BIP-66, etc.) activate when a target height is reached or signaling thresholds clear in a retarget window.

If you want a single number that locates "what's happening on Bitcoin right now," it's the current block height. See the [Node page](/node/) for the live current height.
