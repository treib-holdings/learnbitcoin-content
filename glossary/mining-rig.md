---
title: "Mining Rig"
slug: mining-rig
draft: false
shortDefinition: "A specialized device or set of ASICs configured to perform SHA-256 hashes for Bitcoin mining."
keyTakeaways:
  - "Powered by ASIC hardware specialized for SHA-256"
  - "Requires robust cooling and stable power to operate efficiently"
  - "At scale, rigs form huge mining farms to remain competitive"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - asic-resistance
  - asicboost
  - competitive-mining
  - cpu-mining
  - gui-miner
  - miner
  - mining
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-software
  - retail-mining
liveWidget: ~
---

A mining rig is the physical hardware that does the [SHA-256d hashing](/glossary/mining-algorithm) for Bitcoin mining. In 2026, that means [ASIC](/glossary/asic-application-specific-integrated-circuit)-based machines designed specifically for this single task.

A typical modern Bitcoin ASIC miner (Bitmain S21, MicroBT M60S series, etc.) consists of:

- **The hash boards** - PCBs holding many SHA-256-optimized ASIC chips. Each board does 30-60 TH/s (terahashes/sec).
- **Control board** - manages chip work distribution, monitors temperatures, reports back to the [mining software](/glossary/mining-software).
- **Power supply** - typically 3-4 kW continuous draw for a single unit.
- **Cooling** - aggressive fans for air-cooled units, immersion liquid for hydro/immersion variants.

Modern flagship units in 2026 are around 200-300 TH/s and 14-17 joules per terahash. Compare to early ASICs (2013) at 1 TH/s and 1,000+ J/TH. The efficiency improvement curve has been astonishing.

What rigs cost:

- **Hardware:** $1,500-5,000 per unit depending on generation and efficiency.
- **Electricity:** The dominant operational cost. Profitability requires <$0.05/kWh in most market conditions.
- **Cooling, maintenance, internet, real estate:** Real but secondary.

Rigs at scale need [colocation](/glossary/mining-colocation) - dedicated facilities with industrial power, cooling, and bandwidth. Home rigs exist for hobbyists, often using mining heat for space or water heating in cold climates, but profit-driven home mining has been impractical since around 2014.

See [ASIC](/glossary/asic-application-specific-integrated-circuit) for the chips inside and [Mining](/glossary/mining) for the broader picture.
