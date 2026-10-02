---
title: "PayJoin"
slug: payjoin
draft: false
updated: "2026-10-02"
shortDefinition: "A collaborative transaction (a.k.a. P2EP) where sender and receiver both add inputs, obscuring usual input-output analysis."
keyTakeaways:
  - "Both sides contribute inputs to a single transaction"
  - "Breaks simplistic chain analysis assumptions"
  - "Requires special wallet support but can happen on-the-fly"
sources:
  - { label: "BIP-78 - A Simple Payjoin Proposal", url: "https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki" }
  - { label: "BIP-77 - Async Payjoin", url: "https://github.com/bitcoin/bips/blob/master/bip-0077.md" }
  - { label: "Blockstream - Improving Privacy Using Pay-to-EndPoint (P2EP) (2018)", url: "https://blog.blockstream.com/en-improving-privacy-using-pay-to-endpoint/" }
  - { label: "Bitcoin Optech - Payjoin topic", url: "https://bitcoinops.org/en/topics/payjoin/" }
relatedTerms:
  - address-clustering
  - address-reuse
  - coinjoin
  - mixing-service
  - shielded-coinjoin
  - stealth-address
sameAs:
  - "https://en.bitcoin.it/wiki/PayJoin"
  - "https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki"
  - "https://bitcoinops.org/en/topics/payjoin/"
liveWidget: ~
---

PayJoin (also called Pay-to-Endpoint, P2EP) is a privacy-enhancing transaction format where both the sender *and* the receiver contribute [inputs](/glossary/input-transaction-input). The result is an on-chain payment that defeats one of the strongest [chain-analysis](/glossary/chain-analysis) heuristics: "all inputs to a transaction share an owner."

A normal payment: sender contributes inputs, receiver contributes nothing. Chain analysts assume all inputs to the transaction belong to one wallet, and use that to cluster addresses.

A PayJoin: sender contributes their inputs, *and the receiver adds at least one of their own inputs* before signing. The transaction now has inputs from two different wallets. The common-input heuristic breaks - any analyst that applies it is going to merge two unrelated wallets into one false cluster.

Practical wins:

- **For the sender:** the analyst's assumption that all inputs to your transaction are yours becomes wrong. Past clustering analyses get polluted.
- **For the receiver:** the amount they were paid is hidden, because their output also carries the value of the coin they added.
- **The receiver** also gets some [consolidation](/glossary/consolidation-transaction) opportunistically - they spend an old UTXO at the same time they're being paid.

The catch is coordination: both wallets need to talk before broadcast. Standards like [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki) define an HTTP-based PayJoin protocol where the receiver runs an endpoint. A second version, BIP-77 (async PayJoin, merged in 2025), passes the messages through an untrusted store-and-forward server called a directory, reached over Oblivious HTTP so the directory cannot tie either side to an IP address. The receiver no longer needs to run a server or be online at the moment of payment.

PayJoin is unlike [CoinJoin](/glossary/coinjoin) in scale and intent. CoinJoin is many-party batch mixing for after-the-fact privacy. PayJoin is two-party regular-payment privacy. Both are useful; PayJoin is much harder to censor or coordinate against because a well-built PayJoin looks like a normal payment.

See [Privacy on Bitcoin](/rabbit-hole/bitcoin-privacy) for where PayJoin fits among the tools that look like ordinary use.
