---
title: "Eltoo"
slug: eltoo
draft: false
shortDefinition: "一种提议的闪电网络通道更新机制（需要 ANYPREVOUT），消除惩罚交易的需求。"
keyTakeaways:
  - "移除基于惩罚的过期状态处理方式"
  - "依赖 ANYPREVOUT 来引用最新的有效交易"
  - "简化闪电网络的争议机制以实现更安全的通道更新"
sources: []
relatedTerms:
  - anyprevout
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - payment-channel
  - penalty-transaction
liveWidget: ~
---

Eltoo（有时写作 L2 或"Eltoo 通道"）是[闪电网络](/glossary/lightning-network)通道的替代设计方案，将显著简化其安全模型。由 Christian Decker、Rusty Russell 和 Olaoluwa Osuntokun 设计，需要尚未激活的比特币软分叉。

Eltoo 解决的问题：当前闪电通道使用**基于惩罚**的争议机制。如果你广播旧通道状态（声称比你实际更富有），你的对手方可以拿走*所有*通道资金作为惩罚。这有效但有代价：

- **不对称通道状态。** 每方持有不同版本的承诺交易，使通道逻辑复杂化。
- **运营压力。** 如果你意外从备份发布旧状态，你会丢失所有通道资金。备份管理必须非常小心。
- **瞭望塔复杂性。** 你离线时需要第三方代你监控链上，准备好在对手方作弊时发布惩罚。

Eltoo 的方法：不是惩罚作弊者，**让任何一方通过发布最新状态来使旧状态失效**。最新签名的状态简单地覆盖任何早期状态，无论谁尝试广播什么。不需要惩罚。

这实现了什么：

- **对称通道。** 双方持有相同的承诺状态，简化逻辑。
- **更容易的备份。** 重新发布旧状态不会让你损失任何东西；它只是被覆盖。
- **更简单的瞭望塔。** 监控逻辑变为"发布最新已知状态"而非"检测并惩罚作弊"。
- **更好的多方构造。** 通道工厂、多方通道和其他高级二层设计变得更实际。

它需要什么：**ANYPREVOUT**，一种新的 SIGHASH 变体，允许签名交易应用于链中任何先前的承诺交易。ANYPREVOUT 记录在 [BIP-118](https://github.com/bitcoin/bips/blob/master/bip-0118.mediawiki) 中。它是一个提议的[软分叉](/glossary/soft-fork)但像其他契约相关提案一样，尚未建立足够广泛的共识来激活。

如果 ANYPREVOUT 激活，Eltoo 通道将可以在当前闪电通道设计旁边部署（最终取代）。在此之前，Eltoo 是人们想要比特币脚本更灵活的最有说服力的理由之一。
