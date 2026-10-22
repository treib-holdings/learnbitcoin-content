---
title: "Waste Metric"
slug: waste-metric
linkText:
  - "waste metric"
  - "waste score"
draft: false
published: "2026-10-22"
shortDefinition: "The score Bitcoin Core's wallet uses to pick between the input sets its coin selection algorithms propose: the fee the inputs cost now minus what they would cost at a long-term fee rate, plus either the cost of a change output or the excess paid to the miner. The lowest score wins. It is a fee score; it has no privacy term."
keyTakeaways:
  - "waste = inputs x (current fee rate - long-term fee rate) + the cost of change, or + the excess when there is no change; below the long-term rate (10 sat/vB by default) every extra input lowers the score, above it every extra input raises it"
  - "PR #22009 moved the score up to the wallet level in Bitcoin Core 23.0 (2022), so the wallet runs every algorithm and compares, with -consolidatefeerate as the knob; Branch and Bound had used it inside its own search since 0.17.0"
  - "Ties go to the candidate with more inputs; the change cost prices the future spend of change at the discard fee rate, not the long-term one"
sources:
  - { label: "Bitcoin Core - src/wallet/coinselection.cpp (RecalculateWaste)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.cpp" }
  - { label: "Bitcoin Core - src/wallet/coinselection.h (the comment above RecalculateWaste)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.h" }
  - { label: "Bitcoin Core - src/wallet/spend.cpp (cost of change: created at the effective feerate, spent at the discard feerate)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/spend.cpp" }
  - { label: "Bitcoin Core PR #22009 - Decide which coin selection solution to use based on waste metric (Andrew Chow; merged September 2021, shipped in 23.0)", url: "https://github.com/bitcoin/bitcoin/pull/22009" }
  - { label: "Bitcoin Optech Newsletter, 8 September 2021 (the waste score in plain words)", url: "https://bitcoinops.org/en/newsletters/2021/09/08/" }
  - { label: "Bitcoin Optech Newsletter, 25 May 2022 (Mark Erhardt's definition of waste)", url: "https://bitcoinops.org/en/newsletters/2022/05/25/" }
  - { label: "Bitcoin Optech Newsletter, 31 July 2026 (the long-term feerate against the discard feerate)", url: "https://bitcoinops.org/en/newsletters/2026/07/31/" }
  - { label: "Bitcoin Core PR #27877 - Add CoinGrinder coin selection algorithm (the sentence on metrics for privacy and wallet health)", url: "https://github.com/bitcoin/bitcoin/pull/27877" }
relatedTerms:
  - coin-selection
  - effective-value
  - branch-and-bound-bnb
  - coingrinder
  - changeless-transaction
  - change-output
  - consolidation-transaction
  - fee-estimation
  - bitcoin-core
liveWidget: ~
---

The waste metric is the score [Bitcoin Core's](/glossary/bitcoin-core) wallet uses to choose between the input sets its [coin selection](/glossary/coin-selection) algorithms propose. The wallet runs several algorithms on each payment and keeps the candidate that scores lowest. The score, computed by `RecalculateWaste` in `src/wallet/coinselection.cpp`, has two parts. The first is the inputs: the fee they cost at the transaction's fee rate minus the fee they would cost at a long-term fee rate, 10 sat/vB by default (the `-consolidatefeerate` setting). Below 10 sat/vB that difference is negative, so every extra coin the wallet sweeps up lowers the score; above it, every extra coin raises it. The second part is the change. If the candidate makes a [change output](/glossary/change-output), add what that output costs to create now and to spend later, the future spend priced at the wallet's discard fee rate, the rate below which it would rather give the change to the miner than create it. If it makes none, add the few satoshis of excess that go to the miner instead. Lowest wins, and a tie goes to the candidate that spends more inputs.

PR #22009 by Andrew Chow introduced the score at this level in version 23.0 (2022); it had been part of [Branch and Bound's](/glossary/branch-and-bound-bnb) own search since 0.17.0. The pull request's description gives the purpose of the long-term rate: it is "the feerate that we switch between consolidating and optimizing for fees". Mark Erhardt, who designed that search, describes waste as a "measure of the fees for the input set at the current feerate compared to spending the same inputs at the hypothetical long-term feerate".

It is a fee score, and its authors say so: the pull request that added [CoinGrinder](/glossary/coingrinder) in 2024 says the wallet still lacks "additional metrics to score different input set candidates, e.g. on basis of their privacy and wallet health impact". Which addresses get linked by a selection is not in the number.

Go deeper in [Which Coins Does Your Wallet Spend?](/rabbit-hole/coin-selection) - the four algorithms the score judges, a worked example at 1 and 100 sat/vB, and what the score cannot see.
