---
title: "Emergency Difficulty Adjustment (EDA)"
slug: emergency-difficulty-adjustment-eda
linkText:
  - "Emergency Difficulty Adjustment"
  - "emergency difficulty adjustment (EDA)"
  - "EDA"
draft: false
published: "2026-10-19"
shortDefinition: "The extra difficulty rule Bitcoin Cash launched with on August 1, 2017: whenever the chain's median time past had advanced twelve hours or more over six blocks, the next block's difficulty dropped by 20 percent. It kept a minority chain alive and then made it oscillate, as miners left to trigger the cut and returned to mine the cheap blocks. Replaced on November 13, 2017 by a rolling 144-block algorithm."
keyTakeaways:
  - "The rule (UAHF specification, REQ-7): when the median time past of the tip is 12 hours or more past the median time past six blocks earlier, the target rises by a quarter, a 20 percent difficulty cut, on top of the normal 2,016-block retarget"
  - "The incentive it created: a stall was rewarded, so hash rate swung between the two chains in waves; by the November fix Bitcoin Cash had mined about 25,500 blocks since the split against Bitcoin's 15,700, nearly 10,000 blocks of subsidy pulled forward"
  - "The fix (the November 13, 2017 hard fork): Amaury Sechet's 144-block algorithm, which sets each block's target from the work done and time elapsed over about a day, chosen over two rival designs after independent simulation; BIP-146's LOW_S and NULLFAIL rules activated in the same fork"
sources:
  - { label: "Bitcoin Cash - UAHF Technical Specification v1.6 (24 July 2017), REQ-7: if the MTP of the tip is 12 hours or more after the MTP six blocks before, the target is increased by a quarter, a 20 percent difficulty reduction; activation time 1501590000 (1 August 2017 12:20 UTC); rationale: hashrate depends on market price and is hard to predict", url: "https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/uahf-technical-spec.md" }
  - { label: "Bitcoin Cash - November 13th Hardfork Technical Details v1.3: activates when MTP-11 reaches 1510600000; replaces the emergency difficulty adjustment with an algorithm over about 144 blocks that divides chainwork by a timespan clamped to between 72 x 600 and 288 x 600 seconds; also enforces BIP-146 LOW_S and NULLFAIL", url: "https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/nov-13-hardfork-spec.md" }
  - { label: "Bitcoin ABC - Difficulty Adjustment Algorithm Update (1 November 2017, announcing Bitcoin ABC 0.16.0): the EDA let the chain survive as a minority chain but produces wild fluctuations of hashrate, prevents consistently fast confirmations and radically shifts the issuance schedule; candidates D578 (Neil Booth), D601 (Amaury Sechet), D622 (Tom Harding), tested independently by Bitprim and nChain; D601 chosen as least risk; activation 13 November, 7:06 PM GMT", url: "https://www.bitcoinabc.org/2017-11-01-DAA/" }
  - { label: "Bitcoin ABC v0.14.6 - src/pow.cpp: GetNextWorkRequired applies the normal retarget on period boundaries and otherwise raises the target by a quarter whenever the MTP of the tip is 12 hours or more past the MTP six blocks earlier, capped at powLimit", url: "https://github.com/Bitcoin-ABC/bitcoin-abc/blob/v0.14.6/src/pow.cpp" }
  - { label: "Bitcoin ABC - src/kernel/chainparams.cpp: mainnet uahfHeight 478558 for the August 1, 2017 hard fork and daaHeight 504031 for the November 13, 2017 hard fork", url: "https://github.com/Bitcoin-ABC/bitcoin-abc/blob/master/src/kernel/chainparams.cpp" }
  - { label: "mempool.space API - the Bitcoin block at timestamp 1510600000: height 494,231, 13 November 2017", url: "https://mempool.space/api/v1/mining/blocks/timestamp/1510600000" }
  - { label: "BitMEX Research - Bitcoin's Block Timestamp Protection Rules (30 October 2019, Wayback Machine): miners left large time gaps on purpose, producing large difficulty cuts followed by bursts of blocks; more blocks were produced than expected and miner revenue rose; the two-hour future limit is 8.3 percent of a one-day window", url: "https://web.archive.org/web/20210125200205/https://blog.bitmex.com/bitcoins-block-timestamp-protection-rules/" }
  - { label: "BitMEX Research - The Litecoin vs. Dogecoin hash-rate wars of 2014 and implications for Bitcoin vs. Bitcoin Cash (16 November 2017, Wayback Machine): the EDA caused sharp drops in difficulty and made Bitcoin Cash mining more profitable than Bitcoin for short periods; BitMEX had flagged it in early September 2017", url: "https://web.archive.org/web/20191020003904/https://blog.bitmex.com/blockchain-history/" }
  - { label: "BitMEX Research - The implications for Bitcoin of the new Bitcoin Cash difficulty adjustment mechanism (16 November 2017, Wayback Machine): a two-week window means Bitcoin feels a hashrate oscillation for longer than a chain with a one-day window", url: "https://web.archive.org/web/20191118094016/https://blog.bitmex.com/the-implications-for-bitcoin-of-the-new-bitcoin-cash-difficulty-adjustment/" }
  - { label: "BIP-146 - Dealing with signature encoding malleability (LOW_S and NULLFAIL)", url: "https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki" }
