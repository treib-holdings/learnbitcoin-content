---
title: "Nonce 耗尽"
slug: nonce-exhaustion
draft: false
shortDefinition: "在密码学上下文（如 ECDSA）中重复使用或不当生成 nonce 可能泄露私钥。"
keyTakeaways:
  - "对 ECDSA/Schnorr 至关重要：不能重复 nonce 或可猜测的随机性"
  - "nonce 生成失败可直接泄露私钥"
  - "与区块头中的挖矿 nonce 用法不同"
sources: []
relatedTerms:
  - difficulty-retargeting
  - nonce
  - proof-work-pow
liveWidget: ~
---

"Nonce 耗尽"描述了签名 nonce 被重复、可预测或以其他方式被泄露的密码学灾难——作为直接数学后果泄露私钥。

比特币中有两种不同的 nonce，它们之间没有任何关系：

- **挖矿 nonce。** 区块头中的 32 位字段，矿工迭代寻找有效哈希。公开的，预期每次尝试不同，不泄露任何秘密。
- **签名 nonce（`k`）。** ECDSA 和 Schnorr 签名中使用的每签名秘密。签名者将 `k`、私钥和消息哈希组合产生签名。如果 `k` 对同一私钥的两条不同消息被重用，私钥可以用几行算术恢复。

恢复数学（对于 ECDSA）：给定两条不同消息 `m1` 和 `m2` 上的签名 `(r, s1)` 和 `(r, s2)`（相同 `r` 证明 nonce 重用），私钥是 `(m1 - m2) * (s1 - s2)^-1 mod n`。简单计算。

著名的真实世界利用：

- **Sony PS3 ECDSA 泄露（2010）**：Sony 的固件签名代码对每个签名使用常数 nonce。完整 ECDSA 签名密钥在披露后几周内从公开的 PS3 固件签名中恢复。
- **Android 比特币钱包漏洞（2013）**：Android 上的不良 RNG 意味着一些钱包重用了签名 nonce。研究人员识别了受影响的钱包并演示了密钥提取。
- **各种区块链分析论文**：通过链上 nonce 重用识别了其他泄露密钥的钱包。

修复是 RFC 6979 确定性 nonce：从私钥和消息本身确定性派生 `k`（HMAC-SHA256 构造）。相同密钥、相同消息、相同 `k`；不同消息、保证不同 `k`。签名时不涉及 RNG。Bitcoin Core 和每个现代比特币库使用 RFC 6979 或其 Schnorr 等价物（BIP 340 的签名方案）。

硬件钱包在固件层面额外强制 nonce 唯一性，通常同时使用 RFC 6979 派生*和*额外的防重放计数器。

对于用户，这是不可见的：任何正确实现的钱包都已解决了 nonce 问题。对于库或钱包作者，它仍然是少数几种立即灾难性且在代币消失前无声无息的密码学错误之一。
