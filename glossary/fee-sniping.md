---
title: "Fee Sniping"
slug: fee-sniping
draft: false
shortDefinition: "A hypothetical scenario where a miner reorganizes a block to collect higher transaction fees, potentially more common when block subsidy is low."
keyTakeaways:
  - "Involves re-mining a recent block to capture higher fees"
  - "May become more likely post-subsidy eras when fees dominate rewards"
  - "High risk of orphaned blocks deters widespread sniping attempts"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - miner-extractable-value-mev
  - replace-fee-rbf
  - resource-exhaustion-attack
  - transaction
  - transaction-fee
liveWidget: ~
---

Fee sniping imagines a situation in which a miner sees a newly mined block with modest fees and decides to mine a competing block at the same height, hoping to claim a higher-fee transaction set for themselves. This becomes more tempting once the block subsidy diminishes, since fees represent a larger share of the block reward.
Though theoretically possible, fee sniping is risky—it requires significant hashing power to outcompete the existing block. If the attempt fails, the miner misses out on building on top of the valid chain, losing potential rewards. Various measures, like increased block propagation speed, reduce the incentive by making each block quickly recognized by other miners.
