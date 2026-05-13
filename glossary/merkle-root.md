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
  - adaptive-block-filter
  - bip-37
  - bip-158
  - block-header
  - block-size
  - bloom-filter
  - chain-visualization
  - efficient-range-proof
  - hash
  - merkle-block
  - merkle-inclusion-proof
  - merkle-tree-merkle-root
  - merkleized-abstract-syntax-tree-mast
  - merkle-proof
  - spv-simplified-payment-verification
liveWidget: ~
---

Located in the block header, the Merkle root is produced by repeatedly hashing all transactions until only one hash remains. Changing even one bit in any transaction would alter the entire tree and thus the root, making tampering evident to nodes. Miners must find a nonce such that the block header, including the Merkle root, meets the proof-of-work target. This integral role cements the relationship between transaction data and the final block, securing the integrity of all transactions within.
