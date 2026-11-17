---
title: "Full Node"
slug: full-node
draft: false
updated: "2026-11-17"
shortDefinition: "A Bitcoin client that downloads and validates all blocks/transactions, enforcing the rules independently."
keyTakeaways:
  - "Downloads and validates the entire blockchain; keeping all of it is optional"
  - "The backbone of Bitcoin's trustless model"
  - "Requires more resources than lightweight/spv wallets"
sources:
  - { label: "Blockchain.com - blockchain size, the chart's raw data (783,343 MB on November 16, 2026; 700,178 MB a year earlier)", url: "https://api.blockchain.info/charts/blocks-size?timespan=3years&format=json&sampled=false" }
  - { label: "mempool.space - block sizes and weights (about 82.5 GB of blocks mined from October 2025 to October 2026)", url: "https://mempool.space/graphs/mining/block-sizes-weights" }
  - { label: "Bitcoin Core 32.1 - intro.cpp (the setup screen adds the two figures and says at least 911 GB of data will be stored)", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/qt/intro.cpp" }
  - { label: "Bitcoin Core 32.1 - kernel/chainparams.cpp (mainnet disk guidelines of 897 GB of blocks and 14 GB of chain state; default assumevalid block 966,143)", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core 32.1 - init.cpp (the -assumevalid option: blocks up to the default one are assumed valid and their script verification may be skipped; 0 verifies all)", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/init.cpp" }
  - { label: "Bitcoin Core 32.1 - doc/reduce-traffic.md (default settings can use a lot of traffic, much of it old blocks served to nodes that are syncing; an upload target or -listen=0 reduces it)", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/doc/reduce-traffic.md" }
  - { label: "Bitcoin Wiki - Full node (being an archival node is not necessary to being a full node; a pruned node is still fully validating)", url: "https://en.bitcoin.it/wiki/Full_node" }
  - { label: "Bitcoin Wiki - Clearing Up Misconceptions About Full Nodes (lists as a myth that the number of nodes is what matters: the only node that matters is the one you use)", url: "https://en.bitcoin.it/wiki/Clearing_Up_Misconceptions_About_Full_Nodes" }
  - { label: "BTC Nodes API - snapshots from a crawler rebuilt from the Bitnodes code and run by Rodrigo Martinez, who also holds the bitnodes.io domain; not affiliated with the original Bitnodes project (23 snapshots on November 16, 2026 UTC, between 17,827 and 19,925 reachable nodes)", url: "https://btcnodes.io/api/v1/snapshots/" }
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

A full node is a Bitcoin [node](/glossary/node) that downloads and validates the entire blockchain - every block from the [genesis block](/glossary/genesis-block) on January 3, 2009 through the latest one. It enforces every consensus rule independently and answers to no one's interpretation but its own. By default it also keeps every block, but that is not what makes a node full: a pruned node checks each block, discards old ones, and enforces the same rules.

The practical specs as of 2026:

- **Disk:** about 783 GB of block data in mid-November 2026, growing by roughly 83 GB a year; Bitcoin Core 32.1's setup screen says at least 911 GB will be stored. A 2 TB SSD lasts for years, and a pruned node needs far less.
- **RAM:** 4 GB is workable; 8 GB+ is comfortable.
- **CPU:** Anything from a Raspberry Pi 4 upward will run it. Initial sync is CPU-bound and takes a few days; ongoing operation is trivial.
- **Bandwidth:** With default settings a node that accepts inbound connections can use a lot, much of it old blocks served to nodes that are syncing. Cap-able via configuration if your ISP is hostile: Bitcoin Core can limit uploads or stop accepting inbound connections.

The software is usually [Bitcoin Core](/glossary/bitcoin-core), a direct descendant of the original Bitcoin software, which ran on about 87% of nodes in one October 2026 estimate. [Bitcoin Knots](/glossary/bitcoin-knots) is a modified version of Core. Knots releases from May 9, 2026 on enforce BIP-110, a temporary limit on data in transactions, and nodes running them left Bitcoin's main chain on August 8, 2026.

Why bother running a full node, when wallets can connect to public servers? Three reasons:

1. **You verify your own transactions.** Without a full node, you trust whichever server tells you whether your coins are valid. With a full node, your own software checks the rules. One default is worth knowing: Bitcoin Core 32.1 assumes blocks up to 966,143 are valid and may skip checking their scripts and signatures, unless you set it to verify them all.
2. **You enforce the rules for yourself.** Your node rejects any block or payment that breaks them, whatever miners or other nodes accept. Counting nodes matters less than it sounds: in the Bitcoin Wiki's words, "the only node that matters is the one you use."
3. **You opt out of metadata leakage.** Querying a public server for "is this transaction confirmed yet?" tells that server which addresses you care about. Your own node sees only the global chain, never your specific interest.

BTC Nodes, an independent rebuild of the Bitnodes crawler, counted about 19,000 publicly reachable nodes on November 16, 2026, and many more run behind home routers and firewalls without accepting inbound connections. Yours can be one of them.

See [Run Your Own Node](/rabbit-hole/run-your-own-node) for the full walkthrough.
