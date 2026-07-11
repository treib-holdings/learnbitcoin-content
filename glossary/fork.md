---
title: "分叉（Fork）"
slug: fork
draft: false
shortDefinition: "区块链规则的变更——可以是'硬'（不兼容）或'软'（与先前规则兼容）。"
keyTakeaways:
  - "硬分叉可能导致永久性替代链"
  - "软分叉与旧客户端保持兼容"
  - "共识对避免链分叉至关重要"
sources: []
relatedTerms:
  - airdrop-btc-fork
  - alt-season
  - altcoin
  - bip-50
  - bip-102-2mb-block-size
  - bitcoin-cash
  - chain-flag-day
  - chain-split
  - consensus-parameter
  - fork-detection
  - fork-watcher
  - reorg-reorganization
  - replay-attack
sameAs:
  - "https://en.wikipedia.org/wiki/Fork_(blockchain)"
  - "https://www.wikidata.org/wiki/Q48893562"
  - "https://en.bitcoin.it/wiki/Fork"
liveWidget: ~
---

比特币中的"分叉"指共识规则的变更。有两种不同类型，区别很重要。

**[软分叉](/glossary/soft-fork)。** *收紧*规则。在旧规则下有效的区块在新规则下变得无效；在新规则下有效的区块在旧规则下仍然有效。未升级的旧节点仍将新区块视为合法，只是它们自身不执行新约束。向后兼容。比特币的标准升级方式。

例子：[SegWit](/glossary/segwit-segregated-witness-bip-141)（2017年）、[Taproot](/glossary/taproot)（2021年）、[BIP-65 CLTV](/glossary/bip-65-opchecklocktimeverify)、[BIP-68 CSV](/glossary/bip-68-relative-locktime)、[P2SH](/glossary/p2sh) 等。

**硬分叉。** *放宽或以其他方式破坏*规则。在新规则下有效的区块在旧规则下可能无效。旧节点拒绝新区块。不向后兼容。除非每个节点都升级，否则会创建永久的[链分叉](/glossary/chain-split)。

比特币历史中的例子：自 2010 年以来比特币的共识升级没有一个是硬分叉；社区一直选择软分叉。2017 年的"Bitcoin Cash"分叉是硬分叉重新品牌为山寨币，而非比特币本身的升级。

软分叉和硬分叉之间的不对称是比特币较安静的保守防御之一。软分叉可以在有广泛支持时逐步部署而不会中断。硬分叉在比特币上几乎不可能在不分裂网络的情况下部署——因此*需要*硬分叉的变更（例如更改 [2100 万上限](/glossary/asymptote)）实际上不可行。

"分叉"一词有时也令人混淆地用于*临时*分歧（两个矿工在同一高度找到区块），但那些最好被称为短暂的[重组](/glossary/reorg-reorganization)——网络在一两个区块内解决。
