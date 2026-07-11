---
title: "静默支付"
slug: silent-payments
draft: false
shortDefinition: "Chris Belcher 提出的 BIP 47 支付码增强方案，让发送方代表接收方生成唯一地址，无需地址重用。"
keyTakeaways:
  - "无需显式握手即可为每笔支付生成新地址"
  - "向链上观察者隐藏支付码的使用"
  - "由 Chris Belcher 提出，改进了 BIP 47 模型"
sources: []
relatedTerms:
  - address
  - address-derivation-path
  - address-reuse
  - fungibility
  - stealth-address
liveWidget: ~
---

静默支付是一种隐私机制，规范于 [BIP-352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki)，让接收方发布一个可重复使用的"静默支付地址"，而不牺牲每笔交易使用新地址的隐私优势。

机制简述：

1. 接收方发布一个长期使用的静默支付公钥（编码为 `sp1...` 地址）。
2. 发送方将自己的私钥与接收方的静默支付密钥结合（一种 ECDH 式操作），为每笔支付派生一个唯一的链上目的地。
3. 接收方扫描链上匹配派生模式的输出，找到自己的支付。

相比替代方案，这带来了什么：

- **链上无地址重用。** 每笔支付落在一个唯一的 [Taproot](/glossary/taproot) 输出上。链上观察者看到的是正常的单次使用地址。
- **无需通知交易。** 旧的支付码系统如 [BIP-47](/glossary/bip-47-payment-codes) 需要一笔单独的链上"通知"交易，公开暴露了用户在使用支付码。静默支付没有这种握手；发送方的派生是不可见的。
- **无需协议变更。** 静默支付使用现有的比特币脚本原语。它是钱包层协议，不是软分叉。

代价是接收方的扫描成本。要找到支付，接收方钱包必须对照其静默支付密钥检查链上的每笔 Taproot 交易。在全节点或强力服务器上可行，在轻钱包上则不太理想。

BIP-352 于 2023 年正式采纳。截至 2026 年，多个钱包和节点实现已支持静默支付；更广泛的采用正在进行中。它是目前比特币上最可信的实际"隐身地址"机制。

参见[隐身地址](/glossary/stealth-address)了解历史背景，以及[地址重用](/glossary/address-reuse)了解它解决的问题。
