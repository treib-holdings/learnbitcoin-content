---
title: "ANYPREVOUT"
slug: anyprevout
draft: false
shortDefinition: "一种提议的 SIGHASH 标志（BIP-118），允许部分签名交易不严格绑定到特定输入，解锁高级二层协议。"
keyTakeaways:
  - "新的 SIGHASH 类型，放宽输入绑定"
  - "高级二层设计（如 Eltoo）的关键"
  - "仍在积极开发和审查中"
sources: []
relatedTerms:
  - eltoo
  - payment-channel
  - sighash
  - sighashanyonecanpay
  - sighashsingle
liveWidget: ~
---

**ANYPREVOUT**（具体来说是 `SIGHASH_ANYPREVOUT` 及其变体 `SIGHASH_ANYPREVOUTANYSCRIPT`）是一种提议的 [Bitcoin Script](/glossary/bitcoin-script) 签名哈希模式，允许已签名的交易应用于*任何*匹配的前置输出，而不是绑定到一个特定输入。在 [BIP-118](https://github.com/bitcoin/bips/blob/master/bip-0118.mediawiki) 中定义，它是 [Eltoo](/glossary/eltoo) 式通道和各种高级协议所需的关键密码学原语。

通俗地说，技术变化是：

- **目前**，当你签名一笔比特币交易时，签名会提交到特定的输入 txid——"我正在签名一笔花费 UTXO X 的交易。"如果这些输入 UTXO 因任何原因发生了变化（例如，出现了另一笔以不同条款花费它们的交易），你的签名就无效了。
- **有了 ANYPREVOUT**，你可以以一种"我正在签名一笔*会*花费任何匹配某个脚本模板的 UTXO 的交易"的方式签名。如果实际输入在广播前被更改，只要脚本模板匹配，签名仍然适用。

这解锁了：

- **[Eltoo 通道](/glossary/eltoo)。**提议的更简单的闪电通道设计替代方案。每个新的通道状态以一种可以应用于任何先前承诺的方式签名，用更简单的"新状态覆盖旧状态"模型取代基于惩罚的机制。
- **闪电网络协议清理。**各种高级闪电构造（多方通道、通道工厂、简化路由）变得更加可行。
- **更简单的金库设计。**某些金库构造在 ANYPREVOUT 下变得更容易。

ANYPREVOUT 已被提议多年。截至 2026 年，它尚未激活。技术实现已被充分理解；阻碍与其他提议的[软分叉](/glossary/soft-fork)一样——需要建立足够广泛的社区共识才能激活。它在与 [BIP-119 (CTV)](/glossary/bip-119-ctv) 和其他契约相关提案大致相同的激活讨论中被提及，关于扩展比特币脚本灵活性的论据类似。

参见 [Eltoo](/glossary/eltoo) 了解旗舰用例，[Covenants](/glossary/covenants) 了解更广泛的扩展辩论。
