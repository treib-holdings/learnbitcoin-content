---
title: "Fee Estimation"
slug: fee-estimation
draft: false
updated: "2026-10-10"
shortDefinition: "Predicting the required sat/vByte rate to confirm within a certain timeframe, given current network conditions."
keyTakeaways:
  - "Helps users avoid overpaying or underpaying transaction fees"
  - "Involves reading mempool backlog and recent block inclusion rates"
  - "Can fluctuate quickly in times of sudden network activity"
sources:
  - { label: "mempool.space source - fee-api.ts (recommended fees come from the medians of the projected next blocks: fastestFee, halfHourFee, hourFee, economyFee, with minimumFee taken from the mempool's minimum fee)", url: "https://github.com/mempool/mempool/blob/master/backend/src/api/fee-api.ts" }
  - { label: "Bitcoin Core 31 - policy/fees/block_policy_estimator.h (groups transactions into fee rate buckets and tracks how many blocks they take to be mined after entering the mempool; MIN_BUCKET_FEERATE 100 sat/kvB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/policy/fees/block_policy_estimator.h" }
  - { label: "Bitcoin Core 31 - rpc/fees.cpp (estimatesmartfee: confirmation target 1 to 1,008 blocks, clamped to at least 2; the result is never below the mempool minimum fee or the relay minimum)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/rpc/fees.cpp" }
  - { label: "Bitcoin Core 29.1 release notes (September 2025) - default minrelaytxfee lowered to 0.1 sat/vB; the minimum returned by the fee estimator and the wallet's fee rates unchanged", url: "https://bitcoincore.org/en/releases/29.1/" }
  - { label: "Bitcoin Core 31.0 release notes (April 2026) - the fee estimator's minimum fee rate bucket lowered from 1 sat/vB to 0.1 sat/vB, matching the default minrelaytxfee", url: "https://bitcoincore.org/en/releases/31.0/" }
  - { label: "Bitcoin Core 31 - wallet/wallet.h (DEFAULT_TRANSACTION_MINFEE 1,000 sat/kvB, which is 1 sat/vB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/wallet.h" }
  - { label: "Bitcoin Core 31 - wallet/fees.cpp (a fee rate taken from the estimator is raised to the wallet's required fee rate, the higher of -mintxfee and the relay minimum)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/fees.cpp" }
  - { label: "mempool.space - block 840,000, the fourth halving (00:09 UTC, April 20, 2024): median fee rate about 200 sat/vB", url: "https://mempool.space/block/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5" }
  - { label: "Ordinals documentation - Runes specification (the Runes protocol activates on block 840,000)", url: "https://docs.ordinals.com/runes/specification.html" }
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

Estimators work from one or both of two signals:

- **Current [mempool](/glossary/mempool) state.** How much unconfirmed transaction data is queued up at each fee rate? mempool.space, for example, sorts the waiting transactions into the blocks it expects miners to build next and recommends fee rates from those projected blocks. The fuller the mempool, the higher the floor.
- **Recent confirmation history.** How long did transactions at each fee rate take to get mined? Bitcoin Core's estimator sorts the transactions its node sees into fee-rate buckets and tracks how many blocks each one took to confirm.

Bitcoin Core exposes its estimator through the `estimatesmartfee` RPC, which takes a target from 1 to 1,008 blocks and treats a target of 1 as 2. Fee sites and wallets usually offer a few tiers instead. mempool.space's fee API, for example, names its rates fastest, half hour, hour and economy. Lower urgency means a lower fee.

When blocks have room to spare, estimates for every target can fall to the floor. Bitcoin Core's estimator bottomed out at 1 sat/vB until version 31.0 (April 2026) lowered its minimum to 0.1 sat/vB, matching the default relay minimum that version 29.1 had set in September 2025. When Core's own wallet picks a fee from its estimates, it still won't go below 1 sat/vB unless its `-mintxfee` setting is lowered.

When demand jumps, estimates jump with it. On April 20, 2024, when the Runes token protocol switched on at the fourth halving, the median fee rate in block 840,000 was about 200 sat/vB.

Estimates are *guesses*. If you underpay and get stuck, see [Fee Bumping](/glossary/fee-bumping). The live fee market is visible in the [Mining rabbit hole section 6](/rabbit-hole/mining) and on the [Node page](/node).
