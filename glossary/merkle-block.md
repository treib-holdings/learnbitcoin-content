---
title: "Merkle Block"
slug: merkle-block
draft: false
shortDefinition: "A stripped-down block sent to SPV clients, containing only headers and minimal Merkle paths for relevant transactions."
keyTakeaways:
  - "Used by SPV wallets to confirm specific transactions in a block"
  - "Contains minimal data: block header + Merkle path"
  - "Saves bandwidth/storage, enabling lightweight verification"
sources: []
relatedTerms:
  - adaptive-block-filter
  - bip-37
  - bip-158
  - block-header
  - bloom-filter
  - efficient-range-proof
  - merkle-inclusion-proof
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
liveWidget: ~
---

A Merkle block is how lightweight (SPV) wallets verify that specific transactions exist in a block without downloading the entire block’s transaction set. It includes the block header, the Merkle root, and just enough hashes in the Merkle tree path to prove that the wallet’s transaction(s) are indeed part of that block. By sending these compact proofs, full nodes help SPV clients confirm payments efficiently, reducing bandwidth and storage requirements. This concept was further developed in BIP 37 Bloom filter–based wallets, and modern improvements like BIP 157/158 compact filters aim to enhance privacy and efficiency for SPV users.
