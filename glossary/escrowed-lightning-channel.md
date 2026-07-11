---
title: "托管式闪电通道"
slug: escrowed-lightning-channel
draft: false
shortDefinition: "由第三方或多签安排增加额外安全性或条件控制的闪电通道。"
keyTakeaways:
  - "向闪电通道添加中立或条件方"
  - "加强通道支付的安全性/争议解决"
  - "引入超出标准闪电网络两方设置的复杂性"
sources: []
relatedTerms:
  - core-lightning-c-lightning
  - counterparty-risk
  - custodial-lightning-wallet
  - escrow
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - payment-channel
liveWidget: ~
---

托管式[闪电通道](/glossary/lightning-channel)是一种非标准通道设计，添加第三方（或额外脚本条件）来调解通道操作。不是通道双方之间的标准 2-of-2 多签，托管式设置可能使用带有托管代理作为第三签名方的 2-of-3 多签。

该模式在实践中很少见，但出现在特定商业场景中：

- **B2B 结算通道**，中立方可以在不保管资金的情况下解决争议。
- **保险或担保安排**，托管持有方可在特定条件下释放资金。
- **闪电服务提供商（LSP）整合**，LSP 对路由或流动性决策拥有一定权限，以换取在运营上管理通道。

权衡：

- **增加灵活性。** 争议可以在不上法院或不纯粹依赖[惩罚交易](/glossary/penalty-transaction)机制的情况下解决。
- **失去纯粹的两方无信任。** 第三方理论上可以与一方串通。托管假设很重要。
- **运营复杂性。** 更多活动部件、更多密钥管理、更多失败模式。

对于大多数闪电网络用户，标准两方通道工作良好，托管变体增加了不必要的复杂性。该模式存在于专业化金融关系中——小众但真实。

标准设计参见[闪电通道](/glossary/lightning-channel)，此模式借鉴的链上托管概念参见[托管](/glossary/escrow)。
