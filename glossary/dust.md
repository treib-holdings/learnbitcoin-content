---
title: "粉尘（Dust）"
slug: dust
draft: false
shortDefinition: "UTXO 中极小量的 BTC，通常低于经济花费所需的手续费。"
keyTakeaways:
  - "花费成本超过其价值的小输出"
  - "在网络手续费低时可以通过合并清理"
  - "潜在的隐私攻击媒介（'粉尘攻击'）"
sources: []
relatedTerms:
  - address-reuse
  - discard-threshold
  - dust-attack
  - dust-limit
  - dust-sweeping
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

粉尘是一个小到花费它的手续费超过其价值的 [UTXO](/glossary/utxo-unspent-transaction-output)。没有固定的粉尘阈值；它取决于你想花费时的手续费率。

粗略规则：在 10 sat/vB 下，花费一个典型的 P2WPKH 输入约需 680 聪手续费。任何小于此的 UTXO 现在就是粉尘。在 50 sat/vB 下，任何小于约 3,400 聪的都是粉尘。粉尘是网络条件的函数，不是固定数字。

粉尘从哪来：

- **找零剩余。** 一笔支付 X 并有 Y-X-fee 找零的交易偶尔会留下小到算作粉尘的找零。
- **水龙头和空投。** 促销投放通常是粉尘。
- **[粉尘攻击](/glossary/dust-attack)。** 攻击者向许多地址发送少量，希望接收者后来将这些粉尘输出与其他 UTXO 合并在一笔交易中——这公开链接了地址并帮助攻击者映射钱包。

Bitcoin Core 执行最低**粉尘阈值**，低于此阈值完全不中继交易——目前旧版输出为 546 聪，SegWit 更低。低于阈值的输出被视为非标准且不传播。高于阈值但经济上仍是粉尘的可以创建，只是花费昂贵。

如果你有粉尘，正确的做法通常是等待。当手续费降至 1-2 sat/vB 时（空闲期确实会发生），你可以通过[合并](/glossary/consolidation-transaction)将许多粉尘 UTXO 扫入一个更大的输出。只是要注意：合并粉尘链接了涉及的地址，所以要有意为之，而非随意操作。
