---
title: "Asmap"
slug: asmap
draft: false
shortDefinition: "Bitcoin Core 的一项功能，将 IP 地址映射到自治系统（AS），以多样化节点连接并缓解网络攻击。"
keyTakeaways:
  - "按 AS 多样化对等连接"
  - "旨在降低日蚀攻击风险"
  - "增强节点网络的去中心化"
sources: []
relatedTerms:
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
liveWidget: ~
---

**asmap** 是 [Bitcoin Core](/glossary/bitcoin-core) 的一项功能，将对等节点的 IP 地址映射到其**自治系统编号（ASN）**——即拥有和运营互联网 IP 空间范围的路由实体。利用此映射，节点将其出站对等连接分散到许多*不同*的 ASN，而不是冒险与同一网络运营商建立过多连接。

这对[日蚀攻击](/glossary/eclipse-attack)防御为何重要：

- **ASN 是一个真实世界的实体**（例如 AS15169 = Google，AS16509 = Amazon AWS 等）。属于一个 ASN 的所有 IP 在管理上都受同一权威管辖。
- **如果你的节点有 8 个出站对等节点都在 AWS 上**，那么能妥协 AWS 或胁迫他们的攻击者可以轻松隔离你的节点。他们控制了整条路径。
- **如果你的节点有跨越 8 个不同 ASN 的出站对等节点**——涵盖 Google、AWS、Hetzner、OVH、Digital Ocean 和各种家庭 ISP——攻击者必须妥协*所有*这些才能隔离你——难度大大增加。

asmap 文件只是一个压缩的查找表：给定一个 IP 地址，哪个 ASN 拥有它？Bitcoin Core 的 `addrman`（地址管理器）在选择对等节点时使用它来确保出站对等集的 ASN 多样性。

asmap 数据从公共 BGP 路由公告生成，与 Bitcoin Core 分开发布或下载。最常被引用的维护来源是 Sjors Provoost / Pieter Wuille 基于 BGP 表快照的版本。运营商可以使用自己的 asmap 文件。

对于大多数家庭节点运营商，默认的 asmap 行为已经足够好。对于认真对待纵深防御的运营商——高价值闪电路由节点、交易所运营的节点、或任何节点是有意义目标的——asmap 是值得了解的几种网络层防御之一。

参见[日蚀攻击](/glossary/eclipse-attack)了解此功能防御的威胁，[对等发现](/glossary/peer-discovery)了解更广泛的对等选择过程。
