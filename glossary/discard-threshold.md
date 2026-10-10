---
title: "Discard Threshold"
slug: discard-threshold
draft: false
updated: "2026-10-10"
shortDefinition: "In Bitcoin Core's wallet, the smallest change output worth creating. Change below it is left out and goes to the miner as part of the fee."
keyTakeaways:
  - "Change too small to be worth spending later becomes extra fee instead of a new output"
  - "Bitcoin Core works it out from a discard fee rate: 10 sat/vB by default, never below the 3 sat/vB dust rate"
  - "Not the same as the mempool's minimum fee, which decides which unconfirmed transactions a node keeps"
sources:
  - { label: "Bitcoin Core 31 - wallet/init.cpp (-discardfee: your tolerance for discarding change by adding it to the fee; an output is discarded if it is dust at this rate)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/init.cpp" }
  - { label: "Bitcoin Core 31 - wallet/wallet.h (DEFAULT_DISCARD_FEE 10,000 sat/kvB, which is 10 sat/vB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/wallet.h" }
  - { label: "Bitcoin Core 31 - wallet/fees.cpp (GetDiscardRate: capped by the longest-target fee estimate, never below the dust relay rate)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/fees.cpp" }
  - { label: "Bitcoin Core 31 - wallet/spend.cpp (smallest change: the larger of the dust threshold and 1 sat more than the fee to spend it, both at the discard rate)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/spend.cpp" }
  - { label: "Bitcoin Core 31 - wallet/coinselection.cpp (GetChange returns no change when it is below that minimum)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/wallet/coinselection.cpp" }
  - { label: "Bitcoin Core 31 - policy/policy.h (DUST_RELAY_TX_FEE 3,000 sat/kvB; DEFAULT_MIN_RELAY_TX_FEE 100 sat/kvB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/policy/policy.h" }
  - { label: "Bitcoin Core pull request 10817 - Redefine Dust and add a discard_rate (merged July 2017)", url: "https://github.com/bitcoin/bitcoin/pull/10817" }
  - { label: "Bitcoin Core 0.15.0 release notes (change log lists #10817, Redefine Dust and add a discard_rate)", url: "https://bitcoincore.org/en/releases/0.15.0/" }
  - { label: "Bitcoin Core 31 - kernel/mempool_options.h (DEFAULT_MAX_MEMPOOL_SIZE_MB 300)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/mempool_options.h" }
  - { label: "Bitcoin Core 31 - txmempool.cpp (TrimToSize sets the minimum fee to the evicted feerate plus the incremental relay fee; GetMinFee decays it, faster when the mempool is under half full)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/txmempool.cpp" }
  - { label: "Bitcoin Core 31 - txmempool.h (ROLLING_FEE_HALFLIFE 12 hours)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/txmempool.h" }
  - { label: "Bitcoin Core 29.0 - policy/policy.h (DEFAULT_MIN_RELAY_TX_FEE 1,000 sat/kvB, which is 1 sat/vB)", url: "https://github.com/bitcoin/bitcoin/blob/v29.0/src/policy/policy.h" }
  - { label: "Bitcoin Core 29.1 release notes (September 2025) - default minrelaytxfee lowered to 100 sat/kvB (0.1 sat/vB); the dust feerate and the wallet's feerates unchanged", url: "https://bitcoincore.org/en/releases/29.1/" }
  - { label: "mempool.space source - dashboard shows mempoolminfee as 'Minimum fee', or 'Purging' when it differs from minrelaytxfee", url: "https://github.com/mempool/mempool/blob/master/frontend/src/app/dashboard/dashboard.component.html" }
relatedTerms:
  - absolute-fee
  - change-output
  - coin-selection
  - dust
  - dust-attack
  - dust-limit
  - dust-sweeping
  - mempool
  - transaction
  - transaction-fee
liveWidget: ~
---

The discard threshold is the smallest [change output](/glossary/change-output) Bitcoin Core's wallet will create. When the change left over from a payment would come in under it, the wallet leaves the change output out, and the leftover goes to the miner as part of the fee.

The reason is cost. Change is only worth having if you can spend it later, and spending it means paying for one more input. If that future fee would eat the whole amount, the output is worth nothing to you, so the wallet doesn't make it.

How Bitcoin Core works it out:

- It picks a discard fee rate. The default is 10 sat/vB (the `-discardfee` setting). If the node's fee estimate for its longest target is lower, the wallet uses that instead, and it never goes below the dust relay rate of 3 sat/vB.
- At that rate, the threshold is the larger of two amounts: the fee to spend the change output later plus one satoshi, and the output's [dust limit](/glossary/dust-limit).
- Change below the threshold is added to the fee. Change at or above it gets its own output.

The setting arrived in Bitcoin Core 0.15.0 (2017), in the same change that redefined dust as an output that would cost its own value in fees to create and spend at the dust relay rate.

Don't confuse it with the mempool's minimum fee. That one decides which unconfirmed transactions a node keeps:

- Bitcoin Core caps its [mempool](/glossary/mempool) at 300 MB of memory by default.
- When the mempool is full, the node evicts the lowest-feerate transactions and raises its minimum fee to just above the feerate of what it evicted. That floor then decays, halving every 12 hours, or faster once the mempool is under half full.
- In calm periods the floor is the relay minimum, which Bitcoin Core 29.1 (September 2025) cut from 1 to 0.1 sat/vB. The release notes say the dust rate and the wallet's fee rates stayed the same.
- mempool.space shows this floor on its dashboard as "Minimum fee", relabeled "Purging" when it rises above the relay minimum.
