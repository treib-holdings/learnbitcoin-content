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
sameAs:
  - "https://en.bitcoin.it/wiki/Block_timestamp"
  - "https://en.bitcoin.it/wiki/Confirmation"
liveWidget: ~
---

Bitcoin's target block time is 10 minutes. That's the *average* interval [difficulty](/glossary/difficulty) tries to maintain by adjusting how hard the mining puzzle is. It's not the time you should expect to wait for any individual block.

Mining is a [Poisson process](/glossary/poisson-process). Each second, every miner in the world is independently trying random nonces. There's no "due" block. The actual interval between blocks is exponentially distributed: many blocks land in 1-5 minutes, some take 20-40 minutes, and a few times a year a block takes over an hour. The 10-minute number is just the mean over a long window.

The choice of 10 minutes (rather than, say, 1 minute like Litecoin or 15 seconds like Ethereum) was a deliberate tradeoff:

- **Long enough** to let a new block propagate to virtually every node on Earth before the next one is found. This minimizes [orphan blocks](/glossary/orphan-block) and chain forks.
- **Long enough** that the [proof-of-work](/glossary/proof-work-pow) per block is meaningful security.
- **Short enough** that confirmations accumulate at a useful rate. Six confirmations (the conventional "settled" threshold for large amounts) is about an hour.

The [difficulty retarget](/glossary/difficulty-retargeting) every 2,016 blocks pulls the average back toward 10 minutes when global hash rate has grown (or shrunk). See the [Mining rabbit hole §4](/rabbit-hole/mining) for the long version.
