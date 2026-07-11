---
title: "Gossip 协议（闪电网络）"
slug: gossip-protocol-lightning
draft: false
shortDefinition: "闪电网络节点用来交换通道和节点信息、构建全局路由图的方法。"
keyTakeaways:
  - "节点以去中心化方式相互广播通道信息"
  - "确保闪电网络拥有支付的全局路由图"
  - "必须优化以防止过度数据开销"
sources: []
relatedTerms:
  - autopilot-lightning
  - bolt
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - lightning-channel
  - lightning-gossip-pruning
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
liveWidget: ~
---

闪电网络 gossip 协议是[闪电节点](/glossary/lightning-node)分享网络拓扑信息的方式：哪些通道存在、连接谁、收取什么手续费、当前是否活跃。没有它，节点无法[路由](/glossary/lightning-routing)通过它们不直接参与路径的支付。

三种 gossip 消息，定义在 [BOLT-7](https://github.com/lightning/bolts/blob/master/07-routing-gossip.md) 中：

1. **`channel_announcement`**——声明新通道存在。包括通道真实的证明（由两个端点节点密钥签名加上确认链上资金交易存在的比特币签名）。
2. **`node_announcement`**——声明节点元数据：别名、颜色、宣传的网络地址。
3. **`channel_update`**——声明通道当前策略：手续费率、时间锁增量、启用/禁用状态。随着通道再平衡或调整手续费而频繁发布。

当节点收到它还没有的有效 gossip 消息时，存储并转发给对等方。整个网络最终获得（最终一致的）公共图视图。

gossip *不*揭示什么：

- **通道余额。** 你知道通道存在及其总容量，但不知道该容量当前在两个端点之间如何分配。这是故意的隐私选择。这也使路由更难（你必须探测来发现流动性）。
- **私有通道。** 许多通道选择退出 gossip——在移动钱包和其路由节点之间常见。这些通道正常工作但不能作为其他人路由的中间跳。

gossip 量增长到足够大，使得新的优化（gossip sync v2、范围查询、紧凑过滤器）变得必要，连同对数周未刷新的陈旧通道公告的定期[修剪](/glossary/lightning-gossip-pruning)。现代闪电节点完全同步时下载数十兆字节的 gossip 数据。同步后，持续的 gossip 最多几 KB/秒。

gossip 图如何被用来实际移动支付参见[闪电网络路由](/glossary/lightning-routing)。
