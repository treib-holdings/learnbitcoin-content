---
title: "Coinbase 交易"
slug: coinbase-transaction
draft: false
shortDefinition: "每个区块中的第一笔交易，铸造新 BTC（区块补贴）并收集交易手续费。"
keyTakeaways:
  - "每个区块生成新铸造的 BTC"
  - "收集已包含交易的手续费"
  - "必须经过 100 个区块成熟后才能花费"
sources: []
relatedTerms:
  - block
  - block-reward
  - block-subsidy
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - miner
  - miner-capitulation
  - mining-pool
  - mining-subsidy
  - transaction
sameAs:
  - "https://en.bitcoin.it/wiki/Coinbase"
liveWidget: ~
---

Coinbase 交易是每个比特币区块中的第一笔交易。它是新发行的 BTC 进入流通的方式，也是比特币中唯一没有真实输入的交易类型。

找到有效区块的矿工构建 coinbase 交易来支付自己[区块奖励](/glossary/block-reward)：[区块补贴](/glossary/block-subsidy)（目前为 3.125 BTC）加上打包到区块中的每笔交易的手续费总和。coinbase 的"输入"是占位符；它不引用任何先前的 UTXO，因为没有花费任何先前的 UTXO。输出成为矿工拥有的新 UTXO。

两个值得注意的规则：

- **coinbase scriptSig 是自由格式字段。** 矿工可以在此填充任意数据。Satoshi 著名地在[创世区块](/glossary/genesis-block) coinbase 中放入了一条《泰晤士报》标题："The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."现代矿池使用它来标记矿池标签和 [BIP 34](/glossary/bip-34) 区块高度标记。
- **100 区块成熟期。** coinbase 输出在它们之上又挖出 100 个区块之前不能花费。这防止矿工花费可能在链重组中消失的新铸造币。

coinbase 是新 BTC 进入流通的唯一地方。今天存在的每一个聪最初都是在 coinbase 交易中支付的。当补贴在 2140 年左右降至零时，coinbase 交易将继续存在，只是只支付手续费。

完整挖矿流程参见[挖矿深入探讨](/rabbit-hole/mining)，发行计划参见[区块补贴](/glossary/block-subsidy)。
