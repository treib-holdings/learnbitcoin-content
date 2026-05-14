---
title: "Merkle Inclusion Proof"
slug: merkle-inclusion-proof
draft: false
shortDefinition: "A cryptographic proof that a given transaction is included in a block's Merkle tree."
keyTakeaways:
  - "Links a transaction to the block's Merkle root using partial hashes"
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

A merkle inclusion proof is the smallest data structure that lets a verifier confirm a specific transaction belongs in a given block, without having to download all the other transactions in that block. It exploits the merkle tree that Bitcoin builds over each block's transaction list.

How it works:

1. Each block header commits to a single 32-byte merkle root, derived by pairwise hashing the block's transaction txids until one root remains.
2. To prove transaction `T` is in block `B`, you provide `T` itself plus the sibling hashes along the path from `T`'s leaf up to the root - typically `log_2(N)` hashes for a block with N transactions.
3. The verifier hashes `T` with its sibling, then that result with the next sibling, walking up the tree.
4. If the final hash matches the merkle root committed to in the block header, `T` is provably in `B`.

Proof size for typical Bitcoin blocks: ~10-12 sibling hashes (since blocks contain 2,000-3,000 transactions in busy times), so roughly 320-384 bytes plus the transaction itself. Vastly cheaper than fetching the entire block.

Where merkle inclusion proofs show up:

- **SPV light clients.** Wallets that don't validate the full chain ask trusted peers for block headers (verifying difficulty and chain continuity) plus merkle inclusion proofs for transactions they care about. The wallet trusts proof-of-work for the chain tip and verifies cryptographic proofs for individual transaction inclusion.
- **Bitcoin Core's `gettxoutproof` RPC.** Produces an inclusion proof for one or more transactions; the companion `verifytxoutproof` validates it.
- **Various second-layer constructions.** Sidechain pegs, drivechain proposals, BitVM, and similar designs use merkle inclusion proofs to commit one chain's state to another.

What inclusion proofs *don't* prove: that the transaction is valid (you'd need the block's full validation state), or that the chain itself is the canonical one (you'd need proof-of-work and ancestry). They prove only "this transaction is committed to in this block." That's a useful but limited primitive, and a building block in most light-client and cross-chain designs.
