---
title: "Merkle Inclusion Proof"
slug: merkle-inclusion-proof
draft: false
shortDefinition: "A cryptographic proof that a given transaction is included in a block’s Merkle tree."
keyTakeaways:
  - "Links a transaction to the block’s Merkle root using partial hashes"
  - "Used by SPV clients for efficient verification"
  - "Ensures no tampering occurred without downloading the full block"
sources: []
relatedTerms:
  - adaptive-block-filter
  - bip-37
  - bip-158
  - efficient-range-proof
  - fraud-proof
  - merkle-block
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
liveWidget: ~
---

When an SPV or light client checks if a transaction is part of a block, it relies on a Merkle inclusion proof (also called a Merkle proof). This proof is a chain of hashes from the specific transaction up to the Merkle root in the block header. By hashing these in the correct order, the client can confirm that modifying the transaction would alter one of the intermediate hashes and break the chain, proving the authenticity of the transaction’s inclusion. This method is more efficient than downloading the entire block and verifying every other transaction.
