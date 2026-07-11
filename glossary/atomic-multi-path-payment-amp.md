---
title: "原子多路径支付（AMP）"
slug: atomic-multi-path-payment-amp
draft: false
shortDefinition: "闪电网络的一项功能，将一笔支付拆分为多笔较小的支付，在收款方处重新组合。"
keyTakeaways:
  - "将单笔支付拆分为多条路由"
  - "帮助绕过通道容量限制"
  - "只有所有部分都到达后才完成支付"
sources: []
relatedTerms:
  - atomic-swap
  - atomic-swap-refill
  - audiobook-model-lightning
  - autopilot-lightning
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - lightning-channel-capacity
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-routing
liveWidget: ~
---

原子多路径支付（AMP）是一种[闪电网络](/glossary/lightning-network)技术，将一笔逻辑支付拆分为多笔较小的部分支付，每笔通过网络中不同的路径[路由](/glossary/lightning-routing)。收款方只有在所有部分都到达后才"完成"支付。

动机：任何单个[闪电通道](/glossary/lightning-channel)的容量有限，通常只有几百万聪或更少。使用单路径方法发送大于任何候选路由上最小通道容量的支付会失败。AMP 通过将负载分散到多条路由来解决这个问题。

工作原理：

1. 发送方钱包决定使用 AMP 并将总额拆分为多块（例如，将 1,000,000 聪的支付拆为 5 × 200,000 聪）。
2. 为每块找到不同的路由——理想情况下通过不相交的通道，这样没有单条路径被完全加载。
3. 所有块使用 [HTLC](/glossary/htlc-hashed-time-locked-contract) 同时发送。
4. 收款方持有每个传入的 HTLC，直到收到全部。
5. 完成后，收款方释放原像，所有块原子性地结算。

如果即使一块路由失败，收款方拒绝释放原像，整笔支付通过 HTLC 超时回滚。不会有部分结算。

变体：

- **MPP**（多路径支付）——基本的拆分重组变体。所有部分共享同一个支付哈希。
- **AMP 本身**——由 Olaoluwa Osuntokun 在 BOLT-12 时代的规范中引入。每个部分使用独立的子哈希，隐私性和可靠性略好。

两者在 2026 年的主流闪电网络实现中都被广泛支持。对用户的实际影响：2019 年因流动性约束会失败的支付现在 routinely 成功。如果第一次尝试路由失败，钱包会自动用不同的拆分重试。
