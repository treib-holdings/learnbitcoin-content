---
title: "Transaction Index (txindex)"
slug: transaction-index-txindex
draft: false
shortDefinition: "An optional node setting creating a full index of all transactions by TXID for direct lookup."
keyTakeaways:
  - "Stores a direct mapping from TXID to block file location"
  - "Facilitates quick transaction queries at the cost of extra storage"
  - "Useful for explorers or deep chain analysis, not mandatory for standard usage"
sources: []
relatedTerms:
  - block-explorer
  - chain-analysis
  - transaction
  - utxo-unspent-transaction-output
liveWidget: ~
---

By default, Bitcoin Core focuses on validating blocks without indexing every individual transaction. Enabling ‘-txindex=1’ instructs the node to maintain a database mapping TXIDs to their block locations, allowing quick direct lookups. This costs extra disk space and increases I/O. Explorers, block analysis apps, or third-party services often need txindex for fast retrieval of any arbitrary transaction. Regular users typically leave it off to save resources, as normal wallets only track relevant addresses/UTXOs, not entire chain queries by TXID.
