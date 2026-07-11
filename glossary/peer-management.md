---
title: "节点管理（Peer Management）"
slug: peer-management
draft: false
shortDefinition: "节点策略，决定保持多少连接、驱逐哪些节点、以及如何应对不当行为或垃圾信息。"
keyTakeaways:
  - "平衡入站和出站连接以维护网络稳定"
  - "对重复发送无效数据或垃圾信息的节点自动封禁"
  - "确保资源效率和稳健的区块/交易转发"
sources: []
relatedTerms:
  - bitcoin-core
  - eclipse-attack
  - node
  - node-operator
  - peer-bookmark
liveWidget: ~
---

节点管理是节点用来决定保持哪些连接、断开哪些连接以及如何应对不当行为的一套规则。

Bitcoin Core 在 2026 年的默认设置：

- 8 个出站全转发节点（主动传播交易和区块的节点）。
- 2 个出站仅区块转发节点，只接收区块。它们强化了对基于交易的日食攻击的防御，因为它们不暴露节点已看到哪些交易。
- 最多约 115 个入站节点，通过 `maxconnections` 配置。
- 1 个出站"探索"连接，短暂探测新节点以测试可达性然后断开。

出站节点选择优先考虑多样性：不同的 ASN（使用内置的 `asmap` 文件）、不同的网络类型（明网、Tor、I2P）、不同地理位置。这种多样性是对[日食攻击](/glossary/eclipse-attack)的主要防御，攻击者试图用他们控制的节点填满你的所有节点槽位。

不当行为按节点跟踪。无效消息、畸形协议流量、重复无用请求：节点评分上升，最终触发断开和临时封禁（参见 [node-autoban](/glossary/node-autoban)）。诚实节点几乎永远不会触发。

节点管理的艺术在于平衡。足够多的节点以保持冗余和多样路径，但不要多到资源使用失控或使节点成为资源耗尽攻击的目标。Bitcoin Core 的默认设置是合理的；大多数运营者不应改动它们。
