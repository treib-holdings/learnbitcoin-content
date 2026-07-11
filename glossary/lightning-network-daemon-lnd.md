---
title: "闪电网络守护进程（LND）"
slug: lightning-network-daemon-lnd
draft: false
shortDefinition: "由 Lightning Labs 开发的领先闪电网络软件实现，与 Core Lightning（Blockstream）、Eclair（ACINQ）和 LDK 并列。"
keyTakeaways:
  - "使用最广泛的闪电网络节点实现之一"
  - "提供 API 便于钱包和服务集成"
  - "通过 BOLT 规范与其他闪电网络实现兼容"
sources: []
relatedTerms:
  - bolt
  - bolt-11
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - fraudulent-channel-close
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - lightning-routing
liveWidget: ~
---

LND（Lightning Network Daemon）是由 Lightning Labs 自 2016 年起开发的[闪电网络](/glossary/lightning-network)主要实现之一。用 Go 语言编写，是部署最广泛的闪电节点软件，尤其在"盒装节点"产品（Umbrel、Start9、MyNode、RaspiBlitz）中，大多数用户从未看到底层守护进程。

与其他主要实现的对比：

- **LND（Lightning Labs）**——Go 语言，REST + gRPC API，单体架构。用户基数最大。强大的工具和集成。
- **[Core Lightning](/glossary/core-lightning-c-lightning)**（Blockstream）——C 语言，插件优先架构，资源占用小。通常是高级用户和路由运营者的选择。
- **Eclair**（ACINQ）——Scala 语言，针对移动端优化（驱动 Phoenix 钱包）和大容量路由。
- **LDK**（Spiral）——一个嵌入你自己应用的库而非独立守护进程。被 Cash App、Mutiny、Mercury Layer 使用。

LND 的特点：

- **API。** REST 和 gRPC 接口使集成对钱包和服务来说很简单。大多数闪电感知应用优先适配 LND。
- **瞭望塔支持。** 内建的 eltoo 式瞭望塔帮助在你离线时保护通道。
- **基于 Macaroon 的认证。** 细粒度能力令牌用于委托访问（例如让钱包查询余额但不能花费）。
- **一个值得注意的注意事项：** LND 尚未原生支持 [BOLT-12 offers](/glossary/lightning-invoice)。LNDK shim 项目可以在 LND 部署旁启用 BOLT-12，但原生支持仍在进行中。

LND 适用于大多数用例。如果你想要广泛的生态系统兼容性就选它。如果你想要原生 BOLT-12 或更小的资源占用就选 [CLN](/glossary/core-lightning-c-lightning)。
