---
title: "ECDSA（椭圆曲线数字签名算法）"
slug: ecdsa-elliptic-curve-digital-signature-algorithm
draft: false
shortDefinition: "比特币最初的签名方案，用于验证所有权，在 Taproot 的 Schnorr 签名之前使用。"
keyTakeaways:
  - "基于椭圆曲线的交易签名方法"
  - "构成了比特币密码安全的基石"
  - "Schnorr 签名现已共存，带来潜在优势"
sources: []
relatedTerms:
  - adapter-signature
  - bip-66
  - constant-time
  - elliptic-curve
  - musig
  - musig2
  - post-quantum-bitcoin
  - schnorr-signature
  - shors-algorithm
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"
  - "https://www.wikidata.org/wiki/Q915079"
  - "https://en.bitcoin.it/wiki/ECDSA"
liveWidget: ~
---

ECDSA 是比特币最初的数字签名方案。自 2009 年以来，网络就是通过它来验证花费 UTXO 的人是否真正控制了该 UTXO 发送到的[私钥](/glossary/private-key)。

机制建立在 [secp256k1 椭圆曲线](/glossary/elliptic-curve)上。大致：

1. 拥有私钥 `k` 的签名者产生签名 `(r, s)`，取决于 `k`、被签名的消息和随机选择的 nonce。
2. 任何拥有相应[公钥](/glossary/public-key)的人都可以验证签名在数学上是一致的——意味着签名者必须知道 `k`。
3. 验证者在此过程中不会了解 `k` 的任何信息。

生产 ECDSA 实现还必须遵循严格的[常数时间](/glossary/constant-time)纪律：签名中的模乘步骤如果朴素实现会通过时序泄露密钥位。Bitcoin Core 的 libsecp256k1 是生产密码学中经过最精心工程的常数时间签名器之一。

ECDSA 可用，但有一些烦恼：

- **签名可塑性。** 给定签名 `(r, s)` 可以简单地变为 `(r, n - s)`，其中 `n` 是曲线阶。两者对同一密钥和同一消息都验证通过。这给交易 ID 稳定性带来了真正的麻烦，部分由 [SegWit](/glossary/segwit-segregated-witness-bip-141) 修复。
- **无原生聚合。** 多签输出上的五个共同签名者产生五个独立签名，每个都占用链上空间。没有简洁的压缩方式。
- **证明稍显尴尬。** ECDSA 的可证明安全结果比 Schnorr 更杂乱。

[Schnorr 签名](/glossary/schnorr-signature)随 [Taproot](/glossary/taproot) 于 2021 年 11 月激活，解决了所有三个问题。ECDSA 仍用于旧版地址类型（P2PKH、P2SH、P2WPKH、P2WSH），仍是生产比特币中测试最充分的签名方案。新的 Taproot 输出默认使用 Schnorr。

ECDSA 的安全性依赖于椭圆曲线离散对数问题的计算困难性。这一假设在足够强大的量子计算机上运行 [Shor 算法](/glossary/shors-algorithm)时会被打破。迁移框架参见[后量子比特币](/glossary/post-quantum-bitcoin)。
