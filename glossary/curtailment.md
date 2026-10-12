---
title: "Curtailment"
slug: curtailment
linkText:
  - "curtailment"
draft: false
published: "2026-06-17"
updated: "2026-10-12"
shortDefinition: "Deliberately reducing or stopping electricity use (or generation) to balance a grid. Bitcoin mining is a curtailable load that can vanish in seconds when the grid needs power elsewhere."
keyTakeaways:
  - "Curtailment is intentionally cutting load or generation to keep supply and demand matched"
  - "Renewable grids curtail (waste) surplus power when generation outruns demand - exactly the energy mining can absorb"
  - "A miner curtailing during peak demand is the same flexibility in reverse: load that disappears on command"
sources:
  - { label: "NERC Large Loads Task Force - Characteristics and Risks of Emerging Large Loads, white paper (July 2025; cryptocurrency mining and AI facilities can cycle their consumption on and off in less than a minute; one North American mining facility ramped down 298 MW within 25 seconds on instruction; such loads are not controllable by the grid operator unless they volunteer for a curtailment or demand-response program)", url: "https://www.nerc.com/globalassets/who-we-are/standing-committees/rstc/3_doc_white-paper-characteristics-and-risks-of-emerging-large-loads.pdf" }
  - { label: "Riot Platforms - August 2023 production and operations update, SEC Form 8-K exhibit 99.1 (September 6, 2023; power use curtailed by more than 95% during peak demand, forgoing bitcoin mining revenue)", url: "https://www.sec.gov/Archives/edgar/data/1167419/000155837023015517/riot-20230906xex99d1.htm" }
  - { label: "ERCOT - news release: ERCOT Creates Voluntary Curtailment Program for Large Flexible Customers During Peak Demand (December 6, 2022; names bitcoin mining facilities among large flexible customers that can reduce their energy use quickly)", url: "https://www.ercot.com/news/release/2022-12-06-ercot-creates-voluntary" }
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

A [miner](/glossary/mining) is a buyer of last resort for curtailed generation - it will run on the surplus electrons a wind farm would otherwise waste, because those are the cheapest electrons available. And it is a first candidate for load curtailment - a mining facility can shed hundreds of megawatts in seconds when the grid needs that capacity back (NERC's 2025 review of large loads recorded one dropping 298 megawatts in 25 seconds), and what it gives up is mining revenue for the duration, not work in progress. The grid can only count on that from miners that have enrolled in a curtailment or demand-response program, which is what ERCOT's Texas programs are for.

That two-sided flexibility is why mining keeps appearing in grid-balancing arguments. The same property - indifference to *when* the power flows - lets a miner soak up power nobody wants and give back power everybody suddenly needs.

See the [Bitcoin and Energy rabbit hole](/rabbit-hole/energy) for how this plays out on real grids, and the honest limits of the argument.
