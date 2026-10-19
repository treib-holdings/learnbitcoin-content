---
title: "Time Warp Attack"
slug: time-warp-attack
linkText:
  - "time warp attack"
  - "timewarp attack"
  - "time warp"
  - "timewarp"
draft: false
published: "2026-10-19"
shortDefinition: "A way for miners with most of the hash rate to push Bitcoin's difficulty toward its minimum by lying about block timestamps. It works because the 2,016-block retarget window measures 2,015 intervals and does not overlap the window before it. Known since about 2011, never seen on mainnet, and the fix is the first rule in BIP-54."
keyTakeaways:
  - "The retarget compares the first and last timestamps of a 2,016-block window, 2,015 intervals apart, and the next window starts fresh; the first block of a window may carry an earlier stamp than the last block of the previous one as long as it beats the median of the eleven before it"
  - "A majority miner holds timestamps back, stamps the last block of each window with the real time and drops back on the next one; from the second window on each period looks weeks longer than it was, difficulty falls faster each round, and BIP-54 puts the minimum within 38 days"
  - "The fix is one rule: the first block of a window may not be stamped more than a grace period before the last block of the previous one. Testnet4 has enforced ten minutes since 2024 (BIP-94); BIP-54 proposes two hours for mainnet, and Bitcoin Core 29.0 already refuses to build a template that breaks it"
