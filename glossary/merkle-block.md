---
title: "Merkle Block"
slug: merkle-block
draft: false
updated: "2026-10-10"
shortDefinition: "A stripped-down block sent to SPV clients, containing only headers and minimal Merkle paths for relevant transactions."
keyTakeaways:
  - "Used by SPV wallets to confirm specific transactions in a block"
  - "Contains minimal data: block header + Merkle path"
  - "Saves bandwidth/storage, enabling lightweight verification"
sources:
  - { label: "BIP 37 - Connection Bloom filtering (merkleblock is a block header plus a partial Merkle tree holding only the matching transactions' hashes; the transactions follow as separate tx messages; privacy section: clients trade false-positive rate against bandwidth)", url: "https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki" }
  - { label: "Gervais, Karame, Gruber and Capkun - On the Privacy Provisions of Bloom Filters in Lightweight Bitcoin Clients (2014)", url: "https://eprint.iacr.org/2014/763" }
  - { label: "BIP 157 - Client Side Block Filtering", url: "https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki" }
  - { label: "Neutrino README - compact-block-filter light client designed for mobile Lightning clients", url: "https://github.com/lightninglabs/neutrino" }
  - { label: "Blixt Wallet README - mobile Lightning wallet with embedded lnd and Neutrino", url: "https://github.com/smolcars/blixt-wallet" }
  - { label: "Bitcoin Core 0.19.0.1 release notes - peerbloomfilters now defaults to false, so the node no longer serves merkle blocks unless enabled (November 2019)", url: "https://bitcoincore.org/en/releases/0.19.0.1/" }
  - { label: "Bitcoin Core - 0.19.0 release announcement: the download is version 0.19.0.1 (November 24, 2019)", url: "https://bitcoincore.org/en/2019/11/24/release-0.19.0/" }
  - { label: "Bitcoin Core source - net_processing.h: DEFAULT_PEERBLOOMFILTERS is false (October 2026)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/net_processing.h" }
  - { label: "Bitcoin Core source - net_processing.cpp: still sends MERKLEBLOCK messages to peers that set a filter (October 2026)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/net_processing.cpp" }
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
- The hashes of the transactions in the block that match the SPV client's [Bloom filter](/glossary/bloom-filter).
- A [Merkle proof](/glossary/merkle-proof) (a partial Merkle tree) showing those transactions are committed in the block's [Merkle root](/glossary/merkle-root).

The matching transactions themselves are not in the message. The full node sends them right after it, as ordinary `tx` messages.

This is what lets a phone wallet check whether *its* transactions appeared in the latest block, without downloading the whole block.

The downside, which has gotten more attention over the years: **Bloom filters leak privacy**. The SPV client sends its filter to the full node, which can probabilistically reverse-engineer which addresses or transactions the client cares about. For a privacy-conscious user, this is a meaningful concern. BIP-37, written in 2012, expected clients to hide their addresses by choosing a looser filter, but a 2014 study found that a wallet using fewer than 20 addresses could reveal almost all of them.

The modern replacement is **[BIP-157/158](/glossary/bip-158) compact block filters**: the *server* computes a filter per block, the *client* downloads it and checks for matches locally without revealing which addresses are theirs. Better privacy at modest bandwidth cost. Some mobile wallets use this approach rather than BIP-37 Merkle blocks.

As of October 2026, Bitcoin Core still implements merkle blocks. Since version 0.19.0.1 (November 2019), though, it serves them only when the node's operator turns Bloom filter support back on. The release notes gave denial-of-service risk as the reason.
