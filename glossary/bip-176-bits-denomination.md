---
title: "BIP 176（Bits 面额）"
slug: bip-176-bits-denomination
draft: false
shortDefinition: "提议使用 'bits'（1 µBTC）作为较小比特币面额的用户友好单位。"
keyTakeaways:
  - "主张使用微比特币（'bits'）表示日常金额"
  - "旨在减少小数点的混淆"
  - "未被广泛采用，但体现了对用户体验的关注"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - satoshi-unit
liveWidget: ~
---

[BIP-176](https://github.com/bitcoin/bips/blob/master/bip-0176.mediawiki)提议使用"bits"作为比特币的标准小面额单位。**1 bit = 1 微比特币（µBTC）= 100 [聪](/glossary/satoshi-unit) = 0.000001 BTC。**

理由：随着 BTC 价格上涨，表示日常金额所需的小数位变得不便（"0.0001 BTC 买杯咖啡"难以阅读）。Bits 提供了一个在 2010 年代典型价格下大致相当于一美分的单位，使小金额更直观。

十年后的现实：**bits 输给了 sats。** 比特币社区很大程度上收敛到以聪作为小金额的选择单位，"stacking sats"（囤聪）等说法已成为文化符号。Bits 确实有过一些采用（Coinbase 曾短暂使用；一些钱包继续支持作为显示选项），但从未成为主流。

"bits"框架存活的地方：

- **少数钱包**仍提供它作为显示单位选项。
- **较旧的 [BIP](/glossary/bip-bitcoin-improvement-proposal)引用**继续提到它。
- **教育性比较**有时使用 bits 在 BTC 和聪的数量级之间架桥。

对于 2026 年的大多数用户，可以安全地使用两个单位思考：大额用 **BTC**，小额用**聪**。Bits 存在但主要是历史趣闻。参见 [Bitcoin Units rabbit hole](/rabbit-hole/bitcoin-units)了解完整单位刻度。
