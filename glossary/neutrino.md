---
title: "Neutrino"
slug: neutrino
draft: false
shortDefinition: "A privacy-preserving lightweight protocol (BIP 157/158) using block filters, replacing older Bloom filter-based SPV."
keyTakeaways:
  - "Uses BIP 157/158 compact filters for SPV"
  - "Clients selectively download only blocks containing relevant transactions"
  - "Improves privacy and bandwidth efficiency over Bloom filters"
sources: []
relatedTerms: []
liveWidget: ~
---

Neutrino is the reference name (and Lightning Labs' implementation) for a privacy-preserving SPV-style light-client protocol based on BIP 157 / BIP 158 compact block filters. It replaced the older BIP 37 Bloom-filter SPV approach, which had serious privacy problems.

How Neutrino works:

1. A light client downloads block headers (small, fast, ~80 bytes each).
2. The client downloads compact block filters from a serving full node. Each filter is a few KB compressed summary of every script (address) referenced in that block.
3. The client checks each filter locally for matches against its own wallet's addresses.
4. For any block that matches, the client requests the full block from any peer and scans for its actual transactions.

The privacy property is the killer feature:

- **Under BIP 37 Bloom filters**, the client *sent a filter* describing what it cared about. The serving node could analyze the filter to deduce most of the client's addresses. Across multiple reconnections, this leak was severe.
- **Under Neutrino / BIP 158**, the client *receives a deterministic filter* for every block (the same filter every peer would serve). The client never tells the server what addresses it cares about. The server can't tell which blocks the client actually downloaded after seeing the filters.

What Neutrino is used for:

- **Lightning Labs' [LND](/glossary/lightning-network-daemon-lnd)** supports Neutrino as a backend for clients that don't want to run their own Bitcoin Core full node. Most non-routing-node Lightning users on LND-based wallets use it.
- **Many mobile Bitcoin wallets** use Neutrino or similar BIP 158-based backends rather than connecting to a trusted Electrum server.
- **Lightning Dev Kit (LDK)** speaks Neutrino as one of its supported chain-data sources.

The tradeoffs: bandwidth is somewhat higher than BIP 37 (filters are larger than per-client Bloom filters), and the privacy boost is real but not absolute (a serving node that watches *which blocks* you eventually fetch can still narrow down what's in your wallet, just much less precisely).

For users it's invisible. For wallet builders, Neutrino is the standard answer to "how do I support a light client without compromising user privacy."
