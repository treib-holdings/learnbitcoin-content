---
title: "Shor 算法"
slug: shors-algorithm
draft: false
published: "2026-06-01"
shortDefinition: "一种量子算法，在足够大的量子计算机上可以破解椭圆曲线密码学——因此也破解比特币的 ECDSA 和 Schnorr 签名。"
keyTakeaways:
  - "在足够的纠错量子比特下可以破解椭圆曲线密码学（以及 RSA）"
  - "是比特币的 ECDSA 和 Schnorr 签名必须在 CRQC 到来之前被替换的具体原因"
  - "算法原理上可行；但运行在密码学相关规模上的硬件尚不存在"
sources: []
relatedTerms:
  - post-quantum-bitcoin
  - grovers-algorithm
  - crqc-cryptographically-relevant-quantum-computer
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - elliptic-curve
  - bip-361
  - p2pk-pay-public-key
  - public-key
liveWidget: ~
---

Shor 算法由 Peter Shor 于 1994 年发表，是"后量子比特币"成为话题的根本原因。这种量子算法使一台足够大的量子计算机成为当今大多数公钥密码学的生存威胁——包括比特币的。它能高效解决经典计算机无法解决的两个问题：整数分解（破解 RSA）和离散对数问题（破解椭圆曲线密码学，包括 [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) 和 [Schnorr](/glossary/schnorr-signature)）。

## 它做什么

比特币的签名方案基于一个假设：给定 [secp256k1 曲线](/glossary/elliptic-curve)上的一个[公钥](/glossary/public-key)，推导对应的私钥在计算上不可行。经典计算机上最好的已知攻击时间是密钥大小的指数级——对 256 位曲线大约 2^128 次运算。实际上是无限的。

Shor 算法将其降为多项式时间。在一台有足够稳定的纠错量子比特的量子计算机上，从公钥推导 secp256k1 私钥变得可行——几分钟到几小时，而非数万亿年。

数学核心是找到一个模一个困难数定义的函数的周期。经典计算机对此束手无策；量子计算机利用叠加和量子傅里叶变换高效找到周期。整数分解和离散对数都可以归约为周期查找。两者都被 Shor 算法攻破。

## 为什么它是比特币的具体威胁

比特币密码学中有两个部分直接脆弱：

- **ECDSA**（自 2009 年以来的交易签名）：私钥可通过 Shor 算法从任何暴露的公钥推导。
- **Schnorr 签名**（自 [Taproot](/glossary/taproot) 起使用，[BIP-340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)）：相同的椭圆曲线底层假设，相同的脆弱性。

在链上暴露公钥的地址类型——[P2PK](/glossary/p2pk-pay-public-key)、重复使用的 P2PKH/P2WPKH、所有 P2TR（Taproot）输出——目前处于攻击面内。任何运行节点的人都可以看到公钥；只有缺乏足够大的量子计算机在保护这些币。

Shor 算法*不*直接威胁的：比特币的哈希函数（[SHA-256](/glossary/hash)）和[工作量证明](/glossary/proof-work-pow)机制。它们面对的是 [Grover 算法](/glossary/grovers-algorithm)——一种弱得多的量子威胁。

## 需要多大规模

对 256 位椭圆曲线运行 Shor 算法大约需要数千个纠错（逻辑）量子比特，跨数百万门操作的持续量子相干性，以及足够高的门保真度使得纠错开销不会失控。参见 [CRQC](/glossary/crqc-cryptographically-relevant-quantum-computer)了解具体阈值以及当前硬件与该标准之间的差距。

简短版本：今天的量子系统与"能在比特币相关规模上运行 Shor 算法的硬件"之间，在多个维度上（量子比特数、错误率、相干时间）相隔数个数量级。

## 当前状态

Shor 算法已在实验中对小数字（15、21，有时更大）进行了因数分解。这些演示在数学上是有效的，但规模微不足道。没有公开演示接近密码学相关密钥规模的因数分解或离散对数求解。

竞赛在工程层面而非算法层面。算法已存在且原理上可行。建造能大规模运行它的硬件是未解之谜——也是每个 [CRQC](/glossary/crqc-cryptographically-relevant-quantum-computer)时间表估计的基础。

参见[量子与比特币深度指南](/rabbit-hole/quantum-and-bitcoin)了解 Shor 算法实际威胁比特币的部分——暴露公钥的供应量，已量化。
