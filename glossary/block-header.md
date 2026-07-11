---
title: "区块头"
slug: block-header
draft: false
shortDefinition: "区块的约 80 字节紧凑摘要，包含版本、前一个区块哈希、Merkle 根、时间戳和随机数。"
keyTakeaways:
  - "包含工作量证明的关键哈希元素"
  - "链接前一个区块并通过 Merkle 根汇总交易"
  - "矿工专注于寻找有效的区块头哈希来产出新区块"
sources: []
relatedTerms:
  - bip-22-getblocktemplate
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-height
  - block-propagation
  - block-time
  - blockchain
  - genesis-block
  - merkle-block
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
sameAs:
  - "https://en.bitcoin.it/wiki/Block_hashing_algorithm"
liveWidget: ~
---

区块头是每个比特币区块顶部的 80 字节摘要。它很小，但包含了[工作量证明](/glossary/proof-work-pow)所需的一切。

六个字段：

1. **版本**（4 字节）——信号区块遵循哪个协议规则。
2. **前一个区块哈希**（32 字节）——前一个区块头的哈希。这就是使比特币成为*链*的东西。
3. **[Merkle 根](/glossary/merkle-root)**（32 字节）——一个提交到区块中每笔交易的哈希。改变任何交易这就会变。
4. **时间戳**（4 字节）——矿工声称的出块时间。宽松约束。
5. **Bits**（4 字节）——当前难度目标的紧凑编码。
6. **[随机数](/glossary/nonce)**（4 字节）——矿工在搜索有效哈希时变化的字段。

要挖一个区块，你计算 SHA-256(SHA-256(header)) 并检查结果是否低于 *bits* 中编码的目标。如果不是，更改随机数再试。（当你穷尽所有 40 亿个随机数值时，你调整 coinbase 交易的 extranonce，这会改变 Merkle 根，然后重新开始。）

区块头只有 80 字节的原因是让矿工可以廉价地广播和验证它们。矿工找到有效区块后先发出区块头，让网络验证工作量证明，并行传播完整区块。轻量客户端（SPV 钱包）可以仅通过检查区块头来验证链——每年总共约 4 MB——而无需存储数 GB 的完整交易数据。

参见[挖矿 rabbit hole](/rabbit-hole/mining)了解搜索过程，[区块](/glossary/block)了解区块头摘要的内容。
