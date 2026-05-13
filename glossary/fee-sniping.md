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

Fee sniping is a theoretical mining strategy where a miner who has just found a block decides to *not* build on top of it, but instead try to re-mine the same block height to capture the high-fee transactions for themselves. It's a niche attack that becomes more relevant as the [block subsidy](/glossary/block-subsidy) decreases and transaction fees become the dominant share of miner revenue.

How it would work, hypothetically:

1. Block N is mined with collected fees of, say, 0.5 BTC.
2. A different miner sees this and computes: "If I re-mine block N with the same transaction set, I can collect those 0.5 BTC in fees. That's worth more than the expected reward of building block N+1 on top of the existing block."
3. They try to mine an alternative block N. If they succeed before anyone mines N+1, the network may reorg to their chain.

Why this is rare and risky:

- **They need significant hash rate** to have a meaningful chance of out-racing the existing block. A small miner has near-zero probability of success.
- **Failure costs.** If their re-mining attempt fails (someone else mines N+1 first), they've lost the time they could have spent mining N+1. Opportunity cost.
- **Reputation costs.** Visible fee-sniping behavior signals to other miners that this operator is unreliable and may make them less willing to coordinate.

Defensive measures already in place:

- **`nLockTime` set to current height.** Modern wallets set transaction locktimes to the current block height. This makes those transactions invalid for any *earlier* block, so a fee sniper can't include them in a re-mined block at the same height - only in N or later.
- **Fast block propagation.** With [compact block relay (BIP-152)](/glossary/bip-152-compact-blocks) propagating new blocks in milliseconds, the window during which a competing block could be assembled is tiny.

Fee sniping is more of an open theoretical concern than a present-day problem. As Bitcoin approaches the fee-dominated era (post-2140), the math changes, and the strategy could become more attractive. The community is aware and watching. So far, no observed cases. See [Miner Extractable Value (MEV)](/glossary/miner-extractable-value-mev) for the broader category of strategies fee sniping fits into.
