---
title: "PayJoin"
slug: payjoin
draft: false
shortDefinition: "A collaborative transaction (a.k.a. P2EP) where sender and receiver both add inputs, obscuring usual input-output analysis."
keyTakeaways:
  - "Both sides contribute inputs to a single transaction"
  - "Breaks simplistic chain analysis assumptions"
  - "Requires special wallet support but can happen on-the-fly"
sources: []
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
- **For the receiver:** a payment doesn't go to a fresh isolated address; their existing UTXOs are part of the spending pattern, harder to single out.
- **Both parties** also achieve some [consolidation](/glossary/consolidation-transaction) opportunistically - the receiver gets to spend an old UTXO at the same time they're being paid.

The catch is coordination: both wallets need to talk before broadcast. Standards like [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki) define an HTTP-based PayJoin protocol where the receiver runs an endpoint. Improvements in 2024-2025 (BIP-77 / async PayJoin via Nostr or similar relays) made coordination easier without requiring the receiver to be online at the moment of payment.

PayJoin is unlike [CoinJoin](/glossary/coinjoin) in scale and intent. CoinJoin is many-party batch mixing for after-the-fact privacy. PayJoin is two-party regular-payment privacy. Both are useful; PayJoin is much harder to censor or coordinate against because every PayJoin looks like a normal transaction.
