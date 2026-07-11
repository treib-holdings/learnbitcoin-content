---
title: "HTLC 发票"
slug: htlc-invoice
draft: false
shortDefinition: "引用哈希秘密（支付哈希）的闪电网络发票。接收方必须揭示原像以收取资金。"
keyTakeaways:
  - "将闪电网络支付绑定到特定哈希秘密"
  - "接收方必须披露原像以完成结算"
  - "对闪电网络原子多跳安全至关重要"
sources: []
relatedTerms:
  - bolt-11
  - core-lightning-c-lightning
  - htlc-hashed-time-locked-contract
  - htlc-preimage-manager
  - lightning-channel
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
liveWidget: ~
---

HTLC 发票实际上是普通的[闪电网络发票](/glossary/lightning-invoice)——其 `payment_hash` 字段用于在路由支付的每跳构建[哈希时间锁合约](/glossary/htlc-hashed-time-locked-contract)。今天几乎每笔[闪电网络支付](/glossary/lightning-payment)都通过 HTLC 发票完成。

使发票"基于 HTLC"的原因：

1. 接收方选择一个随机 32 字节**原像**并计算其 SHA-256 哈希。该哈希作为 `payment_hash` 进入发票。
2. 发送方钱包使用支付哈希沿路由构建 HTLC——每跳被相同哈希锁定。
3. 要认领支付，接收方揭示原像。这沿路由反向传播，结算每个 HTLC。

这本质上是 [BOLT-11](/glossary/bolt-11) 发票机制。"HTLC 发票"是密码机制的描述，而非单独格式——所有标准闪电网络发票都这样工作。

变体和后继：

- **[BOLT-12](/glossary/bolt-11) offers** 仍使用基于 HTLC 的结算；变化在发票格式和可重用性，而非底层密码学。
- **PTLC（点时间锁合约）**是提议的未来 HTLC 替代品，使用 [Schnorr](/glossary/schnorr-signature)/Taproot 基的点运算而非哈希原像。它们提供更好的隐私（每跳的锁看起来不同而非全部共享相同哈希）。尚未部署。
- **持有 HTLC / hodl 发票**是接收方故意不立即结算的 HTLC 发票——适用于接收方想在完成前确认链下某些条件的条件支付。

对于日常闪电网络用户，"HTLC 发票"就是"闪电网络发票的工作方式"。机制在钱包 UX 后不可见。底层原语参见 [HTLC](/glossary/htlc-hashed-time-locked-contract)。
