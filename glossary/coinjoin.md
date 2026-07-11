---
title: "CoinJoin"
slug: coinjoin
draft: false
shortDefinition: "一种隐私方法，将多个用户的输入合并到一笔交易中，使外部观察者无法分辨哪些输出属于哪些输入。"
keyTakeaways:
  - "在单笔交易中混合多个输入/输出"
  - "削弱地址之间的确定性链接"
  - "并非完美隐私但比标准转账有显著改善"
sources: []
relatedTerms:
  - address-clustering
  - address-reuse
  - chain-analysis
  - coin-control
  - mixing-service
  - payjoin
  - shielded-coinjoin
  - stealth-address
sameAs:
  - "https://en.bitcoin.it/wiki/CoinJoin"
  - "https://bitcoinops.org/en/topics/coinjoin/"
liveWidget: ~
---

CoinJoin 是一种打破[链上分析者](/glossary/chain-analysis)用于聚类[比特币地址](/glossary/address)的共同所有权假设的技术。多个用户将 [UTXO](/glossary/utxo-unspent-transaction-output) 贡献到一笔[交易](/glossary/transaction)中，产生等值的输出，这样外部观察者就无法分辨哪个输出属于哪个输入。

最简单的版本：五个参与者各贡献 0.1 BTC。交易有五个 0.1 BTC 的输出，每个参与者一个，发送到他们各自控制的新地址。在链上，任何输入与其对应输出之间的链接消失了——分析者最好的猜测是五分之一。

CoinJoin 确实有用，但也确实有局限。它通过将币与历史聚类分离来改善你的[可替代性](/glossary/fungibility)，但：

- **它不是魔法。** 启发式仍然能找到模式（不均匀的币值、特定的输出排序、混合后再花费的相关性）。高级分析者有时可以解混。
- **它只对混合中的特定输入和输出有效。** 钱包中的其他 UTXO 仍然被链接，除非你也混合它们。
- **交易本身是公开可见的。** 观察者知道你参与了 CoinJoin，即使他们无法分辨哪个输出是你的。一些托管方将 CoinJoined 币视为"污染币"——这是可替代性侵蚀的最糟糕形式。

实现格局在 2024 年发生了巨大变化。**Wasabi 的协调器**（由 zkSNACKs 运营）在 2024 年中期因监管压力而关闭。**Samourai Whirlpool** 在 2024 年 4 月其创始人被美国司法部以洗钱共谋罪起诉后下线。截至 2026 年，主要剩余的选择是去中心化的：**JoinMarket**（点对点协调，无中央运营商）和基于 Nostr 的新变体如 **Joinstr**。

[PayJoin](/glossary/payjoin) 是一种不同的、更小规模的方法，在不进行批量混合的情况下实现类似的隐私目标。

比特币上的隐私是可以实现的，但需要刻意的努力。CoinJoin 是一种工具；地址纪律、Tor、[闪电网络](/glossary/lightning-network)和避免 KYC 瓶颈是其他工具。
