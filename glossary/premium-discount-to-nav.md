---
title: "溢价/折价（对 NAV）"
slug: premium-discount-to-nav
draft: false
published: "2026-06-15"
shortDefinition: "ETF 市场价格与每份额净资产价值（NAV）之间的差异，以百分比表示。正值为溢价，负值为折价。"
keyTakeaways:
  - "开放式 ETF 通过申购/赎回套利将价格保持在 NAV 的几个基点以内"
  - "持续的大幅溢价或折价意味着套利机制失效或被阻断"
  - "转换前 GBTC 的 40% 溢价和后来的 50% 折价是比特币的经典案例"
sources: []
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - nav-net-asset-value
  - authorized-participant
  - creation-redemption
  - tracking-error
  - price-discovery
liveWidget: ~
---

当 ETF 在证券交易所交易时，同一份额存在两个价格：

- **市场价格。** 订单簿当前显示的价格。
- **每份额[净资产价值](/glossary/nav-net-asset-value)（NAV）。** 基金底层持仓除以份额数。

两者之间的百分比差异就是溢价（市场价格高于 NAV）或折价（市场价格低于 NAV）。

对于一个健康的开放式 ETF：

- 差距通常在几个基点以内——比大多数美股的买卖价差还小。
- [授权参与者](/glossary/authorized-participant)持续套利。如果市场价格 > NAV，AP 买入底层资产，交付给发行方，按 NAV 获得份额，然后按市场价格卖出。这个行为本身缩小了差距。折价时反向操作。
- 持续的溢价或折价意味着套利失败——要么申购/赎回被阻止，要么底层资产流动性不足，要么 AP 无法交易底层资产。

比特币案例：GBTC（Grayscale Bitcoin Trust）

在 2024 年 1 月转换为[现货 ETF](/glossary/spot-bitcoin-etf) 之前，GBTC 是一个封闭式信托，不是 ETF。关键的结构差异：封闭式基金有固定份额数，没有 AP 的[申购/赎回](/glossary/creation-redemption)。该载体没有套利机制。

GBTC 溢价/折价时间线：

- **2017-2021：大幅溢价。** 美国合格投资者可以按 NAV 认购 GBTC；六个月锁定期后，份额可以在 OTC 市场上以公众愿意支付的价格出售。由于机构对 BTC 暴露的需求且没有便捷替代方案，GBTC 经常以 20%-40% 的溢价交易。溢价本身成为一种收益策略：按 NAV 认购，等六个月，在溢价时卖出。
- **2021 年 2 月：溢价崩溃。** 随着替代载体增多（加拿大现货 ETF、2021 年 10 月的美国期货 ETF），GBTC 溢价崩溃至零。
- **2022-2023：深度折价。** Grayscale 母公司 DCG 在 Genesis 子公司（3AC 和 Celsius 之后）周围承压。Genesis 最终申请破产。赎回持续被阻止。折价扩大到 40%，然后 50%。套利者无法赎回份额换取底层 BTC，折价持续了一年多。
- **2023 年 8 月：法庭胜诉。** Grayscale 在 DC 巡回法院赢得对 SEC 拒绝现货 ETF 转换的诉讼。折价在预期批准下开始收窄。
- **2024 年 1 月 10 日：转换获批。** GBTC 成为可赎回的现货 ETF。折价收窄至接近零。

GBTC 弧线显示：

- **溢价/折价是载体质量信号。** 持续的差距意味着产品结构有问题，而非底层资产有问题。
- **封闭式 vs 开放式影响巨大。** 同一资产在封闭式信托和 ETF 中的表现截然不同。
- **赎回权是核心特性。** 没有赎回权，AP 套利就不存在，载体的价格可以任意偏离 NAV。

美国现货比特币 ETF 自上线以来：

- IBIT、FBTC、BITB、ARKB 等在 NAV 的几个基点以内交易。申购/赎回机制按设计运作。
- 大流量事件当天或当周偶尔出现更大的日内溢价或折价，但很快被压缩。
- 这种无聊的结果正是一个健康 ETF 的样子。戏剧性的 GBTC 图表是例外，不是规则。
