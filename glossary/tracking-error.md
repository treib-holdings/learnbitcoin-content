---
title: "跟踪误差"
slug: tracking-error
draft: false
published: "2026-06-15"
shortDefinition: "衡量 ETF 收益跟随其所追踪资产收益的紧密程度。越低越好，对现货比特币 ETF 来说年差距大约是费率加几个基点。"
keyTakeaways:
  - "由费率、交易成本、现金拖累和创建/赎回摩擦驱动"
  - "跟踪差异是累计回报差距；跟踪误差是其统计波动性"
  - "现货比特币 ETF 跟踪紧密，因为创建/赎回套利有利可图且授权参与方活跃"
sources: []
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - nav-net-asset-value
  - authorized-participant
  - creation-redemption
  - premium-discount-to-nav
  - cme-cf-bitcoin-reference-rate
liveWidget: ~
---

跟踪误差衡量 ETF 复现其所声称追踪资产收益的忠实程度。对现货比特币 ETF 来说，目标是 BTC 价格本身（通常是 [CME CF 比特币参考利率](/glossary/cme-cf-bitcoin-reference-rate)）。对标普 500 ETF 来说，目标是标普 500 指数。ETF 日收益与目标日收益越接近，跟踪误差越低。

两个常被混用但实际不同的概念：

- **跟踪差异。** 累计回报差距。如果 BTC 一年回报 50%，ETF 回报 49.75%，跟踪差异是 -0.25%。这是对买入持有投资者最重要的数字。
- **跟踪误差。** ETF 与目标日收益差异的标准差。衡量跟踪的颠簸程度，而不仅仅是偏离多少。对交易者和套利者重要。

现货比特币 ETF 跟踪差距的来源：

**1. 费率。** 发行方的年费，从基金持有的 BTC 中每日计提。当前美国现货比特币 ETF 费率：

| 产品 | 代码 | 费率 |
|---|---|---|
| Grayscale Bitcoin Mini Trust | BTC | 0.15% |
| Franklin Bitcoin ETF | EZBC | 0.19% |
| Bitwise Bitcoin ETF | BITB | 0.20% |
| Ark 21Shares Bitcoin ETF | ARKB | 0.21% |
| BlackRock iShares Bitcoin Trust | IBIT | 0.25% |
| Fidelity Wise Origin Bitcoin Fund | FBTC | 0.25% |
| VanEck Bitcoin Trust | HODL | 0.25% |
| Valkyrie Bitcoin Fund (CoinShares) | BRRR | 0.25% |
| Invesco Galaxy Bitcoin ETF | BTCO | 0.25% |
| Hashdex Bitcoin ETF | DEFI | 0.25% |
| WisdomTree Bitcoin Fund | BTCW | 0.50% |
| Grayscale Bitcoin Trust | GBTC | 1.50% |

Grayscale Bitcoin Mini Trust（BTC）于 2024 年中推出，作为 GBTC 的低价姊妹产品，用 GBTC 部分 BTC 播种，定价与新进入者竞争。0.15% 是美国市场最低费率的现货比特币 ETF。（大多数发行方在上市后前六到十二个月运行了 0% 费率豁免；表中反映的是豁免后的固定费率。）

**2. 现金拖累。** 尚未部署的 BTC 不产生任何收益。当基金收到来自[创建](/glossary/creation-redemption)的现金但尚未执行 BTC 交易时，这些美元闲置但仍计入 NAV。在 BTC 强势上涨时，现金拖累是真实的（小幅）逆风。

**3. 交易成本。** 当发行方执行现货 BTC 交易来部署创建现金或为赎回变现时，价差和滑点流入基金。实物创建/赎回完全消除这一项。

**4. 托管费。** 通常包含在费率中。对 Coinbase Custody（为 11 只美国现货 ETF 中的 8 只托管 BTC），费用只是费率的一小部分。

**5. 日中标记 vs 定价。** NAV 在伦敦时间下午 4 点定价；市场价格全天交易。日内收益不会完美匹配，因为定价时刻不同。这表现为跟踪误差波动性，而非持续的跟踪差异偏差。

**大致上，对现货比特币 ETF：**

```
年跟踪差异 ~ 费率 + 几个基点
```

实践中，主要现货比特币 ETF 自 2024 年 1 月上市以来都在其声明费率范围内跟踪了底层资产。包装器是有效的。

选择比特币 ETF 时为什么重要：

- **费率占主导。** 在多年持有中，0.20% 的 ETF 与 1.50% 的 ETF 会复合成有意义的差距。长期持有，最低费率的合格产品胜出。
- **实物 vs 现金创建/赎回影响跟踪质量。** 实物全面可用后，跟踪误差会进一步收窄。
- **不要混淆费率与跟踪质量。** 一个运营不善的便宜 ETF 可能比一个运营良好的贵 ETF 跟踪更差。比较实际跟踪差异历史，而不仅仅是头条费率。

跟踪误差是告诉你 ETF 是否在做好本职工作的无聊统计。对比特币来说，自上市以来的答案是：是的，几乎烦人地好。
