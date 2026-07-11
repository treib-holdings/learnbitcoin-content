---
title: "节点运营者"
slug: node-operator
draft: false
shortDefinition: "运行比特币节点以验证区块/交易并帮助维护网络的个人或实体。"
keyTakeaways:
  - "直接执行共识规则，不依赖中间方"
  - "可以通过中继交易/区块服务网络"
  - "帮助维护抗审查性和协议独立性"
sources: []
relatedTerms:
  - bitcoin-knots
  - bitcoin-satellite
  - dedicated-ip-nodes
  - full-node
  - headless-node
  - hidden-service-node
  - i2p-invisible-internet-project
  - node
  - node-autoban
  - node-headcount
  - node-synchronization
  - node-uptime
liveWidget: ~
---

节点运营者是任何运行比特币全节点的人。就是这样。没有注册、没有许可、没有最低资本。你下载 Bitcoin Core（或 Knots、btcd、或打包发行版），指向某个磁盘，如果可以打开一个端口，你就是节点运营者了。

运行节点时你实际做的事：

- 根据共识规则验证每个区块和每笔交易。没有任何东西能不经你自己检查就进入你的链视角。
- 向对等方中继交易和区块，帮助网络传播。
- 如果接受入站连接，在初始同步期间向新节点提供历史数据。
- 拒绝跟随你不同意的任何规则变更。这是比特币保持用户控制的结构性机制。

运行节点不赚钱。区块奖励属于[矿工](/glossary/miner)。你获得的是独立性。你不再信任第三方告诉你自己余额、自己交易或区块是否有效的真相。

2026 年的硬件要求不高。约 1 TB SSD、四核 CPU、4-8 GB 内存、不错的互联网。树莓派 5 或任何旧笔记本电脑都能舒适运行节点。打包发行版（Umbrel、Start9、RaspiBlitz、MyNode、Citadel）使安装大致像安装一个应用一样简单。
