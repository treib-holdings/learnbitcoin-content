---
title: "Mining Centralization"
slug: mining-centralization
draft: false
shortDefinition: "A concern that much of Bitcoin's hash rate may concentrate in a few large pools, posing a 51% threat."
keyTakeaways:
  - "Large pools might exceed 50% of network hash rate if not monitored"
  - "Dangers include double-spend, censorship, or broken trust"
  - "Solutions: user vigilance, pool switching, or decentralized pool protocols"
sources: []
relatedTerms:
  - competitive-block-propagation
  - competitive-mining
  - decentralization
  - dyson-sphere-mining
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

- **A few [mining pools](/glossary/mining-pool) coordinate most of the hash rate.** Foundry USA, AntPool, ViaBTC, F2Pool, and a few others collectively command well over half of global hash.
- **A few [ASIC](/glossary/asic-application-specific-integrated-circuit) manufacturers supply most of the hardware.** Bitmain, MicroBT, Canaan, and a small number of others.
- **A few jurisdictions host most of the mining.** The US is the largest, followed by various others depending on the year. China's 2021 ban shifted geography substantially.

What this means in practice:

- **A coordinated attack is theoretically possible.** Pools collectively controlling >50% of hash rate could attempt to reorg recent blocks, censor specific transactions, or double-spend their own outputs. None of this has happened at scale on Bitcoin, but the capability exists.
- **A single point of pressure exists.** Governments wanting to censor Bitcoin transactions could in principle pressure mining pool operators in their jurisdictions to comply. This has been observed in milder forms (some pools have voluntarily filtered OFAC-sanctioned addresses).

What counterbalances it:

- **Pools aren't miners.** The hash rate inside a pool comes from individual miners who can switch pools within hours. A misbehaving pool tends to bleed hash rate fast.
- **Stratum V2 progress.** The new pool-miner protocol shifts transaction selection from pool operators to individual miners. Adoption is gradual but moving in the right direction.
- **Geographic dispersion has improved.** Compared to 2018-2020 when ~65% of hash was in China, the network is now spread across many more countries.
- **Mining hardware is fungible.** Miners can and do route their hash rate through different pools, in different jurisdictions, on short notice.

The honest assessment: mining centralization is a real concern with real failure modes, but the structural counterweights are also real. It's an area worth watching, worth pushing back on with Stratum V2 adoption and pool-operator scrutiny, and worth not panicking about. See [Mining rabbit hole §8](/rabbit-hole/mining) for a longer look.
