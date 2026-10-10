---
title: "Estimated Confirmation Blocks"
slug: estimated-confirmation-blocks
draft: false
updated: "2026-10-10"
shortDefinition: "A projection (often shown by wallets/explorers) of how many blocks until a given transaction might confirm at its current fee."
keyTakeaways:
  - "Offers a best-effort guess on confirmation time"
  - "Depends on current mempool congestion and fee rates"
  - "Subject to change if network conditions shift"
sources:
  - { label: "Bitcoin Core 31 - policy/fees/block_policy_estimator.h (groups the transactions the node sees into fee-rate buckets, tracks how many blocks each took to be mined, counts ones still unconfirmed too, and returns the lowest bucket where enough confirmed within the target; history kept as decaying averages, the shortest with a half-life of 18 blocks, about 3 hours)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/policy/fees/block_policy_estimator.h" }
  - { label: "Bitcoin Core 31 - rpc/fees.cpp (estimatesmartfee: confirmation target 1 to 1,008 blocks, clamped to at least 2; the result is never below the mempool minimum fee or the relay minimum)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/rpc/fees.cpp" }
  - { label: "Bitcoin Core 31 - wallet/wallet.h (DEFAULT_TX_CONFIRM_TARGET 6 blocks)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/wallet.h" }
  - { label: "Bitcoin Core 31 - wallet/fees.cpp (the wallet asks the fee estimator for the fee rate needed at its confirmation target)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/fees.cpp" }
  - { label: "Bitcoin Core 31 - chainparams.cpp (mainnet nPowTargetSpacing 10 * 60 seconds)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core 31 - node/miner.cpp (the block assembler adds mempool groups from the highest fee rate down)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/node/miner.cpp" }
  - { label: "mempool.space source - mempool-blocks.ts (sorts waiting transactions into projected blocks sized by BLOCK_WEIGHT_UNITS)", url: "https://github.com/mempool/mempool/blob/master/backend/src/api/mempool-blocks.ts" }
  - { label: "mempool.space source - config.ts (BLOCK_WEIGHT_UNITS 4,000,000 and 8 projected blocks by default)", url: "https://github.com/mempool/mempool/blob/master/backend/src/config.ts" }
  - { label: "mempool.space source - fee-api.ts (recommended fastestFee, halfHourFee and hourFee come from the median fee rates of the first three projected blocks; it also returns economyFee and minimumFee)", url: "https://github.com/mempool/mempool/blob/master/backend/src/api/fee-api.ts" }
  - { label: "mempool.space - block 970,654 (15:44 UTC, October 9, 2026): 1 transaction, the coinbase", url: "https://mempool.space/block/00000000000000000001a21b7ac58940b1cbdbbc0b6ff07bafae6dad988d8c76" }
  - { label: "Bitcoin Optech scaling book - Introduction to fee bumping (a transaction can get stuck when the required fee rate spikes after it is broadcast; RBF replaces it with a version that pays more, and CPFP adds a child transaction whose fee lifts the combined fee rate of both)", url: "https://github.com/bitcoinops/scaling-book/blob/master/1.fee_bumping/fee_bumping.md" }
relatedTerms:
  - absolute-fee
  - accelerator
  - block
  - block-height
  - block-propagation
  - block-time
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - transaction-fee
liveWidget: ~
---

"Estimated confirmation blocks" is the other side of [fee estimation](/glossary/fee-estimation): at a given fee rate, about how many blocks until a transaction confirms? Or, turned around, what fee rate does it take to confirm within a target number of blocks? Bitcoin aims for a block every 10 minutes on average, so a target of 3 blocks is roughly half an hour, and some fee tools show the target as a time. mempool.space's fee API, for example, names its rates fastest, half hour, hour, economy and minimum.

How the estimate is built:

- **Bitcoin Core's `estimatesmartfee` RPC** returns a fee rate that should get a transaction confirmed within a target of 1 to 1,008 blocks (it treats 1 as 2). It works from the node's own history. Core sorts the transactions it sees into fee-rate buckets, tracks how many blocks each one took to be mined, counting the ones still waiting too, and returns the lowest rate whose bucket confirmed often enough within the target. The answer is never below the node's current mempool minimum fee.
- **Projected blocks.** Sites like mempool.space sort the waiting transactions into the blocks they expect miners to build next, each up to the 4 million weight unit limit, and recommend fee rates from the medians of the first few.
- **Wallets** pick a target and look up the fee rate it needs. Bitcoin Core's own wallet, for example, aims for 6 blocks by default and asks its estimator what that takes.

What can throw off the estimate:

- **Fee spikes.** Miners fill blocks from the highest fee rate down, so a wave of better-paying transactions can push yours back. The estimate updates, but a transaction you've already broadcast keeps the fee it was sent with.
- **Empty blocks.** Now and then a block carries no transactions except the miner's own reward. Block 970,654, mined on October 9, 2026, was one. A block like that does nothing for the queue.
- **History lags.** Core's estimator gives recent blocks the most weight, but even its shortest window has a half-life of 18 blocks, about 3 hours, so a sudden rush or a sudden lull shows up in its numbers only after a while.

An estimate is a forecast, not a promise. If a transaction is taking longer than you want, [fee bumping](/glossary/fee-bumping) can speed it up. Replace-by-fee (RBF) swaps it for a version that pays more, and child-pays-for-parent (CPFP) spends one of its outputs in a new transaction that pays enough for both.
