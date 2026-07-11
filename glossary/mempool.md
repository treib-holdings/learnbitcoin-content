---
title: "内存池"
slug: mempool
draft: false
shortDefinition: "节点的本地'候车室'，存放未确认交易，矿工从中选取创建新区块。"
keyTakeaways:
  - "存放等待确认的待处理交易"
  - "各节点策略不同，因此内存池内容不完全相同"
  - "手续费估算和 RBF 严重依赖内存池动态"
sources:
  - { label: "Mempool rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/mempool" }
relatedTerms:
  - double-spend
  - fee-bumping
  - fee-estimation
  - full-rbf
  - miner
  - mining
  - mining-pool
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

内存池——全称 **mem**ory **pool**——是比特币节点的未确认交易本地列表：节点已听说但尚未在区块中看到的交易。当你广播一笔[交易](/glossary/transaction)时，它从节点传播到节点，每个节点验证它并将其添加到自己的内存池中。

没有单一的全局内存池。每个节点维护自己的。大多数相似，但在两方面不同：

- **策略。** 每个节点设置关于接受和中继的本地规则：最低费率、[粉尘](/glossary/dust)阈值、最大尺寸、最大祖先/后代链等。
- **传播延迟。** 新交易需要一两秒到达地球上每个可达节点。在此窗口内，各内存池暂时对待处理内容存在分歧。

[矿工](/glossary/miner)从自己的内存池构建候选区块，优先打包费率最高的交易（每虚拟字节的聪数）以最大化区块奖励收入。所以当你为交易"设置手续费"时，你实际上是在与全球各地内存池中的其他所有人竞价争夺打包位置。请参阅[手续费估算](/glossary/fee-estimation)了解钱包如何猜测正确的出价。

当交易被包含在区块中时，每个节点看到该区块、验证它，并从内存池中移除已打包的交易。等待中的交易也可能在内存压力下被驱逐或通过[费用提升](/glossary/fee-bumping)被替换。

请在[内存池深入探讨](/rabbit-hole/mempool)中了解更多——手续费市场、驱逐规则、RBF，以及"卡住"的交易在协议层面实际是什么样子。在[节点状态页面](/node/)或[挖矿深入探讨 §6](/rabbit-hole/mining)中观看实时内存池状态。
