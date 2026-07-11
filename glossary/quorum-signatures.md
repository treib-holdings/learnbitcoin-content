---
title: "法定人数签名（Quorum Signatures）"
slug: quorum-signatures
draft: false
shortDefinition: "阈值签名方案，其中一部分签名者（法定人数）必须协作才能产生有效签名。"
keyTakeaways:
  - "允许 M-of-N 签名产生一个聚合签名"
  - "适用于联邦或高级托管设置"
  - "减少签名开销，可能提升隐私"
sources: []
relatedTerms:
  - clawback-mechanism
  - fidelity-bond
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - mono-signature
  - musig
  - musig2
  - partial-signature
  - psbt
liveWidget: ~
---

法定人数签名是阈值签名：n 个共同签名者中的 m 个协作产生一个聚合签名，无需全部 n 个参与。链上输出看起来与普通 Taproot 单签完全一样。

比特币领域中活跃的协议是 FROST（Flexible Round-Optimized Schnorr Threshold），2024-2026 年有认真的实现工作。FROST 让例如 8 个签名者中的 5 个共同在一个 Taproot 输出上产生一个签名，其余 3 个持有份额但不参与本次签名会话。

为什么重要：

- 隐私：花费看起来与 5-of-8 或 1-of-1 签名完全一样。m-of-n 结构不会在链上泄露。
- 手续费：一个签名而非 m 个，一个公钥而非 n 个。复杂多签上的显著节省。
- 韧性：任意 m 个签名者可以花费，因此最多丢失 n-m 个密钥仍可存活，无需单独的时间锁恢复路径。

权衡是交互性和仪式复杂性。FROST 需要在设置时进行分布式密钥生成仪式（没有单一方面曾看到完整密钥），签名需要在参与签名者之间进行多轮协调。经典 M-of-N 多签在操作上更简单：每个共同签名者独立异步签名，代价是更大的链上足迹和明显的多签泄露。

对于零售用户这过度了。对于联邦（Liquid 功能成员、Fedimint 守护者）和机构托管，阈值 Schnorr 正在随着工具成熟成为现代默认选择。
