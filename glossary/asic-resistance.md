---
title: "ASIC Resistance"
slug: asic-resistance
draft: false
shortDefinition: "The concept of designing proof-of-work algorithms that are harder or less worthwhile to optimize with ASICs, not a priority in Bitcoin."
keyTakeaways:
  - "Attempts to prevent specialized mining hardware"
  - "Often relies on frequently changing or complex algorithms"
  - "Not a design goal for Bitcoin's SHA-256 PoW"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - asicboost
  - cpu-mining
  - mining-algorithm
  - mining-centralization
liveWidget: ~
---

"ASIC resistance" is the (mostly failed) effort by some cryptocurrencies to design proof-of-work algorithms that don't benefit from specialized hardware. The idea is that if everyone mines with general-purpose CPUs or GPUs, mining stays decentralized among hobbyists rather than concentrated in industrial farms.

The history of ASIC resistance is essentially "every attempt eventually gets ASICs anyway":

- **Scrypt** (Litecoin, 2011). Designed to require more memory than CPUs/GPUs could spare. ASICs arrived in 2014.
- **Ethash** (Ethereum, 2015). Memory-hard, with growing DAG. ASICs arrived by 2018.
- **RandomX** (Monero, 2019). Heavy use of random code execution to discourage hardware optimization. Holding up better than predecessors, but pressure exists.
- **ProgPoW** (proposed but never deployed). Would have changed the algorithm regularly to disrupt ASIC manufacturers' multi-year amortization.

**Bitcoin explicitly doesn't pursue ASIC resistance.** The reasoning:

- **ASIC resistance is temporary at best.** Any sufficiently profitable algorithm attracts specialized hardware eventually. The result is just a churn of mining hardware obsolescence.
- **Specialization is actually a security feature.** Bitcoin ASICs are useless except for SHA-256 mining. That means the global mining industry has *sunk* billions into hardware that can only be used to secure Bitcoin. Repurposing that hardware to attack the network would destroy its own value. This is a strong commitment device.
- **Stable algorithms enable stable mining infrastructure.** Predictable hardware lifecycles let miners build long-term operations.

Bitcoin's bet: better to accept specialization, build a deep ASIC ecosystem, and rely on competition between manufacturers and miners to maintain healthy decentralization. The bet has worked imperfectly - manufacturer concentration is real - but the alternative of perpetual algorithm churn has worse failure modes.

See [ASIC](/glossary/asic-application-specific-integrated-circuit) for the hardware itself and [Mining Centralization](/glossary/mining-centralization) for the real concerns about industry concentration.
