---
title: "M-of-N"
slug: m-n
draft: false
shortDefinition: "表示多签的通用方式，要求 N 个总签名者中的 M 个签名（如 2-of-3）。"
keyTakeaways:
  - "阈值签名设置的通用术语"
  - "允许根据参与者需求灵活制定安全策略"
  - "适用于企业、家庭或共同管理的资金"
sources: []
relatedTerms:
  - psbt
  - bitcoin-vault
  - fidelity-bond
  - green-address
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - musig
  - musig2
  - quorum-signatures
liveWidget: ~
---

M-of-N 是阈值多签的标准简写：N 个共签者中任意 M 个签名即可花费。两个数字调节两个独立的旋钮：

- M 是安全阈值。M 越大，需要同意的共签者越多，越难被盗。
- N - M 是冗余。钱包在最多丢失 N - M 个共签者后仍能访问。

常见配置：

- 2-of-3：个人托管的最佳选择。一把密钥在你手中，一把在可信的备份位置，一把在第三方（律师、朋友、托管服务）。丢失任何一把都能恢复。偷到一把无法花费；偷到两把可以。
- 3-of-5：机构默认。可丢失两把，需要三把才能花费。企业金库的标准。
- 4-of-7 或更高：大型联邦和高风险托管。Liquid 的功能节点组是 11-of-15。

传统比特币多签（Taproot 之前，P2SH 或 P2WSH）由于 `OP_CHECKMULTISIG` 操作码设计硬上限为 15 个共签者。带 MAST 树的 Taproot 脚本路径花费可以更高。带 MuSig2 / FROST 聚合的 Taproot 密钥路径花费使 M-of-N 结构在链上完全不可见。

正确的选择很少是"更多共签者"。每个共签者都是真实的人或设备，每个都是一个失败模式：丢失设备、去世、忘记密码、签名时沟通失误。大多数零售用户用 2-of-3 比更复杂的配置更好。机构设置通常选择 3-of-5，除非有监管原因需要更高。
