---
title: "Pooled Mining"
slug: pooled-mining
draft: false
shortDefinition: "Multiple miners combining their hash power in a mining pool and splitting rewards according to contributed work."
keyTakeaways:
  - "Reduces income variance by sharing block rewards"
  - "Dominant in Bitcoin's ASIC age, overshadowing solo mining"
  - "Can raise centralization issues if a handful of pools control most hash rate"
sources: []
relatedTerms:
  - hashlet
  - mining-pool
  - mining-subsidy
  - revenue-ths
liveWidget: ~
---

Pooled mining is the practice of combining many [miners'](/glossary/miner) [hash rate](/glossary/hash-rate) into a single coordinated effort, with rewards split among participants based on contributed work. It's how nearly all Bitcoin mining happens in 2026.

The mechanism: each miner submits "shares" - block-header candidates that meet a lower difficulty target than the actual network target. Shares prove the miner is doing real work without actually being valid blocks. When *anyone* in the pool finds a real block, the [block reward](/glossary/block-reward) is distributed across all contributing miners proportional to their submitted shares.

Why miners pool:

- **Variance reduction.** A solo miner with 1 PH/s would find an average of one block every ~26 years. The variance around that average is brutal: they might find three in 2026 and zero in the next 50 years. Pooling smooths that into a smaller, steadier income stream.
- **Operational simplicity.** Pools handle block template construction, payout accounting, and other infrastructure miners don't want to run themselves.
- **No solo-mining illusion.** The dirty secret of solo mining at small scale is that it's essentially the lottery. Pooled mining is honest about the variance.

The pool ecosystem:

- **Major pools** (Foundry USA, AntPool, ViaBTC, F2Pool) control most of the network's hash rate. See [Mining Pool](/glossary/mining-pool) for details.
- **Smaller / decentralized pools** like Ocean and Braiins try to offer alternatives with different policies on transaction selection or payout schemes.
- **Stratum V2** is the protocol upgrade letting individual miners choose their own transactions while still using a pool for variance smoothing - a meaningful structural fix to mining centralization concerns.

Pooled mining has always been a centralization concern. It's also genuinely necessary for everyone except the largest mining operations. The hope, more than the certainty, is that Stratum V2 adoption gradually shifts power back to individual miners within pools.

See [Mining Pool](/glossary/mining-pool) for the broader landscape and [Mining Centralization](/glossary/mining-centralization) for the structural debate.
