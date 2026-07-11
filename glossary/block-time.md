---
title: "出块时间"
slug: block-time
draft: false
shortDefinition: "连续区块之间的平均间隔，比特币目标约为 10 分钟。"
keyTakeaways:
  - "目标为平均每 10 分钟一个新区块"
  - "难度调整以维持稳定间隔"
  - "平衡安全性和吞吐量的核心设计选择"
sources: []
relatedTerms:
  - bip-152-compact-blocks
  - block
  - block-header
  - block-height
  - block-propagation
  - blockchain
  - difficulty-retargeting
  - mtp-median-time-past
sameAs:
  - "https://en.bitcoin.it/wiki/Block_timestamp"
  - "https://en.bitcoin.it/wiki/Confirmation"
liveWidget: ~
---

比特币的目标出块时间是 10 分钟。这是[难度](/glossary/difficulty)试图通过调整挖矿难题难度来维持的*平均*间隔。不是你应该期望等待任何单个区块的时间。

挖矿是一个[泊松过程](/glossary/poisson-process)。每秒，世界上每个矿工都在独立尝试随机数。没有"到期"的区块。区块之间的实际间隔呈指数分布：许多区块在 1-5 分钟内产生，一些需要 20-40 分钟，每年有几次一个区块需要超过一小时。10 分钟这个数字只是长时间窗口内的均值。

选择 10 分钟（而非莱特币的 1 分钟或以太坊的 15 秒）是刻意的权衡：

- **足够长**让新区块在下一个区块被发现之前传播到几乎每个节点。这最小化[孤块](/glossary/orphan-block)和链分叉。
- **足够长**使每个区块的[工作量证明](/glossary/proof-work-pow)是有意义的安全性。
- **足够短**使确认以有用的速度积累。六次确认（大额的传统"已结算"阈值）约为一小时。

每 2,016 个区块的[难度重定向](/glossary/difficulty-retargeting)在全球算力增长（或减少）时将平均值拉回 10 分钟。参见[挖矿 rabbit hole §4](/rabbit-hole/mining)了解完整版本。
