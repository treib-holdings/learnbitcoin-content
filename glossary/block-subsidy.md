---
title: "区块奖励"
slug: block-subsidy
draft: false
shortDefinition: "矿工区块奖励中新铸造的 BTC 部分，每 210,000 个区块减半。"
keyTakeaways:
  - "起始为每区块 50 BTC，约每四年减半"
  - "确保最大供应量为 2100 万 BTC"
  - "与手续费结合维持矿工长期激励"
sources: []
relatedTerms:
  - asymptote
  - bip-42
  - block
  - block-reward
  - block-size
  - coinbase-transaction
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - mining-subsidy
sameAs:
  - "https://en.bitcoin.it/wiki/Controlled_supply"
liveWidget: ~
---

区块奖励是矿工向链上添加有效区块后收到的新的比特币。它是新 BTC 进入流通的*唯一*机制——曾经存在的每个比特币最初都是作为区块奖励支付的。

目前奖励为**每区块 3.125 BTC**，在 2024 年 4 月减半后设定。约 2028 年 4 月将再次减半至 1.5625 BTC，并每 210,000 个区块继续减半，直到约 2140 年奖励取整为零。

奖励通过 [coinbase 交易](/glossary/coinbase-transaction)支付——每个区块开头的特殊交易，没有输入，向矿工支付协议允许的金额。如果矿工试图向自己支付超过协议定义的奖励加收集的手续费，网络上其他每个节点都会拒绝该区块。2100 万上限就是这样逐块执行的，由地球上每个全节点执行。

奖励与交易手续费一起构成[区块总奖励](/glossary/block-reward)——矿工找到区块获得的总补偿。如今手续费通常占总数的 3-10%。到 2140 年，手续费将是 100%。参见[挖矿 rabbit hole](/rabbit-hole/mining)了解完整版本，或[减半 rabbit hole](/rabbit-hole/halvings)了解每次奖励削减何时发生。
