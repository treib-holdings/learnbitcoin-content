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
  - adaptive-block-filter
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

A Merkle tree is built by repeatedly hashing pairs of data until only one hash remains—the Merkle root. In Bitcoin, each transaction ID (txid) is hashed together in pairs, then those hashes are hashed again, and so on, forming a tree structure. The final hash, the Merkle root, is placed in the block header. This design lets nodes verify transaction inclusion without downloading or verifying every other transaction in the block. It’s a fundamental component for SPV wallets and block explorers aiming for efficient validation and minimal bandwidth use.
