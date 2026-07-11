---
title: "Submarine Swap"
slug: submarine-swap
draft: false
shortDefinition: "一种最小化信任的方法，在链上 BTC 和闪电网络 BTC 之间互换，改善闪电网络通道流动性或实现链下原子交换。"
keyTakeaways:
  - "通过 HTLC 原子性桥接链上 BTC 和闪电网络 BTC"
  - "谨慎执行时无需托管第三方"
  - "用于闪电网络再平衡或桥接到链上钱包"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - atomic-swap-refill
  - bridge-node-lightning
  - htlc-hashed-time-locked-contract
  - lightning-network
  - lightning-payment
  - payment-channel
  - security
liveWidget: ~
---

Submarine swap 是链上比特币和[闪电网络](/glossary/lightning-network)比特币之间的[原子互换](/glossary/atomic-swap)。它让你可以跨层无信任地移动 BTC，无需通过托管方，也无需关闭或打开闪电通道。

两个方向：

- **Submarine swap *入***。你有链上 BTC；你想要闪电网络 BTC（例如，为闪电通道提供入站流动性，或在不先开通道的情况下支付闪电发票）。互换服务收到你的链上交易，发给你闪电网络 BTC。
- **Submarine swap *出***。你有闪电网络 BTC；你想要它在链上（例如，提取到冷存储）。互换服务在你完成闪电支付后发给你链上 BTC。

两个方向都在每侧使用 [HTLC](/glossary/htlc-hashed-time-locked-contract)来保证原子性：服务方不能拿了你的 BTC 不发另一侧。如果出任何问题，超时机制启动，你会被退款。

实际中为什么重要：

- **闪电网络入站流动性。** 打开闪电通道默认只充值你一侧；另一侧从零开始。Submarine swap 是一种干净的方式来"购买"入站流动性，而无需关闭重开通道。
- **最小化信任的下线通道。** 将闪电余额回到链上冷存储，无需信任交易所。
- **跨实现的闪电到闪电。** 当网络条件或流动性问题使直接路由不可靠时有用。

知名服务：**Lightning Loop**（Lightning Labs）、**Boltz Exchange**（开源，多链），以及各种钱包集成的互换功能。服务收取小额费用加链上交易成本；作为回报，你获得无需托管的跨层移动。
