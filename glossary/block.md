---
title: "Block"
slug: block
draft: false
shortDefinition: "A data structure grouping transactions, referencing the previous block hash to form the Bitcoin blockchain."
keyTakeaways:
  - "Groups valid transactions in a structured data format"
  - "Each block references the previous block’s hash"
  - "Proof-of-work secures the chain and prevents tampering"
sources: []
relatedTerms:
  - bip-22-getblocktemplate
  - bip-30
  - bip-34
  - bip-102-2mb-block-size
  - bip-152-compact-blocks
  - block-explorer
  - block-header
  - block-height
  - block-propagation
  - block-reward
  - block-size
  - block-subsidy
  - block-time
  - blockchain
liveWidget: ~
---

A block is like a page in Bitcoin’s ledger, containing a set of transactions verified within a certain timeframe (approximately every 10 minutes on average). Each block references the hash of its predecessor, creating a linked chain. This architecture ensures any tampering in one block invalidates all subsequent blocks.
Miners compete to find a valid proof-of-work for each block, securing the network and earning newly minted BTC plus transaction fees. Over time, these blocks collectively form the blockchain—a chronological, tamper-evident record of all Bitcoin transactions ever processed. It’s the fundamental building unit of Bitcoin’s consensus system.
