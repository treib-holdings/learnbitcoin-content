---
title: "Competitive Block Propagation"
slug: competitive-block-propagation
draft: false
shortDefinition: "The rapid broadcasting of newly mined blocks as miners race to share them with the network first."
keyTakeaways:
  - "Miners aim to broadcast new blocks as fast as possible"
  - "Reduces orphan blocks and maximizes reward certainty"
  - "Relay innovations like Compact Blocks improve network speed"
sources: []
relatedTerms:
  - block-propagation
  - competitive-mining
  - miner-extractable-value-mev
  - mining-algorithm
  - mining-centralization
  - mining-colocation
  - stale-block
liveWidget: ~
---

Competitive block propagation is the high-stakes version of [block propagation](/glossary/block-propagation): the race to broadcast a freshly-mined block to enough of the network that other miners switch to building on top of it before they find a competing block of their own.

The economics:

- A block that propagates faster has a better chance of being the one other miners extend. That's the block whose reward gets paid.
- A block that propagates slowly may be overtaken by a near-simultaneous block from a better-connected miner. The slower block becomes an orphan; its reward is lost.
- For large operations, the orphan rate is a real percentage of revenue. Cutting it by half a percent is worth significant engineering investment.

How miners compete:

- **Compact Blocks (BIP 152)** at the protocol level: every miner gets this for free in Bitcoin Core.
- **Direct peering** with other miners and pools: skip the public P2P network for the most latency-sensitive hops.
- **Dedicated relay networks** (FIBRE, Falcon): UDP-based low-latency block relay, run by miners and infrastructure providers, push blocks globally in tens of milliseconds.
- **Geographic placement.** Mining near major internet exchange points (Frankfurt, Amsterdam, Singapore, Ashburn) shaves milliseconds of latency.
- **Validation-free forwarding.** "Spy mining" / "headers-first mining" lets a miner build on a new block's *header* before validating its body. Risky if the body turns out invalid, but for the seconds it saves it can be worth it.

The arms race is bounded by the same protocol everyone runs. No miner can structurally pull ahead; the optimizations are marginal and well-known. But at industrial scale, marginal becomes meaningful.
