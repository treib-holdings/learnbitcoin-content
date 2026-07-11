---
title: "BIP 75（支付协议增强）"
slug: bip-75-payment-protocol-enhancements
draft: false
shortDefinition: "用身份验证和通信改进扩展 BIP 70，但从未获得广泛使用。"
keyTakeaways:
  - "为 BIP 70 添加身份和通信功能"
  - "因类似的信任/复杂性问题从未获得 traction"
  - "商户协议如何远离 CA 的案例"
sources: []
relatedTerms:
  - address
  - bip-bitcoin-improvement-proposal
  - bip-70-payment-protocol
  - bitcoin-core
  - transaction
  - transaction-fee
liveWidget: ~
---

BIP 75 是 BIP 70 的二次扩展。它在 BIP 70 的签名支付请求之上添加了接收方身份、加密存储转发消息和基于 PKI 的认证。推销词：让比特币支付感觉像两个已识别方之间的电子邮件交换。

它继承了 BIP 70 失败的每一个原因。信任模型仍然依赖 X.509 证书授权，而比特币用户对此毫无胃口。协议实现繁重，隐私故事将身份回传给商户，到 BIP 75 起草时（2016 年），钱包生态系统已经在转向普通 `bitcoin:` URI 和[闪电发票](/glossary/lightning-invoice)。

2026 年，"向商户发送支付"的实际答案是闪电发票或 BOLT-12 offer（可复用、付款方匿名、无 CA）。BIP 75 闲置不用，是生态系统刻意没走的岔路。

规范：[BIP-75](https://github.com/bitcoin/bips/blob/master/bip-0075.mediawiki)。
