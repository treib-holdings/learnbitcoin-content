---
title: "签名裁剪"
slug: signature-clipping
draft: false
shortDefinition: "某些签名方案中的延展性或伪造技术。比特币中的严格 sighash 规则缓解了这些漏洞。"
keyTakeaways:
  - "指恶意篡改有效签名以改变交易 ID"
  - "严格 DER 规则（BIP 66）和 SegWit 修正了大部分延展性缺陷"
  - "说明了 ECDSA 使用中的早期漏洞"
sources: []
relatedTerms:
  - elliptic-curve
  - mono-signature
  - musig
  - musig2
  - schnorr-signature
  - signature-aggregation
  - taproot
liveWidget: ~
---

"签名裁剪"在比特币中不是一个广泛使用的术语。它是 ECDSA 签名延展性的统称：取一个有效签名，为同一笔交易产生一个不同的有效签名，从而在不改变交易含义的情况下改变 txid。

曾有两个实际的攻击向量：

- DER 编码可变性。ECDSA 签名用 DER 封装，而 DER 规范允许同一数字的多种编码（额外的填充字节、替代的整数长度表示）。[BIP 66](/glossary/bip-66)（2015）强制执行严格 DER，使非规范编码成为非标准。
- 固有 S 延展性。对于任何有效 (r, s) ECDSA 签名，(r, n-s) 对同一消息也有效。[低 S 规则](/glossary/low-s-signatures)（BIP 62 提案、BIP 146 中继策略、BIP 141 对 SegWit 的共识规则）要求 s 小于曲线阶数的一半，选择一种规范形式。

SegWit（BIP 141）在协议层面彻底解决了这个问题，将签名数据移出 txid 计算。对于 SegWit 和 Taproot 输入，无论攻击者怎么操作，签名微调都不会改变 txid。

在现代比特币中，签名延展性对新交易来说是一个已解决的问题。传统 P2PKH 继承了 ECDSA 的数学特性，但在中继层强制执行严格 DER 加低 S 后，实际攻击面已经消失。
