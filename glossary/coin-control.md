---
title: "币控制"
slug: coin-control
draft: false
shortDefinition: "一种钱包功能，允许用户手动选择花费哪些 UTXO，有助于隐私和手续费优化。"
keyTakeaways:
  - "允许精确选择特定 UTXO 进行交易"
  - "通过限制不必要的输入合并来改善隐私"
  - "可以优化手续费并避免粉尘堆积"
sources: []
relatedTerms:
  - address-clustering
  - bitcoin-days-destroyed
  - bitcoin-vault
  - clawback-mechanism
  - coin-age
  - coin-freeze
  - coinjoin
  - deterministic-wallet
  - difficulty
  - security
  - utxo-unspent-transaction-output
  - vanity-address
  - wallet
liveWidget: ~
---

币控制是让你在构建[交易](/glossary/transaction)时手动选择花费哪些 [UTXO](/glossary/utxo-unspent-transaction-output) 的钱包功能，而不是让钱包自动选择。这就像从你的物理钱包中刻意挑选特定的纸币来完成一笔交易。

为什么币控制很重要：

- **隐私。** [地址聚类](/glossary/address-clustering)启发式依赖于共同输入假设：同一交易中花费的所有 UTXO 属于同一所有者。通过手动选择合并哪些 UTXO，你可以避免链接你宁愿保持独立的地址。
- **手续费。** 更少的输入 = 更小的交易 = 在任何给定的 sat/vB 下更低的手续费。如果你有很多小 UTXO 和一个大 UTXO，有时只花费大的那个要便宜得多。
- **粉尘管理。** 你可以在低手续费期间有意合并小 UTXO（[粉尘](/glossary/dust)），或避免将它们与你不想链接到粉尘来源的有价值 UTXO 合并。
- **资金来源标记。** 如果你按来源标记了 UTXO（KYC 与非 KYC、商业与个人），你可以选择性地从适当的桶中花费而不交叉。

基本操作：

1. 钱包将你的 UTXO 显示为单独的行项，包含金额、地址和（有时）标签。
2. 你手动选择在当前交易中花费哪些。
3. 钱包只使用那些作为输入。

很好地暴露币控制功能的钱包：Sparrow、Bitcoin Core、Electrum、Specter Desktop、Nunchuk。大多数移动钱包默认隐藏它以保持简单。

一般建议：如果你关心隐私或手续费优化，学会使用币控制。如果你把比特币当作日常零花钱使用，自动选择默认值就好。当你需要时，控制功能就在那里。

底层概念参见 [UTXO](/glossary/utxo-unspent-transaction-output)，此功能解决的隐私问题参见[地址聚类](/glossary/address-clustering)。
