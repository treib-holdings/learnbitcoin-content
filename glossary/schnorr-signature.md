---
title: "Schnorr 签名"
slug: schnorr-signature
draft: false
shortDefinition: "随 Taproot 一起引入的更高效签名方案，支持密钥聚合和签名聚合，可提升隐私并降低手续费。"
keyTakeaways:
  - "减小多签交易的体积"
  - "比 ECDSA 更容易证明正确性，具有独特的代数性质"
  - "是 MuSig/MAST 等高级功能的基础"
sources: []
relatedTerms:
  - taproot
  - bip-342-tapscript
  - constant-time
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - mono-signature
  - musig
  - musig2
  - post-quantum-bitcoin
  - psbt
  - shors-algorithm
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://en.wikipedia.org/wiki/Schnorr_signature"
  - "https://www.wikidata.org/wiki/Q1465057"
  - "https://en.bitcoin.it/wiki/Schnorr"
  - "https://bitcoinops.org/en/topics/schnorr-signatures/"
liveWidget: ~
---

Schnorr 签名是比特币的现代签名方案，于 2021 年 11 月随 [Taproot](/glossary/taproot) 一起通过 [BIP-340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki) 激活。对于任何使用 Taproot 地址（以 `bc1p` 开头）的输出，它取代了 [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm)。

Schnorr 相对于 ECDSA 的优势：

- **线性特性。** Schnorr 签名在数学上是线性的：两个有效签名之和也是对应密钥之和的有效签名。这听起来很抽象，但它解锁了[签名聚合](/glossary/signature-aggregation)，这是最大的实际收益。
- **跨签名者的单签名聚合。** 在 Schnorr 下通过 MuSig2 协议实现的 5-of-5 多签，在链上表现为单个签名——与单签名花费无法区分。以前的 5-of-5 需要五个签名，而且在区块中一眼就能看出来；现在看起来就像一个人在花钱。隐私和空间双省。
- **更小的签名。** Schnorr 签名为 64 字节，而 ECDSA 为可变的 70-72 字节。省区块空间，省手续费。
- **更清晰的安全证明。** Schnorr 在标准假设下比 ECDSA 有更严格的安全证明，密码学家对此更满意。
- **无延展性。** Schnorr 签名对于给定的密钥和消息是唯一的——困扰 ECDSA 的延展性问题不复存在。

生产级 Schnorr 实现——以比特币的 libsecp256k1 为代表——在签名路径上需要严格的[常量时间](/glossary/constant-time)纪律，以避免通过时序或缓存访问侧信道泄露密钥材料。数学是干净的；在真实硬件上防御它则需要另一套工程能力。

比特币最初没有使用 Schnorr 的原因：在中本聪设计比特币时，Schnorr 签名仍受专利保护。专利于 2008 年到期（就在白皮书发布之后），社区花了十多年时间来设计、审查和部署它。等待是值得的——Schnorr 现在被认为是生产密码学中最干净的签名方案之一。

Schnorr 继承了 ECDSA 的椭圆曲线离散对数假设，因此也继承了其量子脆弱性。一台足够强大的量子计算机运行 [Shor 算法](/glossary/shors-algorithm)可以破解这两种方案。参见[后量子比特币](/glossary/post-quantum-bitcoin)了解迁移框架。

参见[签名聚合](/glossary/signature-aggregation)了解线性特性带来的好处，以及 [Taproot](/glossary/taproot) 了解将 Schnorr 引入比特币的软分叉。
