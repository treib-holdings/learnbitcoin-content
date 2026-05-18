---
title: "ASIC (Application-Specific Integrated Circuit)"
slug: asic-application-specific-integrated-circuit
draft: false
shortDefinition: "A specialized hardware chip designed to excel at a single task-Bitcoin ASICs focus on SHA-256 mining."
keyTakeaways:
  - "Purpose-built chips for Bitcoin mining"
  - "Drives industrial-scale mining operations"
  - "Raises centralization and energy usage concerns"
sources: []
relatedTerms:
  - asic-resistance
  - asicboost
  - cpu-mining
  - hash-rate
  - miner
  - mining-algorithm
  - mining-rig
  - mining-software
sameAs:
  - "https://en.wikipedia.org/wiki/Application-specific_integrated_circuit"
  - "https://www.wikidata.org/wiki/Q217302"
  - "https://en.bitcoin.it/wiki/ASIC"
  - "https://en.bitcoin.it/wiki/Mining_hardware_comparison"
liveWidget: ~
---

An ASIC - **A**pplication-**S**pecific **I**ntegrated **C**ircuit - is a chip designed to do exactly one thing extremely well. For Bitcoin, that one thing is SHA-256 [hashing](/glossary/hash). A modern Bitcoin mining ASIC chip can do roughly 100 trillion SHA-256 hashes per second, while consuming tens of watts. A general-purpose CPU running flat-out can do maybe a billion hashes per second. The ratio is ~100,000x.

The Bitcoin hardware progression went:

- **2009-2010:** CPU mining. Anyone with a laptop could find blocks.
- **2010-2011:** GPU mining. Graphics cards turned out to be roughly 50-100x faster than CPUs at hashing. Hobbyists migrated.
- **2011-2013:** FPGA mining. Reconfigurable chips offered another 5-10x improvement.
- **2013-now:** ASIC mining. The first SHA-256-specific chips launched in early 2013. Anyone still mining with non-ASIC hardware was outcompeted within months.

ASIC mining changed Bitcoin's social structure permanently. Mining went from a hobby to an industry. Operations cluster where electricity is cheapest. Hash rate concentrated in commercial-scale facilities. The "everyone can mine" era ended.

What this buys Bitcoin:

- **Massive security budget.** Modern ASICs cost thousands of dollars per unit; competitive mining requires industrial deployments. An attacker has to buy and run that hardware against the entire global mining industry to threaten consensus.
- **Hard re-purposing.** Bitcoin ASICs literally cannot be repurposed for anything else. They're useless except for mining Bitcoin (or other SHA-256 chains). That specialization means the security investment is *committed* in a way generic hardware isn't.

What it costs:

- **Centralization pressure.** ASIC supply is dominated by a few manufacturers (Bitmain, MicroBT, Canaan, others). Geographic mining concentration follows electricity prices.
- **Energy footprint.** Bitcoin's global mining draw is roughly 0.5% of world electricity. Most of it now comes from stranded or low-cost sources, but it's not nothing.

See [Mining](/glossary/mining) for the broader picture and [Mining Centralization](/glossary/mining-centralization) for the structural concerns.
