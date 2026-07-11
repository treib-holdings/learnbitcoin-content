---
title: "BIP 102（2MB 区块大小）"
slug: bip-102-2mb-block-size
draft: false
shortDefinition: "一个将比特币区块大小增加到 2 MB 的短命提案，反映了早期的扩容争议。"
keyTakeaways:
  - "直接将区块大小翻倍的提案"
  - "因围绕 SegWit 的共识而从未实施"
  - "反映了早期激烈的扩容争议"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block
  - block-size
  - fork
  - soft-fork
liveWidget: ~
---

BIP 102 由 Jeff Garzik 于 2015 年起草，是最小可能的扩容提案：在固定旗帜日高度将最大区块大小从 1 MB 改为 2 MB。没有见证折扣，没有软分叉技巧，只是一个稍大区块的硬分叉。

它从未激活。社区选择了 [SegWit（BIP 141）](/glossary/segwit-segregated-witness-bip-141)取而代之，后者以软分叉方式实现了 1.7-2 倍的有效容量提升，修复了交易延展性，解锁了闪电网络。想要干净容量提升（且原则上拒绝 SegWit）的大区块支持者在 2017 年 8 月分叉为 Bitcoin Cash。

近十年后，"比特币如何扩容"的答案没有变：SegWit 和 Taproot 用于基础层效率，闪电网络用于高吞吐支付，以及刻意拒绝通过增大区块来追求吞吐量。BIP 102 是未走的路，也是为什么不走这条路的有用参考。

规范：[BIP-102](https://github.com/bitcoin/bips/blob/master/bip-0102.mediawiki)。
