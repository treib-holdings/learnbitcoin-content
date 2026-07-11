---
title: "BIP 31（pong 消息）"
slug: bip-31-pong-message
draft: false
shortDefinition: "在比特币 P2P 网络中引入对 'ping' 的 'pong' 回复，确保双方节点保持响应。"
keyTakeaways:
  - "创建标准化的 ping-pong 节点健康检查"
  - "简化检测陈旧连接"
  - "帮助维护稳定的 P2P 网络"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
liveWidget: ~
---

BIP 31 由 Mike Hearn 于 2012 年撰写，为比特币 P2P 协议添加了 `pong` 消息。在 BIP 31 之前，现有的 `ping` 消息没有要求的回复：节点可以发送 `ping`，对等节点可能忽略它或直接断开；你无法分辨是哪种。

BIP 31 修复了这个问题。`ping` 现在包含一个随机选择的 64 位随机数；对等节点应用回复 `pong` 回显相同的随机数。往返确认对等节点存活并产生可测量的延迟。

虽然听起来不起眼，但它使以下功能成为可能：

- **存活检测。**在合理窗口内不返回 `pong` 的节点会被断开，释放连接槽。
- **基于延迟的对等选择。**Bitcoin Core 偏好响应更快的对等节点进行区块传播。
- **NAT 保活。**周期性 ping/pong 防止有状态防火墙和 NAT 映射在空闲期间断开连接。

这是一个不起眼的 BIP，因为协议没有它基本上无法工作。通过软件版本协商激活：支持 BIP 31 的对等节点（自 2012 年 3 月发布的 Bitcoin 0.6.1 起实际上所有对等节点）使用它；旧对等节点回退到无回复的 ping。

规范：[BIP-31](https://github.com/bitcoin/bips/blob/master/bip-0031.mediawiki)。
