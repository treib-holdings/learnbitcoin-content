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
liveWidget: ~
---

Every time a miner solves the cryptographic puzzle for a new block, the network grants them a reward. This consists of two main parts: the newly minted BTC (block subsidy) and any transaction fees from the included transactions. Early on, the subsidy dominated the reward, but as halvings occur every 210,000 blocks, the newly minted portion shrinks.
Transaction fees become more significant over time, theoretically ensuring miners stay incentivized even after the subsidy drops to near-zero. The block reward is a fundamental pillar of Bitcoin's design: it encourages miners to maintain the network's security by devoting computation power and electricity to proof-of-work mining.
