---
title: "闪电锚定承诺"
slug: lightning-anchor-commitment
draft: false
shortDefinition: "一种带有锚定输出的承诺交易类型，在广播后若内存池手续费飙升可进行费用提升。"
keyTakeaways:
  - "使闪电通道关闭更能适应手续费市场变化"
  - "在特殊输出上使用 CPFP 在广播后提升手续费"
  - "需要支持锚定输出的节点实现"
sources: []
relatedTerms:
  - fee-bumping
  - fee-rate-escalation
  - fraudulent-channel-close
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-network
liveWidget: ~
---

锚定承诺是[闪电通道](/glossary/lightning-channel)的一种设计模式，解决了旧通道设计中的关键费率问题。

问题：闪电通道的承诺交易（关闭通道并分配资金的链上交易）在通道开启时**预签名**。签名包含手续费。如果你在低拥堵期以 10 sat/vB 的费率签名，然后在 200 sat/vB 的高费风暴中需要广播，这笔交易对矿工来说不经济，可能永远待在[内存池](/glossary/mempool)中——或被驱逐。

锚定前的设计处理这个问题很糟糕。如果手续费飙升，通道可能实际上被"卡住"，签名后无法干净地提升承诺交易的费用。

锚定输出解决了这个问题。承诺交易以故意低的费率签名，但包含两个小的"锚定"输出（每个通道方一个）。当任一方广播承诺交易时，他们可以在自己的锚定输出上使用 [CPFP（Child-Pays-for-Parent）](/glossary/fee-bumping)附加一个额外费用的子交易。锚定子交易支付真实费用；原始承诺交易被拖带着一起确认。

好处：

- **通道在任何费率市场下都可关闭。** 不再有"因为签名后费率飙升而无法关闭"的情况。
- **减少预签名费用浪费。** 承诺可以以最低费用签名，然后仅在实际广播时提升。
- **更好的韧性。** 费率风暴期间的强制关闭现在可靠运作。

锚定承诺在 2021-2022 年左右成为 BOLT 规范标准，现在是现代闪电网络实现的默认选项。不使用锚定承诺的旧通道仍在运行，但正逐渐被替换。如果你在 2026 年开新通道，除非配置有问题，否则都是基于锚定的。
