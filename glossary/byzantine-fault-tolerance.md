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
sameAs:
  - "https://en.wikipedia.org/wiki/Byzantine_fault"
  - "https://www.wikidata.org/wiki/Q1353446"
liveWidget: ~
---

Byzantine Fault Tolerance (BFT) is the property of a distributed system being able to keep functioning correctly even when some of its participants are actively malicious, lying, or unpredictably broken. The name comes from the 1982 "Byzantine Generals Problem" paper by Lamport, Shostak, and Pease, which framed the problem in terms of generals coordinating a battle plan when some of them are traitors.

For decades, BFT was understood to require *known, identified participants* with assigned voting weights. The classical results (PBFT and successors) needed a fixed set of validators and could tolerate up to ~1/3 of them being malicious.

What Satoshi did with [proof-of-work](/glossary/proof-work-pow) was solve BFT for *open, permissionless* membership - where anyone can join or leave the validator set at any time. The trick: instead of identified validators, identity itself is proven via expended computational work. An attacker can't just pretend to be many validators; each "vote" costs real energy.

Bitcoin's specific BFT properties:

- **Resists 51% attacks** economically. An attacker would need more than half of global hash rate, sustained, plus a willingness to spend the energy. Even succeeding only buys a probabilistic reorg of recent history, not a rewrite of deep history.
- **Heals from temporary disagreement.** When two miners find blocks at the same time, the network temporarily forks; the [longest chain rule](/glossary/longest-chain-rule) resolves it within a block or two.
- **Tolerates network partitions.** If parts of the network are disconnected, each side keeps mining; when they reconnect, the side with more cumulative work wins.

Proof-of-stake systems achieve BFT through different means (slashable bonds, identified validators). Bitcoin's energy-based BFT trades efficiency for permissionless openness - anyone can participate in validating, anyone can mine, anyone can run a node. The Byzantine generals don't have to know each other's names.

This was the key conceptual breakthrough in the Bitcoin [whitepaper](/glossary/whitepaper): permissionless BFT via proof-of-work. Every cryptocurrency that exists today is in some sense a variation on that idea.
