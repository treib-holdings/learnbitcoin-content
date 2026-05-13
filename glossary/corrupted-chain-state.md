---
title: "Corrupted Chain State"
slug: corrupted-chain-state
draft: false
shortDefinition: "A node’s local blockchain data becomes invalid or inconsistent, often requiring a re-index or full sync."
keyTakeaways:
  - "Results from hardware, file system, or software issues"
  - "Causes invalid or incomplete local blockchain data"
  - "Often resolved by re-indexing or re-downloading the chain"
sources: []
relatedTerms:
  - bitcoin-vault
  - blockchain
  - chain-split
  - fork-detection
  - full-node
  - full-validation
  - node-synchronization
  - reorg-reorganization
  - safe-mode-bitcoin-core
liveWidget: ~
---

A corrupted chain state occurs if a node’s local copy of the blockchain or its indexing data gets tampered with-due to hardware failures, software bugs, or malicious interference. Symptoms include failing to validate blocks or mismatched UTXO sets.
The standard fix is to re-index (rebuild the database from the raw block files) or, in severe cases, delete all local data and sync from scratch. Running a node on reliable hardware, keeping software updated, and verifying checksums can reduce the risk of chain state corruption. In a well-run setup, the blockchain’s integrity is protected by cryptographic proofs, so corruption is typically local, not network-wide.
