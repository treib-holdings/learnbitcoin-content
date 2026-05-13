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

BIP 152, described in [BIP-152](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki), introduced a more efficient block relay mechanism. Instead of transmitting full transaction data, nodes send short transaction IDs to peers who likely already have the mempool transactions. Think of it like a "fingerprint" list for each transaction, letting nodes quickly reconstruct the block.
By cutting down on redundant data, Compact Blocks reduce overall bandwidth, speed up block propagation, and help the network converge on the latest blocks faster. It's particularly useful during times of high transaction volumes, where saving every byte can improve node performance and reduce orphan rates.
