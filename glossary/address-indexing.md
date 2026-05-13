---
title: "Address Indexing"
slug: address-indexing
draft: false
shortDefinition: "A service or feature that tracks and organizes Bitcoin transactions by address, enabling fast lookups or block explorer queries."
keyTakeaways:
  - "Organizes transaction data by address"
  - "Not enabled by default in Bitcoin Core"
  - "Speeds up lookups but can affect privacy"
sources: []
relatedTerms:
  - address
  - address-clustering
  - address-derivation-path
  - address-reuse
  - transaction-index-txindex
liveWidget: ~
---

Address indexing is like an electronic card catalog for the blockchain, letting you instantly find all transactions associated with a particular address. By default, Bitcoin Core doesn't maintain such an index, focusing instead on the entire blockchain's raw data. To speed up address-based queries, some customized nodes or external services build an index that maps each address to its corresponding transactions and balances.
While this can be handy for casual explorers or businesses that need quick lookups, it also comes with privacy trade-offs. Creating or relying on such an index can make data more transparent, potentially aiding address clustering and surveillance. It's a valuable tool, but one that must be used with an awareness of privacy implications.
