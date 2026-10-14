---
title: "Reorg (Reorganization)"
slug: reorg-reorganization
draft: false
updated: "2026-10-13"
shortDefinition: "When a chain with more accumulated proof-of-work appears, nodes switch from their current tip to it, leaving the blocks at the old tip stale."
keyTakeaways:
  - "Occurs if a previously behind chain overtakes the main chain's proof-of-work"
  - "Can reverse recent transactions included in blocks on the abandoned chain"
  - "Short reorgs are normal; deep reorgs signal potential attacks or chain splits"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System (2008): nodes always consider the longest chain to be the correct one and keep extending it; the section 11 table gives an attacker with 10% of the hashrate a 0.024% chance of catching up once six blocks have been added", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Core - src/validation.cpp: FindMostWorkChain returns the tip of the chain with the most work in it; MaybeUpdateMempoolForReorg adds transactions from disconnected blocks back to the mempool", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "bitcoin-data/stale-blocks - public dataset of stale blocks (28 in 2022, 70 in 2023, 49 in 2024, 93 in 2025, counted by header timestamp, as of October 13, 2026)", url: "https://github.com/bitcoin-data/stale-blocks" }
  - { label: "mempool.space - block 74,691 (08:20 UTC, August 16, 2010), where the patched chain overtook the chain carrying the value overflow block 74,638, a 53-block reorganization", url: "https://mempool.space/block/00000000005c22d199706df1c38b38d76f8401920dcbe91edf3417f8847da707" }
  - { label: "BIP 50 - March 2013 Chain Fork Post-Mortem: a block that 0.8 nodes accepted and pre-0.8 nodes rejected split the chain; once majority hashpower returned to the pre-0.8 chain, the 0.8 nodes reorganised to it", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "#bitcoin-dev IRC log for March 12, 2013 (buildingbitcoin.org, archived): nodes on the 0.8 chain logged REORGANIZE: Disconnect 25 blocks at 06:22 UTC", url: "https://web.archive.org/web/20200921053434/https://buildingbitcoin.org/bitcoin-dev/log-2013-03-12.html" }
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
  - transaction-finality
liveWidget: ~
---

A reorg - chain **reorganization** - is what happens when a [Bitcoin node](/glossary/node) learns about a chain with more accumulated work than the one it was following (loosely, a longer chain), and switches to it. The blocks it had at the previous tip become [stale](/glossary/stale-block); the transactions they contained are returned to the [mempool](/glossary/mempool) unless they're also present in the new chain.

The rule that drives reorgs is "longest valid chain wins" - more precisely, the chain with the most accumulated [proof-of-work](/glossary/proof-work-pow). When two miners find blocks at nearly the same height, the network temporarily splits. As soon as the next block is mined on one side, that side has more cumulative work, and nodes that were on the other side reorg to it.

Two flavors:

- **Shallow reorgs (1-2 blocks deep).** Routine. They happen dozens of times a year - the network saw between 28 and 93 stale blocks a year from 2022 through 2025 - and only affect transactions that were just barely confirmed. This is exactly why the 6-confirmation rule exists for high-value transfers - after six blocks, the probability of a reorg overturning your transaction is vanishingly small absent a massive coordinated attack (the whitepaper's own table gives an attacker with 10% of the hashrate about a 0.02% chance of catching up).
- **Deep reorgs (3+ blocks).** Rare and concerning. The deepest reorgs on Bitcoin's mainnet have come from software bugs that split the network: 53 blocks in August 2010, when the chain carrying the value overflow block was abandoned, and 25 blocks in March 2013, when version 0.8 nodes went back to the chain that older versions could follow. A deep reorg today would be a serious event worth investigating.

The economic implication: [transaction finality](/glossary/transaction-finality) on Bitcoin is probabilistic, not binary - a transaction is only as final as the work that has been mined on top of it. One confirmation is "probably fine for small amounts." Six confirmations is "fine for almost everything." Hundreds is "permanent for all practical purposes." See [Double Spend](/glossary/double-spend) for the attack that reorgs make harder, and [Mining rabbit hole](/rabbit-hole/mining) for the economics.

For the full story of the 25-block reorganization of March 2013, see [The 2013 Chain Fork](/rabbit-hole/2013-chain-fork); for the 53-block one of August 2010, see the [inflation bug postmortem](/rabbit-hole/inflation-bug-postmortem).
