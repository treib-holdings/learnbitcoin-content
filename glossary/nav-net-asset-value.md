---
title: "NAV（净资产价值）"
slug: nav-net-asset-value
draft: false
published: "2026-06-15"
shortDefinition: "ETF 每股底层资产价值，计算为（总资产减负债）除以流通股数。创建/赎回套利使市场价格锚定的基准。"
keyTakeaways:
  - "每个交易日按参考价格在收盘时计算"
  - "对于现货比特币 ETF：BTC 持有量按日参考汇率定价，除以股数"
  - "市场价格日内偏离 NAV；套利通常在基点内拉回"
sources: []
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - authorized-participant
  - creation-redemption
  - premium-discount-to-nav
  - tracking-error
  - cme-cf-bitcoin-reference-rate
liveWidget: ~
---

净资产价值是 ETF 底层资产的每股价值。对于现货比特币 ETF，NAV 每日计算：

```
每股 NAV = (BTC 持有量 x 参考汇率 - 负债) / 流通股数
```

机制：

- **定价时间。** 美国现货比特币 ETF 每天伦敦时间下午 4:00 使用 [CME CF 比特币参考汇率](/glossary/cme-cf-bitcoin-reference-rate)（BRR）定价 NAV。选择伦敦下午 4 点而非纽约收盘与既定的机构基准一致，并与伦敦和美国交易时间重叠。
- **负债**包括应计管理费、托管费和任何其他运营成本——对于被动比特币产品通常很小。
- **股数**通过[授权参与者](/glossary/authorized-participant)的[创建和赎回](/glossary/creation-redemption)每日变化。

ETF 披露中出现的两个相关数字：

- **每股 NAV（日终）。** 盘后发布的官方数字。用于业绩报告、会计和费用计算。
- **iNAV（指示性 NAV）。** NAV 的持续更新估计，在交易时间内大约每 15 秒计算和发布一次。iNAV 是交易者实时发现溢价/折价机会所关注的。
