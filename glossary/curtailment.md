---
title: "Curtailment"
slug: curtailment
draft: true
published: "2026-06-17"
shortDefinition: "Deliberately reducing or stopping electricity use (or generation) to balance a grid. Bitcoin mining is a curtailable load that can vanish in seconds when the grid needs power elsewhere."
keyTakeaways:
  - "Curtailment is intentionally cutting load or generation to keep supply and demand matched"
  - "Renewable grids curtail (waste) surplus power when generation outruns demand - exactly the energy mining can absorb"
  - "A miner curtailing during peak demand is the same flexibility in reverse: load that disappears on command"
sources: []
relatedTerms:
  - demand-response
  - stranded-energy
  - energy-fud
  - mining
  - proof-work-pow
liveWidget: ~
---

Curtailment is the deliberate reduction of electricity use or generation to keep a grid balanced. Supply and demand on an electrical grid must match instant to instant; when they do not, something gets curtailed.

It cuts both directions, and Bitcoin mining touches both:

- **Generation curtailment.** When a wind or solar farm produces more power than the grid can use or transmit, the surplus is curtailed - the turbines are feathered, the panels clipped, and the energy is simply wasted. This happens constantly on renewable-heavy grids with limited transmission or storage. It is the canonical example of [stranded energy](/glossary/stranded-energy): electricity with no buyer.
- **Load curtailment.** A flexible consumer reduces its draw on command so the grid can serve higher-priority demand. This is the [demand-response](/glossary/demand-response) side.

## Why mining fits both ends

A [miner](/glossary/mining) is a buyer of last resort for curtailed generation - it will run on the surplus electrons a wind farm would otherwise waste, because those are the cheapest electrons available. And it is a first candidate for load curtailment - it can shut down in seconds when the grid needs that capacity back, because unlike a factory it loses only forgone mining revenue, not work in progress.

That two-sided flexibility is why mining keeps appearing in grid-balancing arguments. The same property - indifference to *when* the power flows - lets a miner soak up power nobody wants and give back power everybody suddenly needs.

See the [Bitcoin and Energy rabbit hole](/rabbit-hole/energy) for how this plays out on real grids, and the honest limits of the argument.
