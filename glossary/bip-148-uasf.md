---
title: "BIP 148（UASF）"
slug: bip-148-uasf
draft: false
shortDefinition: "一种用户激活的软分叉，通过在截止日期后拒绝不信号 SegWit 的区块来推动 SegWit 激活。"
keyTakeaways:
  - "节点在一定时间后拒绝不信号 SegWit 的区块"
  - "展示了节点驱动的共识力量"
  - "帮助在 2017 年最终完成 SegWit 激活"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bitcoin-core
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0148"
  - "https://en.bitcoin.it/wiki/Softfork"
liveWidget: ~
---

[BIP-148](https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki)是用户激活的软分叉（UASF）提案，在 2017 年年中结束了长达数年的 [SegWit](/glossary/segwit-segregated-witness-bip-141)激活僵局。这是比特币治理历史上最重要的事件之一。

背景：SegWit 获得了开发者、交易所、商家的广泛支持，以及明显多数[节点](/glossary/node)的支持——但相当一部分矿工拒绝在 [BIP-9](/glossary/bip-9-versionbits)下信号。僵局持续了一年多。一些矿工想要让步（特别是更大的区块大小）；另一些只是在运行可以利用一种叫 [AsicBoost](/glossary/asicboost)的隐式优化的挖矿硬件，而 SegWit 会破坏这种优化。

BIP-148 的提案，由 Shaolinfry 撰写：从 2017 年 8 月 1 日起，兼容 BIP-148 的节点将*拒绝*任何不信号 SegWit 的区块。如果足够多的节点运行此软件，矿工要么信号 SegWit，要么其区块被经济多数节点孤立。

实际发生的事情：

- **BIP-148 的威胁是可信的。**主要交易所、商家和节点运营商表示了运行它的意图。
- **矿工让步了。**在 8 月 1 日截止日期之前，矿工同意激活 [BIP-91](/glossary/bip-91)，该提案在不分裂链的情况下强制 SegWit 信号。SegWit 不久后锁定，8 月底激活。
- **链没有分裂（在比特币这边）。**争议确实催生了 Bitcoin Cash 作为独立的山寨币，但比特币本身保持为一条链。

教训：**节点——而非矿工——是比特币规则的最终权威。**矿工可以拒绝信号，但他们无法强迫网络接受经济多数节点会拒绝的区块。BIP-148 在实践中确立了这一原则。此后的每次激活讨论都会引用它。

参见[区块大小战争](/rabbit-hole/block-size-war)了解使用户反抗成为必要的两年僵局。
