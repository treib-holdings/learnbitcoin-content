---
title: "哈希谜题"
slug: hash-puzzle
draft: false
shortDefinition: "闪电网络 HTLC 中的挑战：揭示一个秘密（原像）以认领资金，否则在时间锁后退还。"
keyTakeaways:
  - "闪电网络无信任支付路由的核心"
  - "原像揭示是完成转账的关键"
  - "确保接收方不在时间内认领时资金退还"
sources: []
relatedTerms:
  - hash
  - htlc-hashed-time-locked-contract
  - zkcp-zero-knowledge-contingent-payment
liveWidget: ~
---

哈希谜题是 [HTLC](/glossary/htlc-hashed-time-locked-contract) 内的密码挑战："要认领这些资金，揭示一个[哈希](/glossary/hash)等于此已知承诺的值。"

机制：

1. 接收方选择一个随机秘密 `s`（**原像**）并计算 `hash(s)`，称为**支付哈希**。
2. 接收方仅与发送方共享支付哈希（编码在[闪电发票](/glossary/lightning-invoice)中）。
3. 发送方构建一个带哈希谜题的支付："任何提供值 v 使得 hash(v) = payment_hash 的人可以认领这些资金。"
4. 接收方知道 `s`，揭示它以认领支付。
5. 揭示在每一路由跳同时发生，沿路径反向级联。

使这奏效的两个密码属性：

- **哈希抗原像抗性。** 给定支付哈希，除了接收方没有人能找到产生它的值。接收方甚至不需要在认领之前与任何人分享 `s`。
- **原子传播。** 一旦 `s` 在任何跳被揭示，前面每跳都能看到它（通过观察结算）并从自己的前驱认领。支付要么完全完成（因为 `s` 被揭示），要么在超时处完全回滚。

哈希谜题是使[闪电网络路由](/glossary/lightning-routing)无需中间节点诚实即可工作的信任原语。它们也是[原子交换](/glossary/atomic-swap)、[潜艇交换](/glossary/submarine-swap)和大多数其他多方比特币协议的构建块。

完整的哈希时间锁合约结构（将哈希谜题包装在超时后备中）参见 [HTLC](/glossary/htlc-hashed-time-locked-contract)。
