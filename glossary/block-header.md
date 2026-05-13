---
title: "Block Header"
slug: block-header
draft: false
shortDefinition: "A compact ~80-byte summary of a block, containing version, previous block hash, Merkle root, timestamp, and nonce."
keyTakeaways:
  - "Contains the essential hashing elements for proof-of-work"
  - "Links to previous block and summarizes transactions via the Merkle root"
  - "Miners focus on finding a valid header hash to produce a new block"
sources: []
relatedTerms:
  - bip-22-getblocktemplate
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-height
  - block-propagation
  - block-time
  - blockchain
  - genesis-block
  - merkle-block
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
liveWidget: ~
---

The block header is like the 'cover' of a block, revealing crucial metadata without all the transaction details. It includes the previous block's hash (linking the chain), the Merkle root (hash of all included transactions), a timestamp, and the nonce-part of Bitcoin's proof-of-work puzzle.
Miners repeatedly modify the nonce and other fields to find a header whose hash meets the difficulty target. Once they succeed, the block is broadcast to the network. Because the block header is so much smaller than the full block, it's more efficient to share among miners and nodes when validating or propagating block information.
