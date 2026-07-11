---
title: "区块大小"
slug: block-size
draft: false
shortDefinition: "区块中允许的最大数据量，历史上为 1 MB，在 SegWit 的基于权重的规则下实际上更大。"
keyTakeaways:
  - "最初上限为 1 MB 以防止垃圾交易"
  - "SegWit 引入了最高 4M weight units 的权重系统"
  - "允许比严格 1 MB 限制更高的有效容量"
sources: []
relatedTerms:
  - bip-42
  - bip-102-2mb-block-size
  - block
  - block-reward
  - block-subsidy
  - blockchain
  - halving-halvening
  - merkle-root
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_scalability_problem"
  - "https://www.wikidata.org/wiki/Q30325190"
  - "https://en.bitcoin.it/wiki/Block_size_limit_controversy"
liveWidget: ~
---

区块大小是比特币最著名的共识参数。最初的 1 MB 硬上限（2010 年 7 月作为反垃圾措施引入）是多年争论的焦点，最终导致 2017 年的 [SegWit](/glossary/segwit-segregated-witness-bip-141)软分叉。当前规则不是以字节为单位的平面大小；而是 400 万 weight units 限制，非见证数据每字节 4 weight units，见证数据每字节 1。

实践中的效果：

- **典型区块大小**在磁盘上为 1.3 到 2.0 MB，取决于 SegWit/Taproot 交易的比例（它们享受见证折扣）。
- **硬上限**保持验证成本有界。普通笔记本可在几秒内验证每个区块；树莓派可以跟上链尖端。这是刻意的。更大的区块会推高节点运行成本并中心化验证者集。
- **区块权重限制**自 2017 年以来在政治上不可触碰。2015-2017 年的"区块大小战争"（见 [BIP 101](/glossary/bip-101-increase-block-size)和 [BIP 102](/glossary/bip-102-2mb-block-size)）以 SegWit 软分叉加 Bitcoin Cash 硬分叉告终；幸存的比特币社区确定了"区块保持小，扩容通过闪电网络在链下进行"。

它不是什么：

- 不再是 1 MB。任何人在 2026 年引用"比特币的 1 MB 区块"都在使用过时信息。
- 不是字面上的字节限制。Weight units 框架很重要，因为它改变了 SegWit 与传统交易的经济学。

区块大小问题在可预见的未来已经解决。实质性的吞吐量辩论已转移到闪电通道设计、支付路由效率和 Taproot 脚本优化，而非链上容量。

参见[区块大小战争](/rabbit-hole/block-size-war)了解此限制如何成为两年治理斗争的中心。
