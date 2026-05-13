---
title: "Byzantine Fault Tolerance"
slug: byzantine-fault-tolerance
draft: false
shortDefinition: "A system's ability to maintain correct operation even if some participants act maliciously or unpredictably."
keyTakeaways:
  - "Continues functioning despite malicious or faulty nodes"
  - "Addresses the 'Byzantine Generals Problem' in distributed systems"
  - "Bitcoin employs proof-of-work to ensure strong BFT properties"
sources: []
relatedTerms:
  - anti-sybil-mechanism
  - decentralization
  - full-node
  - hd-wallet-hierarchical-deterministic-wallet
  - mining-algorithm
  - node
  - node-headcount
  - proof-work-pow
liveWidget: ~
---

Byzantine Fault Tolerance (BFT) references the classic 'Byzantine Generals Problem,' where participants must coordinate a strategy despite some potentially being traitors. In Bitcoin, proof-of-work consensus tackles this by making dishonest behavior expensive-nodes only accept the longest valid chain, ignoring invalid blocks.
Other blockchains use different BFT algorithms (like delegated proof-of-stake). But in general, the term means the network can continue functioning even if some fraction of actors lie, cheat, or simply fail. Bitcoin's design ensures no single malicious miner or node can rewrite history without controlling the majority of hashing power, exemplifying robust BFT in practice.
