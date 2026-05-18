---
title: "Merkle Root"
slug: merkle-root
draft: false
shortDefinition: "The single 32-byte hash at the top of a block's Merkle tree, summarizing all included transactions."
keyTakeaways:
  - "Final hash encapsulating every transaction in the block"
  - "Integral to proof-of-work since miners hash the block header"
  - "One small alteration in transactions would break the chain of hashes"
sources: []
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
2. **It's what miners are actually hashing over.** The [block-header](/glossary/block-header) hash includes the Merkle root. When a [miner](/glossary/miner) varies their [nonce](/glossary/nonce) looking for a valid block, the Merkle root is one of the inputs. (When they exhaust nonces, they tweak the coinbase transaction's extranonce, which changes the Merkle root, which gives them a fresh nonce space.)
3. **It enables SPV.** [Light clients](/glossary/spv-simplified-payment-verification) can verify their transactions are in the chain by downloading just block headers plus a `log2(N)`-sized Merkle proof per transaction.

A 32-byte commitment to potentially gigabytes of transaction data, with no information loss as far as inclusion is concerned. One of the quietest pieces of design elegance in Bitcoin.

See [Merkle Tree / Merkle Root](/glossary/merkle-tree-merkle-root) for the construction in detail.
