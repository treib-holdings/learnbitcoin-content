---
title: "Full Node"
slug: full-node
draft: false
updated: "2026-10-10"
shortDefinition: "A Bitcoin client that downloads and validates all blocks/transactions, enforcing the rules independently."
keyTakeaways:
  - "Stores/validates the entire blockchain locally"
  - "The backbone of Bitcoin's trustless model"
  - "Requires more resources than lightweight/spv wallets"
sources:
  - { label: "Blockchain.com - blockchain size chart (774,075 MB on October 8, 2026)", url: "https://www.blockchain.com/explorer/charts/blocks-size" }
  - { label: "mempool.space - block sizes and weights (about 82.5 GB of blocks mined from October 2025 to October 2026)", url: "https://mempool.space/graphs/mining/block-sizes-weights" }
  - { label: "Bitcoin Core 31 - intro.cpp (the setup screen adds the two figures and says at least 870 GB of data will be stored)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/qt/intro.cpp" }
  - { label: "Bitnodes - reachable Bitcoin nodes (25,514 counted on October 9, 2026)", url: "https://bitnodes.io" }
  - { label: "Bitcoin Core - About (a direct descendant of the original Bitcoin client released by Satoshi Nakamoto)", url: "https://bitcoincore.org/en/about/" }
  - { label: "Luke Dashjr - Bitcoin node software chart, listening nodes plus his estimate of non-listening ones (on October 10, 2026: Bitcoin Core 87%, Bitcoin Knots 13%)", url: "https://luke.dashjr.org/programs/bitcoin/files/charts/software.html" }
  - { label: "Bitcoin Knots README (development generally takes place in Bitcoin Core and is merged into Knots for each release)", url: "https://github.com/bitcoinknots/bitcoin" }
  - { label: "Bitcoin Knots v29.3.knots20260508 release notes (May 9, 2026) - this version applies BIP-110 (RDTS) after the user confirms", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260508" }
  - { label: "BIP-110 - Reduced Data Temporary Softfork (temporarily limits data fields; blocks 961,632 to 963,647 that do not signal bit 4 are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki" }
  - { label: "bitcoin/bips PR #2245 - BIP 110 status changed to Closed (opened August 9, 2026); notes Knots released it on mainnet and on August 8 its nodes began rejecting non-signaling blocks, split to a new chain and stalled", url: "https://github.com/bitcoin/bips/pull/2245" }
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-knots
  - byzantine-fault-tolerance
  - corrupted-chain-state
  - full-rbf
  - full-validation
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
sameAs:
  - "https://en.bitcoin.it/wiki/Full_node"
liveWidget: ~
---

A full node is a Bitcoin [node](/glossary/node) that downloads, validates, and stores the entire blockchain - every block from the [genesis block](/glossary/genesis-block) on January 3, 2009 through the latest one. It enforces every consensus rule independently and answers to no one's interpretation but its own.

The practical specs as of 2026:

- **Disk:** about 775 GB of block data as of October 2026, growing by roughly 80 GB a year; Bitcoin Core 31's setup screen asks for at least 870 GB. A 2 TB SSD lasts for years.
- **RAM:** 4 GB is workable; 8 GB+ is comfortable.
- **CPU:** Anything from a Raspberry Pi 4 upward will run it. Initial sync is CPU-bound and takes a few days; ongoing operation is trivial.
- **Bandwidth:** Several hundred GB per month of outbound, mostly serving blocks to peers. Cap-able via configuration if your ISP is hostile.

The software is usually [Bitcoin Core](/glossary/bitcoin-core), a direct descendant of the original Bitcoin software, which ran on about 87% of nodes in one October 2026 estimate. [Bitcoin Knots](/glossary/bitcoin-knots) is a modified version of Core. Knots releases from May 9, 2026 on enforce BIP-110, a temporary limit on data in transactions, and nodes running them left Bitcoin's main chain on August 8, 2026.

Why bother running a full node, when wallets can connect to public servers? Three reasons:

1. **You verify your own transactions.** Without a full node, you trust whichever server tells you whether your coins are valid. With a full node, you check the math yourself - no trust required.
2. **You enforce consensus.** Every full node is one more node a hypothetical attacker has to convince. The network's resistance to rule changes scales with the number of independent validators.
3. **You opt out of metadata leakage.** Querying a public server for "is this transaction confirmed yet?" tells that server which addresses you care about. Your own node sees only the global chain, never your specific interest.

Bitnodes counted 25,514 publicly reachable nodes on October 9, 2026, and many more run behind home routers and firewalls without accepting inbound connections. Yours can be one of them.

See the [Sovereignty Journey](/journey/sovereignty) for the full walkthrough.
