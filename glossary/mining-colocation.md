---
title: "Mining Colocation"
slug: mining-colocation
draft: false
shortDefinition: "Operating ASICs in specialized data centers or near cheap power sources for cost-effective, efficient Bitcoin mining."
keyTakeaways:
  - "Hosts mining hardware in specialized centers to optimize reliability"
  - "Seeks cheap, stable energy and strong networking environments"
  - "Can lead to centralization if a few large facilities dominate"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - block-reward
  - competitive-block-propagation
  - competitive-mining
  - corrupted-chain-state
  - counterparty-risk
  - decentralization
  - geographic-mining-distribution
  - hash-rate
  - hash-rate-derivative
  - hashlet
  - merged-mining
  - miner
  - miner-capitulation
  - miner-extractable-value-mev
  - mining
  - mining-pool
  - mining-algorithm
  - mining-centralization
  - mining-rig
  - mining-software
  - mining-subsidy
  - retail-mining
  - revenue-ths
liveWidget: ~
---

Mining colocation is the practice of running [Bitcoin mining hardware](/glossary/mining-rig) in dedicated industrial facilities, rather than at home or in office space. It's how essentially all serious Bitcoin mining happens in 2026.

What colocation facilities provide:

- **Cheap power, usually under fixed-rate contracts.** The single biggest cost determinant in mining. Facilities sited near stranded energy (West Texas wind, Quebec hydro, Iceland geothermal, flared natural gas in shale basins) offer rates of $0.03-0.06/kWh - vs $0.10-0.30/kWh for residential power.
- **Industrial cooling.** Air-cooled rooms, immersion cooling, hydro cooling, depending on facility design. Heat dissipation at 100 kW+ per square meter is non-trivial.
- **Network infrastructure.** Reliable, low-latency internet connections for pool communication. Block-propagation latency directly affects miner revenue (slow blocks are stale blocks).
- **Physical security and uptime.** 24/7 staff, redundant power, redundant cooling. Mining operations don't tolerate downtime - every hour offline is irrecoverable revenue.
- **Operational simplicity for the customer.** A miner who ships hardware to a colocation facility pays a hosting fee and doesn't worry about the rest.

The geographic distribution as of 2026:

- **United States** is the largest mining jurisdiction by share, driven by ERCOT (Texas) wind/solar, Bitmain Bitdeer's data centers, and many smaller operators.
- **Russia, Kazakhstan, and post-Soviet states** continue substantial operations on cheap fossil-fuel power.
- **Iceland, Norway, and other Nordic countries** for hydro and geothermal.
- **Latin America** is growing - Paraguay (Itaipu hydro), some Brazilian operations.
- **Africa** is emerging - solar in Ethiopia, hydro in DRC, methane flaring in Nigeria.

The concentration concern is real: a meaningful share of global hash rate is in a relatively small number of large facilities. Geopolitically, this creates pressure points (China's 2021 ban being the dramatic example). The trend is toward more geographic diversification over time, partly driven by miners deliberately seeking jurisdictional resilience after observing China.

See [Mining Centralization](/glossary/mining-centralization) for the structural concern this feeds into.
