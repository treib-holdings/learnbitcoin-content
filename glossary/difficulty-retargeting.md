---
title: "Difficulty Retargeting"
slug: difficulty-retargeting
draft: false
shortDefinition: "The automatic recalibration of Bitcoin’s mining difficulty every 2016 blocks to sustain a 10-minute block interval."
keyTakeaways:
  - "Conducted roughly every two weeks (2016 blocks)"
  - "Ensures consistent block intervals despite hash rate changes"
  - "Key to Bitcoin’s self-regulating proof-of-work design"
sources: []
relatedTerms:
  - block-height
  - block-time
  - competitive-mining
  - consensus-parameter
  - cuckoo-cycle
  - difficulty
  - halving-halvening
  - miner
  - mining-algorithm
  - nonce-exhaustion
  - poisson-process
  - proof-work-pow
liveWidget: ~
---

Difficulty retargeting is the mechanism behind the scenes ensuring that no matter how many new mining rigs come online, Bitcoin blocks don’t start popping out every 30 seconds. After every 2016 blocks (about two weeks), the network compares actual block times to the 10-minute target. If blocks were found faster on average, difficulty goes up; if slower, it goes down.
Without this retarget, an influx of mining power could accelerate block production and flood the market with new BTC. Similarly, a mass exodus of miners could slow the chain to a crawl. Retargeting keeps the issuance schedule on track, reinforcing Bitcoin’s predictable monetary policy.
