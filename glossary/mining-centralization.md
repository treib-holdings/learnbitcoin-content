---
title: "Mining Centralization"
slug: mining-centralization
draft: false
updated: "2026-10-15"
shortDefinition: "A concern that much of Bitcoin's hash rate may concentrate in a few large pools, posing a 51% threat."
keyTakeaways:
  - "Large pools might exceed 50% of network hash rate if not monitored"
  - "Dangers include double-spend, censorship, or broken trust"
  - "Solutions: user vigilance, pool switching, or decentralized pool protocols"
sources:
  - { label: "mempool.space API - mining pool shares over the last year (live; on 14 October 2026: Foundry USA 28.2%, AntPool 18.1%, F2Pool 12.6%, ViaBTC 9.7% of 52,370 blocks)", url: "https://mempool.space/api/v1/mining/pools/1y" }
  - { label: "Cambridge Centre for Alternative Finance - Cambridge Digital Mining Industry Report: Global Operations, Sentiment, and Energy Use (April 2025; US 75.4% of reported activity among 49 surveyed firms, a sample the report says may overstate the US; Bitmain 82.0%, MicroBT 15.0%, Canaan 2.1% of the ASIC market)", url: "https://www.jbs.cam.ac.uk/wp-content/uploads/2025/04/2025-04-cambridge-digital-mining-industry-report.pdf" }
  - { label: "Cambridge Judge Business School - New data reveals timeline of China's bitcoin mining exodus: China's share of hash rate fell from 75.5% in September 2019 to 46% in April 2021, before the June 2021 crackdown (15 July 2021)", url: "https://www.jbs.cam.ac.uk/2021/new-data-reveals-timeline-of-chinas-bitcoin-mining-exodus/" }
  - { label: "Andreas M. Antonopoulos and David A. Harding - Mastering Bitcoin, chapter 12: a majority (51%) attack can fork the chain, double-spend the attacker's own transactions or deny service to specific transactions; a managed pool's operator could direct the pool's effort to double-spend (GitHub develop branch, accessed 2026-10-14)", url: "https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch12_mining.adoc" }
  - { label: "Stratum V2 specification - Job Declaration Protocol: coordinates custom work so pools are not unilaterally imposing work on miners; pools that opt in are only responsible for accounting shares and distributing rewards (accessed 2026-10-14)", url: "https://github.com/stratum-mining/sv2-spec/blob/main/06-Job-Declaration-Protocol.md" }
  - { label: "0xB10C - Six OFAC-sanctioned transactions missing: four transactions missing from F2Pool blocks were likely filtered; a co-founder confirmed the filtering and said it would be disabled; miners can switch to a different pool (20 November 2023, updated 23 November 2023)", url: "https://b10c.me/observations/08-missing-sanctioned-transactions/" }
relatedTerms:
  - competitive-block-propagation
  - competitive-mining
  - decentralization
  - energy-fud
  - geographic-mining-distribution
  - hidden-miner-tax
  - miner-capitulation
  - miner-extractable-value-mev
  - mining
  - mining-pool
  - mining-algorithm
  - retail-mining
liveWidget: ~
---

Mining centralization is the concern that Bitcoin's [hash rate](/glossary/hash-rate) is concentrated in too few hands, undermining the [decentralization](/glossary/decentralization) property Bitcoin depends on.

The structural reality in 2026:

- **A few [mining pools](/glossary/mining-pool) coordinate most of the hash rate.** Over the year to mid-October 2026, Foundry USA, AntPool, F2Pool and ViaBTC mined about 69% of all blocks between them.
- **A few [ASIC](/glossary/asic-application-specific-integrated-circuit) manufacturers supply most of the hardware.** Cambridge's 2025 industry survey put Bitmain at 82% of the ASIC market, MicroBT at 15% and Canaan at 2%.
- **A few jurisdictions host most of the mining.** The US is the largest: 75% of the hash rate reported by the 49 firms in Cambridge's 2025 survey, a sample Cambridge says may overstate the US. China's 2021 ban shifted geography substantially; in September 2019 Cambridge's mining map had put 75.5% of global hash rate in China.

What this means in practice:

- **A coordinated attack is theoretically possible.** Pools collectively controlling >50% of hash rate could attempt to reorg recent blocks, censor specific transactions, or double-spend their own outputs. None of this has happened at scale on Bitcoin, but the capability exists.
- **A single point of pressure exists.** Governments wanting to censor Bitcoin transactions could in principle pressure mining pool operators in their jurisdictions to comply. This has been observed in milder forms: in late 2023 F2Pool was caught leaving transactions that spent from an OFAC-sanctioned address out of its blocks, a co-founder confirmed it, and the pool said it would stop for now.

What counterbalances it:

- **Pools aren't miners.** The hash rate inside a pool comes from individual miners who can point their machines at a different pool at any time. A pool caught misbehaving hands every one of them a reason to leave.
- **Stratum V2 progress.** The new pool-miner protocol's Job Declaration lets miners build their own block templates, leaving the pool to account shares and pay out. Adoption is gradual but moving in the right direction.
- **Geographic dispersion has improved.** Compared to 2019, when about three-quarters of hash rate sat in China, the network is spread across more countries, even if the US now holds a large share of its own.
- **Mining hardware is fungible.** Miners can and do route their hash rate through different pools, in different jurisdictions, on short notice.

The honest assessment: mining centralization is a real concern with real failure modes, but the structural counterweights are also real. It's an area worth watching, worth pushing back on with Stratum V2 adoption and pool-operator scrutiny, and worth not panicking about. See [Mining rabbit hole section 8](/rabbit-hole/mining) for a longer look.

For a night when one pool operator could decide which of two chains survived, and what that says in both directions, see [The 2013 Chain Fork](/rabbit-hole/2013-chain-fork).
