---
title: "Chain Death Spiral"
slug: chain-death-spiral
linkText:
  - "chain death spiral"
  - "death spiral"
  - "difficulty death spiral"
draft: false
published: "2026-10-20"
shortDefinition: "The feared feedback loop in which a proof-of-work chain loses most of its hash rate, blocks slow to a crawl, the retarget that would lower difficulty recedes because it is counted in blocks rather than time, and the remaining miners leave too. Real for a minority fork; for Bitcoin it has stayed a thought experiment, and the 2021 loss of roughly half the hash rate ended at the next retarget."
keyTakeaways:
  - "The window is counted in blocks, not time: if hash rate falls to a fraction f of what the difficulty was set for, blocks average 10/f minutes and the next retarget is 2,016 of them away; at half the hash rate that is four weeks, at five percent about nine months"
  - "The factor-of-four clamp means a chain that lost more than three quarters of its miners cannot recover in one retarget, and each further step costs another slow window; minority forks such as Bitcoin Cash in 2017 added emergency rules for exactly this reason"
  - "Bitcoin's lived test: the 2021 shutdown of mining in China roughly halved the hash rate, the window ending July 3, 2021 took 19.4 days at 13.9 minutes a block, and the retarget at block 689,472 cut difficulty by 27.9 percent, the largest downward step on record; the next window ran at 10.5 minutes"
sources:
  - { label: "Bitcoin Core - src/pow.cpp: the retarget runs only when the height is a multiple of DifficultyAdjustmentInterval(); the measured span is clamped to between a quarter and four times nPowTargetTimespan", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
  - { label: "Bitcoin Core - src/kernel/chainparams.cpp: fPowAllowMinDifficultyBlocks is false on mainnet and true on testnet3 and testnet4", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "mempool.space API - difficulty adjustments and daily hash rate since 2009: the adjustment at block 689,472 on 3 July 2021 was a factor of 0.7206, the lowest in the series; estimated hash rate about 180 EH/s in mid-May 2021 and about 85 EH/s in early July; difficulty first exceeded its 13 May 2021 value at block 719,712 on 21 January 2022", url: "https://mempool.space/api/v1/mining/hashrate/all" }
  - { label: "Cambridge Judge Business School - New data reveals timeline of China's bitcoin mining exodus (15 July 2021): China's share of hash rate fell from 75.5% in September 2019 to 46% in April 2021, before the June 2021 crackdown", url: "https://www.jbs.cam.ac.uk/2021/new-data-reveals-timeline-of-chinas-bitcoin-mining-exodus/" }
  - { label: "Bitcoin Cash - UAHF Technical Specification, REQ-7 (July 2017): a 20 percent difficulty cut when the MTP of the tip is 12 hours or more past the MTP six blocks earlier, so the chain remains viable in case of an abrupt hashrate drop", url: "https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/uahf-technical-spec.md" }
  - { label: "BIP-94 - Testnet 4 (2024): the 20-minute minimum-difficulty exception, kept from testnet3; because the first block of each period must be mined at real difficulty, the BIP's known downside is a stall once per period until difficulty adjusts down far enough", url: "https://github.com/bitcoin/bips/blob/master/bip-0094.mediawiki" }
  - { label: "BitMEX Research - The implications for Bitcoin of the new Bitcoin Cash difficulty adjustment mechanism (16 November 2017, Wayback Machine): a two-week window feels a hashrate swing for longer than a one-day window", url: "https://web.archive.org/web/20191118094016/https://blog.bitmex.com/the-implications-for-bitcoin-of-the-new-bitcoin-cash-difficulty-adjustment/" }
relatedTerms:
  - bitcoin-cash
  - block-time
  - difficulty
  - difficulty-retargeting
  - emergency-difficulty-adjustment-eda
  - fork
  - geographic-mining-distribution
  - hash-rate
  - miner
  - mining-centralization
  - proof-work-pow
  - time-warp-attack
liveWidget: ~
---

Every [proof-of-work](/glossary/proof-work-pow) chain adjusts its [difficulty](/glossary/difficulty) to the miners it has, and every adjustment lags. Bitcoin's lag is a 2,016-block window with no clock inside it: the [retarget](/glossary/difficulty-retargeting) fires after 2,016 blocks whether those blocks took two weeks or two years. The death spiral is what happens if that lag feeds on itself. Hash rate leaves, blocks slow down, the retarget that would make blocks cheap again moves further off in time because it is counted in blocks, the miners still running earn less per hour and some of them leave, and so on until nobody is mining.

The arithmetic is simple to state. If the hash rate drops to a fraction f of the level the current difficulty was set for, blocks average 10/f minutes and the next retarget is 2,016 of them away. At f = 0.5 that is 20 minutes a block and four weeks to the retarget. At f = 0.1, blocks every 100 minutes and 140 days. At f = 0.05, one block every three hours and twenty minutes and about nine months. The retarget can only cut difficulty to a quarter in one step, so a chain that lost more than three quarters of its miners faces a second slow window after the first.

For a minority fork those numbers are a real threat. A chain that splits off Bitcoin inherits Bitcoin's difficulty with whatever share of miners chooses to follow, and if the share is small the chain may not produce enough blocks to reach its first retarget before the miners give up. That is why [Bitcoin Cash](/glossary/bitcoin-cash) launched in 2017 with an [emergency difficulty adjustment](/glossary/emergency-difficulty-adjustment-eda) that cut difficulty 20 percent whenever six blocks had taken twelve hours or more, and why Bitcoin's own test networks carry a 20-minute rule that lets a block be mined at minimum difficulty after a long gap. The escape hatches have their own problems. BIP-94 notes that testnet4 can still stall once per window waiting for a single block at the real difficulty, and the Bitcoin Cash rule set off an oscillation that took a hard fork to stop. But the fear they answer is real for a small chain.

For Bitcoin the spiral has stayed a thought experiment, for two reasons. The first is that a halving of hash rate is survivable by inspection: twenty-minute blocks for four weeks is an inconvenience, not a collapse, and the chain pays subsidy and fees all the way through. The second is that hash rate which goes dark tends to come back somewhere else. The lived test came in 2021. Chinese provinces ordered mines shut between May and June of that year, and the estimated hash rate fell by roughly half, from about 180 EH/s in mid-May to about 85 EH/s in early July. Blocks slowed, and the window that ended on July 3 at block 689,472 took 19.4 days, 13.9 minutes a block, and the retarget cut difficulty by 27.9 percent, the largest downward adjustment in Bitcoin's history. The following window ran at 10.5 minutes a block. The machines were shipped abroad and plugged back in; by the start of 2022 the estimated hash rate was back at its spring peak, and difficulty passed its May 2021 level on January 21, 2022. The system did what the design says it will do, with one slow month in the middle.

A spiral on Bitcoin would need something no event has yet produced: a loss of hash rate so large and so fast that the remaining miners cannot reach the next retarget, with no price or fee signal pulling anyone back. The slow window that makes such a loss costly is the same one that makes the [time warp attack](/glossary/time-warp-attack) take weeks and that stops a majority miner from ratcheting difficulty down in a day. That is the trade Bitcoin made when it chose a two-week window, and so far it has held.
