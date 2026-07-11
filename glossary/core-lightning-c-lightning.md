---
title: "Core Lightning（c-lightning）"
slug: core-lightning-c-lightning
draft: false
shortDefinition: "Blockstream 开发的主要闪电网络实现，专注于模块化和命令行灵活性。"
keyTakeaways:
  - "以模块化、插件友好的设计实现闪电网络"
  - "为高级或企业环境高度可配置"
  - "三大闪电网络实现之一（LND、Eclair、c-lightning）"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bolt
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
liveWidget: ~
---

Core Lightning（CLN），原名 **c-lightning**，是主要的[闪电网络](/glossary/lightning-network)实现之一。由 [Blockstream](https://blockstream.com/) 开发，用 C 语言编写，强调模块化、最小资源占用和插件架构，让开发者无需 fork 核心守护进程即可扩展功能。

与其他主要实现的对比：

- **CLN**——C 语言，模块化，插件优先。在高级工作流和资源效率方面表现出色。率先支持 [BOLT-12 offers](/glossary/lightning-invoice)。
- **LND**（Lightning Labs）——Go 语言，单体式，REST/gRPC API。在即插即用节点产品中最常见。用户群最大。
- **Eclair**（ACINQ）——Scala 语言，驱动 Phoenix 移动钱包。在移动/嵌入式用例方面表现出色。
- **LDK**（Spiral）——库，不是守护进程。嵌入到 Cash App、Mutiny 等应用中。

CLN 的插件系统是差异化因素。常见插件处理通道再平衡、高级路由策略、[拼接](/glossary/lightning-channel-splicing)、瞭望塔和记账等功能。其模式是"小核心，多插件"而非"带功能标志的大单体"。

对于 2026 年自托管闪电网络运营者，CLN 是一个强有力的选择，特别适合：

- 想在廉价硬件（树莓派、低端 VPS）上最小化资源使用的运营者。
- 受益于基于插件再平衡的路由节点。
- 任何想要原生 BOLT-12 支持的人。

不太适合想要点击安装图形体验的用户——Umbrel 等节点发行版历史上默认使用 LND，尽管许多现在提供 CLN 作为选项。更广泛的全景参见[闪电节点](/glossary/lightning-node)。
