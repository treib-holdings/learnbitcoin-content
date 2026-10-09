---
title: "Longest Chain Rule"
slug: longest-chain-rule
draft: false
updated: "2026-10-09"
shortDefinition: "Bitcoin nodes follow the chain with the most accumulated proof-of-work, ensuring consensus in a decentralized network."
keyTakeaways:
  - "Nodes resolve conflicts by picking the chain with the most work"
  - "Deters attackers from rewriting the ledger without immense hash power"
  - "Ensures consistent ledger state across the decentralized network"
sources:
  - { label: "mempool.space API - daily network hash rate since 2009 (June to August 2026 average about 9.1 x 10^20 H/s)", url: "https://mempool.space/api/v1/mining/hashrate/all" }
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double spending (2012), Table 1: 0.059% for a 10% attacker and 15.6% for a 30% attacker at six confirmations", url: "https://arxiv.org/abs/1402.2009" }
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

- **Attacking the chain requires more work than the honest network is producing.** An attacker trying to rewrite history has to mine a longer fork, *secretly*, faster than the rest of the world mines the real one. With Bitcoin's hash rate averaging about 910 EH/s in mid-2026, doing that reliably requires owning more than half of the global mining industry, which makes the attack economically infeasible.
- **The deeper a transaction sits, the more work would be required to overturn it.** An attacker working in secret with 10% of the hash rate would overturn a 6-confirmation transaction about once in 1,700 attempts, and one with 30% about once in six, by Meni Rosenfeld's 2012 analysis. Only an attacker with more than 50% could count on it. For anyone below that, the probability falls exponentially with depth.
- **Honest miners are incentivized to build on the longest chain.** A miner who finds a block off the main chain doesn't get paid; the block becomes stale.

The longest chain rule is sometimes called "Nakamoto consensus" - the version of consensus Satoshi described in the [whitepaper](/glossary/whitepaper). It's the deceptively simple rule that turns proof-of-work into a globally agreed-upon ledger.

The rule has a limit: a chain that some nodes consider invalid does not win by being longer. [The 2013 Chain Fork](/rabbit-hole/2013-chain-fork) is the case where the chain with most of the hash power was the one abandoned.
