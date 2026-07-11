---
title: "层次化多签"
slug: hierarchical-multisig
draft: false
shortDefinition: "一种分层多签名方法，多签中的每个'密钥'本身可以是多方或结构化的。"
keyTakeaways:
  - "多签中每个'密钥'槽可以是额外的多签"
  - "提高大型组织的安全性和治理"
  - "需要仔细规划以避免过度复杂"
sources: []
relatedTerms:
  - psbt
  - custodial-lightning-wallet
  - green-address
  - hd-wallet-hierarchical-deterministic-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-deterministic-wallet
  - m-n
  - mono-signature
  - musig
  - musig2
  - quorum-signatures
  - rescue-transaction
  - wallet
liveWidget: ~
---

层次化多签是一种分层结构，多签设置中的一个或多个"密钥"本身就是多签。不是简单的 2-of-3，你可以构建"2-of-3，其中三者之一本身是 3-of-5"——嵌套授权要求以匹配组织结构。

为什么存在：简单多签对个人或小团队托管很好。但对于组织——交易所、托管服务、金库设置、家族办公室——安全和治理需求更细致：

- **审批层级。** 一笔花费可能需要财务主管（1 把密钥）、CFO（1 把密钥）和*CEO 或董事会*（1-of-2 嵌套在一个槽下）的签署。
- **部门分离。** 工程、财务和运营可能各控制一把"密钥"，内部是其各自团队成员的子多签。
- **纵深防御。** 日常运营热钱包可能是 2-of-3，但从冷存储提款可能需要 3-of-5，其中一把密钥本身是地理分布的 4-of-7 时间锁签名。

构造原则上可以使用 [Bitcoin Script](/glossary/bitcoin-script) 的原生多签操作码，或更优雅地使用 [Taproot](/glossary/taproot) 通过 MAST 表达复杂策略。现代硬件钱包生态系统（Sparrow、Specter、Nunchuk）越来越多地通过基于 [PSBT](/glossary/psbt) 的工作流支持这些安排。

许多层次化设置将实时多签与设置时预签名的[救援交易](/glossary/rescue-transaction)配对。商定的最坏情况恢复路径——共同签名者不可用、密钥被入侵、地理事件——在设置时签名并保存在冷存储中，需要时可广播，无需在危机期间重新协调签名。

权衡是运营复杂性。每增加一层都增加某人丢失密钥、忘记程序或被锁定的机会。层次化多签对有真实托管政策的组织真正有用，对个人可能过度。大多数个人用户用硬件设备的简单 2-of-3 就很好。
