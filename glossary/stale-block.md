---
title: "Stale Block"
slug: stale-block
draft: false
shortDefinition: "A valid block that doesn't become part of the main chain, often called an 'orphan block' historically."
keyTakeaways:
  - "Lose the race to form the longest chain, invalidating the block reward"
  - "Reflect normal occurrences of block-finding collisions"
  - "Often confused with true orphan blocks (missing known parent block)"
sources: []
relatedTerms:
  - block-propagation
  - blockchain
  - chain-split
  - reorg-reorganization
liveWidget: ~
---

Stale (or orphaned) blocks occur when two miners find valid blocks simultaneously, but the network eventually builds on one, making the other 'stale.' Stale blocks don't contribute to the consensus chain, and the miner who found them receives no reward. These blocks were referred to as 'orphans' in older documentation, but actual 'orphan blocks' in protocol terms are extremely rare. Stale blocks show how Bitcoin's proof-of-work consensus can branch temporarily; the chain with more follow-up blocks becomes canonical, and the other is abandoned.
