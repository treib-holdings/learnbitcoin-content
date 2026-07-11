---
title: "低 S 签名——消除 ECDSA 签名可延展性的规则"
slug: low-s-signatures
draft: false
shortDefinition: "对于每个有效的 ECDSA 签名，都存在另一个有效的签名。低 S 规则消除了这种歧义——以下是它如何工作以及为什么重要。"
keyTakeaways:
  - "消单一 ECDSA 签名的多种有效编码"
  - "通过标准化 S 值遏制可延展性"
  - "在 BIP 66 和相关更新后成为比特币的标准"
sources: []
relatedTerms:
  - bip-66
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - low-r-signatures
  - schnorr-signature
liveWidget: ~
---

ECDSA 签名有一种固有的可延展性：对于任何有效的 (r, s) 对，(r, n-s)（其中 n 是 secp256k1 曲线阶）也是同一消息的有效签名。攻击者可以抓取你未确认的交易，翻转 S，然后广播一个含义相同但 txid 不同的签名。

低 S 规则固定了一种规范形式。要求 s 小于等于 n/2，可能 S 值的高半部分就变为无效。现在每个（密钥，消息）对恰好有一个低 S 签名。

历史：作为 BIP 62（从未作为统一的可延展性修复激活）的一部分提出，通过 BIP 146 作为中继策略执行，并通过 BIP 141 对 SegWit 输入成为共识强制。SegWit 之前的传统输入在共识规则上技术上仍接受高 S，但中继策略使高 S 交易非标准，因此不会传播。

结合 BIP 66 严格 DER 编码和 SegWit 将签名数据与 txid 哈希分离，低 S 有效地消除了比特币上实际的签名可延展性。
