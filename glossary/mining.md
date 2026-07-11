---
title: "挖矿"
slug: mining
draft: false
shortDefinition: "使用计算能力解决比特币的工作量证明、验证交易并保护区块链。"
keyTakeaways:
  - "通过工作量证明计算保护账本"
  - "在竞争性市场中分配新 BTC 发行"
  - "高能源消耗但提供稳健的去中心化"
sources:
  - { label: "Mining rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/mining" }
relatedTerms:
  - competitive-mining
  - cpu-mining
  - geographic-mining-distribution
  - hash-rate
  - hidden-miner-tax
  - miner
  - miner-capitulation
  - miner-extractable-value-mev
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-centralization
  - mining-rig
  - mining-software
  - mining-subsidy
  - retail-mining
  - revenue-ths
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_protocol"
  - "https://www.wikidata.org/wiki/Q17001427"
  - "https://en.bitcoin.it/wiki/Mining"
liveWidget: ~
---

挖矿是新[区块](/glossary/block)被添加到比特币链和新 BTC 进入流通的过程。这是一场持续的全球竞赛：每个[矿工](/glossary/miner)从[内存池](/glossary/mempool)交易构建候选区块，然后用不同[nonce](/glossary/nonce)哈希其区块头，直到找到一个双重 SHA-256 结果低于当前[难度](/glossary/difficulty)目标的值。

赢得竞赛的人获得两样东西：

- **[区块补贴](/glossary/block-subsidy)**——目前 3.125 BTC 新发行的比特币。
- **交易手续费**——他们打包进区块的每笔交易的手续费。

总支付——[区块奖励](/glossary/block-reward)——就是支付电力和硬件的收入。没有其他有意义的收入来源。没有其他有意义的挖矿激励。

全球算力目前约 700 EH/s（每秒 7 × 10^20 次哈希）。每个比特币区块代表地球上每个矿工同时哈希约 10 分钟——每个区块约 4 × 10^23 次尝试。那些能量，按照设计，就是使链重写昂贵的成本。要逆转最近的区块，攻击者需要比全世界其他所有人挖真实链更快地挖出更长的分叉。交易埋得越深，逆转它就越不可能。

挖矿有时被描述为"比特币的能源问题"。更准确地说，它是比特币的*安全模型*。消耗的能源买来了链整个历史中每笔交易的[不可篡改性](/rabbit-hole/mining/rabbit-hole)。请参阅[挖矿深入探讨](/rabbit-hole/mining)了解完整版本。
