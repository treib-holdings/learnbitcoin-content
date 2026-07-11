---
title: "难度"
slug: difficulty
draft: false
shortDefinition: "衡量找到低于网络目标的区块哈希有多困难的指标。每 2016 个区块（约两周）调整一次。"
keyTakeaways:
  - "将区块发现调节到平均约 10 分钟"
  - "根据全网算力自动调整"
  - "维持可预测的发行计划"
sources: []
relatedTerms:
  - coin-control
  - competitive-mining
  - consensus-parameter
  - difficulty-retargeting
  - double-spend
  - mining-subsidy
  - nonce
  - poisson-process
  - proof-work-pow
  - revenue-ths
sameAs:
  - "https://en.bitcoin.it/wiki/Difficulty"
liveWidget: ~
---

难度是一个定义当前挖一个比特币区块有多困难的数字。具体来说，它决定了[区块头](/glossary/block-header)[哈希](/glossary/hash)必须低于的**目标**值才能有效。难度更高 = 目标更低 = 平均需要更多尝试才能找到有效哈希。

难度设置使得在当前全球[算力](/glossary/hash-rate)下，区块平均每 10 分钟产出。随着算力增减，难度通过[难度调整](/glossary/difficulty-retargeting)每 2,016 个区块（大约每两周）调整。

规模感：自创世区块以来，比特币网络已进行了约 400 次难度调整。创世区块难度为 1。2026 年中期难度约为 132 万亿。这个比率——13 个数量级——是全球比特币挖矿业从桌面上的一个 CPU 到全球工业部门的全部增长。

难度是[工作量证明](/glossary/proof-work-pow)中使系统自调节的部分。无论是 10 个矿工还是 10,000 个矿工在竞争，区块仍然大约每 10 分钟产出，BTC 按计划发行。网络不关心硬件或电力的价格。它关心算力，并据此调整。

机制参见[挖矿深入探讨 §4](/rabbit-hole/mining)，当前难度和纪元进度参见[节点页面](/node/)。
