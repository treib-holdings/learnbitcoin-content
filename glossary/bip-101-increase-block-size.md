---
title: "BIP 101（增大区块大小）"
slug: bip-101-increase-block-size
draft: false
shortDefinition: "Gavin Andresen 2015 年提出的从未激活的提案，将比特币区块大小上限提高到 8 MB 并每两年翻倍。"
keyTakeaways:
  - "提议从 2016 年 1 月起将区块大小设为 8 MB，每两年翻倍直至 2036 年"
  - "需要在 1000 个区块窗口内获得 75% 矿工信号；从未达到阈值"
  - "在 Bitcoin XT 客户端中发布；2015-2017 年区块大小战争的开局之举"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-102-2mb-block-size
  - bitcoin-cash
  - block-size
  - fork
  - segwit-segregated-witness-bip-141
liveWidget: ~
---

BIP 101 由 Gavin Andresen 于 2015 年 6 月起草，提出了一个动态区块大小时间表：2016 年 1 月 11 日将上限从 1 MB 提高到 8 MB，然后每两年翻倍直至 2036 年，最终约 8 GB。激活需要在滚动 1000 个区块窗口内获得 75% 的矿工信号。

它从未激活。该提案在 Bitcoin XT（Andresen 和 Mike Hearn 的 Bitcoin Core 分叉）中发布，短暂吸引了一些矿工支持，但在几个月内失去了动力。75% 的阈值从未接近达成。

BIP 101 是 2015-2017 年区块大小战争的开局之举。阵线很快就清晰了。支持者认为 1 MB 上限在扼杀采用，直接的链上扩容是最简单的解决方案。反对者认为硬分叉区块大小会引发争议性链分裂，激进的扩容压力会中心化节点运营（更大的区块意味着更多带宽和存储），而更好的技术方案（交易延展性修复、见证隔离、二层协议）已接近就绪。

实际发布的是 [SegWit（BIP 141）](/glossary/segwit-segregated-witness-bip-141)，2017 年 8 月作为软分叉激活。SegWit 以软分叉方式实现了 1.7-2 倍的有效容量提升，修复了交易延展性（解锁闪电网络），且不需要全员协调。拒绝 SegWit的大区块支持者在当月分叉为 Bitcoin Cash，最终采用了 8 MB 的区块上限。

BIP 101 现在读起来像一条未走的路。技术优点和政治动态都是真实的；双方都有善意持合理立场的人。结果是比特币选择了保守的基础层扩容加上激进的二层开发，而替代路径作为独立链并行运行。近十年后，比特币的区块大小未变；吞吐量的重活由闪电网络承担。

规范：[BIP-101](https://github.com/bitcoin/bips/blob/master/bip-0101.mediawiki)。

参见[区块大小战争](/rabbit-hole/block-size-war)了解 BIP-101 开启战斗后发生的事情。
