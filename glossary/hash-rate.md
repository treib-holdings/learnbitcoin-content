---
title: "Hash Rate"
slug: hash-rate
draft: false
updated: "2026-10-09"
shortDefinition: "The collective hashing power of all miners in the network, measured in hashes per second (TH/s, PH/s, EH/s)."
keyTakeaways:
  - "Shows total proof-of-work throughput securing Bitcoin"
  - "Correlates with mining difficulty and network security"
  - "Changes reflect hardware improvements or electricity economics"
sources:
  - { label: "mempool.space API - daily network hash rate since 2009 (June to August 2026 average about 9.1 x 10^20 H/s)", url: "https://mempool.space/api/v1/mining/hashrate/all" }
  - { label: "blockchain.com - network hash rate chart", url: "https://www.blockchain.com/explorer/charts/hash-rate" }
  - { label: "Bitcoin Wiki - non-specialized hardware comparison (CPU and GPU mining speeds)", url: "https://en.bitcoin.it/wiki/Non-specialized_hardware_comparison" }
relatedTerms:
  - asic-application-specific-integrated-circuit
  - competitive-block-propagation
  - competitive-mining
  - cpu-mining
  - hash
  - hash-rate-derivative
  - hashlet
  - miner
  - mining-algorithm
  - mining-colocation
  - revenue-ths
sameAs:
  - "https://en.bitcoin.it/wiki/Hash_per_second"
liveWidget: ~
---

Hash rate is the total computational throughput being thrown at Bitcoin's [proof-of-work](/glossary/proof-work-pow) puzzle, measured in [hashes](/glossary/hash) per second. In mid-2026 (June to August), the global Bitcoin hash rate averaged about **910 EH/s** - 910 exahashes per second, or about 9 x 10^20 hashes every second.

The units climb fast:

- 1 **KH/s** = 1 thousand hashes/sec
- 1 **MH/s** = 1 million (2010-era desktop CPUs mined at roughly 1 to 20 MH/s, and 2011-era graphics cards at a few hundred)
- 1 **GH/s** = 1 billion (an early ASIC)
- 1 **TH/s** = 1 trillion (a single modern ASIC chip, more or less)
- 1 **PH/s** = 1 quadrillion (a small mining farm)
- 1 **EH/s** = 1 quintillion (a major industrial operation)

Bitcoin's hash rate grew by roughly **14 orders of magnitude** between 2009, when the whole network averaged a few million hashes per second, and mid-2026. That growth is exactly what [difficulty retargeting](/glossary/difficulty-retargeting) absorbs to keep block times near 10 minutes.

Hash rate matters because it's Bitcoin's security budget. To rewrite history, an attacker has to outpace the rest of the network. At roughly 900 EH/s, that means buying, powering, and operating more mining hardware than every other miner on Earth combined, for as long as the attack lasts. That's what proof-of-work *buys*.

The most common chart you'll see is "hash rate over time," typically going up and to the right with occasional dips during major events (China ban 2021, bear-market capitulations).
