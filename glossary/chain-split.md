---
title: "链分叉"
slug: chain-split
draft: false
shortDefinition: "当冲突的共识规则导致区块链分裂为两条不兼容的链时发生。"
keyTakeaways:
  - "产生两条有共同历史但规则不同的区块链"
  - "可能是有意的（硬分叉）或意外的（软件冲突）"
  - "如果用户控制着私钥，他们会在两条链上各有一份币"
sources: []
relatedTerms:
  - airdrop-btc-fork
  - bitcoin-cash
  - chain-flag-day
  - fork
  - fork-detection
  - fork-watcher
  - reorg-reorganization
sameAs:
  - "https://en.wikipedia.org/wiki/Fork_(blockchain)"
  - "https://www.wikidata.org/wiki/Q48893562"
  - "https://en.wikipedia.org/wiki/Bitcoin_Cash"
liveWidget: ~
---

链分叉发生在比特币网络分裂为两条持久的、各自有效的链时——可能是意外的（因为软件 bug），也可能是故意的（因为争议性[硬分叉](/glossary/fork)）。

一旦分裂，每条链各自继续产出区块、各自的矿工、各自的追随者。分裂前存在的币会被复制：持有者在每条链上各有一个余额，由相同的[私钥](/glossary/private-key)控制。两条链永远不会合并。

比特币历史上著名的链分叉：

- **Bitcoin Cash（BCH）——2017 年 8 月。** 最大的一个。2015-2017 年的"扩容战争"最终导致 BCH 从比特币分叉出来，采用更大的区块但没有 [SegWit](/glossary/segwit-segregated-witness-bip-141)。今天 BCH 仍然作为一个独立的、小得多的网络存在。
- **Bitcoin SV（BSV）——2018 年 11 月。** 从 BCH 分叉，不是从比特币分叉。更小；更远离主流。
- **2013 年 3 月（意外）。** Bitcoin v0.7 和 v0.8 之间一个微妙的数据库差异导致了 24 个区块的意外分叉。矿工协调回滚到 v0.7 兼容行为，在几小时内解决。这是比特币历史上唯一的"共识 bug"链分叉。

BCH 分叉澄清了一件事：当发生争议性硬分叉时，市场决定哪条链是"比特币"。技术和经济因素都很重要，但实际上，拥有原始代码符号、交易所上市、品牌关联和开发者关注度的链保留了"比特币"的名称和大部分价值。分叉链重新品牌并作为独立资产交易，通常价格只有比特币的一小部分。

如果再次发生链分叉，分裂前的持有者将在两边都有币，但两条链的市场定价会大不相同。这种模式是对没人真正想要的变更的有力结构性防御："重新品牌为山寨币"的威胁使协议变更保持保守。
