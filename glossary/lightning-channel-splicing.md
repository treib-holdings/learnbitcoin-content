---
title: "闪电通道拼接"
slug: lightning-channel-splicing
draft: false
shortDefinition: "在不完全关闭或重新开启通道的情况下修改通道的链上资金（增加/减少容量）。"
keyTakeaways:
  - "调整容量时避免通道关闭"
  - "节省手续费并保持闪电网络使用不中断"
  - "需要链上交互但保持链下状态完整"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - custodial-lightning-wallet
  - eltoo
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - inactive-channel
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
  - payment-channel
  - wumbo-channels-lightning
sameAs:
  - "https://bitcoinops.org/en/topics/splicing/"
liveWidget: ~
---

闪电通道拼接是在不关闭和重新开启[闪电通道](/glossary/lightning-channel)的情况下，向其链上注资添加或提取资金的能力。在拼接出现之前，改变通道[容量](/glossary/lightning-channel-capacity)的唯一方法是关闭它、做一笔链上交易、再开一个新通道——付两次手续费，还丢失了通道累积的路由历史。

高层工作原理：

1. 通道双方协作签署一笔新的链上交易，该交易**花费现有的注资输出**并创建一个调整了容量的新注资输出。旧注资被消耗；新注资成为通道的锚点。
2. 链下状态以新容量继续。通道历史、gossip 广播的元数据和路由关系全部保留。
3. 原始通道 ID 是否改变取决于拼接变体——较新的设计保持相同 ID 以确保连续性。

拼接于 2024 年投入生产（ notably 在 Phoenix 和 Core Lightning 中通过支持拼接的 BOLT 扩展实现）。采用正在稳步增长。

它带来的能力：

- **动态调整容量。** 在繁忙时期需要更多入站流动性的商家可以拼接注入。想要提取到冷存储的用户可以拼接取出而不用关闭通道。
- **更好的通道管理。** 用更便宜的拼接交易替代昂贵的"关闭再开启"工作流。
- **更流畅的入门体验。** 闪电服务提供商可以为新用户开设小通道，后续随用户充值钱包再拼接注入容量。

拼接代表了闪电网络从"通道一旦开启就是静态的"到"通道是持续演变的长寿命关系"的逐步成熟。这种成熟是 2024-2026 年闪电网络用户体验大幅改善的讨论不足的原因之一。
