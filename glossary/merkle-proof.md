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

Sometimes 'Merkle proof' is used interchangeably with 'Merkle inclusion proof.' It indicates the partial path of sibling hashes from a transaction up to the Merkle root. SPV or lightweight clients rely on these short proofs from full nodes to confirm a transaction without scanning all others. If any hash in the proof changes, the final Merkle root fails to match the block header, revealing tampering. This method drastically lowers the data requirements for verifying transactions in a given block.
