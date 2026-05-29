---
title: "Miner Orphan Rate"
slug: miner-orphan-rate
draft: false
shortDefinition: "The percentage of mined blocks not accepted into the longest chain, often due to propagation delays or near-simultaneous finds."
keyTakeaways:
  - "Occurs when two competing valid blocks are found simultaneously"
  - "Reflects network propagation speed, not malicious activity"
  - "Impacts miner profitability; larger pools tend to have fewer orphans"
sources: []
relatedTerms:
  - block-propagation
  - miner
  - mining
  - mining-pool
  - orphan-block
liveWidget: ~
---

The orphan rate is the percentage of valid blocks a miner produces that don't end up in the canonical chain - blocks that lost a near-simultaneous race and got abandoned when the network converged on a different tip.

Strictly speaking, "orphan" is a misnomer. Blocks that lost the race are properly called *stale blocks*. The term "orphan" is reserved for blocks whose parent isn't known yet. But the colloquial usage persists.

Why orphans happen:

- Two miners find valid blocks at roughly the same time, each unaware of the other.
- Both blocks propagate across the network.
- Some nodes see block A first, some see block B first; they start mining on their respective tips.
- When the next block is found, it builds on one of the two. The other becomes stale.

For an individual miner, the orphan rate is direct lost revenue. Each orphan means burning electricity to produce a block that earns nothing.

What drives it:

- **Block propagation latency.** The longer your block takes to reach other miners, the higher the chance a competing block beats yours to a critical mass.
- **Geographic position.** Miners far from the network's connectivity center are at a structural disadvantage.
- **Pool affiliation.** Large pools have better relay infrastructure (direct peering with other pools, FIBRE membership, etc.) and lower orphan rates than solo miners on residential connections.

Typical 2026 orphan rates: well-connected industrial mining operations see less than 0.5% orphans. Hobbyist solo miners on home internet can see 1-3% orphans. Geographic outliers can be higher.

Bitcoin's difficulty retargeting mostly absorbs the network-wide effect of orphans: lost blocks don't change the average inter-block time, they just shift revenue between miners. But for any individual miner the orphan rate is a real and tracked cost of doing business.
