---
title: "Blockchain"
slug: blockchain
draft: false
shortDefinition: "A distributed ledger linking transaction batches (blocks) via cryptographic hashes, ensuring tamper-evident data history."
keyTakeaways:
  - "Each block cryptographically links to its predecessor"
  - "Forms a chronological, tamper-evident transaction record"
  - "Underpins Bitcoin’s decentralized trust model"
sources: []
relatedTerms:
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-header
  - block-height
  - block-propagation
  - block-size
  - block-time
  - fork-detection
  - genesis-block
  - market-depth
  - reorg-reorganization
  - stale-block
liveWidget: ~
---

A blockchain is Bitcoin’s core innovation: each block references the previous block’s hash, forming a continuous chain. This creates a tamper-evident record-altering any past block invalidates all subsequent references. The entire network collectively maintains and verifies this ledger, preventing a single point of failure.
Beyond Bitcoin, many other projects have adopted the ‘blockchain’ structure for various purposes, though not all share Bitcoin’s proof-of-work or decentralization ethos. In Bitcoin, the blockchain’s role is straightforward and robust: store and secure transaction data in a way that’s transparent, verifiable, and extremely resistant to modifications.
