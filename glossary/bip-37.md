---
title: "BIP 37"
slug: bip-37
draft: false
shortDefinition: "Introduced Bloom filters for lightweight wallets, later criticized for privacy leaks and mostly replaced by BIP 157/158."
keyTakeaways:
  - "Reduced bandwidth use for SPV wallets"
  - "Criticized for revealing user interest patterns"
  - "Mostly deprecated in favor of modern filtering methods"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-36-merkle-block-request
  - bip-40-alerts-avoid-replay
  - bloom-filter
  - merkle-block
  - merkle-inclusion-proof
  - merkle-proof
  - merkle-root
  - spv-simplified-payment-verification
liveWidget: ~
---

BIP 37 added Bloom Filter support to the Bitcoin P2P protocol so SPV wallets could ask a full node "send me transactions matching this filter" without downloading every block. For a few years it was how every mobile wallet worked.

The privacy story turned out to be terrible. A Bloom filter is meant to obscure exactly which addresses a wallet cares about by mixing in enough false positives, but in practice wallets used filter parameters with low false-positive rates (to save bandwidth) and the serving node could de-anonymize most of the wallet's keys with simple statistical analysis, especially across reconnects with refreshed filters. The 2014 "On the Privacy Provisions of Bloom Filters in Lightweight Bitcoin Clients" paper made the situation hard to ignore.

Public nodes mostly stopped serving BIP 37. Bitcoin Core disabled the `NODE_BLOOM` service bit by default in 0.19 (2019), and the few wallets still using BIP 37 in 2026 mostly point at self-hosted nodes.

The modern replacement is BIP 158 compact block filters: the node publishes a small deterministic filter per block, the client downloads filters and matches them locally. The wallet never sends its filter to anyone. It's strictly more private and only slightly more bandwidth-hungry.

Spec: [BIP-37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki).
