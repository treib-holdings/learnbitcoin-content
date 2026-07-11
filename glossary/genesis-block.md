---
title: "创世区块"
slug: genesis-block
draft: false
shortDefinition: "比特币的第一个区块，由 Satoshi Nakamoto 于 2009 年 1 月 3 日挖出，引用了一条《泰晤士报》标题。"
keyTakeaways:
  - "由 Satoshi 挖出，构成区块链的基础"
  - "包含对 2009 年银行业危机标题的引用"
  - "其 coinbase 奖励因特殊编码而不可花费"
sources: []
relatedTerms:
  - block-header
  - block-height
  - block-reward
  - block-subsidy
  - blockchain
  - coinbase-transaction
  - satoshi-nakamoto
  - whitepaper
sameAs:
  - "https://en.wikipedia.org/wiki/Blockchain"
  - "https://www.wikidata.org/wiki/Q20514253"
  - "https://en.bitcoin.it/wiki/Genesis_block"
liveWidget: ~
---

创世区块是比特币链的区块 0——第一个。[Satoshi Nakamoto](/glossary/satoshi-nakamoto) 于 2009 年 1 月 3 日挖出，并在其 [coinbase 交易](/glossary/coinbase-transaction)中嵌入了一条著名的消息：

> "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

这是当天早些时候《泰晤士报》头版标题的原文。它有两个目的。第一，证明区块没有被预挖——它在报纸标题存在之前不可能存在。第二，是明确的意图声明：比特币在银行业危机中诞生，明确提及了它被设计来竞争的系统的失败。

创世区块的一些技术特点：

- **50 BTC [区块补贴](/glossary/block-subsidy)不可花费。** Satoshi 以不属于 UTXO 集的方式硬编码。这些币存在于传说中但不在于可花费供应中。
- **没有前一个区块哈希。** 前一区块哈希字段全为零，因为之前什么都没有。
- **硬编码在 Bitcoin Core 中。** 每个节点内置创世区块的确切字节。它不是被网络"发现"的；它是一个常量。

创世区块现在主要是象征性的，但那条消息值得每次减半时重读。它是一个替代货币系统的创始文件，由一个再未出现的人用 80 字节写下。

配套文件参见[白皮书](/glossary/whitepaper)，我们所知关于谁留下它的参见 [Satoshi Nakamoto](/glossary/satoshi-nakamoto)。
