---
title: "Orphan Block"
slug: orphan-block
draft: false
shortDefinition: "Older term for a block not accepted into the best chain (more accurately referred to as a stale or orphaned block)."
keyTakeaways:
  - "Also called stale or uncle blocks in other systems"
  - "Lose out to another valid block in the chain-building process"
  - "Miner of the orphan block doesn't receive the block reward"
sources: []
relatedTerms: []
liveWidget: ~
---

"Orphan block" is older terminology for a valid block that didn't end up in the canonical chain. Modern Bitcoin Core documentation prefers [stale block](/glossary/stale-block) for this concept, reserving "orphan" for the genuinely rare case of a block whose parent the local node hasn't yet received.

In practice, when two [miners](/glossary/miner) find a valid block at nearly the same height almost simultaneously - which happens a few times a year on average - the network temporarily splits. Each half builds on the block it saw first. Within a block or two, one branch typically pulls ahead, and the other branch's tip block is abandoned. The miner of that abandoned block doesn't get paid.

The naming history is messy. You'll see "orphan," "stale," and "uncle" (the Ethereum term) all used interchangeably in older write-ups. For Bitcoin in 2026, the cleaner distinction is:

- **Stale block** - a valid block, fully verified, that lost the race. The block existed; it just isn't part of the longest chain anymore.
- **Orphan block** - a block whose parent the local node doesn't have. Usually a propagation artifact, almost always resolved within seconds when the parent arrives.

Both are normal consequences of a globally distributed proof-of-work race. Neither indicates anything wrong with Bitcoin. See [Reorg](/glossary/reorg-reorganization) for what happens to the transactions inside a stale block.
