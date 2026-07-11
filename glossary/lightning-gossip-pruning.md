---
title: "闪电 Gossip 剪枝"
slug: lightning-gossip-pruning
draft: false
shortDefinition: "从闪电网络节点的网络图中移除过时或非活跃的通道公告，以减少杂乱。"
keyTakeaways:
  - "消除过时通道数据以减少路由开销"
  - "提升闪电网络节点性能和内存使用"
  - "确保网络地图仅反映可用的活跃通道"
sources: []
relatedTerms:
  - bolt
  - gossip-protocol-lightning
  - lightning-network
  - lightning-routing
  - routing-node
liveWidget: ~
---

闪电 gossip 剪枝是从[闪电节点](/glossary/lightning-node)本地视角的 [gossip 图](/glossary/gossip-protocol-lightning)中移除过时或非活跃通道公告的做法。这是随着网络增长保持路由表可管理的日常维护。

为什么剪枝重要：

- **Gossip 图随时间增长。** 每个被公告的通道都留在你的节点路由表中。没有剪枝，你会累积每个曾经存在过的通道，包括已关闭的通道、被废弃的节点和其他死重。
- **寻路随图规模扩展。** 尝试寻找路由的节点在 gossip 图上运行类似 Dijkstra 的算法。更大的图意味着更慢的路由决策。
- **内存使用很重要。** 运行在树莓派级硬件上的闪电节点无法承受无限制的 gossip 存储。

协议级规则（[BOLT-7](https://github.com/lightning/bolts/blob/master/07-routing-gossip.md)）：

- **通道公告**必须每两周通过 `channel_update` 消息刷新。超过两周未刷新的通道被视为过时，可以被剪枝。
- **节点公告**同样有新鲜度窗口；两周未听到消息的节点被视为离线。
- **已关闭通道**通过链上监控检测到，可以立即剪枝——如果注资交易已被花费，该通道肯定不再存在。

各实现处理剪枝的方式略有不同。[LND](/glossary/lightning-network-daemon-lnd)、[Core Lightning](/glossary/core-lightning-c-lightning)、Eclair 和 LDK 都有自己的剪枝策略和配置选项。

对终端用户来说，gossip 剪枝是不可见的基础设施。对节点运营者来说，调优剪枝策略可以影响内存使用、同步时间和路由性能。协议级新鲜度规则是保守的；对于资源受限的节点，更激进的剪枝有时是有用的。
