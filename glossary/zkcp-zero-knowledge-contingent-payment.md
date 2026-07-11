---
title: "ZKCP（零知识条件支付）"
slug: zkcp-zero-knowledge-contingent-payment
draft: false
shortDefinition: "一种协议，让买方仅在秘密数据正确时才付款，使用零知识证明确保公平。"
keyTakeaways:
  - "利用零知识证明使数据有效性在揭示前可证"
  - "防止卖方作弊（假数据）或买方作弊（收到数据后不付款）"
  - "比特币上可实现高级合约逻辑的示例"
sources: []
relatedTerms:
  - hash-puzzle
  - htlc-hashed-time-locked-contract
liveWidget: ~
---

**零知识条件支付**（ZKCP）是一种比特币原生协议，用于无信任地用数字数据交换 BTC。该机制由 Greg Maxwell 于 2016 年设计，同年由 Sean Bowe 以 0.4 BTC 出售一个 zk-SNARK 谜题解作为演示，让买方仅在卖方能密码学证明自己拥有有效信息时才付款。

ZKCP 高层工作原理：

1. **卖方有数据 X**，买方想要。
2. **卖方用随机密钥 `k` 加密 X**，得到 `E_k(X)`。卖方将加密数据发送给买方。
3. **卖方生成零知识证明**，证明 `E_k(X)` 用某个特定密钥解密后得到的数据满足买方可验证的属性（如"这个特定谜题的解"）。
4. **卖方通过哈希 `H = hash(k)` 承诺 `k`。**
5. **买方构建一笔比特币支付**，锁定在 [HTLC](/glossary/htlc-hashed-time-locked-contract) 中：如果卖方揭示 `k`（H 的原像）则付款给卖方，超时后退款给买方。
6. **卖方揭示 `k` 以领取付款。** 这样做在链上公布了 `k`；买方从区块链上读取它，用来解密 `E_k(X)`，现在拥有了数据。

这实现了什么：买方要么得到有效数据，要么不付一分钱。卖方要么得到付款，要么不揭示密钥。双方都无法作弊。不涉及第三方托管。

ZKCP 主要是概念验证而非广泛部署。密码学基础设施（用于任意陈述的零知识证明）较为重量级，大多数数字商品市场使用更简单的信任模型。但 ZKCP 是一个基础性演示，展示了比特币上的合约可以有多丰富——无需复杂的链上脚本，只需标准 HTLC 加链下零知识证明。

参见 [HTLC](/glossary/htlc-hashed-time-locked-contract)了解 ZKCP 依赖的链上原语，以及 [Scriptless Scripts](/glossary/scriptless-scripts)了解使用基于 Schnorr 的合约编码的相关想法。
