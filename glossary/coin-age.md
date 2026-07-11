---
title: "币龄"
slug: coin-age
draft: false
shortDefinition: "某些 PoS 系统中追踪币保持未花费时间的指标；在比特币分析中被研究但不用于比特币共识。"
keyTakeaways:
  - "在 PoS 网络中是关键，对比特币的 PoW 意义不大"
  - "用于分析（如衡量持有者行为）"
  - "在比特币的挖矿共识机制中没有直接作用"
sources: []
relatedTerms:
  - bitcoin-days-destroyed
  - coin-control
  - consolidation-transaction
  - transaction
  - transaction-chaining
  - utxo-unspent-transaction-output
liveWidget: ~
---

币龄是一个 UTXO 自创建以来经过的时间。在比特币中它没有共识作用——区块完全通过工作量证明来选择，而不是根据所包含币的年龄——但它是链上分析的关键输入。

币龄出现的场景：

- **[比特币销毁天数](/glossary/bitcoin-days-destroyed)**：BDD 按输入的币龄对每笔花费加权。花费沉睡多年的币比花费最近收到的币产生高得多的 BDD。
- **[HODL Waves](/glossary/hodl-waves)**：按币龄区间对供应量进行可视化。Glassnode 的标准图表使用 <1月、1-3月、3-6月、6-12月、1-2年、2-3年、3-5年、5-7年、7-10年、10年+ 等区间。
- **长期持有者与短期持有者分类。** Glassnode 使用 155 天阈值：超过该时间的 UTXO 被视为"长期持有者"供应。这种划分是有用的情绪指标。
- **"已实现市值"**：所有 UTXO 按其上次移动时的价格估值。老币贡献其原始（较低的）成本基础；最近移动的币反映当前价格。

币龄也是 PoS 山寨币（Peercoin 及其后继者）的核心概念，其中质押权按币龄加权。批评者指出这会激励囤积和中心化。比特币通过使用工作量证明避免了整个问题。

对于比特币来说：币龄之所以有趣，是因为它可以在链上直接观察（任何人都可以从任何节点计算），这使它成为少数不需要信任第三方聚类启发式的"钱包行为"指标之一。移动币的持有者是否真的是长期信念持有者，还是只是交易所热钱包，是需要更多分析的另一个问题。
