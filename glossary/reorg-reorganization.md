---
title: "Reorg (Reorganization)"
slug: reorg-reorganization
draft: false
shortDefinition: "When a longer or heavier chain appears, nodes switch from the current tip to the new chain, invalidating blocks at the old tip."
keyTakeaways:
  - "Occurs if a previously behind chain overtakes the main chain's proof-of-work"
  - "Can reverse recent transactions included in blocks on the shorter chain"
  - "Short reorgs are normal; deep reorgs signal potential attacks or chain splits"
sources: []
relatedTerms:
  - block-propagation
  - blockchain
  - chain-split
  - corrupted-chain-state
  - double-spend
  - double-spend-relay
  - fork
  - fork-detection
  - fork-watcher
  - full-validation
  - race-attack
  - replay-attack
  - stale-block
liveWidget: ~
---

A reorg - chain **reorganization** - is what happens when a [Bitcoin node](/glossary/node) learns about a longer chain than the one it was currently following, and switches to it. The blocks it had at the previous tip become [stale](/glossary/stale-block); the transactions they contained are returned to the [mempool](/glossary/mempool) unless they're also present in the new chain.

The rule that drives reorgs is "longest valid chain wins" - more precisely, the chain with the most accumulated [proof-of-work](/glossary/proof-work-pow). When two miners find blocks at nearly the same height, the network temporarily splits. As soon as the next block is mined on one side, that side has more cumulative work, and nodes that were on the other side reorg to it.

Two flavors:

- **Shallow reorgs (1-2 blocks deep).** Routine. They happen multiple times per year and only affect transactions that were just barely confirmed. This is exactly why the 6-confirmation rule exists for high-value transfers - after six blocks, the probability of a reorg overturning your transaction is vanishingly small absent a massive coordinated attack.
- **Deep reorgs (3+ blocks).** Rare and concerning. Most observed deep reorgs on Bitcoin's mainnet have been caused by software bugs, brief network partitions, or - on testnet - deliberate attacks for research purposes. A deep reorg on mainnet would be a serious event worth investigating.

The economic implication: a transaction is only as final as the work that has been mined on top of it. One confirmation is "probably fine for small amounts." Six confirmations is "fine for almost everything." Hundreds is "permanent for all practical purposes." See [Double Spend](/glossary/double-spend) for the attack that reorgs make harder, and [Mining rabbit hole](/rabbit-hole/mining) for the economics.
