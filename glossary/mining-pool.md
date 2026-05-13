---
title: "Mining Pool"
slug: mining-pool
draft: false
shortDefinition: "A collective of miners pooling their hash power and sharing rewards proportionally to contributed work."
keyTakeaways:
  - "Combines resources for more consistent miner payouts"
  - "Pool members receive shares of the block reward"
  - "Can lead to centralization if few pools dominate"
sources: []
relatedTerms:
  - block-reward
  - coinbase-transaction
  - hashpool
  - hidden-miner
  - merged-mining
  - miner
  - mining
  - mining-algorithm
  - mining-colocation
  - mining-centralization
  - mining-rig
  - mining-software
  - mining-subsidy
  - pooled-mining
  - retail-mining
  - revenue-ths
liveWidget: ~
---

A mining pool is a group of [miners](/glossary/miner) who combine their hash rate to find blocks together and split the rewards proportionally.

Why pools exist: variance. A miner with 0.1% of global hash rate would, on average, find one block every ~70 days - but the variance around that average is enormous. Some months they'd find three; some months zero. With electricity bills due every month, "averaged over years" is not a viable cash flow. Pools fix this by aggregating many miners' hash power so blocks come more frequently (proportional to combined hash), and paying each contributor based on the "shares" of work they submit.

The biggest pools today (Foundry USA, AntPool, ViaBTC, F2Pool, and a handful of others) collectively control well over half of global hash rate. This is the centralization concern that keeps Bitcoin developers up at night: if a few pool operators decide together to censor certain transactions, or to attempt a reorganization, they have the hash power to attempt it.

The counterweight is that **pool operators are not miners**. The hash rate in a pool comes from individual miners who can switch pools at will. If a pool starts misbehaving, miners can - and do - migrate elsewhere within hours. There's also work happening to push power back to individual miners: **Stratum V2** is a protocol upgrade that lets miners (not pool operators) choose which transactions go into the blocks they're hashing on. It's been slow to deploy but is the structural fix.

The current state is uncomfortable but not catastrophic. See [Mining rabbit hole §8](/rabbit-hole/mining) for a longer look at mining centralization and how it's actually evolving.
