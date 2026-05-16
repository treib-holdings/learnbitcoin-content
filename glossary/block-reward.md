---
title: "Block Reward"
slug: block-reward
draft: false
shortDefinition: "The incentive miners receive for finding a valid block, comprising the block subsidy plus transaction fees."
keyTakeaways:
  - "Combines new BTC (subsidy) and user-paid fees"
  - "Halving events reduce the subsidy every 210k blocks"
  - "Ensures a steady incentive for miners to secure the network"
sources: []
relatedTerms:
  - bip-42
  - block
  - block-explorer
  - block-size
  - block-subsidy
  - coinbase-transaction
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-subsidy
sameAs:
  - "https://en.bitcoin.it/wiki/Controlled_supply"
  - "https://en.bitcoin.it/wiki/Mining"
liveWidget: ~
---

The block reward is the total compensation a miner receives for finding a valid block. It has two parts:

1. **The [block subsidy](/glossary/block-subsidy)** - newly issued BTC, currently 3.125 per block, halved every 210,000 blocks until it reaches zero around 2140.
2. **Transaction fees** - the sum of fees from every transaction the miner chose to include in the block. Variable; depends on mempool conditions.

Both parts are paid to the miner via the [coinbase transaction](/glossary/coinbase-transaction), the special first transaction in every block. In Bitcoin's early years the subsidy was nearly all of the reward (transactions were essentially free). Today fees usually contribute 3-10%, with occasional spikes when the mempool is congested.

The long-term economic question for Bitcoin's security is whether fees can fully replace the shrinking subsidy. So far the trend is consistent with the design - per-byte fees keep rising as Bitcoin's usage matures. See [Mining rabbit hole §5](/rabbit-hole/mining) for the long version.
