---
title: "Block Reward"
slug: block-reward
draft: false
updated: "2026-10-09"
shortDefinition: "The incentive miners receive for finding a valid block, comprising the block subsidy plus transaction fees."
keyTakeaways:
  - "Combines new BTC (subsidy) and user-paid fees"
  - "Halving events reduce the subsidy every 210k blocks"
  - "Ensures a steady incentive for miners to secure the network"
sources:
  - { label: "mempool.space - block fees vs subsidy chart (has a percentage view of the fee share)", url: "https://mempool.space/graphs/mining/block-fees-subsidy" }
  - { label: "mempool.space API - reward stats for the last 52,560 blocks (fees about 0.6% of revenue as of block 970,650, Oct 2026)", url: "https://mempool.space/api/v1/mining/reward-stats/52560" }
  - { label: "mempool.space - block fee rates chart", url: "https://mempool.space/graphs/mining/block-fee-rates" }
  - { label: "mempool.space API - median fee rates in mined blocks, last 3 years", url: "https://mempool.space/api/v1/mining/blocks/fee-rates/3y" }
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

1. **The [block subsidy](/glossary/block-subsidy)** - newly issued BTC, 3.125 per block as of October 2026, halved every 210,000 blocks until it reaches zero around 2140.
2. **Transaction fees** - the sum of fees from every transaction the miner chose to include in the block. Variable; depends on mempool conditions.

Both parts are paid to the miner via the [coinbase transaction](/glossary/coinbase-transaction), the special first transaction in every block. In Bitcoin's early years the subsidy was nearly all of the reward (transactions were essentially free). In the year to October 2026, fees were about 0.6% of miner revenue, or about 0.02 BTC per block. They were about 6.5% in 2024, and they still spike for short stretches when the mempool is congested.

The long-term economic question for Bitcoin's security is whether fees can fully replace the shrinking subsidy, and as of October 2026 it was still open. After a brief spike at the 2024 halving, the fee share dropped, and typical fee rates fell with it. The median fee rate in mined blocks was roughly 11 to 12 sat/vB in 2024 and about 1 sat/vB from January to early October 2026. See [Mining rabbit hole section 9](/rabbit-hole/mining) for the long version.
