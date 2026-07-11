---
title: "BIP 152（紧凑区块）"
slug: bip-152-compact-blocks
draft: false
shortDefinition: "一种允许节点使用短交易 ID 传播新区块的方法，减少带宽使用。"
keyTakeaways:
  - "减少区块中继过程中的冗余交易数据"
  - "加速网络对新区块的收敛"
  - "减少全节点的带宽使用"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block
  - block-header
  - block-height
  - block-propagation
  - block-time
  - blockchain
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0152"
  - "https://bitcoinops.org/en/topics/compact-block-relay/"
liveWidget: ~
---

[BIP-152](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki)定义了**紧凑区块中继**，即比特币节点用来高效传播新挖出区块的协议。2016 年在 Bitcoin Core 中激活，大幅减少了区块传播的带宽和延迟。

它解决的问题：当新区块被发现时，网络上的每个节点需要尽快收到它。传播慢意味着陈旧区块率上升，这损害矿工利益并降低网络整体效率。天真地将完整区块发送给每个对等节点是浪费的——如果那些对等节点的[内存池](/glossary/mempool)中已经有了大部分交易，你就在发送他们已有的数据。

紧凑区块的工作方式：

1. **新区块到达。**矿工发布一个新区块。
2. **中继先发送紧凑摘要。**对等节点收到区块头加上区块中每笔交易的短 ID（6 字节哈希）列表，而非完整区块。
3. **每个对等节点检查其内存池。**对于每个短 ID，它尝试在自己的内存池中找到匹配的交易。命中的在本地填充。
4. **对等节点请求缺失的。**对等节点没有的任何交易被显式请求。
5. **区块重建。**大多数交易已在内存池中，少数缺失的现已获取，对等节点重建完整区块并验证。

典型带宽节省：对于内存池与网络基本同步的连接良好的节点，超过 90%。区块传播时间从秒级降至百毫秒级，保持低陈旧区块率和健康的网络。

紧凑区块中继默默承载着比特币的网络性能。大多数用户从不知道它的存在。
