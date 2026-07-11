---
title: "BIP 70（支付协议）"
slug: bip-70-payment-protocol
draft: false
shortDefinition: "规定了商户支付请求协议，现因安全和隐私问题基本被弃用。"
keyTakeaways:
  - "创建了商户支付请求标准"
  - "最终因安全缺陷而失宠"
  - "大多数现代钱包不再支持"
sources: []
relatedTerms:
  - address
  - bip-bitcoin-improvement-proposal
  - bip-75-payment-protocol-enhancements
  - bitcoin-core
  - transaction
  - transaction-fee
liveWidget: ~
---

BIP 70 试图让比特币支付感觉像刷卡支付。商户生成签名支付请求，钱包显示"支付给 Acme 公司"（通过 X.509 证书授权链验证），用户批准，钱包将签名交易发布回商户 URL。

它因通常的原因而死。签名模型依赖 CA——正是比特币用户几乎不信任的 CA 系统。"回拨"支付确认每次交易都向商户泄露买方的 IP 和时间。实现复杂性导致钱包悄悄放弃支持。Bitcoin Core 在 0.18（2019 年）中弃用了 BIP 70，在 0.20 中移除。

替代方案更简单。`bitcoin:` URI（`bitcoin:bc1q...?amount=0.01&label=Acme`）用一个二维码覆盖了大多数链上商户流程。对于交互式支付，[闪电发票](/glossary/lightning-invoice)和 BOLT-12 offer 做了 BIP 70 追求的用户体验工作，无需 CA 信任、无需泄露身份的回拨，并将支付证明内嵌于协议而非外挂。

规范：[BIP-70](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki)。
