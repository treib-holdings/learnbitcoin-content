---
title: "闪电节点"
slug: lightning-node
draft: false
shortDefinition: "开启、维护和路由闪电通道的软件，保护链下交易并转发支付。"
keyTakeaways:
  - "与闪电网络交互以发送、接收和路由链下支付"
  - "维护通道余额和网络拓扑状态"
  - "可能为连接的节点运营者产生路由费收入"
sources: []
relatedTerms:
  - autopilot-lightning
  - bolt
  - bolt-11
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - delayed-payment-channel
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-probe
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
  - onion-routing-lightning
  - tor-hidden-service
  - wumbo-channels-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
liveWidget: ~
---

闪电节点是参与[闪电网络](/glossary/lightning-network)的软件。它管理你的[支付通道](/glossary/lightning-channel)，跟踪网络 gossip 图，在被请求时通过自身路由支付，并让你发送和接收即时链下支付。

截至 2026 年的主要实现：

- **LND**（Lightning Labs）——用 Go 编写，广泛用于 Umbrel、Start9、MyNode 等盒装节点产品。
- **[Core Lightning](/glossary/core-lightning-c-lightning)**（Blockstream，前称 c-lightning）——用 C 编写，模块化插件架构，轻量。
- **Eclair**（ACINQ）——用 Scala 编写，驱动 Phoenix 移动钱包。
- **LDK**（Lightning Dev Kit，Spiral）——一个嵌入你自己应用的库而非独立守护进程。被 Cash App、Mutiny、Mercury Layer 等使用。

运行闪电节点在运营上的成本：

- **正常运行时间。** 节点必须在线才能发送、接收和监视欺诈尝试。短暂停机没问题，但长期缺席（数周）会开始造成问题。
- **链上资金。** 通道由链上比特币注资。开通道会锁定这些 BTC 直到关闭。
- **主动流动性管理。** 入站流动性（你的通道对手方在你通道一侧有余额）不会默认出现，通常需要购买或通过路由赚取。
- **监视欺诈。** 如果通道对手方广播旧状态，你有一个固定窗口来惩罚他们。瞭望塔服务就是为此而存在的。

你可能赚取的：当你的节点转发多跳路由支付时赚取小额**路由费**。实际上每笔很小，但如果运行一个连接良好的节点会累积。大多数家庭闪电运营者赚不到有意义的收入；商业路由节点是不同的类别。

对于 2026 年的大多数用户，托管闪电钱包（Phoenix、Wallet of Satoshi 等）是实际的入门点。运行自己的节点是主权的答案，对于关心这一属性的用户来说值得一做。请参阅[闪电网络](/glossary/lightning-network)了解协议视角。
