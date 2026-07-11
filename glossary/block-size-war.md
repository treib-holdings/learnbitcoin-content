---
title: "区块大小战争"
slug: block-size-war
draft: false
published: "2026-06-29"
updated: "2026-07-07"
shortDefinition: "2015-2017 年关于是否提高比特币 1 MB 区块大小上限的争斗。大区块方想要更大区块以实现更便宜的链上支付；小区块方想保持小区块并通过分层扩容。小区块获胜，失败方分叉为 Bitcoin Cash。"
keyTakeaways:
  - "争斗与其说是关于一个兆字节的数字，不如说是关于谁有权改变比特币的规则：矿工和大公司，还是运行自己节点的用户"
  - "SegWit 于 2017 年 8 月作为软分叉激活，没有大区块阵营想要的区块大小增加；原定随后进行的 SegWit2x 硬分叉在 11 月被取消"
  - "运行全节点的经济多数——而非矿工也非公司——拥有最终决定权，这一先例此后主导了每次比特币升级"
sources:
  - { label: "Jonathan Bier - The Blocksize War: The Battle for Control Over Bitcoin's Protocol Rules (2021)", url: "https://www.goodreads.com/book/show/57429394-the-blocksize-war" }
  - { label: "Bitcoin Magazine - Segregated Witness Activates on Bitcoin (2017)", url: "https://bitcoinmagazine.com/technical/segregated-witness-activates-bitcoin-what-expect" }
  - { label: "CoinDesk - 2x Called Off: Bitcoin Hard Fork Suspended for Lack of Consensus (2017)", url: "https://www.coindesk.com/markets/2017/11/08/2x-called-off-bitcoin-hard-fork-suspended-for-lack-of-consensus" }
relatedTerms:
  - block-size
  - bip-101-increase-block-size
  - segwit-segregated-witness-bip-141
  - bip-148-uasf
  - new-york-agreement-nya
  - segwit2x
  - bitcoin-cash
  - bitcoin-governance
liveWidget: ~
---

2015 年 8 月到 2017 年 11 月间，比特币差点因每个区块可容纳多少数据的 1 兆字节上限而撕裂。中本聪在 2010 年添加了该限制作为反垃圾措施。到 2015 年区块开始填满，手续费攀升，社区无法就如何处理达成一致。

大区块方想提高上限使更多交易能上链且手续费保持低廉。他们的理由是比特币应该作为廉价的数字现金工作，更大的[区块大小](/glossary/block-size)是显然的修复。阵营包括 Gavin Andresen、Mike Hearn、Roger Ver 和以 Bitmain 吴忌寒为首的大型挖矿运营。他们发布了旨在替代 [Bitcoin Core](/glossary/bitcoin-core)并提高上限的竞争软件：2015 年的 Bitcoin XT，然后是 2016 年的 Bitcoin Classic 和 Bitcoin Unlimited。旗舰提案是 [BIP-101](/glossary/bip-101-increase-block-size)，直接跳到 8 MB。

小区块方想保持上限不变。他们论辩大区块使运行[全节点](/glossary/full-node)更昂贵，将普通用户推离网络并集中控制到少数数据中心。他们偏好分层扩容：提高基础链的数据效率，然后将交易量移到其上构建的系统如[闪电网络](/glossary/lightning-network)。大多数 Bitcoin Core 开发组在这个阵营。

[SegWit](/glossary/segwit-segregated-witness-bip-141)是小区块方的前进路径。它是一个[软分叉](/glossary/soft-fork)，修复了交易延展性，将有效容量提高到约 400 万 weight units 而无需硬分叉，并为闪电网络扫清了道路。但它需要 95% 的矿工[信号](/glossary/miner-signaling)支持，而与大区块阵营结盟的矿工拒绝信号。

僵局在 2017 年从两个方向的压力下打破。3 月，一位匿名开发者发布了 [BIP-148](/glossary/bip-148-uasf)，一种用户激活的软分叉。从 2017 年 8 月 1 日起，运行它的节点将拒绝任何不信号 SegWit 的区块，无论矿工是否配合。5 月，一群公司和矿池签署了[纽约协议](/glossary/new-york-agreement-nya)，一项被称为 [SegWit2x](/glossary/segwit2x) 的协议，承诺先激活 SegWit 然后约三个月后硬分叉到 2 MB 区块。Bitcoin Core 开发者未参与该协议，许多用户将其视为接管协议的后室尝试。

随着旗帜日临近和[链分裂](/glossary/chain-split)摆在桌面上，矿工在 7 月通过妥协机制（BIP-91）激活了 SegWit。矿工信号在 8 月初跨过阈值，SegWit 于 2017 年 8 月 24 日在区块 481,824 处上线。

仍想要更大区块的派系在 8 月 1 日分叉为 [Bitcoin Cash](/glossary/bitcoin-cash)。SegWit2x 的后半部分——2 MB 硬分叉——原定 11 月进行，后因缺乏共识于 11 月 8 日取消。

这场战争解决了一个比区块大小更大的问题。规则的最终决定权属于运行全节点的人——经济多数——而非矿工或签署协议的公司。这是[比特币治理](/glossary/bitcoin-governance)的核心主张，区块大小战争是在真实条件下测试它的案例研究。

参见[区块大小战争](/rabbit-hole/block-size-war)了解完整故事，从 Bitcoin XT 到 UASF 到离开的分叉。
