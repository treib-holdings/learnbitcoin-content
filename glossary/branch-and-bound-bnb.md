---
title: "Branch and Bound (BnB)"
slug: branch-and-bound-bnb
draft: false
published: "2026-09-08"
shortDefinition: "Bitcoin Core's exact-match coin selection algorithm: a bounded depth-first search for a set of inputs that covers the payment closely enough to need no change output at all."
keyTakeaways:
  - "Proposed in Mark 'Murch' Erhardt's 2016 thesis, implemented in Bitcoin Core by Andrew Chow, shipped in version 0.17.0 in 2018"
  - "Searches input combinations for a total between the target and the target plus the cost of a change output; anything landing in that window becomes a changeless transaction"
  - "Gives up after a fixed number of tries, so it never stalls a wallet; the other algorithms run regardless and the lowest-waste result wins"
sources:
  - { label: "Bitcoin Core PR #10637 - Coin Selection with Murch's algorithm", url: "https://github.com/bitcoin/bitcoin/pull/10637" }
  - { label: "Mark Erhardt - An Evaluation of Coin Selection Strategies (2016)", url: "https://murch.one/wp-content/uploads/2016/11/erhardt2016coinselection.pdf" }
  - { label: "Bitcoin Core 0.17.0 release notes", url: "https://bitcoincore.org/en/releases/0.17.0/" }
  - { label: "Bitcoin Core - src/wallet/coinselection.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.cpp" }
relatedTerms:
  - coin-selection
  - changeless-transaction
  - change-output
  - coingrinder
  - utxo-pool
  - utxo-unspent-transaction-output
  - transaction-fee
liveWidget: ~
---

Branch and Bound is the [coin selection](/glossary/coin-selection) algorithm that tries to avoid creating [change](/glossary/change-output) altogether. Given a payment amount and the wallet's pool of coins, it looks for a subset whose total lands in a narrow window: at least the payment plus its fee, and at most that figure plus what a change output would have cost to create. Any combination inside the window can be spent as a [changeless transaction](/glossary/changeless-transaction), with the small excess going to the miner instead of coming back as a new coin.

The name describes the search. The algorithm sorts the coins by value and walks them in a depth-first tree, at each step branching on whether to include the next coin. The bound is what keeps that tractable: whenever the running total overshoots the window, or the remaining coins cannot possibly reach it, the branch is abandoned immediately. It also stops after a fixed budget of attempts, 100,000 in the Core implementation, returning the best changeless set it found or nothing at all. The wallet's other algorithms run alongside it in any case, so a user never waits on it.

The idea comes from Mark "Murch" Erhardt's 2016 master's thesis on coin selection, which showed that the Knapsack approach [Bitcoin Core](/glossary/bitcoin-core) had used since the early days almost never found the exact matches it was designed for (under 1.5 percent of payments in his simulation), while Branch and Bound found them for up to 30 percent and shrank the wallet's UTXO footprint by more than a third. Andrew Chow implemented Branch and Bound for Core, the pull request was merged in 2018, and it shipped in version 0.17.0 that October. From 0.17 through 0.21 it ran first, with Knapsack as the fallback. Since version 23.0 the wallet runs every algorithm on each spend and keeps the lowest-waste result, and a changeless Branch and Bound solution usually wins that comparison.

Why go to the trouble of avoiding change? Because a change output is a cost that pays twice. It adds bytes to the current transaction, and it creates a fresh coin that will add more bytes to some future transaction when it is finally spent. It is also the output that [chain analysts](/glossary/chain-analysis) follow to link one of your transactions to the next. A transaction with no change is cheaper to build, cheaper to spend from later, and gives the change-detection heuristic nothing to work with. Branch and Bound finds those transactions when they exist, which turns out to be more often than people expect once a wallet holds a reasonable spread of coin sizes.
