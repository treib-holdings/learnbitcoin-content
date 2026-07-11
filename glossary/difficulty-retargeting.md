---
title: "难度调整"
slug: difficulty-retargeting
draft: false
shortDefinition: "比特币每 2016 个区块自动重新校准挖矿难度，以维持 10 分钟的区块间隔。"
keyTakeaways:
  - "大约每两周进行一次（2016 个区块）"
  - "确保尽管算力变化，区块间隔保持一致"
  - "比特币自调节工作量证明设计的关键"
sources: []
relatedTerms:
  - block-height
  - block-time
  - competitive-mining
  - consensus-parameter
  - difficulty
  - halving-halvening
  - miner
  - mining-algorithm
  - nonce-exhaustion
  - poisson-process
  - proof-work-pow
sameAs:
  - "https://en.bitcoin.it/wiki/Difficulty"
  - "https://en.bitcoin.it/wiki/Target"
  - "https://en.bitcoin.it/wiki/Protocol_rules"
liveWidget: ~
---

难度调整是比特币无论网络上有多少[算力](/glossary/hash-rate)，都将平均[区块时间](/glossary/block-time)保持在约 10 分钟的机制。

规则是机械性的：

- 每 **2,016 个区块**（大约两周），每个节点计算这 2,016 个区块"纪元"实际花了多长时间。
- 如果**少于两周**，区块太快：[难度](/glossary/difficulty)**上升**。
- 如果**超过两周**，区块太慢：难度**下降**。
- 调整比率是成比例的，**限制在 ±300%** 以防止极端波动。

调整在下一个纪元开始时立即生效。新难度随后在接下来的 2,016 个区块中有效，循环重复。

这是比特币中最重要且最被低估的机制设计之一。没有委员会。没有美联储加息。网络观察自身条件并按固定时间表纠正，永远。一个拥有 80 MW 算力的矿工上线不会改变比特币的发行计划；他们只是在下次调整时触发更高的难度。

该机制在重大事件中经受住了考验：中国 2021 年的挖矿禁令（算力在几周内下降约 50%；难度在下次调整中下降了 28%），2022 年熊市矿工外流，以及四次减半。每次，网络都重新平衡并在一两个纪元内回归 10 分钟平均值。

实时当前纪元进度和下次调整估计参见[挖矿深入探讨 §4](/rabbit-hole/mining)或[节点页面](/node/)。
