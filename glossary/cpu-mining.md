---
title: "CPU Mining"
slug: cpu-mining
draft: false
shortDefinition: "Mining using a computer's central processing unit, only viable in Bitcoin's earliest days before GPUs and ASICs took over."
keyTakeaways:
  - "Originally how Bitcoin was mined in 2009-2010"
  - "Quickly outclassed by GPU and ASIC hardware"
  - "Now impractical for earning significant rewards"
sources: []
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

CPU mining is mining Bitcoin using a general-purpose computer processor instead of specialized hardware. It was the only way to mine Bitcoin in 2009-2010, and it's been economically extinct on Bitcoin's mainnet for over a decade.

The historical progression:

- **2009-2010:** CPU mining. Anyone with a laptop could find blocks. [Satoshi](/glossary/satoshi-nakamoto) and [Hal Finney](/glossary/hal-finneys-running-bitcoin) mined this way.
- **Late 2010:** GPU mining started. Graphics cards turned out to be roughly 50-100× faster at hashing than CPUs. CPU miners couldn't compete.
- **2013:** [ASICs](/glossary/asic-application-specific-integrated-circuit) arrived. GPU miners became uncompetitive in months.
- **2014+:** ASIC-only era. CPU mining produces 0.000000001% of network hash rate, if that.

Why CPU mining still has a (tiny) place in culture:

- **Educational value.** Running a CPU miner against testnet or regtest is how a lot of developers first learned what hashing actually is.
- **Lottery hardware.** A handful of people have famously won mainnet blocks solo-mining on cheap hardware over the years - a USB-stick miner, a home GPU, occasionally a CPU. The probability is astronomical against, but the lottery aspect appeals to some hobbyists.
- **Some altcoins still favor CPU mining** (e.g., Monero's RandomX). The economics there are different. On Bitcoin specifically, CPU mining is purely sentimental.

If you ran a CPU at 100% on Bitcoin's mainnet for a year, your expected block discoveries would be a number with many zeros after the decimal point. You'd likely heat your office, scare your electricity provider, and never find a block. The math of [hash rate](/glossary/hash-rate) doesn't favor amateurs.

See [Mining Rig](/glossary/mining-rig) for what does work in 2026.
