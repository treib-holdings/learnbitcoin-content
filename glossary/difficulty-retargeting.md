---
title: "Difficulty Retargeting"
slug: difficulty-retargeting
draft: false
shortDefinition: "The automatic recalibration of Bitcoin's mining difficulty every 2016 blocks to sustain a 10-minute block interval."
keyTakeaways:
  - "Conducted roughly every two weeks (2016 blocks)"
  - "Ensures consistent block intervals despite hash rate changes"
  - "Key to Bitcoin's self-regulating proof-of-work design"
sources: []
relatedTerms:
  - block-height
  - block-time
  - competitive-mining
  - consensus-parameter
  - difficulty
  - halving-halvening
  - miner
  - mining-algorithm
  - nonce-exhaustion
  - poisson-process
  - proof-work-pow
liveWidget: ~
---

Difficulty retargeting is the mechanism by which Bitcoin keeps its average [block time](/glossary/block-time) at ~10 minutes regardless of how much [hash rate](/glossary/hash-rate) is on the network.

The rule is mechanical:

- Every **2,016 blocks** (roughly two weeks), every node computes how long that 2,016-block "epoch" actually took.
- If it took **less than two weeks**, blocks were too fast: [difficulty](/glossary/difficulty) goes **up**.
- If it took **more than two weeks**, blocks were too slow: difficulty goes **down**.
- The adjustment ratio is proportional, **clamped at ±300%** to prevent extreme swings.

The adjustment kicks in instantly at the start of the next epoch. The new difficulty is then in force for the next 2,016 blocks, when the cycle repeats.

This is one of the most consequential and underappreciated pieces of mechanism design in Bitcoin. There is no committee. There is no Federal Reserve raising rates. The network observes its own conditions and corrects, on a fixed schedule, forever. A miner with 80 MW of hash power coming online doesn't change Bitcoin's issuance schedule; they just trigger a higher difficulty at the next retarget.

The mechanism has held through enormous events: China's 2021 mining ban (hash rate dropped ~50% in weeks; difficulty corrected down 28% in the next retarget), the 2022 bear market miner exodus, and four halvings. Every time, the network rebalances and returns to its 10-minute average within an epoch or two.

See the live current epoch progress and next-adjustment estimate in the [Mining rabbit hole §4](/rabbit-hole/mining) or on the [Node page](/node).
