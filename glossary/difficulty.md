---
title: "Difficulty"
slug: difficulty
draft: false
shortDefinition: "A measure of how tough it is to find a block hash below the network's target. Adjusted every 2016 blocks (~two weeks)."
keyTakeaways:
  - "Regulates block discovery to ~10 minutes on average"
  - "Automatically adjusts based on total network hash rate"
  - "Maintains a predictable issuance pattern"
sources: []
relatedTerms:
  - coin-control
  - competitive-mining
  - consensus-parameter
  - difficulty-retargeting
  - double-spend
  - mining-subsidy
  - module-signing
  - nonce
  - poisson-process
  - proof-work-pow
  - revenue-ths
liveWidget: ~
---

Difficulty is a number that defines how hard it is to mine a Bitcoin block right now. Specifically, it determines the **target** value that a [block header](/glossary/block-header) [hash](/glossary/hash) must fall below to be valid. Higher difficulty = lower target = more attempts needed on average to find a valid hash.

Difficulty is set so that, given the current global [hash rate](/glossary/hash-rate), blocks come out on average every 10 minutes. As hash rate grows or shrinks, difficulty adjusts via [difficulty retargeting](/glossary/difficulty-retargeting) every 2,016 blocks (about every two weeks).

A rough sense of the scale: the Bitcoin network has done difficulty adjustments roughly 400 times since the genesis block. Genesis-block difficulty was 1. Difficulty as of mid-2026 is around 132 trillion. That ratio - 13 orders of magnitude - is the entire growth of the global Bitcoin mining industry, from one CPU on a desktop to a global industrial sector.

Difficulty is the part of [proof-of-work](/glossary/proof-work-pow) that makes the system self-tuning. Whether 10 miners or 10,000 are competing, blocks still come out roughly every 10 minutes and BTC is issued on schedule. The network doesn't care about the price of hardware or electricity. It cares about hash rate, and it adjusts in response to it.

See the [Mining rabbit hole §4](/rabbit-hole/mining) for the mechanism, and the [Node page](/node) for the current difficulty and epoch progress on our Bitcoin node.
