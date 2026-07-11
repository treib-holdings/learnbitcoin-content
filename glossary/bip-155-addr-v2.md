---
title: "BIP 155（Addr v2）"
slug: bip-155-addr-v2
draft: false
shortDefinition: "扩展网络地址格式以在 P2P 消息中支持更长地址（如 Tor v3）。"
keyTakeaways:
  - "支持 Tor v3 等新地址类型"
  - "现代化 addr 消息以适应灵活格式"
  - "改善比特币的网络互操作性"
sources: []
relatedTerms:
  - address
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - node
  - peer-bookmark
  - peer-discovery
  - peer-management
liveWidget: ~
---

[BIP-155](https://github.com/bitcoin/bips/blob/master/bip-0155.mediawiki)更新了比特币的点对点协议以支持扩展网络地址类型——特别是 Tor v3（现代 Tor 洋葱地址，比 v2 更长）、[I2P](/glossary/i2p-invisible-internet-project)和 CJDNS。

问题：比特币 P2P 协议中的传统 `addr` 消息格式只支持 16 字节网络标识符。这适合 IPv4（4 字节）、IPv6（16 字节）和 Tor v2（10 字节，已弃用）。但*不适合* Tor v3（32 字节 ed25519 密钥）、I2P（32 字节 base32 目标）或 CJDNS（某些配置下 16 字节标识符）。

当 Tor v3 在 2021 年弃用并替换 Tor v2 时，比特币需要一种在网络上共享 Tor v3 地址的方式。BIP-155 提供了这个能力。

技术变更：新的 `addrv2` 消息替代 `addr`，用于信号支持的节点。每个地址条目现在包含一个类型字节（IPv4、IPv6、Tor v2[遗留]、Tor v3、I2P、CJDNS）和可变长度载荷。不支持 `addrv2` 的旧节点回退到传统 `addr` 消息，永远不会收到这些地址类型。

Bitcoin Core 自 0.21 版本（2021 年）起内置 BIP-155 支持。它是让 [Tor 隐藏服务](/glossary/tor-hidden-service)和 I2P 节点作为一等网络参与者集成到 gossip 驱动的[对等发现](/glossary/peer-discovery)过程中（而非作为权宜之计）的基础。

对用户大多不可见；对越来越多运行在隐私网络上的比特币节点来说是承重基础设施。
