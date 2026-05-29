---
title: "Longest Chain Rule"
slug: longest-chain-rule
draft: false
shortDefinition: "Bitcoin nodes follow the chain with the most accumulated proof-of-work, ensuring consensus in a decentralized network."
keyTakeaways:
  - "Nodes resolve conflicts by picking the chain with the most work"
  - "Deters attackers from rewriting the ledger without immense hash power"
  - "Ensures consistent ledger state across the decentralized network"
sources: []
relatedTerms:
  - block
  - chain-split
  - consensus-parameter
  - fork
  - proof-work-pow
  - reorg-reorganization
liveWidget: ~
---

The longest chain rule is Bitcoin's consensus mechanism for resolving conflicts when multiple valid chains exist: every [node](/glossary/node) follows whichever chain has the most accumulated [proof-of-work](/glossary/proof-work-pow).

The name is slightly misleading. It's *not* the chain with the most blocks (longest); it's the chain with the most cumulative work. In practice these are usually the same, but during [difficulty](/glossary/difficulty) transitions or attempted attacks they can diverge.

What the rule does:

1. When two miners find blocks at the same [height](/glossary/block-height) at nearly the same moment, the network temporarily splits.
2. Each node follows whichever block it saw first, building on top of it.
3. As soon as the next block is found on one side, that side has more cumulative work.
4. Nodes that were on the other side [reorg](/glossary/reorg-reorganization) to the now-heavier chain.
5. The losing block becomes a [stale block](/glossary/stale-block); its transactions return to the [mempool](/glossary/mempool).

Why this rule is the foundation of Bitcoin's security:

- **Attacking the chain requires more work than the honest network is producing.** An attacker trying to rewrite history has to mine a longer fork, *secretly*, faster than the rest of the world mines the real one. With Bitcoin's ~700 EH/s of hash rate, this requires owning more than half of the global mining industry. Economically infeasible.
- **The deeper a transaction sits, the more work would be required to overturn it.** This is what the 6-confirmation convention buys: it would take an attacker controlling >50% of hash rate, working in secret, to overturn a 6-confirm transaction. The probability falls exponentially with depth.
- **Honest miners are incentivized to build on the longest chain.** A miner who finds a block off the main chain doesn't get paid; the block becomes stale.

The longest chain rule is sometimes called "Nakamoto consensus" - the version of consensus Satoshi described in the [whitepaper](/glossary/whitepaper). It's the deceptively simple rule that turns proof-of-work into a globally agreed-upon ledger.
