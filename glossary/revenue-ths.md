---
title: "Revenue per TH/s"
slug: revenue-ths
draft: false
updated: "2026-10-09"
shortDefinition: "A metric showing how much BTC/USD a miner earns for each terahash per second of hashing power, indicating profitability."
keyTakeaways:
  - "Crucial for evaluating mining returns relative to hardware capacity"
  - "Fluctuates with BTC price, difficulty adjustments, and network hash rate"
  - "Used by miners for ROI calculations on hardware/electricity"
sources:
  - { label: "mempool.space API - daily network hash rate since 2009 (June to August 2026 average about 9.1 x 10^20 H/s)", url: "https://mempool.space/api/v1/mining/hashrate/all" }
  - { label: "Coin Metrics - BTC daily price, fees and block count (June to August 2026 averages: about $65,000, 0.02 BTC in fees per block)", url: "https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?assets=btc&metrics=PriceUSD,FeeTotNtv,BlkCnt&frequency=1d&start_time=2026-06-01&end_time=2026-08-31&page_size=100" }
  - { label: "Hashrate Index - Antminer S21 Pro specs (234 TH/s, 3,510 W, 15 J/TH, released March 2024)", url: "https://hashrateindex.com/rigs/bitmain-antminer-s21-pro" }
relatedTerms:
  - difficulty
  - halving-halvening
  - hash-rate
  - hash-rate-derivative
  - hashlet
  - miner
  - miner-capitulation
  - mining
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-subsidy
  - pooled-mining
  - retail-mining
liveWidget: ~
---

Revenue per TH/s (also called "hashprice") is the daily revenue a miner earns per terahash per second of hash rate. It's the headline economic indicator for Bitcoin mining: a single number that tells you whether mining is profitable at a given time for typical hardware and electricity costs.

The formula:

```
revenue per TH/s per day = (subsidy + fees per block) * blocks per day / network hash rate in TH/s
```

Using June to August 2026 averages, the math works out to:

- Subsidy + fees: ~3.125 BTC + ~0.02 BTC = ~3.15 BTC per block
- Blocks per day: ~144
- Network hash rate: ~910 EH/s = 910,000,000 TH/s

So daily revenue per TH/s was roughly 3.15 * 144 / 910,000,000 = ~5 * 10^-7 BTC per TH/s per day. At the average BTC price over those three months, about $65,000, that came to about $0.03 per TH/s per day.

What miners actually look at:

- **Hashprice trend.** Tracked daily on Hashrate Index, Luxor, Compass Mining and similar dashboards.
- **Break-even electricity cost.** An Antminer S21 Pro (released 2024) uses about 15 J/TH, so each TH/s draws 15 watts, or 0.36 kWh a day. At $0.05/kWh that costs about $0.018 per TH/s per day, so at any hashprice below that, the machine loses money on electricity alone.
- **Halving impact.** Each halving cuts the subsidy in half, immediately halving hashprice unless fees rise to compensate. The post-April-2024 halving compressed margins significantly; post-2028 will compress them further.
- **Fee-share trend.** As subsidy declines, fees become a larger proportion of revenue. Hashprice in the 2030s will increasingly depend on fee-market conditions rather than the predictable subsidy schedule.

The metric is most useful for break-even analysis and timing hardware upgrades. A modern efficient ASIC stays profitable at lower hashprice than an older inefficient one; the ratio between current hashprice and a given ASIC's break-even hashprice tells you whether to keep mining or power down.
