---
title: "Revenue per TH/s"
slug: revenue-ths
draft: false
shortDefinition: "A metric showing how much BTC/USD a miner earns for each terahash per second of hashing power, indicating profitability."
keyTakeaways:
  - "Crucial for evaluating mining returns relative to hardware capacity"
  - "Fluctuates with BTC price, difficulty adjustments, and network hash rate"
  - "Used by miners for ROI calculations on hardware/electricity"
sources: []
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

Revenue per TH/s (also called "hashprice") is the daily revenue a miner earns per terahash per second of hash rate. It's the headline economic indicator for Bitcoin mining: a single number that tells you whether mining is currently profitable for typical hardware and electricity costs.

The formula:

```
revenue per TH/s per day = (subsidy + fees per block) * blocks per day / network hash rate in TH/s
```

As of 2026 the math roughly works out to:

- Subsidy + fees: ~3.125 BTC + ~0.3 BTC = ~3.4 BTC per block
- Blocks per day: ~144
- Network hash rate: ~700 EH/s = 700,000,000 TH/s

So daily revenue per TH/s is roughly 3.4 * 144 / 700,000,000 = ~7 * 10^-7 BTC per TH/s per day, or about $0.04-0.06 per TH/s per day at recent BTC prices.

What miners actually look at:

- **Hashprice trend.** Tracked daily on Hashrate Index, Luxor, Compass Mining and similar dashboards.
- **Break-even electricity cost.** A modern S21 ASIC at ~15 J/TH consuming ~24 hours of electricity at $0.05/kWh costs ~$0.029/day to run. At $0.05 hashprice that's a positive margin; at $0.03 hashprice it's losing money.
- **Halving impact.** Each halving cuts the subsidy in half, immediately halving hashprice unless fees rise to compensate. The post-April-2024 halving compressed margins significantly; post-2028 will compress them further.
- **Fee-share trend.** As subsidy declines, fees become a larger proportion of revenue. Hashprice in the 2030s will increasingly depend on fee-market conditions rather than the predictable subsidy schedule.

The metric is most useful for break-even analysis and timing hardware upgrades. A modern efficient ASIC stays profitable at lower hashprice than an older inefficient one; the ratio between current hashprice and a given ASIC's break-even hashprice tells you whether to keep mining or power down.
