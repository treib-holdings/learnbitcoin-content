---
title: "Liquid 网络"
slug: liquid-network
draft: false
shortDefinition: "由 Blockstream 开发的联邦侧链，提供更快结算、保密交易和锚定 BTC 模型。"
keyTakeaways:
  - "联邦锚定将主网上锁定的 BTC 保护在多签中"
  - "保密交易隐藏 L-BTC 转账金额"
  - "更快结算但依赖受信任的功能节点"
sources: []
relatedTerms:
  - bitcoin-bridge
  - liquid-federation
  - multisig
  - peg
  - peg-out
  - second-layer
  - sidechain
liveWidget: ~
---

**Liquid 网络**是由 Blockstream 开发的联邦比特币[侧链](/glossary/sidechain)，自 2018 年 9 月开始运营。它提供更快的结算（约 1 分钟区块对比比特币的约 10 分钟）、保密交易（金额和资产类型对链上观察者隐藏）和原生资产发行框架。Liquid 上的锚定 BTC 称为 **L-BTC**。

Liquid 的实际运作方式：

- **[Liquid 联盟](/glossary/liquid-federation)**——由约 65 个实体（交易所、场外交易台、金融公司、Blockstream 自身）组成的联盟——运营侧链。区块生产在联盟成员间轮换。
- **锚入**将 BTC 发送到主网上联盟控制的多签；Liquid 上以 1:1 发行 L-BTC。
- **锚出**在 Liquid 上销毁 L-BTC；联盟从主网将 BTC 释放回用户。
- **保密交易**使用密码学承诺（同态 Pedersen 承诺）隐藏金额，同时让节点验证没有发生通胀。
- **发行资产。** Liquid 支持在 L-BTC 旁边发行任意资产（被 Liquid 上的 Tether USD、PAXG 等黄金代币、证券代币等使用）。

2026 年 Liquid 的用途：

- **交易所间结算。** 主要比特币交易所使用 Liquid 在彼此之间快速转移，避免主网转账 60 分钟的确认延迟。
- **场外交易台。** 保密交易对于大宗交易很重要，否则被移动的金额会对链上分析师可见。
- **稳定币发行。** USDT-Liquid 是比特币原生结算的有意义稳定币网络之一。
- **证券代币实验。** 多个发行方已在 Liquid 上发行代币化证券。

Liquid 不是什么：

- **不像主网那样无需信任。** 联盟技术上可以串通。如果联盟多数签署了恶意锚出，他们原则上可以盗窃锚定的 BTC。这是一种信任假设（被合理的人持有），但与比特币的工作量证明安全模型有本质区别。
- **不是比特币的主要扩展方案。** Liquid 服务于特定细分市场（机构快速结算、保密交易）。[闪电网络](/glossary/lightning-network)是通用的第二层。

请参阅[Liquid 联盟](/glossary/liquid-federation)了解联盟结构，[侧链](/glossary/sidechain)了解更广泛的类别。
