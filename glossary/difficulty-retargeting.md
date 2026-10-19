---
title: "Difficulty Adjustment"
slug: difficulty-retargeting
linkText:
  - "difficulty adjustment"
  - "difficulty adjustments"
  - "difficulty retargeting"
  - "difficulty retarget"
  - "difficulty epoch"
  - "difficulty period"
draft: false
updated: "2026-10-19"
shortDefinition: "The automatic recalibration of Bitcoin's mining difficulty every 2,016 blocks, also called retargeting, that keeps the average block interval near ten minutes. The new difficulty is the old one scaled by two weeks divided by the time the last window took, clamped to a factor of four either way."
keyTakeaways:
  - "Every 2,016 blocks (about two weeks) every node rescales the difficulty by two weeks divided by the time the window just finished took, measured from its first block's timestamp to its last; the ratio is clamped between a quarter and four"
  - "The window measures 2,015 intervals against a 2,016-interval target and does not overlap the previous window; the first is a harmless off-by-one, the second is the seam the time warp attack uses"
  - "No event has broken it: the 2021 loss of roughly half the hash rate ended at the next retarget with a 27.9 percent cut, the largest downward step on record, and blocks were back near ten minutes a window later"
sources:
  - { label: "Bitcoin Core - src/pow.cpp: GetNextWorkRequired runs only when the next height is a multiple of DifficultyAdjustmentInterval() and reaches back 2,015 blocks for the first timestamp; CalculateNextWorkRequired clamps the span to between a quarter and four times nPowTargetTimespan, scales the target, and caps it at powLimit", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
  - { label: "Bitcoin Core - src/kernel/chainparams.cpp: mainnet nPowTargetTimespan of 14 * 24 * 60 * 60 seconds and nPowTargetSpacing of 10 * 60, so the interval is 2,016 blocks", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core - main.cpp at the repository's first commit (2009): the same two-week nTargetTimespan, the loop back nInterval minus one blocks, and the quarter-to-four-times clamp", url: "https://github.com/bitcoin/bitcoin/blob/4405b78d6059e536c36974088a8ed4d9f0f29898/main.cpp" }
  - { label: "Pieter Wuille - Oddities of Bitcoin's difficulty adjustment (gist): the window observes 2,015 blocks; because the formula uses the inverse of the observed span, the honest interblock time it targets is 600 x 2016/2014 seconds", url: "https://gist.github.com/sipa/1a70884abe6d0a7cddc340c99f741a41" }
  - { label: "mempool.space API - every difficulty change since 2009: the adjustment at block 689,472 on 3 July 2021 was a factor of 0.7206, the lowest in the series; the window before it took 19.4 days", url: "https://mempool.space/api/v1/mining/hashrate/all" }
  - { label: "BitMEX Research - The Timewarp Attack (31 March 2025, Wayback Machine): the off-by-one makes the target 10 minutes and 0.3 seconds; the average interval since launch has been 9 minutes 36 seconds because hash rate has mostly risen", url: "https://web.archive.org/web/20251013153620/https://blog.bitmex.com/the-timewarp-attack/" }
  - { label: "BIP-54 - Consensus Cleanup: the timewarp fix constrains the first and last timestamps of each difficulty period", url: "https://github.com/bitcoin/bips/blob/master/bip-0054.md" }
relatedTerms:
  - block-height
  - block-time
  - block-timestamp-rules
  - chain-death-spiral
  - competitive-mining
  - consensus-parameter
  - difficulty
  - emergency-difficulty-adjustment-eda
  - great-consensus-cleanup
  - halving-halvening
  - hash-rate
  - miner
  - mining-algorithm
  - mtp-median-time-past
  - nonce-exhaustion
  - poisson-process
  - proof-work-pow
  - time-warp-attack
sameAs:
  - "https://en.bitcoin.it/wiki/Difficulty"
  - "https://en.bitcoin.it/wiki/Target"
  - "https://en.bitcoin.it/wiki/Protocol_rules"
liveWidget: ~
---

Difficulty adjustment, also called retargeting, is the mechanism that keeps Bitcoin's average [block time](/glossary/block-time) near ten minutes whatever the [hash rate](/glossary/hash-rate) does. It is two short functions in `src/pow.cpp`, `GetNextWorkRequired` and `CalculateNextWorkRequired`, and the rule has not changed since the first public code in 2009.

The rule:

- Every **2,016 blocks**, about two weeks at ten minutes each, every node computes how long the window just finished actually took: the timestamp of its last block minus the timestamp of its first.
- The new [difficulty](/glossary/difficulty) is the old one scaled by two weeks divided by that span. Blocks came too fast, difficulty goes up; too slow, it goes down. The target, the number a block hash must fall under, moves the other way.
- The span is **clamped to between a quarter and four times** two weeks before the division, so no single adjustment can move difficulty by more than a factor of four in either direction.
- The new value takes effect on the first block of the next window and holds for 2,016 blocks. Between retargets nothing adjusts, however long blocks take.

Two quirks are worth knowing. The window's first and last block are 2,015 intervals apart, not 2,016, and the code compares that span with 2,016 times ten minutes anyway. Satoshi's off-by-one makes the real target ten minutes and three tenths of a second, and once the statistics of dividing by a measured span are worked through, closer to ten minutes and six tenths. Nobody has noticed in practice, because hash rate has grown for most of Bitcoin's life and blocks have averaged under ten minutes regardless. The second quirk is more serious. The windows do not overlap, so the first timestamp of one window is never checked against the last timestamp of the window before it. That seam is the [time warp attack](/glossary/time-warp-attack), and closing it is the first rule of the [Consensus Cleanup](/glossary/great-consensus-cleanup) soft fork proposal. The timestamps themselves are bounded by the [block timestamp rules](/glossary/block-timestamp-rules): a median floor and a two-hour ceiling.

There is no committee and no override. The network observes its own block times and corrects, on a fixed schedule, forever. A new mining farm does not change the issuance schedule; it triggers a higher difficulty at the next retarget, and everyone else's share of the blocks shrinks to match.

The mechanism has held through everything so far. China's 2021 mining ban took roughly half the hash rate offline; the window that ended on July 3, 2021 ran at 13.9 minutes a block, and the retarget at block 689,472 cut difficulty by 27.9 percent, the largest downward step on record. The next window ran at 10.5 minutes. The 2022 bear market thinned the miners, and four halvings have each halved their subsidy overnight, and in every case the next window absorbed it. The counting-in-blocks design does have a failure mode on paper: a chain that lost most of its hash rate at once would wait a long time for the retarget that saves it. That is the [chain death spiral](/glossary/chain-death-spiral), and it is why minority forks such as Bitcoin Cash in 2017 bolted on an [emergency difficulty adjustment](/glossary/emergency-difficulty-adjustment-eda), with results that argue for the slow window.

See the live current epoch progress and next-adjustment estimate in the [Mining rabbit hole section 4](/rabbit-hole/mining) or on the [Node page](/node).
