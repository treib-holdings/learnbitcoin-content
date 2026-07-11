---
title: "MuSig2"
slug: musig2
draft: false
shortDefinition: "MuSig 的增强版本，减少了共签者之间所需的交互轮数。"
keyTakeaways:
  - "最小化多方签名的通信开销"
  - "保持 MuSig 的隐私和大小优势"
  - "适合参与者位于不同时区的协作设置"
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
  - musig
  - partial-signature
  - quorum-signatures
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://bitcoinops.org/en/topics/musig/"
liveWidget: ~
---

MuSig2 是原始 [MuSig](/glossary/musig) Schnorr 聚合协议的实际继任者，由 Jonas Nick、Tim Ruffing 和 Yannick Seurin 于 2020 年发表。它做同样的工作——将 n 个共签者聚合为一个组合公钥和一个组合签名——只需两轮通信而非三轮，额外好处是第一轮的 nonce 可以预计算并在签名会话间重用。

机械上的变化：

- **MuSig1** 需要"先承诺后揭示"nonce（三轮）：每个签名者首先发布对 nonce 的承诺，然后是实际 nonce，最后是部分签名。承诺-揭示步骤是防止密钥取消攻击的必要条件。
- **MuSig2** 每个签名者使用两个独立 nonce 而非一个，以击败相同攻击的方式组合，不需要承诺。两轮：交换 nonce 对，然后交换部分签名。

对于用户体验这是一个有意义的升级。三轮意味着每个签名者三次往返消息；两轮意味着两次。对于闪电通道开启、多签花费签名和共签者地理分布的联邦签名协议，轮数减少是"签这个东西大约需要一分钟"和"签这个东西大约需要十秒"之间的区别。

属性（与 MuSig1 共有）：

- **仅 n-of-n。** 所有共签者必须参与。对于 m-of-n 阈值设置，FROST 是类似物。
- **聚合密钥。** 共签者公钥的确定性函数。
- **64 字节签名。** 与 Taproot 单签相同大小。
- **隐私。** 链上与 Taproot 密钥路径单签花费无法区分。

MuSig2 是实际上在生产工具中发布的版本：BIP 327 于 2023 年标准化，libsecp256k1 实现，硬件钱包逐步添加支持。当人们在 2026 年说"MuSig"时几乎总是指 MuSig2。
