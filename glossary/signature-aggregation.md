---
title: "签名聚合"
slug: signature-aggregation
draft: false
shortDefinition: "将多个部分签名组合成一个最终签名（如 MuSig），减少链上数据足迹。"
keyTakeaways:
  - "将多个签名者折叠为链上的单个签名"
  - "降低手续费，提升隐私，促进多方协作设置"
  - "依赖 Schnorr 的代数特性（MuSig 等）"
sources: []
relatedTerms:
  - elliptic-curve
  - mono-signature
  - musig
  - musig2
  - schnorr-signature
  - signature-clipping
  - taproot
sameAs:
  - "https://en.bitcoin.it/wiki/Schnorr"
  - "https://bitcoinops.org/en/topics/musig/"
liveWidget: ~
---

签名聚合是一种技术，将一笔花费中的多个共同签名者合并，生成一个组合签名，链上可以用一个组合公钥来验证。链上只知道"这个输出被授权了"，但不知道有多少人参与了授权。

这只有在 [Schnorr 签名](/glossary/schnorr-signature)下才可行，因为其线性数学特性允许部分签名和部分公钥被干净地求和。旗舰聚合协议是 **MuSig2**，由 Blockstream 研究人员设计的第二代多签方案。

MuSig2 下的 3-of-3 花费流程：

1. 三个共同签名者在链下交换公钥份额和"随机数承诺"。
2. 各自对交易产生部分签名。
3. 部分签名被组合成一个 Schnorr 签名。
4. 交易以单个 64 字节签名对单个聚合公钥广播。

公开链上看到的：一笔普通的单签名 Taproot 花费。完全看不出有三方参与。

收益：

- **更低的手续费。** 一个签名比三个签名占用更少的区块空间。
- **更好的隐私。** 多签设置不再能从链上数据中识别。每笔 Taproot 花费都可能是单签、多签或复杂脚本——它们看起来都一样。
- **更好的安全工效。** 硬件钱包厂商和托管服务可以提供成本和足迹与单签一样的多签方案。

难点在于链下协调——共同签名者必须以精心设计的顺序交换随机数和部分签名（MuSig2 的实现并不简单）。生产级库已经存在（libsecp256k1 的 MuSig2 模块、BDK 等），采用正在增长。

聚合是 Taproot 带来的最安静的大收益之一。参见 [Taproot](/glossary/taproot)和 [Schnorr 签名](/glossary/schnorr-signature)了解基础。
