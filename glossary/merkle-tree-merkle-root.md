---
title: "Merkle Tree / Merkle Root"
slug: merkle-tree-merkle-root
draft: false
shortDefinition: "A binary hash tree summarizing all transactions in a block, culminating in a single root hash."
keyTakeaways:
  - "Organizes transactions into a compact, tamper-evident data structure"
  - "Block header stores just the top-level Merkle root"
  - "Enables partial verification of transactions via Merkle proofs"
sources: []
relatedTerms:
  - bip-37
  - bip-158
  - block-header
  - bloom-filter
  - merkle-block
  - merkle-inclusion-proof
  - merkleized-abstract-syntax-tree-mast
  - merkle-proof
  - merkle-root
liveWidget: ~
---

A Merkle tree is a binary hash tree: take a bunch of data items, [hash](/glossary/hash) them pairwise, then hash those hashes pairwise, then hash those, and so on, until one final hash remains at the top. That single top hash is the **Merkle root**, and it commits to every piece of data in the tree.

In Bitcoin, every [block](/glossary/block) contains hundreds or thousands of [transactions](/glossary/transaction). The block organizes them into a Merkle tree, with transaction IDs (txids) at the leaves, and stores only the final Merkle root in the [block header](/glossary/block-header). Change any single transaction in the block and the tree's root hash changes - the alteration becomes immediately visible.

Why this design matters:

- **Efficient verification.** A Merkle root is just 32 bytes, but it commits to every transaction below it. Block headers stay small (80 bytes) while still cryptographically anchoring all the block's transaction data.
- **Proofs of inclusion.** Anyone with the Merkle root can verify that a specific transaction is in the block, given a "Merkle proof" of just `log2(N)` hashes - typically 10-20 hashes for a block with thousands of transactions. This is what makes [SPV (Simplified Payment Verification)](/glossary/spv-simplified-payment-verification) wallets possible. They download block headers (4 MB/year, total) and use Merkle proofs to verify their own transactions without downloading whole blocks.
- **Tamper evidence.** Any change to a transaction propagates up the tree and changes the root. Once the root is in the header, and the header is part of a [proof-of-work](/glossary/proof-work-pow)-secured chain, the transactions are effectively immutable.

Merkle trees were invented by Ralph Merkle in 1979, decades before Bitcoin. They're used widely in cryptographic systems beyond Bitcoin (Git, ZFS, Certificate Transparency, many others). Bitcoin's specific design is the one you'll encounter most.

The term **Merkle root** is often used interchangeably with this entry; see [Merkle Root](/glossary/merkle-root) for the header-field specific view.
