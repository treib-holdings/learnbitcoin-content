---
title: "Reorg (Reorganization)"
slug: reorg-reorganization
draft: false
shortDefinition: "When a longer or heavier chain appears, nodes switch from the current tip to the new chain, invalidating blocks at the old tip."
keyTakeaways:
  - "Occurs if a previously behind chain overtakes the main chain’s proof-of-work"
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

A blockchain reorg occurs if miners extend a side branch of blocks such that it eventually outstrips the main chain’s proof-of-work total. Bitcoin nodes then ‘reorganize’ to that chain, rolling back any blocks not part of it-thus invalidating transactions in those orphaned blocks if they were not included in the new chain. Short reorgs of 1-2 blocks happen regularly due to natural block-finding races, but longer reorgs are rare and can indicate serious issues or potential attacks. Reorgs can lead to transaction confirmations being temporarily undone, underscoring why multiple confirmations are advised for high-value transfers.
