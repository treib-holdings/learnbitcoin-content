---
title: "Block Time"
slug: block-time
draft: false
shortDefinition: "The average interval between consecutive blocks, targeted around 10 minutes for Bitcoin."
keyTakeaways:
  - "Aims for ~10 minutes per new block on average"
  - "Difficulty adjusts to maintain stable intervals"
  - "A core design choice balancing security and throughput"
sources: []
relatedTerms:
  - bip-152-compact-blocks
  - block
  - block-header
  - block-height
  - block-propagation
  - blockchain
  - difficulty-retargeting
  - mtp-median-time-past
liveWidget: ~
---

Satoshi Nakamoto set Bitcoin's target block time to ~10 minutes, balancing security and transaction processing frequency. Miners attempt to find a valid proof-of-work that meets the difficulty target. If blocks start arriving too quickly, the difficulty adjusts upward, and vice versa.
In practice, 10 minutes is an average; some blocks can take seconds, others can take over an hour. Over longer periods, the network self-corrects to maintain a stable block interval. This parameter also influences network throughput and how fast transactions gain confirmations.
