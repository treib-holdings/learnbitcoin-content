---
title: "聪（Satoshi，单位）"
slug: satoshi-unit
draft: false
shortDefinition: "比特币的最小单位：1 聪 = 0.00000001 BTC（1 亿聪 = 1 BTC）。"
keyTakeaways:
  - "比特币账本的基本单位，简化小额金额"
  - "在闪电网络或微交易场景中常用"
  - "讨论 BTC 日常计单位的核心部分"
sources:
  - { label: "Bitcoin Units rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/bitcoin-units" }
relatedTerms:
  - bitcoin-pizza-day
  - satoshi-nakamoto
  - transaction
liveWidget: ~
---

一聪（sat）是比特币的最小单位。**1 BTC = 100,000,000 聪。** 聪以下没有了——链上，比特币不可进一步分割。（[闪电网络](/glossary/lightning-network)内部以毫聪操作以实现更精细的路由精度，但那些不存在于基础链上。）

以 [Satoshi Nakamoto](/glossary/satoshi-nakamoto) 命名，聪是协议层面的整数单位。在内部，Bitcoin Core 以聪为单位跟踪所有余额和金额。"BTC"是聪数除以 100,000,000 的人类可读渲染。

在 2026 年的钱包文化中，聪越来越多地成为日常语境中谈论比特币的默认单位：

- **闪电网络余额**几乎普遍以聪显示。
- **费率**始终以每虚拟字节聪数（sat/vB）报价。
- **囤币文化**用"stacking sats"（堆聪）作为积累 BTC 的标准用语。
- **小费和小额支付**以聪计价——"1,000 聪"比"0.00001 BTC"更易读。
- **Nostr zaps**，运行在闪电网络上，完全以聪报价。

一个有用的心理锚点：当 BTC 价格达到 $1,000,000 时（许多人在十到二十年内预期），**1 聪 = $0.01**。聪成为比特币的日常"分"。这种趋同是聪越来越成为自然单位的原因，即使对不深入闪电文化的用户也是如此。

参见 [Bitcoin Units rabbit hole](/rabbit-hole/bitcoin-units) 了解完整单位刻度和中间单位（mBTC、µBTC、Finney）的位置。
