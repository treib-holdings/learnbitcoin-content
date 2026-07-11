---
title: "MuSig"
slug: musig
draft: false
shortDefinition: "基于 Schnorr 的多签方案，将多个公钥聚合为一个，减少交易大小并提升隐私。"
keyTakeaways:
  - "将多个公钥/签名聚合为一个紧凑签名"
  - "提升多方交易的隐私和手续费效率"
  - "依赖 Taproot 引入的 Schnorr 签名"
sources: []
relatedTerms:
  - psbt
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - mono-signature
  - musig2
  - partial-signature
  - quorum-signatures
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://bitcoinops.org/en/topics/musig/"
liveWidget: ~
---

MuSig 是基于 Schnorr 的 n-of-n 多签聚合协议。多个共签者交互产生一个组合公钥和一个组合签名。在链上，结果与标准单签花费无法区分。最初由 Maxwell、Poelstra、Seurin 和 Wuille 于 2018 年发表。

原始 MuSig 有一个微妙问题：让签名者同时揭示 nonce 的简单实现容易受到密钥取消攻击。修复需要三轮协议和显式 nonce 承诺。这可行，但三轮往返在运营上是痛苦的。

[MuSig2](/glossary/musig2)（2020，Nick / Ruffing / Seurin）在实践中取代了原始 MuSig。MuSig2 使用不同的数学方法在仅两轮中实现相同安全性，额外好处是第一轮可以预计算并在签名会话间重用。几乎所有现代实现说"MuSig"时实际上指的是 MuSig2。

关键属性（两个版本共有）：

- **仅 n-of-n。** 所有共签者必须参与。对于 m-of-n 阈值设置，使用 [FROST](/glossary/quorum-signatures)。
- **聚合公钥。** 组合密钥是共签者公钥的确定性函数。任何人都可以计算它；没有人需要共享私钥材料。
- **单一 64 字节签名。** 与 Taproot 单签相同大小。
- **隐私。** MuSig 花费看起来像任何其他 Taproot 密钥路径花费。共签者结构不上链。

MuSig（2）在实践中的场景：

- **Taproot 后的闪电通道。** 协作关闭可以使用 MuSig2 使链上足迹与单签花费相同。
- **托管/机构多签。** 在隐私和手续费效率重要时替代经典 2-of-2 或 3-of-3 设置。
- **联邦。** 较小的（n-of-n）联邦可以聚合；更大的阈值联邦使用 FROST。

如果你研究现代比特币多签且文档说"MuSig"，除非特别标注旧版本，否则假定是 MuSig2。原始版本现在主要是历史兴趣。
