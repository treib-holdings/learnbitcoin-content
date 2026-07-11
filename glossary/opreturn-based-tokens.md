---
title: "基于 OP_RETURN 的代币"
slug: opreturn-based-tokens
draft: false
shortDefinition: "早期代币方案，使用 OP_RETURN 将代币元数据嵌入比特币交易，不如侧链或闪电网络高效。"
keyTakeaways:
  - "在 OP_RETURN 字段中存储代币信息，通常称为"染色币""
  - "没有直接的共识执行代币规则，依赖外部解析"
  - "更复杂的解决方案已出现（如侧链、闪电网络）以提高效率"
sources: []
relatedTerms:
  - bitlicense
  - colored-coins
  - opreturn
liveWidget: ~
---

基于 OP_RETURN 的代币是通过在 [OP_RETURN](/glossary/opreturn) 输出中编码代币所有权元数据来在比特币之上发行资产的早期尝试。比特币协议对这些代币一无所知——它们是由扫描链上特定 OP_RETURN 模式的客户端软件执行的约定。

谱系：

- **染色币（2012-2014）。** 最初概念：用元数据"染色"特定聪使其代表股票、商品或其他资产。ChromaWallet 等实现。
- **Counterparty（2014+）。** 在比特币之上使用 OP_RETURN 编码操作构建代币化层。托管了 ICO、资产发行和最早的"比特币上的 NFT"例子之一（Rare Pepes，2016）。2026 年仍以小众能力运营。
- **Omni Layer。** 2014-2019 年在比特币上使用 OP_RETURN 发行 Tether USD，之后 Tether 迁移到 Ethereum/Tron 等。仍有一些遗留 USDT-Omni 在流通。
- **RGB 协议（较新）。** 不严格基于 OP_RETURN；使用[无脚本脚本](/glossary/scriptless-scripts)和客户端验证，但在给比特币添加资产发行层方面概念上相似。

基于 OP_RETURN 代币的根本权衡：

- **无共识执行。** 比特币节点不验证代币逻辑。如果客户端软件有 bug，整个代币生态系统可能不同步。原生 BTC 和代币转移之间没有"原子互换"——它们是覆盖在同一条链上的独立概念。
- **链膨胀。** 每个代币操作消耗区块空间，支付主网手续费，用于与比特币货币用途无关的活动。
- **中心化发行和监督。** 代币发行者和追踪基础设施倾向于中心化；链膨胀无论如何都会发生。

现代比特币之上资产发行的替代方案：[Liquid](/glossary/liquid-network)（联邦侧链）、Stacks（比特币锚定链）、闪电原生发票协议和 RGB（客户端验证）。都有不同权衡；没有一个接近以太坊式代币生态系统的规模。

基于 OP_RETURN 的代币主要是历史好奇心。围绕铭文的当代争议在结构上相似但通过 Taproot 见证数据而非 OP_RETURN 发生。
