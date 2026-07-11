---
title: "节点正常运行时间"
slug: node-uptime
draft: false
shortDefinition: "比特币节点持续在线和同步的时间，与网络可靠性和路由容量相关。"
keyTakeaways:
  - "表明中继和验证区块/交易的可靠性"
  - "更高的正常运行时间促进更健康、更稳健的网络"
  - "服务器级或维护良好的节点通常以近乎持续运行为目标"
sources: []
relatedTerms:
  - dedicated-ip-nodes
  - eclipse-attack
  - full-node
  - headless-node
  - hidden-service-node
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
liveWidget: ~
---

节点正常运行时间是比特币节点持续运行而未重启或断开连接的时间。

高正常运行时间是良好的网络公民。长期运行的节点：

- 积累了更丰富的对等发现视图（`peers.dat` 和 `addr` 集），使其更抵抗[日食攻击](/glossary/eclipse-attack)。
- 有温暖的内存池。新交易基于已建立的内存池视图而非冷启动状态验证。
- 在初始同步期间对其他对等方有用；可以立即提供历史区块。
- 不会因反复重连而搅动网络。

Bitcoin Core 不将正常运行时间作为突出指标显示，也没有保持节点在线的排行榜或奖励。对于普通全节点，偶尔停机（几分钟或几天）没问题；节点回来时追上即可。

正常运行时间对[闪电网络](/glossary/lightning-network)路由节点比普通全节点更重要。闪电通道需要双方可达才能更新，频繁离线的路由节点会看到通道被对手方关闭或无法转发支付。如果你运行路由节点，优化正常运行时间；如果你为自己的钱包运行全节点，不必追求多个 9。
