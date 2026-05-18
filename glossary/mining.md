---
title: "Mining"
slug: mining
draft: false
shortDefinition: "Using computational power to solve Bitcoin's proof-of-work, validate transactions, and secure the blockchain."
keyTakeaways:
  - "Secures the ledger via proof-of-work computations"
  - "Distributes new BTC issuance in a competitive market"
  - "High energy consumption but provides robust decentralization"
sources: []
relatedTerms:
  - competitive-mining
  - cpu-mining
  - geographic-mining-distribution
  - hash-rate
  - hidden-miner-tax
  - miner
  - miner-capitulation
  - miner-extractable-value-mev
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-centralization
  - mining-rig
  - mining-software
  - mining-subsidy
  - retail-mining
  - revenue-ths
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_protocol"
  - "https://www.wikidata.org/wiki/Q17001427"
  - "https://en.bitcoin.it/wiki/Mining"
liveWidget: ~
---

Mining is the process by which new [blocks](/glossary/block) are added to the Bitcoin chain and new BTC enters circulation. It's a continuous global race: every [miner](/glossary/miner) builds a candidate block from [mempool](/glossary/mempool) transactions, then hashes its header with different [nonces](/glossary/nonce) until they find one whose double-SHA-256 falls below the current [difficulty](/glossary/difficulty) target.

Whoever wins the race gets two things:

- **The [block subsidy](/glossary/block-subsidy)** - currently 3.125 BTC of newly issued Bitcoin.
- **The transaction fees** from every transaction they packed into the block.

That total payout - the [block reward](/glossary/block-reward) - is what pays for the electricity and hardware. There is no other meaningful revenue source. There is no other meaningful incentive to mine.

The global hash rate is currently around 700 exahashes per second (7 × 10^20 hashes per second). Every Bitcoin block represents about 10 minutes of every miner on Earth hashing simultaneously - roughly 4 × 10^23 attempts per block. That energy, by design, is what makes the chain expensive to rewrite. To reverse a recent block, an attacker would need to mine a longer fork - faster than the entire rest of the world is mining the real one. The deeper a transaction sits, the less plausible reversing it becomes.

Mining is sometimes described as "Bitcoin's energy problem." It is more accurately Bitcoin's *security model*. The energy spent buys the [immutability](/rabbit-hole/mining/rabbit-hole) of every transaction in the entire history of the chain. See the [Mining rabbit hole](/rabbit-hole/mining) for the long version.
