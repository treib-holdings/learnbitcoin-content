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

`txindex` is a Bitcoin Core configuration option (`-txindex=1` in `bitcoin.conf`) that builds and maintains a database mapping every transaction ID to its location in the block files. With it enabled, `getrawtransaction <txid>` returns any transaction in the chain's history immediately. Without it, that RPC only works for transactions still in the mempool or in the wallet's known set.

What `txindex` costs:

- **Disk.** Roughly 50-70 GB of additional storage in 2026, growing with the chain. Compared to ~600 GB for the archival block data, it's not the biggest add, but it's not negligible either.
- **Initial sync time.** The index gets built during the initial validation pass; expect IBD to be somewhat slower. After the index is built, ongoing operation is unaffected.
- **Incompatibility with pruning.** `txindex` requires archival mode. Pruned nodes can't maintain a full transaction index because they don't keep all the blocks.

Who needs it:

- **Block explorers.** Mempool.space, Blockstream Explorer, and similar tools need to look up arbitrary transactions on demand. They run `txindex=1` against archival nodes (or use their own custom databases derived from the chain).
- **Chain analysis tools** that work with arbitrary historical transactions.
- **Some specialized wallets** that need to walk historical UTXO graphs (rare; modern descriptor wallets typically only track their own outputs).
- **Lightning node operators** in some configurations, though most LN backends don't strictly require txindex.

Who doesn't need it: every standard wallet user. Wallets only track UTXOs that belong to them; they have all the relevant transactions in their own wallet database. Trying to look up an arbitrary unrelated transaction is something users essentially never do outside of explorer-style workflows.

Default is off. Turn it on only if you actually need it. If you're running a node for personal wallet use plus optional peer service, leaving `txindex` off saves disk and lets you run with pruning if you want.
