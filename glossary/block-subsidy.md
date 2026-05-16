---
title: "Block Subsidy"
slug: block-subsidy
draft: false
shortDefinition: "The newly minted BTC portion of a miner's block reward, which halves every 210,000 blocks."
keyTakeaways:
  - "Starts at 50 BTC per block and halves roughly every four years"
  - "Ensures a maximum supply of 21 million BTC"
  - "Coupled with fees to maintain miner incentives long-term"
sources: []
relatedTerms:
  - asymptote
  - bip-42
  - block
  - block-reward
  - block-size
  - coinbase-transaction
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - mining-subsidy
sameAs:
  - "https://en.bitcoin.it/wiki/Controlled_supply"
liveWidget: ~
---

The block subsidy is the new Bitcoin a miner receives for adding a valid block to the chain. It's the *only* mechanism by which new BTC enter circulation - every Bitcoin that has ever existed was first paid out as a block subsidy.

Currently the subsidy is **3.125 BTC per block**, set after the April 2024 halving. It will halve again to 1.5625 BTC around April 2028, and continues halving every 210,000 blocks until the subsidy rounds to zero around the year 2140.

The subsidy is paid via the [coinbase transaction](/glossary/coinbase-transaction) - a special transaction at the start of each block with no inputs that pays the miner whatever the protocol allows. If a miner tries to pay themselves more than the protocol-defined subsidy plus collected fees, every other node on the network rejects the block. The 21 million cap is enforced this way, one block at a time, by every full node on Earth.

Together with transaction fees, the subsidy makes up the [block reward](/glossary/block-reward) - the total compensation a miner gets for finding a block. Today, fees are typically 3-10% of the total. By 2140, fees will be 100% of it. See the [Mining rabbit hole](/rabbit-hole/mining) for the long version, or the [Halvings rabbit hole](/rabbit-hole/halvings) for when each subsidy cut happens.
