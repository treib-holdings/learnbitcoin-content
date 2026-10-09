---
title: "Reward Era"
slug: reward-era
draft: false
updated: "2026-10-09"
shortDefinition: "Each ~4-year period (210k blocks) between Bitcoin halvings. The block subsidy halves at the end of an era."
keyTakeaways:
  - "Spans 210k blocks (~4 years), after which the subsidy halves"
  - "Helps create Bitcoin's disinflationary issuance model"
  - "Each halving forces miners to adjust to a subsidy cut in half"
sources:
  - { label: "Bitcoin Core GetBlockSubsidy (permalink, Oct 2026) - halves the subsidy every 210,000 blocks, counted in whole satoshis", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L1833-L1844" }
  - { label: "Coin Metrics - BTC daily reference price (new all-time highs after each halving, 2012-2024)", url: "https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?assets=btc&metrics=PriceUSD&frequency=1d&start_time=2010-07-18&end_time=2026-10-08&page_size=10000" }
  - { label: "Halvings rabbit hole - prices and the ETF and Fed events around each halving", url: "https://www.learnbitcoin.com/rabbit-hole/halvings" }
  - { label: "Bitcoin Wiki - History (first GPU-mined block July 18, 2010; first public OpenCL miner October 1, 2010)", url: "https://en.bitcoin.it/wiki/History" }
relatedTerms:
  - block-reward
  - block-subsidy
  - coinbase-transaction
  - halving-halvening
  - mining-subsidy
liveWidget: ~
---

A reward era (also called "epoch" by some analysts) is each ~4-year period between halvings during which the block subsidy stays at a fixed value. The full schedule is locked in by protocol math: 210,000 blocks per era, subsidy halving at each transition.

The complete schedule:

| Era | Block range | Year (approx) | Subsidy | Notes |
|---|---|---|---|---|
| 1 | 0 - 209,999 | 2009-2012 | 50 BTC | Genesis era; CPU mining at first, GPU miners from 2010 |
| 2 | 210,000 - 419,999 | 2012-2016 | 25 BTC | First halving Nov 2012; GPU and early ASIC era |
| 3 | 420,000 - 629,999 | 2016-2020 | 12.5 BTC | Industrial ASIC era; SegWit activates 2017 |
| 4 | 630,000 - 839,999 | 2020-2024 | 6.25 BTC | Taproot activates 2021; halvening April 2024 |
| **5** | **840,000 - 1,049,999** | **2024-2028** | **3.125 BTC** | **In force as of October 2026** |
| 6 | 1,050,000 - 1,259,999 | 2028-2032 | 1.5625 BTC | |
| 7 | 1,260,000 - 1,469,999 | 2032-2036 | 0.78125 BTC | |
| ... | ... | ... | ... | ... |
| 33 | 6,720,000 - 6,929,999 | ~2136-2140 | 1 satoshi | Last era with any subsidy |
| 34 | 6,930,000 onward | ~2140 onward | 0 | Subsidy rounds down to zero satoshis |

Each transition is mechanically simple: at the start of the era, every node automatically applies the new subsidy. There's no vote, no announcement, no human in the loop. The protocol just enforces the halved value.

Cultural and market features around halvings:

- **Halving cycles** are a popular price story. Each of the four halvings from 2012 to 2024 was followed by a new all-time high, but other big events landed in the same windows, and four cases are too few to show that the halving caused the rise. See the [Halvings rabbit hole](/rabbit-hole/halvings) for the numbers.
- **Miner capitulation** events often follow halvings: marginal miners with high electricity costs become unprofitable overnight and shut down, reducing hash rate temporarily.
- **Difficulty adjustment** rebalances hash rate over the following weeks to restore the 10-minute block target.

Reward era is the structural unit Bitcoin's monetary policy plans in. The protocol's commitment isn't to a fixed annual inflation rate; it's to a known sequence of eras with halving transitions until the asymptote is reached.
