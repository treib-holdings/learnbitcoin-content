---
title: "BOLT"
slug: bolt
draft: false
shortDefinition: "'Basis of Lightning Technology' 的缩写，这些规范定义闪电网络实现如何交互和保持兼容。"
keyTakeaways:
  - "定义核心 LN 协议机制"
  - "允许不同 LN 实现互操作"
  - "覆盖通道建立、路由、安全等"
sources: []
relatedTerms:
  - bolt-11
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-refund-invoice
  - lightning-routing
sameAs:
  - "https://github.com/lightning/bolts"
liveWidget: ~
---

BOLT——**B**asis **O**f **L**ightning **T**echnology——是定义[闪电网络](/glossary/lightning-network)实现如何互操作的规范系列。它对于闪电网络就像 [BIP](/glossary/bip-bitcoin-improvement-proposal)对于比特币：一组版本化的、社区审查的文档，任何构建闪电软件的人都应遵循。

当前 BOLT 文档（编号 0 到 12，还有一些实验性补充）覆盖：

- **BOLT 1**——基础协议，消息帧。
- **BOLT 2**——通道管理的对等协议（开、关、更新）。
- **BOLT 3**——链上通道状态的交易和脚本格式。
- **BOLT 4**——洋葱路由（[Sphinx](/glossary/lightning-sphinx)包格式）。
- **BOLT 5**——链上交易和通道关闭逻辑。
- **BOLT 7**——广播通道信息的 gossip 协议。
- **BOLT 9**——功能标志。
- **[BOLT 11](/glossary/bolt-11)**——发票格式。
- **BOLT 12**——offers（BOLT 11 的可复用发票继任者），2024 年合并。

在 [github.com/lightning/bolts](https://github.com/lightning/bolts)上由主要实现的代表维护——Lightning Labs (LND)、Blockstream (Core Lightning)、ACINQ (Eclair)、Spiral (LDK)。变更通过 pull request、审查和跨实现的广泛共识进行。

这种多供应商协调是为什么 Phoenix 钱包（Eclair）可以与 Core Lightning 节点开通道，并通过 LND 运营的基础设施路由以支付基于 LDK 的接收方。它们都遵循相同的 BOLT。
