---
title: "Fee Estimation"
slug: fee-estimation
draft: false
shortDefinition: "Predicting the required sat/vByte rate to confirm within a certain timeframe, given current network conditions."
keyTakeaways:
  - "Helps users avoid overpaying or underpaying transaction fees"
  - "Involves reading mempool backlog and recent block inclusion rates"
  - "Can fluctuate quickly in times of sudden network activity"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

Fee estimation is the wallet's job of predicting how many satoshis per virtual byte (sat/vB) you need to pay to get your [transaction](/glossary/transaction) confirmed within some target number of blocks. Pay too little and you wait; pay too much and you overpay.

The estimate is built from two signals:

- **Current [mempool](/glossary/mempool) state.** How much unconfirmed transaction data is queued up at each fee rate? The fuller the mempool, the higher the floor.
- **Recent block history.** What fee rates were actually included in the last several blocks? This anchors the estimate to what miners are accepting right now.

Bitcoin Core exposes its own estimator via the `estimatesmartfee` RPC; this is what most nodes and wallets reference, sometimes blended with third-party feeds. Estimates come in tiers: next-block, ~3 blocks, ~6 blocks, ~24 blocks. Lower urgency means lower fee.

In low-traffic periods, the estimator often returns 1 sat/vB across all tiers - the relay minimum. In congestion events (Ordinals mints, exchange withdrawal storms, market panic), the next-block estimate can spike to hundreds of sat/vB in minutes.

Estimates are *guesses*. If you underpay and get stuck, see [Fee Bumping](/glossary/fee-bumping). The live fee market is visible in the [Mining rabbit hole §6](/rabbit-hole/mining) and on the [Node page](/node/).
