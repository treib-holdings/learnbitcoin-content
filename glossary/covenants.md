---
title: "契约（Covenants）"
slug: covenants
draft: false
shortDefinition: "对输出在未来如何被花费施加条件的脚本，如 BIP-119 的 CTV 或其他契约设计所提议。"
keyTakeaways:
  - "在典型所有权规则之外增加花费约束"
  - "可以实现金库、高级通道操作或批量花费"
  - "因可能影响币的可替代性而在社区中存在争议"
sources: []
relatedTerms:
  - bip-119-ctv
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - clawback-mechanism
  - coin-freeze
  - colored-coins
  - counterparty-risk
  - op-code-operation-code
  - script
  - scriptless-scripts
liveWidget: ~
---

契约是一种[比特币脚本](/glossary/bitcoin-script)构造，不仅限制*谁*可以花费 UTXO，还限制*必须如何花费*。锁定脚本不仅检查签名；它对花费交易的外观施加约束——哪些地址接收、什么金额、什么时间等。

比特币目前不支持契约。它们至少从 2013 年就以各种形式被提出，Taproot 之后的时代（2022-2026）出现了最严肃的激活讨论。

契约将实现什么：

- **金库构造。** 冷存储中的提款必须经过特定的多步骤路径和取消窗口。即使你的签名密钥被盗，攻击者也被迫进入一个你可以中断的缓慢、可观察的路径。
- **通道工厂。** 单笔链上交易预先承诺稍后开启多个[闪电通道](/glossary/lightning-channel)，推迟大部分手续费成本。
- **跨输入签名聚合模式。**
- **最小化信任的托管产品**，具有强制策略。
- **改进的二层协议**（闪电网络的一些更难的 UX 问题通过契约变得更容易）。

争论有两个方面：

**支持：** 契约解锁了今天尴尬或不可能的有用现实世界构造。最简单的提案范围明确且不会破坏任何东西。

**反对：** 添加契约能力是脚本表达力的重大扩展。一旦契约操作码被激活，它实际上是永久的。人们担心与未来协议变更的微妙交互，以及政策先例——如果契约可以强制"此 UTXO 只能花费到白名单地址"，该能力是双刃剑（合法金库 vs 强制 KYC 合规方案）。

当前候选提案：[BIP-119（CTV）](/glossary/bip-119-ctv)、OP_VAULT、OP_CAT 重新启用、ANYPREVOUT 等。还没有任何单一提案建立了足够广泛的共识来激活。讨论仍在继续。

截至 2026 年，契约辩论是比特币协议发展中最重要的开放问题之一。即使你还没有强烈观点，也值得了解。
