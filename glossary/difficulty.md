---
title: "Difficulty"
slug: difficulty
draft: false
updated: "2026-10-09"
shortDefinition: "A measure of how tough it is to find a block hash below the network's target. Adjusted every 2016 blocks (~two weeks)."
keyTakeaways:
  - "Regulates block discovery to ~10 minutes on average"
  - "Automatically adjusts based on total network hash rate"
  - "Maintains a predictable issuance pattern"
sources:
  - { label: "mempool.space API - every difficulty change since 2009 (466 changes through October 2026, about 1.3 x 10^14 in mid-2026)", url: "https://mempool.space/api/v1/mining/hashrate/all" }
relatedTerms:
  - coin-control
  - competitive-mining
  - consensus-parameter
  - difficulty-retargeting
  - double-spend
  - mining-subsidy
  - nonce
  - poisson-process
  - proof-work-pow
  - revenue-ths
sameAs:
  - "https://en.bitcoin.it/wiki/Difficulty"
liveWidget: ~
---

Difficulty is a number that defines how hard it is to mine a Bitcoin block right now. Specifically, it determines the **target** value that a [block header](/glossary/block-header) [hash](/glossary/hash) must fall below to be valid. Higher difficulty = lower target = more attempts needed on average to find a valid hash.

Difficulty is set so that, given the current global [hash rate](/glossary/hash-rate), blocks come out on average every 10 minutes. As hash rate grows or shrinks, difficulty adjusts via [difficulty retargeting](/glossary/difficulty-retargeting) every 2,016 blocks (about every two weeks).

For a rough sense of scale, the Bitcoin network changed its difficulty more than 460 times between the genesis block and October 2026. Genesis-block difficulty was 1. Difficulty in mid-2026 was around 130 trillion. That ratio - about 14 orders of magnitude - is the entire growth of the global Bitcoin mining industry, from one CPU on a desktop to a global industrial sector.

Difficulty is the part of [proof-of-work](/glossary/proof-work-pow) that makes the system self-tuning. Whether 10 miners or 10,000 are competing, blocks still come out roughly every 10 minutes and BTC is issued on schedule. The network doesn't care about the price of hardware or electricity. It cares about hash rate, and it adjusts in response to it.

See the [Mining rabbit hole section 4](/rabbit-hole/mining) for the mechanism, and the [Node page](/node) for the current difficulty and epoch progress.
