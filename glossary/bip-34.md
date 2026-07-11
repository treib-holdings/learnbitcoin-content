---
title: "BIP 34"
slug: bip-34
draft: false
shortDefinition: "要求 coinbase 交易显式包含区块高度，标准化区块引用。"
keyTakeaways:
  - "强制 coinbase 声明区块高度"
  - "改善链组织和验证"
  - "防止对区块位置的模糊引用"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-30
  - block
  - block-explorer
  - block-height
  - double-spend
  - transaction
liveWidget: ~
---

[BIP-34](https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki)要求每个比特币区块的 [coinbase 交易](/glossary/coinbase-transaction)在其输入脚本中首先推入[区块高度](/glossary/block-height)。2013 年 3 月作为[软分叉](/glossary/soft-fork)激活，这是一次结构性清理，同时解决了几个小问题。

规则实际做什么：

```
coinbase 输入脚本必须以：<区块高度序列化> 开头
```

对于区块 800,000，coinbase 输入以编码整数 800,000 的字节序列开头。简单、机械、易于验证。

带来的好处：

- **唯一性。**每个 coinbase 交易现在有一个不同于每个其他区块 coinbase 的唯一输入，所以两个区块不会意外产生相同的 coinbase txid。这是使 [BIP-30](/glossary/bip-30)"无重复 txid"规则永远平凡满足的结构性修复。
- **自引用区块。**区块现在显式声明自己的高度。这使某些验证逻辑更干净，并为重新同步或从损坏中恢复的节点提供了完整性检查锚点。
- **软分叉激活先例。**BIP-34 是最早使用干净矿工信号激活方法的非平凡软分叉之一（早于更正式的 [BIP-9](/glossary/bip-9-versionbits)）。它建立了后来激活改进的模式。

你会在节点日志、协议文档中看到 BIP-34 引用，偶尔在矿池讨论中也会出现，但大多数用户从不直接与它交互。它是比特币"因为 2013 年的精心设计而正常工作"基础设施的一部分。
