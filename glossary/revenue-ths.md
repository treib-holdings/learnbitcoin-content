---
title: "每 TH/s 收入（Revenue per TH/s）"
slug: revenue-ths
draft: false
shortDefinition: "一个指标，显示矿工每 terahash/s 算力赚取多少 BTC/USD，用于评估盈利能力。"
keyTakeaways:
  - "评估挖矿回报相对于硬件能力的关键指标"
  - "随 BTC 价格、难度调整和网络算力波动"
  - "矿工用于硬件/电力投资回报计算"
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

每 TH/s 收入（也叫"hashprice"）是矿工每 terahash/s 算力每天赚取的收入。它是比特币挖矿的头号经济指标：一个数字告诉你当前对典型硬件和电价来说挖矿是否盈利。

公式：

```
每 TH/s 每日收入 = (每区块补贴 + 手续费) * 每日区块数 / 网络算力(TH/s)
```

2026 年的数学大致如下：

- 补贴 + 手续费：约 3.125 BTC + 约 0.3 BTC = 约 3.4 BTC 每区块
- 每日区块数：约 144
- 网络算力：约 700 EH/s = 700,000,000 TH/s

因此每 TH/s 每日收入约为 3.4 * 144 / 700,000,000 = 约 7 * 10^-7 BTC 每 TH/s 每天，按近期 BTC 价格约合 $0.04-0.06 每 TH/s 每天。

矿工实际关注的：

- **Hashprice 趋势。** 每日在 Hashrate Index、Luxor、Compass Mining 等仪表盘上追踪。
- **盈亏平衡电价。** 一台现代 S21 ASIC 约 15 J/TH，在 $0.05/kWh 电价下运行 24 小时电费约 $0.029/天。$0.05 hashprice 时有正利润；$0.03 hashprice 时亏钱。
- **减半影响。** 每次减半将补贴减半，除非手续费补偿否则立即将 hashprice 减半。2024 年 4 月减半后大幅压缩了利润率；2028 年后将进一步压缩。
- **手续费占比趋势。** 随着补贴减少，手续费在收入中占比越来越大。2030 年代的 hashprice 将越来越多地取决于手续费市场状况而非可预测的补贴计划。

这个指标最适合用于盈亏平衡分析和硬件升级时机判断。现代高效 ASIC 在更低 hashprice 下仍能盈利，而旧的低效 ASIC 不能；当前 hashprice 与给定 ASIC 盈亏平衡 hashprice 之比告诉你是否应该继续挖矿还是关机。
