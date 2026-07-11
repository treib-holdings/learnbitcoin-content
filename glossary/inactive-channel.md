---
title: "非活跃通道"
slug: inactive-channel
draft: false
shortDefinition: "闪电网络中近期未被使用的通道，通常被标记为待关闭或待再平衡。"
keyTakeaways:
  - "近期无路由或余额更新使通道处于闲置状态"
  - "运营者通常会关闭或再平衡以释放锁定的流动性"
  - "有助于闪电网络维持高效、可活跃路由的网络拓扑"
sources: []
relatedTerms:
  - churn-lightning
  - graph-pruning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
liveWidget: ~
---

非活跃的[闪电通道](/glossary/lightning-channel)是指近期没有路由过任何支付的通道。协议层面没有"非活跃"的正式定义——这是每个节点运营者根据自身策略应用的启发式判断。常见阈值：14 天、30 天、90 天无流量。

非活跃本身不是问题。一个通道只是安静地待在那里，余额完美均衡但未被使用，不会造成损害——只是也没什么用。资金被锁定在 2-of-2 多签中，承担着机会成本。

运营者为何关注非活跃通道：

- **资金效率。** 一个路由节点可能将 100 BTC 分散在 50 个通道中，其中 20 个几个月没有流动过一个聪（sat）。这些资金可以重新部署。
- **网络膨胀。** 关于无用通道的[ gossip ](/glossary/gossip-protocol-lightning)消息给路由图增加了噪音，却没有增加路由价值。
- **拓扑健康。** 充满停滞通道的网络比充满活跃、再平衡通道的网络更难路由。

运营者如何处理非活跃通道：

- **关闭它们**以释放 BTC 供重新部署。
- **再平衡**，通过[循环支付](/glossary/lightning-routing)或[拼接（splicing）](/glossary/lightning-channel-splicing)——有时非活跃是一侧资金完全耗尽的副作用，再平衡可以让它们恢复可用。
- **标记为私有**，如果对手方是例如偶尔使用通道的个人联系人。
- **直接放着不管**，如果关闭成本超过回收资金的价值。

对于使用闪电钱包的终端用户来说，非活跃通道由钱包自动管理——你通常不会接触到这个概念。对于路由节点运营者来说，通道活跃度是关键指标，管理非活跃通道是运营工作的一部分。
