---
title: "比特币天数销毁"
slug: bitcoin-days-destroyed
draft: false
shortDefinition: "一种链上指标，将花费的 BTC 数量乘以其闲置时间，反映按持有时间加权的'交易价值'。"
keyTakeaways:
  - "按持有期加权交易量"
  - "高 BDD 可能表示长期持有的币在移动"
  - "分析师用于评估长期持有者活动"
sources: []
relatedTerms:
  - coin-age
  - coin-control
  - colored-coins
  - transaction
  - transaction-chaining
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

比特币天数销毁（BDD）是 ByteCoin 2011 年在 Bitcoin Talk 论坛上引入的链上指标。它按输入在花费前闲置的时间来加权每笔交易：一个 100 天未移动的 50 BTC 输出在被花费时"销毁"50 × 100 = 5,000 比特币天。移动昨天才到你钱包的 1 BTC，你销毁 1 比特币天。

直觉：原始交易量（每天移动的 BTC）将交易所热钱包间的高频交易与终于移动的长期休眠币同等对待。BDD 区分它们。坐了几年不动的币然后花费，与每小时在交易所钱包间弹跳的币讲述不同的故事。

分析师如何使用：

- **长期持有者行为。**BDD 持续上升通常与"长期持有者在分发"市场顶部相关，即穿越前几个周期的币被卖出。
- **宏观周期标记。**BDD 峰值历史上聚集在主要价格高点（2013、2017、2021、2024）和主要投降点（2018、2022）附近。
- **与其他指标结合。**Glassnode、Coin Metrics 等发布基于 BDD 的衍生指标：Value Days Destroyed、Reserve Risk、HODL Waves 等。

BDD 不能告诉你的：

- **为什么币移动了。**移动到新自托管地址的币与移动到交易所的币看起来一样。
- **谁移动了它们。**单实体行为无法确定性地识别；链上分析启发式将地址聚类但不完美。
- **移动预测什么。**与价格顶部的相关性是历史模式，非因果关系。BDD 是信号，不是预测。

对于普通观察者，BDD 是公开区块链上可获得的较好的"这只是交易还是老持有者在移动"信号之一。它不是价格预测器，而是市场活动的有用上下文化工具。
