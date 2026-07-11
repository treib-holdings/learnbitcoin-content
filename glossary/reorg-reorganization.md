---
title: "重组（Reorg，Reorganization）"
slug: reorg-reorganization
draft: false
shortDefinition: "当一条更长或更重的链出现时，节点从当前链尖切换到新链，使旧链尖上的区块失效。"
keyTakeaways:
  - "当之前落后的链在累积工作量上超过主链时发生"
  - "可能逆转较短链上已包含区块中的近期交易"
  - "浅重组是正常的；深重组暗示潜在攻击或链分裂"
sources: []
relatedTerms:
  - block-propagation
  - blockchain
  - chain-split
  - corrupted-chain-state
  - double-spend
  - double-spend-relay
  - fork
  - fork-detection
  - fork-watcher
  - full-validation
  - race-attack
  - replay-attack
  - stale-block
  - transaction-finality
liveWidget: ~
---

重组——链**重组**——是当[比特币节点](/glossary/node)了解到一条比它当前遵循的链更长的链，并切换到它时发生的情况。之前链尖上的区块变为[陈旧区块](/glossary/stale-block)；其中包含的交易被退回[内存池](/glossary/mempool)，除非它们也存在于新链中。

驱动重组的规则是"最长有效链获胜"——更准确地说是累积[工作量证明](/glossary/proof-work-pow)最多的链。当两个矿工几乎同时找到同一高度的区块时，网络暂时分裂。一旦下一个区块在其中一方被挖出，那一方就有更多累积工作量，在另一方的节点就会重组到它。

两种形式：

- **浅重组（1-2 个区块深）。** 日常事件。每年发生多次，只影响刚刚确认的交易。这正是大额转账需要 6 确认规则的原因——六个区块后，重组推翻你交易的概率在没有大规模协调攻击的情况下微乎其微。
- **深重组（3 个区块以上）。** 罕见且令人担忧。比特币主网上观察到的大多数深重组是由软件漏洞、短暂网络分区或在测试网上的研究性攻击造成的。主网上的深重组是需要调查的严重事件。

经济影响：比特币上的[交易最终性](/glossary/transaction-finality)是概率性的，不是二元的——一笔交易的最终性取决于其上面积累了多少工作量。一个确认"小金额可能没问题"。六个确认"几乎所有情况都行"。数百个确认"实际意义上永久"。参见 [Double Spend](/glossary/double-spend) 了解重组使攻击变难的机制，[Mining rabbit hole](/rabbit-hole/mining) 了解经济学。
