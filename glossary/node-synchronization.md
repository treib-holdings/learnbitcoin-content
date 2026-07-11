---
title: "节点同步"
slug: node-synchronization
draft: false
shortDefinition: "节点启动或停机后重新连接时下载和验证所有区块的过程。"
keyTakeaways:
  - "确保节点拥有完整的已验证区块链历史"
  - "对旧节点或大量积压耗时较长"
  - "对独立、最小信任运营至关重要"
sources: []
relatedTerms:
  - bitcoin-knots
  - bitcoin-satellite
  - corrupted-chain-state
  - dedicated-ip-nodes
  - full-node
  - full-validation
  - headless-node
  - hidden-service-node
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-uptime
liveWidget: ~
---

节点同步，几乎总是称为初始区块下载（IBD），是全新节点追赶到链尖的过程。

2026 年步骤大致是：

1. 连接到对等方并下载完整的区块头链（约 88 万个头）。几分钟到几小时。
2. 验证区块头链：工作量证明、祖先链、难度调整。
3. 下载所有区块体（总共约 600 GB）并验证每个区块中的每笔交易。慢：在快速 NVMe SSD 和现代 CPU 上 12-24 小时，在树莓派或机械硬盘上几天。
4. 进入"尖端模式"：只处理到达的新区块。

可用加速：

- 假设有效（AssumeValid）：Bitcoin Core 在编译时设置的检查点，跳过某个高度之前的签名验证（但仍验证其他所有内容）。节省大量时间。
- 剪枝：丢弃已验证的区块体，只保留 UTXO 集。节省磁盘空间但不允许你服务历史区块。
- 区块链剪枝节点验证一切但只保留最近的数据。

对于已经在运行然后离线一段时间的节点，同步只是追赶错过的区块——通常很快（几分钟到几小时，取决于停机时间）。
