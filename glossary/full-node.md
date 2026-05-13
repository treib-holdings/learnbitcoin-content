---
title: "Full Node"
slug: full-node
draft: false
shortDefinition: "A Bitcoin client that downloads and validates all blocks/transactions, enforcing the rules independently."
keyTakeaways:
  - "Stores/validates the entire blockchain locally"
  - "The backbone of Bitcoin’s trustless model"
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
liveWidget: ~
---

A full node is your private gatekeeper, verifying every piece of data without relying on trust. By running a full node, you confirm all consensus rules-block sizes, valid signatures, transaction scripts-leaving no room for a sneaky miner or hostile node to feed you invalid data. Bitcoin Core is the most prominent full node software, though alternatives exist.
While demanding more storage and bandwidth than light wallets, full nodes strengthen the network’s decentralization and give you maximum sovereignty over your transactions. You aren’t dependent on a third party’s interpretation of the chain, and you can set your own policies for mempool acceptance, ensuring you remain unfooled by potential forks or malicious peers.
