---
title: "Loop In/Out"
slug: loop-inout
draft: false
shortDefinition: "Lightning Labs 的非托管服务，在链上 BTC 和闪电通道流动性（入站或出站）之间进行互换。"
keyTakeaways:
  - "无需关闭通道即可平衡流动性"
  - "使用原子互换实现最小信任的链上/链下转账"
  - "对商家、大型闪电用户或再平衡通道的节点运营者有用"
sources: []
relatedTerms:
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - liquidity
  - liquidity-ads
  - submarine-swap
liveWidget: ~
---

Loop In 和 Loop Out 是 Lightning Labs 的非托管互换服务，用于在不关闭或开启通道的情况下在链上 BTC 和闪电通道流动性之间转移余额。基于[潜艇互换](/glossary/submarine-swap)原语构建，交易是原子化且最小信任的。

- **Loop Out**：发送闪电余额，接收链上 BTC。通过清空通道来释放入站容量。
- **Loop In**：发送链上 BTC，接收闪电余额。补充出站容量以便通过闪电网络更多花费。

为什么重要：

- **无需链上成本的流动性管理。** 不开/关通道的通道再平衡节省了新注资交易的链上手续费。
- **维护通道关系。** 你现有的通道保持活跃，保留其声誉、对等连接和路由历史；只有余额转移。
- **商家入站容量。** 接收大量闪电支付的商家会用完入站容量。Loop Out 将累积余额排到链上，为下一批恢复入站。
- **花费者出站容量。** 频繁发送的钱包会耗尽出站。Loop In 从链上 BTC 补充。

机械工作原理：

1. 用户通过 Loop 客户端（CLI 或应用）发起 Loop 请求。
2. Lightning Loop 服务构造一个潜艇互换：链上 HTLC 锁定到与闪电 HTLC 相同的原像。
3. 用户支付闪电 HTLC；揭示原像时，链上 HTLC 也变得可花费。
4. 原子执行：要么两腿都完成（用户得到互换），要么都不完成（用户通过超时回收原始资金）。

成本：

- **Loop 服务费**：互换金额的小百分比（通常约 0.1-0.5%，取决于互换方向和当前 Loop 费用）。
- **链上费用**用于互换的链上腿。
- **闪电路由费**通过到 Lightning Labs 的 Loop 节点。

Loop 是部署最广的潜艇互换服务但非唯一。PeerSwap（两个通道伙伴之间的点对点协议）、Boltz（替代商业服务）和其他多种实现存在。对于 LND 运营者，Loop 是阻力最小路径的集成；对于其他实现，替代方案可能更合适。

这是使闪电网络在运营上可行的基础设施之一：没有简便的再平衡，通道管理会痛苦得多。该服务在设计上是非托管的；互换的原子性意味着即使 Lightning Labs 在互换中途离线，用户的资金也通过链上超时路径安全。
