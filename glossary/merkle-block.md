---
title: "默克尔区块"
slug: merkle-block
draft: false
shortDefinition: "发送给 SPV 客户端的精简区块，仅包含区块头和相关交易的最小默克尔路径。"
keyTakeaways:
  - "SPV 钱包用于确认区块中的特定交易"
  - "包含最小数据：区块头 + 默克尔路径"
  - "节省带宽/存储，实现轻量级验证"
sources: []
relatedTerms:
  - bip-37
  - bip-158
  - block-header
  - bloom-filter
  - merkle-inclusion-proof
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
liveWidget: ~
---

默克尔区块是一种比特币点对点消息（[定义在 BIP-37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki)），由[全节点](/glossary/full-node)发送给 [SPV](/glossary/spv-simplified-payment-verification) 客户端。它包含：

- 完整的[区块头](/glossary/block-header)（80 字节）。
- 区块中与 SPV 客户端的[布隆过滤器](/glossary/bloom-filter)匹配的交易列表。
- 一个[默克尔证明](/glossary/merkle-proof)，显示这些交易被提交在区块的[默克尔根](/glossary/merkle-root)中。

这就是让手机钱包检查*它自己的*交易是否出现在最新区块中的方式，而无需下载整个区块。

缺点，多年来受到更多关注：**布隆过滤器泄露隐私**。SPV 客户端将其过滤器发送给全节点，全节点可以概率性地逆向工程出客户端关心哪些地址或交易。对于注重隐私的用户，这是一个有意义的担忧——BIP-37 在 2012 年编写时未预料到这一点。

现代替代方案是 **[BIP-157/158](/glossary/bip-158) 紧凑区块过滤器**：由*服务端*为每个区块计算过滤器，*客户端*下载并在本地检查匹配，而不透露自己关心哪些地址。更好的隐私，适度的带宽成本。大多数现代 SPV 风格的移动钱包（Phoenix、Mutiny、Breez 等）使用这种方法而非 BIP-37 默克尔区块。

默克尔区块仍然有效且仍被 Bitcoin Core 实现，但在现代钱包生态系统中的使用已在许多部分被弃用。
