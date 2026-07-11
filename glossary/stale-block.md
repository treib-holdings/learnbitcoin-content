---
title: "陈旧区块"
slug: stale-block
draft: false
shortDefinition: "一个有效但未成为主链一部分的区块，历史上常被称为'孤块'。"
keyTakeaways:
  - "在形成最长链的竞争中落败，区块奖励失效"
  - "反映了出块碰撞的正常现象"
  - "常与真正的孤块（缺少已知父区块）混淆"
sources: []
relatedTerms:
  - block-propagation
  - blockchain
  - chain-split
  - reorg-reorganization
liveWidget: ~
---

陈旧区块是一个有效的比特币区块，但没有进入规范链。两个[矿工](/glossary/miner)几乎同时在同一高度找到了区块；网络短暂分叉；一方赢了；输掉的就是陈旧区块。

使一个区块"陈旧"的不是区块本身有什么问题——每个全节点都能将其验证为格式正确、签名有效、工作量证明有效、coinbase 声明有效。它只是不再是最长链的一部分。一旦[重组](/glossary/reorg-reorganization)替换了它，找到它的矿工拿不到[区块奖励](/glossary/block-reward)；陈旧区块中的交易（除 coinbase 外）通常会回到[内存池](/glossary/mempool)等待稍后被重新挖出。

陈旧区块是正常的。每年约 52,000 个区块，加上全球分布的挖矿，短暂出块碰撞每年发生好几次。平均出块时间越长、区块传播越好，陈旧率越低。比特币的 10 分钟出块时间部分就是为了保持低陈旧率而选择的。

同一件事的旧称是[孤块](/glossary/orphan-block)，在旧文档中仍偶尔出现，但已被正式区别于另一种更罕见的情况——节点确实还没有收到父区块。

陈旧区块不表示比特币有问题。它们表明比特币在正常工作——全球各地的独立矿工竞相延长链，网络收敛到工作量更多的一侧。
