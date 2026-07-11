---
title: "ML-DSA / Dilithium (FIPS 204)"
slug: ml-dsa-dilithium
draft: false
published: "2026-06-01"
shortDefinition: "NIST 标准化的基于格的后量子签名方案——替代比特币 ECDSA/Schnorr 签名的主要候选。"
keyTakeaways:
  - "NIST 标准化的基于格的后量子签名方案（FIPS 204，2024 年 8 月）"
  - "签名比当前比特币签名大约 50 倍（约 3KB 对比 64 字节）"
  - "比特币后量子迁移的主要候选，但尚未正式提出"
sources: []
relatedTerms:
  - post-quantum-bitcoin
  - bip-361
  - slh-dsa-sphincs-plus
  - shors-algorithm
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - public-key
  - elliptic-curve
liveWidget: ~
---

ML-DSA——Module-Lattice-Based Digital Signature Algorithm（基于模块格的数字签名算法）——是 NIST 于 2024 年 8 月最终确定为 [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) 的后量子签名标准。它基于 CRYSTALS-Dilithium，赢得 NIST 后量子签名竞赛的格密码学方案。在比特币迁移讨论中，ML-DSA 是被引用最多的替代 [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) 和 [Schnorr](/glossary/schnorr-signature) 的候选。

## 它是什么

ML-DSA 是一种数字签名方案，其安全性取决于格问题的硬度——具体是 Module Learning With Errors (MLWE) 和 Module Short Integer Solution (MSIS) 问题。这些问题被认为即使对量子计算机也是困难的；[Shor 算法](/glossary/shors-algorithm) 对格问题不像对椭圆曲线离散对数那样适用。

该方案使用模块格上的多项式算术生成签名。标准化了三组参数：

- **ML-DSA-44**：约 128 位安全，约 2,420 字节签名
- **ML-DSA-65**：约 192 位安全，约 3,293 字节签名
- **ML-DSA-87**：约 256 位安全，约 4,595 字节签名

[公钥](/glossary/public-key)从约 1,300 到约 2,600 字节不等，取决于参数集。

## 基于格的假设

ML-DSA 背后的安全假设与 ECDSA 的性质不同。ECDSA 假设离散对数问题是困难的；该假设在 [CRQC](/glossary/crqc-cryptographically-relevant-quantum-computer) 上失效。格问题——在高维格中寻找短向量或求解带噪线性方程组——不知道有任何量子算法可以高效求解。

这不是保证。格密码学比 RSA 和 ECDSA 年轻；密码学界对其攻击的集体经验较少。未来突破（量子或经典）可能削弱特定方案。NIST 的标准化反映了当前共识：格问题在后量子签名中提供了安全性和实用性的最佳平衡——并非它们被证明不可破解。

## 权衡

与比特币当前方案相比：

- ECDSA 签名（链上 DER 编码）：约 71-72 字节
- Schnorr 签名（[BIP-340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)）：恰好 64 字节
- ML-DSA-65 签名（中等参数集）：约 3,293 字节

签名大小增加约 50 倍。下游影响：

- 交易大小显著增长；手续费成比例增长
- 区块重量预算消耗更快
- 剪枝存储需求增加
- UTXO 集大小和验证成本上升

这些不是交易破坏者，但这是比特币后量子迁移不是简单即插即用的原因。区块空间经济学需要吸收更大的签名，这也是 [BIP-361](/glossary/bip-361) 两阶段迁移跨越五年的部分原因。

## 在比特币迁移讨论中的地位

BIP-361——比特币后量子迁移的活跃草案提案——与签名方案无关。它将特定后量子算法的选择推迟到尚未发布的单独"TBD Post Quantum Signature BIP"。ML-DSA 是该位置的主要候选因为：

- 它是 NIST 标准化的（FIPS 204）
- 其签名大小在当前后量子候选中最合理（[SLH-DSA / SPHINCS+](/glossary/slh-dsa-sphincs-plus) 大得多；Falcon 更小但实现更脆弱）
- 验证速度足够快，可用于比特币规模的全节点验证
- 它已在非比特币场景中部署（TLS、代码签名）

替代候选是活跃讨论的一部分。比特币的选择将在签名大小与安全假设多样性之间权衡。

请参阅[量子与比特币深入探讨](/rabbit-hole/quantum-and-bitcoin)了解候选方案的区块空间成本及选择如何做出。

规范：[FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)（NIST CSRC）。
