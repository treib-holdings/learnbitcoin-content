---
title: "后量子比特币（Post-Quantum Bitcoin）"
slug: post-quantum-bitcoin
draft: false
published: "2026-06-01"
shortDefinition: "比特币在足够强大的量子计算机面前保持安全所需的协议变更集合——集中在签名方案，而非哈希函数。"
keyTakeaways:
  - "比特币的量子风险在于签名（ECDSA、Schnorr），而非哈希函数（SHA-256）"
  - "超过 34% 的 BTC 存放在公钥已揭示的地址——一旦 CRQC 到来即可被量子花费"
  - "NIST 已标准化两种 PQ 签名候选方案（ML-DSA、SLH-DSA）；比特币尚未承诺选择哪种"
sources: []
relatedTerms:
  - shors-algorithm
  - grovers-algorithm
  - crqc-cryptographically-relevant-quantum-computer
  - bip-361
  - ml-dsa-dilithium
  - slh-dsa-sphincs-plus
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - elliptic-curve
  - hash
  - p2pk-pay-public-key
  - address-reuse
liveWidget: ~
---

比特币的密码学不是为量子计算机设计的。后量子比特币是需要在量子计算机到来之前完成的协议变更的总称——具体来说，是将签名方案（[ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) 和 [Schnorr](/glossary/schnorr-signature)）替换为不会在 [Shor 算法](/glossary/shors-algorithm)下崩溃的方案。

威胁是具体的，数学是公开的，迁移正在进行中。目前尚未达成共识。

## 什么面临风险

比特币的签名方案——ECDSA 和 Schnorr，都在 [secp256k1 椭圆曲线](/glossary/elliptic-curve)上——依赖于离散对数问题计算困难的假设。一台足够大的量子计算机运行 Shor 算法直接打破这个假设：给定[公钥](/glossary/public-key)，算法在多项式时间内推导出私钥。

这是根本性的暴露。任何公钥已在链上揭示的 UTXO 在理论上都可以被拥有这样机器的人花费。

## 什么不受影响

比特币的哈希函数——[SHA-256](/glossary/hash)——被 [Grover 算法](/glossary/grovers-algorithm)削弱但未被破解，该算法在非结构化搜索上提供二次加速。有效安全性从 256 位降到约 128 位。这仍然非常强——128 位安全是对称密码学中其他地方的标准底线。

功能上：

- **工作量证明存活。** 量子矿工获得平方根加速，而非压倒性优势。
- **哈希地址类型（[P2PKH](/glossary/p2pkh-pay-public-key-hash)、[P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash)）**在公钥未揭示时存活。
- **2100 万供应上限不受威胁。** 量子 enables 被暴露币的被盗，而非新币的铸造。

## 当前的暴露面

[BIP-361](/glossary/bip-361) 估计**超过 34% 的比特币**存放在公钥已揭示的地址。暴露分为三类：

- **[P2PK 输出](/glossary/p2pk-pay-public-key)**——早期比特币（主要是 2009-2010 年的挖矿奖励，包括中本聪的大部分）。公钥在输出创建时就在链上。
- **重复使用的 P2PKH / P2WPKH 地址**——一旦花费，公钥永久揭示。留在该地址或返回该地址的币被暴露。参见[地址重复使用](/glossary/address-reuse)了解原因。
- **P2TR（[Taproot](/glossary/taproot)）输出**——地址*就是* bech32m 中的调整后公钥。前面没有哈希层。在任何花费之前，创建时就暴露了。

从未花费的 P2PKH 和 P2WPKH 地址在今天是量子安全的。公钥被哈希了；只有花费交易才揭示它。

## 迁移进行中

NIST 于 2024 年 8 月最终确定了两个后量子签名标准——[FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)（[ML-DSA](/glossary/ml-dsa-dilithium)，基于 Dilithium）和 [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)（[SLH-DSA](/glossary/slh-dsa-sphincs-plus)，基于 SPHINCS+）。第三个（Falcon，将成为 FN-DSA）仍在标准化中。

对于比特币，迁移框架是 [BIP-361](/glossary/bip-361)——一个草案提案，通过两阶段软分叉在五年内逐步淘汰 ECDSA 和 Schnorr 花费。PQ 签名方案本身推迟到单独的"待定后量子签名 BIP"，尚未发布。

值得一提的后果：在 BIP-361 的 B 阶段下，[中本聪](/glossary/satoshi-nakamoto)的 P2PK 输出在没有基于种子的救援情况下将变得不可花费。任何无法提供 BIP-32 派生证明的人——包括仍然沉默的中本聪——的币将永久锁定。这是这是特性还是缺陷是辩论中最激烈的部分。

## 时间线

对[密码学相关量子计算机（CRQC）](/glossary/crqc-cryptographically-relevant-quantum-computer)何时到来的估计从"最早 2027 年"（Aggarwal 等，2017）到数十年后不等。BIP-361 的作者引用学术路线图指向 2027-2030 年。悲观估计将时间推到 2040 年代或更晚。

原则是为乐观情况做计划。乐观情况自 2017 年以来一直是"最早 2027 年"，随着量子进展遇到纠错的工程现实，这个门槛一直在向前推。趋势线指向最终具备能力——问题是何时，而非是否。BIP-361 中的五年迁移窗口不是偏执；这大约是协调钱包、交易所和托管人在新签名方案上实际需要的时间。

深入探索 [Quantum and Bitcoin rabbit hole](/rabbit-hole/quantum-and-bitcoin)——完整的暴露测量、什么是和什么不是风险、诚实的时间线，以及今天实际应该做什么。

规范：[BIP-361](https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki)。NIST：[Post-Quantum Cryptography Project](https://csrc.nist.gov/projects/post-quantum-cryptography)。
