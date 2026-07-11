---
title: "BIP 91"
slug: bip-91
draft: false
shortDefinition: "2017 年扩容辩论中 SegWit 激活阶段的信号协调方法。"
keyTakeaways:
  - "SegWit 信号协调工具"
  - "2017 年纽约协议的一部分"
  - "帮助在争议中完成 SegWit 激活"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bip-148-uasf
  - bitcoin-core
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

[BIP-91](https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki)是 2017 年 8 月激活 [SegWit](/glossary/segwit-segregated-witness-bip-141)的矿工协调机制，化解了即将与 [BIP-148 (UASF)](/glossary/bip-148-uasf)发生的链分裂对抗。

僵局背景：SegWit 已准备好一年。[BIP-9](/glossary/bip-9-versionbits)信号阈值（95%）无法达到，因为少数矿工坚持不信号。UASF 人群正准备从 2017 年 8 月 1 日起单方面强制执行 SegWit，这将孤立不信号的区块并可能分裂链。

BIP-91 是妥协方案。由 James Hilliard 撰写，作为"SegWit2x"/纽约协议努力的一部分被矿工采纳，它降低了激活阈值并强制快速协调：

1. **80% 阈值**（低于 BIP-9 的 95%）用于 SegWit 信号。
2. **强制性的。**一旦在 336 个区块窗口内达到 80%，*所有*矿工必须继续信号 SegWit，否则其区块被孤立。
3. **快速部署。**2017 年 7 月中旬锁定，8 月激活。

这实际达成了什么：

- **SegWit 在 BIP-148 的 8 月 1 日截止日期前约 10 天干净激活。**没有链分裂，没有大规模孤块。
- **展示了矿工对用户压力的响应。**UASF 的可信威胁移动了一年多来一直拒绝的矿工。
- **"SegWit2x"硬分叉部分后来被放弃**，因为用户对矿工想要的 2MB 区块大小硬分叉没有胃口。"2x"从未发生。

BIP-91 是一份小巧的技术文档，但历史重要性巨大。它是僵局与成功升级之间的桥梁，也是确立现代"用户持有杠杆而非矿工"比特币治理框架的时刻。

参见[区块大小战争](/rabbit-hole/block-size-war)了解 BIP-91 化解的对峙。
