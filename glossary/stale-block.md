---
title: "Stale Block"
slug: stale-block
draft: false
updated: "2026-10-09"
shortDefinition: "A valid block that doesn't become part of the main chain, often called an 'orphan block' historically."
keyTakeaways:
  - "Lose the race to form the longest chain, invalidating the block reward"
  - "Reflect normal occurrences of block-finding collisions"
  - "Often confused with true orphan blocks (missing known parent block)"
sources:
  - { label: "bitcoin-data/stale-blocks - public dataset of stale blocks (between 28 and 93 a year from 2022 through 2025, as of October 2026)", url: "https://github.com/bitcoin-data/stale-blocks" }
relatedTerms:
  - block-propagation
  - blockchain
  - chain-split
  - reorg-reorganization
liveWidget: ~
---

A stale block is a valid Bitcoin block that didn't end up in the canonical chain. Two [miners](/glossary/miner) found blocks at the same height at nearly the same moment; the network split briefly; one side won; the loser is a stale block.

What makes a block stale isn't anything wrong with the block itself - every full node could validate it as correctly formed, with valid signatures, valid proof-of-work, and a valid coinbase claim. It just isn't part of the longest chain anymore. Once a [reorg](/glossary/reorg-reorganization) replaces it, the miner who found it gets no [block reward](/glossary/block-reward); the transactions in the stale block (other than the coinbase) typically end up back in [mempools](/glossary/mempool) to be mined again later.

Stale blocks are normal. Bitcoin's 10-minute target works out to about 52,600 blocks a year, found by miners spread around the world, and near-simultaneous finds leave dozens of them stale each year. The public bitcoin-data/stale-blocks dataset lists between 28 and 93 a year from 2022 through 2025. The longer the average block time and the better block propagation, the lower the stale-block rate. Bitcoin's 10-minute block time was chosen partly to keep stale rates low.

The older term for the same thing is [orphan block](/glossary/orphan-block), which is still sometimes seen in older documentation but has been formally distinguished from a different (rarer) case where a node literally hasn't received the parent block yet.

Stale blocks don't indicate a problem with Bitcoin. They indicate Bitcoin is working - independent miners across the planet racing to extend the chain, with the network converging on whichever side has more work.