relatedTerms:
  - bitcoin-cash
  - block-size-war
  - block-time
  - chain-death-spiral
  - difficulty
  - difficulty-retargeting
  - fork
  - hash-rate
  - miner
  - mtp-median-time-past
  - time-warp-attack
liveWidget: ~
---

When a chain splits off with a small share of the hash rate, its first problem is arithmetic. Bitcoin's [difficulty adjustment](/glossary/difficulty-retargeting) runs every 2,016 blocks and never looks at the clock in between. A chain that inherits Bitcoin's difficulty with five percent of Bitcoin's miners finds a block every three hours or so, and its first retarget is about nine months away. That is the [chain death spiral](/glossary/chain-death-spiral) worry, and the developers of [Bitcoin Cash](/glossary/bitcoin-cash), who were about to split from Bitcoin on August 1, 2017 without knowing how many miners would follow, wrote a rule to get around it.

The rule was the Emergency Difficulty Adjustment, requirement 7 of the UAHF (user-activated hard fork) specification: if the [median time past](/glossary/mtp-median-time-past) of the chain tip is twelve hours or more ahead of the median time past six blocks earlier, the next block's target goes up by a quarter, which is a 20 percent cut in difficulty. It fired on every block for which the condition held, with no floor other than Bitcoin's minimum difficulty, and it sat on top of the ordinary 2,016-block retarget rather than replacing it. The rationale in the specification is two sentences: the hash rate a chain will get depends on its price and is hard to predict, so difficulty must be able to fall after an abrupt drop if the chain is to stay viable. For a chain that might otherwise freeze, it did the job, and the chain kept moving through its first weeks with a small share of the miners.

Then the miners read the rule the other way. It paid out for gaps, so the profitable move was to leave the chain until twelve-hour gaps had piled up and cut difficulty to a fraction, then come back and mine blocks minutes apart until the normal retarget caught up, then leave again. Hash rate moved between the two chains in waves, Bitcoin Cash produced blocks in bursts after hours of nothing, and the coin's issuance ran far ahead of its schedule. From the split to the fix, 104 days, the chain mined about 25,500 blocks, nearly 10,000 more than Bitcoin found in the same time. The waves pulled miners off Bitcoin too, and BitMEX Research, which had flagged the design as a problem in September 2017, worked out the spillover: a chain with a two-week window is the one that feels an oscillation longest, because it corrects last.

Bitcoin ABC, the main Bitcoin Cash implementation, replaced the rule in a hard fork that activated on November 13, 2017, once the chain's median time past passed 1510600000. Three candidate algorithms had been simulated, from Neil Booth, Amaury Sechet and Tom Harding, with Bitprim and nChain running independent tests, and Sechet's was chosen as the least risky. It takes the chain work and the elapsed time over roughly the previous 144 blocks, about a day, clamps the elapsed time to between half a day and two days, and sets the next target from the ratio, on every block. The same fork made [BIP-146](https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki)'s LOW_S and NULLFAIL rules mandatory. The oscillations shrank after that, though BitMEX's later work still found the chain more exposed to timestamp games than Bitcoin, because the two-hour future limit on a block's timestamp is 8.3 percent of a one-day window and a fraction of a percent of a two-week one.

For Bitcoin the episode is a lesson in what the slow retarget buys. A two-week window cannot be gamed by sitting out for twelve hours, and the price of that is a chain which would take months to recover from losing most of its miners at once. Bitcoin's own history says the trade has been the right one so far. The 2021 mining ban in China took roughly half the hash rate offline and the next retarget handled it.
