---
title: "部分签名（Partial Signature）"
slug: partial-signature
draft: false
shortDefinition: "在多签或 PSBT 工作流中，单个参与者的签名，需要更多签名才能完成交易花费。"
keyTakeaways:
  - "代表多签交易中一个共同签名者的授权"
  - "多个部分签名组合以满足 M-of-N 阈值"
  - "用于分布式/PSBT 设置中的安全多方审批"
sources: []
relatedTerms:
  - psbt
  - hierarchical-multisig
  - m-n
  - musig
  - musig2
  - quorum-signatures
liveWidget: ~
---

部分签名是单个共同签名者对多方签名交易的贡献。它本身不是一个完整的签名；只有当足够多的部分签名组合在一起满足脚本的阈值时，交易才有效。

现代比特币中有两种形式：

- 经典多签。每个共同签名者对相同的 sighash 产生完整的 ECDSA 或 Schnorr 签名。脚本在链上组合其中的 M 个（例如 2-of-3 P2WSH 或 Taproot 脚本路径叶子）。部分签名通过 [PSBT](/glossary/psbt) 工作流追踪：每个签名者将自己的签名添加到 PSBT 中并传递，直到达到阈值，然后任何人都可以完成交易。

- 聚合签名（MuSig2、FROST）。每个共同签名者产生一个部分签名，它是单个 Schnorr 签名的一个片段。没有一个片段本身是有效签名；协议将它们组合成一个签名，链上只出现这一个签名。对外部观察者来说，它与单签不可区分。

第一种自 2012 年 P2SH 多签以来就是比特币标准，也是当今大多数硬件钱包多签流程使用的形式。第二种较新（Taproot 之后，2021 年以后），是现代闪电通道和新兴金库设计的基础，在这些场景中隐私和链上足迹很重要。
