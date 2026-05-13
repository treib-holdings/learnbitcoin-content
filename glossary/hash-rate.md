---
title: "Hash Rate"
slug: hash-rate
draft: false
shortDefinition: "The collective hashing power of all miners in the network, measured in hashes per second (TH/s, PH/s, EH/s)."
keyTakeaways:
  - "Shows total proof-of-work throughput securing Bitcoin"
  - "Correlates with mining difficulty and network security"
  - "Changes reflect hardware improvements or electricity economics"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - competitive-block-propagation
  - competitive-mining
  - cpu-mining
  - cuckoo-cycle
  - dyson-sphere-mining
  - hash
  - hash-fever
  - hash-rate-derivative
  - hashlet
  - hashpool
  - miner
  - mining-algorithm
  - mining-colocation
  - revenue-ths
liveWidget: ~
---

Hash rate is the total computational throughput being thrown at Bitcoin's [proof-of-work](/glossary/proof-work-pow) puzzle, measured in [hashes](/glossary/hash) per second. As of mid-2026, the global Bitcoin hash rate is around **700 EH/s** - 700 exahashes per second, or 7 × 10^20 hashes every second.

The units climb fast:

- 1 **KH/s** = 1 thousand hashes/sec (a 2010-era CPU)
- 1 **MH/s** = 1 million (a 2011-era GPU)
- 1 **GH/s** = 1 billion (an early ASIC)
- 1 **TH/s** = 1 trillion (a single modern ASIC chip, more or less)
- 1 **PH/s** = 1 quadrillion (a small mining farm)
- 1 **EH/s** = 1 quintillion (a major industrial operation)

Bitcoin's hash rate has grown by roughly **13 orders of magnitude** since the genesis block, when one person on a laptop CPU represented the entire network. That growth is exactly what [difficulty retargeting](/glossary/difficulty-retargeting) absorbs to keep block times near 10 minutes.

Hash rate matters because it's Bitcoin's security budget. To rewrite history, an attacker has to outpace the global hash rate - which means buying, powering, and operating mining hardware on a scale comparable to the entire global mining industry. At 700 EH/s, the cost of doing that for even a brief reorg is in the billions of dollars per day. That's what proof-of-work *buys*.

The most common chart you'll see is "hash rate over time," typically going up and to the right with occasional dips during major events (China ban 2021, bear-market capitulations). The trend is the trend.
