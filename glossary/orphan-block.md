---
title: "孤块"
slug: orphan-block
draft: false
shortDefinition: "未被最佳链接受的区块的较旧术语（更准确地称为陈旧块或孤儿块）。"
keyTakeaways:
  - "在其他系统中也称为陈旧块或叔块"
  - "在链构建过程中输给另一个有效区块"
  - "孤块的矿工不会获得区块奖励"
sources: []
relatedTerms:
  - block
  - block-propagation
  - chain-split
  - fork
  - miner
  - reorg-reorganization
  - stale-block
liveWidget: ~
---

"孤块"是未进入规范链的有效区块的较旧术语。现代 Bitcoin Core 文档更倾向于使用[陈旧块](/glossary/stale-block)来描述这个概念，将"孤块"保留给本地节点尚未收到其父区块的真正罕见情况。

实践中，当两个[矿工](/glossary/miner)几乎同时在同一高度找到有效区块时——平均每年发生几次——网络暂时分裂。每一半在它先看到的区块上构建。在一两个区块内，一个分支通常会领先，另一个分支的尖端区块被废弃。那个被废弃区块的矿工得不到报酬。

命名历史很混乱。在较早的文献中你会看到"orphan"、"stale"和"uncle"（以太坊术语）互换使用。对于 2026 年的比特币，更清晰的区分是：

- **陈旧块**——一个有效的、完全验证的、在竞赛中输掉的区块。区块存在过；只是不再是长链的一部分。
- **孤块**——本地节点没有其父区块的区块。通常是传播产物，几乎总在父区块到达后几秒内解决。

两者都是全球分布式工作量证明竞赛的正常结果。两者都不表明比特币有任何问题。请参阅[重组](/glossary/reorg-reorganization)了解陈旧块内交易会发生什么。
