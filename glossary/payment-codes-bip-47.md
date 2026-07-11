---
title: "支付码（Payment Codes，BIP 47）"
slug: payment-codes-bip-47
draft: false
shortDefinition: "可重复使用的标识符，支持隐私支付而无需暴露静态地址，避免地址重复使用。"
keyTakeaways:
  - "一个支付码为每笔支付生成新地址"
  - "防止地址重复使用导致的隐私泄露"
  - "需要一笔通知交易在双方之间同步支付码"
sources: []
relatedTerms:
  - address-reuse
  - bip-47-payment-codes
  - bip-bitcoin-improvement-proposal
  - silent-payments
  - stealth-address
liveWidget: ~
---

支付码是 [BIP-47](/glossary/bip-47-payment-codes) 中定义的可重复使用收款标识符。用户发布一个长期使用的支付码（例如 `PM8T...`）；发送方通过 ECDH 将其与自己的密钥组合，为每笔支付派生一个唯一的链上[地址](/glossary/address)。接收方扫描这些派生地址；发送方从自己的派生过程中知道地址。

隐私目标：避免[地址重复使用](/glossary/address-reuse)，同时不强迫用户每次收款时都分享一个新地址。

限制 BIP-47 采用的难点：每对新的发送方-接收方都必须在链上发布一次**通知交易**。这笔通知是一笔实际的比特币交易，"介绍"发送方向接收方，并交换未来 ECDH 派生所需的密码学上下文。一旦通知存在，同一双方之间的后续支付发生在唯一地址上，无需进一步的链上握手。但通知*本身*是一种隐私泄露——它公开告诉观察者"这两方已建立了支付码关系。"

BIP-47 的现状：

- **Samourai Wallet** 将其作为主要的隐私收款流程，直到 2024 年团队被起诉和平台关闭。
- **少数其他钱包**出于向后兼容性保留支持。
- **现代继任者 [Silent Payments](/glossary/silent-payments)（BIP-352）**实现了相同的"一个码，多个地址"目标，无需任何通知交易——只发布静默支付地址，使用基于 Taproot 的巧妙派生，不需要握手。

BIP-47 现在最好被理解为历史概念验证：在设计空间中有用，技术上可行，但基本上已被更好的继任者取代。寻找可重复使用隐私收款地址的新用户应该关注 Silent Payments。参见 [Silent Payments](/glossary/silent-payments) 了解现代等价方案。

注意：本条目与 [BIP-47（Payment Codes）](/glossary/bip-47-payment-codes)部分重叠。它们从略有不同的角度涵盖同一概念。
