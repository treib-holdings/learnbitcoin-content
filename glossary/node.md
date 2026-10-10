---
title: "Node"
slug: node
draft: false
updated: "2026-10-10"
shortDefinition: "A computer running Bitcoin software to validate and relay blocks/transactions, enforcing network consensus rules."
keyTakeaways:
  - "Validates transactions/blocks according to consensus"
  - "Can be full (entire chain) or SPV (partial verification)"
  - "Key to Bitcoin's decentralized security model"
sources:
  - { label: "Bitcoin whitepaper (Satoshi Nakamoto, 2008) - section 5: nodes accept a block only if all transactions in it are valid; section 7: a block header is about 80 bytes, 4.2 MB a year; section 8: simplified payment verification keeps only the headers and checks a transaction with its Merkle branch", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "Bitcoin Core 31 - validation.cpp (a block whose coinbase pays more than the subsidy plus fees is invalid: bad-cb-amount)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/validation.cpp" }
  - { label: "Bitcoin Core 31 - kernel/chainparams.cpp (mainnet disk guidelines: m_assumed_blockchain_size 856 and m_assumed_chain_state_size 14, in GB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core 31 - qt/intro.cpp (the setup screen adds the two figures and says at least 870 GB of data will be stored)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/qt/intro.cpp" }
  - { label: "bitnodes.io - independent rebuild of the Bitnodes crawler, run by Rodrigo Martinez and not affiliated with the original project (25,514 reachable nodes on October 9, 2026)", url: "https://bitnodes.io" }
  - { label: "BTC Nodes API - bitnodes.io snapshot of October 9, 2026, 19:28 UTC (25,514 nodes, main chain at height 970,671; 1,829 nodes with Knots user agents report heights off the main chain: 656 stuck at 961,639 and 1,173 near 976,430, ahead of the main chain)", url: "https://btcnodes.io/api/v1/snapshots/1791574083/" }
  - { label: "Luke Dashjr - Bitcoin node count history chart (listening plus estimated non-listening nodes: 104,388 at 00:00 UTC on October 10, 2026)", url: "https://luke.dashjr.org/programs/bitcoin/files/charts/historical.html" }
  - { label: "Luke Dashjr - Bitcoin node software chart (its per-version list puts about 7,900 nodes on Knots builds that enforce BIP-110, about 5,000 of them on 29.4.1 or 29.4.2, on October 10, 2026)", url: "https://luke.dashjr.org/programs/bitcoin/files/charts/software.html" }
  - { label: "Bitcoin Knots - official site (names Luke Dashjr as lead maintainer)", url: "https://bitcoinknots.org/" }
  - { label: "Bitcoin Knots v29.4.1 release notes (September 2, 2026) - dates the split to August 8; backward-incompatible change to a BLAKE2b proof of work", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.1.knots20260508" }
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-knots
  - bitcoin-satellite
  - dedicated-ip-nodes
  - eclipse-attack
  - full-node
  - full-validation
  - headless-node
  - hidden-service-node
  - i2p-invisible-internet-project
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
sameAs:
  - "https://en.wikipedia.org/wiki/Node_(networking)"
  - "https://www.wikidata.org/wiki/Q173106"
liveWidget: ~
---

A Bitcoin node is a computer running Bitcoin software that participates in the peer-to-peer network. It receives [transactions](/glossary/transaction) and [blocks](/glossary/block), validates them against the consensus rules, and relays valid ones to its peers.

Nodes come in two practical flavors:

- **[Full nodes](/glossary/full-node)** download and validate every block from the [genesis block](/glossary/genesis-block) onward, maintaining the complete UTXO set and enforcing every consensus rule independently. This is the gold standard of trustlessness.
- **SPV (Simplified Payment Verification) nodes** download only block headers and rely on full nodes to confirm transaction inclusion via Merkle proofs. They're much lighter. Each block header is 80 bytes, about 4.2 MB a year, so the headers for the roughly 970,000 blocks mined by October 2026 come to about 78 MB. Bitcoin Core 31's setup screen, by contrast, says a full node will store at least 870 GB. The catch is that SPV nodes give up some verification guarantees.

Nodes are how Bitcoin enforces its rules. Miners propose blocks; nodes accept or reject them. A miner that produces an invalid block - too much subsidy, an invalid signature, a malformed transaction - sees their block ignored by every honest node on the network. This is the reasoning behind the popular saying that Bitcoin is governed by nodes, not miners. The hash rate decides which valid history wins; the nodes decide what *valid* means.

bitnodes.io counted 25,514 publicly reachable nodes on October 9, 2026, a figure that includes 1,829 Knots nodes that no longer follow Bitcoin's main chain. Many more don't accept incoming connections, so a crawler can't reach them to count them. Luke Dashjr's counter adds an estimate for those and put the total at about 104,000 on October 10, 2026. Dashjr maintains Bitcoin Knots, and his total includes several thousand Knots nodes on versions that have left the main chain. That distributed enforcement is the real backbone of Bitcoin's security model.

See [Full Node](/glossary/full-node) for what running one looks like in practice, and [Journey: Sovereignty](/journey/sovereignty) for why you might want to.
