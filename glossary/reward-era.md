---
title: "Reward Era"
slug: reward-era
draft: false
shortDefinition: "Each ~4-year period (210k blocks) between Bitcoin halvings. The block subsidy halves at the end of an era."
keyTakeaways:
  - "Spans 210k blocks (~4 years), after which the subsidy halves"
  - "Helps create Bitcoin's deflationary issuance model"
  - "Cyclical speculation and miner adjustments often align with halving events"
sources: []
relatedTerms: []
liveWidget: ~
---

A reward era (also called "epoch" by some analysts) is each ~4-year period between halvings during which the block subsidy stays at a fixed value. The full schedule is locked in by protocol math: 210,000 blocks per era, subsidy halving at each transition.

The complete schedule:

| Era | Block range | Year (approx) | Subsidy | Notes |
|---|---|---|---|---|
| 1 | 0 - 209,999 | 2009-2012 | 50 BTC | Genesis era; CPU mining era |
| 2 | 210,000 - 419,999 | 2012-2016 | 25 BTC | First halving Nov 2012; GPU and early ASIC era |
| 3 | 420,000 - 629,999 | 2016-2020 | 12.5 BTC | Industrial ASIC era; SegWit activates 2017 |
| 4 | 630,000 - 839,999 | 2020-2024 | 6.25 BTC | Taproot activates 2021; halvening April 2024 |
| **5** | **840,000 - 1,049,999** | **2024-2028** | **3.125 BTC** | **Current era** |
| 6 | 1,050,000 - 1,259,999 | 2028-2032 | 1.5625 BTC | |
| 7 | 1,260,000 - 1,469,999 | 2032-2036 | 0.78125 BTC | |
| ... | ... | ... | ... | ... |
| 33 | block ~6,930,000 | ~2140 | 0 | Subsidy rounds to zero satoshis |

Each transition is mechanically simple: at the start of the era, every node automatically applies the new subsidy. There's no vote, no announcement, no human in the loop. The protocol just enforces the halved value.

Cultural and market features around halvings:

- **Halving cycles** have historically been associated with bull-market price runs in the 12-18 months following each halving, attributed to the supply-issuance reduction. The pattern has held through 2012, 2016, 2020, and 2024 cycles but the causal model is debated.
- **Miner capitulation** events often follow halvings: marginal miners with high electricity costs become unprofitable overnight and shut down, reducing hash rate temporarily.
- **Difficulty adjustment** rebalances hash rate over the following weeks to restore the 10-minute block target.

Reward era is the structural unit Bitcoin's monetary policy plans in. The protocol's commitment isn't to a fixed annual inflation rate; it's to a known sequence of eras with halving transitions until the asymptote is reached.
