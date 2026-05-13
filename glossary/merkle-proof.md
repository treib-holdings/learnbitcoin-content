---
title: "Merkle Proof"
slug: merkle-proof
draft: false
shortDefinition: "Another name for a Merkle inclusion proof: a set of hashes verifying a transaction's presence in a block."
keyTakeaways:
  - "Ensures a transaction is genuinely in a specific block"
  - "Lightweight approach for trust-minimized verification"
  - "A core part of SPV wallet validation strategies"
sources: []
relatedTerms:
  - adaptive-block-filter
  - bip-37
  - bip-158
  - block-header
  - bloom-filter
  - efficient-range-proof
  - fraud-proof
  - hash
  - merkle-block
  - merkle-inclusion-proof
  - merkle-tree-merkle-root
  - merkle-root
liveWidget: ~
---

A Merkle proof is a compact piece of evidence that a specific [transaction](/glossary/transaction) is included in a specific [block](/glossary/block), without requiring the verifier to download the entire block.

It works by walking the [Merkle tree](/glossary/merkle-tree-merkle-root): from a leaf (the transaction's txid) up to the root (which is stored in the [block header](/glossary/block-header)), the proof contains the sibling hashes at each level. With those hashes, anyone can recompute what the [Merkle root](/glossary/merkle-root) *should* be given the claimed transaction, and check it against the block header's actual root. If it matches, the transaction is provably in the block. If it doesn't, the proof is invalid.

Why this is useful:

- **Small.** A Merkle proof for a block with N transactions has size `O(log N)` - typically 10-12 hashes, ~320-400 bytes, for any realistically-sized block.
- **Cryptographic.** Trust nothing about the source; the math either checks out or it doesn't.
- **Powers [SPV](/glossary/spv-simplified-payment-verification).** Light clients use Merkle proofs to verify their own transactions without downloading whole blocks. They store just [block headers](/glossary/block-header) (4 MB/year, total) and ask full nodes for proofs when they need to confirm a specific tx.

Sometimes called a "Merkle inclusion proof" or "Merkle path." All three terms refer to the same construction.

The same primitive shows up across cryptography: Git uses it for commit history, ZFS uses it for filesystem integrity, Certificate Transparency uses it for log inclusion. Bitcoin's usage is one well-known instance of a much broader pattern.
