---
title: "渐近线"
slug: asymptote
draft: false
shortDefinition: "一条曲线无限接近但永远无法达到的值。比特币的供应量渐近于 20,999,999.9769 BTC；其通胀率渐近于零。"
keyTakeaways:
  - "比特币总供应量接近但永远无法精确达到 21,000,000 BTC"
  - "由于聪级整数取整，真正的渐近线是 20,999,999.9769 BTC"
  - "比特币的年通胀率在 2140 年左右渐近于零"
sources:
  - { label: "Supply Schedule rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/supply" }
relatedTerms:
  - block-subsidy
  - disinflation
  - halving-halvening
  - inflation
  - mining-subsidy
  - satoshi-unit
liveWidget: ~
---

在数学中，渐近线是一个函数随着某个变量趋于无穷而越来越接近但不曾触及的值。曲线 `1/x` 是经典例子：随着 x 增大，值无限接近零但永远不到达那里。

比特币的货币政策中内置了两个著名的渐近线。

**供应量渐近线。** 比特币的总供应量是所有已支付[区块奖励](/glossary/block-subsidy)的总和。奖励从每个区块 50 BTC 开始，每 210,000 个区块（一次[减半](/glossary/halving-halvening)）减半。这个几何级数在极限下*精确*求和为 21,000,000 BTC。但实际上奖励以聪为单位支付（整数单位；10^-8 BTC），每次减半除以 2 并进行整数截断。经过 33 次减半后，每区块奖励取整为零聪并永远保持不变。此时总共发行了 **20,999,999.9769 BTC**——刚好低于整数。这就是比特币真正的供应量渐近线。你在各处看到的"2100 万"是它的营销友好型四舍五入。

**通胀率渐近线。** 比特币的年新增发行率（[奖励](/glossary/block-subsidy) × 每年区块数 / 流通供应量）目前约为 0.83%。每次减半大约将其减半。2028 年减半后降至约 0.4%。2032 年后约 0.2%。该函数趋向零，在 2140 年左右达到亚聪级别。从那时起，不再有新 BTC 进入流通；矿工只赚取[交易手续费](/glossary/fee-estimation)。比特币成为人类历史上第一个具有数学固定零通胀稳态的主要货币资产。

这两个渐近线都是[中本聪](/glossary/satoshi-nakamoto)刻意选择的。它们不是粗心代码的产物；它们是写入协议的货币政策承诺。没有中央权威可以在不分叉网络的情况下改变它们，而反对这样做的经济激励是压倒性的——比特币对其持有者的价值恰恰来自这些曲线是固定且可验证的这一事实。

渐近线使比特币在数学意义上——而不仅仅是修辞意义上——成为固定供应量资产。参见[反通胀](/glossary/disinflation)了解利率趋势的详细内容，[供应量时间表 rabbit hole](/rabbit-hole/supply)了解完整数学。
