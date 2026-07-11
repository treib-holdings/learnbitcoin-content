---
title: "区块传播"
slug: block-propagation
draft: false
shortDefinition: "新挖出的区块在全球比特币节点间传输的过程。"
keyTakeaways:
  - "矿工向对等节点广播新发现的区块"
  - "高效方法减少带宽和孤块率"
  - "快速传播维护全球网络共识"
sources: []
relatedTerms:
  - bip-152-compact-blocks
  - bitcoin-satellite
  - block
  - block-explorer
  - block-header
  - block-height
  - block-time
  - blockchain
  - competitive-block-propagation
  - competitive-mining
  - reorg-reorganization
  - stale-block
liveWidget: ~
---

区块传播是新挖出的区块从发现它的矿工传到网络上其他每个节点的方式。速度很重要：在对等节点听说新区块之前，它可能仍在之前的尖端上挖矿或构建，时间越长，[孤块/陈旧区块](/glossary/miner-orphan-rate)碰撞的几率越高。

协议级优化：

- **紧凑区块（BIP 152）。**发送方不发送完整区块（1.5+ MB），而是传输区块头加短交易 ID。接收方从其内存池中已有的交易重建区块。带宽下降一个数量级。Bitcoin Core 0.13（2016 年）起内置。
- **高带宽模式。**节点告诉少数连接良好的对等节点"在验证完成前就积极地给我发紧凑区块"。以带宽为代价减少延迟。
- **FIBRE / Falcon / 类似网络。**矿工和基础设施提供商运行的专用低延迟中继骨干。它们使用 UDP、前向纠错码和直接对等连接，在数十毫秒内将区块推送到全球。
- **比特币卫星。**Blockstream 的地球静止广播（见 [bitcoin-satellite](/glossary/bitcoin-satellite)）为区块数据提供冗余的非互联网路径。

为什么需要这么多工程：每多一秒传播延迟都为下游矿工增加比例性的孤块风险。在全球规模下这影响矿工盈利能力，这就是为什么最大的挖矿运营大量投资于连接性。协议级持续改进以使竞争环境不完全向连接最好的倾斜。

2026 年典型传播：新区块在 5-8 秒内到达约 80% 的可达节点，30 秒内基本到达所有人。
