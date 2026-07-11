---
title: "闪电路由"
slug: lightning-routing
draft: false
shortDefinition: "在闪电网络中找到从发送方到接收方的通道路径，可能跨越多个中间节点。"
keyTakeaways:
  - "选择一条具有足够容量的连接通道路由"
  - "使用闪电 gossip 数据获取最新通道状态"
  - "依赖临时 HTLC 确保无需信任的多跳支付"
sources:
  - { label: "Lightning Routing rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/lightning-routing" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - bolt
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - delayed-payment-channel
  - gossip-protocol-lightning
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-probe
  - lightning-refund-invoice
  - lightning-sphinx
  - onion-routing-lightning
liveWidget: ~
---

闪电路由是当你与接收方之间没有直接通道时，在[闪电通道](/glossary/lightning-channel)网络中找到一条能将你的支付从发送方传到接收方的路径的过程。

大多数闪电用户与他们付款的人没有直接通道——那需要与每个对手方开启一笔[链上交易](/glossary/transaction)，违背了初衷。相反，你的[闪电节点](/glossary/lightning-node)通过有到达目的地路径的中间节点路由支付，通过链式 [HTLC](/glossary/htlc-hashed-time-locked-contract) 原子化完成。

底层工作原理：

1. **构建图。** 闪电节点通过[gossip 协议](/glossary/gossip-protocol-lightning)共享通道存在、容量和费率政策的信息。你的节点维护这个图的本地视角。
2. **寻找路径。** 运行修改版的 Dijkstra 算法，找到从你到目的地的一串通道，每条通道相关一侧有足够容量，优化费用和可靠性。
3. **洋葱路由支付。** 每一跳只知道前一跳和下一跳，不知道完整路径。这是 **[Sphinx](/glossary/lightning-sphinx) 洋葱路由**，类似 Tor。
4. **HTLC 在每一跳锁定支付。** 如果任何跳失败，整笔支付原子性回退——你不会在部分路由中损失资金。
5. **如果路由失败，重试。** 现代钱包用不同路径重试或将支付拆分到多条路径（[原子多路径支付 / AMP](/glossary/atomic-multi-path-payment-amp)）。

路由中的难题：

- **流动性是私有的。** Gossip 告诉你通道存在及其总容量，但不告诉你哪一侧有余额。路由必须探测或猜测。
- **通道会耗尽。** 一分钟前还能路由的通道可能在你支付后相关一侧就耗尽了。其他人的支付对你不可见。
- **大额支付更难。** 随支付规模接近典型通道容量，找到完整路径的概率下降。AMP 和通道拼接有帮助，但巨额支付通常需要多次尝试或带外协调。

路由可靠性自 2020 年以来显著提高——大多数几十万聪以下的日常支付第一次尝试就成功。更大或更偏远的支付仍偶尔失败，但失败模式是可恢复的且永远不会丢失资金。

请参阅[闪电路由深入探讨](/rabbit-hole/lightning-routing)了解更深入的内容——源路由、洋葱加密、多路径支付、寻路启发式以及钱包用来发现流动性的探测技术。
