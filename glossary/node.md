---
title: "Node"
slug: node
draft: false
shortDefinition: "A computer running Bitcoin software to validate and relay blocks/transactions, enforcing network consensus rules."
keyTakeaways:
  - "Validates transactions/blocks according to consensus"
  - "Can be full (entire chain) or SPV (partial verification)"
  - "Key to Bitcoin's decentralized security model"
sources: []
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
- **SPV (Simplified Payment Verification) nodes** download only block headers and rely on full nodes to confirm transaction inclusion via Merkle proofs. They're much lighter (a few megabytes vs hundreds of gigabytes) but trade away some verification guarantees.

Nodes are how Bitcoin enforces its rules. Miners propose blocks; nodes accept or reject them. A miner that produces an invalid block - too much subsidy, an invalid signature, a malformed transaction - sees their block ignored by every honest node on the network. This is why the famous claim "Bitcoin is governed by nodes, not miners" is true. The hash rate decides which valid history wins; the nodes decide what *valid* means.

The network currently has roughly 15,000-20,000 publicly reachable full nodes, plus an unknown larger number of non-listening nodes (running behind NAT, on Tor, etc). That distributed enforcement is the real backbone of Bitcoin's security model.

See [Full Node](/glossary/full-node) for what running one looks like in practice, and [Journey: Sovereignty](/journey/sovereignty) for why you might want to.
