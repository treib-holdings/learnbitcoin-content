---
title: "矿工可提取价值（MEV）"
slug: miner-extractable-value-mev
draft: false
shortDefinition: "源自以太坊的概念，指通过重新排序/注入交易获利；在比特币中因更简单的脚本而受限。"
keyTakeaways:
  - "主要与智能合约链相关（如以太坊）"
  - "比特币有限的脚本减少了抢先交易或合约利用机会"
  - "矿工可能为更高手续费重新排序但深层 MEV 不常见"
sources: []
relatedTerms:
  - chain-analysis
  - competitive-block-propagation
  - competitive-mining
  - fee-sniping
  - hidden-miner-tax
  - mining
  - mining-algorithm
  - mining-colocation
  - mining-centralization
liveWidget: ~
---

矿工可提取价值（MEV）是矿工通过故意排序、包含或排除特定交易从区块中提取的超出标准[区块奖励](/glossary/block-reward)的利润。术语起源于以太坊生态系统，在那里 MEV 是一个重大且被充分研究的现象。在比特币中，实践中要小得多。

MEV 在以太坊上的样子：

- **DEX 交易抢先。** 矿工看到 Uniswap 上一个大额待处理买单，在前面插入自己的买单，让受害者的买单执行（推高价格），然后立即卖出获利。标准"三明治攻击"。
- **套利提取。** 矿工捕获本会被机器人获取的有利可图的套利机会，因为矿工控制区块内的交易包含顺序。
- **清算竞赛。** 谁的交易先到谁清算抵押不足的头寸；矿工通过定义赢得竞赛。

到 2022 年，MEV 在以太坊上是年产值数十亿美元的产业，有专门的基础设施（Flashbots、MEV-Boost）捕获和重新分配 MEV。

为什么比特币的 MEV 大幅减少：

- **有限脚本。** [比特币脚本](/glossary/bitcoin-script)不支持产生大型 MEV 的复杂 DEX、借贷或清算合约。没有链上 Uniswap 可以抢先。
- **UTXO 模型。** 比特币的 [UTXO](/glossary/utxo-unspent-transaction-output) 模型没有以太坊账户模型那种使 MEV 丰富的"共享全局状态"。每个 UTXO 是独立的。
- **更简单的费率市场。** 比特币矿工确实按费率重新排序交易（一种小型 MEV），但动态范围比以太坊合约驱动的机会窄。

比特币上确实存在的 MEV：

- **拥堵时刻的费用竞价战。** 谁付更多谁先打包。这是基本费率市场，有时被标记为 MEV。
- **[手续费狙击](/glossary/fee-sniping)。** 矿工可以故意重组区块以捕获旧的高费交易。存在防御措施（锁定时间锚定交易）。
- **铭文/Ordinals 排序。** 2023-2024 年铭文铸造期间出现了一些类 MEV 动态，矿工可以优先处理特定提交。

简短版本：MEV 是一个有意义的概念，比特币的设计在很大程度上避免了，主要是因为比特币有意保持基础层精简。这是不作为智能合约平台的不为人知的好处之一。
