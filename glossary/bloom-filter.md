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
  - adaptive-block-filter
  - bip-37
  - bip-158
  - merkle-block
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
  - spv-simplified-payment-verification
liveWidget: ~
---

Bloom filters, which were introduced in [BIP 37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki), allow lightweight Bitcoin clients to provide a filter describing which transactions they care about. Full nodes then send back only matching transactions, so the SPV client doesn’t need to download every transaction.
However, this approach can leak user data: analyzing which transactions are returned can hint at the user’s addresses. Consequently, many nodes disabled or limited Bloom filter support. Later proposals, like [BIP 158’s compact block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki), offer more privacy-friendly ways for lightweight wallets to fetch relevant data.
