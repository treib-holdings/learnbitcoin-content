---
title: "全节点"
slug: full-node
draft: false
shortDefinition: "下载并验证所有区块/交易、独立执行规则的比特币客户端。"
keyTakeaways:
  - "本地存储/验证整个区块链"
  - "比特币无信任模型的骨干"
  - "比轻量级/SPV 钱包需要更多资源"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-knots
  - byzantine-fault-tolerance
  - corrupted-chain-state
  - full-rbf
  - full-validation
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
sameAs:
  - "https://en.bitcoin.it/wiki/Full_node"
liveWidget: ~
---

全节点是下载、验证并存储整个区块链的比特币[节点](/glossary/node)——从 2009 年 1 月 3 日的[创世区块](/glossary/genesis-block)到当前尖端。它独立执行每条共识规则，只服从自己的解释。

2026 年的实际规格：

- **磁盘：** 约 600 GB，每年增长约 150 GB。2 TB SSD 可舒适使用数年。
- **内存：** 4 GB 可用；8 GB+ 舒适。
- **CPU：** 树莓派 4 及以上均可。初始同步是 CPU 密集型，需要几天；持续运行轻量。
- **带宽：** 每月数百 GB 出站，主要是向对等方提供区块。如果 ISP 不友好可通过配置限制。

软件几乎总是 [Bitcoin Core](/glossary/bitcoin-core)，参考实现。[Bitcoin Knots](/glossary/bitcoin-knots) 等替代品存在，但本质上是 Core 的修补版本。

为什么要费心运行全节点，当钱包可以连接到公共服务器？三个原因：

1. **你验证自己的交易。** 没有全节点，你信任告诉你的币是否有效的服务器。有了全节点，你自己检查数学——不需要信任。
2. **你执行共识。** 每个全节点是假设攻击者需要多说服的一个节点。网络对规则变更的抵抗力随独立验证者数量而扩展。
3. **你退出元数据泄露。** 向公共服务器查询"这笔交易确认了吗？"告诉该服务器你关心哪些地址。你自己的节点只看到全局链，从不知道你的具体兴趣。

比特币社区运行着估计 15,000-20,000 个公开可达的全节点，加上更多在 NAT 后或 Tor 上。你的也可以是其中之一。

完整指南参见[主权之旅](/journey/sovereignty)。
