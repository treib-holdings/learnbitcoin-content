---
title: "Inflation"
slug: inflation
draft: false
updated: "2026-10-09"
shortDefinition: "The rate at which new BTC enters circulation, diminishing over time due to halving events."
keyTakeaways:
  - "Starts high at launch (50 BTC/block) and shrinks at each halving"
  - "Ensures a max cap of ~21 million BTC by ~2140"
  - "Shapes Bitcoin's scarcity narrative versus fiat inflation"
sources:
  - { label: "Bitcoin Core source - GetBlockSubsidy, the halving schedule every node enforces (src/validation.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "mempool.space - block 969,999 (5 October 2026); 20,093,750 BTC issued by the schedule through this block", url: "https://mempool.space/block/000000000000000000001d95e5f7284cb199b8620eb6a7938dd9696f85751bb3" }
  - { label: "ChainQuery - circulating supply and annual inflation rate (live; 0.8173% on 9 October 2026, cross-checked against the GetBlockSubsidy schedule)", url: "https://chainquery.com/api/edu/supply" }
  - { label: "World Gold Council - How much gold has been mined? (222,600 t, end-Q2 2026)", url: "https://www.gold.org/goldhub/data/how-much-gold" }
  - { label: "World Gold Council - Gold Demand Trends Full Year 2025, supply (mine production 3,672 t)", url: "https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-full-year-2025/supply" }
  - { label: "USGS Mineral Commodity Summaries 2026 - Gold (world mine production 2025: 3,300 t)", url: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gold.pdf" }
relatedTerms:
  - asymptote
  - bip-42
  - block-reward
  - block-subsidy
  - disinflation
  - halving-halvening
  - inflation-bug
  - mining-subsidy
liveWidget: ~
---

"Inflation" can mean two different things, and they're worth keeping straight.

In economics broadly, inflation usually means the general rise in prices over time - what costs $1 today costs $1.03 next year. This is measured by indexes like CPI and driven by many factors, but in a fiat system the dominant long-term cause is expansion of the money supply.

In Bitcoin specifically, "inflation" refers to the rate at which *new BTC* enters the circulating supply each year. It's purely a function of the block subsidy schedule and the average block rate. From the April 2024 halving to the next one, around April 2028, Bitcoin's annual issuance is about 164,250 BTC. Against the 20,093,750 BTC issued through block 969,999 (October 5, 2026), that is about 0.82% a year, roughly half the 1.5-1.7% that gold's above-ground stock grew in 2025.

Each halving cuts the issuance rate in half. After the 2028 halving, Bitcoin's inflation rate drops to ~0.4%. After the 33rd halving around 2140, it reaches zero and stays there forever.

The contrast with fiat is the whole point. Bitcoin's monetary inflation is mathematically locked, publicly verifiable, and trending toward zero. Fiat monetary inflation is set by committees behind closed doors, with no upper bound. See the [Supply Schedule rabbit hole](/rabbit-hole/supply) for the math, and [Disinflation](/glossary/disinflation) for what "decreasing inflation rate" means.
