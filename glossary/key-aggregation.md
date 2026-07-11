---
title: "密钥聚合"
slug: key-aggregation
draft: false
shortDefinition: "将多个公钥组合成一个聚合密钥（如 MuSig/Schnorr），以减少链上数据并提升隐私。"
keyTakeaways:
  - "将多个公钥合并为单一的链上实体"
  - "节省区块空间，降低交易手续费"
  - "隐藏多签使用，增强隐私"
sources: []
relatedTerms:
  - musig
  - musig2
  - schnorr-signature
  - signature-aggregation
  - taproot
liveWidget: ~
---

密钥聚合将多个公钥组合成一个单一公钥，需要所有（或阈值数量的）原始密钥持有者签名。对外部观察者来说，聚合密钥和生成的签名与单签钱包无法区分。

这是 Schnorr 的属性，而非 ECDSA 的。ECDSA 的组合不能干净地工作；Schnorr 的线性性使聚合成为可能。Taproot（BIP 340 / 341，2021 年 11 月激活）在比特币上解锁了这一功能。

主要协议：

- MuSig 和 MuSig2：交互式 n-of-n 密钥聚合。所有共签者必须参与产生签名。MuSig2 需要两轮通信；原始 MuSig 需要三轮。
- FROST（Flexible Round-Optimized Schnorr Threshold）：m-of-n 阈值聚合。n 个签名者中的任意 m 个可以产生一个聚合签名；其余 n-m 个不参与。

为什么重要：3-of-3 MuSig2 钱包在链上看起来就像普通的 Taproot 单签输出。使用 FROST 的联邦在链上看起来与任何 Taproot 单签花费完全相同。多签用户获得了普通用户的隐私和费用特征，而不是在链上广播他们的安全模型。

权衡是交互性。Taproot 之前的多签（P2WSH）不需要共签者在签名时在线；聚合方案需要。目前大多数生产多签（冷存储、硬件钱包仲裁）仍使用经典多签正是出于这个原因。聚合方案在闪电通道和协议级构造中增长最快，因为这些场景本身就已经需要交互性。
