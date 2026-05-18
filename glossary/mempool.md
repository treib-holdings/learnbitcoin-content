---
title: "Mempool"
slug: mempool
draft: false
shortDefinition: "A node's local 'waiting room' for unconfirmed transactions, which miners draw from when creating new blocks."
keyTakeaways:
  - "Holds pending transactions awaiting confirmation"
  - "Policies differ, so not all nodes have identical mempools"
  - "Fee estimation and RBF rely heavily on mempool dynamics"
sources: []
relatedTerms: []
liveWidget: ~
---

The mempool - short for **mem**ory **pool** - is a Bitcoin node's local list of unconfirmed transactions: ones it has heard about but hasn't yet seen in a block. When you broadcast a [transaction](/glossary/transaction), it propagates from node to node, each one validating it and adding it to its own mempool.

There is no single global mempool. Every node maintains its own. Most are similar, but they differ in two ways:

- **Policy.** Each node sets local rules about what it will accept and relay: minimum fee rates, [dust](/glossary/dust) thresholds, max size, max ancestor/descendant chains, and so on.
- **Propagation lag.** A new transaction takes a second or two to reach every reachable node on Earth. During that window, mempools temporarily disagree about what's pending.

[Miners](/glossary/miner) build candidate blocks from their own mempool, prioritizing transactions with the highest fee rate (sats per virtual byte) to maximize block-reward revenue. So when you "set a fee" on a transaction, what you're really doing is bidding for inclusion against everyone else currently in mempools around the world. See [Fee Estimation](/glossary/fee-estimation) for how wallets guess the right bid.

When a transaction gets included in a block, every node sees that block, validates it, and removes the included transactions from their mempools. Transactions that have been waiting can also be evicted under memory pressure or replaced via [fee bumping](/glossary/fee-bumping).

Watch the live mempool state on the [Node Status page](/node/) or in the [Mining rabbit hole §6](/rabbit-hole/mining).
