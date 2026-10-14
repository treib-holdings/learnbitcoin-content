---
title: "Block"
slug: block
draft: false
updated: "2026-10-13"
shortDefinition: "A data structure grouping transactions, referencing the previous block hash to form the Bitcoin blockchain."
keyTakeaways:
  - "Groups valid transactions in a structured data format"
  - "Each block references the previous block's hash"
  - "Proof-of-work secures the chain and prevents tampering"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, sections 3 to 6 (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin developer reference - Block Headers: previous block header hash and merkle root (accessed 2026-10-13)", url: "https://developer.bitcoin.org/reference/block_chain.html#block-headers" }
  - { label: "Bitcoin Core - src/kernel/chainparams.cpp: nSubsidyHalvingInterval = 210000, nPowTargetSpacing = 10 * 60 (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core - src/validation.cpp: GetBlockSubsidy (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "mempool.space - Block 840000, first block of the 3.125 BTC subsidy era (2024-04-20)", url: "https://mempool.space/block/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5" }
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
sameAs:
  - "https://en.wikipedia.org/wiki/Blockchain"
  - "https://www.wikidata.org/wiki/Q20514253"
  - "https://en.bitcoin.it/wiki/Block"
liveWidget: liveBlockHeight
---

A block is a batch of Bitcoin transactions that have been verified together, sealed by [proof-of-work](/glossary/proof-work-pow), and timestamped about every 10 minutes. Think of it as a page in a ledger that everyone in the world has a copy of - and that everyone is checking against everyone else's copy.

Every block contains the hash of the previous block in its header. That's what makes it a *chain*: tamper with block 800,000, and every block after it points to the wrong hash. Your forgery is obvious to every node on Earth the moment it checks.

[Miners](/glossary/miner) compete to find a valid proof-of-work for the next block. The first one to succeed gets a fresh [block subsidy](/glossary/block-subsidy) (3.125 BTC since block 840,000 in April 2024, halving every 210,000 blocks) plus the fees from every transaction they pack in. That's the entire incentive structure keeping the chain growing. For the mechanism in detail, see the [Mining rabbit hole](/rabbit-hole/mining).

Below is the latest block accepted by the Bitcoin node powering [ChainQuery](https://chainquery.com). Refresh this page in about 10 minutes and the number should change.
