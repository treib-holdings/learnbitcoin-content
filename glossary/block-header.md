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

The block header is the 80-byte summary at the top of every Bitcoin block. It's tiny, but it's everything that matters for [proof-of-work](/glossary/proof-work-pow).

The six fields:

1. **Version** (4 bytes) - signals which protocol rules the block follows.
2. **Previous block hash** (32 bytes) - the hash of the prior block's header. This is what makes Bitcoin a *chain*.
3. **[Merkle root](/glossary/merkle-root)** (32 bytes) - a single hash that commits to every transaction in the block. Change any transaction and this changes.
4. **Timestamp** (4 bytes) - the miner's claim of when the block was mined. Loosely constrained.
5. **Bits** (4 bytes) - a compact encoding of the current difficulty target.
6. **[Nonce](/glossary/nonce)** (4 bytes) - the field miners vary while searching for a valid hash.

To mine a block, you compute SHA-256(SHA-256(header)) and check whether the result is below the target encoded in *bits*. If not, change the nonce and try again. (When you exhaust all 4 billion nonce values, you tweak the coinbase transaction's extranonce, which changes the Merkle root, and start over.)

The reason headers are only 80 bytes is so miners can broadcast and verify them cheaply. A miner finding a valid block sends out the header first, lets the network verify the proof-of-work, and propagates the full block in parallel. Lightweight clients (SPV wallets) can validate the chain by checking just the headers - 4 MB per year, total - without storing the gigabytes of full transaction data.

See [Mining rabbit hole](/rabbit-hole/mining) for the search process; [Block](/glossary/block) for what the header is summarizing.
