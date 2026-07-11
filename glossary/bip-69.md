---
title: "BIP 69"
slug: bip-69
draft: false
shortDefinition: "建议对输入和输出进行规范排序以减少延展性并增强隐私，但并非强制。"
keyTakeaways:
  - "确定性地排序输入/输出"
  - "旨在减少导致延展性的随机因素"
  - "可选实践——部分钱包采用，非全部"
sources: []
relatedTerms:
  - batch-transaction
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - transaction
  - transaction-fee
liveWidget: ~
---

[BIP-69](https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki)提议了交易输入和输出的规范确定性排序：

- **输入：**按源 txid（字典序升序）排序，然后按输出索引。
- **输出：**按金额（升序）排序，然后按 scriptPubKey 字典序。

目标是让来自兼容 BIP-69 钱包的交易在结构上看起来完全相同，无论钱包最初如何构建它们——减少链上分析师的钱包指纹识别机会。

隐私逻辑：每个钱包在构建交易时有自己的癖好。有些按价值排序输入；有些保留 UTXO 选择顺序；有些随机化。每种模式都是一个指纹。如果你能从交易结构识别钱包，你就开始识别用户。BIP-69 标准化结构使这更难。

BIP-69 **不是**共识规则。它是钱包级别的可选约定。一些钱包（Wasabi、某些情况下的 Bitcoin Core）遵循它；其他不遵循。实际隐私收益存在争议：

- **支持：**遵循 BIP-69 的钱包看起来彼此相似而非像自己。更大的匿名集。
- **反对：**不遵循的钱包更突出。而且 BIP-69 有自己的指纹（确定性排序本身就是一种模式）。
- **新观点：**一些研究表明随机化输出排序（或更激进地洗牌）实际上比任何确定性方法对隐私更好。

截至 2026 年社区尚未完全确定正确答案。BIP-69 是有用的参考点，但大多数现代注重隐私的钱包做更细致的事情。参见[地址聚类](/glossary/address-clustering)了解这是其中一小部分的更广泛链上分析问题。
