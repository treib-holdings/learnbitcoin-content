---
title: "Fee Floor"
slug: fee-floor
draft: false
updated: "2026-10-10"
shortDefinition: "An unofficial minimum fee rate below which transactions rarely get mined, especially during busy mempool conditions."
keyTakeaways:
  - "Reflects the lowest competitive fee rate during congestion"
  - "Transactions below it may remain unconfirmed for long"
  - "Can drop if the mempool clears or network activity declines"
sources:
  - { label: "Bitcoin Core 29.0 - policy/policy.h (DEFAULT_MIN_RELAY_TX_FEE 1,000 sat/kvB, which is 1 sat/vB)", url: "https://github.com/bitcoin/bitcoin/blob/v29.0/src/policy/policy.h" }
  - { label: "Bitcoin Core 29.1 release notes (September 2025) - default minrelaytxfee lowered to 100 sat/kvB (0.1 sat/vB); it can still be changed with the configuration option", url: "https://bitcoincore.org/en/releases/29.1/" }
  - { label: "Bitcoin Core 31 - policy/policy.h (DEFAULT_MIN_RELAY_TX_FEE 100 sat/kvB, which is 0.1 sat/vB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/policy/policy.h" }
  - { label: "Bitcoin Core 31.0 release notes (April 2026) - in one-parent-one-child package relay the parent can pay less than -minrelaytxfee, even zero", url: "https://bitcoincore.org/en/releases/31.0/" }
  - { label: "mempool.space - block 970,789 (15:45 UTC, October 10, 2026): median fee rate about 0.28 sat/vB, lowest about 0.27", url: "https://mempool.space/block/00000000000000000000eaf9b45110e63316329599163509bb047200297ce813" }
  - { label: "mempool.space - block 840,000, the fourth halving (00:09 UTC, April 20, 2024): fee rates from about 100 sat/vB, median about 200", url: "https://mempool.space/block/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5" }
  - { label: "Ordinals documentation - Runes specification (the Runes protocol activates on block 840,000)", url: "https://docs.ordinals.com/runes/specification.html" }
  - { label: "Bitcoin Core 31 - kernel/mempool_options.h (DEFAULT_MEMPOOL_EXPIRY_HOURS 336, which is two weeks; DEFAULT_MAX_MEMPOOL_SIZE_MB 300)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/mempool_options.h" }
  - { label: "Bitcoin Core 31 - txmempool.cpp (TrimToSize removes the lowest fee rate group first when the mempool is over its size limit)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/txmempool.cpp" }
  - { label: "BIP 141 - Segregated Witness (block weight at most 4,000,000; virtual size is weight divided by 4)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core 31 - chainparams.cpp (mainnet nPowTargetSpacing 10 * 60 seconds)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core 31 - node/miner.cpp (the block assembler adds mempool groups from the highest fee rate down)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/node/miner.cpp" }
  - { label: "Bitcoin Core GetBlockSubsidy (permalink, Oct 2026) - halves the subsidy every 210,000 blocks, counted in whole satoshis", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L1833-L1844" }
  - { label: "Bitcoin whitepaper (Satoshi Nakamoto, 2008), section 6 - once a predetermined number of coins have entered circulation, the incentive can transition entirely to transaction fees", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-estimation
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

The fee floor is the practical minimum fee rate (in sat/vByte) below which Bitcoin transactions are unlikely to confirm in a reasonable timeframe. It's not a single protocol-level constant; it's an emergent property of the [mempool](/glossary/mempool) state and miner behavior at any given moment.

Two related concepts that get conflated:

- **The relay-policy minimum.** The lowest fee rate a node will *accept* into its mempool and pass on, set in Bitcoin Core by `-minrelaytxfee`. Core's default was 1 sat/vB until version 29.1 (September 2025) lowered it to 0.1 sat/vB. Below it, a Core node won't take the transaction on its own, though a child transaction that pays enough can sometimes bring a cheaper parent in with it. Each node operator can change the setting.
- **The market floor.** The fee rate the cheapest transactions in recent blocks actually paid. During congestion this can be far above the relay minimum; in quiet periods it can fall close to it.

How the market floor behaves:

- **Quiet periods:** when demand is low, the floor can drop below 1 sat/vB. Block 970,789, mined on October 10, 2026, had fee rates from about 0.27 sat/vB, with a median of about 0.28.
- **Busy periods:** when many people want block space at once, the floor climbs. Block 840,000, mined on April 20, 2024, was both the fourth halving and the block where the Runes token protocol switched on. Its fee rates started at about 100 sat/vB, with a median of about 200.
- **Below the floor:** a transaction waits. Bitcoin Core drops it from its mempool after two weeks by default, or sooner if the mempool fills up and it is among the cheapest.

What sets the floor:

- **Block space is limited.** A block can hold at most 4 million weight units, which is 1 million virtual bytes, and blocks come about every 10 minutes, roughly 144 a day.
- **Demand varies.** Compare the two blocks above: a median of about 0.28 sat/vB in one, about 200 in the other.
- **Miners pack by fee rate.** Highest-paying transactions get in first; lower-paying ones queue.

The fee floor isn't enforced by anyone. It's just what happens when there's more transaction demand than block space. Modern wallets do [fee estimation](/glossary/fee-estimation) to set rates that comfortably clear the current floor; aggressive users sometimes underpay and rely on [RBF](/glossary/replace-fee-rbf) to bump up later if needed.

In the long run, the fee floor matters more as [block subsidies](/glossary/block-subsidy) shrink and miner revenue depends more on fees. The subsidy halves every 210,000 blocks and reaches zero around 2140. After that, fees alone pay miners, as the whitepaper anticipated.
