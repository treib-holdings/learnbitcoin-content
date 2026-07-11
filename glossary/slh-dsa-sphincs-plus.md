---
title: "SLH-DSA / SPHINCS+（FIPS 205）"
slug: slh-dsa-sphincs-plus
draft: false
published: "2026-06-01"
shortDefinition: "NIST 标准化的基于哈希的后量子签名方案——ML-DSA 的保守备选方案，安全假设更强但签名体积大得多。"
keyTakeaways:
  - "NIST 标准化的基于哈希的后量子签名方案（FIPS 205，2024 年 8 月）"
  - "签名比当前比特币签名大 100-800 倍"
  - "在比特币后量子讨论中作为 ML-DSA 的保守备选——价值在于哈希函数安全模型，而非效率"
sources: []
relatedTerms:
  - post-quantum-bitcoin
  - bip-361
  - ml-dsa-dilithium
  - shors-algorithm
  - grovers-algorithm
  - hash
liveWidget: ~
---

SLH-DSA——无状态基于哈希的数字签名算法——是 NIST 于 2024 年 8 月最终确定为 [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) 的后量子签名标准。它基于 SPHINCS+，一个从产生 [ML-DSA](/glossary/ml-dsa-dilithium) 的同一 NIST 竞赛中脱颖而出的基于哈希的方案。在比特币的后量子讨论中，SLH-DSA 是保守备选——当认为基于格的方案在密码学上太新时选择它，更安全的选择是基于哈希的安全性。

## 它是什么

SLH-DSA 从哈希函数组合中构造签名——一次性签名的 Merkle 树，递归构建。安全假设是找到[哈希](/glossary/hash)碰撞和原像的难度，[Grover 算法](/glossary/grovers-algorithm)将其减半但不会破解。

三个安全级别已标准化，每个有"小"和"快"变体（以签名大小换验证速度）：

- **SLH-DSA-128s**：约 7,856 字节签名，约 128 位安全性，签名速度慢
- **SLH-DSA-128f**：约 17,088 字节签名，约 128 位安全性，签名速度快
- **SLH-DSA-256s**：约 29,792 字节签名，约 256 位安全性
- **SLH-DSA-256f**：约 49,856 字节签名，约 256 位安全性

公钥很小（约 32-64 字节）；签名大小是成本所在。

## 基于哈希 vs 基于格

SLH-DSA 的安全模型与 ML-DSA 根本不同：

- **ML-DSA**：安全性来自格问题的假设难度。数学上研究充分，但在密码学上比哈希函数年轻。
- **SLH-DSA**：安全性来自求逆哈希函数（单向函数）的假设难度。哈希函数是最古老、研究最充分、最可信的密码学原语之一。

权衡：基于哈希的方案是保守的——建立在有数十年分析的密码学原语之上。但签名体积代价巨大。基于格的方案更高效，但依赖于更年轻的密码分析领域，未来突破的可能性更大。

如果你想要不会被任何我们目前不知道存在的算法破解的签名，SLH-DSA 是保守选择。如果你想要实际效率，ML-DSA 胜出。

## 权衡

与比特币当前方案相比：

- [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) 签名：约 71-72 字节
- [Schnorr](/glossary/schnorr-signature) 签名：64 字节
- SLH-DSA-128s 签名：约 7,856 字节——大 100 多倍
- SLH-DSA-256f 签名：约 49,856 字节——大近 800 倍

在比特币的规模下，全面迁移到 SLH-DSA 将使交易体积膨胀，并显著压缩有效区块容量。最大的参数集对一般比特币交易来说可以说是不切实际的；最小的仍然比 ML-DSA 签名大约 10 倍。

因此，SLH-DSA 在比特币中的理由是保守密码学，而非效率。如果社区希望最大程度确信没有任何未来的密码分析突破能威胁网络——以区块空间经济为代价——它会是选择。

## 在比特币迁移讨论中的位置

SLH-DSA 是第二个 NIST 标准化的后量子签名方案，是基于哈希的 ML-DSA 替代方案。在比特币讨论中，通常被提及为：

- 如果格方案后来被经典攻击破解的备选
- 用于高价值或长生命周期交易，保守安全比手续费更重要
- 混合方案的可能组件——同一笔交易上来自不同安全假设的多个签名

[BIP-361](/glossary/bip-361)的"TBD Post Quantum Signature BIP"尚未发布，因此比特币对 SLH-DSA 的正式立场尚未确定。当前讨论倾向于以 ML-DSA 为默认，SLH-DSA 为备选。

参见[量子与比特币深度指南](/rabbit-hole/quantum-and-bitcoin)了解候选方案之间的区块空间权衡。

规范：[FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)（NIST CSRC）。
