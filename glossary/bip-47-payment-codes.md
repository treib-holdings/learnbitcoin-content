---
title: "BIP 47（支付码）"
slug: bip-47-payment-codes
draft: false
shortDefinition: "可复用支付码系统，旨在改善隐私并避免静态地址复用。"
keyTakeaways:
  - "支持私密的可复用支付码"
  - "自动生成唯一地址"
  - "解决复用静态地址的隐私风险"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - payment-codes-bip-47
  - security
  - silent-payments
  - stealth-address
liveWidget: ~
---

[BIP-47](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki)（"可复用支付码"）定义了一个系统，接收方发布一个长期**支付码**，发送方从中为每笔支付派生新的链上[地址](/glossary/address)。目标：避免[地址复用](/glossary/address-reuse)同时仍有一个可分享的标识符。

工作方式：

1. 接收方发布其支付码（一个扩展公钥加一些元数据，编码为以 `PM...` 开头的字符串）。
2. 发送方做一次链上**通知交易**：一笔向特殊派生地址的微小支付，向接收方"介绍"发送方并交换 ECDH 地址派生所需的密码材料。
3. 从此，双方可以派生一系列唯一地址用于之间的支付，无需更多链上握手。

实践中，BIP-47 采用有限。Samourai Wallet 团队推动了它；少数其他钱包实现了它。未广泛采用的两个主要原因：

- **通知交易本身就是隐私泄露。**它告诉链上观察者"这个用户在使用支付码"，并通过那笔链上交易关联发送方和接收方。整个意义本应是隐私。
- **基础设施负担。**每个接收方需要扫描链上的通知交易，然后派生并监控所有相应地址。

现代继任者是 **[Silent Payments](/glossary/silent-payments)**（BIP-352，2023 年），在无需任何通知交易的情况下实现相同的"一个可复用码，每笔支付新地址"目标。截至 2026 年，BIP-47 主要具有历史意义；采用可复用收款码的新钱包选择 Silent Payments。
