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

When a miner finds a valid block, they want to broadcast it ASAP to the entire network-this is competitive block propagation. If other miners receive it quickly, they’ll switch to building on that block, reducing orphan risk. Techniques like [Compact Blocks](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki) and other relay optimizations help new blocks spread within seconds.
Speed matters because any delay in sharing a newly discovered block means other miners might also discover a block on the old chain, creating a short-lived fork. The miner whose block is more widely recognized first often wins, while late-propagating blocks can become orphans, denying that miner the block reward. Hence, efficient propagation infrastructure is critical for competitive mining operations.
