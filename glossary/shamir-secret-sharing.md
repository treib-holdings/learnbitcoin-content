---
title: "Shamir 秘密共享"
slug: shamir-secret-sharing
draft: false
shortDefinition: "一种密码学方案，将秘密分成 N 份，任意阈值 M 份可以重建秘密，少于 M 份则无法获取任何信息。"
keyTakeaways:
  - "将种子拆分到多个位置的标准数学方法"
  - "针对 BIP 39 种子的标准化形式为 SLIP-39（Trezor 原生支持）"
  - "不等同于多签——安全模型不同，参见 key-split 了解安全注意事项"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - key-split
  - multisig
  - seed-phrase
liveWidget: ~
---

Shamir 秘密共享（SSS）是将比特币种子（或任何秘密）拆分成多份的数学基础，使得任意 M 份中的 N 份可以重建秘密，但任何 M-1 份都不泄露任何信息。以密码学家 Adi Shamir 命名，他于 1979 年发表了这一构造。

在比特币实践中，标准形式是 SLIP-39：一种基于单词列表的 SSS 方案，用于 BIP 39 种子。Trezor 原生实现；SeedSigner 可以从任何种子生成 SLIP-39 份额。典型配置：2-of-3 或 3-of-5 份额分布在不同的地理位置或可信的人手中。

关于 SSS 在比特币中的完整讨论——包括关键注意事项：SSS **不等同于** [多签](/glossary/multisig)的安全模型，因为签名时重建密钥会在单个设备上瞬间持有完整密钥——详见 [key-split](/glossary/key-split)。
