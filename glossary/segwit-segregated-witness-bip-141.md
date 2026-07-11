---
title: "SegWit（隔离见证，BIP 141）"
slug: segwit-segregated-witness-bip-141
draft: false
shortDefinition: "隔离见证的主要 BIP，将见证数据分离出来，修复了延展性问题，并有效提升了区块容量。"
keyTakeaways:
  - "将见证数据从主区块中分离出来"
  - "解决延展性问题，提升容量"
  - "为闪电网络等二层方案铺平道路"
sources: []
relatedTerms:
  - bech32m
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - p2sh
  - bip-91
  - bip-144-segwit-relay
  - bip-148-uasf
  - taproot
  - bip-342-tapscript
  - native-segwit
  - p2sh-p2wsh-nested-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://en.bitcoin.it/wiki/Segregated_Witness"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://bitcoinops.org/en/topics/segregated-witness/"
liveWidget: ~
legacyTitle: "BIP 141 (SegWit)"
---

SegWit（**Seg**regated **Wit**ness，隔离见证）是 2017 年 8 月在比特币上激活的软分叉，定义于 [BIP-141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki)。它重构了比特币[交易](/glossary/transaction)存储签名数据的方式，一次性解决了多个问题。

核心变化：签名数据（"见证数据"）被从交易主体中移出，放入一个单独的结构中。该结构仍在区块内，但不计入原始的 1 MB 区块大小限制。取而代之的是，区块以**权重单位**重新定义，每个区块最多 400 万权重单位。见证数据每字节 1 权重单位；非见证数据每字节 4 权重单位。这在不硬分叉的情况下 effectively 将容量大约翻了一倍。

SegWit 修复了什么：

- **交易延展性。** SegWit 之前，[txid](/glossary/transaction) 是对包含签名的完整交易计算的，而签名是可延展的。第三方可以在不使交易无效的情况下改变交易的外观（及其 txid）。这破坏了未确认交易链，使得二层协议几乎无法安全构建。SegWit 将见证数据排除在 txid 计算之外，因此 txid 从交易签名那一刻起就是稳定的。
- **区块容量。** 有效区块大小从约 1 MB 增加到最高约 4 MB（混合交易类型的典型使用下约 2 MB）。
- **未来升级。** SegWit 引入了见证数据的版本化方案，使 [Taproot](/glossary/taproot)（见证版本 1）后来能以干净的软分叉方式添加。

2017 年的激活在政治上极为爆炸性——它出自持续多年的"扩容战争"，一方想要更大的原始区块大小，另一方想要二层扩容。大区块方最终分叉为比特币现金。剩下的比特币社区保留了 SegWit 和分层扩容路线图，而依赖稳定 txid 的[闪电网络](/glossary/lightning-network)在此后不久变得可行。

初期采用通过 P2SH 包装变体得以推进——[P2SH-P2WPKH 和 P2SH-P2WSH](/glossary/p2sh-p2wsh-nested-segwit)——让接收方在发送方已经熟悉的 `3...` 地址背后收集 SegWit 的好处。到 2019-2020 年，大多数钱包已迁移到[原生 SegWit](/glossary/native-segwit)（`bc1q...`），包装变体成为遗留方案。

到 2026 年，绝大多数新的比特币输出是 SegWit 或 Taproot。SegWit 之前的遗留输出仍然存在，但正在被逐步花费。
