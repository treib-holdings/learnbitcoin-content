---
title: "Poisson Process"
slug: poisson-process
draft: false
shortDefinition: "A statistical model describing Bitcoin block discovery as a random event with an average 10-minute interval but high variance."
keyTakeaways:
  - "Blocks arrive randomly but average ~10 minutes over time"
  - "Variance is normal— occasionally blocks come seconds apart or hours apart"
  - "Difficulty retargeting keeps the long-term average stable"
sources: []
relatedTerms:
  - difficulty
  - difficulty-retargeting
  - proof-work-pow
liveWidget: ~
---

Mining can be viewed as a Poisson process: each hash attempt is independent, and the probability of finding a valid block is constant. Over many attempts, the expected time between blocks is ~10 minutes, but block arrivals can cluster (multiple blocks in quick succession) or space out (long gap). Over the long run, the average hovers near 10 minutes, thanks to difficulty adjustments. This random distribution is central to Bitcoin’s design—no block schedule is predetermined, and luck can cause short-term bursts or droughts in blocks mined.
