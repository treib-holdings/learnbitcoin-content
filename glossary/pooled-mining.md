---
title: "矿池挖矿（Pooled Mining）"
slug: pooled-mining
draft: false
shortDefinition: "多名矿工将算力合并到矿池中，按贡献的工作量分配奖励。"
keyTakeaways:
  - "通过共享区块奖励降低收入方差"
  - "在比特币 ASIC 时代占主导地位，远超单独挖矿"
  - "少数矿池控制大部分算力可能引发中心化担忧"
sources: []
relatedTerms:
  - hashlet
  - mining-pool
  - mining-subsidy
  - revenue-ths
liveWidget: ~
---

矿池挖矿是将许多[矿工](/glossary/miner)的[算力](/glossary/hash-rate)合并为单一协调行动的做法，奖励按贡献的工作量在参与者之间分配。这是 2026 年几乎所有比特币挖矿的方式。

机制：每个矿工提交"份额"——满足低于实际网络目标难度的区块头候选。份额证明矿工在做真实工作，但本身不是有效区块。当矿池中*任何人*找到真实区块时，[区块奖励](/glossary/block-reward)按提交的份额比例分配给所有贡献矿工。

矿工为何加入矿池：

- **降低方差。** 一个算力 1 PH/s 的单独矿工平均每约 26 年才能找到一个区块。围绕这个平均值的方差是残酷的：他们可能在 2026 年找到 3 个，然后在接下来 50 年一个都找不到。矿池将其平滑为更小、更稳定的收入流。
- **运营简化。** 矿池处理区块模板构建、支付会计和其他矿工不想自己运行的基础设施。
- **消除单独挖矿幻想。** 小规模单独挖矿的肮脏秘密本质上是买彩票。矿池对方差是诚实的。

矿池生态系统：

- **主要矿池**（Foundry USA、AntPool、ViaBTC、F2Pool）控制了网络大部分算力。参见 [Mining Pool](/glossary/mining-pool) 了解详情。
- **较小的/去中心化矿池**如 Ocean 和 Braiins 试图在交易选择或支付方案上提供不同策略的替代选择。
- **Stratum V2** 是协议升级，让个别矿工在仍使用矿池平滑方差的同时选择自己的交易——对挖矿中心化问题的有意义的结构性修复。

矿池挖矿一直是中心化担忧的来源。但对于除最大挖矿操作外的所有人来说，它又是真正必要的。希望——而非确定性——是 Stratum V2 的采用逐渐将权力交还给矿池中的个别矿工。

参见 [Mining Pool](/glossary/mining-pool) 了解更广泛的全景，[Mining Centralization](/glossary/mining-centralization) 了解结构性辩论。
