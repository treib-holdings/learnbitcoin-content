---
title: "HTLC（哈希时间锁合约）"
slug: htlc-hashed-time-locked-contract
draft: false
shortDefinition: "要求在时间锁到期前揭示秘密（原像）以解锁支付的机制，闪电网络和原子交换的核心。"
keyTakeaways:
  - "实现最小化信任的支付和交换"
  - "使用哈希谜题 + 时间锁实现安全后备"
  - "闪电网络多跳支付逻辑的基础"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - atomic-swap-refill
  - bolt-11
  - bridge-node-lightning
  - eltoo
  - escrow
  - escrowed-lightning-channel
  - fraud-proof
  - fraudulent-channel-close
  - griefing-attack
  - hash-puzzle
  - htlc-invoice
  - htlc-preimage-manager
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-payment
  - lightning-routing
  - payment-channel
  - payment-point
  - submarine-swap
sameAs:
  - "https://en.bitcoin.it/wiki/Hashed_Timelock_Contracts"
  - "https://bitcoinops.org/en/topics/htlc/"
liveWidget: ~
---

哈希时间锁合约（HTLC）是一种比特币脚本，用两个条件锁定资金：可被揭示秘密值（已知哈希的**原像**）的*任何人*花费，或者在时间截止前未揭示该秘密则退还给发送方。

脚本形式，大致：

```
IF hash(提供的值) == 目标哈希 THEN
  支付给接收方
ELSE IF 当前时间 > 截止时间 THEN
  退还给发送方
END
```

这个看似简单的结构是无信任多方比特币协议的基础。

为什么 HTLC 如此有用：

- **[闪电网络路由](/glossary/lightning-routing)。** 当你跨多个闪电跳支付时，每跳受 HTLC 约束。接收方知道秘密。他们通过揭示它从前一跳认领。该跳通过传递相同秘密从再前一跳认领。沿链向后，当秘密传播时每跳原子性地获得支付。要么整个支付成功，要么在超时时全部回滚。
- **[原子交换](/glossary/atomic-swap)。** 不同链上的两方可以无信任地交换代币。每方在 HTLC 中锁定资金。谁先揭示秘密就认领自己的资金并暴露秘密，让对方认领他们的。如果任何人退出，两方退款在截止时触发。
- **[潜艇交换](/glossary/submarine-swap)。** 通过配对 HTLC 无信任地将链上 BTC 换为闪电 BTC（或反之）。

"时间锁"部分不是可选的。没有截止时间，资金可能永远卡在等待可能永远不会到来的秘密。截止确保*某事*发生——要么支付完成（秘密揭示），要么不完成（退款触发）。时间本身成为安全模型的一部分。

HTLC 是使比特币二层生态系统真正无信任的密码原语。它们自 2017 年起投入生产，已转移了数万亿聪价值的支付，从未需要中间人诚实。

PTLC 后继概念参见[支付点](/glossary/payment-point)：相同原子性、相同时间锁保证，但哈希-原像锁被椭圆曲线点和标量替换。更小的链上占用和更好的隐私属性，等待更广泛的 Taproot 采用。
