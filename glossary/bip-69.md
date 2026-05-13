---
title: "BIP 69"
slug: bip-69
draft: false
shortDefinition: "Recommends a canonical ordering of inputs and outputs to reduce malleability and enhance privacy, though it’s not mandatory."
keyTakeaways:
  - "Sorts inputs/outputs deterministically"
  - "Aims to reduce random factors that cause malleability"
  - "Optional practice-adopted by some wallets, not all"
sources: []
relatedTerms:
  - batch-transaction
  - batching-optimizer
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - transaction
  - transaction-fee
liveWidget: ~
---

BIP 69 proposes a straightforward sorting approach for transaction inputs and outputs: sort inputs by their txid, then index, and outputs by their amount. This aims to eliminate random differences in transaction structure, preventing certain malleability vectors and enhancing privacy by making transactions appear more uniform.
However, BIP 69 isn’t enforced by consensus. It’s an optional best practice for wallets that want consistency, simpler fee estimation, or a slightly higher degree of privacy. Critics argue that fully deterministic ordering could also reveal patterns (e.g., always sorting by size), so some wallets mix or randomize to obscure these details. Despite these debates, BIP 69 remains a reference point for uniform transaction creation.
