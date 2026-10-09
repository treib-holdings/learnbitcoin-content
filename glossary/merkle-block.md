---
title: "Merkle Block"
slug: merkle-block
draft: false
updated: "2026-10-09"
shortDefinition: "A stripped-down block sent to SPV clients, containing only headers and minimal Merkle paths for relevant transactions."
keyTakeaways:
  - "Used by SPV wallets to confirm specific transactions in a block"
  - "Contains minimal data: block header + Merkle path"
  - "Saves bandwidth/storage, enabling lightweight verification"
sources:
  - { label: "BIP 37 - Connection Bloom filtering (privacy section: clients trade false-positive rate against bandwidth)", url: "https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki" }
  - { label: "Gervais, Karame, Gruber and Capkun - On the Privacy Provisions of Bloom Filters in Lightweight Bitcoin Clients (2014)", url: "https://eprint.iacr.org/2014/763" }
  - { label: "BIP 157 - Client Side Block Filtering", url: "https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki" }
  - { label: "Neutrino README - compact-block-filter light client designed for mobile Lightning clients", url: "https://github.com/lightninglabs/neutrino" }
  - { label: "Blixt Wallet README - mobile Lightning wallet with embedded lnd and Neutrino", url: "https://github.com/smolcars/blixt-wallet" }
relatedTerms:
  - bip-37
  - bip-158
  - block-header
  - bloom-filter
  - merkle-inclusion-proof
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
liveWidget: ~
---

A Merkle block is a Bitcoin peer-to-peer message ([defined in BIP-37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki)) that a [full node](/glossary/full-node) sends to an [SPV](/glossary/spv-simplified-payment-verification) client. It contains:

- The full [block header](/glossary/block-header) (80 bytes).
- A list of transactions in the block that match the SPV client's [Bloom filter](/glossary/bloom-filter).
- A [Merkle proof](/glossary/merkle-proof) showing those transactions are committed in the block's [Merkle root](/glossary/merkle-root).

This is what lets a phone wallet check whether *its* transactions appeared in the latest block, without downloading the whole block.

The downside, which has gotten more attention over the years: **Bloom filters leak privacy**. The SPV client sends its filter to the full node, which can probabilistically reverse-engineer which addresses or transactions the client cares about. For a privacy-conscious user, this is a meaningful concern. BIP-37, written in 2012, expected clients to hide their addresses by choosing a looser filter, but a 2014 study found that a wallet using fewer than 20 addresses could reveal almost all of them.

The modern replacement is **[BIP-157/158](/glossary/bip-158) compact block filters**: the *server* computes a filter per block, the *client* downloads it and checks for matches locally without revealing which addresses are theirs. Better privacy at modest bandwidth cost. Some mobile wallets use this approach rather than BIP-37 Merkle blocks.

Merkle blocks still work and are still implemented by Bitcoin Core, but their use has been deprecated in many parts of the modern wallet ecosystem.
