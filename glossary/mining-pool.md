---
title: "矿池"
slug: mining-pool
draft: false
shortDefinition: "矿工聚集算力并按贡献比例分享奖励的集体。"
keyTakeaways:
  - "整合资源使矿工获得更稳定的支付"
  - "矿池成员获得区块奖励的份额"
  - "少数矿池主导可能导致中心化"
sources: []
relatedTerms:
  - block-reward
  - coinbase-transaction
  - merged-mining
  - miner
  - mining
  - mining-algorithm
  - mining-colocation
  - mining-centralization
  - mining-front-end
  - mining-rig
  - mining-software
  - mining-subsidy
  - pool-hopping
  - pooled-mining
  - retail-mining
  - revenue-ths
sameAs:
  - "https://en.wikipedia.org/wiki/Mining_pool"
  - "https://www.wikidata.org/wiki/Q18207063"
  - "https://en.bitcoin.it/wiki/Mining_pool"
liveWidget: ~
---

矿池是一群[矿工](/glossary/miner)联合算力一起找区块并按比例分配奖励的群体。

矿池存在的原因：方差。拥有全球算力 0.1% 的矿工平均约 70 天找到一个区块——但围绕这个平均值的方差极大。有些月份找到三个；有些月份零个。电费每月都要付，"按年平均"不是可行的现金流。矿池通过聚合许多矿工的算力来解决这个问题，使区块更频繁地出现（与合并算力成正比），并根据每个贡献者提交的工作"份额"支付。现代份额方案（PPLNS、FPPS）也击败了[矿池跳换](/glossary/pool-hopping)——一种利用早期份额提取超额奖励的历史漏洞。

今天最大的矿池（Foundry USA、AntPool、ViaBTC、F2Pool 等少数几个）合计控制全球算力的一半以上。这是让比特币开发者夜不能寐的中心化担忧：如果几个矿池运营者一致决定审查某些交易或尝试重组，他们有算力去尝试。

制衡是**矿池运营者不是矿工**。矿池中的算力来自可以随意切换矿池的个体矿工。如果矿池开始行为不当，矿工可以——而且确实会——在数小时内迁移到其他地方。还有工作正在进行将权力推回给个体矿工：**Stratum V2** 是一种协议升级，让矿工（而非矿池运营者）选择哪些交易进入他们正在哈希的区块。部署缓慢但是结构性修复。

在运营者方面，实际管理矿池连接、工作分配和逐 ASIC 监控的层是[挖矿前端](/glossary/mining-front-end)——对于有一台 ASIC 的爱好者只是标准固件，对于运行数千台的工业运营者则是专用机队管理技术栈。

当前状态不舒适但非灾难性。请参阅[挖矿深入探讨 §8](/rabbit-hole/mining) 了解挖矿中心化及其实际演变的更长讨论。
