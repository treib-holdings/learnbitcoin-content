---
title: "区块奖励"
slug: block-reward
draft: false
shortDefinition: "矿工找到有效区块获得的激励，由区块奖励加交易手续费组成。"
keyTakeaways:
  - "结合新发行 BTC（奖励）和用户支付的手续费"
  - "减半事件每 21 万区块减少奖励"
  - "确保矿工保护网络的持续激励"
sources: []
relatedTerms:
  - bip-42
  - block
  - block-explorer
  - block-size
  - block-subsidy
  - coinbase-transaction
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-subsidy
sameAs:
  - "https://en.bitcoin.it/wiki/Controlled_supply"
  - "https://en.bitcoin.it/wiki/Mining"
liveWidget: ~
---

区块奖励是矿工找到有效区块获得的总补偿。它有两个部分：

1. **[区块奖励](/glossary/block-subsidy)**——新发行的 BTC，目前每区块 3.125，每 210,000 个区块减半，直到约 2140 年归零。
2. **交易手续费**——矿工选择包含在区块中的每笔交易手续费之和。可变；取决于内存池状况。

两部分都通过 [coinbase 交易](/glossary/coinbase-transaction)支付给矿工——每个区块中特殊的第交易。在比特币早期，奖励几乎占全部（交易基本免费）。如今手续费通常贡献 3-10%，内存池拥堵时偶尔飙升。

比特币安全性的长期经济问题是手续费能否完全替代不断缩减的奖励。到目前为止趋势与设计一致——随着比特币使用成熟，每字节手续费持续上涨。参见[挖矿 rabbit hole §5](/rabbit-hole/mining)了解完整版本。
