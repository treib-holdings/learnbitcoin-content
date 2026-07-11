---
title: "通道流失（闪电网络）"
slug: churn-lightning
draft: false
shortDefinition: "闪电网络上频繁的通道开启、关闭或再平衡——可能成本高昂并降低效率。"
keyTakeaways:
  - "指在闪电网络上频繁移动通道流动性"
  - "过度操作会累积链上手续费"
  - "高效的流动性管理可以减少 costly 流失"
sources: []
relatedTerms:
  - autopilot-lightning
  - bridge-node-lightning
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-payment
  - lightning-routing
liveWidget: ~
---

通道流失是指[闪电通道](/glossary/lightning-channel)在链上被开启和关闭的速率。一些流失是不可避免的——用户添加/移除流动性、通道变得不活跃、服务进行再平衡。高流失率是一个问题，因为每次通道开启和关闭都是一笔链上比特币交易，有真实的手续费成本。

导致流失的因素：

- **用户开启了最终不太使用的通道。** 不活跃的通道最终会被关闭以回收锁定的资金。
- **流动性再平衡。** 没有[拼接](/glossary/lightning-channel-splicing)，改变通道容量的唯一方法是关闭并重新开启。频繁再平衡 = 高流失。
- **托管钱包运营商**根据用户活动开启和关闭通道。
- **LSP 入驻流程**可能随着用户余额增长而轮换通道。
- **路由节点**管理多个对手方的流动性。

为什么流失很重要：

- **链上成本累积。** 在典型手续费下，单个通道的开启和关闭成本约为 0.50-5 美元。一个拥有月度流失率的百万通道生态系统每年要花费数百万美元的比特币交易成本。
- **通道历史丢失。** 当通道关闭时，其累积的路由声誉和 gossip 存在感会消失。重新开启不会恢复该历史。
- **内存池压力。** 在单一手续费窗口期间大量通道关闭会推高所有人的手续费。

现代闪电网络如何减少流失：

- **[通道拼接](/glossary/lightning-channel-splicing)**允许在不关闭的情况下调整容量。重大改进，2024 年起部署。
- **更好的 LSP 设计**初始开启大小合适的通道。
- 通过入站流动性服务为回头客**复用通道**。
- 更好的钱包用户体验，不会推送用户不必要地关闭通道。

流失不是敌人；它是不断发展的网络的正常特征。目标是减少*不必要的*流失，而这占了大部分。
