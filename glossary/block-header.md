---
title: "Block Header"
slug: block-header
draft: false
updated: "2026-10-13"
shortDefinition: "The 80-byte summary at the top of a block: version, previous block hash, Merkle root, timestamp, difficulty target (bits), and nonce."
keyTakeaways:
  - "Contains the essential hashing elements for proof-of-work"
  - "Links to previous block and summarizes transactions via the Merkle root"
  - "Miners focus on finding a valid header hash to produce a new block"
sources:
  - { label: "Bitcoin Core - src/primitives/block.h: CBlockHeader fields nVersion, hashPrevBlock, hashMerkleRoot, nTime, nBits, nNonce (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/primitives/block.h" }
  - { label: "Bitcoin developer reference - Block Headers: 80-byte format, timestamp rules, nBits and nonce (accessed 2026-10-13)", url: "https://developer.bitcoin.org/reference/block_chain.html#block-headers" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, sections 7 and 8: 80 bytes * 6 * 24 * 365 = 4.2MB per year (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Wiki - Block hashing algorithm: the extraNonce field in the coinbase transaction (accessed 2026-10-13)", url: "https://en.bitcoin.it/wiki/Block_hashing_algorithm" }
  - { label: "Bitcoin Core - Release notes 0.10.0: headers-first synchronization (2015)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.10.0.md" }
  - { label: "BIP-130 - sendheaders message: announcing new blocks by header (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0130.mediawiki" }
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
sameAs:
  - "https://en.bitcoin.it/wiki/Block_hashing_algorithm"
liveWidget: ~
---

The block header is the 80-byte summary at the top of every Bitcoin block. It's tiny, but it's everything that matters for [proof-of-work](/glossary/proof-work-pow).

The six fields:

1. **Version** (4 bytes) - signals which protocol rules the block follows.
2. **Previous block hash** (32 bytes) - the hash of the prior block's header. This is what makes Bitcoin a *chain*.
3. **[Merkle root](/glossary/merkle-root)** (32 bytes) - a single hash that commits to every transaction in the block. Change any transaction and this changes.
4. **Timestamp** (4 bytes) - the miner's claim of when the block was mined. Loosely constrained: it must be later than the median of the previous 11 blocks' timestamps (the [median time past](/glossary/mtp-median-time-past)) and no more than two hours ahead of the receiving node's clock.
5. **Bits** (4 bytes) - a compact encoding of the current difficulty target.
6. **[Nonce](/glossary/nonce)** (4 bytes) - the field miners vary while searching for a valid hash.

To mine a block, you compute SHA-256(SHA-256(header)) and check whether the result is at or below the target encoded in *bits*. If not, change the nonce and try again. (When you exhaust all 4 billion nonce values, you tweak the [coinbase transaction](/glossary/coinbase-transaction)'s extranonce, which changes the Merkle root, and start over.)

Because a header is only 80 bytes, a node can check a block's proof-of-work before it has the block itself. Bitcoin Core has synced headers first since version 0.10 (2015), and since BIP 130 a peer can ask to have new blocks announced by their headers rather than by hash alone. Lightweight clients ([SPV](/glossary/spv-simplified-payment-verification) wallets) follow the chain by checking only the headers - about 4.2 MB per year, as the whitepaper worked out - without storing the gigabytes of full transaction data.

See [Mining rabbit hole](/rabbit-hole/mining) for the search process; [Block](/glossary/block) for what the header is summarizing.
