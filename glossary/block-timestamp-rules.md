---
title: "Block Timestamp Rules"
slug: block-timestamp-rules
linkText:
  - "block timestamp rules"
  - "block timestamp"
  - "block timestamps"
  - "timestamp rules"
draft: false
published: "2026-10-19"
shortDefinition: "The two consensus checks a node applies to the time a miner writes into a block header: it must be later than the median of the previous eleven blocks, and it may not be more than two hours ahead of the node's own clock. Both are in Satoshi's 2009 code and both are still in Bitcoin Core's validation.cpp."
keyTakeaways:
  - "Lower bound: a block's timestamp must be strictly greater than the median time past of the eleven blocks before it, which keeps the chain's clock moving forward even though individual timestamps may run backwards"
  - "Upper bound: a block stamped more than 7,200 seconds ahead of the validating node's clock is rejected for now, not forever; it becomes acceptable once the clock catches up, so this one is about acceptance rather than validity"
  - "Since Bitcoin Core 27.0 the node uses its own system time, not a median of its peers' clocks; it only warns when peers disagree by 70 minutes or more, so a node operator's clock is now part of staying in consensus"
sources:
  - { label: "Bitcoin Core - src/validation.cpp: ContextualCheckBlockHeader rejects a block stamped at or below the previous block's median time past (time-too-old) and one more than MAX_FUTURE_BLOCK_TIME past NodeClock::now() (time-too-new, result BLOCK_TIME_FUTURE)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "Bitcoin Core - src/chain.h: MAX_FUTURE_BLOCK_TIME = 2 * 60 * 60; GetMedianTimePast sorts the last nMedianTimeSpan = 11 block times and returns the middle one", url: "https://github.com/bitcoin/bitcoin/blob/master/src/chain.h" }
  - { label: "Bitcoin Core - main.cpp at the repository's first commit (2009): a block is rejected if its time is more than 2 * 60 * 60 past adjusted time or at or below the median time past; a new block's time is the later of adjusted time and median time past plus one", url: "https://github.com/bitcoin/bitcoin/blob/4405b78d6059e536c36974088a8ed4d9f0f29898/main.cpp" }
  - { label: "Bitcoin Core 27.0 release notes (April 2024): network-adjusted time removed from consensus code and replaced with unadjusted system time; the warning for a median time offset of 70 minutes or more is kept (PR #28956)", url: "https://bitcoincore.org/en/releases/27.0/" }
  - { label: "BIP-113 - Median time-past as endpoint for lock-time calculations: consensus rules do not mandate strict ordering of block timestamps, so lock times compare against the median of the past 11 blocks, which the existing rules guarantee advances monotonically", url: "https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki" }
  - { label: "BIP-54 - Consensus Cleanup: the first block of a difficulty period may not be stamped more than 7,200 seconds before the previous block, and the last block of a period not before its first", url: "https://github.com/bitcoin/bips/blob/master/bip-0054.md" }
  - { label: "BitMEX Research - Bitcoin's Block Timestamp Protection Rules (30 October 2019, Wayback Machine): a median of eleven means six blocks could be reorganised without time moving backwards; a block too far in the future is early rather than invalid; two hours is a small fraction of two weeks", url: "https://web.archive.org/web/20210125200205/https://blog.bitmex.com/bitcoins-block-timestamp-protection-rules/" }
  - { label: "BitMEX Research - The Timewarp Attack (31 March 2025, Wayback Machine): two hours is around 0.6 percent of the difficulty adjustment period", url: "https://web.archive.org/web/20251013153620/https://blog.bitmex.com/the-timewarp-attack/" }
relatedTerms:
  - bip-113
  - block-header
  - difficulty-retargeting
  - great-consensus-cleanup
  - locktime
  - miner
  - mtp-median-time-past
  - nlocktime
  - node
  - time-warp-attack
liveWidget: ~
---

A Bitcoin [block header](/glossary/block-header) carries a 32-bit timestamp that the [miner](/glossary/miner) fills in. Nothing forces it to be true. The network has no clock of its own, so the rules do not try to check the time against reality. They check it against the chain and against the validating node, and they give miners a window to work in rather than a point to hit.

The first rule looks backwards. In `ContextualCheckBlockHeader` in `src/validation.cpp`, a block is rejected as `time-too-old` if its timestamp is less than or equal to the [median time past](/glossary/mtp-median-time-past) of the previous eleven blocks. The median, not the previous block's own stamp, which is why consecutive timestamps are allowed to run backwards: a miner who rolled the time forward while searching for a nonce is not forced to stay ahead of the real clock, and a block from a slow clock is not thrown out. What the median guarantees is that the chain's notion of time cannot be dragged backwards by one miner, since moving a median of eleven takes six of them. The same median is what [BIP-113](/glossary/bip-113) made the reference for time locks.

The second rule looks forwards and works differently. A block whose timestamp is more than `MAX_FUTURE_BLOCK_TIME` ahead of the node's clock is rejected as `time-too-new`; the constant is two hours, 7,200 seconds, in `src/chain.h`. This one is not quite a validity rule. The block is early rather than invalid, and the same node will accept it once the two hours have passed, which is why Bitcoin Core files it under `BLOCK_TIME_FUTURE`. What it stops is a miner claiming a block took longer to find than it did. Two hours is about 0.6 percent of a two-week window, so even a miner who stamps every block at the limit cannot move the next retarget by much.

Which clock the node compares against has changed once. For most of Bitcoin's life a node compared block times against network-adjusted time, its own clock corrected by the median offset reported by its peers, capped at 70 minutes. Bitcoin Core 27.0 removed that from consensus code. The node now uses plain system time and keeps the peer comparison only to warn an operator whose clock is off by 70 minutes or more. The release notes give the reason: adjusting to peers quietly assumed an honest majority of connections, and the change puts the burden on the operator to keep the system clock right.

Both checks are in the earliest code in the Bitcoin Core repository, from 2009, with the same constants. Satoshi's block generator also set each new block's time to the later of network-adjusted time and median time past plus one. Bitcoin Core's template builder still does the same with system time, and `getblocktemplate` reports the floor to miners as `mintime`, which since version 29.0 is raised on the first block of a window to respect the proposed time warp rule. The rules work, as far as anyone can tell, for what they were built to do: stop a lone miner from bending time-locked transactions or the retarget. What they leave open is the seam between two difficulty windows, where nothing compares the first block of one with the last block of the other. That gap is the [time warp attack](/glossary/time-warp-attack), and closing it is the first rule in [BIP-54](/glossary/great-consensus-cleanup).
