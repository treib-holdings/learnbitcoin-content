---
title: "Merkle Block"
slug: merkle-block
draft: false
shortDefinition: "A stripped-down block sent to SPV clients, containing only headers and minimal Merkle paths for relevant transactions."
keyTakeaways:
  - "Used by SPV wallets to confirm specific transactions in a block"
  - "Contains minimal data: block header + Merkle path"
  - "Saves bandwidth/storage, enabling lightweight verification"
sources: []
relatedTerms:
  - adaptive-block-filter
  - bip-37
  - bip-158
  - block-header
  - bloom-filter
  - efficient-range-proof
  - merkle-inclusion-proof
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
liveWidget: ~
---

A Merkle block is a Bitcoin peer-to-peer message ([defined in BIP-37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki)) that a [full node](/glossary/full-node) sends to an [SPV](/glossary/spv-simplified-payment-verification) client. It contains:

- The full [block header](/glossary/block-header) (80 bytes).
- A list of transactions in the block that match the SPV client's [Bloom filter](/glossary/bloom-filter).
- A [Merkle proof](/glossary/merkle-proof) showing those transactions are committed in the block's [Merkle root](/glossary/merkle-root).

This is what lets a phone wallet check whether *its* transactions appeared in the latest block, without downloading the whole block.

The downside, which has gotten more attention over the years: **Bloom filters leak privacy**. The SPV client sends its filter to the full node, which can probabilistically reverse-engineer which addresses or transactions the client cares about. For a privacy-conscious user, this is a meaningful concern - one that BIP-37 didn't anticipate when it was written in 2012.

The modern replacement is **[BIP-157/158](/glossary/bip-158) compact block filters**: the *server* computes a filter per block, the *client* downloads it and checks for matches locally without revealing which addresses are theirs. Better privacy at modest bandwidth cost. Most modern SPV-style mobile wallets (Phoenix, Mutiny, Breez, etc.) use this approach rather than BIP-37 Merkle blocks.

Merkle blocks still work and are still implemented by Bitcoin Core, but their use has been deprecated in many parts of the modern wallet ecosystem.
