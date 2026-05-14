---
title: "BIP 69"
slug: bip-69
draft: false
shortDefinition: "Recommends a canonical ordering of inputs and outputs to reduce malleability and enhance privacy, though it's not mandatory."
keyTakeaways:
  - "Sorts inputs/outputs deterministically"
  - "Aims to reduce random factors that cause malleability"
  - "Optional practice-adopted by some wallets, not all"
sources: []
relatedTerms:
  - batch-transaction
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - transaction
  - transaction-fee
liveWidget: ~
---

[BIP-69](https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki) proposes a canonical, deterministic ordering for transaction inputs and outputs:

- **Inputs:** sorted by source txid (lexicographic, ascending), then by output index.
- **Outputs:** sorted by amount (ascending), then by scriptPubKey lexicographic.

The goal is to make transactions from BIP-69-compliant wallets look structurally identical regardless of how the wallet originally constructed them - reducing wallet-fingerprinting opportunities for chain analysts.

The privacy logic: every wallet has its own quirks in how it builds transactions. Some sort inputs by value; some preserve UTXO selection order; some randomize. Each pattern is a fingerprint. If you can identify the wallet from the transaction structure, you've started to identify the user. BIP-69 standardizes the structure to make this harder.

BIP-69 is **not** a consensus rule. It's an opt-in convention at the wallet level. Some wallets (Wasabi, Bitcoin Core in some contexts) follow it; others don't. The practical privacy gain has been debated:

- **Pro:** Wallets that *do* follow BIP-69 look like each other rather than like themselves. Bigger anonymity set.
- **Con:** Wallets that don't follow it stand out more. And BIP-69 has its own fingerprint (deterministic sorting is itself a pattern).
- **Newer view:** Some research suggests randomizing output ordering (or shuffling more aggressively) is actually better for privacy than any deterministic approach.

The community as of 2026 hasn't fully settled on the right answer. BIP-69 is a useful reference point, but most modern privacy-focused wallets do something more nuanced. See [Address Clustering](/glossary/address-clustering) for the broader chain-analysis problem this is one small piece of.
