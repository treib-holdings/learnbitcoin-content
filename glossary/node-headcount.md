---
title: "节点数量"
slug: node-headcount
draft: false
shortDefinition: "网络上有多少比特币节点的估计，通常通过直接扫描或 DNS 种子获取。"
keyTakeaways:
  - "仅捕获监听节点，遗漏隐藏或仅 Tor 的设置"
  - "常被用作去中心化基准"
  - "确切数字难以获得，凸显比特币的无许可性质"
sources: []
relatedTerms:
  - bitcoin-satellite
  - byzantine-fault-tolerance
  - dedicated-ip-nodes
  - decentralization
  - eclipse-attack
  - full-node
  - hidden-service-node
  - node
  - node-autoban
  - node-operator
  - node-synchronization
  - node-uptime
liveWidget: ~
---

估计有多少比特币节点存在很困难，因为网络是无许可的，许多节点不想被计数。

两种计数：

- 可达（监听）节点。公共扫描器（Bitnodes 是权威的）扫描 IPv4 / IPv6 空间和 Tor 描述符，寻找接受入站连接的对等方。截至 2026 年，这个数字在 1.8 万到 2.2 万左右。这是网络面向公众的部分。
- 所有节点。包括可达的一切加上 NAT 后的、住宅防火墙后的或只是不为入站广告的一切。这里估计从 5 万到 10 万以上，误差范围很大。

不同方法论产生不同数字。Luke Dashjr 的网站历史上计数更激进，产生更高总数；Bitnodes 保守计数。两者都没错；它们回答的是略有不同的问题。

节点数量是有用的方向性指标，不是去中心化的完美代理。真正重要的是规则是否统一执行以及网络是否有足够的独立运营者使捕获不可行。2 万个全在一个云提供商的节点比分布在 80 个国家家庭互联网上的 5 千个节点更中心化。结构组成与原始数字一样重要。
