---
title: "Liquid 联盟"
slug: liquid-federation
draft: false
shortDefinition: "通过多签设置管理 Liquid 侧链锚定 BTC 的功能节点组。"
keyTakeaways:
  - "保护 Liquid 侧链锚定的联合多签组"
  - "需要阈值数量的签名者才能释放锚定 BTC"
  - "提供更快的出块时间和保密功能，但并非完全无需信任"
sources: []
relatedTerms:
  - liquid-network
  - multisig
  - peg
  - peg-guard
  - peg-out
  - sidechain
liveWidget: ~
---

**Liquid 联盟**是集体运营 [Liquid 网络](/glossary/liquid-network)侧链的组织联盟。每个成员运行一个硬件保护的节点（"功能节点"），参与区块签名和控制与比特币主网[双向锚定](/glossary/peg)的多签。

截至 2026 年的结构：

- **约 65 个联盟成员。** 主要比特币交易所（Bitfinex、BTSE）、比特币原生公司（Blockstream 自身、Bull Bitcoin）、做市商、托管机构和交易公司。
- **区块签名轮换。** 联盟成员的子集按轮换计划签署每个区块。区块约每 1 分钟产生。
- **锚出审批需要阈值。** 通过锚出将 BTC 从主网转回需要 11-of-15 活跃区块签名者的签名（确切比例已演变）。
- **防篡改硬件。** 联盟成员在地理分布的、经安全审计的地点运行专用功能节点硬件。

信任假设：联盟的恶意多数可以串通盗窃锚定的 BTC、停止侧链或审查交易。地理和组织多样性使这变得困难但非不可能。

这种信任换取的是：

- **快速结算。** 约 1 分钟区块对比比特币的约 10 分钟。
- **保密交易。** 比特币的透明链无法隐藏金额；Liquid 可以。
- **发行资产。** USDT、黄金代币、证券等都使用联盟的框架。
- **实际采用。** 2026 年 Liquid 承载着有意义的机构比特币交易量。

Liquid 联盟是存在中资金最充足、组织最完善的联合比特币侧链运营。它是"联邦锚定在大规模下是什么样"的实际答案。如果你接受信任模型，Liquid 兑现了其承诺。如果不接受，你需要另寻他路——主网、闪电网络，或关注 [BIP-300 驱动链](/glossary/bip-300-drivechains)最终会变成什么。

请参阅[Liquid 网络](/glossary/liquid-network)了解侧链本身。
