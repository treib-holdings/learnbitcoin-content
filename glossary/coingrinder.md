---
title: "CoinGrinder"
slug: coingrinder
draft: false
published: "2026-09-08"
shortDefinition: "A Bitcoin Core coin selection algorithm, added in version 27.0 in 2024, that searches for the input set with the smallest total weight so that transactions built during high-fee periods cost as little as possible."
keyTakeaways:
  - "Authored by Mark 'Murch' Erhardt and merged as Bitcoin Core PR #27877; it runs only when fee rates are elevated, since input weight matters most when every byte is expensive"
  - "Where Branch and Bound optimizes for no change, CoinGrinder optimizes for the cheapest inputs and always produces a change output"
  - "It deliberately leaves small coins alone at high fees; sweeping them up is a job for a cheap week, not an expensive one"
sources:
  - { label: "Bitcoin Core PR #27877 - Add CoinGrinder coin selection algorithm", url: "https://github.com/bitcoin/bitcoin/pull/27877" }
  - { label: "Bitcoin Core 27.0 release notes", url: "https://bitcoincore.org/en/releases/27.0/" }
  - { label: "Bitcoin Core - src/wallet/coinselection.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.cpp" }
  - { label: "Bitcoin Optech - Coin selection topic", url: "https://bitcoinops.org/en/topics/coin-selection/" }
relatedTerms:
  - coin-selection
  - branch-and-bound-bnb
  - utxo-pool
  - change-output
  - consolidation-transaction
  - fee-estimation
  - dust
  - transaction-fee
liveWidget: ~
---

CoinGrinder is the [coin selection](/glossary/coin-selection) algorithm [Bitcoin Core](/glossary/bitcoin-core) reaches for when fees are high. Its goal is narrow: find the combination of coins that covers the payment with the least total input weight, because when a block is expensive, every input you can leave out of a transaction is money saved.

That makes it the complement to [Branch and Bound](/glossary/branch-and-bound-bnb), the algorithm Core runs alongside it. Branch and Bound wants a set of inputs that matches the payment so closely that no [change output](/glossary/change-output) is needed, and it will happily use several small coins to get there. At a low fee rate that is the right trade, since the inputs are nearly free and the change output is the expensive part. At a high fee rate the arithmetic flips. Each extra input now costs more than the change output it might avoid, and the best transaction is the one with the fewest, largest inputs, even if it has to send change. CoinGrinder is the search for that transaction.

The search itself is another bounded depth-first walk over the coins, this time sorted by effective value, largest first and lighter coins preferred on ties, with the bound pruning any branch that cannot beat the lightest solution found so far. Like Branch and Bound it has an attempt budget and gives up gracefully, leaving the wallet's other algorithms to produce a fallback. The wallet then compares every candidate with its waste metric and keeps the cheapest.

The algorithm was written by Mark "Murch" Erhardt, whose 2016 thesis had already reshaped Core's coin selection once, and it landed in version 27.0 in April 2024, after a review that began in mid-2023, when that year's Ordinals-driven fee spikes had shown exactly the problem it was written to solve. It is gated on the fee rate: Core runs it only when the transaction's fee rate exceeds three times the wallet's long-term fee-rate estimate (the `-consolidatefeerate` setting, 10 sat/vB by default, so 30 sat/vB and up), because minimizing input weight at ordinary fee levels would mean never spending small coins and letting them pile up as [dust](/glossary/dust).

That last point is the user-facing lesson. CoinGrinder protects you from overpaying during a fee spike, but it does so by ignoring your small coins. Those still need to be swept up eventually, and the time to do it is a [consolidation](/glossary/consolidation-transaction) during a cheap week, when spending a dozen inputs costs almost nothing.
