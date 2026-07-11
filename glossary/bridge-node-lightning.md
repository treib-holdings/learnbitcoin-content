---
title: "桥接节点（闪电网络）"
slug: bridge-node-lightning
draft: false
shortDefinition: "在闪电网络不同部分之间主动路由支付的节点，连接原本隔离的通道或对等节点。"
keyTakeaways:
  - "连接不同的 LN 分段进行支付路由"
  - "通过转发交易赚取少量手续费"
  - "需要管理通道流动性和正常运行时间"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bolt
  - bolt-11
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - gossip-protocol-lightning
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
liveWidget: ~
---

桥接节点是[闪电节点](/glossary/lightning-node)，维护跨越否则会断开的闪电网络图段的通道——充当没有它就没有路由选项的节点区域之间的结缔组织。

实践中，"桥接节点"与"路由节点"高度重叠——区别更多关于网络拓扑中的位置而非角色。一个拥有许多高容量通道、连接原本稀疏连接的 gossip 图部分的节点就是桥接节点，无论它是否那样宣传自己。

谁运行桥接节点：

- **商业路由运营商。**River、Voltage、托管闪电服务以及专门的路由即业务运营。他们优化手续费收入和正常运行时间。
- **主要交易所和闪电服务提供商。**Coinbase、Strike、Cash App 运行大型闪电基础设施以支持自己的用户流量加机会性路由。
- **资金雄厚的高级用户。**一些自托管运营商运营实质性的路由节点，基本上是作为有正期望回报的爱好。

桥接节点的收益 vs 成本：

- **路由手续费**——每笔支付很少，但在每天数千笔支付规模上，真实收入。
- **资本成本**——锁定在通道中的 BTC 不能在其他地方花费或质押。机会成本很重要。
- **运营成本**——服务器正常运行时间、监控、流动性再平衡、瞭望塔服务。

桥接节点的经济学历史上一直很紧。一些运营商盈利运营；其他以边际成本运营以支持网络。无论如何，连接良好的桥接节点是使闪电路由可靠的一部分——稀疏桥接的图意味着更多失败支付。

参见[闪电路由](/glossary/lightning-routing)了解桥接节点如何被使用，[闪电节点](/glossary/lightning-node)了解更广泛的全景。
