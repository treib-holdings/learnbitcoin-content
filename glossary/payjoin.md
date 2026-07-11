---
title: "PayJoin（联合支付）"
slug: payjoin
draft: false
shortDefinition: "一种协作交易（又称 P2EP），发送方和接收方都添加输入，使通常的输入-输出分析失效。"
keyTakeaways:
  - "双方都为单笔交易贡献输入"
  - "打破简单的链上分析假设"
  - "需要特殊钱包支持，但可以在正常支付中无缝发生"
sources: []
relatedTerms:
  - address-clustering
  - address-reuse
  - coinjoin
  - mixing-service
  - shielded-coinjoin
  - stealth-address
sameAs:
  - "https://en.bitcoin.it/wiki/PayJoin"
  - "https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki"
  - "https://bitcoinops.org/en/topics/payjoin/"
liveWidget: ~
---

PayJoin（也叫 Pay-to-Endpoint，P2EP）是一种隐私增强的交易格式，发送方*和*接收方都贡献[输入](/glossary/input-transaction-input)。结果是一笔链上支付，击败了最强的[链上分析](/glossary/chain-analysis)启发式之一："交易的所有输入属于同一所有者。"

普通支付：发送方贡献输入，接收方不贡献任何东西。链上分析师假设交易的所有输入属于一个钱包，并利用这一点来聚类地址。

PayJoin：发送方贡献其输入，*接收方也添加至少一个自己的输入*然后签名。交易现在有来自两个不同钱包的输入。共同输入启发式被打破——任何应用它的分析师都会将两个不相关的钱包合并为一个错误的聚类。

实际好处：

- **对于发送方：** 分析师对你交易所有输入都是你的假设变得错误。过去的聚类分析被污染了。
- **对于接收方：** 支付不会去到一个全新的孤立地址；他们现有的 UTXO 是花费模式的一部分，更难被单独识别。
- **双方**还顺便实现了一些[合并](/glossary/consolidation-transaction)——接收方在被支付的同时有机会花费一个旧 UTXO。

难点在于协调：两个钱包需要在广播前通信。[BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki) 等标准定义了基于 HTTP 的 PayJoin 协议，接收方运行一个端点。2024-2025 年的改进（BIP-77 / 通过 Nostr 或类似中继的异步 PayJoin）使协调更容易，不要求接收方在支付时刻在线。

PayJoin 与 [CoinJoin](/glossary/coinjoin) 在规模和意图上不同。CoinJoin 是多方批量混合，用于事后的隐私。PayJoin 是双方的常规支付隐私。两者都有用；PayJoin 更难被审查或协调对抗，因为每笔 PayJoin 看起来都像普通交易。
