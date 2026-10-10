---
title: "Bloom Filter"
slug: bloom-filter
draft: false
updated: "2026-10-10"
shortDefinition: "A probabilistic data structure enabling SPV wallets to request only relevant transactions, though with known privacy drawbacks."
keyTakeaways:
  - "Helps SPV wallets reduce bandwidth by filtering transactions"
  - "Potentially reveals information about user addresses"
  - "BIP 157/158 compact block filters are a more private alternative"
sources:
  - { label: "BIP 37 - Connection Bloom filtering: a Bloom filter can have false positives but not false negatives; the client picks the false-positive rate, trading bandwidth against privacy (assigned October 2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki" }
  - { label: "Gervais, Karame, Gruber and Capkun - On the Privacy Provisions of Bloom Filters in Lightweight Bitcoin Clients: a wallet with fewer than 20 addresses can reveal almost all of them, and more filters from the same wallet leak more (2014)", url: "https://eprint.iacr.org/2014/763" }
  - { label: "BIP 111 - NODE_BLOOM service bit: lets nodes signal Bloom filter support so operators can switch it off, citing the privacy problem and denial-of-service risk (assigned August 2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0111.mediawiki" }
  - { label: "Bitcoin Core 0.13.0 release notes - NODE_BLOOM can be disabled through -peerbloomfilters=0 (2016)", url: "https://bitcoincore.org/en/releases/0.13.0/" }
  - { label: "Bitcoin Core 0.19.0.1 release notes - the default for -peerbloomfilters is changed to false to remove denial-of-service vectors; operators can set it back to true (November 2019)", url: "https://bitcoincore.org/en/releases/0.19.0.1/" }
  - { label: "Bitcoin Core - 0.19.0 release announcement: the download is version 0.19.0.1 (November 24, 2019)", url: "https://bitcoincore.org/en/2019/11/24/release-0.19.0/" }
  - { label: "Bitcoin Core source - net_processing.h: DEFAULT_PEERBLOOMFILTERS is false (October 2026)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/net_processing.h" }
  - { label: "Bitcoin Core source - init.cpp: the -peerbloomfilters option still turns Bloom filter support on (October 2026)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/init.cpp" }
  - { label: "Bitcoin Core source - net_processing.cpp: rolling Bloom filters track which transactions and addresses a peer already knows, to avoid announcing them again (October 2026)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/net_processing.cpp" }
  - { label: "BIP 157 - Client Side Block Filtering: full nodes build the filters and clients match them locally; blocks can come from any peer, picked at random, so no one peer learns everything", url: "https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki" }
  - { label: "BIP 158 - Compact Block Filters: Golomb-coded sets, chosen over Bloom filters because they are smaller", url: "https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki" }
  - { label: "Neutrino README - compact-block-filter light client designed for mobile Lightning clients", url: "https://github.com/lightninglabs/neutrino" }
  - { label: "Blixt Wallet README - mobile Lightning wallet with embedded lnd and Neutrino", url: "https://github.com/smolcars/blixt-wallet" }
  - { label: "PostgreSQL documentation - bloom: an index access method based on Bloom filters", url: "https://www.postgresql.org/docs/current/bloom.html" }
  - { label: "RocksDB wiki - RocksDB Bloom Filter: each data file can carry a Bloom filter to skip files that lack a key", url: "https://github.com/facebook/rocksdb/wiki/RocksDB-Bloom-Filter" }
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

Serving these filters also turned out to be a denial-of-service risk for the node doing the work. BIP-111 (2015) gave nodes a way to say whether they offer Bloom filtering at all, so operators could switch it off. In Bitcoin Core the switch is the `-peerbloomfilters` setting. It stayed on by default, so operators had to opt out, until version 0.19.0.1 (November 2019) changed the default to off. As of October 2026 it is still off by default, and an operator can turn it back on.

The successor is [BIP-158](/glossary/bip-158) compact block filters, where the *full node* generates the filter and the *client* downloads and queries it locally, so the wallet never hands its addresses to anyone. It still has to fetch each block that matches, and BIP-157 suggests getting those from peers picked at random so no single node sees the whole picture. The filter itself is a close cousin of a Bloom filter (a Golomb-coded set, chosen because it's smaller). It's the same basic trick with the information flowing the other way, and privacy is much better for it. Some mobile wallets work this way instead of using BIP-37, such as Blixt, which runs lnd with the Neutrino light client.

Bloom filters as a general data structure are still widely used, for example in database software such as PostgreSQL and RocksDB. Bitcoin Core uses them internally too, to keep track of which transactions and addresses each peer already knows about so it doesn't announce them again. The BIP-37 use, where a wallet hands its filter to someone else's node, is the part Bitcoin Core has left off by default since 0.19.0.1.
