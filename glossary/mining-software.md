---
title: "Mining Software"
slug: mining-software
draft: false
shortDefinition: "Programs like CGMiner or BFGMiner that connect ASICs to the Bitcoin network or a mining pool."
keyTakeaways:
  - "Interfaces between mining hardware and pools or solo mining setup"
  - "Enables real-time monitoring (hash rate, shares, temperatures)"
  - "Often includes features for failover, overclocking, and advanced config"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - competitive-mining
  - cpu-mining
  - gui-miner
  - merged-mining
  - miner
  - mining
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-rig
  - retail-mining
sameAs:
  - "https://en.bitcoin.it/wiki/Mining_software"
liveWidget: ~
---

Mining software is the layer that sits between a [Bitcoin node](/glossary/node) (or [mining pool](/glossary/mining-pool)) and the [ASIC](/glossary/asic-application-specific-integrated-circuit) hardware doing the actual hashing. It receives work, distributes it to chips, collects valid shares, and reports back results.

The common pieces:

- **Stratum protocol** - the dominant pool-to-miner protocol. Stratum V1 has been the standard since around 2012; **Stratum V2** is the modern successor that gives individual miners more control over transaction selection (rather than ceding it to the pool).
- **CGMiner / BFGMiner** - classic open-source mining clients, dating back to the GPU era and updated for ASIC hardware. Still common in solo or small-scale setups.
- **Vendor firmware** - Bitmain's S19/S21 series, MicroBT's WhatsMiner line, and others ship with built-in firmware that handles pool connections, share submission, and chip-level optimization.
- **Custom firmware** like **Braiins OS** and **Vnish** - third-party firmware for popular ASICs that enables better performance tuning, autotuning per chip, and direct miner-controlled transaction selection via Stratum V2.

For solo operators, mining software handles pool failover, temperature monitoring, hash-rate reporting, and basic operational dashboards. For industrial operations, the stack is usually integrated into broader fleet-management platforms.

The Stratum V2 transition is the most interesting current development. Under V1, the pool decides which transactions go into the blocks miners hash on. Under V2, individual miners can specify their own transaction selection while still letting the pool aggregate hash rate for variance smoothing. That's a meaningful redistribution of power back toward individual miners - and a real, if gradual, structural fix to the [mining centralization](/glossary/mining-centralization) concern.
