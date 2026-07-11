---
title: "节点发现（Peer Discovery）"
slug: peer-discovery
draft: false
shortDefinition: "节点通过 DNS 种子、硬编码节点或已连接节点传播来发现彼此，扩展网络视图。"
keyTakeaways:
  - "引导节点的初始节点集合"
  - "结合 DNS 种子、内置种子和节点共享地址"
  - "避免依赖单一服务器或中心化目录"
sources: []
relatedTerms:
  - bip-159
  - dedicated-ip-nodes
  - eclipse-attack
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
sameAs:
  - "https://en.bitcoin.it/wiki/Network"
  - "https://en.bitcoin.it/wiki/Satoshi_Client_Node_Discovery"
liveWidget: ~
---

节点发现是一个新的[比特币节点](/glossary/node)找到其他节点进行连接的方式。没有初始节点列表，节点将处于孤立状态；没有持续发现，网络在节点更替后无法自我修复。

Bitcoin Core 使用多种机制，按回退顺序：

1. **DNS 种子。** 由受信任的比特币开发者维护（Pieter Wuille、Matt Corallo、Luke Dashjr、Christian Decker 等）。这些是像 `seed.bitcoin.sipa.be` 这样的域名，返回连接良好、近期活跃的全节点 IP 地址。节点在首次启动时查询它们。
2. **硬编码种子节点。** Bitcoin Core 二进制文件中附带的回退列表。仅在 DNS 种子不可达时使用。每次发布时重新编译当前活跃节点。
3. **节点传播（`addr` 协议）。** 一旦连接到一个或多个节点，节点向它们请求*它们的*节点列表，有机地扩展已知节点集合。这就是网络自我修复的方式：任何一台服务器宕机都不会破坏其他人发现节点的能力。
4. **手动配置。** 运营者可以通过 `-addnode` 或 `-connect` 标志指定节点。适用于不想信任 DNS 种子的主权设置。
5. **Tor / I2P / CJDNS。** Bitcoin Core 支持在隐私网络上进行节点发现，适用于在敌意防火墙后或想要隐藏 IP 的运营者。

DNS 种子步骤是引导过程中最中心化的部分，值得了解。恶意 DNS 种子可以向你的节点提供攻击者控制的节点列表（"日食攻击"设置）。防御措施是有多个独立种子；攻击者需要同时攻破大部分种子。种子本身由不同身份的知名个人在不同司法管辖区运营。

对于长期运行的节点，初始引导远不如持续的节点健康重要——Bitcoin Core 持续评估节点行为，断开不当行为的连接，并通过传播机制替换它们。参见 [Eclipse Attack](/glossary/eclipse-attack) 了解相关威胁模型。
