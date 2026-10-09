---
title: "Disinflation"
slug: disinflation
draft: false
updated: "2026-10-09"
shortDefinition: "A reduction in the rate of inflation. Bitcoin's issuance rate slows with each halving, exemplifying disinflationary behavior."
keyTakeaways:
  - "Describes a falling inflation rate over time"
  - "Bitcoins minted per block halve roughly every four years"
  - "Positions BTC as more scarce than traditional fiat"
sources:
  - { label: "Bitcoin Core source - GetBlockSubsidy, the halving schedule every node enforces (src/validation.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "mempool.space - block 969,999 (5 October 2026); 20,093,750 BTC issued by the schedule through this block", url: "https://mempool.space/block/000000000000000000001d95e5f7284cb199b8620eb6a7938dd9696f85751bb3" }
  - { label: "ChainQuery - circulating supply and annual inflation rate (live; 0.8173% on 9 October 2026, cross-checked against the GetBlockSubsidy schedule)", url: "https://chainquery.com/api/edu/supply" }
  - { label: "Federal Reserve - why the Fed aims for 2 percent inflation over the longer run", url: "https://www.federalreserve.gov/faqs/economy_14400.htm" }
relatedTerms:
  - asymptote
  - block-reward
  - block-subsidy
  - fungibility
  - halving-halvening
  - inflation
  - inflation-bug
  - mining-subsidy
liveWidget: ~
---

Disinflation means inflation is happening *less* over time. Prices or money supply are still going up, but the rate of increase is slowing.

Bitcoin is the cleanest example of programmed disinflation in monetary history. New BTC are minted with every block, so the circulating supply grows continuously - but every 210,000 blocks (about every 4 years), per-block issuance is cut in half. That makes the inflation rate fall in discrete steps:

- **2009-2012:** 50 BTC/block subsidy
- **2012-2016:** 25 BTC/block (post 1st halving)
- **2016-2020:** 12.5 BTC/block
- **2020-2024:** 6.25 BTC/block
- **2024-2028:** 3.125 BTC/block (about 0.83% annual inflation at the start of the era, 0.82% as of October 2026)
- **2028-2032:** 1.5625 BTC/block (~0.4% inflation)

This continues every 210,000 blocks until the subsidy rounds to zero around 2140. From that point forward, Bitcoin has zero monetary inflation - all miner revenue comes from transaction fees.

Disinflation is the opposite of how fiat systems usually run. Central banks typically *target* a positive inflation rate (the Federal Reserve aims for 2% over the longer run). Bitcoin has no target. Its issuance falls at each halving and reaches exactly zero at block 6,930,000, around 2140.

See [Halving](/glossary/halving-halvening) for the mechanism, and the [Supply Schedule rabbit hole](/rabbit-hole/supply) for the long version.
