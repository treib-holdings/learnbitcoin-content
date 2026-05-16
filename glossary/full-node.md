---
title: "Full Node"
slug: full-node
draft: false
shortDefinition: "A Bitcoin client that downloads and validates all blocks/transactions, enforcing the rules independently."
keyTakeaways:
  - "Stores/validates the entire blockchain locally"
  - "The backbone of Bitcoin's trustless model"
  - "Requires more resources than lightweight/spv wallets"
sources: []
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

A full node is a Bitcoin [node](/glossary/node) that downloads, validates, and stores the entire blockchain - every block from the [genesis block](/glossary/genesis-block) on January 3, 2009 through whatever the current tip is right now. It enforces every consensus rule independently and answers to no one's interpretation but its own.

The practical specs as of 2026:

- **Disk:** ~600 GB and growing by ~150 GB/year. A 2 TB SSD lasts comfortably for years.
- **RAM:** 4 GB is workable; 8 GB+ is comfortable.
- **CPU:** Anything from a Raspberry Pi 4 upward will run it. Initial sync is CPU-bound and takes a few days; ongoing operation is trivial.
- **Bandwidth:** Several hundred GB per month of outbound, mostly serving blocks to peers. Cap-able via configuration if your ISP is hostile.

The software is almost always [Bitcoin Core](/glossary/bitcoin-core), the reference implementation. Alternatives like [Bitcoin Knots](/glossary/bitcoin-knots) exist but are essentially patched versions of Core.

Why bother running a full node, when wallets can connect to public servers? Three reasons:

1. **You verify your own transactions.** Without a full node, you trust whichever server tells you whether your coins are valid. With a full node, you check the math yourself - no trust required.
2. **You enforce consensus.** Every full node is one more node a hypothetical attacker has to convince. The network's resistance to rule changes scales with the number of independent validators.
3. **You opt out of metadata leakage.** Querying a public server for "is this transaction confirmed yet?" tells that server which addresses you care about. Your own node sees only the global chain, never your specific interest.

The Bitcoin community runs an estimated 15,000-20,000 publicly reachable full nodes, plus many more behind NAT or on Tor. Yours can be one of them.

See the [Sovereignty Journey](/journey/sovereignty) for the full walkthrough.
