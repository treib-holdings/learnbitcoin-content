---
title: "节点自动封禁"
slug: node-autoban
draft: false
shortDefinition: "自动封禁发送无效或垃圾数据的对等方，维护网络健康并减少资源滥用。"
keyTakeaways:
  - "防止单一来源反复发送无效或垃圾数据"
  - "缓解 DoS 和保护节点资源的常用技术"
  - "封禁持续时间通常是临时的，但持续滥用可延长"
sources: []
relatedTerms:
  - bitcoin-satellite
  - dedicated-ip-nodes
  - eclipse-attack
  - full-node
  - node
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
liveWidget: ~
---

节点自动封禁是 Bitcoin Core 的不当行为追踪。节点为每个对等方分配一个累计不当行为分数；某些违规增加分数；一旦分数超过阈值（默认 100），对等方被断开连接且其 IP 被封禁 24 小时。

什么行为得分：

- 无效区块（通常是即时封禁级别的违规：一次大额加分）。
- 违反共识规则的无效交易（较小分数，累加）。
- 格式错误的 P2P 消息、超大载荷、协议违规。
- 反复请求对等方应该已有的数据。
- DoS 式行为：垃圾 `INV`、请求不存在的数据、垃圾信息轰炸。

诚实对等方基本不会被封禁。几乎每个累积分数的行为都需要对等方软件中的 bug 或主动恶意。系统存在的目的是让攻击者持续消耗你的带宽和 CPU 处理垃圾变得昂贵。

封禁列表对每个节点是本地的。没有全局"不良对等方"注册表，也不应该有：全网对等封禁共识本身就是一个中心化向量。每个节点自行决定。你可以通过 RPC 用 `listbanned` / `setban` 检查和编辑自己的封禁列表。