sources:
  - { label: "Bitcoin Core - src/pow.cpp: GetNextWorkRequired reaches back DifficultyAdjustmentInterval() minus one blocks, so the measured span covers 2,015 intervals; CalculateNextWorkRequired clamps it to between a quarter and four times nPowTargetTimespan", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
  - { label: "Bitcoin Core - src/validation.cpp: ContextualCheckBlockHeader rejects a block stamped at or below the previous median time past (time-too-old) and, where enforce_BIP94 is set, the first block of a window stamped more than MAX_TIMEWARP before the previous block (time-timewarp-attack)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "Bitcoin Core - src/consensus/consensus.h: MAX_TIMEWARP = 600 seconds (BIP94)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/consensus.h" }
  - { label: "BIP-54 - Consensus Cleanup (Poinsot and Corallo, assigned 2025-04-11): a majority-hashrate attacker can bring difficulty to its minimum within 38 days; the first block of a period may not be stamped earlier than the previous block minus 7,200 seconds; two hours chosen after testnet4 showed pool software breaking a ten-minute grace, at a cost of about 2.2 seconds per block under attack; Bitcoin Core 29.0 templates already comply", url: "https://github.com/bitcoin/bips/blob/master/bip-0054.md" }
  - { label: "BIP-94 - Testnet 4 (Jahr, assigned 2024-05-27): the first block of each period must not be stamped more than 600 seconds before the previous block; block storms on testnet3 mined three years of blocks in a few weeks; a time warp would amplify them", url: "https://github.com/bitcoin/bips/blob/master/bip-0094.mediawiki" }
  - { label: "Matt Corallo - bitcoin-dev, BIP Proposal: The Great Consensus Cleanup (6 March 2019): the 600-second allowance on the difficulty-adjustment block, the 7,200-second alternative, and the only uses of the exploit being malicious inflation or a fork into extension blocks", url: "https://gnusha.org/pi/bitcoindev/bf96c2fb-2e2e-a47f-e59f-87e56d83eca3@mattcorallo.com/" }
  - { label: "Matt Corallo - draft BIP, The Great Consensus Cleanup (created 2019-01-28): no known attempts to exploit timewarp on mainnet; some deployed mining hardware rolls nTime forward by up to 600 seconds; the existing target is about 600.6 seconds", url: "https://github.com/TheBlueMatt/bips/blob/cleanup-softfork/bip-XXXX.mediawiki" }
  - { label: "Bitcoin Core PR #15482 - Implement BIPXXX's new softfork rules (The Great Consensus Cleanup): opened February 2019, closed 12 November 2019", url: "https://github.com/bitcoin/bitcoin/pull/15482" }
  - { label: "Antoine Poinsot - Delving Bitcoin, Great Consensus Cleanup Revival (24 March 2024): the attacker halves the difficulty by the end of period N+1 and reaches difficulty 1 in under 40 days, then mines millions of blocks; a minority hashrate gains almost nothing by exploiting it opportunistically", url: "https://delvingbitcoin.org/t/great-consensus-cleanup-revival/710" }
  - { label: "BitMEX Research - The Timewarp Attack (31 March 2025, Wayback Machine): the weakness was first identified around 2011; the stamp need only advance one second every six blocks; 10.9 blocks per second by day 39; an honest first block in any window defeats that round", url: "https://web.archive.org/web/20251013153620/https://blog.bitmex.com/the-timewarp-attack/" }
  - { label: "Pieter Wuille - Oddities of Bitcoin's difficulty adjustment (gist): the window observes 2,015 blocks; the honest interblock time under the formula is 600 x 2016/2014 seconds; an attacker satisfies the median rule by adding one second every six blocks", url: "https://gist.github.com/sipa/1a70884abe6d0a7cddc340c99f741a41" }
  - { label: "Sjors Provoost - Delving Bitcoin, Timewarp attack 600 second grace period (December 2024): testnet4 started at 7,200 seconds and was moved back to 600 in PR #30647; the case for 7,200 on mainnet", url: "https://delvingbitcoin.org/t/timewarp-attack-600-second-grace-period/1326" }
relatedTerms:
  - bip-113
  - block-header
  - block-timestamp-rules
  - chain-death-spiral
  - difficulty
  - difficulty-retargeting
  - great-consensus-cleanup
  - hash-rate
  - miner
  - mtp-median-time-past
  - soft-fork
  - testnet
liveWidget: ~
---

Bitcoin's [difficulty](/glossary/difficulty) is recalculated every 2,016 blocks from timestamps that miners write into the [block headers](/glossary/block-header) themselves. `GetNextWorkRequired` in `src/pow.cpp` finds the first block of the window and hands its timestamp to `CalculateNextWorkRequired`, which subtracts it from the last block's timestamp and compares the result with two weeks. Two details of that arithmetic matter here. The first and last block of a 2,016-block window are 2,015 intervals apart, not 2,016, so the comparison is off by one. And each window starts over with its own first block. Nothing ties the first timestamp of a window to the last timestamp of the window before it, except the [median time past](/glossary/mtp-median-time-past) rule, which only asks that a block be stamped later than the median of the previous eleven.

The off-by-one is harmless on its own. It spreads 1,209,600 seconds over 2,015 gaps instead of 2,016, so the real target is ten minutes and three tenths of a second. The seam between windows is the vulnerability. A miner who produces the last block of one window and the first block of the next may stamp the last with the true time and the first with a time far in the past, and both blocks are valid.

The attack built on that seam has been known since about 2011. A miner with a majority of the [hash rate](/glossary/hash-rate) stops writing real timestamps. For almost every block the stamp creeps forward by one second every six blocks, the slowest pace the median rule allows, so the chain's clock falls further and further behind the wall clock. On the last block of each window the miner writes the real time, by now weeks ahead of the stamps around it. The first block of the next window drops back to the crawling clock, which the median rule permits because one outlier does not move a median of eleven. From the second window on, each period measures far longer than two weeks, so each retarget cuts difficulty: by half the first time, by more as the windows get shorter, and the miner finds blocks faster every round.

The numbers are bad: Antoine Poinsot's analysis for [BIP-54](/glossary/great-consensus-cleanup) puts difficulty at its minimum within 38 days of starting, after which the attacker can mine millions of blocks, bringing forward all the remaining subsidy and breaking every time lock that Lightning channels and vaults rely on. BitMEX Research ran the same arithmetic and got more than ten blocks a second by day 39. Honest miners are what stands in the way. An honest first block in any window, stamped with the real time, spoils that round, and honest stamps elsewhere drag the median forward, so the attack needs a majority. A minority miner who bends timestamps opportunistically gains almost nothing, and Matt Corallo's 2019 draft recorded no known attempt on mainnet.

The reasons it sat unfixed are mundane. The attack is slow, visible to everyone for weeks, and needs a majority that could already censor the chain, so for years it was filed under theoretical. Corallo's 2019 Great Consensus Cleanup bundled the fix with script changes that drew objections about confiscating old coins, and the whole package stalled; his pull request was closed that November. Testnet3 then supplied a live demonstration of what a collapsing difficulty does. Its 20-minute minimum-difficulty exception, a different bug in the same code, produced block storms that mined three years' worth of blocks in a few weeks in 2024, and BIP-94 notes that a time warp would have amplified them. Testnet4, which replaced it, enforces a time warp rule, the only Bitcoin network that does as of October 2026.

The fix itself is small. The first block of a difficulty window may not be stamped earlier than the last block of the previous window, minus a grace period. Corallo proposed ten minutes, because deployed mining hardware rolls the timestamp forward by up to that much while searching for a nonce, and testnet4 enforces 600 seconds through the `MAX_TIMEWARP` constant in Bitcoin Core. BIP-54 widened it to two hours after testnet4 showed pool software producing blocks that broke the ten-minute version; two hours matches the future-time limit, and under attack the BIP puts the cost at about two seconds per block. Bitcoin Core has refused to build a block template that breaks the rule since version 29.0. Mainnet enforcement is still a [soft fork](/glossary/soft-fork) away. See [Great Consensus Cleanup](/glossary/great-consensus-cleanup) for the full package and [block timestamp rules](/glossary/block-timestamp-rules) for the limits miners work within.
