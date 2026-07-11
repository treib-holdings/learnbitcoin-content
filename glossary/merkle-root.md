---
title: "默克尔根"
slug: merkle-root
draft: false
shortDefinition: "区块默克尔树顶端的单一 32 字节哈希，汇总所有包含的交易。"
keyTakeaways:
  - "封装区块中每笔交易的最终哈希"
  - "由于矿工哈希区块头，对工作量证明至关重要"
  - "交易中的任何小改动都会破坏哈希链"
sources: []
relatedTerms:
  - bip-37
  - bip-158
  - block-header
  - block-size
  - bloom-filter
  - chain-visualization
  - hash
  - merkle-block
  - merkle-inclusion-proof
  - merkle-tree-merkle-root
  - merkleized-abstract-syntax-tree-mast
  - merkle-proof
  - spv-simplified-payment-verification
liveWidget: ~
---

默克尔根是每个[区块头](/glossary/block-header)中的单一 32 字节哈希，提交了区块中的所有交易。

它通过在区块的交易 ID 上构建[默克尔树](/glossary/merkle-tree-merkle-root)来计算：两两配对、每对哈希、然后将结果哈希配对、再配对，直到剩下一个哈希。那个最终哈希就是默克尔根。

三件事使它承重：

1. **它将交易绑定到区块。** 改变任何交易的数据，默克尔根就会改变。改变默克尔根，区块头就会改变。改变区块头，你就得重新做[工作量证明](/glossary/proof-work-pow)。篡改成本就是完整的重新挖矿成本。
2. **它是矿工实际哈希的内容。** [区块头](/glossary/block-header)哈希包含默克尔根。当[矿工](/glossary/miner)改变[nonce](/glossary/nonce)寻找有效区块时，默克尔根是输入之一。（当他们用尽 nonce 时，会调整 coinbase 交易的 extranonce，改变默克尔根，获得新的 nonce 空间。）
3. **它使 SPV 成为可能。** [轻客户端](/glossary/spv-simplified-payment-verification)只需下载区块头加上每笔交易 `log2(N)` 大小的默克尔证明即可验证其交易在链中。

一个 32 字节的承诺，覆盖潜在的千兆字节交易数据，就包含而言没有信息丢失。这是比特币中最安静的设计优雅之一。

请参阅[默克尔树/默克尔根](/glossary/merkle-tree-merkle-root)了解详细构造。
