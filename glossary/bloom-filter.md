---
title: "Bloom Filter"
slug: bloom-filter
draft: false
shortDefinition: "A probabilistic data structure enabling SPV wallets to request only relevant transactions-though with known privacy drawbacks."
keyTakeaways:
  - "Helps SPV wallets reduce bandwidth by filtering transactions"
  - "Potentially reveals information about user addresses"
  - "Largely replaced by more private methods (BIP 157/158)"
sources: []
relatedTerms:
  - bip-37
  - bip-158
  - merkle-block
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
  - spv-simplified-payment-verification
sameAs:
  - "https://en.wikipedia.org/wiki/Bloom_filter"
  - "https://www.wikidata.org/wiki/Q885373"
liveWidget: ~
---

A Bloom filter is a probabilistic data structure that lets you check "is this item in a set?" cheaply, with no false negatives and a tunable rate of false positives. In Bitcoin, Bloom filters were introduced by [BIP-37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki) (2012) as a way for [SPV](/glossary/spv-simplified-payment-verification) clients to request only transactions that might match their addresses.

The original workflow:

1. SPV client builds a Bloom filter encoding its addresses (with some intentional fuzziness via false positives).
2. Client sends the filter to a [full node](/glossary/full-node).
3. Full node sends back only blocks/transactions that match the filter (plus some unrelated false-positive matches).
4. Client checks each result locally to see which are real matches.

The fatal privacy flaw: by inspecting the filter, a malicious or curious full node can probabilistically reverse-engineer which addresses the SPV client cares about. The false-positive rate is supposed to provide cover, but in practice it's too easy to extract patterns when a client repeatedly queries with overlapping filters.

By the late 2010s this was widely understood, and many Bitcoin Core nodes disabled BIP-37 Bloom filter relay entirely (it became opt-in, then disabled-by-default in Core v0.19).

The successor is [BIP-158](/glossary/bip-158) compact block filters, where the *full node* generates the filter and the *client* downloads and queries it locally - so the node learns nothing about which addresses the client cares about. Same primitive idea, opposite information flow, much better privacy. Modern SPV-style mobile wallets use BIP-157/158, not BIP-37.

Bloom filters as a general data structure are still useful in many other contexts (databases, caches, distributed systems). In Bitcoin specifically, they're a historical artifact you'll encounter mostly in older docs.
