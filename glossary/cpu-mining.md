---
title: "CPU Mining"
slug: cpu-mining
draft: false
updated: "2026-10-10"
shortDefinition: "Mining using a computer's central processing unit, only viable in Bitcoin's earliest days before GPUs and ASICs took over."
keyTakeaways:
  - "Originally how Bitcoin was mined in 2009-2010"
  - "Quickly outclassed by GPU and ASIC hardware"
  - "No longer practical for earning significant rewards"
sources:
  - { label: "Michael Bedford Taylor - The Evolution of Bitcoin Hardware (IEEE Computer, September 2017): Core i7-990x 33 MH/s, GTX 570 155 MH/s, Radeon 7970 0.675 GH/s; FPGAs from June 2011", url: "https://cseweb.ucsd.edu/~mbtaylor/papers/Taylor_Bitcoin_IEEE_Computer_2017.pdf" }
  - { label: "Hal Finney - Bitcoin and me (Bitcoin Talk, March 19, 2013): in early 2009 you could find blocks with a CPU", url: "https://bitcointalk.org/index.php?topic=155054.0" }
  - { label: "Bitcoin Wiki - non-specialized hardware comparison: the CPU tables top out at 140 MH/s (Xeon Phi 5100)", url: "https://en.bitcoin.it/wiki/Non-specialized_hardware_comparison" }
  - { label: "mempool.space API - daily network hash rate (October 1-10, 2026 average about 970 EH/s)", url: "https://mempool.space/api/v1/mining/hashrate/all" }
  - { label: "Cointelegraph - solo miner with a 480 GH/s device wins block 887,212; Con Kolivas on the odds (March 12, 2025)", url: "https://cointelegraph.com/news/solo-bitcoin-miner-wins-block-using-tiny-cheap-bitcoin-miner" }
  - { label: "mempool.space - block 887,212, mined through Solo CK on March 10, 2025 (reward 3.15 BTC)", url: "https://mempool.space/block/000000000000000000006414aea39be567cf1d5ff6cbf2d77254fe7c714b0d81" }
  - { label: "Bitcoin developer examples - regtest mode: generate 101 blocks in under a second on a generic PC", url: "https://developer.bitcoin.org/examples/testing.html" }
  - { label: "RandomX README - proof of work optimized for general-purpose CPUs, active on Monero since November 30, 2019", url: "https://github.com/tevador/RandomX" }
relatedTerms:
  - asic-application-specific-integrated-circuit
  - asic-resistance
  - asicboost
  - hash-rate
  - miner
  - miner-capitulation
  - mining
  - mining-algorithm
  - mining-colocation
  - mining-centralization
  - mining-rig
  - mining-software
liveWidget: ~
---

CPU mining is mining Bitcoin using a general-purpose computer processor instead of specialized hardware. It was the only way to mine Bitcoin until GPU miners appeared in late 2010, and it has been economically extinct on Bitcoin's mainnet since the early 2010s.

The historical progression:

- **2009-2010:** CPU mining. Anyone with a laptop could find blocks. [Satoshi](/glossary/satoshi-nakamoto) and [Hal Finney](/glossary/hal-finneys-running-bitcoin) mined this way.
- **Late 2010:** GPU mining started. Graphics cards turned out to be roughly 5 to 20 times faster at hashing than the best CPUs. CPU miners couldn't compete.
- **2013:** [ASICs](/glossary/asic-application-specific-integrated-circuit) arrived. As they spread, GPU mining stopped covering its electricity costs.
- **2014+:** ASIC-only era. The fastest chip in the CPU section of the Bitcoin Wiki's hardware comparison manages about 140 million hashes a second (140 MH/s). The whole network averaged about 970 EH/s in early October 2026, roughly seven trillion times more, so a CPU's share rounds to zero.

Why CPU mining still has a (tiny) place in culture:

- **Educational value.** In regtest, a private test mode built into Bitcoin Core, an ordinary PC can mine 101 blocks in under a second. Many developers prefer it for building and testing new applications.
- **Lottery hardware.** Every so often a hobbyist mining solo on small, cheap hardware wins a whole block. In March 2025 a pocket-sized miner running at about 480 GH/s found block 887,212, worth about 3.15 BTC, through a solo mining pool. The pool's operator, Con Kolivas, put the odds for a miner that size at less than one in a million per day. That device is still thousands of times faster than any CPU on the wiki's list. The odds are astronomically against, but the lottery aspect appeals to some hobbyists.
- **Some altcoins still favor CPU mining** (e.g., Monero's RandomX). The economics there are different. On Bitcoin specifically, CPU mining is purely sentimental.

If you ran a CPU at 100% on Bitcoin's mainnet for a year, your expected block discoveries would be a number with many zeros after the decimal point. You'd likely heat your office, scare your electricity provider, and never find a block. The math of [hash rate](/glossary/hash-rate) doesn't favor amateurs.

See [Mining Rig](/glossary/mining-rig) for what does work in 2026.
