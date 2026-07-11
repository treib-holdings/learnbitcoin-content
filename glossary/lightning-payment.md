---
title: "闪电支付"
slug: lightning-payment
draft: false
shortDefinition: "通过一个或多个闪电通道进行的链下 BTC 转账，通常近乎即时且费用极低。"
keyTakeaways:
  - "使用通道余额更新实现快速、廉价的转账"
  - "多跳路由无缝连接远距离闪电节点"
  - "通道开启/关闭外绕过链上手续费"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - atomic-swap-refill
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - delayed-payment-channel
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-invoice
  - lightning-network
  - lightning-probe
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
  - payment-channel
  - submarine-swap
liveWidget: ~
---

闪电支付是跨[闪电网络](/glossary/lightning-network)的价值转移——通常近乎即时、费用低廉，通过一个或多个中间通道路由，而任何路由中转方都不会被信任保管资金。

支付实际流动方式：

1. **接收方生成发票。** 一个 [BOLT-11](/glossary/bolt-11) 发票（或 [BOLT-12 offer](/glossary/lightning-invoice)），包含金额、支付哈希、目的地、有效期。
2. **发送方钱包寻找路由。** 使用 gossip 图，构建一条有足够流动性送达支付的通道路径。
3. **发送方构建洋葱。** 每一跳的指令被加密在嵌套的 [Sphinx](/glossary/lightning-sphinx) 数据包中，使每一跳只能看到自己的路由信息。
4. **HTLC 级联前进。** 发送方将资金锁定在与第一跳的 [HTLC](/glossary/htlc-hashed-time-locked-contract) 中。该跳验证后，与下一跳锁定资金，以此类推。每一跳都在承诺"如果下一跳揭示原像我就转发"。
5. **接收方揭示原像。** 这沿路由传回，结算每个 HTLC。
6. **完成。** 通常在 1-5 秒内，费用低于一美分。

可能出错的情况：

- **找不到路由。** 候选路径上任一处流动性不足。钱包用不同路径重试（通常使用 [AMP](/glossary/atomic-multi-path-payment-amp) 拆分支付）。
- **中间节点离线。** HTLC 超时并回退；不会有损失。
- **探测/阻塞攻击。** 可能短暂占用流动性但不会实际丢失资金的边缘情况。

永远不会出错的情况：

- **部分结算。** 要么整笔支付完成，要么什么都不完成。HTLC 使其原子化。
- **中间跳盗窃。** 中转方可以拒绝转发，但不能盗窃——密码学结构使这不可能。

对于 2026 年的大多数日常闪电使用，支付在第一次尝试时不到一秒就成功。有趣的情况是大额支付（测试路由容量）或向冷门节点支付（测试公共图的连通性）。这两个方面的进展都是实质性的。
