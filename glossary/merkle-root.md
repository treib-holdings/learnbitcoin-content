---
title: "Merkle Root"
slug: merkle-root
draft: false
updated: "2026-10-13"
shortDefinition: "The single 32-byte hash at the top of a block's Merkle tree, summarizing all included transactions."
keyTakeaways:
  - "Final hash encapsulating every transaction in the block"
  - "Integral to proof-of-work since miners hash the block header"
  - "One small alteration in transactions would break the chain of hashes"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, sections 7 and 8 (2008): transactions are hashed in a Merkle Tree with only the root included in the block's hash; a light client keeps the block headers and obtains the Merkle branch linking a transaction to its block", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin.org Developer Reference - Block Chain, block headers and merkle trees: the merkle root is a SHA256(SHA256()) hash derived from all the TXIDs in the block; if all 32-bit nonce values are tested, the coinbase transaction can be changed and the merkle root updated", url: "https://developer.bitcoin.org/reference/block_chain.html" }
  - { label: "Bitcoin.org Developer Guide - Block Chain, merkle trees and SPV: hashes are paired, hashed, paired again and hashed again until a single hash remains; to verify one of five transactions an SPV client needs only three intermediate hashes plus the merkle root", url: "https://developer.bitcoin.org/devguide/block_chain.html" }
  - { label: "Bitcoin.org Developer Guide - Mining: the mining hardware iterates through every possible nonce; if none works it gets a new header with a new merkle root, made by adding extra nonce data to the coinbase transaction", url: "https://developer.bitcoin.org/devguide/mining.html" }
  - { label: "BIP-37 - Connection Bloom filtering (2012): a merkleblock message is a block header plus part of a merkle tree, proving that the matching transactions really appeared in the block", url: "https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki" }
  - { label: "BIP-141 - Segregated Witness, Consensus layer (2015): block weight must be at most 4,000,000", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
relatedTerms:
  - bip-37
  - bip-158
  - block-header
  - block-size
  - bloom-filter
  - chain-visualization
  - hash
  - merkle-block
  - merkle-inclusion-proof
  - merkle-tree-merkle-root
  - merkleized-abstract-syntax-tree-mast
  - merkle-proof
  - spv-simplified-payment-verification
liveWidget: ~
---

The Merkle root is the single 32-byte hash sitting in every [block header](/glossary/block-header) that commits to every transaction in the block.

It's computed by building a [Merkle tree](/glossary/merkle-tree-merkle-root) over the block's transaction IDs: pair them up, hash each pair, then pair the resulting hashes, then pair those, until one hash remains. That final hash is the Merkle root.

Three things make it load-bearing:

1. **It binds transactions to the block.** Change any transaction's data and the Merkle root changes. Change the Merkle root and the block header changes. Change the header and you have to re-do the [proof-of-work](/glossary/proof-work-pow). The cost of tampering is the full re-mining cost.
2. **It's what miners are actually hashing over.** The [block header](/glossary/block-header) hash includes the Merkle root. When a [miner](/glossary/miner) varies their [nonce](/glossary/nonce) looking for a valid block, the Merkle root is one of the inputs. (When they exhaust nonces, they tweak the coinbase transaction's extranonce, which changes the Merkle root, which gives them a fresh nonce space.)
3. **It enables SPV.** [Light clients](/glossary/spv-simplified-payment-verification) can verify their transactions are in the chain by downloading just block headers plus a `log2(N)`-sized Merkle proof per transaction.

A 32-byte commitment to a few megabytes of transaction data (as much as a block can hold), with no information loss as far as inclusion is concerned. One of the quietest pieces of design elegance in Bitcoin.

See [Merkle Tree / Merkle Root](/glossary/merkle-tree-merkle-root) for the construction in detail.
