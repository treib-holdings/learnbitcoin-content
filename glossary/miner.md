---
title: "矿工"
slug: miner
draft: false
shortDefinition: "使用专用硬件寻找有效区块哈希的参与者，保护网络安全并赚取区块奖励。"
keyTakeaways:
  - "搜索满足网络难度的区块哈希"
  - "获得新铸造的 BTC（补贴）加上交易手续费"
  - "当今挖矿领域主要是大规模 ASIC 运营"
sources: []
relatedTerms:
  - coinbase-transaction
  - cpu-mining
  - difficulty-retargeting
  - gui-miner
  - hash
  - hash-rate
  - merged-mining
  - miner-capitulation
  - mining
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-rig
  - mining-software
  - mining-subsidy
  - revenue-ths
liveWidget: ~
---

矿工是运行硬件参与比特币[工作量证明](/glossary/proof-work-pow)的任何人——生成候选[区块头](/glossary/block-header)并哈希它们，试图找到足够有效以向网络提议的区块。作为回报，矿工收集[区块奖励](/glossary/block-reward)：新铸造的 BTC 加上他们包含的所有交易手续费。

实践中，今天的"矿工"是运行数千个 ASIC 芯片的大型工业运营，位于廉价电力附近（雨季四川的水电、西德克萨斯的搁浅天然气、冰岛的地热、法国的离峰核电）。硬件是专用的；经济利润极薄；利润率取决于一千瓦时电力的成本。

较小的参与者仍然存在。一两台机器的独立矿工偶尔通过彩票式硬件赢得区块。爱好者为体验运行小型矿机。但大多数生产算力通过[矿池](/glossary/mining-pool)流动——将小贡献者聚集在一起，使每人获得平滑的支付，而不是等待数年才能独立找到一个区块。

矿工不是比特币的统治者。协议由每个全节点执行，而非矿工。矿工可以选择*哪些有效交易*包含在他们的区块中，但他们不能改变规则。任何违反共识的区块（超过允许的补贴、无效签名等）都会被地球上每个诚实节点拒绝。

请参阅[挖矿深入探讨](/rabbit-hole/mining)了解完整机制，以及[矿池](/glossary/mining-pool)了解关于矿工实际组织方式的中心化担忧。
