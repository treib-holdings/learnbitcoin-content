---
title: "Coin Selection"
slug: coin-selection
draft: false
published: "2026-09-08"
shortDefinition: "The wallet-engineering problem of choosing which UTXOs to spend when building a transaction. The choice sets the fee, decides whether there is a change output, and determines which of your addresses get publicly linked together."
keyTakeaways:
  - "Every on-chain payment starts with a selection: a wallet holds a pool of discrete coins and must pick a subset whose total covers the amount plus the fee"
  - "Bitcoin Core runs several algorithms (Branch and Bound, Knapsack, Single Random Draw, and since version 27.0 CoinGrinder) and keeps the candidate that scores lowest on a waste metric"
  - "Good selection is invisible; bad selection shows up as higher fees, a wallet full of dust, and addresses welded together for chain analysts"
sources:
  - { label: "Bitcoin Core - src/wallet/coinselection.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.cpp" }
  - { label: "Mark Erhardt - An Evaluation of Coin Selection Strategies (2016)", url: "https://murch.one/wp-content/uploads/2016/11/erhardt2016coinselection.pdf" }
  - { label: "Bitcoin Optech - Coin selection topic", url: "https://bitcoinops.org/en/topics/coin-selection/" }
  - { label: "Bitcoin Core PR #22009 - Decide which coin selection solution to use based on waste metric", url: "https://github.com/bitcoin/bitcoin/pull/22009" }
relatedTerms:
  - utxo-unspent-transaction-output
  - utxo-pool
  - branch-and-bound-bnb
  - coingrinder
  - changeless-transaction
  - change-output
  - coin-control
  - dust
  - consolidation-transaction
  - fee-estimation
  - address-clustering
sameAs:
  - "https://bitcoinops.org/en/topics/coin-selection/"
liveWidget: ~
---

Bitcoin does not have account balances. A [wallet](/glossary/wallet) holds a collection of discrete coins, the [UTXOs](/glossary/utxo-unspent-transaction-output), each with its own amount, and paying someone means picking some of those coins, spending them whole, and sending the leftover back to yourself as [change](/glossary/change-output). Coin selection is the name for that picking step. Every on-chain transaction you have ever sent went through it, and unless you used [coin control](/glossary/coin-control) to override it, your wallet made the decision for you.

The decision has three consequences that the user rarely sees. Fees: every input adds weight to the transaction, so spending eight small coins costs more than spending one large one, and at a high fee rate the difference is real money. Change: if the selected coins overshoot the payment by a lot, the wallet has to create a change output, which costs bytes now and costs more bytes again the day that change is spent. Privacy: every input in a transaction is assumed by [chain analysts](/glossary/chain-analysis) to belong to the same owner, so the selection decides which of your addresses get publicly [clustered](/glossary/address-clustering) together, permanently.

Those three goals pull in different directions, which is why coin selection is a genuine engineering problem and not a lookup. The reference treatment is Mark "Murch" Erhardt's 2016 thesis, which evaluated the strategies of the day against a real transaction workload and found that the then-standard approach in [Bitcoin Core](/glossary/bitcoin-core), a Knapsack solver that tried to keep change at or above a fixed 0.01 BTC minimum, found changeless exact matches on fewer than 1.5 percent of payments, where a purpose-built search found them for up to 30 percent.

Bitcoin Core's wallet now runs several algorithms on every spend and compares the results. [Branch and Bound](/glossary/branch-and-bound-bnb), from Murch's thesis, searches for an exact match that needs no change at all. Knapsack and Single Random Draw produce ordinary solutions with change. [CoinGrinder](/glossary/coingrinder), added in version 27.0 in 2024, hunts for the lightest input set when fees are high. The wallet scores each candidate with a waste metric that combines the fee paid now, the fee a change output will cost later, and any excess that goes to the miner, and it keeps the candidate that wastes least. You can read all of it in `src/wallet/coinselection.cpp`.

For the user the practical lessons are short. Consolidate small coins during cheap fee periods so that expensive periods do not force your wallet to spend a dozen inputs. Keep coins from different sources apart with coin control if their histories should not be linked. And prefer wallets that show you which coins they picked, since you cannot override a choice you never saw.
