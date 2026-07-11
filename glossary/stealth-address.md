---
title: "隐身地址"
slug: stealth-address
draft: false
shortDefinition: "一种隐私方案，让接收方分享一个隐身公钥，为每笔支付生成新地址。在比特币中不是标准功能。"
keyTakeaways:
  - "从单个公钥在底层生成新地址"
  - "提升隐私但需要接收方持续扫描链上数据"
  - "大部分被 BIP 47或其他高级隐私提案所掩盖"
sources: []
relatedTerms:
  - address-reuse
  - coinjoin
  - fungibility
  - key-rotation
  - mixing-service
  - payjoin
  - security
  - shielded-coinjoin
  - silent-payments
liveWidget: ~
---

隐身地址是一种隐私原语：接收方发布一个长期使用的公钥，发送方从该公钥为每笔支付派生一个新的链上[地址](/glossary/address)。接收方扫描链上匹配其密钥的输出，找到支付，而无需发布静态接收地址。

这个密码学想法在比特币讨论中自 2014 年就存在，但从未进入基础协议。原因：

- **接收方扫描成本高。** 要找到你的支付，你必须对照你的隐身密钥检查链上的每笔交易。在有完整链数据的服务器上可行，但对轻钱包和带宽受限的用户来说很别扭。
- **双向握手变体**（如 [BIP-47 支付码](/glossary/bip-47-payment-codes)）需要一笔"通知"交易，本身就暴露了你在使用支付码——泄露了另一种元数据。

Monero 默认将隐身地址内建于协议中。比特币历史上将其留给钱包层约定和 BIP-47，后者的采用有限。

现代复兴是**[静默支付](/glossary/silent-payments)**（[BIP-352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki)，2023 年），改进了隐身地址的想法，使其能在比特币现有的 Taproot 基础设施上干净地工作。静默支付是 2026 年钱包中实际在出货的隐身地址概念。

参见[静默支付](/glossary/silent-payments)了解这一想法在 2026 年的实际版本。
