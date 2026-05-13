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

Mining difficulty ensures new blocks appear roughly every 10 minutes, regardless of how many miners are competing. When miners join with more hashing power, blocks are found faster-so after 2016 blocks, the difficulty retargets upward, bringing block times back on average to 10 minutes.
This dynamic scaling is a cornerstone of proof-of-work. It's akin to a treadmill that speeds up if you run too fast and slows down if you run too slow. The result is a relatively stable issuance schedule for new BTC, unaffected by short-term spikes or drops in mining power.
