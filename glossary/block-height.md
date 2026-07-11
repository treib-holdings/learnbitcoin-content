---
title: "区块高度"
slug: block-height
draft: false
shortDefinition: "自创世区块（高度 0）以来的区块计数。"
keyTakeaways:
  - "从原始创世区块开始计数"
  - "用于引用区块链中的特定位置"
  - "对与区块间隔相关的协议事件至关重要"
sources: []
relatedTerms:
  - bip-30
  - bip-34
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-header
  - block-propagation
  - block-time
  - blockchain
  - difficulty-retargeting
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
sameAs:
  - "https://en.bitcoin.it/wiki/Confirmation"
liveWidget: ~
---

区块高度是任何给定区块与[创世区块](/glossary/genesis-block)之间的区块数，创世区块位于高度 0。区块 1 比创世高一个。区块 840,000——最近一次[减半](/glossary/halving-halvening)发生处——比创世高 840,000。

高度是引用比特币历史中某个点的标准方式。时间戳不精确（矿工在窗口内控制自己的时钟）。日期取决于日历惯例。但区块高度是整数、单调的，对网络上的每个节点都相同。

比特币的大多数协议级事件按高度而非日期调度：

- **[减半](/glossary/halving-halvening)**在高度 210,000、420,000、630,000 等处发生（每 210,000 个区块）。
- **[难度重定向](/glossary/difficulty-retargeting)**在 2,016 的倍数高度处发生。
- **软分叉**（Taproot、SegWit、BIP-66 等）在达到目标高度或信号阈值在重定向窗口中清除时激活。

如果你想要一个定位"比特币现在在发生什么"的单一数字，就是当前区块高度。参见 [Node 页面](/node/)获取实时当前高度。
