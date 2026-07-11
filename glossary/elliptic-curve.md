---
title: "椭圆曲线"
slug: elliptic-curve
draft: false
shortDefinition: "比特币密码学（secp256k1）中用于生成公钥/私钥对的一种曲线。"
keyTakeaways:
  - "比特币公钥/私钥系统的基础数学"
  - "用于 secp256k1 上的 ECDSA 和现在的 Schnorr 签名"
  - "安全性依赖于离散对数问题的不可解性"
sources: []
relatedTerms:
  - bip-66
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - musig
  - musig2
  - post-quantum-bitcoin
  - schnorr-signature
  - shors-algorithm
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://en.wikipedia.org/wiki/Elliptic-curve_cryptography"
  - "https://www.wikidata.org/wiki/Q1048911"
liveWidget: ~
---

比特币的[公钥密码学](/glossary/public-key)建立在一条名为 **secp256k1** 的特定椭圆曲线上。Satoshi 在原始比特币设计中选择它，它一直是每个比特币签名的骨干。

相关属性：椭圆曲线让你做"单向数学"。你可以将已知曲线点 G 乘以秘密数 k 得到另一个点 P（便宜）。反方向——给定 P，找到 k——对任何现实对手来说计算上不可行。这种不对称性就是**椭圆曲线离散对数问题**，比特币的整个所有权模型依赖于它保持困难。

实践中：

- 你的[私钥](/glossary/private-key)就是 1 到大约 2^256 之间的一个数 k。
- 你的[公钥](/glossary/public-key)是 secp256k1 曲线上的点 P = k·G。
- 签署交易证明你知道 k *但不揭示它*，通过利用相同的单向数学。

存在不同的椭圆曲线（ed25519、NIST P-256 等）。比特币坚持使用 secp256k1，因为兼容性且因为作为地球上最受攻击的密码学目标之一十六年后未发现严重漏洞。

最可能的威胁是足够强大的量子计算机运行 [Shor 算法](/glossary/shors-algorithm)，原则上可以破解椭圆曲线离散对数。这是真实关注但不迫在眉睫。花费前不揭示公钥的地址类型（[P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash)、[Taproot](/glossary/taproot)）已经为那个未来提供了一些纵深防御，尽管 Taproot 是部分例外（bech32m 地址就是调整后的公钥，前面没有哈希层）。迁移框架参见[后量子比特币](/glossary/post-quantum-bitcoin)，为什么 2^256 比你的直觉大得多参见[密钥空间深入探讨](/rabbit-hole/key-space)。
